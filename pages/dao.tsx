import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { ProposalList } from '../components/dao/ProposalList';
import { WalletConnect } from '../components/dao/WalletConnect';
import { verifyTokenHoldings } from '../utils/dao';

export default function DAOPage() {
  const { publicKey, connected: solanaConnected } = useWallet();
  const [isEligible, setIsEligible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkEligibility = async () => {
      if (solanaConnected && publicKey) {
        const eligibility = await verifyTokenHoldings(publicKey.toString());
        setIsEligible(eligibility.isEligible);
      }
      setIsLoading(false);
    };

    checkEligibility();
  }, [solanaConnected, publicKey]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">DAO Voting Platform</h1>
        
        {!solanaConnected ? (
          <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Connect Your Solana Wallet</h2>
            <p className="text-gray-300 mb-4 text-center">
              Please connect your Solana wallet to verify your token holdings and access the voting platform.
            </p>
            <div className="flex justify-center">
              <WalletConnect />
            </div>
          </div>
        ) : !isEligible ? (
          <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Not Eligible</h2>
            <p className="text-gray-300 text-center">
              You need to hold the required token to participate in voting.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <ProposalList />
          </div>
        )}
      </div>
    </div>
  );
} 