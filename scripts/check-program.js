// Script to check if the program and token exist on Solana devnet
const { Connection, PublicKey } = require('@solana/web3.js');

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
    } else {
      console.log("\n❌ Token mint does not exist on devnet.");
      console.log("   You need to create this token on devnet first.");
    }
  } catch (err) {
    console.error("Error checking token mint:", err);
  }
}

main()
  .then(() => console.log("\nDone!"))
  .catch(err => console.error("Error:", err)); 