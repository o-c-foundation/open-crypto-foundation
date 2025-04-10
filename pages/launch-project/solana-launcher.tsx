import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaRocket, FaCheck, FaCoins, FaCode, FaExchangeAlt, FaLock, FaCogs, FaGithub, FaDownload, FaArrowRight } from 'react-icons/fa';
import Layout from '../../components/Layout';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

export default function SolanaLauncher() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Solana Token Launcher | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Free, open-source toolkit for creating Solana tokens, AMM pools, and markets with transaction bundling" 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block p-3 bg-primary/20 rounded-full">
                <FaRocket className="text-primary text-3xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solana Token Launcher
              </h1>
              <p className="text-xl text-light-muted mb-8">
                Free, open-source toolkit for creating Solana tokens, AMM pools, and markets with secure transaction bundling
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://github.com/opencryptofoundation/solana-token-launcher" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </Link>
                <Link 
                  href="#features" 
                  className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  Learn More <FaArrowRight className="ml-2" />
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
                  <h2 className="text-3xl font-bold text-white mb-6">What is the Solana Token Launcher?</h2>
                  <p className="text-light-muted mb-4">
                    The Solana Token Launcher is an open-source toolkit designed to simplify the process of creating 
                    and deploying tokens on the Solana blockchain. Built with security and transparency in mind, it 
                    offers a straightforward way for developers to launch tokens, create liquidity pools, and set up 
                    markets without requiring deep technical knowledge of Solana's programming model.
                  </p>
                  <p className="text-light-muted mb-4">
                    Developed by the Open Crypto Foundation, this tool emphasizes security best practices and includes 
                    transaction bundling to ensure atomic execution of complex operations, reducing risk during token launches.
                  </p>
                </div>
                <div className="bg-dark-card p-6 rounded-xl border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Start</h3>
                  <div className="bg-dark-elevated rounded-lg p-4 font-mono text-sm text-light-muted overflow-x-auto">
                    <p className="mb-2"># Clone the repository</p>
                    <p className="mb-4">git clone https://github.com/opencryptofoundation/solana-token-launcher</p>
                    <p className="mb-2"># Install dependencies</p>
                    <p className="mb-4">npm install</p>
                    <p className="mb-2"># Run the CLI tool</p>
                    <p>npx solana-token-launcher create</p>
                  </div>
                  <Link 
                    href="https://github.com/opencryptofoundation/solana-token-launcher#readme"
                    target="_blank" 
                    className="mt-4 text-primary hover:text-primary-light flex items-center"
                  >
                    <FaDownload className="mr-2" /> View full installation guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaCoins className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Token Creation</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Create SPL tokens with customizable parameters including name, symbol, decimals, 
                    and supply. Supports both fungible and non-fungible tokens with metadata integration.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> SPL token standard
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Customizable metadata
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Configurable token supply
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaExchangeAlt className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">AMM Pool Creation</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Easily set up liquidity pools on major Solana DEXs including Raydium, Orca, 
                    and Jupiter. Configure initial liquidity, fee tiers, and pool parameters.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Multi-DEX support
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Configurable fee tiers
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Initial liquidity provisioning
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaLock className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Transaction Bundling</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Bundle multiple transactions into a single atomic operation, ensuring all steps complete
                    or none do. Reduces risks during token launches and prevents partial execution issues.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Atomic execution
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Versioned transactions
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Address lookup tables support
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaCode className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Developer-Friendly</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Built with TypeScript for improved type safety and developer experience. 
                    Includes comprehensive documentation, examples, and CLI tools for easy use.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> TypeScript codebase
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Intuitive CLI interface
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Detailed documentation
                    </li>
                  </ul>
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
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">1</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Install & Configure</h3>
                      <p className="text-light-muted">
                        Install the Solana Token Launcher package and configure your Solana wallet. 
                        Set up your environment with the Solana CLI and ensure you have SOL for transaction fees.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">2</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Design Your Token</h3>
                      <p className="text-light-muted">
                        Use the CLI or configuration file to define your token parameters including name, 
                        symbol, decimals, and supply. Add optional metadata like logo, description, and website.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">3</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Plan Your Launch</h3>
                      <p className="text-light-muted">
                        Configure your launch parameters including initial liquidity, selected DEXs, 
                        and any additional operations like token locking or vesting schedules.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">4</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Preview & Confirm</h3>
                      <p className="text-light-muted">
                        Review the generated transaction bundle before execution. The tool will display 
                        all operations that will be performed and their estimated costs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">5</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Launch & Verify</h3>
                      <p className="text-light-muted">
                        Execute the transaction bundle in a single atomic operation. Once confirmed, 
                        the tool will provide links to verify your token and pools on Solana explorers and DEXs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Details Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Technical Details</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg h-full">
                    <h3 className="text-xl font-bold text-white mb-4">System Architecture</h3>
                    <p className="text-light-muted mb-4">
                      The Solana Token Launcher is built on top of the Solana Web3.js library and integrates with 
                      multiple Solana protocols. It uses a modular architecture with the following components:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-light-muted">
                        <FaCogs className="text-primary mr-2 flex-shrink-0" /> Core Token Module
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCogs className="text-primary mr-2 flex-shrink-0" /> Liquidity Pool Module
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCogs className="text-primary mr-2 flex-shrink-0" /> Transaction Builder
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCogs className="text-primary mr-2 flex-shrink-0" /> Verification Service
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCogs className="text-primary mr-2 flex-shrink-0" /> CLI Interface
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg h-full">
                    <h3 className="text-xl font-bold text-white mb-4">Security Considerations</h3>
                    <p className="text-light-muted mb-4">
                      Security is a primary focus of the Solana Token Launcher. Key security features include:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-light-muted">
                        <FaLock className="text-primary mr-2 flex-shrink-0" /> Local key management (no private key upload)
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaLock className="text-primary mr-2 flex-shrink-0" /> Optional multisig support
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaLock className="text-primary mr-2 flex-shrink-0" /> Simulation before execution
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaLock className="text-primary mr-2 flex-shrink-0" /> Fee estimation and limits
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaLock className="text-primary mr-2 flex-shrink-0" /> Audit logging for all operations
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
              <h2 className="text-3xl font-bold text-white mb-6">Start Building on Solana</h2>
              <p className="text-xl text-light-muted mb-8">
                Get started with the Solana Token Launcher today and launch your token with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://github.com/opencryptofoundation/solana-token-launcher" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </Link>
                <Link 
                  href="mailto:projects@opencryptofoundation.com" 
                  className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg"
                >
                  Contact for Support
                </Link>
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
                  <h3 className="text-xl font-bold text-white mb-3">Is the Solana Token Launcher completely free?</h3>
                  <p className="text-light-muted">
                    Yes, the Solana Token Launcher is completely free and open-source. You only pay the standard 
                    Solana network fees for your transactions. There are no additional fees for using our toolkit.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">What technical knowledge do I need?</h3>
                  <p className="text-light-muted">
                    Basic familiarity with command line tools and cryptocurrency wallets is recommended. 
                    The tool is designed to be user-friendly, but some understanding of Solana concepts 
                    like wallets, SPL tokens, and liquidity pools will help you make the most of it.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Can I use this for meme coins?</h3>
                  <p className="text-light-muted">
                    Yes, the toolkit can be used for any type of SPL token, including meme coins. However, we 
                    encourage responsible token creation and tokenomics that are fair to all participants.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">How does transaction bundling improve security?</h3>
                  <p className="text-light-muted">
                    Transaction bundling ensures that all steps in your token launch (creating the token, setting up 
                    pools, adding liquidity) either all succeed or all fail. This prevents partial execution issues 
                    that could leave your project in an inconsistent state or vulnerable to front-running attacks.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Can I contribute to the project?</h3>
                  <p className="text-light-muted">
                    Absolutely! The Solana Token Launcher is open source and we welcome contributions. Check out our 
                    GitHub repository for contribution guidelines, open issues, and development roadmap.
                  </p>
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
                <p className="text-light-muted">Subscribe to receive updates about the Solana Token Launcher and other OCF tools.</p>
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
SolanaLauncher.getLayout = function getLayout(page) {
  return (
    <Layout 
      title="Solana Token Launcher | Open Crypto Foundation"
      description="Free, open-source toolkit for creating Solana tokens, AMM pools, and markets with transaction bundling"
    >
      {page}
    </Layout>
  );
}; 