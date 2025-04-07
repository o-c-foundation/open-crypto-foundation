import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaCheck, FaCoins, FaWallet, FaExternalLinkAlt, FaInfoCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';
import SolanaIcon from '../components/icons/SolanaIcon';

// Dynamically import wallet components to avoid SSR issues
const WalletConnectionComponents = dynamic(
  () => import('../components/WalletConnectionComponents'), 
  { ssr: false }
);

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
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [whitelistStatus, setWhitelistStatus] = useState<WhitelistStatus | null>(null);
  const [claimResponse, setClaimResponse] = useState<ClaimResponse | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  // Set isClient to true when component mounts on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a simple loading state during SSR
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
          
          <section className="py-16 bg-dark">
            <div className="container px-4 mx-auto">
              <div className="flex justify-center">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-primary/20 h-12 w-12"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-primary/20 rounded"></div>
                      <div className="h-4 bg-primary/20 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

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
                    
                    <WalletConnectionComponents 
                      isLoading={isLoading}
                      error={error}
                      whitelistStatus={whitelistStatus}
                      claimResponse={claimResponse}
                      setWhitelistStatus={setWhitelistStatus}
                      setClaimResponse={setClaimResponse}
                      setIsLoading={setIsLoading}
                      setError={setError}
                      apiBaseUrl={API_BASE_URL}
                    />
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