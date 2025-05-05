import { useWallet } from '@solana/wallet-adapter-react';
import { useWeb3React } from '@web3-react/core';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { injected } from '../../utils/connectors';

export function WalletConnect() {
  const { connect: connectEVM } = useWeb3React();
  const { connected: solanaConnected } = useWallet();

  const connectWallet = async (type: 'evm' | 'solana') => {
    if (type === 'evm') {
      try {
        await connectEVM(injected);
      } catch (error) {
        console.error('Failed to connect EVM wallet:', error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">EVM Chains (Ethereum, BSC, etc.)</h3>
        <button
          onClick={() => connectWallet('evm')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect EVM Wallet
        </button>
      </div>
      
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">Solana</h3>
        <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700" />
      </div>
    </div>
  );
} 