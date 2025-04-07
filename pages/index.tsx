import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaShieldAlt, FaBookOpen, FaTools, FaRegNewspaper, FaRocket, FaCoins, FaFire, FaBook, FaUserFriends, FaCheckCircle, FaLock } from 'react-icons/fa'
import NewsletterSubscribe from '../components/NewsletterSubscribe'
import ScrollToTop from '../components/ScrollToTop'
import SolanaIcon from '../components/icons/SolanaIcon'

export default function Home() {
  const [logoError, setLogoError] = useState(false);
  const [presaleBannerVisible, setPresaleBannerVisible] = useState(true);
  const [isErrorRecoveryMode, setIsErrorRecoveryMode] = useState(false);
  const logoUrl = "https://bafkreidnf7j4gen5gwgnqxmi3fcprksdmorptbdenb4q76ejbpgbjqkzqq.ipfs.w3s.link/";

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
          <title>Open Crypto Foundation - Empowering Safe DeFi Interactions</title>
          <meta name="description" content="The Open Crypto Foundation provides tools and education to help users safely interact with DeFi protocols and avoid scams." />
        </Head>
        
        <main className="min-h-screen bg-dark">
          {/* Simple Hero Section for Error Recovery */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-dark-light to-dark text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                  <Image 
                    src="https://bafkreih4hdkhpjoxluzj526ehakmylfg5o2ri4wctumedqc3i5lv35k7ay.ipfs.w3s.link/"
                    alt="Open Crypto Foundation Logo"
                    width={120}
                    height={120}
                    priority
                  />
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
            <div className="container mx-auto px-4">
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
            <div className="container mx-auto px-4">
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
        <title>Open Crypto Foundation | Promoting Safe DeFi</title>
        <meta 
          name="description" 
          content="The newly launched Open Crypto Foundation is dedicated to promoting safe decentralized finance practices and educating users about blockchain technology." 
        />
      </Head>
      
      {/* Presale Banner */}
      {presaleBannerVisible && (
        <div className="relative bg-gradient-to-r from-primary to-primary-dark py-3">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-3 md:mb-0">
                <div className="bg-white/20 p-1.5 rounded-full mr-3">
                  <FaFire className="text-white" size={18} />
                </div>
                <div>
                  <span className="font-medium text-white">OCF Token Presale Coming Soon!</span>
                  <span className="hidden md:inline ml-2 text-white/80">Get ready for early access with 50% discount</span>
                </div>
              </div>
              <div className="flex items-center">
                <Link href="/presale" className="bg-white hover:bg-gray-100 transition-colors text-primary font-medium px-4 py-1.5 rounded-lg flex items-center text-sm">
                  <FaCoins className="mr-1.5" size={14} />
                  Presale Details
                  <FaArrowRight className="ml-1.5" size={10} />
                </Link>
                <button 
                  onClick={() => setPresaleBannerVisible(false)}
                  className="ml-3 text-white/70 hover:text-white transition-colors"
                  aria-label="Close banner"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative h-48 w-48 mx-auto mb-8">
              {logoError ? (
                <img 
                  src={logoUrl}
                  alt="Open Crypto Foundation Logo" 
                  width={192}
                  height={192}
                  className="max-w-full h-auto"
                />
              ) : (
                <Image 
                  src={logoUrl}
                  alt="Open Crypto Foundation Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                Newly Launched - April 2025
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold">
              Promoting Safe &amp; Accessible Crypto for Everyone
            </h1>
            <p className="mb-10 text-xl text-gray-300">
              Founded just three weeks ago, our mission is to make decentralized finance safer, more transparent, 
              and accessible through education, tools, and community engagement.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link 
                href="/presale" 
                className="px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-md text-lg font-semibold transition-colors flex items-center justify-center"
              >
                Presale Coming Soon <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/claim" 
                className="px-8 py-3 bg-dark-light hover:bg-dark-light/80 text-white rounded-md text-lg font-semibold transition-colors flex items-center justify-center border border-primary/30"
              >
                Whitelist Token Claim <FaCoins className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Presale CTA Card - Prominently displayed */}
      <div className="relative -mt-10 mb-12 z-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-dark-card to-primary/10 border border-primary/30 rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-white mb-2">OCF Token Presale Coming Soon</h2>
                <p className="text-light-muted mb-6">
                  Get ready to secure your OCF tokens at a 50% discount before our public launch. Limited allocation tickets will be available on the Solana blockchain in just 48 hours.
                </p>
                <div className="flex items-center">
                  <div className="flex items-center bg-dark-light/30 rounded-lg px-4 py-2 mr-6">
                    <span className="text-primary font-bold text-2xl">50%</span>
                    <span className="text-light-muted ml-2 font-medium">Discount</span>
                  </div>
                  <div className="flex items-center bg-dark-light/30 rounded-lg px-4 py-2">
                    <span className="text-primary font-bold text-lg">48h</span>
                    <span className="text-light-muted ml-2 font-medium">Countdown</span>
                  </div>
                </div>
              </div>
              <div className="bg-dark-light/20 p-8 flex items-center justify-center md:w-1/3">
                <Link href="/presale" className="bg-primary hover:bg-primary-light transition-colors text-white py-3 px-6 rounded-lg font-medium flex items-center">
                  <FaCoins className="mr-2" />
                  View Presale Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">Our Vision for Safer Crypto</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded-lg">
                <FaShieldAlt size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Security Tools</h3>
              <p className="mb-4 text-gray-300">
                We're developing a suite of open source tools to help you verify smart contracts, analyze tokens, 
                and identify potential security risks before investing.
              </p>
              <Link href="/tools" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Follow Our Progress <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded-lg">
                <FaBookOpen size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Educational Resources</h3>
              <p className="mb-4 text-gray-300">
                We're in the early stages of building a comprehensive knowledge base for safe crypto 
                practices, from beginner guides to advanced technical documentation.
              </p>
              <Link href="/resources/defi-fundamentals" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                See Our First Resources <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded-lg">
                <FaRocket size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Growth Roadmap</h3>
              <p className="mb-4 text-gray-300">
                As a new foundation, we have ambitious plans to establish open standards and best practices 
                for token launches, protocol development, and responsible DeFi innovation.
              </p>
              <Link href="/roadmap" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                View Our Roadmap <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-white">Be Part of Our Early Community</h2>
                <p className="text-gray-300 mb-6">
                  Join our newsletter to follow our progress, receive updates on crypto security, 
                  and learn about opportunities to contribute to the Open Crypto Foundation's mission.
                </p>
                <div className="flex items-center mb-2">
                  <FaRegNewspaper className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Development updates</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaRegNewspaper className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Security alerts</span>
                </div>
                <div className="flex items-center">
                  <FaRegNewspaper className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Contribution opportunities</span>
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
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Help Shape Our Foundation</h2>
            <p className="mb-8 text-lg text-gray-300">
              As a newly formed organization, we're looking for passionate individuals and partners to help 
              shape our future. We believe in the transformative potential of decentralized finance, but only if it's 
              built on a foundation of security, education, and user protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors">
                Learn About Our Mission
              </Link>
              <a 
                href="mailto:info@opencryptofoundation.com" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 