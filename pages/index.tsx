import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 hero-gradient"></div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto max-w-full">
          <div className="flex flex-col items-center justify-center">
            {/* Foundation info - centered */}
            <div className="w-full max-w-3xl backdrop-blur-md animated-gradient-subtle p-8 rounded-xl shadow-2xl border border-primary/20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
                <span className="text-gradient">Open Crypto Foundation</span>
              </h1>
              
              <div className="mb-8 bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <blockquote className="text-xl italic font-light text-white">
                  &ldquo;The greatest accomplishment of humanity is not its works of art, science, or technology, but the recognition of its own dysfunction.&rdquo;
                </blockquote>
                <p className="text-right mt-3 text-primary">— Eckhart Tolle</p>
              </div>
              
              <p className="text-xl md:text-2xl text-white mb-10 max-w-4xl mx-auto text-center">
                Founded to make decentralized finance safer, more transparent, and accessible through education, tools, and community engagement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
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
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 animated-gradient-light">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">Our Vision for Safer Crypto</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card-gradient rounded-xl border border-dark-light/30">
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
            
            <div className="p-6 bg-card-gradient rounded-xl border border-dark-light/30">
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
            
            <div className="p-6 bg-card-gradient rounded-xl border border-dark-light/30">
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
      <section className="py-20 animated-gradient-subtle">
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
      <section className="py-20 animated-gradient text-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Help Shape Our Foundation</h2>
            <p className="mb-8 text-lg text-light-muted">
              As a newly formed organization, we're looking for passionate individuals and partners to help 
              shape our future. We believe in the transformative potential of decentralized finance, but only if it's 
              built on a foundation of security, education, and user protection.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/about#join" 
                className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors flex items-center shadow-lg"
              >
                Get Involved <FaArrowRight className="ml-2" />
              </Link>
              
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg"
              >
                Contact Us
              </Link>
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
