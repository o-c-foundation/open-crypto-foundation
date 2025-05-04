import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface NewsletterSubscribeProps {
  className?: string;
}

const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with your newsletter service
    // This is a placeholder for demonstration
    if (email && email.includes('@')) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  };

  return (
    <div className={`bg-gray-800 rounded-lg p-4 shadow-lg ${className}`}>
      <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
      <p className="text-gray-300 text-sm mb-3">
        Subscribe to our weekly newsletter for the latest updates, security alerts, and crypto education.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white flex items-center justify-center transition-colors"
          >
            <FaPaperPlane className="mr-2" />
            <span>Subscribe</span>
          </button>
        </div>
        
        {status === 'success' && (
          <div className="text-green-400 text-sm">
            Thanks for subscribing! Check your email to confirm.
          </div>
        )}
        
        {status === 'error' && (
          <div className="text-red-400 text-sm">
            Please enter a valid email address.
          </div>
        )}
        
        <p className="text-gray-400 text-xs">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSubscribe; 