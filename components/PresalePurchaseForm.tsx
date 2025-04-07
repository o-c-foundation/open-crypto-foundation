import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FaWallet, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import { calculateTokenAmount, purchaseAllocationTickets, PRESALE_CONFIG, getUserAllocation } from '../utils/presaleContract';

interface PresalePurchaseFormProps {
  className?: string;
}

const PresalePurchaseForm: React.FC<PresalePurchaseFormProps> = ({ className = '' }) => {
  const { connection } = useConnection();
  const wallet = useWallet();
  
  const [solAmount, setSolAmount] = useState<string>('');
  const [estimatedTokens, setEstimatedTokens] = useState<string>('0');
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [purchaseStatus, setPurchaseStatus] = useState<'none' | 'loading' | 'success' | 'error'>('none');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [userAllocation, setUserAllocation] = useState<{
    allocatedTokens: number;
    vestedTokens: number;
  }>({ allocatedTokens: 0, vestedTokens: 0 });

  // Get wallet balance when wallet is connected
  useEffect(() => {
    const getBalance = async () => {
      if (wallet.publicKey) {
        try {
          const balance = await connection.getBalance(wallet.publicKey);
          setWalletBalance(balance / LAMPORTS_PER_SOL);
        } catch (error) {
          console.error('Error fetching balance:', error);
          setWalletBalance(0);
        }
      } else {
        setWalletBalance(0);
      }
    };

    getBalance();
    
    // Set up interval to refresh balance every 15 seconds
    const intervalId = setInterval(getBalance, 15000);
    
    return () => clearInterval(intervalId);
  }, [wallet.publicKey, connection]);

  // Get user's allocation when wallet is connected
  useEffect(() => {
    const fetchUserAllocation = async () => {
      if (wallet.publicKey) {
        try {
          const allocation = await getUserAllocation(connection, wallet.publicKey);
          setUserAllocation(allocation);
        } catch (error) {
          console.error('Error fetching user allocation:', error);
        }
      } else {
        setUserAllocation({ allocatedTokens: 0, vestedTokens: 0 });
      }
    };

    fetchUserAllocation();
  }, [wallet.publicKey, connection]);

  // Calculate estimated tokens when SOL amount changes
  useEffect(() => {
    if (solAmount && !isNaN(parseFloat(solAmount))) {
      const tokenAmount = calculateTokenAmount(parseFloat(solAmount));
      setEstimatedTokens(tokenAmount.toLocaleString(undefined, { maximumFractionDigits: 0 }));
    } else {
      setEstimatedTokens('0');
    }
  }, [solAmount]);

  // Handle SOL amount input change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setSolAmount(value);
    }
  };

  // Set maximum amount (wallet balance)
  const handleSetMaxAmount = () => {
    if (wallet.connected && walletBalance > 0) {
      // Leave a small amount for transaction fees
      const max = Math.max(0, walletBalance - 0.01).toFixed(4);
      setSolAmount(max);
    }
  };

  // Handle purchase button click
  const handlePurchase = async () => {
    if (!wallet.connected) {
      return;
    }

    if (!solAmount || parseFloat(solAmount) <= 0) {
      setStatusMessage('Please enter a valid SOL amount');
      setPurchaseStatus('error');
      return;
    }

    // Convert to number
    const solAmountNum = parseFloat(solAmount);
    
    // Validate against min/max purchase
    const usdValue = solAmountNum * PRESALE_CONFIG.solPriceUSD;
    if (usdValue < PRESALE_CONFIG.minPurchaseUSD) {
      setStatusMessage(`Minimum purchase amount is $${PRESALE_CONFIG.minPurchaseUSD}`);
      setPurchaseStatus('error');
      return;
    }

    if (usdValue > PRESALE_CONFIG.maxPurchaseUSD) {
      setStatusMessage(`Maximum purchase amount is $${PRESALE_CONFIG.maxPurchaseUSD}`);
      setPurchaseStatus('error');
      return;
    }

    // Check if user has enough balance
    if (solAmountNum > walletBalance) {
      setStatusMessage('Insufficient SOL balance');
      setPurchaseStatus('error');
      return;
    }

    try {
      setIsLoading(true);
      setPurchaseStatus('loading');
      setStatusMessage('Processing your purchase...');

      // Execute the purchase
      const receipt = await purchaseAllocationTickets(connection, wallet, solAmountNum);
      
      // Update status
      setPurchaseStatus('success');
      setStatusMessage(`Successfully purchased allocation tickets for ${receipt.tokenAmount.toLocaleString()} OCF tokens!`);
      
      // Reset form and update balances
      setSolAmount('');
      setUserAllocation(prev => ({
        allocatedTokens: prev.allocatedTokens + receipt.tokenAmount,
        vestedTokens: prev.vestedTokens + receipt.vestingInfo.vestedAmount
      }));
      
      // Update wallet balance
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setWalletBalance(balance / LAMPORTS_PER_SOL);
      }
    } catch (error) {
      console.error('Purchase error:', error);
      setPurchaseStatus('error');
      setStatusMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-dark-card border border-dark-light/30 rounded-lg p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Participate in Presale</h2>
      
      {/* Wallet Connection */}
      {!wallet.connected ? (
        <div className="mb-8 flex flex-col items-center">
          <p className="text-light-muted mb-4 text-center">Connect your Solana wallet to participate in the presale</p>
          <WalletMultiButton className="!bg-primary hover:!bg-primary-light !transition-colors wallet-adapter-button" />
        </div>
      ) : (
        <>
          {/* User's Current Allocation (only show if they have allocation) */}
          {userAllocation.allocatedTokens > 0 && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <h3 className="text-white font-medium mb-2">Your Current Allocation</h3>
              <div className="flex justify-between mb-1">
                <span className="text-light-muted">Total Tokens:</span>
                <span className="text-white font-medium">{userAllocation.allocatedTokens.toLocaleString()} OCF</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-muted">Available at Launch:</span>
                <span className="text-white font-medium">
                  {(userAllocation.allocatedTokens * (PRESALE_CONFIG.vestingPercentageImmediate / 100)).toLocaleString()} OCF
                </span>
              </div>
            </div>
          )}
          
          {/* SOL Amount Input */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label htmlFor="sol-amount" className="text-light-muted">Amount in SOL</label>
              <span className="text-light-muted">Balance: {walletBalance.toFixed(4)} SOL</span>
            </div>
            <div className="relative">
              <input
                id="sol-amount"
                type="text"
                value={solAmount}
                onChange={handleAmountChange}
                placeholder="0.0"
                className="w-full px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white"
                disabled={isLoading}
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-primary/20 text-primary text-sm rounded hover:bg-primary/30 transition-colors"
                onClick={handleSetMaxAmount}
                disabled={isLoading || walletBalance <= 0}
              >
                MAX
              </button>
            </div>
          </div>
          
          {/* Estimated Tokens */}
          <div className="mb-6">
            <div className="text-light-muted mb-2">You will receive (estimated)</div>
            <div className="bg-dark-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">{estimatedTokens} OCF</div>
            </div>
          </div>
          
          {/* Purchase Info */}
          <div className="mb-6">
            <div className="bg-dark-light/30 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-light-muted">Presale Rate</span>
                <span className="text-white">${PRESALE_CONFIG.tokenPrice} per OCF</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-light-muted">Min Purchase</span>
                <span className="text-white">${PRESALE_CONFIG.minPurchaseUSD}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-light-muted">Max Purchase</span>
                <span className="text-white">${PRESALE_CONFIG.maxPurchaseUSD}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-muted">SOL Price (est.)</span>
                <span className="text-white">${PRESALE_CONFIG.solPriceUSD}</span>
              </div>
            </div>
          </div>
          
          {/* Status Message */}
          {purchaseStatus !== 'none' && (
            <div className={`mb-6 p-4 rounded-lg flex items-center ${
              purchaseStatus === 'success' ? 'bg-green-900/20 border border-green-600/30' :
              purchaseStatus === 'error' ? 'bg-red-900/20 border border-red-600/30' :
              'bg-blue-900/20 border border-blue-600/30'
            }`}>
              {purchaseStatus === 'success' && <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />}
              {purchaseStatus === 'error' && <FaInfoCircle className="text-red-500 mr-3 flex-shrink-0" size={20} />}
              {purchaseStatus === 'loading' && (
                <svg className="animate-spin h-5 w-5 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <span className={`text-sm ${
                purchaseStatus === 'success' ? 'text-green-400' :
                purchaseStatus === 'error' ? 'text-red-400' :
                'text-blue-400'
              }`}>
                {statusMessage}
              </span>
            </div>
          )}
          
          {/* Purchase Button */}
          <button
            onClick={handlePurchase}
            disabled={isLoading || !wallet.connected}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              isLoading
                ? 'bg-primary/50 text-white/70 cursor-not-allowed'
                : 'bg-primary hover:bg-primary-light text-white'
            }`}
          >
            {isLoading ? 'Processing...' : 'Purchase Allocation Tickets'}
          </button>
          
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