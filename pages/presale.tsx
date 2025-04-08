import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaClock, FaRocket, FaFileAlt, FaChartLine, FaInfoCircle } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import { useConnection } from '@solana/wallet-adapter-react';
import { getPresaleStatus } from '../utils/presaleContract';
import { PRESALE_CONFIG, getSolPrice } from '../utils/directSolTransfer';

export default function PresalePage() {
  const { connection } = useConnection();
  const [presaleState, setPresaleState] = useState({
    isActive: false,
    totalRaised: 0,
    participantCount: 0,
    remainingAllocation: PRESALE_CONFIG.softCapUSD,
    hardCapReached: false,
    isLoading: false
  });
  
  const [currentSolPrice, setCurrentSolPrice] = useState(PRESALE_CONFIG.solPriceUSD);

  // Calculate presale start date (48 hours from now)
  const presaleStartDate = new Date();
  presaleStartDate.setHours(presaleStartDate.getHours() + 48);

  // Fetch current SOL price
  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const price = await getSolPrice();
        setCurrentSolPrice(price);
      } catch (error) {
        console.error('Error fetching SOL price:', error);
      }
    };

    fetchSolPrice();
    // Refresh SOL price every minute
    const intervalId = setInterval(fetchSolPrice, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // Fetch presale status
  useEffect(() => {
    const fetchPresaleStatus = async () => {
      try {
        const status = await getPresaleStatus(connection);
        setPresaleState(prevState => ({
          ...status,
          isLoading: false
        }));
      } catch (error) {
        console.error('Error fetching presale status:', error);
        setPresaleState(prevState => ({ ...prevState, isLoading: false }));
      }
    };

    fetchPresaleStatus();
    // Refresh every 30 seconds
    const intervalId = setInterval(fetchPresaleStatus, 30000);
    return () => clearInterval(intervalId);
  }, [connection]);

  // Format currency with commas
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Token information for display
  const tokenInfo = {
    totalSupply: PRESALE_CONFIG.totalTokenSupply.toLocaleString(),
    priceUSD: '$' + PRESALE_CONFIG.tokenPrice.toFixed(6),
    priceSol: (PRESALE_CONFIG.tokenPrice / currentSolPrice).toFixed(8) + ' SOL',
    remaining: PRESALE_CONFIG.tokensRemaining.toLocaleString(),
    tokensPerSOL: Math.floor(currentSolPrice / PRESALE_CONFIG.tokenPrice).toLocaleString(),
  };

  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OCF Token Presale Coming Soon | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="The OCF token presale is launching soon. Join the waitlist and be an early supporter of the Open Crypto Foundation." 
        />
      </Head>

      <main>
        {/* Hero Section with Background */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Blurry Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-dark to-dark opacity-80"></div>
            <div className="absolute inset-0 bg-[url('/crypto-background.jpg')] bg-cover bg-center bg-no-repeat opacity-20 blur-xl"></div>
            <div className="absolute inset-0 backdrop-blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              {/* Presale Countdown */}
              <div className="mb-10 bg-primary/10 border border-primary/30 rounded-xl p-6 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Presale Launching In</h3>
                <div className="flex justify-center space-x-4 md:space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-dark-card border border-primary/30 rounded-lg p-3 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2">
                      <span className="text-2xl md:text-3xl font-bold text-white" id="countdown-days">48</span>
                    </div>
                    <span className="text-light-muted text-sm">Hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-dark-card border border-primary/30 rounded-lg p-3 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2">
                      <span className="text-2xl md:text-3xl font-bold text-white" id="countdown-hours">00</span>
                    </div>
                    <span className="text-light-muted text-sm">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-dark-card border border-primary/30 rounded-lg p-3 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2">
                      <span className="text-2xl md:text-3xl font-bold text-white" id="countdown-minutes">00</span>
                    </div>
                    <span className="text-light-muted text-sm">Seconds</span>
                  </div>
                </div>
                <p className="mt-6 text-primary">Get ready to participate when the presale goes live!</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-glow">
                OCF Token Presale
              </h1>
              <p className="text-xl md:text-2xl text-light-muted mb-8">
                Join our upcoming presale and be an early supporter
              </p>
              
              {/* Current SOL Price */}
              <div className="mb-8 bg-dark-card border border-primary/20 rounded-lg p-3 inline-block">
                <div className="flex items-center justify-center">
                  <img src="/solana-logo.png" alt="Solana" className="h-6 mr-2" />
                  <p className="text-white">
                    <span className="text-light-muted mr-2">Current SOL Price:</span>
                    <span className="font-bold">${currentSolPrice}</span>
                  </p>
                </div>
              </div>
              
              {/* Token Information */}
              <div className="bg-dark-card border border-primary/20 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-light-muted text-sm mb-1">Total Supply</p>
                    <p className="text-lg font-semibold text-white">{tokenInfo.totalSupply}</p>
                  </div>
                  <div>
                    <p className="text-light-muted text-sm mb-1">Available</p>
                    <p className="text-lg font-semibold text-white">{tokenInfo.remaining}</p>
                  </div>
                  <div>
                    <p className="text-light-muted text-sm mb-1">Price (USD)</p>
                    <p className="text-lg font-semibold text-white">{tokenInfo.priceUSD}</p>
                  </div>
                  <div>
                    <p className="text-light-muted text-sm mb-1">Price (SOL)</p>
                    <p className="text-lg font-semibold text-white">{tokenInfo.priceSol}</p>
                  </div>
                  <div>
                    <p className="text-light-muted text-sm mb-1">Tokens per SOL</p>
                    <p className="text-lg font-semibold text-primary">{tokenInfo.tokensPerSOL}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Presale Waitlist Form */}
            <div className="max-w-lg mx-auto">
              <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6 backdrop-blur-lg bg-opacity-70">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Get Notified When Presale Launches</h2>
                
                <NewsletterSubscribe className="mb-4" />
                
                <div className="mt-6 pt-6 border-t border-dark-light/20">
                  <div className="flex justify-center space-x-6">
                    <Link href="/roadmap" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
                      <FaRocket className="mr-2" size={16} />
                      View Roadmap
                    </Link>
                    <Link href="/whitepaper" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
                      <FaFileAlt className="mr-2" size={16} />
                      Read Whitepaper
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Information Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                OCF Presale Highlights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <FaChartLine className="text-primary" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Project Overview</h3>
                  </div>
                  <p className="text-light-muted">
                    The Open Crypto Foundation is building a comprehensive ecosystem of tools and resources 
                    to make cryptocurrency safer and more accessible for everyone. Our OCF token is the 
                    governance and utility token powering this ecosystem.
                  </p>
                </div>
                
                <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <FaInfoCircle className="text-primary" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Presale Benefits</h3>
                  </div>
                  <p className="text-light-muted">
                    Early supporters in our presale will receive OCF tokens at a significant discount compared 
                    to the public sale price. Presale participants will also gain early access to premium 
                    features and governance rights.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/roadmap" className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Explore Our Project Roadmap
                  <FaRocket className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ScrollToTop />
    </div>
  );
} 