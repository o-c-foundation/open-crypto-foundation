import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaCoins, FaArrowRight, FaInfoCircle, FaHeart, FaFileAlt, FaRocket, FaUsers, FaExclamationTriangle, FaExternalLinkAlt } from 'react-icons/fa';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';
import SolanaIcon from '../components/icons/SolanaIcon';

export default function ClaimPage() {
  const [walletAddress, setWalletAddress] = useState('');
  const [claimWalletAddress, setClaimWalletAddress] = useState('');
  const [allocation, setAllocation] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimComplete, setClaimComplete] = useState(false);
  const [error, setError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showDevnetGuide, setShowDevnetGuide] = useState(false);

  // Function to check allocation amount
  const checkAllocation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate wallet address (basic check for now)
    if (!walletAddress.trim()) {
      setError('Please enter a valid wallet address');
      return;
    }

    setIsChecking(true);
    setError('');

    try {
      // Simulate API call - generate random allocation between 6M and 10M
      await new Promise(resolve => setTimeout(resolve, 1500)); // simulate network delay
      
      const randomAllocation = Math.floor(Math.random() * (10000000 - 6000000 + 1)) + 6000000;
      setAllocation(randomAllocation);
    } catch (err) {
      setError('Error checking allocation. Please try again.');
      console.error(err);
    } finally {
      setIsChecking(false);
    }
  };

  // Function to claim tokens
  const claimTokens = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate wallet address
    if (!claimWalletAddress.trim()) {
      setError('Please enter a valid wallet address');
      return;
    }

    // Verify terms acceptance
    if (!termsAccepted) {
      setError('Please accept the devnet token terms before claiming');
      return;
    }

    setIsClaiming(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)); // simulate network delay
      
      // Store claim data in localStorage for admin tracking
      const existingClaims = JSON.parse(localStorage.getItem('claimLog') || '[]');
      const newClaim = {
        timestamp: new Date().toISOString(),
        walletAddress: claimWalletAddress,
        allocation: allocation,
        status: 'pending'
      };
      localStorage.setItem('claimLog', JSON.stringify([...existingClaims, newClaim]));
      
      // Send email notification (in real implementation, this would be a server-side API call)
      // For demo/mockup purposes, we're just simulating this process
      console.log(`Email sent to info@opencryptofoundation.com with:
        Wallet: ${claimWalletAddress}
        Allocation: ${allocation?.toLocaleString()} OCF`);
      
      // In a real implementation, you would call your API:
      /*
      await fetch('/api/claim-tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: claimWalletAddress,
          allocation
        }),
      });
      */
      
      setClaimComplete(true);
    } catch (err) {
      setError('Error claiming tokens. Please try again.');
      console.error(err);
    } finally {
      setIsClaiming(false);
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
                OCF Token Claim Portal
              </h1>
              <p className="text-xl text-light-muted mb-4">
                Claim your allocated OCF tokens securely through our platform.
                Check if your wallet address is whitelisted and claim your tokens.
              </p>
              
              {/* Devnet Notice */}
              <div className="p-5 bg-yellow-900/20 border border-yellow-900/30 rounded-lg mb-8">
                <div className="flex items-center justify-center mb-3">
                  <FaExclamationTriangle className="text-yellow-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Important: Devnet Tokens</h3>
                </div>
                <p className="text-light-muted mb-3">
                  <strong>The tokens you claim here are on the Solana Devnet, not the Mainnet.</strong> These devnet tokens 
                  can be redeemed for real mainnet tokens one day before the official launch. 
                  You will need to configure your wallet to connect to the Solana Devnet to see your claimed tokens.
                </p>
                <button 
                  onClick={() => setShowDevnetGuide(!showDevnetGuide)}
                  className="text-primary hover:text-primary-light transition-colors focus:outline-none"
                >
                  {showDevnetGuide ? 'Hide Devnet Setup Guide' : 'Show Devnet Setup Guide'}
                </button>
              </div>
              
              {/* Devnet Setup Guide */}
              {showDevnetGuide && (
                <div className="p-6 bg-dark-light/10 border border-dark-light/30 rounded-lg mb-6 text-left">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">How to Connect to Solana Devnet</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Phantom Wallet Guide */}
                    <div className="bg-dark-card p-5 rounded-lg border border-dark-light/30">
                      <div className="flex items-center mb-4">
                        <Image 
                          src="https://phantom.app/favicon.ico" 
                          alt="Phantom Logo" 
                          width={24} 
                          height={24} 
                          className="mr-2" 
                        />
                        <h4 className="text-lg font-semibold text-white">Phantom Wallet</h4>
                      </div>
                      <ol className="space-y-3">
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">1</span>
                          </div>
                          <p className="text-light-muted">Open Phantom wallet and click on the gear icon ⚙️ in the bottom right.</p>
                        </li>
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">2</span>
                          </div>
                          <p className="text-light-muted">Select "Developer Settings".</p>
                        </li>
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">3</span>
                          </div>
                          <p className="text-light-muted">Toggle "Change Network" to enable it.</p>
                        </li>
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">4</span>
                          </div>
                          <p className="text-light-muted">Return to the main menu, click on the network name at the top, and select "Devnet".</p>
                        </li>
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">5</span>
                          </div>
                          <p className="text-light-muted">You'll see a purple indicator showing you're on Devnet.</p>
                        </li>
                      </ol>
                      <a 
                        href="https://help.phantom.app/hc/en-us/articles/8071074929043-How-to-switch-networks-in-Phantom" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-primary hover:text-primary-light mt-4 transition-colors"
                      >
                        Official Phantom Guide <FaExternalLinkAlt className="ml-1" size={12} />
                      </a>
                    </div>
                    
                    {/* Solflare Wallet Guide */}
                    <div className="bg-dark-card p-5 rounded-lg border border-dark-light/30">
                      <div className="flex items-center mb-4">
                        <Image 
                          src="https://solflare.com/assets/images/favicon-32x32.png" 
                          alt="Solflare Logo" 
                          width={24} 
                          height={24} 
                          className="mr-2" 
                        />
                        <h4 className="text-lg font-semibold text-white">Solflare Wallet</h4>
                      </div>
                      <ol className="space-y-3">
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">1</span>
                          </div>
                          <p className="text-light-muted">Open Solflare wallet and click on the network dropdown at the top of the screen.</p>
                        </li>
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">2</span>
                          </div>
                          <p className="text-light-muted">Select "Devnet" from the dropdown menu.</p>
                        </li>
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">3</span>
                          </div>
                          <p className="text-light-muted">You'll see a label indicating you're on Devnet.</p>
                        </li>
                        <li className="flex">
                          <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">4</span>
                          </div>
                          <p className="text-light-muted">If you need to switch back to mainnet later, use the same dropdown.</p>
                        </li>
                      </ol>
                      <a 
                        href="https://docs.solflare.com/solflare/getting-started/networks" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-primary hover:text-primary-light mt-4 transition-colors"
                      >
                        Official Solflare Guide <FaExternalLinkAlt className="ml-1" size={12} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-dark-light/20 p-4 rounded-lg mt-6">
                    <h4 className="text-white font-medium mb-2">What does this mean for you?</h4>
                    <p className="text-light-muted text-sm">
                      After claiming your tokens, you'll need to be on Devnet to see them in your wallet. When we launch on 
                      mainnet, you'll receive an email with instructions on how to redeem your devnet tokens for real mainnet 
                      tokens. This process will be available 24 hours before the public launch.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Community Appreciation Message */}
              <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg mt-8 mb-6">
                <div className="flex items-center justify-center mb-3">
                  <FaHeart className="text-primary mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Thank You to Our Community</h3>
                </div>
                <p className="text-light-muted mb-0">
                  We deeply appreciate your support and belief in our mission to make DeFi safer and more accessible. 
                  Your early participation helps us build a stronger foundation for the entire ecosystem. 
                  Together, we're creating a more secure and transparent future for cryptocurrency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Claim Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar with info */}
                <div className="lg:col-span-1">
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6 mb-6">
                    <h2 className="text-xl font-bold text-white mb-4">Important Links</h2>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/whitepaper" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <FaFileAlt className="mr-2" size={16} />
                          <span>Whitepaper</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/roadmap" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <FaRocket className="mr-2" size={16} />
                          <span>Roadmap</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/presale" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <FaCoins className="mr-2" size={16} />
                          <span>Token Presale</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tokenomics" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <SolanaIcon className="mr-2" size={16} />
                          <span>Tokenomics</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <FaUsers className="mr-2" size={16} />
                          <span>About Us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6">
                    <h2 className="text-xl font-bold text-white mb-4">How It Works</h2>
                    <ol className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                          <span className="text-primary text-sm font-bold">1</span>
                        </div>
                        <div>
                          <p className="text-light-muted">Enter your wallet address</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                          <span className="text-primary text-sm font-bold">2</span>
                        </div>
                        <div>
                          <p className="text-light-muted">Check your token allocation</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary/20 rounded-full flex items-center justify-center w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                          <span className="text-primary text-sm font-bold">3</span>
                        </div>
                        <div>
                          <p className="text-light-muted">Claim your tokens with one click</p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-6 p-4 bg-dark-light/30 rounded-lg">
                      <div className="flex">
                        <div className="mr-3 text-primary mt-1">
                          <FaInfoCircle size={18} />
                        </div>
                        <p className="text-sm text-light-muted">
                          After claiming, your tokens will be sent to your wallet within 10-15 minutes. Remember to connect to Solana Devnet to see them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Claim Form */}
                <div className="lg:col-span-2">
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Claim Your Tokens</h2>
                    
                    {/* Error message */}
                    {error && (
                      <div className="p-4 bg-red-900/20 border border-red-900/30 rounded-lg mb-6">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}
                    
                    {!claimComplete ? (
                      <div className="space-y-8">
                        {/* Check Allocation Form */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-white mb-4">Step 1: Check Your Allocation</h3>
                          <form onSubmit={checkAllocation}>
                            <div className="mb-4">
                              <label htmlFor="wallet-address" className="block text-light-muted mb-2">Enter Your Wallet Address</label>
                              <input
                                type="text"
                                id="wallet-address"
                                className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                                placeholder="Your Solana wallet address"
                                value={walletAddress}
                                onChange={(e) => setWalletAddress(e.target.value)}
                                disabled={isChecking}
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                              disabled={isChecking || !walletAddress}
                            >
                              {isChecking ? (
                                <div className="flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                  <span>Checking...</span>
                                </div>
                              ) : (
                                'Check Allocation Amount'
                              )}
                            </button>
                          </form>
                        </div>
                        
                        {/* Allocation Results */}
                        {allocation !== null && (
                          <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Your Allocation</h3>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-light-muted">Token Amount:</span>
                              <span className="text-2xl font-bold text-white">{allocation.toLocaleString()} OCF</span>
                            </div>
                            <div className="text-sm text-light-muted mb-4">
                              Congratulations! You are eligible to claim {allocation.toLocaleString()} OCF tokens based on your whitelist status.
                            </div>
                            <div className="flex justify-center">
                              <Link href="#claim-section" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
                                Proceed to Claim <FaArrowRight className="ml-2" size={14} />
                              </Link>
                            </div>
                          </div>
                        )}
                        
                        {/* Claim Form */}
                        {allocation !== null && (
                          <div id="claim-section">
                            <h3 className="text-xl font-semibold text-white mb-4">Step 2: Claim Your Tokens</h3>
                            <form onSubmit={claimTokens}>
                              <div className="mb-4">
                                <label htmlFor="claim-wallet-address" className="block text-light-muted mb-2">Confirm Your Wallet Address</label>
                                <input
                                  type="text"
                                  id="claim-wallet-address"
                                  className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                                  placeholder="Your Solana wallet address"
                                  value={claimWalletAddress}
                                  onChange={(e) => setClaimWalletAddress(e.target.value)}
                                  disabled={isClaiming}
                                />
                              </div>
                              
                              {/* Terms Agreement Checkbox */}
                              <div className="mb-6 p-4 bg-yellow-900/10 border border-yellow-900/20 rounded-lg">
                                <div className="flex items-start mb-2">
                                  <div className="flex items-center h-5 mt-1">
                                    <input
                                      id="terms-checkbox"
                                      type="checkbox"
                                      checked={termsAccepted}
                                      onChange={() => setTermsAccepted(!termsAccepted)}
                                      className="w-4 h-4 bg-dark border-dark-light/50 rounded focus:ring-primary"
                                    />
                                  </div>
                                  <label htmlFor="terms-checkbox" className="ml-3 text-sm text-light-muted">
                                    <span className="font-medium text-white">I understand and agree that:</span>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                      <li>The tokens I'm claiming are on the Solana Devnet (test network), not mainnet.</li>
                                      <li>I will need to configure my wallet to connect to Devnet to see these tokens.</li>
                                      <li>I will be able to redeem these devnet tokens for real mainnet tokens 1 day before the official launch.</li>
                                      <li>I will receive instructions via email on how to complete the mainnet token redemption.</li>
                                    </ul>
                                  </label>
                                </div>
                              </div>
                              
                              <button
                                type="submit"
                                className="w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                                disabled={isClaiming || !claimWalletAddress || !termsAccepted}
                              >
                                {isClaiming ? (
                                  <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    <span>Processing...</span>
                                  </div>
                                ) : (
                                  'Claim Your Tokens'
                                )}
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Success message after claiming
                      <div className="p-8 bg-green-900/20 border border-green-900/30 rounded-lg text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center">
                            <FaCheckCircle className="text-green-500" size={32} />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Claim Submitted Successfully!</h3>
                        <p className="text-light-muted mb-6">
                          Your claim for {allocation?.toLocaleString()} OCF tokens has been submitted. 
                          Tokens will be sent to your wallet within 10-15 minutes.
                        </p>
                        <div className="p-4 bg-dark-light/30 rounded-lg">
                          <p className="text-sm text-light-muted">
                            <FaInfoCircle className="inline-block mr-2" size={16} />
                            Remember to switch your wallet to <strong>Solana Devnet</strong> to see your tokens.
                            These devnet tokens can be redeemed for real mainnet tokens 1 day before the public launch.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">What is token claiming?</h3>
                  <p className="text-light-muted">
                    Token claiming is the process of receiving your allocated OCF tokens if your wallet address is on our whitelist. 
                    Tokens are transferred directly to your wallet after you complete the claim process.
                  </p>
                </div>
                
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Why are tokens on Devnet instead of Mainnet?</h3>
                  <p className="text-light-muted">
                    We're distributing tokens on Devnet first as part of our controlled launch strategy. This allows us to test distribution systems, 
                    gather feedback, and ensure everything works smoothly before the mainnet launch. Devnet tokens will be exchangeable for mainnet tokens 
                    one day before our public launch.
                  </p>
                </div>
                
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">How do I know if I'm whitelisted?</h3>
                  <p className="text-light-muted">
                    Enter your wallet address in the "Check Your Allocation" section above. If you're whitelisted, 
                    you'll see your token allocation amount. If you participated in our community events or were an early supporter, 
                    you may be eligible.
                  </p>
                </div>
                
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">How long does it take to receive my tokens?</h3>
                  <p className="text-light-muted">
                    After claiming, your devnet tokens will be sent to your wallet within 10-15 minutes. Remember that you need to
                    switch your wallet to Solana Devnet to see them. When it's time for the mainnet swap, you'll receive detailed instructions 
                    by email.
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
} 