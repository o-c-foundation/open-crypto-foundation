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

// Note: This is a demo implementation. In a real app, you would deploy an Anchor program
// with the token-claim logic and use the actual program to handle token claims.
// This demo simulates the token claiming process without the actual on-chain program.

// IDL definition (for reference only in this demo)
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

// Demo whitelist implemented client-side (in a real app, this would be stored on-chain)
const DEMO_WHITELIST: Record<string, number> = {
  // Add some example addresses (replace with real ones if needed)
  "AaYFExyZuMHbJHzjimKyQBAH1yfA9sKTxSzBc6Nr5X4s": 10000000,
  "5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8": 8500000,
  // Client's random allocation will be used if wallet not in whitelist
};

// Get the amount of tokens a user can claim (returns null if user not in whitelist)
export const getClaimableAmount = async (userPublicKey: PublicKey) => {
  try {
    const publicKeyStr = userPublicKey.toBase58();
    
    // Demo: check whitelist (fixed allocations)
    if (DEMO_WHITELIST[publicKeyStr]) {
      return { 
        amount: DEMO_WHITELIST[publicKeyStr], 
        claimed: false 
      };
    }
    
    // Demo: random allocation for non-whitelisted wallets (for testing)
    const allocation = Math.floor(Math.random() * (10000000 - 5000000 + 1)) + 5000000;
    return { amount: allocation, claimed: false };
  } catch (err) {
    console.error("Error in getClaimableAmount:", err);
    return null;
  }
};

// Store claimed tokens to prevent double-claiming in the same session
const claimedWallets = new Set<string>();

// Claim tokens
export const claimTokens = async (
  wallet: {
    publicKey: PublicKey;
    sendTransaction: (transaction: Transaction, connection: Connection) => Promise<string>;
  },
  amount: number
) => {
  try {
    if (!wallet.publicKey) throw new Error("Wallet not connected");
    
    const publicKeyStr = wallet.publicKey.toBase58();
    
    // Check if already claimed in this session
    if (claimedWallets.has(publicKeyStr)) {
      return { 
        success: false, 
        error: "You have already claimed tokens in this session." 
      };
    }
    
    const connection = getSolanaConnection();
    
    // Get the token accounts
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
    
    // Demo: Add a simple transfer instruction (in a real app, this would be a program call)
    // This just creates a small SOL transfer to simulate a transaction
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: wallet.publicKey,
        lamports: 1000, // minimal amount
      })
    );
    
    // Send transaction
    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, 'confirmed');
    
    // Mark as claimed in our client-side storage
    claimedWallets.add(publicKeyStr);
    
    return { 
      success: true, 
      signature,
      message: "Demo: Tokens would be claimed in a real implementation"
    };
  } catch (err: any) {
    console.error("Error claiming tokens:", err);
    return { 
      success: false, 
      error: err.message || "Failed to claim tokens" 
    };
  }
};
