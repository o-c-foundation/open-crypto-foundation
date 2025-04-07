import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FaCheck, FaCoins, FaWallet, FaExternalLinkAlt, FaInfoCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';
import SolanaIcon from './icons/SolanaIcon';
import { Dispatch, SetStateAction, useEffect } from 'react';

// Types for whitelist API responses
interface WhitelistStatus {
  success: boolean;
  isWhitelisted: boolean;
  allocation?: number;
  hasClaimed?: boolean;
  message?: string;
}

interface ClaimResponse {
  success: boolean;
  transactionSignature?: string;
  message?: string;
}

interface WalletConnectionComponentsProps {
  isLoading: boolean;
  error: string | null;
  whitelistStatus: WhitelistStatus | null;
  claimResponse: ClaimResponse | null;
  setWhitelistStatus: Dispatch<SetStateAction<WhitelistStatus | null>>;
  setClaimResponse: Dispatch<SetStateAction<ClaimResponse | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
  apiBaseUrl: string;
}

const WalletConnectionComponents = ({
  isLoading,
  error,
  whitelistStatus,
  claimResponse,
  setWhitelistStatus,
  setClaimResponse,
  setIsLoading,
  setError,
  apiBaseUrl
}: WalletConnectionComponentsProps) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  // Check whitelist status when wallet is connected
  useEffect(() => {
    const checkWhitelistStatus = async () => {
      if (!wallet.publicKey) return;
      
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`${apiBaseUrl}/api/whitelist/check/${wallet.publicKey.toString()}`);
        const data = await response.json();
        
        setWhitelistStatus(data);
      } catch (err) {
        console.error('Error checking whitelist status:', err);
        setError('Could not check whitelist status. Please try again later.');
        setWhitelistStatus(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (wallet.connected) {
      checkWhitelistStatus();
    } else {
      setWhitelistStatus(null);
      setClaimResponse(null);
    }
  }, [wallet.publicKey, wallet.connected, apiBaseUrl, setError, setIsLoading, setWhitelistStatus, setClaimResponse]);

  // Handle claiming tokens
  const handleClaimTokens = async () => {
    if (!wallet.publicKey) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`${apiBaseUrl}/api/whitelist/claim`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: wallet.publicKey.toString()
        }),
      });
      
      const data = await response.json();
      setClaimResponse(data);
      
      // Update whitelist status after claiming
      if (data.success) {
        setWhitelistStatus(prev => prev ? {
          ...prev,
          hasClaimed: true
        } : null);
      }
    } catch (err) {
      console.error('Error claiming tokens:', err);
      setError('Could not claim tokens. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Wallet Connection */}
      {!wallet.connected ? (
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-6 p-5 bg-primary/5 rounded-lg border border-primary/20 flex items-center">
            <div className="mr-4 text-primary">
              <FaWallet size={24} />
            </div>
            <p className="text-light-muted">Connect your Solana wallet to check if you're eligible for the token claim</p>
          </div>
          <WalletMultiButton className="!bg-primary hover:!bg-primary-light !transition-colors wallet-adapter-button" />
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
              <p className="text-light-muted">Checking wallet status...</p>
            </div>
          ) : (
            <>
              {/* Connected Wallet Info */}
              <div className="flex items-center justify-between mb-6 p-4 bg-dark-light/30 rounded-lg">
                <div className="flex items-center">
                  <SolanaIcon className="text-green-500 mr-2" size={20} />
                  <span className="text-light-muted">Connected:</span>
                  <span className="text-white ml-2 font-mono text-sm truncate max-w-[200px]">
                    {wallet.publicKey?.toString()}
                  </span>
                </div>
                <button 
                  onClick={() => wallet.disconnect()}
                  className="text-primary hover:text-primary-light transition-colors text-sm"
                >
                  Disconnect
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-900/30 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-3 text-red-500 mt-1">
                      <FaTimesCircle size={18} />
                    </div>
                    <p className="text-red-200">{error}</p>
                  </div>
                </div>
              )}

              {/* Whitelist Status */}
              {whitelistStatus && (
                <div className="mb-6">
                  {whitelistStatus.isWhitelisted ? (
                    <div className="p-6 bg-green-900/20 border border-green-900/30 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="mr-3 text-green-500">
                          <FaCheckCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Congratulations!</h3>
                      </div>
                      <p className="text-light-muted mb-4">
                        Your wallet is whitelisted for the OCF token claim.
                      </p>
                      <div className="flex justify-between items-center p-4 bg-dark rounded-lg mb-6">
                        <span className="text-light-muted">Your Allocation:</span>
                        <span className="text-xl font-bold text-white">{whitelistStatus.allocation?.toLocaleString()} OCF</span>
                      </div>
                      
                      {whitelistStatus.hasClaimed ? (
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                          <div className="flex items-center">
                            <div className="mr-3 text-primary">
                              <FaCheck size={18} />
                            </div>
                            <p className="text-light-muted">
                              You have already claimed your tokens. They have been sent to your wallet.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={handleClaimTokens}
                          disabled={isLoading}
                          className="w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Processing...' : 'Claim Your Tokens'}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 bg-dark-light/30 border border-dark-light/30 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="mr-3 text-yellow-500">
                          <FaInfoCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Not Whitelisted</h3>
                      </div>
                      <p className="text-light-muted mb-4">
                        {whitelistStatus.message || "Your wallet is not on the whitelist for the OCF token claim."}
                      </p>
                      <Link 
                        href="/presale" 
                        className="block w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors text-center"
                      >
                        Join the Presale
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Claim Response */}
              {claimResponse && (
                <div className={`p-6 rounded-lg ${claimResponse.success ? 'bg-green-900/20 border border-green-900/30' : 'bg-red-900/20 border border-red-900/30'}`}>
                  <div className="flex items-start">
                    <div className={`mr-3 ${claimResponse.success ? 'text-green-500' : 'text-red-500'} mt-1`}>
                      {claimResponse.success ? <FaCheckCircle size={18} /> : <FaTimesCircle size={18} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {claimResponse.success ? 'Success!' : 'Error'}
                      </h3>
                      <p className="text-light-muted mb-3">
                        {claimResponse.message || (claimResponse.success ? 'Your tokens have been successfully claimed.' : 'Failed to claim tokens.')}
                      </p>
                      
                      {claimResponse.success && claimResponse.transactionSignature && (
                        <a 
                          href={`https://solscan.io/tx/${claimResponse.transactionSignature}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:text-primary-light transition-colors"
                        >
                          View Transaction <FaExternalLinkAlt size={12} className="ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default WalletConnectionComponents; 