import * as anchor from '@project-serum/anchor';
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { BN } from '@project-serum/anchor';
import { PALM_PRESALE_IDL } from './palm-presale-idl';

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
  presaleStartTime: new Date('June 15, 2023 09:00 UTC').getTime(),
  presaleEndTime: new Date('July 15, 2023 09:00 UTC').getTime(),
  tokenPrice: 0.05, // In USD
  solPriceUSD: 60, // Example SOL price in USD (would be fetched from an API in production)
  minPurchaseUSD: 50,
  maxPurchaseUSD: 20000,
  softCapUSD: 500000,
  hardCapUSD: 2000000,
  vestingPercentageImmediate: 100, // 100% available immediately (palm-presale doesn't support vesting)
  vestingDurationMonths: 0 // No vesting
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

// Helper to derive the presale PDA
const getPresalePDA = async (
  creator: PublicKey,
  programId: PublicKey
): Promise<[PublicKey, number]> => {
  return PublicKey.findProgramAddress(
    [Buffer.from("presale"), creator.toBuffer()],
    programId
  );
};

// Helper to derive the presale vault PDA
const getPresaleVaultPDA = async (
  presale: PublicKey,
  programId: PublicKey
): Promise<[PublicKey, number]> => {
  return PublicKey.findProgramAddress(
    [Buffer.from("presale-vault"), presale.toBuffer()],
    programId
  );
};

// Helper to derive the user transaction PDA
const getUserTransactionPDA = async (
  presale: PublicKey,
  user: PublicKey,
  programId: PublicKey
): Promise<[PublicKey, number]> => {
  return PublicKey.findProgramAddress(
    [Buffer.from("user-transaction"), presale.toBuffer(), user.toBuffer()],
    programId
  );
};

// Utility to get presale status
export const getPresaleStatus = async (connection: Connection): Promise<PresaleState> => {
  try {
    // In a real implementation, this would fetch data from the palm-presale smart contract
    const program = await getPalmPresaleProgram(connection);
    const creator = TREASURY_WALLET;
    const [presalePDA] = await getPresalePDA(creator, program.programId);
    
    // Fetch presale data
    try {
      const presaleData = await program.account.presale.fetch(presalePDA);
      const currentTime = Date.now() / 1000; // Convert to seconds
      const isActive = currentTime >= presaleData.startTime.toNumber() && 
                      currentTime <= presaleData.endTime.toNumber();
      
      // Convert data
      const softcap = presaleData.softcapAmount.toNumber() / LAMPORTS_PER_SOL * PRESALE_CONFIG.solPriceUSD;
      const hardcap = presaleData.hardcapAmount.toNumber() / LAMPORTS_PER_SOL * PRESALE_CONFIG.solPriceUSD;
      const totalRaised = presaleData.totalAmount.toNumber() / LAMPORTS_PER_SOL * PRESALE_CONFIG.solPriceUSD;
      
      // Get participant count (in a real implementation, you would query all user transactions)
      const participantCount = 0; // This is a placeholder, real implementation would count users
      
      return {
        isActive,
        totalRaised,
        participantCount,
        remainingAllocation: hardcap - totalRaised,
        hardCapReached: totalRaised >= hardcap
      };
    } catch (error) {
      console.log("Presale not found or error fetching data, returning default values");
      // Return default values if presale not initialized yet
      return {
        isActive: false,
        totalRaised: 0,
        participantCount: 0,
        remainingAllocation: PRESALE_CONFIG.hardCapUSD,
        hardCapReached: false
      };
    }
  } catch (error) {
    console.error('Error fetching presale status:', error);
    // Return default values in case of error
    return {
      isActive: true, // Default to active to show the form
      totalRaised: 0,
      participantCount: 0,
      remainingAllocation: PRESALE_CONFIG.hardCapUSD,
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
    // Try to fetch user transaction data from palm-presale contract
    const program = await getPalmPresaleProgram(connection);
    const creator = TREASURY_WALLET;
    const [presalePDA] = await getPresalePDA(creator, program.programId);
    const [userTransactionPDA] = await getUserTransactionPDA(presalePDA, walletPubkey, program.programId);
    
    try {
      const userTransaction = await program.account.userTransaction.fetch(userTransactionPDA);
      const tokenAmount = userTransaction.tokenAmount.toNumber() / LAMPORTS_PER_SOL;
      
      return {
        allocatedTokens: tokenAmount,
        vestedTokens: 0  // No vesting in palm-presale
      };
    } catch (error) {
      console.log("User transaction not found, returning 0");
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

// Purchase allocation tickets using the palm-presale contract
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

    // Use the palm-presale contract to buy tokens
    const program = await getPalmPresaleProgram(connection);
    const creator = TREASURY_WALLET;
    const [presalePDA] = await getPresalePDA(creator, program.programId);
    
    // Calculate token amount
    const tokenAmount = calculateTokenAmount(solAmount);
    const solAmountLamports = Math.floor(solAmount * LAMPORTS_PER_SOL);
    
    console.log(`Buying ${tokenAmount} tokens for ${solAmount} SOL`);
    
    // Call the buy_token instruction
    const tx = await program.methods
      .buyToken(
        new BN(tokenAmount * LAMPORTS_PER_SOL), // Convert to lamports equivalent
        new BN(solAmountLamports)
      )
      .accounts({
        buyer: wallet.publicKey,
        presale: presalePDA,
        tokenMint: TOKEN_MINT,
        // Additional accounts would be added here based on the contract's requirements
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .transaction();
    
    // Set recent blockhash and fee payer
    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    tx.feePayer = wallet.publicKey;
    
    // Sign and send transaction
    const signedTx = await wallet.signTransaction(tx);
    const txSignature = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txSignature);
    
    // All tokens are immediately available in palm-presale
    return {
      txSignature,
      solAmount,
      tokenAmount,
      timestamp: Date.now(),
      vestingInfo: {
        immediateAmount: tokenAmount,
        vestedAmount: 0,
        vestingEndDate: 0
      }
    };
  } catch (error) {
    console.error('Error purchasing allocation tickets:', error);
    throw error;
  }
};

// Initialize the Palm Presale program
export const getPalmPresaleProgram = async (
  connection: Connection, 
  wallet?: WalletContextState
) => {
  // Create a provider
  const provider = wallet 
    ? new anchor.AnchorProvider(
        connection,
        wallet as any,
        { preflightCommitment: 'processed' }
      )
    : new anchor.AnchorProvider(
        connection,
        {
          publicKey: TREASURY_WALLET,
          signTransaction: async () => { throw new Error('Wallet not connected'); },
          signAllTransactions: async () => { throw new Error('Wallet not connected'); },
        } as any,
        { preflightCommitment: 'processed' }
      );

  // Create and return the program with the Palm Presale IDL
  return new anchor.Program(PALM_PRESALE_IDL, PRESALE_PROGRAM_ID, provider);
}; 