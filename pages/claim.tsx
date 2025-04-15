import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaInfoCircle, FaHeart, FaFileAlt, FaRocket, FaUsers, FaTwitter, FaTelegram, FaYoutube } from 'react-icons/fa';
import TokenClaimForm from '../components/TokenClaimForm';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';

export default function ClaimPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OCF Airdrop | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Request your allocated OCF tokens. Submit your information securely to claim your OCF airdrop." 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OCF Airdrop Portal
              </h1>
              <p className="text-xl text-light-muted mb-6">
                Submit your airdrop request through our secure form.
                Connect your wallet to verify your address and complete the claim process.
              </p>
              
              {/* Info Notice */}
              <div className="p-5 bg-blue-900/20 border border-blue-900/30 rounded-lg mb-8">
                <div className="flex items-center justify-center mb-3">
                  <FaInfoCircle className="text-blue-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Automatic Airdrop Process</h3>
                </div>
                <p className="text-light-muted">
                  <strong>Our oracle automatically airdrops tokens to eligible wallets.</strong> Please allow 10-15 minutes 
                  for the tokens to arrive in your wallet. If your request is flagged for any reason, it will be sent for manual review.
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
              
              {/* Additional Allocation Methods */}
              <div className="p-5 bg-green-900/20 border border-green-800/30 rounded-lg mt-6">
                <div className="flex items-center justify-center mb-3">
                  <FaInfoCircle className="text-green-500 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Earn More Airdrop Tokens!</h3>
                </div>
                <div className="text-light-muted">
                  <p className="mb-3">
                    <strong>Not eligible or want to increase your allocation?</strong> Complete these tasks to earn additional tokens before launch:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-left">
                    <div className="bg-dark-card p-3 rounded-lg border border-dark-light/30">
                      <div className="flex items-center mb-2">
                        <FaTwitter className="text-primary mr-2" />
                        <h4 className="font-semibold text-white">Twitter Tasks</h4>
                      </div>
                      <ul className="text-sm space-y-2 pl-6 list-disc">
                        <li>Follow <a href="https://twitter.com/opencryptofdn" className="text-primary" target="_blank" rel="noopener noreferrer">@opencryptofdn</a></li>
                        <li>Like & Retweet our pinned post</li>
                        <li>Tweet about OCF and tag 3 friends</li>
                      </ul>
                    </div>
                    <div className="bg-dark-card p-3 rounded-lg border border-dark-light/30">
                      <div className="flex items-center mb-2">
                        <FaTelegram className="text-primary mr-2" />
                        <h4 className="font-semibold text-white">Telegram Tasks</h4>
                      </div>
                      <ul className="text-sm space-y-2 pl-6 list-disc">
                        <li>Join our <a href="https://t.me/ocfcommunity" className="text-primary" target="_blank" rel="noopener noreferrer">Telegram group</a></li>
                        <li>Invite 3 friends to the group</li>
                        <li>Participate in group discussions</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm italic">
                    Submit proof of completion in the form below to have your allocation increased.
                  </p>
                </div>
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
                    </ul>
                  </div>
                  
                  <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Airdrop Process</h2>
                    <ol className="space-y-4 text-light-muted">
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <span>Connect your Solana wallet</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <span>Submit the airdrop request</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                        <span>Oracle automatically processes your request</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                        <span>Receive 2,000,000 OCF tokens</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                        <span>Complete additional tasks for more tokens</span>
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