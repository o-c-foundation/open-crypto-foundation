import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FaWallet, FaInfoCircle, FaCheckCircle, FaSpinner, FaExclamationTriangle, FaExternalLinkAlt } from 'react-icons/fa';
import { calculateTokenAmount, sendSolToTreasury, PRESALE_CONFIG, getUserAllocation } from '../utils/directSolTransfer';
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
        const usd = solValue * PRESALE_CONFIG.solPriceUSD;
        setUsdAmount(usd);
        setTokenAmount(calculateTokenAmount(solValue));
        
        // Validation
        if (usd < PRESALE_CONFIG.minPurchaseUSD) {
          setErrorMessage(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD}`);
        } else if (usd > PRESALE_CONFIG.maxPurchaseUSD) {
          setErrorMessage(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD}`);
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
    
    const usdValue = solValue * PRESALE_CONFIG.solPriceUSD;
    if (usdValue < PRESALE_CONFIG.minPurchaseUSD) {
      setErrorMessage(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD}`);
      return;
    }
    
    if (usdValue > PRESALE_CONFIG.maxPurchaseUSD) {
      setErrorMessage(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD}`);
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
      setErrorMessage(err instanceof Error ? err.message : 'Transaction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.email || !formData.walletAddress) {
      setErrorMessage('Email and wallet address are required');
      return;
    }
    
    try {
      setFormSubmitting(true);
      setErrorMessage('');
      
      // Create form data object
      const webFormData = new FormData();
      
      // Basic form details
      webFormData.append('access_key', '45ca5e36-5eaf-480d-8f74-0465e4d8bef3'); // Replace with your access key
      webFormData.append('subject', 'New OCF Token Presale Purchase');
      webFormData.append('from_name', 'OCF Presale');
      
      // Purchase details
      webFormData.append('sol_amount', solAmount);
      webFormData.append('token_amount', tokenAmount.toString());
      webFormData.append('usd_amount', usdAmount.toString());
      webFormData.append('tx_signature', txSignature);
      webFormData.append('timestamp', new Date().toISOString());
      
      // User form data
      Object.entries(formData).forEach(([key, value]) => {
        webFormData.append(key, value);
      });
      
      // Send form to web3forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: webFormData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormSubmitted(true);
        setStatusMessage('Your purchase information has been submitted. We will send your tokens soon!');
      } else {
        throw new Error(data.message || 'Failed to submit purchase information');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
    } finally {
      setFormSubmitting(false);
    }
  };
  
  // If not client-side, return a minimal placeholder
  if (!isClient) {
    return <div className="animate-pulse bg-primary/20 h-40 rounded-lg"></div>;
  }
  
  // If form submitted, show success message
  if (formSubmitted) {
    return (
      <div className={`${className} bg-dark-card border border-dark-light/30 p-8 rounded-lg`}>
        <div className="text-center mb-6">
          <div className="bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheckCircle className="text-green-500" size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Purchase Complete!</h3>
          <p className="text-light-muted">
            Thank you for participating in the OCF token presale. We have received your purchase information and will send your {tokenAmount.toLocaleString()} OCF tokens shortly.
          </p>
        </div>
        
        <div className="p-4 bg-dark-light/10 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-light-muted">Transaction:</span>
            <a 
              href={`https://solscan.io/tx/${txSignature}?cluster=devnet`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary flex items-center hover:text-primary-light"
            >
              <span className="text-xs truncate max-w-[180px]">{txSignature.slice(0, 8)}...{txSignature.slice(-8)}</span>
              <FaExternalLinkAlt className="ml-1" size={12} />
            </a>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-light-muted">Amount Paid:</span>
            <span className="text-white">{solAmount} SOL (${usdAmount.toFixed(2)})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-light-muted">Tokens Purchased:</span>
            <span className="text-white">{tokenAmount.toLocaleString()} OCF</span>
          </div>
        </div>
        
        <p className="text-xs text-light-muted text-center">
          Please save your transaction signature for reference. If you have any questions, contact our support team.
        </p>
      </div>
    );
  }
  
  return (
    <div className={`${className}`}>
      {!wallet.connected ? (
        <div className="flex flex-col items-center space-y-6">
          <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center w-full">
            <FaWallet className="text-primary text-3xl mx-auto mb-4" />
            <p className="text-light-muted mb-4">Connect your Solana wallet to participate in the OCF token presale</p>
            <WalletMultiButton className="!bg-primary hover:!bg-primary-light !transition-colors" />
          </div>
        </div>
      ) : (
        <>
          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-red-900/20 border border-red-900/30 rounded-md mb-4">
              <div className="flex items-start">
                <FaExclamationTriangle className="text-red-400 mr-2 mt-0.5" />
                <p className="text-red-400 text-sm">{errorMessage}</p>
              </div>
            </div>
          )}
          
          {/* Success Message */}
          {isSuccess && !showUserForm && (
            <div className="p-4 bg-green-900/20 border border-green-900/30 rounded-lg mb-4">
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" size={20} />
                <p className="text-light-muted">{statusMessage}</p>
              </div>
              <div className="mt-2">
                <a 
                  href={`https://solscan.io/tx/${txSignature}?cluster=devnet`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary flex items-center hover:text-primary-light"
                >
                  <span>View transaction</span>
                  <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </div>
          )}
          
          {/* Purchase Form */}
          {!showUserForm ? (
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="solAmount" className="text-light-muted text-sm">Amount (SOL)</label>
                  <span className="text-light-muted text-xs">Balance: {walletBalance.toFixed(4)} SOL</span>
                </div>
                <div className="relative">
                  <input
                    id="solAmount"
                    type="text"
                    value={solAmount}
                    onChange={handleSolAmountChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                    placeholder="Enter amount of SOL"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-dark-light/10 rounded-lg">
                <span className="text-light-muted">You'll receive:</span>
                <span className="text-white font-semibold">{tokenAmount.toLocaleString()} OCF</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-dark-light/10 rounded-lg">
                <span className="text-light-muted">USD equivalent:</span>
                <span className="text-white font-semibold">${usdAmount.toFixed(2)}</span>
              </div>
              
              <button
                onClick={handlePurchase}
                disabled={isLoading || !!errorMessage || solAmount === '' || parseFloat(solAmount) <= 0}
                className="w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    <span>{statusMessage || 'Processing...'}</span>
                  </div>
                ) : (
                  'Purchase OCF Tokens'
                )}
              </button>
            </div>
          ) : (
            /* User Form */
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Complete Your Purchase</h3>
              <p className="text-light-muted text-sm mb-4">
                Your payment has been received! Please provide your information so we can deliver your {tokenAmount.toLocaleString()} OCF tokens.
              </p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-light-muted text-sm mb-1">Name (Optional)</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-light-muted text-sm mb-1">Email Address <span className="text-red-400">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="telegram" className="block text-light-muted text-sm mb-1">Telegram Username (Optional)</label>
                  <input
                    id="telegram"
                    name="telegram"
                    type="text"
                    value={formData.telegram}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                    placeholder="@username"
                  />
                </div>
                
                <div>
                  <label htmlFor="walletAddress" className="block text-light-muted text-sm mb-1">Wallet Address <span className="text-red-400">*</span></label>
                  <input
                    id="walletAddress"
                    name="walletAddress"
                    type="text"
                    value={formData.walletAddress}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                    placeholder="Solana wallet address for token delivery"
                  />
                  <p className="mt-1 text-xs text-light-muted">This is where your OCF tokens will be sent</p>
                </div>
                
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              </form>
            </div>
          )}
          
          <div className="mt-4 flex items-center justify-center text-primary text-sm">
            <FaWallet className="mr-2" size={14} />
            <span className="text-primary">Connected: {wallet.publicKey?.toString().slice(0, 4)}...{wallet.publicKey?.toString().slice(-4)}</span>
          </div>
        </>
      )}
      
      {/* Vesting Information */}
      <div className="mt-8 p-4 bg-dark-light/20 rounded-lg">
        <h3 className="text-white text-sm font-medium mb-2">Vesting Information</h3>
        <p className="text-light-muted text-xs">
          {PRESALE_CONFIG.vestingPercentageImmediate}% of tokens will be available immediately after the presale ends.
          The remaining {100 - PRESALE_CONFIG.vestingPercentageImmediate}% will be vested linearly over {PRESALE_CONFIG.vestingDurationMonths} months.
        </p>
      </div>
    </div>
  );
};

export default PresalePurchaseForm; 