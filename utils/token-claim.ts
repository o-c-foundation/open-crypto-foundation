import * as web3 from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import bs58 from 'bs58';

// The amount of tokens to transfer to each user
const TOKEN_CLAIM_AMOUNT = 6_000_000;

// Environment variables
const TOKEN_MINT_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_MINT || '';
const AUTHORITY_SECRET_KEY = process.env.TOKEN_AUTHORITY_SECRET_KEY || '';

// Track claimed addresses for preventing double claims
const CLAIMED_ADDRESSES_KEY = 'ocf_claimed_addresses';

/**
 * Check if an address has already claimed tokens
 * @param address Wallet address to check
 * @returns Boolean indicating if the address has already claimed
 */
export function hasAddressClaimed(address: string): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const claimedAddresses = JSON.parse(localStorage.getItem(CLAIMED_ADDRESSES_KEY) || '[]');
    return claimedAddresses.includes(address);
  } catch (error) {
    console.error('Error checking claimed address:', error);
    return false;
  }
}

/**
 * Mark an address as having claimed tokens
 * @param address Wallet address to mark as claimed
 */
function markAddressAsClaimed(address: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const claimedAddresses = JSON.parse(localStorage.getItem(CLAIMED_ADDRESSES_KEY) || '[]');
    if (!claimedAddresses.includes(address)) {
      claimedAddresses.push(address);
      localStorage.setItem(CLAIMED_ADDRESSES_KEY, JSON.stringify(claimedAddresses));
    }
  } catch (error) {
    console.error('Error marking address as claimed:', error);
  }
}

/**
 * Send OCF tokens to a user
 * @param recipientAddress The wallet address of the recipient
 * @returns Transaction signature or error message
 */
export async function sendOCFTokens(recipientAddress: string): Promise<{ success: boolean; message: string; signature?: string }> {
  try {
    // Validate recipient address
    if (!recipientAddress) {
      return { success: false, message: 'Recipient address is required' };
    }

    // Check if address has already claimed
    if (hasAddressClaimed(recipientAddress)) {
      return { success: false, message: 'This wallet has already claimed tokens' };
    }

    let recipientPublicKey: web3.PublicKey;
    try {
      recipientPublicKey = new web3.PublicKey(recipientAddress);
    } catch (error) {
      return { success: false, message: 'Invalid recipient address' };
    }

    // Get the token mint
    if (!TOKEN_MINT_ADDRESS) {
      return { success: false, message: 'Token mint address not configured' };
    }

    const tokenMintAddress = new web3.PublicKey(TOKEN_MINT_ADDRESS);

    // Initialize connection to Solana devnet
    const connection = new web3.Connection(
      process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT || 'https://api.devnet.solana.com',
      'confirmed'
    );

    // Require the authority key for token transfers
    if (!AUTHORITY_SECRET_KEY) {
      return { success: false, message: 'Token authority not configured' };
    }

    // Parse the authority keypair
    const secretKey = bs58.decode(AUTHORITY_SECRET_KEY);
    const authorityKeypair = web3.Keypair.fromSecretKey(secretKey);

    // Get the associated token address for recipient
    const recipientATA = await splToken.getAssociatedTokenAddress(
      tokenMintAddress,
      recipientPublicKey,
      false
    );

    // Check if recipient has an associated token account
    let createATAIx: web3.TransactionInstruction | null = null;
    try {
      await splToken.getAccount(connection, recipientATA);
    } catch (error: any) {
      // If account doesn't exist, we'll create it
      if (error.name === 'TokenAccountNotFoundError') {
        createATAIx = splToken.createAssociatedTokenAccountInstruction(
          authorityKeypair.publicKey,
          recipientATA,
          recipientPublicKey,
          tokenMintAddress
        );
      } else {
        throw error;
      }
    }

    // Get the associated token address for authority
    const authorityATA = await splToken.getAssociatedTokenAddress(
      tokenMintAddress,
      authorityKeypair.publicKey,
      false
    );

    // Create transfer instruction
    const transferIx = splToken.createTransferInstruction(
      authorityATA,
      recipientATA,
      authorityKeypair.publicKey,
      TOKEN_CLAIM_AMOUNT * 10**9 // 9 decimals for SPL tokens
    );

    // Create transaction
    const transaction = new web3.Transaction();
    
    // Add create ATA instruction if needed
    if (createATAIx) {
      transaction.add(createATAIx);
    }
    
    // Add transfer instruction
    transaction.add(transferIx);

    // Get recent blockhash
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = authorityKeypair.publicKey;

    // Sign and send transaction
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [authorityKeypair]
    );

    console.log(`Tokens sent! Transaction signature: ${signature}`);
    
    // Mark address as claimed after successful transaction
    markAddressAsClaimed(recipientAddress);
    
    return {
      success: true,
      message: `Successfully sent ${TOKEN_CLAIM_AMOUNT.toLocaleString()} OCF tokens to ${recipientAddress}`,
      signature
    };
  } catch (error) {
    console.error('Error sending tokens:', error);
    
    return {
      success: false,
      message: `Failed to send tokens: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}

/**
 * Get or create an associated token account
 */
async function getOrCreateAssociatedTokenAccount(
  connection: web3.Connection,
  payer: web3.Keypair,
  mint: web3.PublicKey,
  owner: web3.PublicKey
): Promise<web3.PublicKey> {
  const associatedTokenAddress = await splToken.getAssociatedTokenAddress(
    mint,
    owner,
    false
  );

  // Check if the account exists
  try {
    await splToken.getAccount(connection, associatedTokenAddress);
    return associatedTokenAddress;
  } catch (error: any) {
    // If account does not exist, create it
    if (error.name === 'TokenAccountNotFoundError') {
      const tx = await splToken.createAssociatedTokenAccount(
        connection,
        payer,
        mint,
        owner
      );
      console.log(`Created associated token account: ${associatedTokenAddress.toString()}, tx: ${tx}`);
      return associatedTokenAddress;
    } else {
      throw error;
    }
  }
} 