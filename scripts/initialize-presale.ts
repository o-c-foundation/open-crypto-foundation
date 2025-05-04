import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Connection, Keypair, PublicKey, SystemProgram } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import fs from 'fs';
import path from 'path';
import BN from 'bn.js';

// Add type declaration for bn.js
declare module 'bn.js';

// Load the wallet keypair from id.json
const idJsonPath = path.resolve(__dirname, '../id.json');
const secretKeyString = fs.readFileSync(idJsonPath, 'utf-8');
const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
const wallet = Keypair.fromSecretKey(secretKey);

// Load the IDL
const idlPath = path.resolve(__dirname, '../target/idl/palm_presale.json');
const idlString = fs.readFileSync(idlPath, 'utf-8');
const idl = JSON.parse(idlString);

// Program ID and token mint
const PROGRAM_ID = new PublicKey('H6qBMcWs42iZu99FPT2vwhKu1AsdRQzL5JwUs3QvQhGy');
const TOKEN_MINT = new PublicKey('DyoupB9crMyGGvSX7WgdaVekUnQZY66frMm7V6eKgPqb');

// Presale configuration
const TOTAL_TOKENS = new BN(1_000_000_000);
const HARDCAP = new BN(2_000_000);
const SOFTCAP = new BN(500_000);
const PRICE = new BN(0.05 * 1e9); // 0.05 USD per token, with 9 decimals
const START_TIME = new BN(Math.floor(Date.now() / 1000)); // Start now
const END_TIME = new BN(Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60); // 30 days from now
const MAX_TOKENS_PER_USER = new BN(200_000);

// Main function
async function main() {
  // Connect to the Solana cluster
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  
  // Setup provider
  const provider = new anchor.AnchorProvider(
    connection,
    new anchor.Wallet(wallet),
    { preflightCommitment: 'confirmed' }
  );
  
  // Create program instance
  const program = new Program(idl, PROGRAM_ID, provider);
  
  // Find presale account PDA
  const [presaleAccount, presaleBump] = await PublicKey.findProgramAddress(
    [Buffer.from('presale')],
    PROGRAM_ID
  );
  
  // Find vault account PDA
  const [vaultAccount, vaultBump] = await PublicKey.findProgramAddress(
    [Buffer.from('vault')],
    PROGRAM_ID
  );
  
  console.log('Initializing presale...');
  
  try {
    // Initialize presale
    const tx = await program.methods
      .createPresale(
        TOTAL_TOKENS,
        HARDCAP,
        SOFTCAP,
        PRICE,
        START_TIME,
        END_TIME,
        TOKEN_MINT,
        MAX_TOKENS_PER_USER,
        presaleBump
      )
      .accounts({
        presale: presaleAccount,
        tokenMint: TOKEN_MINT,
        owner: wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([wallet])
      .rpc();
    
    console.log('Transaction signature:', tx);
    console.log('Presale initialized successfully!');
    console.log('Presale account:', presaleAccount.toString());
    console.log('Vault account:', vaultAccount.toString());
    
  } catch (error) {
    console.error('Error initializing presale:', error);
  }
}

main().then(
  () => process.exit(0),
  (err) => {
    console.error(err);
    process.exit(1);
  }
); 