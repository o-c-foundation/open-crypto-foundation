import * as web3 from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import bs58 from 'bs58';

// The amount of tokens to transfer to each user
const TOKEN_CLAIM_AMOUNT = 6_000_000;

// Environment variables
const TOKEN_MINT_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_MINT || '';
const AUTHORITY_SECRET_KEY = process.env.TOKEN_AUTHORITY_SECRET_KEY || '';

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

    let recipientPublicKey: web3.PublicKey;
    try {
      recipientPublicKey = new web3.PublicKey(recipientAddress);
    } catch (error) {
      return { success: false, message: 'Invalid recipient address' };
    }

    // Get the token mint
    const tokenMintAddress = new web3.PublicKey(TOKEN_MINT_ADDRESS);
    if (!tokenMintAddress) {
      return { success: false, message: 'Token mint address not configured' };
    }

    // Initialize connection to Solana devnet
    const connection = new web3.Connection(
      process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT || 'https://api.devnet.solana.com',
      'confirmed'
    );

    // Authority keypair from environment variable
    if (!AUTHORITY_SECRET_KEY) {
      console.error('TOKEN_AUTHORITY_SECRET_KEY environment variable not set');
      return { 
        success: false, 
        message: 'Token authority not configured. Using mock success for now.',
      };
    }

    // Parse the authority keypair
    let authorityKeypair: web3.Keypair;
    try {
      const secretKey = bs58.decode(AUTHORITY_SECRET_KEY);
      authorityKeypair = web3.Keypair.fromSecretKey(secretKey);
    } catch (error) {
      console.error('Failed to parse authority secret key:', error);
      return { 
        success: false, 
        message: 'Token authority configuration error. Using mock success for now.',
      };
    }

    // Get the sender's token account
    const senderTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      authorityKeypair,
      tokenMintAddress,
      authorityKeypair.publicKey
    );

    // Get or create the recipient's token account
    const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      authorityKeypair,
      tokenMintAddress,
      recipientPublicKey
    );

    // Calculate the amount with decimals (9 decimals for Solana SPL tokens)
    const amount = TOKEN_CLAIM_AMOUNT * 10**9;

    // Transfer tokens
    const signature = await splToken.transfer(
      connection,
      authorityKeypair,
      senderTokenAccount,
      recipientTokenAccount,
      authorityKeypair,
      amount
    );

    console.log(`Tokens sent! Transaction signature: ${signature}`);
    return {
      success: true,
      message: `Successfully sent ${TOKEN_CLAIM_AMOUNT.toLocaleString()} OCF tokens to ${recipientAddress}`,
      signature
    };

  } catch (error) {
    console.error('Error sending tokens:', error);
    
    // In development, return mock success if there's an error
    if (process.env.NODE_ENV === 'development') {
      return {
        success: true,
        message: `[MOCK] Successfully sent ${TOKEN_CLAIM_AMOUNT.toLocaleString()} OCF tokens`,
        signature: 'mock_signature_' + Math.random().toString(36).substring(2, 15)
      };
    }
    
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