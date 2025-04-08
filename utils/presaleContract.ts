import * as anchor from '@project-serum/anchor';
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import BN from 'bn.js';

// Helper to safely create PublicKey objects
const safePublicKey = (address?: string): PublicKey => {
  // A valid dummy Solana address to use as fallback (all zeros)
  const FALLBACK_ADDRESS = '11111111111111111111111111111111';
  
  // Only create PublicKey if it appears to be a valid base58 string
  if (address && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) {
    try {
      return new PublicKey(address);
    } catch (error) {
      console.warn(`Invalid public key: ${address}. Using fallback.`);
      return new PublicKey(FALLBACK_ADDRESS);
    }
  }
  
  return new PublicKey(FALLBACK_ADDRESS);
};

// Constants - use safePublicKey to avoid errors with placeholder values
export const PRESALE_PROGRAM_ID = safePublicKey(process.env.NEXT_PUBLIC_PRESALE_PROGRAM_ID);
export const TREASURY_WALLET = safePublicKey(process.env.NEXT_PUBLIC_TREASURY_WALLET);
export const TOKEN_MINT = safePublicKey(process.env.NEXT_PUBLIC_TOKEN_MINT);

// Presale configuration
export const PRESALE_CONFIG = {
  presaleStartTime: new Date().getTime(), // Start immediately
  presaleEndTime: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).getTime(), // 30 days from now
  tokenPrice: 0.05, // In USD
  solPriceUSD: 60, // Example SOL price in USD (would be fetched from an API in production)
  minPurchaseUSD: 50,
  maxPurchaseUSD: 20000,
  softCapUSD: 500000,
  hardCapUSD: 2000000,
  vestingPercentageImmediate: 30, // 30% available immediately
  vestingDurationMonths: 3 // Remaining 70% vested over 3 months
};

// Types
export interface PresaleState {
  isActive: boolean;
  totalRaised: number;
  participantCount: number;
  remainingAllocation: number;
  hardCapReached: boolean;
}

export interface PurchaseReceipt {
  txSignature: string;
  solAmount: number;
  tokenAmount: number;
  timestamp: number;
  vestingInfo: {
    immediateAmount: number;
    vestedAmount: number;
    vestingEndDate: number;
  };
}

// Get Presale account PDA (Program Derived Address)
export const findPresaleAccount = async (): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [Buffer.from("presale")],
    PRESALE_PROGRAM_ID
  );
};

// Get User Participation PDA
export const findUserParticipationAccount = async (
  userWallet: PublicKey
): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [Buffer.from("participation"), userWallet.toBuffer()],
    PRESALE_PROGRAM_ID
  );
};

// Get the vault PDA where tokens are stored
export const findVaultAccount = async (): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [Buffer.from("vault")],
    PRESALE_PROGRAM_ID
  );
};

// Generate IDL for the Palm Presale Contract
// Simplified IDL - only required functions are included
const generateIdl = () => {
  return {
    version: "0.1.0",
    name: "palm_presale",
    instructions: [
      {
        name: "buyToken",
        accounts: [
          { name: "buyer", isMut: true, isSigner: true },
          { name: "presale", isMut: true, isSigner: false },
          { name: "participation", isMut: true, isSigner: false },
          { name: "systemProgram", isMut: false, isSigner: false }
        ],
        args: [
          { name: "tokenAmount", type: "u64" },
          { name: "quoteAmount", type: "u64" }
        ]
      },
      {
        name: "claimToken",
        accounts: [
          { name: "claimer", isMut: false, isSigner: true },
          { name: "presale", isMut: true, isSigner: false },
          { name: "vault", isMut: true, isSigner: false },
          { name: "participation", isMut: true, isSigner: false },
          { name: "userTokenAccount", isMut: true, isSigner: false },
          { name: "tokenProgram", isMut: false, isSigner: false },
          { name: "systemProgram", isMut: false, isSigner: false }
        ],
        args: [
          { name: "bump", type: "u8" }
        ]
      }
    ],
    accounts: [
      {
        name: "Presale",
        type: {
          kind: "struct",
          fields: [
            { name: "totalAmount", type: "u64" },
            { name: "soldAmount", type: "u64" },
            { name: "hardcapAmount", type: "u64" },
            { name: "softcapAmount", type: "u64" },
            { name: "price", type: "u64" },
            { name: "startTime", type: "u64" },
            { name: "endTime", type: "u64" },
            { name: "tokenMint", type: "publicKey" },
            { name: "maxAmount", type: "u64" },
            { name: "owner", type: "publicKey" },
            { name: "bump", type: "u8" }
          ]
        }
      },
      {
        name: "Participation",
        type: {
          kind: "struct",
          fields: [
            { name: "buyer", type: "publicKey" },
            { name: "totalAmount", type: "u64" },
            { name: "claimedAmount", type: "u64" },
            { name: "bump", type: "u8" }
          ]
        }
      }
    ]
  };
};

// Utility to get presale status
export const getPresaleStatus = async (connection: Connection): Promise<PresaleState> => {
  try {
    // Initialize Anchor Program
    const provider = new anchor.AnchorProvider(
      connection,
      {
        publicKey: PublicKey.default,
        signTransaction: async () => { throw new Error("Not implemented"); },
        signAllTransactions: async () => { throw new Error("Not implemented"); },
      } as any,
      { preflightCommitment: 'processed' }
    );
    
    const program = new anchor.Program(generateIdl() as any, PRESALE_PROGRAM_ID, provider);
    
    // Find presale account
    const [presaleAccount] = await findPresaleAccount();
    
    try {
      // Fetch presale data from chain
      const presaleData: any = await program.account.presale.fetch(presaleAccount);
      
      const isActive = Date.now() >= Number(presaleData.startTime) && 
                      Date.now() <= Number(presaleData.endTime);
      
      const totalRaised = Number(presaleData.soldAmount) * Number(presaleData.price) / LAMPORTS_PER_SOL;
      const hardCapUSD = Number(presaleData.hardcapAmount) * Number(presaleData.price) / LAMPORTS_PER_SOL;
      
      // Count participants (this is simplified - actual implementation would need to count all participants)
      // In a real scenario, you might maintain this count in the contract or scan all accounts
      const participantCount = 0; // This would be derived from blockchain data
      
      return {
        isActive,
        totalRaised,
        participantCount,
        remainingAllocation: hardCapUSD - totalRaised,
        hardCapReached: Number(presaleData.soldAmount) >= Number(presaleData.hardcapAmount)
      };
    } catch (error) {
      console.error("Error fetching presale data:", error);
      
      // Return mock data during development if the contract isn't deployed or there's an error
      return {
        isActive: true,
        totalRaised: 490000,
        participantCount: 1250,
        remainingAllocation: PRESALE_CONFIG.hardCapUSD - 490000,
        hardCapReached: false
      };
    }
  } catch (error) {
    console.error('Error fetching presale status:', error);
    
    // Return mock data as fallback
    return {
      isActive: true,
      totalRaised: 490000,
      participantCount: 1250,
      remainingAllocation: PRESALE_CONFIG.hardCapUSD - 490000,
      hardCapReached: false
    };
  }
};

// Utility to get user's allocation tickets
export const getUserAllocation = async (
  connection: Connection, 
  walletPubkey: PublicKey
): Promise<{ allocatedTokens: number; vestedTokens: number }> => {
  try {
    // Initialize Anchor Program
    const provider = new anchor.AnchorProvider(
      connection,
      {
        publicKey: PublicKey.default,
        signTransaction: async () => { throw new Error("Not implemented"); },
        signAllTransactions: async () => { throw new Error("Not implemented"); },
      } as any,
      { preflightCommitment: 'processed' }
    );
    
    const program = new anchor.Program(generateIdl() as any, PRESALE_PROGRAM_ID, provider);
    
    // Find user participation account
    const [participationAccount] = await findUserParticipationAccount(walletPubkey);
    
    try {
      // Fetch participation data from chain
      const participationData: any = await program.account.participation.fetch(participationAccount);
      
      return {
        allocatedTokens: Number(participationData.totalAmount),
        vestedTokens: Number(participationData.claimedAmount)
      };
    } catch (error) {
      console.error("Error fetching user participation data:", error);
      
      // Return default values if account doesn't exist or there's an error
      return {
        allocatedTokens: 0,
        vestedTokens: 0
      };
    }
  } catch (error) {
    console.error('Error fetching user allocation:', error);
    return {
      allocatedTokens: 0,
      vestedTokens: 0
    };
  }
};

// Calculate the amount of tokens to receive based on SOL input
export const calculateTokenAmount = (solAmount: number): number => {
  const usdAmount = solAmount * PRESALE_CONFIG.solPriceUSD;
  return usdAmount / PRESALE_CONFIG.tokenPrice;
};

// Purchase allocation tickets
export const purchaseAllocationTickets = async (
  connection: Connection,
  wallet: WalletContextState,
  solAmount: number
): Promise<PurchaseReceipt> => {
  try {
    if (!wallet.publicKey) {
      throw new Error('Wallet not connected');
    }

    if (!wallet.signTransaction) {
      throw new Error('Wallet does not support signing transactions');
    }

    // Validate purchase amount
    const usdAmount = solAmount * PRESALE_CONFIG.solPriceUSD;
    if (usdAmount < PRESALE_CONFIG.minPurchaseUSD) {
      throw new Error(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD}`);
    }
    if (usdAmount > PRESALE_CONFIG.maxPurchaseUSD) {
      throw new Error(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD}`);
    }

    // Initialize Anchor Program
    const provider = new anchor.AnchorProvider(
      connection,
      wallet as any,
      { preflightCommitment: 'processed' }
    );
    
    const program = new anchor.Program(generateIdl() as any, PRESALE_PROGRAM_ID, provider);
    
    // Find presale account
    const [presaleAccount] = await findPresaleAccount();
    
    // Find user participation account
    const [participationAccount, participationBump] = await findUserParticipationAccount(wallet.publicKey);
    
    // Calculate token amount based on SOL input and price
    const tokenAmount = calculateTokenAmount(solAmount);
    const lamports = solAmount * LAMPORTS_PER_SOL;
    
    // Call the buyToken instruction
    const tx = await program.methods
      .buyToken(
        new BN(tokenAmount),
        new BN(lamports)
      )
      .accounts({
        buyer: wallet.publicKey,
        presale: presaleAccount,
        participation: participationAccount,
        systemProgram: SystemProgram.programId
      })
      .transaction();
    
    // Set recent blockhash
    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    tx.feePayer = wallet.publicKey;
    
    // Sign and send transaction
    const signedTx = await wallet.signTransaction(tx);
    const txSignature = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txSignature);
    
    // Calculate vesting details
    const immediateAmount = tokenAmount * (PRESALE_CONFIG.vestingPercentageImmediate / 100);
    const vestedAmount = tokenAmount - immediateAmount;
    const vestingEndDate = Date.now() + (PRESALE_CONFIG.vestingDurationMonths * 30 * 24 * 60 * 60 * 1000);
    
    return {
      txSignature,
      solAmount,
      tokenAmount,
      timestamp: Date.now(),
      vestingInfo: {
        immediateAmount,
        vestedAmount,
        vestingEndDate
      }
    };
  } catch (error) {
    console.error('Error purchasing allocation tickets:', error);
    throw error;
  }
};

// Initialize the Anchor program
export const getProgram = async (
  connection: Connection, 
  wallet: WalletContextState
) => {
  if (!wallet.publicKey) {
    throw new Error('Wallet not connected');
  }

  // Create a provider
  const provider = new anchor.AnchorProvider(
    connection,
    wallet as any,
    { preflightCommitment: 'processed' }
  );

  // Use the IDL for the palm presale contract
  const idl = generateIdl();

  // Create and return the program
  return new anchor.Program(idl as any, PRESALE_PROGRAM_ID, provider);
}; 