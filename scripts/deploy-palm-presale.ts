import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { PublicKey, Keypair, Connection, clusterApiUrl } from '@solana/web3.js';
import { readFileSync } from 'fs';
import path from 'path';
import { PalmPresale } from '../utils/palm-presale-idl';

// Configure the client to use the devnet cluster
const network = clusterApiUrl('devnet');
const connection = new Connection(network, 'confirmed');

async function main() {
  try {
    // Load the wallet keypair from a local file - ensure this is in the root directory or update path
    console.log('Loading keypair...');
    const secretKeyFile = path.resolve('keypair.json');
    const secretKey = new Uint8Array(JSON.parse(readFileSync(secretKeyFile, 'utf8')));
    const wallet = Keypair.fromSecretKey(secretKey);
    
    console.log('Wallet public key:', wallet.publicKey.toString());
    
    // Create a provider
    const provider = new anchor.AnchorProvider(
      connection,
      new anchor.Wallet(wallet),
      { commitment: 'confirmed' }
    );
    
    // Create a program
    console.log('Loading program...');
    const idl = PalmPresale;
    const programId = new PublicKey('PROGRAM_ID_HERE'); // Replace with your actual program ID
    
    const program = new Program(idl, programId, provider);
    
    // Check if the program account exists
    console.log('Checking program deployment...');
    const programInfo = await connection.getAccountInfo(programId);
    
    if (programInfo) {
      console.log('Program is already deployed to devnet!');
      console.log('Program ID:', programId.toString());
    } else {
      console.error('Program is not deployed or the program ID is incorrect.');
      console.log('Please use the Solana CLI to deploy your program first:');
      console.log('solana program deploy path/to/program.so --keypair path/to/keypair.json --url devnet');
    }
    
    // Optional: Initialize the program if necessary
    // This depends on your specific program's initialization requirements
    console.log('Checking wallet SOL balance...');
    const balance = await connection.getBalance(wallet.publicKey);
    console.log(`Wallet balance: ${balance / anchor.web3.LAMPORTS_PER_SOL} SOL`);
    
    if (balance < anchor.web3.LAMPORTS_PER_SOL * 0.1) {
      console.log('Low balance. Please fund your wallet on devnet:');
      console.log(`solana airdrop 2 ${wallet.publicKey.toString()} --url devnet`);
    }
    
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

main().then(
  () => process.exit(0),
  (error) => {
    console.error(error);
    process.exit(1);
  }
); 