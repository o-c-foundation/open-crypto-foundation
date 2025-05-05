import { Connection, PublicKey } from '@solana/web3.js';
import { ethers } from 'ethers';

const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com';
const TOKEN_ADDRESS = '9KvS8EevsAK8kh8JVfFxbN5V58HHAxx8A6V6a4bqpump';
const MIN_TOKEN_BALANCE = 1; // Minimum token balance required to vote
const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS || '';

export async function verifyTokenHoldings(walletAddress: string): Promise<{
  isEligible: boolean;
  isAdmin: boolean;
}> {
  // Check if the address is the admin
  if (walletAddress.toLowerCase() === ADMIN_ADDRESS.toLowerCase()) {
    return { isEligible: true, isAdmin: true };
  }

  try {
    const connection = new Connection(SOLANA_RPC_URL);
    const publicKey = new PublicKey(walletAddress);
    const tokenAccount = await connection.getTokenAccountsByOwner(publicKey, {
      mint: new PublicKey(TOKEN_ADDRESS),
    });

    if (tokenAccount.value.length > 0) {
      const balance = await connection.getTokenAccountBalance(tokenAccount.value[0].pubkey);
      return {
        isEligible: Number(balance.value.amount) >= MIN_TOKEN_BALANCE,
        isAdmin: false,
      };
    }
  } catch (error) {
    console.error('Error verifying token holdings:', error);
  }

  return { isEligible: false, isAdmin: false };
} 