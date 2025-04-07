import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
  CloverWalletAdapter,
  SolongWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, ReactNode, useMemo, useEffect, useState } from 'react';

// Import wallet styles
import '@solana/wallet-adapter-react-ui/styles.css';

interface SolanaWalletProviderProps {
  children: ReactNode;
}

const SolanaWalletProvider: FC<SolanaWalletProviderProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [hasInitializedWallets, setHasInitializedWallets] = useState(false);

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => 
    process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT || clusterApiUrl(network), 
    [network]
  );

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking
  // and lazy loading --
  const wallets = useMemo(() => {
    // Don't create wallets until the component has mounted client-side
    if (!isMounted) return [];

    try {
      return [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new CloverWalletAdapter(),
        new SolongWalletAdapter()
      ];
    } catch (error) {
      console.error('Error initializing wallet adapters:', error);
      return [];
    }
  }, [isMounted, network]);

  // Wait until component is mounted before trying to initialize wallets
  useEffect(() => {
    setIsMounted(true);
    
    // Add a global error handler for wallet-related errors
    const handleError = (event: ErrorEvent) => {
      // Check if this is the auth error we're trying to catch
      if (event.error && event.error.toString().includes("Cannot destructure property 'auth'")) {
        console.log("Caught auth property error, preventing it from crashing the app");
        event.preventDefault();
        return;
      }
    };
    
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  // Only show a loading state while initializing wallets
  if (!isMounted) {
    return <div className="wallet-loading">{children}</div>;
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaWalletProvider; 