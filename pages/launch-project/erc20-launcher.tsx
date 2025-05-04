import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaRocket, FaCheck, FaEthereum, FaCode, FaExchangeAlt, FaCoins, FaLock, FaGithub, FaLink, FaArrowRight } from 'react-icons/fa';
import Layout from '../../components/Layout';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

export default function ERC20Launcher() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>ERC-20 Token Creator | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Free, open-source ERC-20 token creator for multiple blockchain networks with no additional fees" 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block p-3 bg-primary/20 rounded-full">
                <FaEthereum className="text-primary text-3xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ERC-20 Token Creator
              </h1>
              <p className="text-xl text-light-muted mb-8">
                Free, open-source tool for creating ERC-20 tokens on multiple blockchain networks with no additional fees
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://erc-20-token-creator.vercel.app/" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaLink className="mr-2" /> Launch App
                </Link>
                <Link 
                  href="https://github.com/o-c-foundation/ERC-20-Token-Creator" 
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
                  <h2 className="text-3xl font-bold text-white mb-6">What is the ERC-20 Token Creator?</h2>
                  <p className="text-light-muted mb-4">
                    The Open Crypto Foundation ERC-20 Token Creator is a sophisticated decentralized application 
                    designed to democratize token creation on blockchain networks. This innovative platform empowers 
                    users to deploy custom ERC-20 tokens with precision and ease across multiple blockchain ecosystems.
                  </p>
                  <p className="text-light-muted mb-4">
                    Through an intuitive interface, users can establish their digital assets by connecting their 
                    preferred wallet, configuring token parameters, and deploying to their network of choice—all
                    with remarkable efficiency and <span className="text-primary font-medium">absolutely no additional fees</span>.
                  </p>
                </div>
                <div className="bg-dark-card p-6 rounded-xl border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Simple Token Creation</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-light font-medium">Connect your wallet</p>
                        <p className="text-sm text-light-muted">Secure connection with your preferred Web3 wallet</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-light font-medium">Configure your token</p>
                        <p className="text-sm text-light-muted">Set name, symbol, decimals, and total supply</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-light font-medium">Select your network</p>
                        <p className="text-sm text-light-muted">Choose from multiple supported blockchain networks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <p className="text-light font-medium">Deploy and verify</p>
                        <p className="text-sm text-light-muted">One-click deployment with built-in verification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Networks Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-6">Supported Networks</h2>
              <p className="text-center text-light-muted mb-12 max-w-3xl mx-auto">
                Our ERC-20 Token Creator supports a wide range of EVM-compatible blockchain networks, allowing you to deploy 
                your token where your community is most active.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/ethereum.svg" alt="Ethereum" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Ethereum</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet & Testnets</p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/binance.svg" alt="Binance Smart Chain" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">BSC</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet & Testnet</p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/polygon.svg" alt="Polygon" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Polygon</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet & Mumbai</p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/arbitrum.svg" alt="Arbitrum" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Arbitrum</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet & Testnets</p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/avalanche.svg" alt="Avalanche" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Avalanche</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet & Fuji</p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/optimism.svg" alt="Optimism" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Optimism</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet & Sepolia</p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/base.svg" alt="Base" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Base</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet & Sepolia</p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-5 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/images/networks/canto.svg" alt="Canto" className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Canto</h3>
                  <p className="text-sm text-light-muted mt-1">Mainnet</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-light-muted">Additional networks are added regularly based on community demand.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaCoins className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Zero Additional Fees</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Create and deploy your ERC-20 tokens without any additional service fees. 
                    You only pay the standard blockchain network gas fees for deployment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> No hidden charges
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> No platform fees
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Only standard network gas fees
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaExchangeAlt className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Multi-Chain Support</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Deploy your tokens on a wide range of EVM-compatible blockchain networks including 
                    Ethereum, Binance Smart Chain, Polygon, Arbitrum, and many more.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Mainnet deployments
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Testnet support
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Cross-chain compatibility
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaLock className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Secure & Transparent</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Our open-source approach ensures complete transparency. The code is auditable by anyone, 
                    and we never have access to your private keys or funds.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Open-source code
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Non-custodial solution
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Client-side transaction signing
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaCode className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Customizable Tokens</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Configure your token parameters including name, symbol, decimals, supply, and advanced features 
                    to create the perfect token for your project.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Standard ERC-20 features
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Supply control options
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Full ownership of your token
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-dark">
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
                    Connect your web3 wallet like MetaMask, WalletConnect, or Coinbase Wallet to the token creator application.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Configure Token</h3>
                  <p className="text-light-muted">
                    Enter your token details including name, symbol, decimals, and total supply. Select your target blockchain network.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Deploy Token</h3>
                  <p className="text-light-muted">
                    Review your configuration, confirm the transaction in your wallet, and your token will be deployed to the blockchain instantly.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-dark-elevated p-6 rounded-xl border border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-white mb-2">Ready to create your token?</h3>
                    <p className="text-light-muted">Launch the app now and deploy your ERC-20 token in minutes.</p>
                  </div>
                  <Link 
                    href="https://erc-20-token-creator.vercel.app/" 
                    target="_blank"
                    className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center whitespace-nowrap"
                  >
                    Launch Token Creator <FaArrowRight className="ml-2" />
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
              <h2 className="text-3xl font-bold text-white mb-6">Zero Additional Fees</h2>
              <p className="text-xl text-light-muted mb-8">
                We are committed to making token creation accessible to everyone. Unlike other platforms,
                we charge <span className="text-primary font-bold">absolutely no additional fees</span> for using our token creator.
              </p>
              <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white mb-1">What you'll pay:</h3>
                    <p className="text-light-muted">Only standard blockchain network gas fees</p>
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
                  <h3 className="text-xl font-bold text-white mb-3">Is the ERC-20 Token Creator really free to use?</h3>
                  <p className="text-light-muted">
                    Yes, our token creator is completely free to use. There are no platform fees, hidden charges, or subscriptions. 
                    You only pay the standard gas fees required by the blockchain network you're deploying to.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">What networks can I deploy my token on?</h3>
                  <p className="text-light-muted">
                    The ERC-20 Token Creator supports multiple EVM-compatible networks including Ethereum, Binance Smart Chain, 
                    Polygon, Arbitrum, Avalanche, Optimism, Base, and many more. Both mainnet and testnet deployments are supported.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Do I need technical knowledge to create a token?</h3>
                  <p className="text-light-muted">
                    No technical knowledge is required. Our intuitive interface guides you through the entire process, 
                    from connecting your wallet to configuring and deploying your token. If you can fill out a form, 
                    you can create your own token.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Is my token secure and verified?</h3>
                  <p className="text-light-muted">
                    Yes, all tokens created with our platform use audited, industry-standard ERC-20 smart contract code. 
                    The deployed contracts are verified on the network's blockchain scanner (like Etherscan), allowing 
                    anyone to view and audit the code.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Will I have full ownership of my token?</h3>
                  <p className="text-light-muted">
                    Absolutely. You will have 100% ownership and control of your token. The wallet you use to deploy 
                    the token will be the owner, and all the initial token supply will be sent to that address. We have 
                    no access or control over your tokens.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Can I create tokens for my project or business?</h3>
                  <p className="text-light-muted">
                    Yes, our ERC-20 Token Creator is suitable for a wide range of applications, from community projects 
                    to business use cases. However, please ensure you comply with all relevant regulations in your jurisdiction 
                    when creating and distributing tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-dark-elevated to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Create Your ERC-20 Token Today</h2>
              <p className="text-xl text-light-muted mb-8">
                Launch your token in minutes with our free, no-fee ERC-20 Token Creator
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://erc-20-token-creator.vercel.app/" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaRocket className="mr-2" /> Launch App
                </Link>
                <Link 
                  href="https://github.com/o-c-foundation/ERC-20-Token-Creator" 
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
                <p className="text-light-muted">Subscribe to receive updates about the ERC-20 Token Creator and other OCF tools.</p>
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
ERC20Launcher.getLayout = function getLayout(page) {
  return (
    <Layout 
      title="ERC-20 Token Creator | Open Crypto Foundation"
      description="Free, open-source ERC-20 token creator for multiple blockchain networks with no additional fees"
    >
      {page}
    </Layout>
  );
}; 