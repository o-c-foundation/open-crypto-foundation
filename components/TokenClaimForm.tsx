import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FaSpinner, FaCheckCircle, FaExclamationTriangle, FaCoins, FaGift } from 'react-icons/fa';
import { sendOCFTokens } from '../utils/token-claim';

const TokenClaimForm = () => {
  const { publicKey, connected } = useWallet();
  
  const [formData, setFormData] = useState({
    twitterHandle: '',
    address: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [txSignature, setTxSignature] = useState<string | undefined>(undefined);

  // Update address field when wallet connects
  useEffect(() => {
    if (publicKey) {
      setFormData(prev => ({
        ...prev,
        address: publicKey.toString()
      }));
      
      // Show congratulatory banner when wallet connects
      setShowBanner(true);
      
      // Hide banner after 8 seconds
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [publicKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!connected || !publicKey) {
      setError('Please connect your wallet first');
      return;
    }
    
    try {
      setSubmitting(true);
      setError('');
      
      // Call our token transfer function
      const result = await sendOCFTokens(publicKey.toString());
      
      if (result.success) {
        setSubmitted(true);
        if (result.signature) {
          setTxSignature(result.signature);
        }
        
        // Reset form
        setFormData({
          twitterHandle: '',
          address: publicKey.toString(),
          message: ''
        });
      } else {
        throw new Error(result.message);
      }
      
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-card rounded-lg border border-dark-light/30 p-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Token Claim Request</h2>
      
      {!connected ? (
        <div className="text-center py-6">
          <p className="text-light-muted mb-6">
            Please connect your Solana wallet to submit a token claim request.
          </p>
          <div className="flex justify-center">
            <WalletMultiButton />
          </div>
        </div>
      ) : (
        <>
          {/* Congratulatory Banner */}
          {showBanner && (
            <div className="relative mb-6 overflow-hidden animate-fadeIn">
              <div className="bg-gradient-to-r from-primary/20 to-blue-600/20 border border-primary rounded-lg p-6 animate-pulse">
                <div className="flex items-center justify-center">
                  <div className="absolute -left-6 -top-6 w-24 h-24 bg-primary/10 rounded-full animate-ping"></div>
                  <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-blue-500/10 rounded-full animate-ping"></div>
                  
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="bg-gradient-to-br from-primary to-blue-500 p-3 rounded-full animate-bounce">
                      <FaGift className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Congratulations!</h3>
                      <p className="text-white text-lg">
                        You've been allocated <span className="font-bold text-primary">6,000,000 OCF</span> tokens
                      </p>
                    </div>
                    <div className="ml-2">
                      <FaCoins className="text-yellow-400 text-2xl animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/30 rounded-lg mb-6">
              <div className="flex items-center">
                <FaExclamationTriangle className="text-red-400 mr-2" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            </div>
          )}
          
          {submitted ? (
            <div className="p-6 bg-green-900/20 border border-green-900/30 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <FaCheckCircle className="text-green-500 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-white">Tokens Successfully Claimed!</h3>
              </div>
              <p className="text-center text-light-muted mb-4">
                Your 6,000,000 OCF tokens have been sent to your wallet on the Solana Devnet. 
                Remember to configure your wallet to connect to Devnet to view these tokens.
              </p>
              
              {txSignature && (
                <div className="mt-4 p-3 bg-dark-light/20 rounded border border-dark-light/30">
                  <p className="text-xs text-light-muted mb-1">Transaction Signature:</p>
                  <p className="text-xs text-primary break-all">{txSignature}</p>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="address" className="block text-light-muted mb-2">Wallet Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  readOnly
                  value={publicKey?.toString() || ''}
                  className="w-full px-4 py-3 bg-dark-light/30 rounded-lg border border-dark-light/50 text-light-muted focus:outline-none cursor-not-allowed"
                />
                <p className="mt-1 text-xs text-light-muted">This is your connected wallet address</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="amount" className="block text-light-muted">Token Amount</label>
                  <span className="text-primary font-semibold">6,000,000 OCF</span>
                </div>
                <div className="w-full bg-dark-light/30 rounded-lg border border-dark-light/50 px-4 py-3">
                  <div className="flex justify-between items-center">
                    <span className="text-light-muted">Standard allocation</span>
                    <span className="text-white font-semibold">6,000,000 OCF</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="twitterHandle" className="block text-light-muted mb-2">Twitter Handle (optional)</label>
                <input
                  id="twitterHandle"
                  name="twitterHandle"
                  type="text"
                  value={formData.twitterHandle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                  placeholder="@username"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light-muted mb-2">Additional Information (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                  placeholder="Any additional information you'd like to provide"
                />
              </div>
              
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <div className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Claim 6,000,000 OCF Tokens'
                )}
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default TokenClaimForm; 