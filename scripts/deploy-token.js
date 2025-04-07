// Script to deploy a token on Solana devnet for testing
const { 
  Connection, 
  PublicKey, 
  Keypair, 
  Transaction, 
  sendAndConfirmTransaction, 
  SystemProgram 
} = require('@solana/web3.js');
const { 
  Token, 
  TOKEN_PROGRAM_ID, 
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getMint,
  createMint
} = require('@solana/spl-token');
const bs58 = require('bs58');

// Generate a new keypair for testing (or use an existing one)
const generateKeypair = () => {
  return Keypair.generate();
};

// Constants
const PROGRAM_ID = "Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS";
const TOKEN_MINT = "4HyGnNETGQoJd9YEXS3cq1gcAdhF5XBGkpxYiUHZmZvx";
const NETWORK = "https://api.devnet.solana.com";

// Connection
const connection = new Connection(NETWORK, 'confirmed');

async function main() {
  console.log("Checking program and token status on Solana devnet...");
  
  // Check if program exists
  try {
    const programId = new PublicKey(PROGRAM_ID);
    const programInfo = await connection.getAccountInfo(programId);
    
    if (programInfo) {
      console.log("✅ Program exists on devnet!");
      console.log(`   Program size: ${programInfo.data.length} bytes`);
      console.log(`   Owner: ${programInfo.owner.toBase58()}`);
    } else {
      console.log("❌ Program does not exist on devnet.");
      console.log("   You need to deploy your Anchor program first.");
    }
  } catch (err) {
    console.error("Error checking program:", err);
  }
  
  // Check if token mint exists
  try {
    const tokenMint = new PublicKey(TOKEN_MINT);
    const mintInfo = await connection.getAccountInfo(tokenMint);
    
    if (mintInfo) {
      console.log("\n✅ Token mint exists on devnet!");
      console.log(`   Owner: ${mintInfo.owner.toBase58()}`);
      
      // Check if it's a valid SPL token
      if (mintInfo.owner.equals(TOKEN_PROGRAM_ID)) {
        console.log("   This is a valid SPL token mint");
        
        // Get more token details
        try {
          const mintData = await getMint(connection, tokenMint);
          console.log(`   Decimals: ${mintData.decimals}`);
          console.log(`   Supply: ${mintData.supply}`);
          console.log(`   Mint Authority: ${mintData.mintAuthority?.toBase58() || 'None'}`);
        } catch (err) {
          console.error("   Error parsing mint data:", err);
        }
      } else {
        console.log("   ⚠️ This account is not owned by the SPL Token program");
      }
    } else {
      console.log("\n❌ Token mint does not exist on devnet.");
      console.log("   Would you like to create a new token? (implement this)");
      
      // To create a token, uncomment this section and add a keypair
      // const payer = YOUR_KEYPAIR; // You need to add a funded keypair here
      // const decimals = 9;
      // 
      // console.log("Creating a new token mint...");
      // const newMint = await createMint(
      //   connection,
      //   payer,
      //   payer.publicKey,
      //   payer.publicKey,
      //   decimals,
      //   undefined,
      //   undefined,
      //   TOKEN_PROGRAM_ID
      // );
      // console.log(`New token mint created: ${newMint.toBase58()}`);
      // console.log("Update your TOKEN_MINT constant in the code with this address");
    }
  } catch (err) {
    console.error("Error checking token mint:", err);
  }
}

main()
  .then(() => console.log("Done!"))
  .catch(err => console.error("Error:", err)); 