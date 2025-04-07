import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaSearch, FaCheck, FaExternalLinkAlt, FaShieldAlt, FaExclamationTriangle, FaCoins } from 'react-icons/fa';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';

// Types for verified links
interface VerifiedLink {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  chains: string[];
}

// Categories for organizing links
interface LinkCategory {
  id: string;
  name: string;
  description: string;
}

export default function VerifiedLinksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChain, setSelectedChain] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define chains
  const chains = [
    { id: 'all', name: 'All Chains' },
    { id: 'evm', name: 'EVM Chains' },
    { id: 'solana', name: 'Solana' },
  ];

  // Define categories
  const categories: LinkCategory[] = [
    { id: 'all', name: 'All Categories', description: 'View all verified links across categories' },
    { id: 'wallets', name: 'Wallets', description: 'Secure wallets for managing your cryptocurrency assets' },
    { id: 'exchanges', name: 'Exchanges', description: 'Centralized platforms for trading cryptocurrencies' },
    { id: 'dexes', name: 'DEXes', description: 'Decentralized exchanges for permissionless trading' },
    { id: 'networks', name: 'Network Sites', description: 'Official blockchain network websites and explorers' },
    { id: 'launchpads', name: 'Launchpads', description: 'Platforms for new token launches and IDOs' },
    { id: 'tools', name: 'Developer Tools', description: 'Essential tools for blockchain development' },
  ];

  // Define verified links for EVM chains
  const evmLinks: VerifiedLink[] = [
    // Wallets
    {
      id: 'metamask',
      title: 'MetaMask',
      url: 'https://metamask.io',
      description: 'Popular browser extension wallet for Ethereum and EVM chains',
      category: 'wallets',
      tags: ['browser extension', 'mobile'],
      chains: ['evm']
    },
    {
      id: 'rainbow',
      title: 'Rainbow',
      url: 'https://rainbow.me',
      description: 'User-friendly Ethereum wallet with excellent NFT support',
      category: 'wallets',
      tags: ['mobile'],
      chains: ['evm']
    },
    {
      id: 'trustwallet',
      title: 'Trust Wallet',
      url: 'https://trustwallet.com',
      description: 'Multi-chain wallet supporting various blockchains',
      category: 'wallets',
      tags: ['mobile'],
      chains: ['evm', 'solana']
    },
    
    // Exchanges
    {
      id: 'binance',
      title: 'Binance',
      url: 'https://binance.com',
      description: 'Largest cryptocurrency exchange by trading volume',
      category: 'exchanges',
      tags: ['cex'],
      chains: ['evm', 'solana']
    },
    {
      id: 'coinbase',
      title: 'Coinbase',
      url: 'https://coinbase.com',
      description: 'US-based cryptocurrency exchange and wallet provider',
      category: 'exchanges',
      tags: ['cex'],
      chains: ['evm', 'solana']
    },
    {
      id: 'kraken',
      title: 'Kraken',
      url: 'https://kraken.com',
      description: 'Established exchange with strong security focus',
      category: 'exchanges',
      tags: ['cex'],
      chains: ['evm', 'solana']
    },
    
    // DEXes
    {
      id: 'uniswap',
      title: 'Uniswap',
      url: 'https://app.uniswap.org',
      description: 'Leading decentralized exchange on Ethereum',
      category: 'dexes',
      tags: ['amm', 'dex'],
      chains: ['evm']
    },
    {
      id: 'sushiswap',
      title: 'SushiSwap',
      url: 'https://app.sushi.com',
      description: 'Multi-chain DEX with various DeFi products',
      category: 'dexes',
      tags: ['amm', 'dex'],
      chains: ['evm']
    },
    {
      id: 'curve',
      title: 'Curve Finance',
      url: 'https://curve.fi',
      description: 'Specialized DEX for stablecoin trading',
      category: 'dexes',
      tags: ['stableswap', 'dex'],
      chains: ['evm']
    },
    
    // Network Sites
    {
      id: 'ethereum',
      title: 'Ethereum.org',
      url: 'https://ethereum.org',
      description: 'Official website for the Ethereum blockchain',
      category: 'networks',
      tags: ['layer1'],
      chains: ['evm']
    },
    {
      id: 'arbitrum',
      title: 'Arbitrum',
      url: 'https://arbitrum.io',
      description: 'Layer 2 scaling solution for Ethereum',
      category: 'networks',
      tags: ['layer2'],
      chains: ['evm']
    },
    {
      id: 'optimism',
      title: 'Optimism',
      url: 'https://optimism.io',
      description: 'Layer 2 optimistic rollup for Ethereum',
      category: 'networks',
      tags: ['layer2'],
      chains: ['evm']
    },
    {
      id: 'polygon',
      title: 'Polygon',
      url: 'https://polygon.technology',
      description: 'Ethereum scaling platform with multiple solutions',
      category: 'networks',
      tags: ['layer2', 'sidechain'],
      chains: ['evm']
    },
    {
      id: 'bnbchain',
      title: 'BNB Chain',
      url: 'https://www.bnbchain.org',
      description: 'Binance\'s blockchain ecosystem for BNB and BSC',
      category: 'networks',
      tags: ['layer1'],
      chains: ['evm']
    },
    
    // Launchpads
    {
      id: 'pinksale',
      title: 'PinkSale',
      url: 'https://www.pinksale.finance',
      description: 'Multi-chain launchpad and token creation platform',
      category: 'launchpads',
      tags: ['ido', 'presale'],
      chains: ['evm']
    },
    {
      id: 'dxsale',
      title: 'DxSale',
      url: 'https://dxsale.app',
      description: 'Decentralized launchpad for token launches',
      category: 'launchpads',
      tags: ['ido', 'presale'],
      chains: ['evm']
    },
    
    // Tools
    {
      id: 'etherscan',
      title: 'Etherscan',
      url: 'https://etherscan.io',
      description: 'Ethereum blockchain explorer and analytics platform',
      category: 'tools',
      tags: ['explorer'],
      chains: ['evm']
    },
    {
      id: 'hardhat',
      title: 'Hardhat',
      url: 'https://hardhat.org',
      description: 'Development environment for Ethereum software',
      category: 'tools',
      tags: ['development', 'testing'],
      chains: ['evm']
    },
    {
      id: 'foundry',
      title: 'Foundry',
      url: 'https://book.getfoundry.sh',
      description: 'Fast and flexible Ethereum development toolkit',
      category: 'tools',
      tags: ['development', 'testing'],
      chains: ['evm']
    },
    {
      id: 'tenderly',
      title: 'Tenderly',
      url: 'https://tenderly.co',
      description: 'Ethereum debugging, monitoring, and simulation platform',
      category: 'tools',
      tags: ['development', 'debugging'],
      chains: ['evm']
    }
  ];

  // Define verified links for Solana
  const solanaLinks: VerifiedLink[] = [
    // Wallets
    {
      id: 'phantom',
      title: 'Phantom',
      url: 'https://phantom.app',
      description: 'Popular wallet for Solana and SPL tokens',
      category: 'wallets',
      tags: ['browser extension', 'mobile'],
      chains: ['solana']
    },
    {
      id: 'solflare',
      title: 'Solflare',
      url: 'https://solflare.com',
      description: 'Feature-rich wallet for Solana ecosystem',
      category: 'wallets',
      tags: ['browser extension', 'mobile'],
      chains: ['solana']
    },
    
    // DEXes
    {
      id: 'raydium',
      title: 'Raydium',
      url: 'https://raydium.io',
      description: 'Automated market maker and liquidity provider on Solana',
      category: 'dexes',
      tags: ['amm', 'dex'],
      chains: ['solana']
    },
    {
      id: 'orca',
      title: 'Orca',
      url: 'https://orca.so',
      description: 'User-friendly DEX on Solana',
      category: 'dexes',
      tags: ['amm', 'dex'],
      chains: ['solana']
    },
    {
      id: 'jupiter',
      title: 'Jupiter',
      url: 'https://jup.ag',
      description: 'Solana\'s liquidity aggregator',
      category: 'dexes',
      tags: ['aggregator'],
      chains: ['solana']
    },
    
    // Network Sites
    {
      id: 'solana',
      title: 'Solana.com',
      url: 'https://solana.com',
      description: 'Official website for the Solana blockchain',
      category: 'networks',
      tags: ['layer1'],
      chains: ['solana']
    },
    {
      id: 'solanaexplorer',
      title: 'Solana Explorer',
      url: 'https://explorer.solana.com',
      description: 'Official block explorer for the Solana network',
      category: 'tools',
      tags: ['explorer'],
      chains: ['solana']
    },
    
    // Launchpads
    {
      id: 'solanium',
      title: 'Solanium',
      url: 'https://solanium.io',
      description: 'Launchpad and DEX on Solana',
      category: 'launchpads',
      tags: ['ido', 'presale'],
      chains: ['solana']
    },
    
    // Tools
    {
      id: 'anchor',
      title: 'Anchor',
      url: 'https://anchor-lang.com',
      description: 'Framework for Solana program development',
      category: 'tools',
      tags: ['development'],
      chains: ['solana']
    },
    {
      id: 'solscan',
      title: 'Solscan',
      url: 'https://solscan.io',
      description: 'Solana blockchain explorer with analytics',
      category: 'tools',
      tags: ['explorer'],
      chains: ['solana']
    }
  ];

  // Combine all links
  const allLinks = [...evmLinks, ...solanaLinks];

  // Filter links based on search, category, and chain
  const filteredLinks = allLinks.filter(link => {
    const matchesSearch = 
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.url.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || link.category === selectedCategory;
    const matchesChain = selectedChain === 'all' || link.chains.includes(selectedChain);
    
    return matchesSearch && matchesCategory && matchesChain;
  });

  return (
    <>
      <Head>
        <title>Verified Links | Open Crypto Foundation</title>
        <meta name="description" content="Directory of verified official links to major wallets, exchanges, DeFi platforms, and blockchain tools to help you avoid scams." />
      </Head>

      <main className="min-h-screen bg-dark">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Verified Blockchain Links</h1>
              <p className="text-xl text-light-muted mb-8">
                A comprehensive directory of official links to wallets, exchanges, DeFi platforms, and blockchain tools to help you avoid scams.
              </p>
              <div className="flex items-center justify-center">
                <FaShieldAlt className="text-primary mr-2" size={24} />
                <span className="text-light">Always bookmark these official links to avoid phishing scams</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-dark-card border-y border-dark-light/30">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <div className="w-full md:flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search by name or description..."
                    className="w-full px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                
                {/* Chain Filter */}
                <div className="w-full md:w-auto">
                  <select
                    className="w-full md:w-48 px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    value={selectedChain}
                    onChange={(e) => setSelectedChain(e.target.value)}
                  >
                    {chains.map(chain => (
                      <option key={chain.id} value={chain.id}>
                        {chain.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Category Filter */}
                <div className="w-full md:w-auto">
                  <select
                    className="w-full md:w-48 px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Results counter */}
              <div className="mt-4 text-light-muted text-sm">
                Showing {filteredLinks.length} of {allLinks.length} verified links
              </div>
            </div>
          </div>
        </section>

        {/* Links Grid */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              {selectedCategory !== 'all' && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {categories.find(cat => cat.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-light-muted">
                    {categories.find(cat => cat.id === selectedCategory)?.description}
                  </p>
                </div>
              )}

              {filteredLinks.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLinks.map(link => (
                    <div key={link.id} className="bg-dark-card border border-dark-light/30 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{link.title}</h3>
                          <div className="bg-green-900/30 text-green-400 rounded-full px-2 py-1 text-xs flex items-center">
                            <FaCheck size={12} className="mr-1" />
                            <span>Verified</span>
                          </div>
                        </div>
                        
                        <p className="text-light-muted mb-4">{link.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {link.chains.map(chain => (
                            <span key={chain} className="bg-blue-900/30 text-blue-400 rounded-full px-2 py-1 text-xs">
                              {chain === 'evm' ? 'EVM' : 'Solana'}
                            </span>
                          ))}
                          
                          {link.tags.map(tag => (
                            <span key={tag} className="bg-gray-800 text-gray-400 rounded-full px-2 py-1 text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
                        >
                          <span>{link.url.replace('https://', '')}</span>
                          <FaExternalLinkAlt size={12} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-light-muted">No verified links found matching your criteria.</p>
                  <button
                    className="mt-4 px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-md transition-colors"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedChain('all');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section className="py-12 bg-dark-light/30">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto bg-dark-card border border-red-900/30 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-red-900/30 p-3 rounded-lg mr-4">
                  <FaExclamationTriangle className="text-red-500" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Stay Safe from Scams</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-light-muted">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Always double-check URLs before connecting your wallet or entering personal information.</span>
                    </li>
                    <li className="flex items-start text-light-muted">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Be wary of sites promising unusually high returns or "doubling" your crypto.</span>
                    </li>
                    <li className="flex items-start text-light-muted">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Legitimate sites will never ask for your seed phrase or private keys.</span>
                    </li>
                    <li className="flex items-start text-light-muted">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Consider using browser bookmarks for frequently visited crypto sites.</span>
                    </li>
                    <li className="flex items-start text-light-muted">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Check our <Link href="/scam-database" className="text-primary hover:underline">Scam Database</Link> to verify if a site has been reported as fraudulent.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSubscribe />
      </main>

      <ScrollToTop />
    </>
  );
} 