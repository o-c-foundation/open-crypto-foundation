import * as anchor from '@project-serum/anchor';
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';

// Constants
export const PRESALE_PROGRAM_ID = new PublicKey(process.env.NEXT_PUBLIC_PRESALE_PROGRAM_ID || 'PLACEHOLDER_PROGRAM_ID');
export const TREASURY_WALLET = new PublicKey(process.env.NEXT_PUBLIC_TREASURY_WALLET || 'PLACEHOLDER_TREASURY_WALLET');
export const TOKEN_MINT = new PublicKey(process.env.NEXT_PUBLIC_TOKEN_MINT || 'PLACEHOLDER_TOKEN_MINT');

// Presale configuration
export const PRESALE_CONFIG = {
  presaleStartTime: new Date('June 15, 2025 09:00 UTC').getTime(),
  presaleEndTime: new Date('July 15, 2025 09:00 UTC').getTime(),
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

// Utility to get presale status
export const getPresaleStatus = async (connection: Connection): Promise<PresaleState> => {
  try {
    // In a real implementation, this would fetch data from the smart contract
    // This is a simplified example that would be replaced with actual contract interaction
    
    // For the demo, we'll return mock data
    const currentTime = Date.now();
    const isActive = currentTime >= PRESALE_CONFIG.presaleStartTime && 
                    currentTime <= PRESALE_CONFIG.presaleEndTime;
    
    // Mock data for demonstration purposes
    return {
      isActive,
      totalRaised: 490000, // $490,000 raised so far
      participantCount: 1250,
      remainingAllocation: PRESALE_CONFIG.hardCapUSD - 490000,
      hardCapReached: false
    };
  } catch (error) {
    console.error('Error fetching presale status:', error);
    throw error;
  }
};

// Utility to get user's allocation tickets
export const getUserAllocation = async (
  connection: Connection, 
  walletPubkey: PublicKey
): Promise<{ allocatedTokens: number; vestedTokens: number }> => {
  try {
    // In a real implementation, this would fetch the user's allocation from the contract
    // Mock data for demonstration
    return {
      allocatedTokens: 0, // User hasn't purchased any allocation tickets yet
      vestedTokens: 0
    };
  } catch (error) {
    console.error('Error fetching user allocation:', error);
    throw error;
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

    // This example uses the Solana native transfer, but in a real implementation
    // it would interact with the presale contract using Anchor
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: TREASURY_WALLET,
        lamports: solAmount * LAMPORTS_PER_SOL
      })
    );

    // Set recent blockhash and fee payer
    transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    transaction.feePayer = wallet.publicKey;

    // Sign and send transaction
    const signedTx = await wallet.signTransaction(transaction);
    const txSignature = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txSignature);

    // Calculate token amounts
    const tokenAmount = calculateTokenAmount(solAmount);
    const immediateAmount = tokenAmount * (PRESALE_CONFIG.vestingPercentageImmediate / 100);
    const vestedAmount = tokenAmount - immediateAmount;

    // In a real implementation, the contract would handle the vesting logic
    // Calculate vesting end date
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

  // In a real implementation, this would load the IDL from the deployed program
  // const idl = await anchor.Program.fetchIdl(PRESALE_PROGRAM_ID, provider);
  // if (!idl) throw new Error('IDL not found');

  // For demonstration purposes, we'll use a placeholder
  // In a real implementation, you would load the actual IDL
  const mockIdl = {
    version: '0.1.0',
    name: 'presale',
    instructions: []
  };

  // Create and return the program
  return new anchor.Program(mockIdl as any, PRESALE_PROGRAM_ID, provider);
}; 