import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FaWallet, FaInfoCircle, FaCheckCircle, FaSpinner, FaExclamationTriangle, FaExternalLinkAlt, FaEnvelope, FaSyncAlt } from 'react-icons/fa';
import { calculateTokenAmount, sendSolToTreasury, PRESALE_CONFIG, getUserAllocation, getSolPrice } from '../utils/directSolTransfer';
import { useClientSideOnly } from '../hooks/useClientSideOnly';

interface PresalePurchaseFormProps {
  className?: string;
}

interface UserFormData {
  name: string;
  email: string;
  telegram: string;
  walletAddress: string;
}

const PresalePurchaseForm: React.FC<PresalePurchaseFormProps> = ({ className = '' }) => {
  // This component is only rendered client-side through dynamic import with ssr: false
  const { connection } = useConnection();
  const wallet = useWallet();
  const isClient = useClientSideOnly();
  
  const [solAmount, setSolAmount] = useState<string>('');
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [usdAmount, setUsdAmount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [userAllocation, setUserAllocation] = useState<number>(0);
  const [txSignature, setTxSignature] = useState<string>('');
  const [showUserForm, setShowUserForm] = useState<boolean>(false);
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [showContactMessage, setShowContactMessage] = useState<boolean>(false);
  const [refreshingSolPrice, setRefreshingSolPrice] = useState<boolean>(false);
  const [currentSolPrice, setCurrentSolPrice] = useState<number>(PRESALE_CONFIG.solPriceUSD);
  
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    telegram: '',
    walletAddress: '',
  });
  
  // Fetch wallet balance
  useEffect(() => {
    const getBalance = async () => {
      if (wallet.publicKey) {
        try {
          const balance = await connection.getBalance(wallet.publicKey);
          setWalletBalance(balance / LAMPORTS_PER_SOL);
          
          // Update the wallet address in the form
          setFormData(prev => ({
            ...prev,
            walletAddress: wallet.publicKey?.toString() || '',
          }));
        } catch (err) {
          console.error('Error fetching balance:', err);
        }
      }
    };
    
    getBalance();
    
    // Set up interval to refresh balance
    const intervalId = setInterval(getBalance, 30000);
    
    return () => clearInterval(intervalId);
  }, [wallet.publicKey, connection]);

  // Get SOL price and set up periodic refresh
  useEffect(() => {
    const updateSolPrice = async () => {
      try {
        const price = await getSolPrice();
        setCurrentSolPrice(price);
        
        // Re-calculate token amount if SOL amount is set
        if (solAmount) {
          const solValue = parseFloat(solAmount);
          if (!isNaN(solValue)) {
            const usd = solValue * price;
            setUsdAmount(usd);
            setTokenAmount(calculateTokenAmount(solValue));
            
            // Validation
            if (usd < PRESALE_CONFIG.minPurchaseUSD) {
              setErrorMessage(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD.toFixed(2)}`);
            } else if (usd > PRESALE_CONFIG.maxPurchaseUSD) {
              setErrorMessage(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD.toFixed(2)}`);
            } else {
              setErrorMessage('');
            }
          }
        }
      } catch (error) {
        console.error('Error updating SOL price:', error);
      }
    };
    
    // Update price immediately
    updateSolPrice();
    
    // Set up interval to refresh price every 5 minutes
    const priceIntervalId = setInterval(updateSolPrice, 5 * 60 * 1000);
    
    return () => clearInterval(priceIntervalId);
  }, [solAmount]);
  
  // Get user allocation
  useEffect(() => {
    const getAllocation = async () => {
      if (wallet.publicKey) {
        try {
          const allocation = await getUserAllocation(connection, wallet.publicKey);
          setUserAllocation(allocation);
        } catch (err) {
          console.error('Error fetching allocation:', err);
        }
      }
    };
    
    getAllocation();
  }, [wallet.publicKey, connection]);
  
  // Manually refresh SOL price
  const handleRefreshSolPrice = async () => {
    setRefreshingSolPrice(true);
    try {
      const price = await getSolPrice();
      setCurrentSolPrice(price);
      
      // Re-calculate if SOL amount is present
      if (solAmount) {
        const solValue = parseFloat(solAmount);
        if (!isNaN(solValue)) {
          const usd = solValue * price;
          setUsdAmount(usd);
          setTokenAmount(calculateTokenAmount(solValue));
        }
      }
    } catch (error) {
      console.error('Error refreshing SOL price:', error);
    } finally {
      setRefreshingSolPrice(false);
    }
  };
  
  // Handle SOL amount input change
  const handleSolAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value.replace(/[^0-9.]/g, '');
    setSolAmount(amount);
    
    if (amount === '') {
      setTokenAmount(0);
      setUsdAmount(0);
    } else {
      const solValue = parseFloat(amount);
      if (!isNaN(solValue)) {
        const usd = solValue * currentSolPrice;
        setUsdAmount(usd);
        setTokenAmount(calculateTokenAmount(solValue));
        
        // Validation
        if (usd < PRESALE_CONFIG.minPurchaseUSD) {
          setErrorMessage(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD.toFixed(2)}`);
        } else if (usd > PRESALE_CONFIG.maxPurchaseUSD) {
          setErrorMessage(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD.toFixed(2)}`);
        } else {
          setErrorMessage('');
        }
      }
    }
  };
  
  // Handle form data change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle purchase
  const handlePurchase = async () => {
    if (!wallet.publicKey || !wallet.signTransaction) {
      setErrorMessage('Please connect your wallet');
      return;
    }
    
    const solValue = parseFloat(solAmount);
    if (isNaN(solValue) || solValue <= 0) {
      setErrorMessage('Please enter a valid amount');
      return;
    }
    
    const usdValue = solValue * currentSolPrice;
    if (usdValue < PRESALE_CONFIG.minPurchaseUSD) {
      setErrorMessage(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD.toFixed(2)}`);
      return;
    }
    
    if (usdValue > PRESALE_CONFIG.maxPurchaseUSD) {
      setErrorMessage(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD.toFixed(2)}`);
      return;
    }
    
    if (solValue > walletBalance) {
      setErrorMessage('Insufficient SOL balance');
      return;
    }
    
    try {
      setIsLoading(true);
      setErrorMessage('');
      setStatusMessage('Preparing transaction...');
      
      // Update balance before transaction
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        const currentBalance = balance / LAMPORTS_PER_SOL;
        
        if (solValue > currentBalance) {
          setErrorMessage('Insufficient SOL balance');
          setIsLoading(false);
          return;
        }
      }
      
      setStatusMessage('Please approve the transaction in your wallet...');
      
      // Send SOL directly to treasury wallet
      const receipt = await sendSolToTreasury(connection, wallet, solValue);
      
      // Reset retry count on success
      setRetryCount(0);
      
      // Save transaction signature for reference
      setTxSignature(receipt.txSignature);
      
      setStatusMessage(`Transaction successful! You have purchased ${receipt.tokenAmount.toLocaleString()} OCF tokens.`);
      setIsSuccess(true);
      
      // Show the user form to collect delivery information
      setShowUserForm(true);
      
      // Update balance
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setWalletBalance(balance / LAMPORTS_PER_SOL);
      }
      
    } catch (err) {
      console.error('Error processing purchase:', err);
      
      // Increment retry count
      const newRetryCount = retryCount + 1;
      setRetryCount(newRetryCount);
      
      if (newRetryCount >= 3) {
        // After 3 failed attempts, show the contact message
        setShowContactMessage(true);
      } else {
        const errorMessage = err instanceof Error ? err.message : 'Transaction failed. Please try again.';
        setErrorMessage(`Failed (attempt ${newRetryCount}/3): ${errorMessage}`);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name) {
      setErrorMessage('Please provide your name and email address');
      return;
    }
    
    setFormSubmitting(true);
    
    try {
      // Send email notification (would connect to backend API in production)
      // For this demo, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormSubmitted(true);
      setErrorMessage('');
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage('Failed to submit form. Please try again or contact support.');
    } finally {
      setFormSubmitting(false);
    }
  };
  
  // Format token price display
  const formatTokenPrice = (price: number): string => {
    if (price < 0.0001) {
      return price.toExponential(4);
    }
    return price.toFixed(price < 0.01 ? 6 : 4);
  };

  // Format price for display with appropriate decimal places
  const formatPrice = (price: number): string => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
  
  if (!isClient) {
    return null;
  }
  
  return (
    <div className={`${className} max-w-2xl mx-auto`}>
      {/* Contact Support Popup */}
      {showContactMessage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-card border border-primary/30 rounded-lg p-4 md:p-6 max-w-md w-full relative">
            <button 
              onClick={() => setShowContactMessage(false)}
              className="absolute top-2 right-2 text-light-muted hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            
            <div className="text-center mb-6">
              {formSubmitted ? (
                <>
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-light-muted mb-4">
                    We've received your information and will be in touch shortly to assist with your purchase.
                  </p>
                  <button
                    onClick={() => setShowContactMessage(false)}
                    className="py-2 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors"
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEnvelope className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Contact Support</h3>
                  <p className="text-light-muted mb-4">
                    We noticed you're having difficulty completing your purchase. Please provide your details below and our team will help you complete your transaction.
                  </p>
                  
                  <form onSubmit={handleContactSubmit} className="text-left space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-light-muted mb-1 text-sm">Your Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contact-email" className="block text-light-muted mb-1 text-sm">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contact-telegram" className="block text-light-muted mb-1 text-sm">Telegram Username (optional)</label>
                      <input
                        id="contact-telegram"
                        name="telegram"
                        type="text"
                        value={formData.telegram}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="w-full py-2 px-4 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                      >
                        {formSubmitting ? (
                          <div className="flex items-center justify-center">
                            <FaSpinner className="animate-spin mr-2" />
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          'Submit Request'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    
      {/* Main Form Content */}
      <div className="bg-dark-card p-4 md:p-6 rounded-lg border border-dark-light/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">OCF Token Presale</h2>
          {isClient && (
            <div className="flex items-center text-sm">
              <div className="text-light-muted flex items-center">
                <span className="mr-1">Solana Price:</span>
                <span className="text-white font-semibold">${formatPrice(currentSolPrice)}</span>
                <button 
                  onClick={handleRefreshSolPrice}
                  disabled={refreshingSolPrice}
                  className="ml-2 text-primary hover:text-primary-light p-1 rounded-full transition-colors disabled:text-primary/50"
                  title="Refresh SOL price"
                >
                  <FaSyncAlt className={refreshingSolPrice ? "animate-spin" : ""} size={14} />
                </button>
              </div>
            </div>
          )}
        </div>

        {!wallet.connected ? (
          <div className="text-center py-6">
            <p className="text-light-muted mb-6">
              Please connect your Solana wallet to participate in the presale.
            </p>
            <div className="flex justify-center">
              <WalletMultiButton />
            </div>
          </div>
        ) : (
          <>
            {isSuccess && showUserForm ? (
              // User form for purchase information after successful transaction
              <div>
                <div className="mb-6 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Transaction Successful!</h3>
                      <p className="text-light-muted text-sm mb-2">
                        You've successfully purchased {tokenAmount.toLocaleString()} OCF tokens.
                      </p>
                      <p className="text-xs text-light-muted">
                        Transaction: <a 
                          href={`https://explorer.solana.com/tx/${txSignature}?cluster=devnet`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                        >
                          {txSignature.slice(0, 8)}...{txSignature.slice(-8)}
                          <FaExternalLinkAlt size={10} className="ml-1" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                {formSubmitted ? (
                  <div className="text-center p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <FaCheckCircle className="text-primary mx-auto mb-2" size={24} />
                    <h3 className="text-lg font-semibold text-white mb-2">Information Received!</h3>
                    <p className="text-light-muted mb-0">
                      Thank you for providing your details. We've recorded your information and will be in touch if needed.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    <h3 className="text-lg font-semibold text-white mb-4">Please provide your information</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-light-muted mb-1 text-sm">Your Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-light-muted mb-1 text-sm">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="telegram" className="block text-light-muted mb-1 text-sm">Telegram Username (optional)</label>
                        <input
                          id="telegram"
                          name="telegram"
                          type="text"
                          value={formData.telegram}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                          placeholder="@username"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="walletAddress" className="block text-light-muted mb-1 text-sm">Wallet Address</label>
                        <input
                          id="walletAddress"
                          name="walletAddress"
                          type="text"
                          value={formData.walletAddress}
                          readOnly
                          className="w-full px-3 py-2 bg-dark-light/30 rounded-lg border border-dark-light/50 text-light-muted focus:outline-none cursor-not-allowed text-sm"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={formSubmitting}
                          className="w-full py-2 px-4 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                        >
                          {formSubmitting ? (
                            <div className="flex items-center justify-center">
                              <FaSpinner className="animate-spin mr-2" />
                              <span>Submitting...</span>
                            </div>
                          ) : (
                            'Submit Information'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
                
                {/* Vesting information */}
                <div className="mt-6 p-4 bg-blue-900/10 border border-blue-900/20 rounded-lg">
                  <h3 className="text-base font-semibold text-white mb-2">Token Vesting Information</h3>
                  <p className="text-light-muted text-sm mb-3">
                    Your purchased tokens will follow our vesting schedule:
                  </p>
                  <ul className="text-sm text-light-muted space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>{PRESALE_CONFIG.vestingPercentageImmediate}%</strong> available immediately at TGE</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>{100 - PRESALE_CONFIG.vestingPercentageImmediate}%</strong> vested linearly over {PRESALE_CONFIG.vestingDurationMonths} months</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              // Purchase form
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-light-muted mb-1 text-sm">Your Balance</label>
                    <div className="flex items-center">
                      <FaWallet className="text-primary mr-2" />
                      <span className="text-white font-semibold">{walletBalance.toFixed(4)} SOL</span>
                    </div>
                  </div>
                  
                  <div className="bg-dark-light/10 p-3 md:p-4 rounded-lg border border-dark-light/20">
                    <div className="flex flex-wrap gap-2 justify-between items-center mb-3">
                      <div>
                        <span className="text-light-muted text-xs md:text-sm">Token Price: </span>
                        <span className="text-white font-medium text-xs md:text-sm">${PRESALE_CONFIG.tokenPrice.toFixed(6)} USD</span>
                      </div>
                      <div>
                        <span className="text-light-muted text-xs md:text-sm">≈ </span>
                        <span className="text-white font-medium text-xs md:text-sm">{formatTokenPrice(PRESALE_CONFIG.tokenPriceSOL)} SOL</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-between mb-4">
                      <div className="px-3 py-1.5 bg-dark-light/20 rounded border border-dark-light/20 text-center">
                        <p className="text-xs text-light-muted mb-1">Min Purchase</p>
                        <p className="text-sm text-white font-medium">${PRESALE_CONFIG.minPurchaseUSD.toFixed(2)}</p>
                      </div>
                      <div className="px-3 py-1.5 bg-dark-light/20 rounded border border-dark-light/20 text-center">
                        <p className="text-xs text-light-muted mb-1">Max Purchase</p>
                        <p className="text-sm text-white font-medium">${PRESALE_CONFIG.maxPurchaseUSD.toFixed(2)}</p>
                      </div>
                      <div className="px-3 py-1.5 bg-dark-light/20 rounded border border-dark-light/20 text-center">
                        <p className="text-xs text-light-muted mb-1">Your Allocation</p>
                        <p className="text-sm text-white font-medium">{userAllocation > 0 ? `$${userAllocation.toLocaleString()}` : 'No Limit'}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="solAmount" className="block text-light-muted mb-1 text-sm">Enter SOL Amount</label>
                    <div className="relative">
                      <input
                        id="solAmount"
                        type="text"
                        value={solAmount}
                        onChange={handleSolAmountChange}
                        className="w-full px-3 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                        placeholder="Enter SOL amount"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary-light text-xs"
                        onClick={() => {
                          if (walletBalance > 0) {
                            // Use max wallet balance minus a small amount for fees
                            const maxAmount = Math.max(0, walletBalance - 0.01).toFixed(2);
                            setSolAmount(maxAmount);
                            const solValue = parseFloat(maxAmount);
                            const usd = solValue * currentSolPrice;
                            setUsdAmount(usd);
                            setTokenAmount(calculateTokenAmount(solValue));
                            
                            // Validation
                            if (usd < PRESALE_CONFIG.minPurchaseUSD) {
                              setErrorMessage(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD.toFixed(2)}`);
                            } else if (usd > PRESALE_CONFIG.maxPurchaseUSD) {
                              setErrorMessage(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD.toFixed(2)}`);
                            } else {
                              setErrorMessage('');
                            }
                          }
                        }}
                      >
                        MAX
                      </button>
                    </div>
                    <div className="flex flex-wrap justify-between mt-1 text-xs text-light-muted">
                      <span>≈ ${usdAmount.toFixed(2)} USD</span>
                      <span>You'll receive: {tokenAmount.toLocaleString()} OCF</span>
                    </div>
                  </div>
                  
                  {errorMessage && (
                    <div className="p-3 bg-red-900/20 border border-red-900/30 rounded-lg">
                      <div className="flex items-start">
                        <FaExclamationTriangle className="text-red-400 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <p className="text-red-400 text-xs">{errorMessage}</p>
                      </div>
                    </div>
                  )}
                  
                  {isLoading && statusMessage && (
                    <div className="p-3 bg-blue-900/20 border border-blue-900/30 rounded-lg">
                      <div className="flex items-center">
                        <FaSpinner className="text-blue-400 mr-2 animate-spin" size={14} />
                        <p className="text-blue-400 text-xs">{statusMessage}</p>
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={handlePurchase}
                    disabled={isLoading || !solAmount || parseFloat(solAmount) <= 0}
                    className="w-full py-2 px-4 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin mr-2" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      'Purchase OCF Tokens'
                    )}
                  </button>
                </div>
                
                <div className="mt-6 bg-dark-light/10 p-4 rounded-lg border border-dark-light/20">
                  <div className="flex items-start">
                    <FaInfoCircle className="text-primary mt-0.5 mr-2 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-light-muted text-sm mb-2">Presale tokens will be distributed according to the following schedule:</p>
                      <ul className="text-xs text-light-muted space-y-1">
                        <li className="flex items-baseline">
                          <span className="text-primary mr-1.5">•</span>
                          <span><span className="font-semibold text-white">{PRESALE_CONFIG.vestingPercentageImmediate}%</span> unlocked at TGE (Token Generation Event)</span>
                        </li>
                        <li className="flex items-baseline">
                          <span className="text-primary mr-1.5">•</span>
                          <span><span className="font-semibold text-white">{100 - PRESALE_CONFIG.vestingPercentageImmediate}%</span> vested linearly over {PRESALE_CONFIG.vestingDurationMonths} months</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PresalePurchaseForm; 