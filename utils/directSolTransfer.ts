import * as web3 from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';

// Treasury wallet from environment variables
const TREASURY_WALLET_ADDRESS = process.env.NEXT_PUBLIC_TREASURY_WALLET || '5W2Lfp8saRiaK1bboAAwDnWtsghmQBahk5UMatump9Et';

// Presale configuration
export const PRESALE_CONFIG = {
  presaleStartTime: new Date().getTime(), // Start immediately
  presaleEndTime: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).getTime(), // 30 days from now
  tokenPrice: 0.0001, // Price per token in USD (based on $100K market cap for 1B tokens)
  solPriceUSD: 60, // Current SOL price in USD
  minPurchaseSOL: 2.5, // Minimum purchase in SOL
  maxPurchaseSOL: 10, // Maximum purchase in SOL
  minPurchaseUSD: 2.5 * 60, // Calculated from SOL
  maxPurchaseUSD: 10 * 60, // Calculated from SOL
  softCapSOL: 833.33, // 50K USD equivalent
  hardCapSOL: 2000, // 120K USD equivalent
  softCapUSD: 50000, // Soft cap in USD
  hardCapUSD: 120000, // Hard cap in USD
  totalRaisedSOL: 208.17, // Current amount raised (≈ $12,490)
  totalRaisedUSD: 12490, // Current amount raised in USD
  tokensRemaining: 210549861, // Tokens remaining in presale
  totalTokenSupply: 1000000000, // Total token supply (1 billion)
  tokenPriceSOL: 0.0001 / 60, // Price per token in SOL
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
}

/**
 * Simple function to check if a wallet has participated in the presale
 * This would typically check against a database in a real implementation
 */
export async function getUserAllocation(
  connection: web3.Connection,
  walletPubkey: web3.PublicKey
): Promise<number> {
  // This would check a database or other source for user allocation
  // For now, just return 0 to indicate no prior participation
  return 0;
} 