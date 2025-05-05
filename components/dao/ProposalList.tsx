import { useWallet } from '@solana/wallet-adapter-react';

export function ProposalList() {
  const { publicKey } = useWallet();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Voting Platform Coming Soon</h2>
        <p className="text-gray-300 mb-6">
          The DAO voting platform is currently under development. Check back soon to participate in governance decisions.
        </p>
        <div className="bg-gray-700 p-4 rounded-lg inline-block">
          <p className="text-sm text-gray-400">
            Connected Wallet: {publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}
          </p>
        </div>
      </div>
    </div>
  );
} 