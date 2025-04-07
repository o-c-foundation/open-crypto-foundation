import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaClock, FaRocket, FaFileAlt, FaChartLine, FaInfoCircle } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import NewsletterSubscribe from '../components/NewsletterSubscribe';

export default function PresalePage() {
  // Countdown state
  const [countdown, setCountdown] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  // Update countdown every second
  useEffect(() => {
    const startTime = new Date();
    startTime.setHours(startTime.getHours() + 48); // 48 hours from now
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = startTime.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        // Could redirect to actual presale page when time is up
        return;
      }
      
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OCF Token Presale Coming Soon | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="The OCF token presale is starting soon. Get ready to be an early supporter of the Open Crypto Foundation." 
        />
      </Head>

      <main>
        {/* Hero Section with Background and Timer */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Blurry Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-dark to-dark opacity-80"></div>
            <div className="absolute inset-0 bg-[url('/crypto-background.jpg')] bg-cover bg-center bg-no-repeat opacity-20 blur-xl"></div>
            <div className="absolute inset-0 backdrop-blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-glow">
                OCF Token Presale
              </h1>
              <p className="text-xl md:text-2xl text-light-muted mb-10">
                Launching in:
              </p>
              
              {/* Large Countdown Timer */}
              <div className="flex justify-center items-center gap-4 md:gap-6 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 md:w-24 h-16 md:h-24 bg-dark-card rounded-lg border border-primary/30 shadow-glow flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-bold text-primary">
                      {String(countdown.hours).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-light-muted mt-2">Hours</span>
                </div>
                <span className="text-3xl md:text-5xl text-primary font-bold">:</span>
                <div className="flex flex-col items-center">
                  <div className="w-16 md:w-24 h-16 md:h-24 bg-dark-card rounded-lg border border-primary/30 shadow-glow flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-bold text-primary">
                      {String(countdown.minutes).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-light-muted mt-2">Minutes</span>
                </div>
                <span className="text-3xl md:text-5xl text-primary font-bold">:</span>
                <div className="flex flex-col items-center">
                  <div className="w-16 md:w-24 h-16 md:h-24 bg-dark-card rounded-lg border border-primary/30 shadow-glow flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-bold text-primary">
                      {String(countdown.seconds).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-light-muted mt-2">Seconds</span>
                </div>
              </div>
              
              <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6 mb-8 backdrop-blur-lg bg-opacity-70">
                <h2 className="text-2xl font-bold text-white mb-4">Get Ready for the OCF Token Presale</h2>
                <p className="text-light-muted mb-4">
                  Our token presale is launching in just 48 hours! Be among the first to support 
                  the Open Crypto Foundation mission and get access to OCF tokens at a special early-supporter price.
                </p>
                <div className="flex justify-center mt-6">
                  <Link href="/roadmap" className="inline-flex items-center text-primary hover:text-primary-light transition-colors mr-6">
                    <FaRocket className="mr-2" size={16} />
                    View Our Roadmap
                  </Link>
                  <Link href="/whitepaper" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
                    <FaFileAlt className="mr-2" size={16} />
                    Read Whitepaper
                  </Link>
                </div>
              </div>
              
              {/* Subscribe for notification */}
              <div className="mt-8">
                <h3 className="text-xl text-white mb-4">Get Notified When Presale Goes Live</h3>
                <NewsletterSubscribe />
              </div>
            </div>
          </div>
        </section>
        
        {/* Basic Information Section */}
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