import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaInfoCircle, FaHeart, FaFileAlt, FaRocket, FaUsers } from 'react-icons/fa';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';
import SolanaTokenClaim from '../components/SolanaTokenClaim';

export default function ClaimPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OCF Token Claim | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Claim your allocated OCF tokens. Whitelisted wallets can claim their tokens securely through our platform." 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OCF Token Claim Portal
              </h1>
              <p className="text-xl text-light-muted mb-6">
                Claim your allocated OCF tokens securely through our platform.
                Connect your wallet to check if you are eligible for our token distribution.
              </p>
              
              {/* Devnet Notice */}
              <div className="p-5 bg-yellow-900/20 border border-yellow-900/30 rounded-lg mb-8">
                <div className="flex items-center justify-center mb-3">
                  <FaInfoCircle className="text-yellow-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Important: Devnet Tokens</h3>
                </div>
                <p className="text-light-muted">
                  <strong>The tokens you claim here are on the Solana Devnet, not the Mainnet.</strong> These devnet tokens 
                  can be redeemed for real mainnet tokens one day before the official launch. 
                  You will need to configure your wallet to connect to the Solana Devnet to see your claimed tokens.
                </p>
              </div>
              
              {/* Community Appreciation Message */}
              <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg mt-8 mb-6">
                <div className="flex items-center justify-center mb-3">
                  <FaHeart className="text-primary mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Thank You to Our Community</h3>
                </div>
                <p className="text-light-muted mb-0">
                  We deeply appreciate your support and belief in our mission to make DeFi safer and more accessible. 
                  Your early participation helps us build a stronger foundation for the entire ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Claim Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar with info */}
                <div className="lg:col-span-1">
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6 mb-6">
                    <h2 className="text-xl font-bold text-white mb-4">Important Links</h2>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/whitepaper" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <FaFileAlt className="mr-2" size={16} />
                          <span>Whitepaper</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/roadmap" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <FaRocket className="mr-2" size={16} />
                          <span>Roadmap</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/presale" className="flex items-center text-primary hover:text-primary-light transition-colors">
                          <FaUsers className="mr-2" size={16} />
                          <span>Token Presale</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Claim Form - Using Solana Component */}
                <div className="lg:col-span-2">
                  <SolanaTokenClaim />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
                <p className="text-light-muted">Get the latest updates on token events, distribution, and platform launches.</p>
              </div>
              <NewsletterSubscribe />
            </div>
          </div>
        </section>
      </main>
      
      <ScrollToTop />
    </div>
  );
} 