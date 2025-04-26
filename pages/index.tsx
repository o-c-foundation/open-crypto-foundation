import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaArrowRight, FaShieldAlt, FaBookOpen, FaTools, FaRegNewspaper, FaRocket, FaCoins, FaFire, FaBook, FaUserFriends, FaCheckCircle, FaLock } from 'react-icons/fa'
import NewsletterSubscribe from '../components/NewsletterSubscribe'
import ScrollToTop from '../components/ScrollToTop'
import SolanaIcon from '../components/icons/SolanaIcon'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from '../types/next-page'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

// Define the Home page component
const Home: NextPageWithLayout = () => {
  const [logoError, setLogoError] = useState(false);
  const [isErrorRecoveryMode, setIsErrorRecoveryMode] = useState(false);
  const logoUrl = "https://bafkreidvb25k6khuuf7fliwnhj2iogmbqgnoj3zkq47fev4ivpyujlekim.ipfs.w3s.link/";
  const tradingViewRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // TradingView Widget Configuration
  const tradingViewConfig = {
    "colorTheme": "dark",
    "dateRange": "12M",
    "showChart": false,
    "locale": "en",
    "width": "100%",
    "height": "100%",
    "largeChartUrl": "https://opencryptofoundation.com/charts",
    "isTransparent": true,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(42, 46, 57, 0)",
    "scaleFontColor": "rgba(219, 219, 219, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
      {
        "title": "Coins  ",
        "symbols": [
          {
            "s": "COINBASE:BTCUSD"
          },
          {
            "s": "COINBASE:ETHUSD"
          },
          {
            "s": "COINBASE:SOLUSD"
          },
          {
            "s": "COINBASE:DOGEUSD"
          },
          {
            "s": "COINBASE:SUIUSD"
          },
          {
            "s": "COINBASE:XRPUSD"
          },
          {
            "s": "COINBASE:UNIUSD"
          }
        ],
        "originalTitle": "Indices"
      },
      {
        "title": "Meme Tokens  ",
        "symbols": [
          {
            "s": "CRYPTO:PEPEUSD"
          },
          {
            "s": "KRAKEN:TRUMPUSD"
          },
          {
            "s": "CRYPTO:BRETT2USD"
          },
          {
            "s": "CRYPTO:FARTCOINUSD"
          },
          {
            "s": "CRYPTO:BONKUSD"
          },
          {
            "s": "KRAKEN:MOODENGUSD"
          },
          {
            "s": "CRYPTO:RAYUSD"
          }
        ],
        "originalTitle": "Forex"
      }
    ]
  };

  // Initialize TradingView Widget
  useEffect(() => {
    // Only run in browser, not during SSR
    if (typeof window === 'undefined') return;
    
    // Clean up any existing scripts first to avoid duplicates
    if (tradingViewRef.current) {
      while (tradingViewRef.current.firstChild) {
        tradingViewRef.current.removeChild(tradingViewRef.current.firstChild);
      }
    }
    
    // Create the widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';
    
    // Create the copyright element
    const copyrightElement = document.createElement('div');
    copyrightElement.className = 'tradingview-widget-copyright';
    const copyrightLink = document.createElement('a');
    copyrightLink.href = 'https://www.tradingview.com/';
    copyrightLink.rel = 'noopener nofollow';
    copyrightLink.target = '_blank';
    const copyrightSpan = document.createElement('span');
    copyrightSpan.className = 'blue-text';
    copyrightSpan.textContent = 'Track all markets on TradingView';
    copyrightLink.appendChild(copyrightSpan);
    copyrightElement.appendChild(copyrightLink);
    
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Set the config
    script.innerHTML = JSON.stringify(tradingViewConfig);
    
    // Add elements to the DOM
    if (tradingViewRef.current) {
      tradingViewRef.current.appendChild(widgetContainer);
      tradingViewRef.current.appendChild(copyrightElement);
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

  // Initialize Vanta.js effect
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3f84ff,
          size: 1.30,
          backgroundColor: 0x100622
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
        <Head>
          <title>Open Crypto Foundation | Blockchain Security & DeFi Ecosystem</title>
          <meta name="description" content="Open Crypto Foundation provides blockchain security tools, cross-chain DeFi solutions, and cryptocurrency education. Explore our digital asset management platform, crypto trading toolkits, and decentralized finance (DeFi) resources." />
          <meta name="keywords" content="blockchain security, cryptocurrency, DeFi ecosystem, OCF token, crypto trading, digital assets, cross-chain solutions, decentralized finance, blockchain technology, crypto wallet security, blockchain education, Web3 tools" />
        </Head>

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
      <Head>
        <title>Open Crypto Foundation | Blockchain Security & DeFi Ecosystem</title>
        <meta name="description" content="Open Crypto Foundation provides blockchain security tools, cross-chain DeFi solutions, and cryptocurrency education. Explore our digital asset management platform, crypto trading toolkits, and decentralized finance (DeFi) resources." />
        <meta name="keywords" content="blockchain security, cryptocurrency, DeFi ecosystem, OCF token, crypto trading, digital assets, cross-chain solutions, decentralized finance, blockchain technology, crypto wallet security, blockchain education, Web3 tools" />
      </Head>

      <ScrollToTop />

      {/* Hero Section with Vanta.js Globe */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div ref={vantaRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark z-10" />
        <div className="container mx-auto px-4 max-w-7xl relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <blockquote className="text-xl italic font-light text-white">
                  &ldquo;Alone we can do so little; together we can do so much.&rdquo;
                </blockquote>
                <p className="text-sm text-gray-400 mt-2">- Helen Keller</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Open Crypto Foundation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Building the future of decentralized finance with secure, scalable, and interoperable blockchain solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/whitepaper" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center">
                <FaBookOpen className="mr-2" /> Read Whitepaper
              </Link>
              <Link href="/tokenomics" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium flex items-center">
                <FaCoins className="mr-2" /> Tokenomics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trading View Widget Section */}
      <section className="py-12 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-dark-card p-6 rounded-xl border border-dark-light">
              <h2 className="text-2xl font-bold mb-6 text-center">Live Cryptocurrency Market Data</h2>
              <div className="h-96" ref={tradingViewRef}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 front-page-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Blockchain & DeFi Ecosystem</h2>
            <p className="text-light-muted">
              The Open Crypto Foundation offers a suite of tools, resources, and services designed to meet the evolving needs of the cryptocurrency community. Our blockchain solutions aim to enhance security, accessibility, and education in the digital asset space.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-5 md:p-6 bg-card-gradient rounded-xl border border-dark-light/30">
              <div className="w-10 h-10 md:w-12 md:h-12 mb-4 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <FaShieldAlt size={20} />
              </div>
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-bold text-white">Security Tools</h3>
              <p className="mb-4 text-light-muted text-sm md:text-base">
                We're developing a suite of open source tools to help you verify smart contracts, analyze tokens, 
                and identify potential security risks before investing.
              </p>
              <Link href="/tools" className="text-primary hover:text-primary-light font-medium inline-flex items-center text-sm md:text-base">
                Follow Our Progress <FaArrowRight className="ml-1" size={12} />
              </Link>
            </div>
            
            <div className="p-5 md:p-6 bg-card-gradient rounded-xl border border-dark-light/30">
              <div className="w-10 h-10 md:w-12 md:h-12 mb-4 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <FaBookOpen size={20} />
              </div>
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-bold text-white">Educational Resources</h3>
              <p className="mb-4 text-light-muted text-sm md:text-base">
                We're in the early stages of building a comprehensive knowledge base for safe crypto 
                practices, from beginner guides to advanced technical documentation.
              </p>
              <Link href="/resources/defi-fundamentals" className="text-primary hover:text-primary-light font-medium inline-flex items-center text-sm md:text-base">
                See Our First Resources <FaArrowRight className="ml-1" size={12} />
              </Link>
            </div>
            
            <div className="p-5 md:p-6 bg-card-gradient rounded-xl border border-dark-light/30 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 md:w-12 md:h-12 mb-4 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <FaRocket size={20} />
              </div>
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-bold text-white">Growth Roadmap</h3>
              <p className="mb-4 text-light-muted text-sm md:text-base">
                As a new foundation, we have ambitious plans to establish open standards and best practices 
                for token launches, protocol development, and responsible DeFi innovation.
              </p>
              <Link href="/roadmap" className="text-primary hover:text-primary-light font-medium inline-flex items-center text-sm md:text-base">
                View Our Roadmap <FaArrowRight className="ml-1" size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="py-16 front-page-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Join the Blockchain Community</h2>
                <p className="text-light-muted mb-6">
                  The Open Crypto Foundation is more than just a set of tools - we're building a global community dedicated to advancing blockchain technology, cryptocurrency adoption, and decentralized finance innovation.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3" />
                    <p>Connect with fellow crypto enthusiasts and blockchain developers</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3" />
                    <p>Stay updated on the latest DeFi trends and cryptocurrency news</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3" />
                    <p>Participate in blockchain governance through our OCF token DAO</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3" />
                    <p>Access exclusive digital asset resources and educational content</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/about#join" 
                    className="px-4 md:px-6 py-2.5 md:py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors flex items-center shadow-lg text-sm sm:text-base"
                  >
                    Get Involved <FaArrowRight className="ml-2" />
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="px-4 md:px-6 py-2.5 md:py-3 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="bg-dark-card p-8 rounded-xl border border-dark-light">
                <h3 className="text-2xl font-bold mb-6">Subscribe to Our Crypto Newsletter</h3>
                <p className="text-light-muted mb-6">
                  Get the latest blockchain updates, cryptocurrency news, and exclusive DeFi insights delivered straight to your inbox. Join thousands of digital asset enthusiasts staying ahead of the curve.
                </p>
                <NewsletterSubscribe />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Define the layout for the Home page
Home.getLayout = (page) => {
  return (
    <Layout 
      title="Open Crypto Foundation | Blockchain Security & DeFi Ecosystem"
      description="Open Crypto Foundation provides blockchain security tools, cross-chain DeFi solutions, and cryptocurrency education. Explore our digital asset management platform, crypto trading toolkits, and decentralized finance (DeFi) resources."
    >
      {page}
    </Layout>
  );
};

export default Home; 
