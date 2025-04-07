import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FaCheck, FaCoins, FaWallet, FaExternalLinkAlt, FaInfoCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';
import dynamic from 'next/dynamic';
import SolanaIcon from '../components/icons/SolanaIcon';

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

// API endpoints
const API_BASE_URL = process.env.NEXT_PUBLIC_WHITELIST_API_URL || 'https://api.open-crypto-foundation.org';

const TokenClaimPage = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [whitelistStatus, setWhitelistStatus] = useState<WhitelistStatus | null>(null);
  const [claimResponse, setClaimResponse] = useState<ClaimResponse | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  // Check whitelist status when wallet is connected
  useEffect(() => {
    const checkWhitelistStatus = async () => {
      if (!wallet.publicKey) return;
      
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`${API_BASE_URL}/api/whitelist/check/${wallet.publicKey.toString()}`);
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
  }, [wallet.publicKey, wallet.connected]);

  // Handle claiming tokens
  const handleClaimTokens = async () => {
    if (!wallet.publicKey) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/api/whitelist/claim`, {
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
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OCF Token Claim | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Claim your allocated OCF tokens. Whitelisted wallets can claim their tokens securely through our platform." 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OCF Token Claim
              </h1>
              <p className="text-xl text-light-muted mb-8">
                Claim your allocated OCF tokens securely through our platform.
                Only whitelisted wallets can claim tokens.
              </p>
            </div>
          </div>
        </section>

        {/* Claim Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Instructions */}
                <div className="lg:col-span-1">
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6">
                    <h2 className="text-xl font-bold text-white mb-4">How It Works</h2>
                    <ol className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                          <span className="text-primary text-sm font-bold">1</span>
                        </div>
                        <div>
                          <p className="text-light-muted">Connect your Solana wallet</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                          <span className="text-primary text-sm font-bold">2</span>
                        </div>
                        <div>
                          <p className="text-light-muted">We'll check if your wallet is whitelisted</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                          <span className="text-primary text-sm font-bold">3</span>
                        </div>
                        <div>
                          <p className="text-light-muted">If eligible, claim your tokens with one click</p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-6 p-4 bg-dark-light/30 rounded-lg">
                      <div className="flex">
                        <div className="mr-3 text-primary mt-1">
                          <FaInfoCircle size={18} />
                        </div>
                        <p className="text-sm text-light-muted">
                          Tokens will be automatically sent to your connected wallet. No additional steps required.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Claim Form */}
                <div className="lg:col-span-2">
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Claim Your Tokens</h2>
                    
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">What is token claiming?</h3>
                  <p className="text-light-muted">
                    Token claiming is the process of receiving your allocated OCF tokens if your wallet is whitelisted. 
                    Tokens are transferred directly to your wallet through a secure smart contract.
                  </p>
                </div>
                
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">How do I know if I'm whitelisted?</h3>
                  <p className="text-light-muted">
                    Connect your Solana wallet on this page, and we'll automatically check if your address is on the whitelist.
                    If you participated in our community events or were an early supporter, you may be eligible.
                  </p>
                </div>
                
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Do I need to pay for claiming?</h3>
                  <p className="text-light-muted">
                    No. If your wallet is whitelisted, you can claim your tokens for free. 
                    You'll only need a small amount of SOL in your wallet to cover the network transaction fee.
                  </p>
                </div>
                
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">I'm not whitelisted. How can I get OCF tokens?</h3>
                  <p className="text-light-muted">
                    You can participate in our token presale if it's still active. Visit our <Link href="/presale" className="text-primary hover:text-primary-light transition-colors">presale page</Link> for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
                <p className="text-light-muted">Get the latest updates on token events, distribution, and platform launches.</p>
              </div>
              <NewsletterSubscribe />
            </div>
          </div>
        </section>
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default TokenClaimPage; 