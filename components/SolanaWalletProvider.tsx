import React, { FC, ReactNode, useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Import wallet adapter styles
import '@solana/wallet-adapter-react-ui/styles.css';

interface SolanaWalletProviderProps {
  children: ReactNode;
}

// In Next.js 14, we need to be more explicit with the types
const SolanaWalletProvider = ({ children }: SolanaWalletProviderProps) => {
  // Use devnet cluster for presale demo
  const network = WalletAdapterNetwork.Devnet;
  
  // Use environment variable for endpoint if available, fall back to clusterApiUrl
  const endpoint = useMemo(() => 
    process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT || clusterApiUrl(network), 
    [network]
  );

  // Initialize the wallet adapters
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  // Use explicit type casting to help TypeScript understand the component structure
  const ConnectionProviderComponent = ConnectionProvider as any;
  const WalletProviderComponent = WalletProvider as any;
  const WalletModalProviderComponent = WalletModalProvider as any;

  return (
    <ConnectionProviderComponent endpoint={endpoint}>
      <WalletProviderComponent wallets={wallets} autoConnect>
        <WalletModalProviderComponent>
          {children}
        </WalletModalProviderComponent>
      </WalletProviderComponent>
    </ConnectionProviderComponent>
  );
};

export default SolanaWalletProvider; 