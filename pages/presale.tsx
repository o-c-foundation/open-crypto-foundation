import { useState, useEffect, useRef } from 'react';
import { FaInfoCircle, FaCheck } from 'react-icons/fa';
import Countdown from 'react-countdown';

const PRESALE_END_DATE = new Date('2025-04-09T13:00:00Z'); // 4/9/2025 9:00 AM EST
const TOTAL_SUPPLY = 1_000_000_000;
const REMAINING_TOKENS = 210_549_861;
const USD_PRICE = 0.0001;
const TURNSTILE_SITE_KEY = "0x4AAAAAABG_7VaoGTjyeZoD"; // Cloudflare Turnstile site key

// Extend Window interface to include Turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
        }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function Presale() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [walletAddresses, setWalletAddresses] = useState('');  
  const [telegramUsername, setTelegramUsername] = useState('');
  const [cryptoKnowledge, setCryptoKnowledge] = useState('');
  const [discoverySource, setDiscoverySource] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [solanaPrice, setSolanaPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);

  useEffect(() => {
    // Fetch live Solana price from API
    const fetchSolanaPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        setSolanaPrice(data.solana.usd);
      } catch (error) {
        console.error('Error fetching Solana price:', error);
      }
    };

    fetchSolanaPrice();
    const interval = setInterval(fetchSolanaPrice, 60000); // Update every 60 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Turnstile callback function
  const onTurnstileVerify = (token) => {
    setTurnstileToken(token);
  };

  // Reset Turnstile on error
  const resetTurnstile = () => {
    if (window.turnstile && turnstileRef.current) {
      window.turnstile.reset(turnstileRef.current);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validate form
    if (!name || !email || !walletAddresses || !telegramUsername || !cryptoKnowledge || !discoverySource || !agreeToTerms) {
      setError('Please complete all fields and accept the terms of service.');
      setIsSubmitting(false);
      return;
    }

    // Check if Turnstile token exists
    if (!turnstileToken) {
      setError('Please complete the security check.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Server-side validation of Turnstile token
      const validationResponse = await fetch('/api/validate-turnstile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: turnstileToken }),
      });
      
      const validationData = await validationResponse.json();
      
      if (!validationData.success) {
        setError('Security check validation failed. Please try again.');
        resetTurnstile();
        setIsSubmitting(false);
        return;
      }
      
      // Web3Forms integration
      const apiKey = "YOUR-WEB3FORMS-API-KEY"; // Replace with your actual Web3Forms API key
      
      const formData = {
        apikey: apiKey,
        subject: "New OCF Pre Sale Investor Application",
        name,
        email,
        walletAddresses,
        telegramUsername,
        cryptoKnowledge,
        discoverySource,
        message: `New investor application received.
        
Name: ${name}
Email: ${email}
Wallet Addresses: ${walletAddresses}
Telegram Username: ${telegramUsername}
Crypto Knowledge: ${cryptoKnowledge}
Discovery Source: ${discoverySource}`,
        turnstileToken,
      };
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        // Reset form fields
        setName('');
        setEmail('');
        setWalletAddresses('');
        setTelegramUsername('');
        setCryptoKnowledge('');
        setDiscoverySource('');
        setAgreeToTerms(false);
        setTurnstileToken('');
        resetTurnstile();
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError('There was an error submitting your application. Please try again later.');
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  const tokensPerSol = solanaPrice > 0 ? 1 / (USD_PRICE / solanaPrice) : 0;
  const solPrice = USD_PRICE / solanaPrice;

  return (
    <div className="min-h-screen bg-dark">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OCF Token Presale
              </h1>
              <p className="text-xl text-light-muted mb-6">
                Presale is now LIVE!
              </p>
              
              {/* Countdown Timer */}
              <div className="bg-dark-card rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Presale Ends In</h2>
                <Countdown
                  date={PRESALE_END_DATE}
                  renderer={({ days, hours, minutes, seconds, completed }) => (
                    <div className="text-4xl md:text-5xl font-bold text-primary">
                      {days}d {hours}h {minutes}m {seconds}s
                    </div>
                  )}
                />
                <p className="mt-4 text-light-muted">
                  Price will increase by 50% when the countdown ends!
                </p>
              </div>

              {/* Presale Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-dark-card rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold text-white">Total Supply</h3>
                  <p className="text-2xl font-bold text-primary">{TOTAL_SUPPLY.toLocaleString()}</p>
                </div>
                <div className="bg-dark-card rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold text-white">Remaining</h3>
                  <p className="text-2xl font-bold text-primary">{REMAINING_TOKENS.toLocaleString()}</p>
                </div>
                <div className="bg-dark-card rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold text-white">Price (USD)</h3>
                  <p className="text-2xl font-bold text-primary">${USD_PRICE.toFixed(6)}</p>
                </div>
                <div className="bg-dark-card rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold text-white">Price (SOL)</h3>
                  <p className="text-2xl font-bold text-primary">{solPrice.toFixed(8)} SOL</p>
                </div>
                <div className="bg-dark-card rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold text-white">Tokens per SOL</h3>
                  <p className="text-2xl font-bold text-primary">{tokensPerSol.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-dark-card rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold text-white">Current SOL Price</h3>
                  <p className="text-2xl font-bold text-primary">${solanaPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Presale Form Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-green-500 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Application Submitted Successfully!</h2>
                    <p className="text-light-muted mb-6">
                      Thank you for your interest in the OCF Token Presale. One of our agents will review your application and contact you within 15 minutes.
                    </p>
                    <p className="text-light-muted">
                      Please ensure you monitor the provided email address and Telegram for communication from our team.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Pre Sale Investor Application</h2>
                    
                    {error && (
                      <div className="bg-red-500/20 border border-red-500/20 rounded-md p-4 mb-6">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-light-muted mb-1">
                          Full Name
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-3 py-2 placeholder-light-muted/50 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-light-muted mb-1">
                          Email Address
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="w-full px-3 py-2 placeholder-light-muted/50 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="walletAddresses" className="block text-sm font-medium text-light-muted mb-1">
                          Wallet Address(es)
                        </label>
                        <textarea
                          value={walletAddresses}
                          onChange={(e) => setWalletAddresses(e.target.value)}
                          id="walletAddresses"
                          name="walletAddresses"
                          rows={2}
                          className="w-full px-3 py-2 placeholder-light-muted/50 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                          placeholder="Enter your wallet address(es). Separate multiple addresses with commas."
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="telegramUsername" className="block text-sm font-medium text-light-muted mb-1">
                          Telegram Username
                        </label>
                        <input
                          value={telegramUsername}
                          onChange={(e) => setTelegramUsername(e.target.value)}
                          type="text"
                          name="telegramUsername"
                          id="telegramUsername"
                          className="w-full px-3 py-2 placeholder-light-muted/50 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                          placeholder="Enter your Telegram username (e.g., @username)"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="cryptoKnowledge" className="block text-sm font-medium text-light-muted mb-1">
                          How would you rate your cryptocurrency and DeFi knowledge/understanding?
                        </label>
                        <select
                          value={cryptoKnowledge}
                          onChange={(e) => setCryptoKnowledge(e.target.value)}
                          id="cryptoKnowledge"
                          name="cryptoKnowledge"
                          className="w-full px-3 py-2 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="Beginner">Beginner - Basic understanding of cryptocurrencies</option>
                          <option value="Intermediate">Intermediate - Familiar with major protocols and DeFi concepts</option>
                          <option value="Advanced">Advanced - Deep understanding of DeFi mechanisms and tokenomics</option>
                          <option value="Expert">Expert - Professional experience in blockchain/DeFi</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="discoverySource" className="block text-sm font-medium text-light-muted mb-1">
                          How did you discover the Open Crypto Foundation?
                        </label>
                        <select
                          value={discoverySource}
                          onChange={(e) => setDiscoverySource(e.target.value)}
                          id="discoverySource"
                          name="discoverySource"
                          className="w-full px-3 py-2 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="Social Media">Social Media (Twitter, Discord, Telegram)</option>
                          <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                          <option value="Friend/Colleague">Friend or Colleague Referral</option>
                          <option value="Crypto News Site">Cryptocurrency News Website</option>
                          <option value="Blockchain Event">Blockchain Conference or Event</option>
                          <option value="Investment Group">Investment Group or Community</option>
                          <option value="Other">Other Source</option>
                        </select>
                      </div>

                      {/* Cloudflare Turnstile Widget */}
                      <div className="mb-6">
                        <div 
                          className="cf-turnstile" 
                          data-sitekey={TURNSTILE_SITE_KEY}
                          data-callback="onTurnstileVerify"
                          data-theme="dark"
                          ref={turnstileRef}
                        ></div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              checked={agreeToTerms}
                              onChange={(e) => setAgreeToTerms(e.target.checked)}
                              id="terms"
                              name="terms"
                              type="checkbox"
                              className="focus:ring-primary h-4 w-4 text-primary border-dark-light rounded bg-dark-elevated"
                              required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-light">
                              I agree to the Terms of Service
                            </label>
                            <p className="text-light-muted mt-1 text-xs leading-relaxed">
                              By checking this box, I acknowledge and agree to the OCF Token Distribution and Vesting Terms. I understand that only 20% of the allocated tokens will be available at the Token Generation Event (TGE), and the remaining 80% will be subject to a linear vesting schedule over a period of three (3) calendar months post-TGE ("Vesting Period"). The unvested tokens shall be released in equal amounts at the end of each 30-day period following the TGE. I acknowledge that these terms are non-negotiable and constitute a binding agreement between myself and the Open Crypto Foundation. I further agree that any attempt to transfer, sell, or otherwise dispose of unvested tokens shall be null and void. The Foundation reserves the right to modify the vesting schedule in accordance with regulatory requirements or force majeure events.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !turnstileToken}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                          isSubmitting || !turnstileToken
                            ? "bg-primary/60 cursor-not-allowed" 
                            : "bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        }`}
                      >
                        {isSubmitting ? "Submitting Application..." : "Submit Application"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 