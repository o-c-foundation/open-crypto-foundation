import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaEthereum, FaFilter, FaSearch, FaCode, FaTools, FaRobot, FaServer, FaShieldAlt, FaWallet } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

export default function BlockchainRepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChain, setSelectedChain] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Categories
  const categories = [
    { id: 'all', name: 'All Categories', icon: <FaFilter /> },
    { id: 'frameworks', name: 'Frameworks & SDKs', icon: <FaCode /> },
    { id: 'tools', name: 'Developer Tools', icon: <FaTools /> },
    { id: 'bots', name: 'Bots & Automation', icon: <FaRobot /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <FaServer /> },
    { id: 'security', name: 'Security Tools', icon: <FaShieldAlt /> },
    { id: 'wallets', name: 'Wallets & Services', icon: <FaWallet /> },
  ];

  // Chains
  const chains = [
    { id: 'all', name: 'All Chains', icon: <FaFilter /> },
    { id: 'evm', name: 'EVM Compatible', icon: <FaEthereum /> },
    { id: 'solana', name: 'Solana', icon: <SiSolana /> },
  ];

  // EVM Repositories
  const evmRepositories = [
    // Frameworks & SDKs
    {
      title: "Hardhat",
      description: "Ethereum development environment for professionals",
      url: "https://github.com/NomicFoundation/hardhat",
      category: "frameworks",
      chain: "evm",
      stars: "5.5k+",
      tags: ["Development Environment", "Testing", "Deployment"]
    },
    {
      title: "Foundry",
      description: "Blazing fast, portable and modular toolkit for Ethereum application development",
      url: "https://github.com/foundry-rs/foundry",
      category: "frameworks",
      chain: "evm",
      stars: "6.8k+",
      tags: ["Rust", "Testing", "Deployment", "Fast"]
    },
    {
      title: "Truffle Suite",
      description: "Development environment, testing framework and asset pipeline for blockchains using the EVM",
      url: "https://github.com/trufflesuite/truffle",
      category: "frameworks",
      chain: "evm",
      stars: "14k+",
      tags: ["Testing", "Development Environment"]
    },
    {
      title: "ethers.js",
      description: "Complete, compact and simple library for Ethereum",
      url: "https://github.com/ethers-io/ethers.js",
      category: "frameworks",
      chain: "evm",
      stars: "7k+",
      tags: ["JavaScript", "Library", "Client"]
    },
    {
      title: "web3.js",
      description: "Ethereum JavaScript API",
      url: "https://github.com/web3/web3.js",
      category: "frameworks",
      chain: "evm",
      stars: "17.7k+",
      tags: ["JavaScript", "Library", "Client"]
    },
    {
      title: "wagmi",
      description: "React Hooks for Ethereum",
      url: "https://github.com/wagmi-dev/wagmi",
      category: "frameworks",
      chain: "evm",
      stars: "5.2k+",
      tags: ["React", "Hooks", "Frontend"]
    },
    {
      title: "viem",
      description: "TypeScript Interface for Ethereum",
      url: "https://github.com/wagmi-dev/viem",
      category: "frameworks",
      chain: "evm",
      stars: "5k+",
      tags: ["TypeScript", "Client", "Modern"]
    },
    
    // Developer Tools
    {
      title: "Remix IDE",
      description: "Browser-based IDE for Ethereum smart contracts",
      url: "https://github.com/ethereum/remix-project",
      category: "tools",
      chain: "evm",
      stars: "2k+",
      tags: ["IDE", "Browser", "Development"]
    },
    {
      title: "Ganache",
      description: "Personal blockchain for Ethereum development",
      url: "https://github.com/trufflesuite/ganache",
      category: "tools",
      chain: "evm",
      stars: "4.1k+",
      tags: ["Local Blockchain", "Development"]
    },
    {
      title: "solc-js",
      description: "JavaScript bindings for the Solidity compiler",
      url: "https://github.com/ethereum/solc-js",
      category: "tools",
      chain: "evm",
      stars: "1.1k+",
      tags: ["Compiler", "Solidity"]
    },
    {
      title: "Tenderly",
      description: "Ethereum developer platform for debugging, monitoring and alerting",
      url: "https://github.com/Tenderly/tenderly-cli",
      category: "tools",
      chain: "evm",
      stars: "400+",
      tags: ["Debugging", "Monitoring", "CLI"]
    },
    {
      title: "Slither",
      description: "Solidity static analysis framework",
      url: "https://github.com/crytic/slither",
      category: "security",
      chain: "evm",
      stars: "4.1k+",
      tags: ["Security", "Static Analysis", "Auditing"]
    },
    {
      title: "Manticore",
      description: "Symbolic execution tool for analysis of binaries and smart contracts",
      url: "https://github.com/trailofbits/manticore",
      category: "security",
      chain: "evm",
      stars: "3.7k+",
      tags: ["Security", "Symbolic Execution", "Auditing"]
    },
    {
      title: "MythX",
      description: "Security verification platform for Ethereum smart contracts",
      url: "https://github.com/ConsenSys/mythx-cli",
      category: "security",
      chain: "evm",
      stars: "200+",
      tags: ["Security", "CLI", "Auditing"]
    },
    
    // Bots & Automation
    {
      title: "OpenZeppelin Defender",
      description: "Security operations for Ethereum",
      url: "https://github.com/OpenZeppelin/defender",
      category: "bots",
      chain: "evm",
      stars: "500+",
      tags: ["Security", "Automation", "Monitoring"]
    },
    {
      title: "Flashbots",
      description: "Research and development organization focused on mitigating the negative externalities of MEV",
      url: "https://github.com/flashbots/mev-boost",
      category: "bots",
      chain: "evm",
      stars: "600+",
      tags: ["MEV", "Block Building", "Ethereum"]
    },
    {
      title: "Chainlink Keepers",
      description: "Decentralized and secure smart contract automation",
      url: "https://github.com/smartcontractkit/chainlink",
      category: "bots",
      chain: "evm",
      stars: "5k+",
      tags: ["Automation", "Oracles", "Jobs"]
    },
    {
      title: "Gelato Network",
      description: "Automated smart contract executions on Ethereum",
      url: "https://github.com/gelatodigital/gelato-network",
      category: "bots",
      chain: "evm", 
      stars: "300+",
      tags: ["Automation", "Task Execution"]
    },
    
    // Infrastructure
    {
      title: "Go Ethereum (Geth)",
      description: "Official Go implementation of the Ethereum protocol",
      url: "https://github.com/ethereum/go-ethereum",
      category: "infrastructure",
      chain: "evm",
      stars: "43k+",
      tags: ["Node", "Client", "Implementation"]
    },
    {
      title: "Erigon",
      description: "Implementation of Ethereum (EVM-compatible blockchains) focused on efficiency",
      url: "https://github.com/ledgerwatch/erigon",
      category: "infrastructure",
      chain: "evm",
      stars: "2.5k+",
      tags: ["Node", "Client", "Optimized"]
    },
    {
      title: "Infura",
      description: "Scalable blockchain infrastructure",
      url: "https://github.com/INFURA/infura",
      category: "infrastructure",
      chain: "evm",
      stars: "300+",
      tags: ["API", "Node Service", "Infrastructure"]
    },
    {
      title: "Alchemy SDK",
      description: "The Alchemy SDK is the most developer-friendly way to interact with Ethereum",
      url: "https://github.com/alchemyplatform/alchemy-sdk-js",
      category: "infrastructure",
      chain: "evm",
      stars: "700+",
      tags: ["SDK", "API", "Infrastructure"]
    },
    {
      title: "The Graph",
      description: "Indexing protocol for querying networks like Ethereum with GraphQL",
      url: "https://github.com/graphprotocol/graph-node",
      category: "infrastructure",
      chain: "evm",
      stars: "3.6k+",
      tags: ["Indexing", "GraphQL", "Data"]
    },
    
    // Wallets & Services
    {
      title: "MetaMask",
      description: "Browser extension for accessing Ethereum enabled distributed applications",
      url: "https://github.com/MetaMask/metamask-extension",
      category: "wallets",
      chain: "evm",
      stars: "11k+",
      tags: ["Wallet", "Browser Extension", "DApp"]
    },
    {
      title: "WalletConnect",
      description: "Open protocol for connecting wallets to Dapps",
      url: "https://github.com/WalletConnect/walletconnect-monorepo",
      category: "wallets",
      chain: "evm",
      stars: "2.9k+",
      tags: ["Protocol", "Connection", "Wallets"]
    },
    {
      title: "ethers.js",
      description: "Complete, compact library for interacting with the Ethereum Blockchain",
      url: "https://github.com/ethers-io/ethers.js",
      category: "wallets",
      chain: "evm",
      stars: "7k+",
      tags: ["Library", "Wallets", "Signing"]
    }
  ];

  // Solana Repositories
  const solanaRepositories = [
    // Frameworks & SDKs
    {
      title: "Solana Web3.js",
      description: "Solana JavaScript API",
      url: "https://github.com/solana-labs/solana-web3.js",
      category: "frameworks",
      chain: "solana",
      stars: "2.1k+",
      tags: ["JavaScript", "API", "Client"]
    },
    {
      title: "Anchor",
      description: "Framework for Solana's Sealevel runtime",
      url: "https://github.com/coral-xyz/anchor",
      category: "frameworks",
      chain: "solana",
      stars: "3.2k+",
      tags: ["Framework", "Rust", "Development"]
    },
    {
      title: "Seahorse",
      description: "Python framework for Solana smart contracts",
      url: "https://github.com/ameliatastic/seahorse-lang",
      category: "frameworks",
      chain: "solana",
      stars: "400+",
      tags: ["Python", "Smart Contracts", "Language"]
    },
    {
      title: "Solana Program Library",
      description: "Collection of Solana programs maintained by Solana Labs",
      url: "https://github.com/solana-labs/solana-program-library",
      category: "frameworks",
      chain: "solana",
      stars: "2.4k+",
      tags: ["Programs", "Libraries", "Examples"]
    },
    
    // Developer Tools
    {
      title: "Solana Playground",
      description: "In-browser IDE for building Solana programs",
      url: "https://github.com/solana-playground/solana-playground",
      category: "tools",
      chain: "solana",
      stars: "600+",
      tags: ["IDE", "Browser", "Development"]
    },
    {
      title: "Solana Test Validator",
      description: "Local Solana cluster for development and testing",
      url: "https://github.com/solana-labs/solana",
      category: "tools",
      chain: "solana",
      stars: "11.5k+",
      tags: ["Testing", "Validator", "Local Development"]
    },
    {
      title: "Soldeer",
      description: "Package manager for the Solana blockchain",
      url: "https://github.com/Ellipsis-Labs/soldeer",
      category: "tools",
      chain: "solana",
      stars: "150+",
      tags: ["Package Manager", "Dependencies"]
    },
    {
      title: "SPL Token Faucet",
      description: "A faucet for SPL tokens for testing",
      url: "https://github.com/solana-labs/solana-program-library/tree/master/token-faucet",
      category: "tools",
      chain: "solana",
      stars: "2.4k+",
      tags: ["Tokens", "Testing", "Faucet"]
    },
    
    // Security
    {
      title: "Soteria",
      description: "Security scanner for Solana smart contracts",
      url: "https://github.com/crytic/solana-security-framework",
      category: "security",
      chain: "solana",
      stars: "100+",
      tags: ["Security", "Auditing", "Analysis"]
    },
    {
      title: "Neodyme",
      description: "Security tools for Solana",
      url: "https://github.com/neodyme-labs/solana-security-txt",
      category: "security",
      chain: "solana",
      stars: "70+",
      tags: ["Security", "Standards", "Documentation"]
    },
    
    // Bots & Automation
    {
      title: "Clockwork",
      description: "Automation infrastructure for Solana",
      url: "https://github.com/clockwork-xyz/clockwork",
      category: "bots",
      chain: "solana",
      stars: "600+",
      tags: ["Automation", "Scheduling", "Infrastructure"]
    },
    {
      title: "Jito MEV",
      description: "MEV infrastructure for Solana",
      url: "https://github.com/jito-foundation/jito-solana",
      category: "bots",
      chain: "solana",
      stars: "300+",
      tags: ["MEV", "Block Building", "Validators"]
    },
    
    // Infrastructure
    {
      title: "Solana Core",
      description: "Web-Scale Blockchain for fast, secure, scalable, decentralized apps and marketplaces",
      url: "https://github.com/solana-labs/solana",
      category: "infrastructure",
      chain: "solana",
      stars: "11.5k+",
      tags: ["Node", "Validator", "Core"]
    },
    {
      title: "GenesysGo Shadow",
      description: "Solana RPC infrastructure",
      url: "https://github.com/genesysgo/shadow-drive",
      category: "infrastructure",
      chain: "solana",
      stars: "300+",
      tags: ["Storage", "Infrastructure", "RPC"]
    },
    {
      title: "Helius",
      description: "Solana API and infrastructure",
      url: "https://github.com/helius-labs/xray",
      category: "infrastructure",
      chain: "solana",
      stars: "100+",
      tags: ["API", "Infrastructure", "Data"]
    },
    
    // Wallets & Services
    {
      title: "Solana Wallet Adapter",
      description: "Modular TypeScript wallet adapters for Solana applications",
      url: "https://github.com/solana-labs/wallet-adapter",
      category: "wallets",
      chain: "solana",
      stars: "800+",
      tags: ["Wallets", "Adapters", "Integration"]
    },
    {
      title: "Solflare",
      description: "Solana wallet with hardware wallet support",
      url: "https://github.com/solflare-wallet",
      category: "wallets",
      chain: "solana",
      stars: "200+",
      tags: ["Wallet", "Hardware", "Extension"]
    },
    {
      title: "Phantom",
      description: "Friendly Solana wallet built for DeFi & NFTs",
      url: "https://github.com/phantom",
      category: "wallets",
      chain: "solana",
      stars: "300+",
      tags: ["Wallet", "Extension", "Mobile"]
    }
  ];

  // Combine repositories
  const allRepositories = [...evmRepositories, ...solanaRepositories];
  
  // Filter repositories based on search, chain, and category
  const filteredRepositories = allRepositories.filter(repo => {
    const matchesSearch = repo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          repo.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChain = selectedChain === 'all' || repo.chain === selectedChain;
    const matchesCategory = selectedCategory === 'all' || repo.category === selectedCategory;
    
    return matchesSearch && matchesChain && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Blockchain Developer Repositories | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Comprehensive directory of essential EVM and Solana repositories, including developer tools, frameworks, bots, and security tools." 
        />
      </Head>

      <ScrollToTop />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Blockchain Developer Repositories
            </h1>
            <p className="mb-8 text-xl text-gray-300 leading-relaxed">
              A comprehensive directory of essential repositories for EVM and Solana blockchain development, 
              including frameworks, tools, security utilities, bots, and infrastructure components.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-gray-900 border-b border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {/* Search */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search repositories..."
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              {/* Chain Filter */}
              <div className="flex-shrink-0">
                <select
                  className="w-full md:w-48 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
              <div className="flex-shrink-0">
                <select
                  className="w-full md:w-48 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
            <div className="mt-4 text-gray-400 text-sm">
              Showing {filteredRepositories.length} of {allRepositories.length} repositories
            </div>
          </div>
        </div>
      </section>

      {/* Repositories Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepositories.length > 0 ? (
                filteredRepositories.map((repo, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          repo.chain === 'evm' ? 'bg-blue-900/30 text-blue-400' : 'bg-purple-900/30 text-purple-400'
                        }`}>
                          {repo.chain === 'evm' ? 'EVM' : 'Solana'}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center">
                          <FaGithub className="mr-1" /> {repo.stars}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{repo.title}</h3>
                      <p className="text-gray-300 mb-4">{repo.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-700 px-2 py-1 rounded-md text-xs text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        <FaGithub className="mr-2" />
                        View Repository
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-400 mb-4">No repositories found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedChain('all');
                      setSelectedCategory('all');
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* EVM Resources */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FaEthereum className="mr-2 text-blue-400" /> EVM Development Resources
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://ethereum.org/developers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Ethereum Developer Portal
                    </a>
                    <p className="text-gray-300 mt-1">Official Ethereum resources for developers</p>
                  </li>
                  <li>
                    <a 
                      href="https://docs.openzeppelin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      OpenZeppelin Documentation
                    </a>
                    <p className="text-gray-300 mt-1">Secure smart contract libraries and standards</p>
                  </li>
                  <li>
                    <a 
                      href="https://consensys.github.io/smart-contract-best-practices/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Smart Contract Best Practices
                    </a>
                    <p className="text-gray-300 mt-1">Security considerations for Ethereum smart contracts</p>
                  </li>
                  <li>
                    <a 
                      href="https://www.evm.codes/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      EVM Codes
                    </a>
                    <p className="text-gray-300 mt-1">Interactive reference of EVM opcodes</p>
                  </li>
                </ul>
              </div>
              
              {/* Solana Resources */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <SiSolana className="mr-2 text-purple-400" /> Solana Development Resources
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://solana.com/developers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Solana Developer Portal
                    </a>
                    <p className="text-gray-300 mt-1">Official Solana resources for developers</p>
                  </li>
                  <li>
                    <a 
                      href="https://solanacookbook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Solana Cookbook
                    </a>
                    <p className="text-gray-300 mt-1">Reference guide for building on Solana</p>
                  </li>
                  <li>
                    <a 
                      href="https://book.anchor-lang.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Anchor Framework Documentation
                    </a>
                    <p className="text-gray-300 mt-1">Solana's popular development framework</p>
                  </li>
                  <li>
                    <a 
                      href="https://soldev.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      SolDev
                    </a>
                    <p className="text-gray-300 mt-1">Community-driven Solana development tutorials</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto">
            <NewsletterSubscribe />
          </div>
        </div>
      </section>
    </>
  );
} 