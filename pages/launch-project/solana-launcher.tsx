import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaRocket, FaCheck, FaCoins, FaCode, FaExchangeAlt, FaFire, FaWallet, FaGithub, FaLink, FaArrowRight, FaPaperPlane, FaTimes } from 'react-icons/fa';
import Layout from '../../components/Layout';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

export default function SolanaSPLTools() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Solana SPL Tools | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Free, open-source tools for the Solana SPL Token ecosystem with zero platform fees" 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block p-3 bg-primary/20 rounded-full">
                <FaCoins className="text-primary text-3xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solana SPL Tools
              </h1>
              <p className="text-xl text-light-muted mb-8">
                Comprehensive suite of utilities for the Solana blockchain with zero platform fees
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://open-crypto-foundation-spl-tools.vercel.app/" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaLink className="mr-2" /> Launch App
                </Link>
                <Link 
                  href="https://github.com/o-c-foundation/Open-Crypto-Foundation-SPL-Tools" 
                  target="_blank"
                  className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">What are Solana SPL Tools?</h2>
                  <p className="text-light-muted mb-4">
                    The Open Crypto Foundation SPL Tools is a comprehensive suite of utilities for the Solana blockchain 
                    that allows you to interact with SPL tokens. From token creation to mass distribution, 
                    these tools simplify complex operations on the Solana network.
                  </p>
                  <p className="text-light-muted mb-4">
                    All tools are completely free to use with <span className="text-primary font-medium">absolutely no platform fees</span>. 
                    You only pay the standard Solana network fees for your transactions.
                  </p>
                </div>
                <div className="bg-dark-card p-6 rounded-xl border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Available Tools</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaPaperPlane className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">MultiSender</p>
                        <p className="text-sm text-light-muted">Send tokens to multiple wallets in one transaction</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaCoins className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Token Creation</p>
                        <p className="text-sm text-light-muted">Create custom SPL tokens with configurable parameters</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaFire className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Token Burning</p>
                        <p className="text-sm text-light-muted">Safely burn tokens and reclaim SOL</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaTimes className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Account Closing</p>
                        <p className="text-sm text-light-muted">Close unnecessary token accounts and recover SOL</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaWallet className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Fee Claiming</p>
                        <p className="text-sm text-light-muted">Claim accumulated transfer fees from Token-2022 tokens</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaPaperPlane className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">MultiSender</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    The MultiSender tool allows you to send SPL tokens to multiple addresses in a single 
                    transaction, saving time and transaction fees.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Perfect for airdrops
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Efficient token distribution
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Team payments and community rewards
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaCoins className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Token Creation</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Create your own SPL token with customizable parameters for your project or community.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Set supply and decimals
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Add metadata
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Standard SPL tokens and Token-2022 features
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Optional custom transfer fees
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaFire className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Token Burning</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Safely burn unwanted tokens and reclaim SOL from token accounts.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Burn specific amounts from your wallets
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Recover rent fees from empty accounts
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Clean up unwanted airdrops
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaTimes className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Account Closing</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Close token accounts that are no longer needed to clean up your wallet.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Recover SOL from token accounts with zero balance
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Clean up your wallet from unwanted token accounts
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Batch close multiple accounts at once
                    </li>
                  </ul>
                </div>

                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaWallet className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Fee Claiming</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    For Token-2022 token creators, easily claim accumulated transfer fees.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-dark-elevated p-4 rounded-lg">
                      <p className="text-light-muted"><FaCheck className="text-primary mr-2 inline-block" /> View all collected fees</p>
                    </div>
                    <div className="bg-dark-elevated p-4 rounded-lg">
                      <p className="text-light-muted"><FaCheck className="text-primary mr-2 inline-block" /> Withdraw fees to your wallet</p>
                    </div>
                    <div className="bg-dark-elevated p-4 rounded-lg">
                      <p className="text-light-muted"><FaCheck className="text-primary mr-2 inline-block" /> Manage fee accounts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Connect Wallet</h3>
                  <p className="text-light-muted">
                    Connect your Solana wallet like Phantom, Solflare, or other compatible wallets to access the tools.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Select Tool</h3>
                  <p className="text-light-muted">
                    Choose the Solana SPL tool you need from the intuitive interface. Each tool has a streamlined workflow.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Execute Operation</h3>
                  <p className="text-light-muted">
                    Follow the guided steps to complete your operation, confirm the transaction in your wallet, and see the results instantly.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-dark-elevated p-6 rounded-xl border border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-white mb-2">Ready to use Solana SPL Tools?</h3>
                    <p className="text-light-muted">Launch the app now and start managing your SPL tokens efficiently.</p>
                  </div>
                  <Link 
                    href="https://open-crypto-foundation-spl-tools.vercel.app/" 
                    target="_blank"
                    className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center whitespace-nowrap"
                  >
                    Launch SPL Tools <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* No Fees Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Zero Platform Fees</h2>
              <p className="text-xl text-light-muted mb-8">
                Our Solana SPL Tools are completely free to use. Unlike other platforms,
                you only pay <span className="text-primary font-bold">standard Solana network fees</span> for your transactions.
              </p>
              <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white mb-1">What you'll pay:</h3>
                    <p className="text-light-muted">Only standard Solana network fees</p>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-light-muted line-through mb-1">What you won't pay:</h3>
                    <p className="text-light-muted">No platform fees, no hidden charges, no subscription</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Are these tools really free to use?</h3>
                  <p className="text-light-muted">
                    Yes, all Solana SPL Tools are completely free to use. There are no platform fees, hidden charges, or subscriptions. 
                    You only pay the standard Solana network fees for your transactions.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">How do I use the MultiSender tool?</h3>
                  <p className="text-light-muted">
                    After connecting your wallet, select the MultiSender tool, choose the token you want to send, 
                    and upload a CSV file with recipient addresses and amounts. Review the transaction details, confirm 
                    in your wallet, and the tokens will be sent to multiple recipients in a single transaction.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">What types of tokens can I create?</h3>
                  <p className="text-light-muted">
                    You can create standard SPL tokens or Token-2022 tokens with advanced features. 
                    You can set parameters like supply, decimals, and metadata. Token-2022 tokens can also include 
                    features like transfer fees, which can be claimed later using our Fee Claiming tool.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Is my wallet secure when using these tools?</h3>
                  <p className="text-light-muted">
                    Yes, our tools are non-custodial, meaning we never have access to your private keys or funds. 
                    All transactions are signed locally in your wallet, and you'll always be prompted to review 
                    and approve any transaction before it's submitted to the network.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Can I recover SOL from my token accounts?</h3>
                  <p className="text-light-muted">
                    Yes, using the Account Closing tool, you can recover the SOL that was used as rent for token accounts 
                    that have zero balance. This helps you clean up your wallet and reclaim SOL that would otherwise be locked.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Do I need technical knowledge to use these tools?</h3>
                  <p className="text-light-muted">
                    No technical knowledge is required. Our intuitive interface guides you through each process 
                    step by step. However, basic familiarity with Solana wallets and SPL tokens will be helpful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Stack Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Stack</h2>
              
              <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Next.js for frontend and API routes
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> TailwindCSS for styling
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> @solana/wallet-adapter for wallet connectivity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Blockchain Interaction</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> @solana/web3.js for blockchain interactions
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> @solana/spl-token for token operations
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Open-source and auditable code
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-dark-elevated to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Start Using Solana SPL Tools Today</h2>
              <p className="text-xl text-light-muted mb-8">
                Manage your SPL tokens efficiently with our free, open-source tools
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://open-crypto-foundation-spl-tools.vercel.app/" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaRocket className="mr-2" /> Launch App
                </Link>
                <Link 
                  href="https://github.com/o-c-foundation/Open-Crypto-Foundation-SPL-Tools" 
                  target="_blank"
                  className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View Source Code
                </Link>
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
                <p className="text-light-muted">Subscribe to receive updates about Solana SPL Tools and other OCF tools.</p>
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

// Define custom layout for the page
SolanaSPLTools.getLayout = function getLayout(page) {
  return (
    <Layout 
      title="Solana SPL Tools | Open Crypto Foundation"
      description="Free, open-source tools for the Solana SPL Token ecosystem with zero platform fees"
    >
      {page}
    </Layout>
  );
}; 