import { 
  Connection, 
  PublicKey, 
  Transaction, 
  SystemProgram, 
  SYSVAR_RENT_PUBKEY,
  Keypair
} from '@solana/web3.js';
import { AnchorProvider, Program, BN, Idl } from '@project-serum/anchor';

// Use require instead of import to avoid ESM resolution issues
// @ts-ignore - Ignore the missing type definitions
const { 
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress, 
  createAssociatedTokenAccountInstruction 
} = require('@solana/spl-token');

// Constants
export const PROGRAM_ID = new PublicKey("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");
export const TOKEN_MINT = new PublicKey("4HyGnNETGQoJd9YEXS3cq1gcAdhF5XBGkpxYiUHZmZvx");
export const SOLANA_NETWORK = "https://api.devnet.solana.com";

// IDL definition
export const TOKEN_CLAIM_IDL: Idl = {
  version: "0.1.0",
  name: "token_claim",
  instructions: [
    {
      name: "initialize",
      accounts: [
        { name: "claimState", isMut: true, isSigner: false },
        { name: "authority", isMut: true, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false }
      ],
      args: [{ name: "tokenMint", type: "publicKey" }]
    },
    {
      name: "claim",
      accounts: [
        { name: "claimState", isMut: true, isSigner: false },
        { name: "claimInfo", isMut: true, isSigner: false },
        { name: "user", isMut: true, isSigner: true },
        { name: "programTokenAccount", isMut: true, isSigner: false },
        { name: "userTokenAccount", isMut: true, isSigner: false },
        { name: "tokenMint", isMut: false, isSigner: false },
        { name: "tokenProgram", isMut: false, isSigner: false },
        { name: "systemProgram", isMut: false, isSigner: false },
        { name: "rent", isMut: false, isSigner: false }
      ],
      args: [{ name: "amount", type: "u64" }]
    },
    {
      name: "getClaimableAmount",
      accounts: [
        { name: "claimInfo", isMut: false, isSigner: false },
        { name: "user", isMut: false, isSigner: false }
      ],
      args: [],
      returns: "u64"
    }
  ],
  accounts: [
    {
      name: "ClaimState",
      type: {
        kind: "struct",
        fields: [
          { name: "tokenMint", type: "publicKey" },
          { name: "authority", type: "publicKey" },
          { name: "bump", type: "u8" }
        ]
      }
    },
    {
      name: "ClaimInfo",
      type: {
        kind: "struct",
        fields: [
          { name: "allocation", type: "u64" },
          { name: "claimed", type: "bool" },
          { name: "bump", type: "u8" }
        ]
      }
    }
  ],
  errors: [
    { code: 6000, name: "AlreadyClaimed", msg: "This wallet has already claimed." },
    { code: 6001, name: "IncorrectAmount", msg: "Incorrect claim amount." }
  ]
};

// Helper functions
export const getSolanaConnection = () => {
  return new Connection(SOLANA_NETWORK, 'confirmed');
};

export const getAnchorProgram = (wallet: any) => {
  const connection = getSolanaConnection();
  const provider = new AnchorProvider(
    connection,
    wallet,
    { preflightCommitment: 'processed' }
  );
  return new Program(TOKEN_CLAIM_IDL, PROGRAM_ID, provider);
};

export const findClaimState = async () => {
  return await PublicKey.findProgramAddress(
    [Buffer.from('claim_state')],
    PROGRAM_ID
  );
};

export const findClaimInfo = async (userPublicKey: PublicKey) => {
  return await PublicKey.findProgramAddress(
    [Buffer.from('claim_info'), userPublicKey.toBuffer()],
    PROGRAM_ID
  );
};

// Get the amount of tokens a user can claim (returns null if user not in whitelist)
export const getClaimableAmount = async (userPublicKey: PublicKey) => {
  try {
    const connection = getSolanaConnection();
    const [claimInfo] = await findClaimInfo(userPublicKey);
    
    try {
      // Try to fetch existing claim info
      const accountInfo = await connection.getAccountInfo(claimInfo);
      
      if (!accountInfo) {
        // Account doesn't exist yet, but user might be eligible
        // In a real app, check against a whitelist
        const allocation = Math.floor(Math.random() * (10000000 - 5000000 + 1)) + 5000000;
        return { amount: allocation, claimed: false };
      }
      
      // TODO: Parse account data to check if claimed
      // For this example, we'll just return a simple allocation
      return { amount: 7500000, claimed: false };
    } catch (err) {
      console.error("Error checking claim info:", err);
      return null;
    }
  } catch (err) {
    console.error("Error in getClaimableAmount:", err);
    return null;
  }
};

// Claim tokens
export const claimTokens = async (
  wallet: any,
  amount: number
) => {
  try {
    if (!wallet.publicKey) throw new Error("Wallet not connected");
    
    const connection = getSolanaConnection();
    const program = getAnchorProgram(wallet);
    
    // Find PDAs
    const [claimState] = await findClaimState();
    const [claimInfo] = await findClaimInfo(wallet.publicKey);
    
    // Get the token accounts
    const programTokenAccount = await getAssociatedTokenAddress(
      TOKEN_MINT,
      claimState,
      true // allowOwnerOffCurve
    );
    
    let userTokenAccount = await getAssociatedTokenAddress(
      TOKEN_MINT,
      wallet.publicKey
    );
    
    // Check if user token account exists, if not we'll create it
    const userTokenAccountInfo = await connection.getAccountInfo(userTokenAccount);
    const transaction = new Transaction();
    
    if (!userTokenAccountInfo) {
      console.log("Creating user token account...");
      transaction.add(
        createAssociatedTokenAccountInstruction(
          wallet.publicKey, // payer
          userTokenAccount, // token account
          wallet.publicKey, // owner
          TOKEN_MINT // mint
        )
      );
    }
    
    // Convert amount to lamports (assuming 9 decimals)
    const amountLamports = new BN(amount * Math.pow(10, 9));
    
    // Add claim instruction
    transaction.add(
      await program.methods
        .claim(amountLamports)
        .accounts({
          claimState,
          claimInfo,
          user: wallet.publicKey,
          programTokenAccount,
          userTokenAccount,
          tokenMint: TOKEN_MINT,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: SYSVAR_RENT_PUBKEY
        })
        .instruction()
    );
    
    // Send transaction
    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, 'confirmed');
    
    return { success: true, signature };
  } catch (err: any) {
    console.error("Error claiming tokens:", err);
    return { 
      success: false, 
      error: err.message || "Failed to claim tokens" 
    };
  }
};
