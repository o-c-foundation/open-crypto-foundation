import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const TokenClaimForm = () => {
  const { publicKey, connected } = useWallet();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    twitterHandle: '',
    address: '',
    amount: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Update address field when wallet connects
  useEffect(() => {
    if (publicKey) {
      setFormData(prev => ({
        ...prev,
        address: publicKey.toString()
      }));
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
      
      const formObject = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formObject.append(key, value);
      });
      
      // Add the wallet address from the connected wallet
      formObject.set('address', publicKey.toString());
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formObject
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          twitterHandle: '',
          address: publicKey.toString(),
          amount: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Form submission failed');
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
                <h3 className="text-xl font-semibold text-white">Request Submitted!</h3>
              </div>
              <p className="text-center text-light-muted">
                Thank you for your token claim request. We will review it and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input 
                type="hidden" 
                name="access_key" 
                value="45ca5e36-5eaf-480d-8f74-0465e4d8bef3"
              />
              <input
                type="hidden"
                name="subject"
                value="New Token Claim Request from OCF Website"
              />
              <input
                type="hidden"
                name="from_name"
                value="OCF Token Claim System"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
              />
              
              <div>
                <label htmlFor="name" className="block text-light-muted mb-2">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-light-muted mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                  placeholder="Enter your email address"
                />
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
                <label htmlFor="amount" className="block text-light-muted mb-2">Requested Amount</label>
                <input
                  id="amount"
                  name="amount"
                  type="text"
                  required
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                  placeholder="Enter the token amount you're claiming"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light-muted mb-2">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                  placeholder="Please provide any additional information to support your claim request"
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
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Submit Token Claim Request'
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