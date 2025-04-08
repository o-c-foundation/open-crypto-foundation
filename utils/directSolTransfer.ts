import * as web3 from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';

// Treasury wallet from environment variables
const TREASURY_WALLET_ADDRESS = process.env.NEXT_PUBLIC_TREASURY_WALLET || '';

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

// Calculate token amount based on SOL amount
export function calculateTokenAmount(solAmount: number): number {
  const usdAmount = solAmount * PRESALE_CONFIG.solPriceUSD;
  return Math.floor(usdAmount / PRESALE_CONFIG.tokenPrice);
}

export interface PurchaseReceipt {
  txSignature: string;
  solAmount: number;
  tokenAmount: number;
  timestamp: number;
}

/**
 * Send SOL to the treasury wallet as part of the presale process
 * @param connection Solana connection
 * @param wallet User's wallet
 * @param solAmount Amount of SOL to send
 * @returns Receipt with transaction details
 */
export async function sendSolToTreasury(
  connection: web3.Connection,
  wallet: WalletContextState,
  solAmount: number
): Promise<PurchaseReceipt> {
  if (!wallet.publicKey || !wallet.signTransaction) {
    throw new Error('Wallet not connected');
  }

  if (!TREASURY_WALLET_ADDRESS) {
    throw new Error('Treasury wallet address not configured');
  }

  try {
    // Convert SOL amount to lamports
    const lamports = solAmount * web3.LAMPORTS_PER_SOL;
    
    // Create a transaction to send SOL to the treasury
    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new web3.PublicKey(TREASURY_WALLET_ADDRESS),
        lamports,
      }),
    );

    // Get recent blockhash
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = wallet.publicKey;

    // Sign the transaction
    const signedTransaction = await wallet.signTransaction(transaction);
    
    // Send and confirm the transaction
    const signature = await connection.sendRawTransaction(signedTransaction.serialize());
    
    // Wait for confirmation
    await connection.confirmTransaction(signature, 'confirmed');
    
    // Calculate token amount based on SOL amount
    const tokenAmount = calculateTokenAmount(solAmount);
    
    // Return receipt with transaction details
    return {
      txSignature: signature,
      solAmount,
      tokenAmount,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error('Error sending SOL to treasury:', error);
    throw error;
  }
}

/**
 * Check if a wallet has participated in the presale
 * This is a mock implementation since we're not using a smart contract
 */
export async function getUserAllocation(
  connection: web3.Connection,
  walletPubkey: web3.PublicKey
): Promise<number> {
  // This would normally query the contract, but for now just return 0
  // In a real implementation, you'd fetch this from a database
  return 0;
} 