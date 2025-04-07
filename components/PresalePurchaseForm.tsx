import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FaWallet, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import { calculateTokenAmount, purchaseAllocationTickets, PRESALE_CONFIG, getUserAllocation } from '../utils/presaleContract';
import { useClientSideOnly } from '../hooks/useClientSideOnly';

interface PresalePurchaseFormProps {
  className?: string;
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
  
  // Fetch wallet balance
  useEffect(() => {
    const getBalance = async () => {
      if (wallet.publicKey) {
        try {
          const balance = await connection.getBalance(wallet.publicKey);
          setWalletBalance(balance / LAMPORTS_PER_SOL);
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
          if (typeof allocation === 'object' && 'allocatedTokens' in allocation) {
            setUserAllocation(allocation.allocatedTokens);
          } else {
            setUserAllocation(allocation as number);
          }
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
      
      const receipt = await purchaseAllocationTickets(connection, wallet, solValue);
      
      setStatusMessage(`Transaction successful! You have purchased ${receipt.tokenAmount.toLocaleString()} OCF tokens.`);
      setIsSuccess(true);
      
      // Reset form
      setSolAmount('');
      setTokenAmount(0);
      setUsdAmount(0);
      
      // Update balance
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setWalletBalance(balance / LAMPORTS_PER_SOL);
      }
      
      // Update allocation
      if (wallet.publicKey) {
        const allocation = await getUserAllocation(connection, wallet.publicKey);
        if (typeof allocation === 'object' && 'allocatedTokens' in allocation) {
          setUserAllocation(allocation.allocatedTokens);
        } else {
          setUserAllocation(allocation as number);
        }
      }
      
    } catch (err) {
      console.error('Error processing purchase:', err);
      setErrorMessage(err instanceof Error ? err.message : 'Transaction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // If not client-side, return a minimal placeholder
  if (!isClient) {
    return <div className="animate-pulse bg-primary/20 h-40 rounded-lg"></div>;
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
          {/* Purchase Form */}
          <div className="space-y-5">
            {errorMessage && (
              <div className="p-3 bg-red-900/20 border border-red-900/30 rounded-md">
                <p className="text-red-400 text-sm">{errorMessage}</p>
              </div>
            )}
            
            {isSuccess && (
              <div className="p-4 bg-green-900/20 border border-green-900/30 rounded-lg mb-4">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" size={20} />
                  <p className="text-light-muted">{statusMessage}</p>
                </div>
              </div>
            )}
            
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
            
            <div className="flex justify-between items-center p-3 bg-dark-light/10 rounded-lg">
              <span className="text-light-muted">Your allocation:</span>
              <span className="text-white font-semibold">{userAllocation.toLocaleString()} OCF</span>
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