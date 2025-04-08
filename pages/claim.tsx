import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaInfoCircle, FaHeart, FaFileAlt, FaRocket, FaUsers } from 'react-icons/fa';
import TokenClaimForm from '../components/TokenClaimForm';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';

export default function ClaimPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OCF Token Claim | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Request your allocated OCF tokens. Submit your information securely to claim your tokens." 
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
                Submit your token claim request through our secure form.
                Connect your wallet to verify your address and complete the claim process.
              </p>
              
              {/* Info Notice */}
              <div className="p-5 bg-blue-900/20 border border-blue-900/30 rounded-lg mb-8">
                <div className="flex items-center justify-center mb-3">
                  <FaInfoCircle className="text-blue-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Manual Verification Process</h3>
                </div>
                <p className="text-light-muted">
                  <strong>All token claim requests will be manually verified by our team.</strong> Upon approval, 
                  tokens will be sent to your provided wallet address. Please ensure all information is accurate to avoid delays.
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
                  
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Claim Process</h2>
                    <ol className="space-y-4 text-light-muted">
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <span>Connect your Solana wallet</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <span>Fill out the claim request form</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                        <span>Our team verifies your eligibility</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                        <span>Approved tokens are sent to your wallet</span>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Claim Form */}
                <div className="lg:col-span-2">
                  <TokenClaimForm />
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