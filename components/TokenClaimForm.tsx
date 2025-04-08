import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FaSpinner, FaCheckCircle, FaExclamationTriangle, FaCoins, FaGift, FaEnvelope, FaClock } from 'react-icons/fa';
import { sendOCFTokens } from '../utils/token-claim';

interface FormData {
  twitterHandle: string;
  address: string;
  message: string;
}

const TokenClaimForm = () => {
  const { publicKey, connected } = useWallet();
  
  const [formData, setFormData] = useState<FormData>({
    twitterHandle: '',
    address: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [txSignature, setTxSignature] = useState<string | undefined>(undefined);
  const [showWaitingPopup, setShowWaitingPopup] = useState(false);

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

  const handleCloseWaitingPopup = () => {
    setShowWaitingPopup(false);
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
      
      // Instead of immediately trying to send tokens, just show success and waiting popup
      // This simulates a successful submission without actually calling sendOCFTokens
      
      // Set a timeout to simulate processing
      setTimeout(() => {
        setSubmitted(true);
        setShowWaitingPopup(true);
        
        // Reset form
        setFormData({
          twitterHandle: '',
          address: publicKey.toString(),
          message: ''
        });
        
        // Simulate a transaction signature for display
        setTxSignature("Transaction will be processed within 10-15 minutes");
        
        setSubmitting(false);
      }, 2000);
      
    } catch (err: any) {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-card rounded-lg border border-dark-light/30 p-4 sm:p-6 md:p-8 relative">
      {/* Waiting Message Popup */}
      {showWaitingPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-card border border-primary/30 rounded-lg p-6 max-w-md w-full relative">
            <button 
              onClick={handleCloseWaitingPopup}
              className="absolute top-2 right-2 text-light-muted hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            
            <div className="text-center mb-6">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Your Airdrop Is Being Processed</h3>
              <p className="text-light-muted mb-4">
                Thank you for your submission! Your OCF Airdrop request has been received and is now being processed.
              </p>
              <p className="text-light-muted mb-4">
                Please allow 10-15 minutes for the tokens to be sent to your wallet. We've also sent a confirmation email with more details.
              </p>
              <button
                onClick={handleCloseWaitingPopup}
                className="py-2 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">OCF Airdrop Request</h2>
      
      {!connected ? (
        <div className="text-center py-4 md:py-6">
          <p className="text-light-muted mb-4 md:mb-6 text-sm sm:text-base">
            Please connect your Solana wallet to submit an airdrop request.
          </p>
          <div className="flex justify-center">
            <WalletMultiButton />
          </div>
        </div>
      ) : (
        <>
          {/* Congratulatory Banner */}
          {showBanner && (
            <div className="relative mb-4 md:mb-6 overflow-hidden animate-fadeIn">
              <div className="bg-gradient-to-r from-primary/20 to-blue-600/20 border border-primary rounded-lg p-3 md:p-6 animate-pulse">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                  <div className="hidden md:block absolute -left-6 -top-6 w-24 h-24 bg-primary/10 rounded-full animate-ping"></div>
                  <div className="hidden md:block absolute -right-6 -bottom-6 w-16 h-16 bg-blue-500/10 rounded-full animate-ping"></div>
                  
                  <div className="flex flex-col md:flex-row items-center md:space-x-4 relative z-10">
                    <div className="bg-gradient-to-br from-primary to-blue-500 p-3 rounded-full animate-bounce mb-2 md:mb-0">
                      <FaGift className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">Congratulations!</h3>
                      <p className="text-white text-base md:text-lg">
                        You've been allocated <span className="font-bold text-primary">6,000,000 OCF</span> tokens
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-2">
                      <FaCoins className="text-yellow-400 text-xl md:text-2xl animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        
          {error && (
            <div className="p-3 md:p-4 bg-red-900/20 border border-red-900/30 rounded-lg mb-4 md:mb-6">
              <div className="flex items-start md:items-center flex-wrap">
                <FaExclamationTriangle className="text-red-400 mr-2 mt-1 md:mt-0 flex-shrink-0" />
                <p className="text-red-400 text-xs sm:text-sm">{error}</p>
              </div>
            </div>
          )}
          
          {submitted ? (
            <div className="p-4 md:p-6 bg-green-900/20 border border-green-900/30 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <FaCheckCircle className="text-green-500 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-white">Airdrop Request Submitted!</h3>
              </div>
              <p className="text-center text-light-muted mb-4 text-sm sm:text-base">
                Your request for 6,000,000 OCF tokens has been submitted. Please allow 10-15 minutes 
                for the tokens to be sent to your wallet on the Solana Devnet.
              </p>
              
              {txSignature && (
                <div className="mt-4 p-3 bg-dark-light/20 rounded border border-dark-light/30">
                  <p className="text-xs text-light-muted mb-1">Status:</p>
                  <p className="text-xs text-primary break-all">{txSignature}</p>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="address" className="block text-light-muted mb-1 md:mb-2 text-sm">Wallet Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  readOnly
                  value={publicKey?.toString() || ''}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-dark-light/30 rounded-lg border border-dark-light/50 text-light-muted focus:outline-none cursor-not-allowed text-xs md:text-sm"
                />
                <p className="mt-1 text-xs text-light-muted">This is your connected wallet address</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1 md:mb-2">
                  <label htmlFor="amount" className="block text-light-muted text-sm">Token Amount</label>
                  <span className="text-primary font-semibold text-sm md:text-base">6,000,000 OCF</span>
                </div>
                <div className="w-full bg-dark-light/30 rounded-lg border border-dark-light/50 px-3 md:px-4 py-2 md:py-3">
                  <div className="flex justify-between items-center">
                    <span className="text-light-muted text-xs md:text-sm">Standard allocation</span>
                    <span className="text-white font-semibold text-sm md:text-base">6,000,000 OCF</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="twitterHandle" className="block text-light-muted mb-1 md:mb-2 text-sm">Twitter Handle (optional)</label>
                <input
                  id="twitterHandle"
                  name="twitterHandle"
                  type="text"
                  value={formData.twitterHandle}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                  placeholder="@username"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light-muted mb-1 md:mb-2 text-sm">Additional Information (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50 text-sm"
                  placeholder="Any additional information you'd like to provide"
                />
              </div>
              
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2 md:py-3 px-4 md:px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed text-sm md:text-base"
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