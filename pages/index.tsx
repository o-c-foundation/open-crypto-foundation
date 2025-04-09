import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaShieldAlt, FaBookOpen, FaTools, FaRegNewspaper, FaRocket, FaCoins, FaFire, FaBook, FaUserFriends, FaCheckCircle, FaLock } from 'react-icons/fa'
import NewsletterSubscribe from '../components/NewsletterSubscribe'
import ScrollToTop from '../components/ScrollToTop'
import SolanaIcon from '../components/icons/SolanaIcon'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from '../types/next-page'

// Define the Home page component
const Home: NextPageWithLayout = () => {
  const [logoError, setLogoError] = useState(false);
  const [isErrorRecoveryMode, setIsErrorRecoveryMode] = useState(false);
  const logoUrl = "https://bafkreidvb25k6khuuf7fliwnhj2iogmbqgnoj3zkq47fev4ivpyujlekim.ipfs.w3s.link/";
  const tradingViewRef = useRef<HTMLDivElement>(null);

  // TradingView Widget Configuration
  const tradingViewConfig = {
    "width": "100%",
    "height": "550",
    "symbolsGroups": [
      {
        "name": "Cryptocurrency  ",
        "originalName": "Indices",
        "symbols": [
          {
            "name": "COINBASE:BTCUSD"
          },
          {
            "name": "COINBASE:ETHUSD"
          },
          {
            "name": "COINBASE:SOLUSD"
          },
          {
            "name": "COINBASE:SUIUSD"
          },
          {
            "name": "COINBASE:XRPUSD"
          },
          {
            "name": "COINBASE:DOGEUSD"
          }
        ]
      },
      {
        "name": "Meme Tokens  ",
        "originalName": "Forex",
        "symbols": [
          {
            "name": "RAYDIUM:FARTCOINSOL_BZC9NZ.USD",
            "displayName": "FARTCOIN"
          },
          {
            "name": "CRYPTO:PEPEUSD",
            "displayName": "PEPE "
          },
          {
            "name": "UNISWAP:SPXWETH_52C77B.USD",
            "displayName": "SPX6900"
          },
          {
            "name": "ORCA:JLPUSDC_6NUIVM.USD",
            "displayName": "JUPITER"
          },
          {
            "name": "RAYDIUM:POPCATUSDC_HBS7A3.USD",
            "displayName": "POPCAT"
          }
        ]
      }
    ],
    "showSymbolLogo": true,
    "isTransparent": true,
    "colorTheme": "dark",
    "locale": "en",
    "largeChartUrl": "https://opencryptofoundation.com/charts",
    "mobileLayoutEnabled": true
  };

  // Initialize TradingView Widget
  useEffect(() => {
    // Only run in browser, not during SSR
    if (typeof window === 'undefined') return;
    
    // Check if we're on mobile and adjust the configuration
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      tradingViewConfig.width = "100%";
      tradingViewConfig.height = "450";
    } else {
      // For desktop, ensure widget fits container
      tradingViewConfig.width = "100%";
      tradingViewConfig.height = "550";
    }
    
    // Clean up any existing scripts first to avoid duplicates
    if (tradingViewRef.current) {
      while (tradingViewRef.current.firstChild) {
        tradingViewRef.current.removeChild(tradingViewRef.current.firstChild);
      }
    }
    
    // Create the widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';
    
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Set the config
    script.innerHTML = JSON.stringify(tradingViewConfig);
    
    // Add elements to the DOM
    if (tradingViewRef.current) {
      tradingViewRef.current.appendChild(widgetContainer);
      tradingViewRef.current.appendChild(script);
    }
    
    return () => {
      // Clean up on unmount
      if (tradingViewRef.current) {
        while (tradingViewRef.current.firstChild) {
          tradingViewRef.current.removeChild(tradingViewRef.current.firstChild);
        }
      }
    };
  }, []);

  // Check if we're coming from an error
  useEffect(() => {
    // Check for error query param or localStorage flag
    const urlParams = new URLSearchParams(window.location.search);
    const hasErrorParam = urlParams.has('error');
    const hasLocalStorageError = localStorage.getItem('site_error') === 'true';
    
    if (hasErrorParam || hasLocalStorageError) {
      setIsErrorRecoveryMode(true);
      // Clear the error state from localStorage
      localStorage.removeItem('site_error');
    }
    
    // Set up global error handler for uncaught errors
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.error && event.error.toString().includes("Cannot destructure property 'auth'")) {
        localStorage.setItem('site_error', 'true');
        console.log("Redirecting due to auth error");
        window.location.href = '/?error=auth';
        event.preventDefault();
      }
    };
    
    window.addEventListener('error', handleGlobalError);
    
    return () => {
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);
  
  // Simplified version of the Home page if we're in error recovery mode
  if (isErrorRecoveryMode) {
    return (
      <>
        <main>
          {/* Simple Hero Section for Error Recovery */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-dark-light to-dark text-white">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                    <blockquote className="text-xl italic font-light text-white">
                      &ldquo;Alone we can do so little; together we can do so much.&rdquo;
                    </blockquote>
                    <p className="text-right mt-3 text-primary">— Helen Keller</p>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Crypto Foundation</h1>
                <p className="text-xl text-light-muted mb-8">
                  We've loaded a simplified version of our site to ensure you can access our content. 
                  Some features like wallet connection may be temporarily unavailable.
                </p>
                
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/manifesto" 
                    className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-md transition duration-300 flex items-center"
                  >
                    Read Our Manifesto <FaArrowRight className="ml-2" />
                  </Link>
                  
                  <Link 
                    href="/blog" 
                    className="px-6 py-3 bg-dark-light hover:bg-dark-light/80 text-white rounded-md transition duration-300 flex items-center"
                  >
                    Visit Our Blog <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Minimal Navigation Tiles */}
          <section className="py-16 bg-dark">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Foundation Resources",
                      icon: <FaBook className="text-primary text-4xl mb-4" />,
                      description: "Explore our resources for safe crypto interactions",
                      link: "/resources"
                    },
                    {
                      title: "Security Guides",
                      icon: <FaShieldAlt className="text-primary text-4xl mb-4" />,
                      description: "Learn how to protect yourself from scams and exploits",
                      link: "/resources/security-guide"
                    },
                    {
                      title: "About Us",
                      icon: <FaUserFriends className="text-primary text-4xl mb-4" />,
                      description: "Learn about our mission and team",
                      link: "/about"
                    }
                  ].map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="bg-dark-card border border-dark-light/30 hover:border-primary/50 rounded-lg p-6 h-full transition-all duration-300 text-center">
                        {item.icon}
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-light-muted">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Simple Newsletter */}
          <section className="py-16 bg-dark-card text-white">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="text-light-muted mb-8">Get the latest news and updates from the Open Crypto Foundation</p>
                <NewsletterSubscribe />
              </div>
            </div>
          </section>
        </main>
        
        <ScrollToTop />
      </>
    );
  }
  
  // Regular home page content follows
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[4px]"></div>
          <Image 
            src="https://bafybeia7bqcimbxnphbbhakog5dndjx4vp6shcg77jhsewvjaqx67kjnqa.ipfs.w3s.link/"
            alt="Blockchain Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="blur-[3px]"
            onError={() => console.error('Failed to load hero image')}
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto max-w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10">
            {/* Left side - Foundation info */}
            <div className="w-full lg:w-2/5 backdrop-blur-md bg-gradient-to-br from-dark-elevated to-black/70 p-8 rounded-xl shadow-2xl border border-primary/20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">The Open</span><br />
                <span className="text-gradient">Crypto</span><br />
                <span className="text-gradient">Foundation</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Founded to make decentralized finance safer, more transparent, and accessible through education, tools, and community engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about" 
                  className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors flex items-center shadow-lg"
                >
                  Learn More About OCF <FaArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/manifesto" 
                  className="px-6 py-3 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg"
                >
                  Read Our Manifesto
                </Link>
              </div>
            </div>
            
            {/* Right side - TradingView Widget */}
            <div className="w-full lg:w-3/5 backdrop-blur-md bg-gradient-to-br from-black/70 to-dark-elevated rounded-xl p-6 shadow-2xl border border-primary/20 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Live Crypto Markets</h3>
                <div className="hidden md:block">
                  <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" className="text-primary text-xs hover:text-primary-light transition-colors">
                    Powered by TradingView
                  </a>
                </div>
              </div>
              <div ref={tradingViewRef} className="tradingview-widget-container w-full">
                {/* Widget will be loaded here by the useEffect */}
              </div>
              <div className="text-center text-xs text-light-muted mt-3 md:hidden">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" className="text-primary hover:text-primary-light">
                  Track all markets on TradingView
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-dark">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">Our Vision for Safer Crypto</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-dark-card rounded-xl border border-dark-light/30">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <FaShieldAlt size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Security Tools</h3>
              <p className="mb-4 text-light-muted">
                We're developing a suite of open source tools to help you verify smart contracts, analyze tokens, 
                and identify potential security risks before investing.
              </p>
              <Link href="/tools" className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                Follow Our Progress <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-dark-card rounded-xl border border-dark-light/30">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <FaBookOpen size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Educational Resources</h3>
              <p className="mb-4 text-light-muted">
                We're in the early stages of building a comprehensive knowledge base for safe crypto 
                practices, from beginner guides to advanced technical documentation.
              </p>
              <Link href="/resources/defi-fundamentals" className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                See Our First Resources <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-dark-card rounded-xl border border-dark-light/30">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <FaRocket size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Growth Roadmap</h3>
              <p className="mb-4 text-light-muted">
                As a new foundation, we have ambitious plans to establish open standards and best practices 
                for token launches, protocol development, and responsible DeFi innovation.
              </p>
              <Link href="/roadmap" className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                View Our Roadmap <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-dark-elevated">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-white">Be Part of Our Early Community</h2>
                <p className="text-light-muted mb-6">
                  Join our newsletter to follow our progress, receive updates on crypto security, 
                  and learn about opportunities to contribute to the Open Crypto Foundation's mission.
                </p>
                <div className="flex items-center mb-2">
                  <FaRegNewspaper className="text-primary mr-2" />
                  <span className="text-light-muted text-sm">Development updates</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaRegNewspaper className="text-primary mr-2" />
                  <span className="text-light-muted text-sm">Security alerts</span>
                </div>
                <div className="flex items-center">
                  <FaRegNewspaper className="text-primary mr-2" />
                  <span className="text-light-muted text-sm">Contribution opportunities</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <NewsletterSubscribe className="md:max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-light to-dark text-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Help Shape Our Foundation</h2>
            <p className="mb-8 text-lg text-light-muted">
              As a newly formed organization, we're looking for passionate individuals and partners to help 
              shape our future. We believe in the transformative potential of decentralized finance, but only if it's 
              built on a foundation of security, education, and user protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors">
                Learn About Our Mission
              </Link>
              <a 
                href="mailto:info@opencryptofoundation.com" 
                className="px-6 py-3 bg-transparent border border-primary/30 text-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

// Define custom layout for the Home page
Home.getLayout = (page: React.ReactElement) => {
  return (
    <Layout 
      title="Open Crypto Foundation | Promoting Safe DeFi"
      description="The newly launched Open Crypto Foundation is dedicated to promoting safe decentralized finance practices and educating users about blockchain technology."
    >
      {page}
    </Layout>
  );
};

export default Home; 
