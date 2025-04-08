# OCF Presale Solana Program

This is the Solana program for managing the OCF token presale. It handles receiving SOL payments, recording user allocations, and managing the vesting schedule for token distribution.

## Prerequisites

- Solana CLI tools
- Anchor CLI
- Node.js and NPM/Yarn
- A Solana wallet with SOL for deployment

## Deployment Steps

### 1. Install Dependencies

```bash
# Install Anchor CLI
npm install -g @coral-xyz/anchor-cli

# Install project dependencies
npm install
```

### 2. Configure Solana

```bash
# Set up your Solana configuration
solana config set --url https://api.devnet.solana.com  # For devnet
# OR
solana config set --url https://api.mainnet-beta.solana.com  # For mainnet

# Generate a new keypair if you don't have one
solana-keygen new --outfile deploy-keypair.json

# Set the keypair as default
solana config set --keypair ./deploy-keypair.json
```

### 3. Build the Program

```bash
anchor build
```

After building, you'll find the program ID in the keypair file at `target/deploy/ocf_presale-keypair.json`.

### 4. Get the Program ID

```bash
solana address -k ./target/deploy/ocf_presale-keypair.json
```

### 5. Update the Program ID

1. Replace `REPLACE_WITH_YOUR_DEPLOYED_PROGRAM_ID` in `src/lib.rs` with the actual program ID
2. Update the program ID in `Anchor.toml`
3. Rebuild the program with `anchor build`

### 6. Deploy the Program

```bash
anchor deploy
```

### 7. Initialize the Program

After deployment, you need to call the `initialize` instruction with the following parameters:

- `treasury_wallet`: Your OCF treasury wallet address
- `token_mint`: Your OCF token mint address
- `presale_start`: Unix timestamp for the presale start
- `presale_end`: Unix timestamp for the presale end
- `token_price`: Price per token in lamports
- `min_purchase_usd`: Minimum purchase amount in USD cents
- `max_purchase_usd`: Maximum purchase amount in USD cents
- `hard_cap_usd`: Hard cap in USD cents
- `vesting_percent_immediate`: Percentage of tokens released immediately (e.g., 30)
- `vesting_duration_months`: Duration of vesting period in months (e.g., 3)

### 8. Update the Frontend

After deployment, update the following environment variables in your Next.js project:

```
NEXT_PUBLIC_PRESALE_PROGRAM_ID=your_program_id
NEXT_PUBLIC_TREASURY_WALLET=your_treasury_wallet
NEXT_PUBLIC_TOKEN_MINT=your_token_mint
```

## Important Note

This program manages presale allocation records but does not handle the actual token distribution. After presale, you will need to:

1. Export the allocation records
2. Use a token distribution script to send OCF tokens according to the allocation records
3. Implement the vesting schedule for tokens not released immediately 