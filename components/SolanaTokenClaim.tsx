import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { getClaimableAmount, claimTokens } from '../utils/token-claim';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

const SolanaTokenClaim = () => {
  const { publicKey, connected } = useWallet();
  
  const [loading, setLoading] = useState(false);
  const [allocation, setAllocation] = useState<number | null>(null);
  const [claimed, setClaimed] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Check claimable amount when wallet connects
  useEffect(() => {
    if (publicKey) {
      checkAllocation();
    } else {
      setAllocation(null);
      setClaimed(false);
    }
  }, [publicKey]);
  
  const checkAllocation = async () => {
    if (!publicKey) return;
    
    setLoading(true);
    setError('');
    
    try {
      const result = await getClaimableAmount(publicKey);
      
      if (result) {
        setAllocation(result.amount);
        setClaimed(result.claimed);
      } else {
        setAllocation(null);
        setError('Your wallet is not eligible for token claims.');
      }
    } catch (err: any) {
      console.error("Error checking allocation:", err);
      setError('Failed to check your allocation: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClaim = async () => {
    if (!publicKey || !allocation) return;
    
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const wallet = useWallet();
      const result = await claimTokens(wallet, allocation);
      
      if (result.success) {
        setClaimed(true);
        setSuccess(`Successfully claimed ${allocation.toLocaleString()} OCF tokens!`);
      } else {
        setError(result.error || 'Failed to claim tokens');
      }
    } catch (err: any) {
      console.error("Error claiming tokens:", err);
      setError('Failed to claim tokens: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-dark-card rounded-lg border border-dark-light/30 p-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Claim Your Tokens</h2>
      
      {error && (
        <div className="p-4 bg-red-900/20 border border-red-900/30 rounded-lg mb-6">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}
      
      {success && (
        <div className="p-4 bg-green-900/20 border border-green-900/30 rounded-lg mb-6">
          <p className="text-green-400 text-sm">{success}</p>
        </div>
      )}
      
      <div className="space-y-6">
        {!connected ? (
          <div className="text-center py-4">
            <p className="text-light-muted mb-4">
              Connect your Solana wallet to check your token allocation and claim tokens.
            </p>
            <div className="flex justify-center">
              <WalletMultiButton />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Your Wallet</h3>
              <p className="font-mono text-sm text-light-muted break-all">
                {publicKey?.toString()}
              </p>
            </div>
            
            {allocation !== null ? (
              <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Your Allocation</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-light-muted">Token Amount:</span>
                  <span className="text-2xl font-bold text-white">{allocation.toLocaleString()} OCF</span>
                </div>
                <div className="text-sm text-light-muted mb-4">
                  {claimed ? 
                    'You have already claimed your tokens. Check your wallet on Solana devnet.' :
                    'You are eligible to claim tokens. Click the button below to claim them to your wallet.'}
                </div>
                {!claimed && (
                  <button
                    onClick={handleClaim}
                    disabled={loading || !allocation}
                    className="w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin mr-2" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      'Claim Your Tokens'
                    )}
                  </button>
                )}
              </div>
            ) : loading ? (
              <div className="text-center py-8">
                <FaSpinner className="animate-spin text-primary mx-auto mb-4" size={32} />
                <p className="text-light-muted">Checking your allocation...</p>
              </div>
            ) : null}
            
            <div className="text-center">
              <button 
                onClick={checkAllocation}
                disabled={loading}
                className="px-4 py-2 bg-dark-light hover:bg-dark-light/80 text-white rounded-lg transition-colors"
              >
                {loading ? 'Checking...' : 'Refresh Allocation'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SolanaTokenClaim;
