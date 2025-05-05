import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function WalletConnect() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">Solana</h3>
        <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700" />
      </div>
    </div>
  );
} 