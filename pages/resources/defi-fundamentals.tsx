import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  FaBitcoin, 
  FaEthereum, 
  FaLayerGroup, 
  FaHistory, 
  FaCodeBranch, 
  FaExchangeAlt,
  FaInfoCircle,
  FaChartLine,
  FaCoins,
  FaExclamationTriangle,
  FaCheckCircle,
  FaBuilding,
  FaWater,
  FaExchangeAlt as FaExchange,
  FaChartLine as FaChart,
  FaBalanceScale,
  FaRocket,
  FaStore,
  FaChartArea,
  FaShieldAlt
} from 'react-icons/fa'
import TabLayout from '../../components/TabLayout'

export default function DeFiFundamentals() {
  const [activeTab, setActiveTab] = useState('crypto-basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'crypto-basics', name: 'Crypto Fundamentals', icon: <FaBitcoin className="text-primary" /> },
    { id: 'defi-intro', name: 'DeFi Introduction', icon: <FaExchangeAlt className="text-primary" /> },
    { id: 'token-ecosystem', name: 'Token Ecosystem', icon: <FaCoins className="text-primary" /> },
    { id: 'dexs-liquidity', name: 'DEXs & Liquidity', icon: <FaWater className="text-primary" /> },
    { id: 'token-launches', name: 'Token Launches & Markets', icon: <FaRocket className="text-primary" /> }
  ]

  // Top 10 blockchains by market cap (as of creation date)
  const topBlockchains = [
    {
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency that introduced blockchain technology to the world.",
      type: "Layer 1",
      marketCap: "$1.2 trillion",
      consensus: "Proof of Work",
      features: ["Store of Value", "Peer-to-peer Transactions", "Limited Smart Contract Functionality (via Taproot)"]
    },
    {
      name: "Ethereum (ETH)",
      description: "The leading smart contract platform that enables decentralized applications and DeFi.",
      type: "Layer 1",
      marketCap: "$368 billion",
      consensus: "Proof of Stake",
      features: ["Smart Contracts", "dApps", "ERC-20 Tokens", "NFTs"]
    },
    {
      name: "Binance Coin (BNB)",
      description: "Native token of Binance Exchange and the BNB Chain ecosystem.",
      type: "Layer 1",
      marketCap: "$65 billion",
      consensus: "Proof of Staked Authority",
      features: ["EVM Compatible", "High Throughput", "Low Gas Fees"]
    },
    {
      name: "Solana (SOL)",
      description: "High-performance blockchain focused on speed and low transaction costs.",
      type: "Layer 1",
      marketCap: "$52 billion",
      consensus: "Proof of History + Proof of Stake",
      features: ["High TPS", "Low Fees", "Parallel Processing"]
    },
    {
      name: "XRP",
      description: "Digital asset built for payments that enables real-time global transfers.",
      type: "Layer 1",
      marketCap: "$34 billion",
      consensus: "XRP Ledger Consensus Protocol",
      features: ["Fast Settlements", "Low Cost", "Cross-border Payments"]
    },
    {
      name: "Cardano (ADA)",
      description: "Research-driven blockchain platform built using peer-reviewed academic research.",
      type: "Layer 1",
      marketCap: "$15 billion",
      consensus: "Ouroboros Proof of Stake",
      features: ["Scientific Approach", "Multi-layer Architecture", "Smart Contracts"]
    },
    {
      name: "Avalanche (AVAX)",
      description: "Platform for launching decentralized applications with high throughput.",
      type: "Layer 1",
      marketCap: "$11 billion",
      consensus: "Avalanche Consensus",
      features: ["Sub-second Finality", "Subnet Architecture", "EVM Compatible"]
    },
    {
      name: "Polkadot (DOT)",
      description: "Multi-chain network that enables different blockchains to transfer messages and value.",
      type: "Layer 0",
      marketCap: "$9 billion",
      consensus: "Nominated Proof of Stake",
      features: ["Interoperability", "Parachains", "Shared Security"]
    },
    {
      name: "Polygon (MATIC)",
      description: "Ethereum scaling platform that enables fast, low-cost transactions.",
      type: "Layer 2",
      marketCap: "$8 billion",
      consensus: "Proof of Stake",
      features: ["Ethereum Scaling", "Multiple Solutions", "Low Gas Fees"]
    },
    {
      name: "Tron (TRX)",
      description: "Blockchain platform focused on content sharing and entertainment applications.",
      type: "Layer 1",
      marketCap: "$8 billion",
      consensus: "Delegated Proof of Stake",
      features: ["High Throughput", "Content Distribution", "dApp Ecosystem"]
    }
  ]

  // Timeline of DeFi history
  const defiTimeline = [
    {
      year: 2009,
      title: "Bitcoin Genesis",
      description: "Bitcoin launched as the first cryptocurrency, introducing the core concept of decentralized, peer-to-peer value transfer without intermediaries."
    },
    {
      year: 2013,
      title: "Colored Coins & Early Financial Primitives",
      description: "Early experiments on the Bitcoin blockchain to represent and transfer assets beyond just BTC, laying conceptual groundwork for tokenization."
    },
    {
      year: 2015,
      title: "Ethereum Launch",
      description: "Ethereum went live, introducing programmable smart contracts that made complex financial applications possible on blockchain."
    },
    {
      year: 2017,
      title: "ICO Boom and First DEXs",
      description: "The ICO boom created thousands of ERC-20 tokens, while early decentralized exchanges like EtherDelta emerged to trade them without centralized intermediaries."
    },
    {
      year: 2018,
      title: "Stablecoins Gain Traction",
      description: "MakerDAO launched DAI, the first decentralized stablecoin. USDC and other stablecoins appeared, providing critical infrastructure for DeFi."
    },
    {
      year: 2019,
      title: "DeFi Summer Precursors",
      description: "Compound, Aave, and other lending protocols launched. Uniswap introduced automated market makers (AMMs), revolutionizing decentralized trading."
    },
    {
      year: 2020,
      title: "DeFi Summer",
      description: "Compound launched COMP token and kickstarted 'yield farming,' leading to the DeFi boom known as 'DeFi Summer' with TVL growing from $1B to $15B."
    },
    {
      year: 2021,
      title: "Mainstream Attention and Multi-chain DeFi",
      description: "DeFi expanded beyond Ethereum to Binance Smart Chain, Solana, and other chains. Total value locked in DeFi protocols exceeded $100 billion."
    },
    {
      year: 2022,
      title: "DeFi Challenges and Regulation",
      description: "Market downturns and several high-profile protocol failures highlighted risks. Regulatory attention increased significantly."
    },
    {
      year: 2023,
      title: "Recovery and Maturation",
      description: "DeFi began recovering with improved security practices, more institutional adoption, and a focus on sustainable yield generation over speculative farming."
    },
    {
      year: 2024,
      title: "Institutional DeFi and RWAs",
      description: "Major growth in tokenized real-world assets (RWAs) and institutional DeFi solutions, with traditional finance increasingly integrating with DeFi infrastructure."
    }
  ]

  // Token types data
  const tokenTypes = [
    {
      type: "Utility Tokens",
      description: "Tokens that provide access to a project's product or service.",
      examples: ["Basic Attention Token (BAT)", "Filecoin (FIL)", "Chainlink (LINK)"],
      features: ["Grant access rights", "Pay for specific services", "Often native to specific platforms"]
    },
    {
      type: "Security Tokens",
      description: "Tokens that represent ownership in an external asset or enterprise.",
      examples: ["Tokenized stocks", "Real estate tokens", "Revenue-sharing tokens"],
      features: ["Subject to securities regulations", "Represent ownership rights", "May provide dividends"]
    },
    {
      type: "Governance Tokens",
      description: "Tokens that grant voting rights in decentralized protocol decisions.",
      examples: ["Uniswap (UNI)", "Aave (AAVE)", "Compound (COMP)"],
      features: ["Voting on protocol changes", "Proposal submission rights", "Treasury management"]
    },
    {
      type: "Non-Fungible Tokens (NFTs)",
      description: "Unique tokens representing ownership of distinct digital or physical assets.",
      examples: ["Digital art", "Virtual real estate", "Collectibles"],
      features: ["Uniqueness", "Indivisibility", "Provable scarcity"]
    },
    {
      type: "Stablecoins",
      description: "Tokens designed to maintain a stable value, typically pegged to a fiat currency.",
      examples: ["USDC", "DAI", "USDT"],
      features: ["Price stability", "Reduced volatility", "Bridge between crypto and fiat"]
    },
    {
      type: "Liquidity Provider (LP) Tokens",
      description: "Tokens representing deposit of assets into a liquidity pool on DEXs.",
      examples: ["Uniswap LP tokens", "PancakeSwap LP tokens"],
      features: ["Represent pool share", "Earn trading fees", "Can be staked for additional rewards"]
    },
    {
      type: "Wrapped Tokens",
      description: "Tokens representing another cryptocurrency on a different blockchain.",
      examples: ["Wrapped Bitcoin (WBTC)", "Wrapped ETH (WETH)"],
      features: ["Cross-chain compatibility", "Represent 1:1 value of underlying asset", "Enhanced functionality"]
    },
    {
      type: "Meme Tokens",
      description: "Tokens created primarily as jokes or based on internet memes with limited utility.",
      examples: ["Dogecoin (DOGE)", "Shiba Inu (SHIB)"],
      features: ["Often community-driven", "Highly volatile", "Limited practical utility"]
    }
  ]

  // Leading token ecosystems data
  const tokenEcosystems = [
    {
      chain: "Ethereum",
      standard: "ERC-20, ERC-721, ERC-1155",
      tokensCount: "500,000+",
      marketShare: "~70% of all tokens",
      notableTokens: ["USDC", "USDT", "LINK", "UNI", "Most major DeFi tokens"],
      strengths: ["First-mover advantage", "Largest developer ecosystem", "Highest security", "Most established standards"],
      image: "/images/ethereum.svg"
    },
    {
      chain: "BNB Chain",
      standard: "BEP-20, BEP-721, BEP-1155",
      tokensCount: "100,000+",
      marketShare: "~10% of all tokens",
      notableTokens: ["CAKE", "BAKE", "BURGER", "Many memecoins and gaming tokens"],
      strengths: ["Low fees", "Fast transactions", "Binance exchange integration", "Easier token creation"],
      image: "/images/bnb.svg"
    },
    {
      chain: "Solana",
      standard: "SPL Token Standard",
      tokensCount: "20,000+",
      marketShare: "~6% of all tokens",
      notableTokens: ["Serum (SRM)", "Raydium (RAY)", "Star Atlas (ATLAS)"],
      strengths: ["Ultra-fast transactions", "Low fees", "Growing ecosystem", "Strong for NFTs and gaming"],
      image: "/images/solana.svg"
    },
    {
      chain: "Polygon",
      standard: "ERC-20, ERC-721, ERC-1155 (compatible)",
      tokensCount: "30,000+",
      marketShare: "~5% of all tokens",
      notableTokens: ["AAVE (Polygon)", "QUICK", "Wrapped tokens from Ethereum"],
      strengths: ["Ethereum compatibility", "Low fees", "Fast transactions", "Growing L2 ecosystem"],
      image: "/images/polygon.svg"
    }
  ]

  return (
    <>
      <Head>
        <title>DeFi Fundamentals | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Learn the core concepts of DeFi including crypto fundamentals, decentralized exchanges, token ecosystems, and market mechanics." 
        />
      </Head>

      <div className="py-12 md:py-20 bg-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              DeFi Fundamentals
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the building blocks of decentralized finance is essential for navigating the crypto ecosystem safely and effectively.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <TabLayout
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabPosition="side"
            >
              {/* Crypto Fundamentals Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'crypto-basics' ? 'block' : 'hidden'}`}>
                <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaBitcoin className="text-primary mr-3" />
                    Crypto Fundamentals
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Cryptocurrency represents a revolutionary approach to finance, built on blockchain technology that enables peer-to-peer transactions without centralized intermediaries.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-dark-light/10 p-6 rounded-lg border border-dark-light/20">
                        <h3 className="text-xl font-semibold text-white mb-4">Key Concepts</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong className="text-white">Blockchain:</strong> Distributed ledger technology that records all transactions across a network of computers</li>
                          <li><strong className="text-white">Decentralization:</strong> The distribution of power and control across a network rather than a single entity</li>
                          <li><strong className="text-white">Consensus Mechanisms:</strong> Methods for achieving agreement on the state of the blockchain (e.g., Proof of Work, Proof of Stake)</li>
                          <li><strong className="text-white">Public/Private Keys:</strong> Cryptographic keys that enable secure transactions and ownership verification</li>
                          <li><strong className="text-white">Smart Contracts:</strong> Self-executing code that automates agreements between parties</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-light/10 p-6 rounded-lg border border-dark-light/20">
                        <h3 className="text-xl font-semibold text-white mb-4">Blockchain Types</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-white mb-1">Layer 1</h4>
                            <p>Base blockchain protocols like Bitcoin, Ethereum, and Solana that validate and finalize transactions on their own blockchain.</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">Layer 2</h4>
                            <p>Scaling solutions built on top of Layer 1 blockchains to improve transaction speed and reduce costs.</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">Layer 0</h4>
                            <p>Underlying infrastructure that connects different blockchains and enables cross-chain communication.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">Leading Blockchain Ecosystems</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs uppercase bg-dark-light/20 text-gray-300">
                          <tr>
                            <th scope="col" className="px-4 py-3 rounded-l-lg">Blockchain</th>
                            <th scope="col" className="px-4 py-3">Type</th>
                            <th scope="col" className="px-4 py-3">Consensus</th>
                            <th scope="col" className="px-4 py-3">Market Cap</th>
                            <th scope="col" className="px-4 py-3 rounded-r-lg">Key Features</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topBlockchains.slice(0, 5).map((blockchain, i) => (
                            <tr key={i} className="border-b border-dark-light/10">
                              <th scope="row" className="px-4 py-3 font-medium text-white whitespace-nowrap">
                                {blockchain.name}
                              </th>
                              <td className="px-4 py-3">{blockchain.type}</td>
                              <td className="px-4 py-3">{blockchain.consensus}</td>
                              <td className="px-4 py-3">{blockchain.marketCap}</td>
                              <td className="px-4 py-3">
                                <ul className="list-disc pl-5">
                                  {blockchain.features.slice(0, 2).map((feature, j) => (
                                    <li key={j}>{feature}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg mt-8 border border-primary/30">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Risks to Understand</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Market Risks</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Extreme price volatility</li>
                            <li>Market manipulation</li>
                            <li>Liquidity risks</li>
                            <li>Regulatory uncertainty</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Technical Risks</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Smart contract vulnerabilities</li>
                            <li>Protocol exploits</li>
                            <li>Private key security</li>
                            <li>Network scalability limitations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DeFi Introduction Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'defi-intro' ? 'block' : 'hidden'}`}>
                <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaExchangeAlt className="text-primary mr-3" />
                    DeFi Introduction
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Decentralized Finance (DeFi) represents a paradigm shift from traditional financial systems toward open, permissionless, and transparent financial services built on blockchain technology.
                    </p>
                    
                    <div className="bg-dark-light/10 p-6 rounded-lg border border-dark-light/20">
                      <h3 className="text-xl font-semibold text-white mb-4">What Makes DeFi Different?</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Traditional Finance</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Centralized control</li>
                            <li>Limited access hours</li>
                            <li>KYC requirements</li>
                            <li>Permission-based</li>
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  FaBitcoin, 
  FaEthereum, 
  FaLayerGroup, 
  FaHistory, 
  FaCodeBranch, 
  FaExchangeAlt,
  FaInfoCircle,
  FaChartLine,
  FaCoins,
  FaExclamationTriangle,
  FaCheckCircle,
  FaBuilding,
  FaWater,
  FaExchangeAlt as FaExchange,
  FaChartLine as FaChart,
  FaBalanceScale,
  FaRocket,
  FaStore,
  FaChartArea,
  FaShieldAlt
} from 'react-icons/fa'
import TabLayout from '../../components/TabLayout'

export default function DeFiFundamentals() {
  const [activeTab, setActiveTab] = useState('crypto-basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'crypto-basics', name: 'Crypto Fundamentals', icon: <FaBitcoin className="text-yellow-400" /> },
    { id: 'defi-intro', name: 'DeFi Introduction', icon: <FaExchangeAlt className="text-blue-400" /> },
    { id: 'token-ecosystem', name: 'Token Ecosystem', icon: <FaCoins className="text-green-400" /> },
    { id: 'dexs-liquidity', name: 'DEXs & Liquidity', icon: <FaWater className="text-purple-400" /> },
    { id: 'token-launches', name: 'Token Launches & Markets', icon: <FaRocket className="text-pink-400" /> }
  ]

  // Top 10 blockchains by market cap (as of creation date)
  const topBlockchains = [
    {
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency that introduced blockchain technology to the world.",
      type: "Layer 1",
      marketCap: "$1.2 trillion",
      consensus: "Proof of Work",
      features: ["Store of Value", "Peer-to-peer Transactions", "Limited Smart Contract Functionality (via Taproot)"]
    },
    {
      name: "Ethereum (ETH)",
      description: "The leading smart contract platform that enables decentralized applications and DeFi.",
      type: "Layer 1",
      marketCap: "$368 billion",
      consensus: "Proof of Stake",
      features: ["Smart Contracts", "dApps", "ERC-20 Tokens", "NFTs"]
    },
    {
      name: "Binance Coin (BNB)",
      description: "Native token of Binance Exchange and the BNB Chain ecosystem.",
      type: "Layer 1",
      marketCap: "$65 billion",
      consensus: "Proof of Staked Authority",
      features: ["EVM Compatible", "High Throughput", "Low Gas Fees"]
    },
    {
      name: "Solana (SOL)",
      description: "High-performance blockchain focused on speed and low transaction costs.",
      type: "Layer 1",
      marketCap: "$52 billion",
      consensus: "Proof of History + Proof of Stake",
      features: ["High TPS", "Low Fees", "Parallel Processing"]
    },
    {
      name: "XRP",
      description: "Digital asset built for payments that enables real-time global transfers.",
      type: "Layer 1",
      marketCap: "$34 billion",
      consensus: "XRP Ledger Consensus Protocol",
      features: ["Fast Settlements", "Low Cost", "Cross-border Payments"]
    },
    {
      name: "Cardano (ADA)",
      description: "Research-driven blockchain platform built using peer-reviewed academic research.",
      type: "Layer 1",
      marketCap: "$15 billion",
      consensus: "Ouroboros Proof of Stake",
      features: ["Scientific Approach", "Multi-layer Architecture", "Smart Contracts"]
    },
    {
      name: "Avalanche (AVAX)",
      description: "Platform for launching decentralized applications with high throughput.",
      type: "Layer 1",
      marketCap: "$11 billion",
      consensus: "Avalanche Consensus",
      features: ["Sub-second Finality", "Subnet Architecture", "EVM Compatible"]
    },
    {
      name: "Polkadot (DOT)",
      description: "Multi-chain network that enables different blockchains to transfer messages and value.",
      type: "Layer 0",
      marketCap: "$9 billion",
      consensus: "Nominated Proof of Stake",
      features: ["Interoperability", "Parachains", "Shared Security"]
    },
    {
      name: "Polygon (MATIC)",
      description: "Ethereum scaling platform that enables fast, low-cost transactions.",
      type: "Layer 2",
      marketCap: "$8 billion",
      consensus: "Proof of Stake",
      features: ["Ethereum Scaling", "Multiple Solutions", "Low Gas Fees"]
    },
    {
      name: "Tron (TRX)",
      description: "Blockchain platform focused on content sharing and entertainment applications.",
      type: "Layer 1",
      marketCap: "$8 billion",
      consensus: "Delegated Proof of Stake",
      features: ["High Throughput", "Content Distribution", "dApp Ecosystem"]
    }
  ]

  // Timeline of DeFi history
  const defiTimeline = [
    {
      year: 2009,
      title: "Bitcoin Genesis",
      description: "Bitcoin launched as the first cryptocurrency, introducing the core concept of decentralized, peer-to-peer value transfer without intermediaries."
    },
    {
      year: 2013,
      title: "Colored Coins & Early Financial Primitives",
      description: "Early experiments on the Bitcoin blockchain to represent and transfer assets beyond just BTC, laying conceptual groundwork for tokenization."
    },
    {
      year: 2015,
      title: "Ethereum Launch",
      description: "Ethereum went live, introducing programmable smart contracts that made complex financial applications possible on blockchain."
    },
    {
      year: 2017,
      title: "ICO Boom and First DEXs",
      description: "The ICO boom created thousands of ERC-20 tokens, while early decentralized exchanges like EtherDelta emerged to trade them without centralized intermediaries."
    },
    {
      year: 2018,
      title: "Stablecoins Gain Traction",
      description: "MakerDAO launched DAI, the first decentralized stablecoin. USDC and other stablecoins appeared, providing critical infrastructure for DeFi."
    },
    {
      year: 2019,
      title: "DeFi Summer Precursors",
      description: "Compound, Aave, and other lending protocols launched. Uniswap introduced automated market makers (AMMs), revolutionizing decentralized trading."
    },
    {
      year: 2020,
      title: "DeFi Summer",
      description: "Compound launched COMP token and kickstarted 'yield farming,' leading to the DeFi boom known as 'DeFi Summer' with TVL growing from $1B to $15B."
    },
    {
      year: 2021,
      title: "Mainstream Attention and Multi-chain DeFi",
      description: "DeFi expanded beyond Ethereum to Binance Smart Chain, Solana, and other chains. Total value locked in DeFi protocols exceeded $100 billion."
    },
    {
      year: 2022,
      title: "DeFi Challenges and Regulation",
      description: "Market downturns and several high-profile protocol failures highlighted risks. Regulatory attention increased significantly."
    },
    {
      year: 2023,
      title: "Recovery and Maturation",
      description: "DeFi began recovering with improved security practices, more institutional adoption, and a focus on sustainable yield generation over speculative farming."
    },
    {
      year: 2024,
      title: "Institutional DeFi and RWAs",
      description: "Major growth in tokenized real-world assets (RWAs) and institutional DeFi solutions, with traditional finance increasingly integrating with DeFi infrastructure."
    }
  ]

  // Token types data
  const tokenTypes = [
    {
      type: "Utility Tokens",
      description: "Tokens that provide access to a project's product or service.",
      examples: ["Basic Attention Token (BAT)", "Filecoin (FIL)", "Chainlink (LINK)"],
      features: ["Grant access rights", "Pay for specific services", "Often native to specific platforms"]
    },
    {
      type: "Security Tokens",
      description: "Tokens that represent ownership in an external asset or enterprise.",
      examples: ["Tokenized stocks", "Real estate tokens", "Revenue-sharing tokens"],
      features: ["Subject to securities regulations", "Represent ownership rights", "May provide dividends"]
    },
    {
      type: "Governance Tokens",
      description: "Tokens that grant voting rights in decentralized protocol decisions.",
      examples: ["Uniswap (UNI)", "Aave (AAVE)", "Compound (COMP)"],
      features: ["Voting on protocol changes", "Proposal submission rights", "Treasury management"]
    },
    {
      type: "Non-Fungible Tokens (NFTs)",
      description: "Unique tokens representing ownership of distinct digital or physical assets.",
      examples: ["Digital art", "Virtual real estate", "Collectibles"],
      features: ["Uniqueness", "Indivisibility", "Provable scarcity"]
    },
    {
      type: "Stablecoins",
      description: "Tokens designed to maintain a stable value, typically pegged to a fiat currency.",
      examples: ["USDC", "DAI", "USDT"],
      features: ["Price stability", "Reduced volatility", "Bridge between crypto and fiat"]
    },
    {
      type: "Liquidity Provider (LP) Tokens",
      description: "Tokens representing deposit of assets into a liquidity pool on DEXs.",
      examples: ["Uniswap LP tokens", "PancakeSwap LP tokens"],
      features: ["Represent pool share", "Earn trading fees", "Can be staked for additional rewards"]
    },
    {
      type: "Wrapped Tokens",
      description: "Tokens representing another cryptocurrency on a different blockchain.",
      examples: ["Wrapped Bitcoin (WBTC)", "Wrapped ETH (WETH)"],
      features: ["Cross-chain compatibility", "Represent 1:1 value of underlying asset", "Enhanced functionality"]
    },
    {
      type: "Meme Tokens",
      description: "Tokens created primarily as jokes or based on internet memes with limited utility.",
      examples: ["Dogecoin (DOGE)", "Shiba Inu (SHIB)"],
      features: ["Often community-driven", "Highly volatile", "Limited practical utility"]
    }
  ]

  // Leading token ecosystems data
  const tokenEcosystems = [
    {
      chain: "Ethereum",
      standard: "ERC-20, ERC-721, ERC-1155",
      tokensCount: "500,000+",
      marketShare: "~70% of all tokens",
      notableTokens: ["USDC", "USDT", "LINK", "UNI", "Most major DeFi tokens"],
      strengths: ["First-mover advantage", "Largest developer ecosystem", "Highest security", "Most established standards"],
      image: "/images/ethereum.svg"
    },
    {
      chain: "BNB Chain",
      standard: "BEP-20, BEP-721, BEP-1155",
      tokensCount: "100,000+",
      marketShare: "~10% of all tokens",
      notableTokens: ["CAKE", "BAKE", "BURGER", "Many memecoins and gaming tokens"],
      strengths: ["Low fees", "Fast transactions", "Binance exchange integration", "Easier token creation"],
      image: "/images/bnb.svg"
    },
    {
      chain: "Solana",
      standard: "SPL Token Standard",
      tokensCount: "20,000+",
      marketShare: "~6% of all tokens",
      notableTokens: ["Serum (SRM)", "Raydium (RAY)", "Star Atlas (ATLAS)"],
      strengths: ["Ultra-fast transactions", "Low fees", "Growing ecosystem", "Strong for NFTs and gaming"],
      image: "/images/solana.svg"
    },
    {
      chain: "Polygon",
      standard: "ERC-20, ERC-721, ERC-1155 (compatible)",
      tokensCount: "30,000+",
      marketShare: "~5% of all tokens",
      notableTokens: ["AAVE (Polygon)", "QUICK", "Wrapped tokens from Ethereum"],
      strengths: ["Ethereum compatibility", "Low fees", "Fast transactions", "Growing L2 ecosystem"],
      image: "/images/polygon.svg"
    }
  ]

  // Positive use cases for tokens
  const positiveUseCases = [
    {
      title: "Democratic Governance",
      description: "Governance tokens enable decentralized decision-making where all stakeholders can participate proportionally.",
      impact: "Creates more inclusive, transparent governance systems that prevent power concentration.",
      examples: ["MakerDAO's MKR token allowing holders to vote on important protocol parameters", "Uniswap's UNI enabling community governance of the exchange"]
    },
    {
      title: "Financial Inclusion",
      description: "Tokens enable people globally to access financial services without requiring traditional banking infrastructure.",
      impact: "Provides banking services to the 1.7 billion adults without bank accounts, particularly in developing regions.",
      examples: ["Remittance services using stablecoins to send money across borders", "Microloans in regions without banking infrastructure"]
    },
    {
      title: "Aligned Incentives",
      description: "Token economics can align incentives between users, developers, and investors in ways traditional models cannot.",
      impact: "Creates sustainability in protocols where all participants benefit from growth and good behavior.",
      examples: ["File storage tokens incentivizing hosting data", "Curation tokens rewarding quality content"]
    },
    {
      title: "Fractional Ownership",
      description: "Tokens enable fractional ownership of expensive assets that were previously inaccessible to most people.",
      impact: "Democratizes access to high-value investments and reduces wealth concentration.",
      examples: ["Tokenized real estate allowing small investors to own fractions of properties", "Fractionalized art ownership"]
    },
    {
      title: "Programmable Money",
      description: "Smart contract-enabled tokens can automate complex financial arrangements without intermediaries.",
      impact: "Reduces costs, eliminates rent-seeking middlemen, and enables novel financial models.",
      examples: ["Automated revenue sharing in creative industries", "Conditional payments based on real-world outcomes"]
    },
    {
      title: "Public Goods Funding",
      description: "Token-based mechanisms like quadratic funding enable more effective public goods financing.",
      impact: "Funds valuable community resources that traditional markets might undersupply.",
      examples: ["Gitcoin Grants using quadratic funding for open source development", "Retroactive public goods funding models"]
    }
  ]

  // Problems to address in the token ecosystem
  const tokenProblems = [
    {
      problem: "Rug Pulls & Exit Scams",
      description: "Developers abandon projects after raising funds, often selling their token holdings and leaving investors with worthless tokens.",
      potentialSolutions: ["Standardized token contract auditing", "Time-locked developer tokens", "Community-governed treasuries", "Token launch reputation systems"]
    },
    {
      problem: "Token Distribution Inequality",
      description: "Many projects allocate excessive percentages to founders/investors, leading to concentrated control and pump-and-dump schemes.",
      potentialSolutions: ["Transparent tokenomics disclosure standards", "Fair launch mechanisms", "Longer vesting periods", "Progressive decentralization frameworks"]
    },
    {
      problem: "Regulatory Uncertainty",
      description: "Unclear regulations around tokens create legal risks for both creators and users, stifling innovation.",
      potentialSolutions: ["Clearer regulatory frameworks", "Self-regulatory organizations", "Compliance-as-a-service tools", "Educational initiatives for policymakers"]
    },
    {
      problem: "Speculative Bubbles",
      description: "Excessive speculation often overshadows actual utility, creating boom-bust cycles that harm adoption.",
      potentialSolutions: ["Value-accrual mechanisms tied to usage", "Focus on non-speculative metrics", "Reduced emissions during market euphoria", "Better financial literacy education"]
    },
    {
      problem: "Governance Attacks",
      description: "Governance token systems can be vulnerable to takeovers, bribery, and manipulation by wealthy actors.",
      potentialSolutions: ["Quadratic voting", "Conviction voting", "Governance participation incentives", "Reputation-based voting power"]
    },
    {
      problem: "MEV & Frontrunning",
      description: "Maximal Extractable Value (MEV) enables market manipulation and harmful transaction reordering.",
      potentialSolutions: ["Fair ordering protocols", "MEV-capture mechanisms", "Improved mempool encryption", "Protocol-level disincentives for harmful MEV"]
    },
    {
      problem: "Environmental Concerns",
      description: "Token economies on proof-of-work chains face criticism for energy consumption and environmental impact.",
      potentialSolutions: ["Moving to proof-of-stake", "Carbon offset integration", "Energy efficiency improvements", "Renewable energy mining"]
    }
  ]

  // DEX comparison data
  const dexVsCexComparison = [
    {
      aspect: "Custody of Funds",
      dex: "Non-custodial; users maintain control of their assets through self-custody wallets",
      cex: "Custodial; users deposit funds to the exchange which controls private keys"
    },
    {
      aspect: "Operation Model",
      dex: "Decentralized; operates through smart contracts on a blockchain",
      cex: "Centralized; operated by a company with central servers"
    },
    {
      aspect: "Trading Mechanism",
      dex: "Typically uses automated market makers (AMMs) or order books on-chain",
      cex: "Uses traditional order book matching engines"
    },
    {
      aspect: "KYC/AML Requirements",
      dex: "Typically permissionless with no KYC requirements",
      cex: "Usually requires identity verification and KYC/AML compliance"
    },
    {
      aspect: "Speed & Cost",
      dex: "Speed limited by blockchain; may have higher fees during network congestion",
      cex: "Typically faster execution with lower trading fees"
    },
    {
      aspect: "Asset Availability",
      dex: "Any token can be listed without permission; long tail of assets",
      cex: "Limited to assets approved and listed by the exchange"
    },
    {
      aspect: "Security Model",
      dex: "Security depends on smart contract code; no central point of failure",
      cex: "Security depends on exchange's security practices; vulnerable to hacks"
    }
  ];

  // AMM types
  const ammTypes = [
    {
      name: "Constant Product (x*y=k)",
      examples: ["Uniswap V2", "PancakeSwap", "SushiSwap", "Raydium", "Orca (Classic)"],
      description: "Uses the formula x*y=k where x and y are the reserves of two tokens. Ensures liquidity at all price points but suffers from impermanent loss for volatile assets.",
      pros: ["Simple and battle-tested", "Works for any token pair", "Always provides liquidity"],
      cons: ["Inefficient capital usage", "High slippage for large trades", "Significant impermanent loss"]
    },
    {
      name: "Stableswap (Curve Model)",
      examples: ["Curve Finance", "Saddle", "Ellipsis", "Mercurial (Solana)"],
      description: "Designed for similar-valued assets like stablecoins, uses a more complex formula that allows for more efficient trades around the peg.",
      pros: ["Low slippage for similar-valued assets", "Lower impermanent loss", "Capital efficient"],
      cons: ["Only works well for similar-valued assets", "More complex mathematics", "Less efficient for volatile pairs"]
    },
    {
      name: "Weighted Pools",
      examples: ["Balancer", "Beethoven X", "Orca (Weighted Pools)"],
      description: "Generalizes constant product to support multiple tokens with different weights in a single pool.",
      pros: ["Supports multiple assets in one pool", "Customizable weights", "Can act as index funds"],
      cons: ["More complex than basic AMMs", "Still susceptible to impermanent loss"]
    },
    {
      name: "Concentrated Liquidity",
      examples: ["Uniswap V3", "Algebra", "Camelot", "Orca (Whirlpools)"],
      description: "Allows LPs to provide liquidity within specific price ranges, increasing capital efficiency.",
      pros: ["Higher capital efficiency", "Better returns for LPs", "Lower slippage for traders"],
      cons: ["More complex to manage", "Still has impermanent loss", "Requires active management"]
    },
    {
      name: "Dynamic Liquidity Market Maker (DLMM)",
      examples: ["Meteora (Solana)"],
      description: "A Solana-specific innovation that dynamically adjusts liquidity distribution in response to market conditions, combining benefits of concentrated liquidity with automated position management.",
      pros: ["Automatic liquidity optimization", "Reduced impermanent loss risk", "Better capital efficiency than standard CLMMs", "No active position management required"],
      cons: ["Newer and less battle-tested", "Currently only available on Solana", "More complex fee structure"]
    },
    {
      name: "Proactive Market Maker (PMM)",
      examples: ["DODO", "dYdX Hybrid", "Lifinity (Solana)"],
      description: "Uses price oracles and a dynamic curve that mimics orderbook behavior with concentrated liquidity near market price.",
      pros: ["High capital efficiency", "Lower slippage", "Reduced impermanent loss"],
      cons: ["Relies on price oracles", "More complex", "Potential centralization via oracles"]
    },
    {
      name: "Constant Sum (x+y=k)",
      examples: ["Shell Protocol", "mStable", "Cykura (Solana)"],
      description: "Uses x+y=k formula, which works well for assets that should maintain the same price but has zero slippage.",
      pros: ["No slippage for equal-valued assets", "No impermanent loss when assets maintain peg", "Capital efficient"],
      cons: ["Can be drained if prices diverge", "Limited to very specific use cases"]
    },
    {
      name: "Dynamic Automated Market Makers",
      examples: ["Kyber DMM", "THORChain", "Jupiter (Solana)", "Crema Finance (Solana)"],
      description: "Adjusts parameters based on market conditions, volatility, and other factors.",
      pros: ["Adapts to market conditions", "Can optimize for different market scenarios", "More efficient"],
      cons: ["Complex mechanisms", "Relies on external data", "Newer and less battle-tested"]
    }
  ];

  // DEX Evolution Timeline
  const dexEvolution = [
    {
      year: 2016,
      event: "First DEXs Emerge",
      description: "EtherDelta and IDEX launch using on-chain order books, offering the first truly non-custodial trading experience.",
      innovation: "On-chain order books"
    },
    {
      year: 2017,
      event: "0x Protocol Launches",
      description: "Introduced a standard for decentralized exchange with off-chain order books and on-chain settlement.",
      innovation: "Hybrid order book model"
    },
    {
      year: 2018,
      event: "Uniswap V1 Launch",
      description: "Hayden Adams launches Uniswap, pioneering the x*y=k automated market maker model that would revolutionize DEXs.",
      innovation: "Constant product AMM"
    },
    {
      year: 2019,
      event: "Bancor and Kyber Gain Traction",
      description: "Early alternatives to Uniswap with different liquidity models started gaining users.",
      innovation: "Alternative AMM formulas"
    },
    {
      year: 2020,
      event: "DeFi Summer & Liquidity Mining",
      description: "Compound introduces yield farming, leading to an explosion in DEX usage. Uniswap V2, Balancer, and Curve gain massive adoption.",
      innovation: "Liquidity mining incentives"
    },
    {
      year: 2021,
      event: "Uniswap V3 & Concentrated Liquidity",
      description: "Introduction of concentrated liquidity allowing LPs to provide capital within specific price ranges for higher efficiency.",
      innovation: "Concentrated liquidity positions"
    },
    {
      year: 2022,
      event: "Emergence of Orderbook DEXs",
      description: "Projects like dYdX and Serum gain popularity with on-chain orderbooks and advanced trading features.",
      innovation: "High-performance on-chain orderbooks"
    },
    {
      year: 2023,
      event: "Cross-chain DEXs",
      description: "Protocols like THORChain and LayerZero-based DEXs enable trading across different blockchains without wrapped tokens.",
      innovation: "Cross-chain liquidity"
    },
    {
      year: 2024,
      event: "ZK-Powered DEXs",
      description: "Zero-knowledge proofs enable private trading and more efficient on-chain order books.",
      innovation: "Privacy-preserving swaps and settlements"
    }
  ];

  // LP risks and benefits
  const lpRisksAndBenefits = [
    {
      benefit: "Fee Income",
      description: "Liquidity providers earn a portion of trading fees generated by swaps in their pool.",
      consideration: "Fee income can vary significantly based on trading volume and may not always offset impermanent loss."
    },
    {
      benefit: "Yield Farming Rewards",
      description: "Many protocols offer additional token incentives to liquidity providers.",
      consideration: "Rewards often decrease over time as programs end; token value may decline (impermanent loss)."
    },
    {
      benefit: "Capital Efficiency",
      description: "Modern DEXs allow LPs to earn more with less capital through concentrated liquidity positions.",
      consideration: "Requires more active management and may incur higher gas costs for position adjustments."
    },
    {
      benefit: "Passive Income",
      description: "Can generate returns without actively trading or timing the market.",
      consideration: "Not truly passive - requires monitoring positions and rebalancing as market conditions change."
    },
    {
      risk: "Impermanent Loss",
      description: "Loss compared to holding when asset prices in a pool change relative to each other.",
      mitigation: "Provide liquidity for correlated assets or stablecoins; use concentrated liquidity in expected range."
    },
    {
      risk: "Smart Contract Risk",
      description: "Vulnerabilities in smart contracts could lead to loss of funds.",
      mitigation: "Choose well-audited protocols; consider using DeFi insurance."
    },
    {
      risk: "Market Risk",
      description: "Extreme market volatility can lead to significant impermanent loss.",
      mitigation: "Use stablecoin pairs or consider single-sided staking alternatives."
    },
    {
      risk: "MEV (Maximal Extractable Value)",
      description: "Advanced traders can front-run or sandwich LP positions.",
      mitigation: "Choose DEXs with MEV protection; use protocols with private order flow."
    }
  ];

  // DEX innovations and future trends
  const dexInnovations = [
    {
      innovation: "Multiple Pool Types",
      description: "DEXs like Balancer support various pool configurations beyond simple 50/50 pairs, allowing for weighted pools and index-like exposure.",
      impact: "Enables more capital-efficient liquidity provision and more complex financial products."
    },
    {
      innovation: "Single-Sided Liquidity",
      description: "Protocols like Bancor v3 and Tokemak allow providing liquidity with just one asset, protecting against impermanent loss.",
      impact: "Makes liquidity provision accessible to more users and reduces risk of IL."
    },
    {
      innovation: "Active Liquidity Management",
      description: "Services like Arrakis, Gamma, and Gelato automate the management of concentrated liquidity positions.",
      impact: "Optimizes returns for LPs without requiring constant monitoring and adjustments."
    },
    {
      innovation: "Liquidity as a Service (LaaS)",
      description: "Protocols that direct liquidity to where it's needed most through incentive mechanisms.",
      impact: "More efficient allocation of capital across DeFi and better liquidity for emerging projects."
    },
    {
      innovation: "MEV Protection",
      description: "Technologies like Flashbots Protect and private mempools to prevent front-running and sandwich attacks.",
      impact: "Reduces value extraction from traders and LPs, making DEXs more fair."
    },
    {
      innovation: "Intent-based Trading",
      description: "Systems where users express the trades they want to make without specifying exact execution parameters.",
      impact: "Allows for more efficient routing and execution across multiple liquidity sources."
    },
    {
      innovation: "Zero-Knowledge Proofs",
      description: "Privacy-preserving technologies for DEXs that hide trade details while maintaining verifiability.",
      impact: "Addresses front-running concerns and provides privacy for institutional traders."
    }
  ];

  // Fair Launch Platforms
  const fairLaunchPlatforms = [
    {
      name: "Liquidity Bootstrapping Pools (LBPs)",
      examples: ["Balancer", "Copper Launch", "DODO"],
      description: "Auction-like mechanisms that start at a high price and gradually decrease to find a fair market price while preventing large buyers from dominating.",
      pros: ["Prevents whale dominance", "Price discovery", "Less MEV exploitation", "Reduces initial volatility"],
      cons: ["Complex for average users", "Still vulnerable to coordinated buying", "Less excitement than instant listings"]
    },
    {
      name: "Fair Launch Auctions",
      examples: ["Gnosis Auction", "Fairmint", "MISO by SushiSwap"],
      description: "Token distribution mechanisms where all participants pay the same clearing price regardless of their bid, creating a more equitable distribution.",
      pros: ["Everyone pays same price", "Transparent process", "Prevents front-running", "Community focused"],
      cons: ["Less initial price action", "May result in lower initial raise", "Requires significant planning"]
    },
    {
      name: "Initial DEX Offerings (IDOs)",
      examples: ["PinkSale", "DxSale", "Unicrypt", "PadSwap"],
      description: "Token sales conducted directly on DEXs, often with minimal requirements and instant trading post-launch.",
      pros: ["Immediate liquidity", "Low barrier to entry", "Simple to participate", "Accessible to small projects"],
      cons: ["Prone to pump and dumps", "Limited vetting", "Encourages speculation over utility", "High risk of scams"]
    },
    {
      name: "Decentralized Launchpads",
      examples: ["DAO Maker", "PolkaStarter", "Seedify", "GameFi"],
      description: "Platforms that curate projects and provide tiered access to token sales based on user stake or participation.",
      pros: ["Some project vetting", "Structured sales", "Community building", "Post-launch support"],
      cons: ["Often favor large token holders", "Creates exclusivity", "May still have weak vetting standards"]
    },
    {
      name: "Community-Driven Distribution",
      examples: ["Olympus Pro", "Neptune DAO", "Llama Airforce"],
      description: "Mechanisms where tokens are distributed based on contribution, participation, or bonding of other assets.",
      pros: ["Aligns incentives", "Value-driven distribution", "Reduces speculation", "Builds engaged community"],
      cons: ["Slower growth", "Complex mechanisms", "Harder to bootstrap liquidity", "Less immediate trading excitement"]
    }
  ];

  // Bonding Curve Types
  const bondingCurveTypes = [
    {
      type: "Linear Bonding Curve",
      formula: "P = m * S + b",
      description: "Price increases at a constant rate as token supply increases, creating a straight line relationship.",
      applications: ["Simple token sales", "Predictable price growth", "Early-stage projects"],
      limitations: ["No dampening of price volatility", "May grow too quickly at scale", "Less capital efficient"]
    },
    {
      type: "Exponential Bonding Curve",
      formula: "P = a^S",
      description: "Price grows exponentially as supply increases, creating scarcity value at higher supply levels.",
      applications: ["Scarcity-focused tokens", "Collector communities", "Store of value projects"],
      limitations: ["May become prohibitively expensive", "Can create extreme volatility", "Less accessible as prices rise"]
    },
    {
      type: "Logarithmic Bonding Curve",
      formula: "P = log(S) + c",
      description: "Price grows quickly at first, then slows down as supply increases, creating a more stable long-term price.",
      applications: ["Long-term token economies", "Utility tokens", "Governance systems"],
      limitations: ["Less exciting initial growth", "Complex to explain to users", "May undervalue tokens initially"]
    },
    {
      type: "Sigmoid Bonding Curve",
      formula: "P = 1/(1+e^(-S))",
      description: "S-shaped curve that grows slowly, then rapidly, then slowly again, modeling many natural growth patterns.",
      applications: ["Mature token economies", "Network effect projects", "Multi-phase token sales"],
      limitations: ["Complex to implement", "Difficult to predict phase transitions", "Requires careful parameter setting"]
    },
    {
      type: "Dynamic Bonding Curve",
      formula: "Variable based on parameters",
      description: "Curves that adjust parameters based on market conditions, external data, or governance decisions.",
      applications: ["Algorithmic stablecoins", "Elastic supply tokens", "Adaptive market makers"],
      limitations: ["Highly complex", "Difficult to audit", "May have unexpected behaviors"]
    }
  ];

  // NFT Marketplace Comparison
  const nftMarketplaces = [
    {
      name: "General NFT Marketplaces",
      examples: ["OpenSea", "Blur", "Magic Eden", "Rarible"],
      features: ["Wide range of NFT categories", "Cross-chain support", "Secondary market royalties", "Collection verification"],
      advantages: ["Largest liquidity", "Brand recognition", "User-friendly interfaces", "Large audience"],
      challenges: ["High competition", "Limited curation", "Harder discovery", "Variable fees"]
    },
    {
      name: "Art-Focused Marketplaces",
      examples: ["SuperRare", "Foundation", "MakersPlace", "KnownOrigin"],
      features: ["Curated art focus", "Artist verification", "Limited editions", "Exhibition formats"],
      advantages: ["Higher quality standards", "Better for serious artists", "Stronger community", "Cultural relevance"],
      challenges: ["Higher barriers to entry", "Lower volume", "Less accessibility", "Often Ethereum-only"]
    },
    {
      name: "Gaming & Metaverse Marketplaces",
      examples: ["ImmutableX Marketplace", "Fractal", "Axie Marketplace", "The Sandbox"],
      features: ["Game-specific assets", "In-game utility", "Low fees", "High transaction throughput"],
      advantages: ["Integrated user experience", "Clear utility", "Active usage", "Lower gas costs"],
      challenges: ["Game-dependent value", "Platform risk", "Limited to specific ecosystems"]
    },
    {
      name: "Music & Media NFT Platforms",
      examples: ["Sound.xyz", "Catalog", "Royal", "Audius"],
      features: ["Music ownership", "Streaming integration", "Royalty sharing", "Fan experiences"],
      advantages: ["Direct artist support", "New monetization models", "Community building", "Unique media experiences"],
      challenges: ["Rights complexity", "Integration with existing platforms", "Education needs", "Unclear long-term models"]
    },
    {
      name: "Domain & Identity Marketplaces",
      examples: ["ENS Marketplace", "Unstoppable Domains", "Bonfida", "Avvy Domains"],
      features: ["Human-readable addresses", "Web3 identity", "Profile integration", "Decentralized websites"],
      advantages: ["Practical utility", "Growing ecosystem support", "Long-term value", "Cross-platform use"],
      challenges: ["Speculative purchasing", "Trademark issues", "Renewal models", "Chain-specific limitations"]
    }
  ];

  // Problems with current token launch landscape
  const launchProblems = [
    {
      problem: "Gambling-Focused Culture",
      description: "Many token launches emphasize short-term price action over sustainable tokenomics, attracting gamblers rather than genuine users or investors.",
      examples: ["Presales with no vesting", "Artificial token scarcity", "Anonymous teams with no accountability", "Launch-and-abandon patterns"],
      impact: "Creates boom-bust cycles, damages reputation of legitimate projects, normalizes extremely high-risk behavior, and undermines the broader DeFi ecosystem's credibility."
    },
    {
      problem: "Memecoin Dominance",
      description: "Platforms incentivize launching simple meme tokens that require minimal development but can generate quick returns through hype cycles.",
      examples: ["Copy-paste token contracts", "Animal-themed tokens with no utility", "Tokens based solely on internet trends", "Projects with marketing but no roadmap"],
      impact: "Diverts capital and attention from utility-focused projects, creates unsustainable market dynamics, and reinforces cryptocurrency stereotypes as purely speculative."
    },
    {
      problem: "Race to the Bottom on Standards",
      description: "Launch platforms compete by reducing requirements and vetting to attract more projects, prioritizing volume over quality.",
      examples: ["No KYC requirements", "Minimal contract auditing", "Instant listings", "Few restrictions on tokenomics"],
      impact: "Increases prevalence of scams, reduces overall quality of new projects, and creates poor risk/reward ratios for average participants."
    },
    {
      problem: "Predatory Tokenomics",
      description: "Launch mechanisms that enable teams to extract value while providing minimal protection for participants.",
      examples: ["Hidden team tokens", "Excessive tax mechanisms", "Honeypot contracts", "Manipulated liquidity pools"],
      impact: "Undermines trust in the ecosystem, creates financial harm for participants, and establishes perverse incentives for project creators."
    },
    {
      problem: "Misaligned Incentives",
      description: "Current launch models reward hype generation and quick exits rather than sustainable development and user value creation.",
      examples: ["Influencer-driven promotions with no disclosure", "Front-loaded reward structures", "Limited focus on product-market fit", "Abandonment after initial liquidity events"],
      impact: "Creates short-term thinking, rewards marketing over development, and undermines the ethos of building sustainable decentralized alternatives to traditional systems."
    }
  ];

  // Proposed solutions for token launch improvements
  const launchSolutions = [
    {
      solution: "Standardized Token Launch Framework",
      description: "Develop industry-wide standards for token launches that establish minimum requirements for transparency, tokenomics, and security.",
      implementation: ["Community-governed standards organization", "Certification system for compliant platforms", "Open-source templates for responsible launches", "Universal disclosure format"],
      benefits: "Creates clarity for participants, establishes baseline quality expectations, and allows platforms to compete on features rather than reducing standards."
    },
    {
      solution: "Time-Weighted Incentive Structures",
      description: "Redesign launch mechanisms to reward long-term participation over short-term speculation, aligning incentives with project success.",
      implementation: ["Mandatory vesting for all participants", "Rewards that increase with holding duration", "Governance rights that mature over time", "Fee structures that penalize quick flipping"],
      benefits: "Attracts committed community members, creates stability, and encourages genuine interest in project success rather than quick profits."
    },
    {
      solution: "Enhanced Due Diligence Requirements",
      description: "Require launch platforms to implement meaningful project verification and team authentication measures.",
      implementation: ["Mandatory code audits", "Team identity verification", "Tokenomics transparency requirements", "Lock-up periods for team tokens"],
      benefits: "Reduces scam prevalence, improves overall project quality, and creates more sustainable launch ecosystems."
    },
    {
      solution: "Value-Driven Launch Metrics",
      description: "Shift focus from price action to metrics that measure actual project value, utility, and community engagement.",
      implementation: ["User adoption metrics", "Development activity tracking", "Genuine community growth measurement", "Utility-based valuation frameworks"],
      benefits: "Redirects attention to sustainable value creation, helps participants make better-informed decisions, and rewards projects building real solutions."
    },
    {
      solution: "Decentralized Reputation Systems",
      description: "Create cross-platform reputation systems for projects, teams, and participants that incentivize positive behaviors.",
      implementation: ["On-chain reputation scores", "Project history tracking", "Team performance records", "Community feedback mechanisms"],
      benefits: "Establishes accountability, creates incentives for ethical behavior, and helps participants identify quality projects amid the noise."
    }
  ];

  return (
    <>
      <Head>
        <title>DeFi Fundamentals | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Learn the fundamentals of DeFi, cryptocurrency basics, tokens, decentralized exchanges, and market dynamics in this comprehensive guide." 
        />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              DeFi Fundamentals
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive guide to understanding decentralized finance, cryptocurrencies, and the blockchain ecosystem.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <TabLayout 
              tabs={tabs} 
              activeTab={activeTab} 
              onTabChange={setActiveTab}
              tabPosition="side"
            >
              {/* Crypto Fundamentals Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'crypto-basics' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaBitcoin className="text-yellow-400 mr-3" />
                    Cryptocurrency Fundamentals
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on decentralized networks called blockchains.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Concepts in Cryptocurrency</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Blockchain Technology</h4>
                          <p>
                            A distributed ledger that records all transactions across a network of computers. 
                            It's decentralized, transparent, and resistant to modification.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Decentralization</h4>
                          <p>
                            The distribution of power away from central authorities. In crypto, this means 
                            no single entity controls the network.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Consensus Mechanisms</h4>
                          <p>
                            Methods by which blockchain networks reach agreement on the valid state of the ledger. 
                            Examples include Proof of Work and Proof of Stake.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Cryptographic Security</h4>
                          <p>
                            The use of mathematical algorithms to secure transactions and control the creation 
                            of new units.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Major Blockchain Networks</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gray-600">
                            <th className="px-4 py-3 text-left text-white">Blockchain</th>
                            <th className="px-4 py-3 text-left text-white">Type</th>
                            <th className="px-4 py-3 text-left text-white">Consensus</th>
                            <th className="px-4 py-3 text-left text-white">Key Features</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topBlockchains.map((blockchain, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'}>
                              <td className="px-4 py-3">
                                <div>
                                  <span className="font-medium text-white">{blockchain.name}</span>
                                  <p className="text-sm text-gray-400 mt-1">{blockchain.description}</p>
                                </div>
                              </td>
                              <td className="px-4 py-3">{blockchain.type}</td>
                              <td className="px-4 py-3">{blockchain.consensus}</td>
                              <td className="px-4 py-3">
                                <ul className="list-disc list-inside text-sm">
                                  {blockchain.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Blockchain Layers Explained</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Layer 0</h4>
                        <p>
                          The foundational protocols that allow multiple blockchains to be built on top. 
                          They focus on interoperability and shared security.
                        </p>
                        <p className="mt-2">
                          <strong>Examples:</strong> Polkadot, Cosmos
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Layer 1</h4>
                        <p>
                          Base blockchains that can validate and finalize transactions independently. 
                          They implement their own consensus mechanisms and security models.
                        </p>
                        <p className="mt-2">
                          <strong>Examples:</strong> Bitcoin, Ethereum, Solana, Cardano
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Layer 2</h4>
                        <p>
                          Scaling solutions built on top of Layer 1 blockchains to improve transaction 
                          throughput and reduce costs while inheriting security from the base layer.
                        </p>
                        <p className="mt-2">
                          <strong>Examples:</strong> Optimism, Arbitrum, Lightning Network, Polygon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* DeFi Introduction Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'defi-intro' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaExchangeAlt className="text-blue-400 mr-3" />
                    Introduction to DeFi
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Decentralized Finance (DeFi) refers to financial applications built on blockchain networks that aim to recreate and improve traditional financial systems without central intermediaries.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Core Principles of DeFi</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaExchangeAlt className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Non-Custodial</h4>
                            <p>Users maintain control of their assets at all times through self-custody wallets.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-green-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaCodeBranch className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Permissionless</h4>
                            <p>Anyone can access DeFi services regardless of location, wealth, or status.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-purple-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaLayerGroup className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Composable</h4>
                            <p>DeFi applications can be combined like "money legos" to create new financial products.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-red-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaInfoCircle className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Transparent</h4>
                            <p>All transactions and code are publicly visible and verifiable on the blockchain.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">DeFi vs. Traditional Finance</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gray-600">
                            <th className="px-4 py-3 text-left text-white">Feature</th>
                            <th className="px-4 py-3 text-left text-white">Traditional Finance</th>
                            <th className="px-4 py-3 text-left text-white">Decentralized Finance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-700">
                            <td className="px-4 py-3 font-medium text-white">Custody</td>
                            <td className="px-4 py-3">Banks hold and control your assets</td>
                            <td className="px-4 py-3">Self-custody through personal wallets</td>
                          </tr>
                          <tr className="bg-gray-750">
                            <td className="px-4 py-3 font-medium text-white">Hours</td>
                            <td className="px-4 py-3">Business hours, weekdays</td>
                            <td className="px-4 py-3">24/7, 365 days a year</td>
                          </tr>
                          <tr className="bg-gray-700">
                            <td className="px-4 py-3 font-medium text-white">Access</td>
                            <td className="px-4 py-3">Requires approval, minimum balances</td>
                            <td className="px-4 py-3">Open to anyone with internet access</td>
                          </tr>
                          <tr className="bg-gray-750">
                            <td className="px-4 py-3 font-medium text-white">Settlements</td>
                            <td className="px-4 py-3">Days for clearing</td>
                            <td className="px-4 py-3">Minutes or seconds</td>
                          </tr>
                          <tr className="bg-gray-700">
                            <td className="px-4 py-3 font-medium text-white">Transparency</td>
                            <td className="px-4 py-3">Limited, quarterly disclosures</td>
                            <td className="px-4 py-3">Full transparency on-chain</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">The Evolution of DeFi</h3>
                    
                    <div className="relative">
                      <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-600"></div>
                      
                      <div className="space-y-8">
                        {defiTimeline.map((event, index) => (
                          <div key={index} className="relative flex gap-6">
                            <div className="flex flex-col items-center">
                              <div className="bg-blue-500 text-white text-sm font-bold w-16 h-16 rounded-full flex items-center justify-center z-10">
                                {event.year}
                              </div>
                              {index < defiTimeline.length - 1 && (
                                <div className="h-full w-0.5 bg-gray-600"></div>
                              )}
                            </div>
                            
                            <div className="bg-gray-700 p-5 rounded-lg flex-1">
                              <h4 className="font-semibold text-white mb-2">{event.title}</h4>
                              <p>{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Token Ecosystem Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'token-ecosystem' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">Token Ecosystem</h2>

                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Cryptocurrency Ecosystem Overview</h3>
                      <p className="mb-4">
                        The cryptocurrency ecosystem represents a vast interconnected network of technologies, platforms, and financial instruments that serve different purposes within the blockchain space.
                      </p>
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Key Components of the Ecosystem</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-600 p-3 rounded">
                            <span className="font-medium text-blue-300">Layer 1 Blockchains</span>
                            <p className="text-sm mt-1">Base blockchain protocols that handle consensus, security, and execution (Bitcoin, Ethereum, Solana)</p>
                          </div>
                          <div className="bg-gray-600 p-3 rounded">
                            <span className="font-medium text-blue-300">Layer 2 Solutions</span>
                            <p className="text-sm mt-1">Scaling technologies built on top of L1s to increase transaction throughput (Optimism, Arbitrum, Lightning Network)</p>
                          </div>
                          <div className="bg-gray-600 p-3 rounded">
                            <span className="font-medium text-blue-300">DeFi Protocols</span>
                            <p className="text-sm mt-1">Financial primitives for lending, trading, and asset management (Uniswap, Aave, Compound)</p>
                          </div>
                          <div className="bg-gray-600 p-3 rounded">
                            <span className="font-medium text-blue-300">Infrastructure</span>
                            <p className="text-sm mt-1">Developer tools, oracles, data indexing, and node infrastructure (Chainlink, The Graph, Infura)</p>
                          </div>
                          <div className="bg-gray-600 p-3 rounded">
                            <span className="font-medium text-blue-300">Consumer Applications</span>
                            <p className="text-sm mt-1">User-facing products built on blockchain tech (MetaMask, OpenSea, Lens Protocol)</p>
                          </div>
                          <div className="bg-gray-600 p-3 rounded">
                            <span className="font-medium text-blue-300">Tokenized Assets</span>
                            <p className="text-sm mt-1">Digital representations of real-world or crypto-native assets (USDC, tokenized securities, LP tokens)</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Major Token Categories</h3>
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-white">Payment & Store of Value</h4>
                            <p className="text-sm mt-1 mb-2">Tokens designed primarily for transactions and wealth preservation.</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-blue-900/40 text-xs py-1 px-2 rounded">Bitcoin (BTC)</span>
                              <span className="bg-blue-900/40 text-xs py-1 px-2 rounded">Litecoin (LTC)</span>
                              <span className="bg-blue-900/40 text-xs py-1 px-2 rounded">Bitcoin Cash (BCH)</span>
                              <span className="bg-blue-900/40 text-xs py-1 px-2 rounded">Monero (XMR)</span>
                              <span className="bg-blue-900/40 text-xs py-1 px-2 rounded">Zcash (ZEC)</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-white">Platform Tokens</h4>
                            <p className="text-sm mt-1 mb-2">Native tokens of blockchain networks that power transactions and governance.</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-purple-900/40 text-xs py-1 px-2 rounded">Ethereum (ETH)</span>
                              <span className="bg-purple-900/40 text-xs py-1 px-2 rounded">Solana (SOL)</span>
                              <span className="bg-purple-900/40 text-xs py-1 px-2 rounded">Avalanche (AVAX)</span>
                              <span className="bg-purple-900/40 text-xs py-1 px-2 rounded">Cardano (ADA)</span>
                              <span className="bg-purple-900/40 text-xs py-1 px-2 rounded">Polkadot (DOT)</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-white">Utility Tokens</h4>
                            <p className="text-sm mt-1 mb-2">Tokens providing access to specific products or services within platforms.</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-green-900/40 text-xs py-1 px-2 rounded">Chainlink (LINK)</span>
                              <span className="bg-green-900/40 text-xs py-1 px-2 rounded">Basic Attention Token (BAT)</span>
                              <span className="bg-green-900/40 text-xs py-1 px-2 rounded">Filecoin (FIL)</span>
                              <span className="bg-green-900/40 text-xs py-1 px-2 rounded">The Graph (GRT)</span>
                              <span className="bg-green-900/40 text-xs py-1 px-2 rounded">Render (RNDR)</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-white">Governance Tokens</h4>
                            <p className="text-sm mt-1 mb-2">Tokens that confer voting rights within decentralized protocols.</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-yellow-900/40 text-xs py-1 px-2 rounded">Uniswap (UNI)</span>
                              <span className="bg-yellow-900/40 text-xs py-1 px-2 rounded">Compound (COMP)</span>
                              <span className="bg-yellow-900/40 text-xs py-1 px-2 rounded">Aave (AAVE)</span>
                              <span className="bg-yellow-900/40 text-xs py-1 px-2 rounded">MakerDAO (MKR)</span>
                              <span className="bg-yellow-900/40 text-xs py-1 px-2 rounded">Curve (CRV)</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-white">Security Tokens</h4>
                            <p className="text-sm mt-1 mb-2">Tokenized securities representing ownership in assets like equity, debt, or real estate.</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-red-900/40 text-xs py-1 px-2 rounded">Tokenized stocks</span>
                              <span className="bg-red-900/40 text-xs py-1 px-2 rounded">Tokenized real estate</span>
                              <span className="bg-red-900/40 text-xs py-1 px-2 rounded">Revenue sharing tokens</span>
                              <span className="bg-red-900/40 text-xs py-1 px-2 rounded">Debt tokens</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-white">NFTs (Non-Fungible Tokens)</h4>
                            <p className="text-sm mt-1 mb-2">Unique digital assets representing ownership of specific items or content.</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-pink-900/40 text-xs py-1 px-2 rounded">Art NFTs</span>
                              <span className="bg-pink-900/40 text-xs py-1 px-2 rounded">Collectibles</span>
                              <span className="bg-pink-900/40 text-xs py-1 px-2 rounded">Gaming assets</span>
                              <span className="bg-pink-900/40 text-xs py-1 px-2 rounded">Virtual land</span>
                              <span className="bg-pink-900/40 text-xs py-1 px-2 rounded">Identity NFTs</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Stablecoins Deep Dive</h3>
                      <p className="mb-4">
                        Stablecoins are cryptocurrencies designed to maintain a stable value, typically pegged to a fiat currency like the US Dollar.
                      </p>
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Stablecoin Collateralization Types</h4>
                        <div className="space-y-4">
                          <div className="bg-gray-600 p-3 rounded">
                            <h5 className="font-medium text-green-300">Fiat-Collateralized</h5>
                            <p className="text-sm mt-1">Backed 1:1 by reserves of fiat currency held in regulated financial institutions.</p>
                            <div className="mt-2">
                              <span className="text-xs font-medium">Examples:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span className="bg-green-900/30 text-xs py-1 px-2 rounded">USDC</span>
                                <span className="bg-green-900/30 text-xs py-1 px-2 rounded">USDT (Tether)</span>
                                <span className="bg-green-900/30 text-xs py-1 px-2 rounded">BUSD</span>
                              </div>
                            </div>
                            <div className="mt-2 text-xs">
                              <span className="text-green-300">Pros:</span> High stability, easy to understand
                            </div>
                            <div className="mt-1 text-xs">
                              <span className="text-red-300">Cons:</span> Centralized, requires trust in custodian
                            </div>
                          </div>

                          <div className="bg-gray-600 p-3 rounded">
                            <h5 className="font-medium text-blue-300">Crypto-Collateralized</h5>
                            <p className="text-sm mt-1">Over-collateralized with other cryptocurrencies to account for price volatility.</p>
                            <div className="mt-2">
                              <span className="text-xs font-medium">Examples:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span className="bg-blue-900/30 text-xs py-1 px-2 rounded">DAI</span>
                                <span className="bg-blue-900/30 text-xs py-1 px-2 rounded">sUSD</span>
                                <span className="bg-blue-900/30 text-xs py-1 px-2 rounded">LUSD</span>
                              </div>
                            </div>
                            <div className="mt-2 text-xs">
                              <span className="text-green-300">Pros:</span> Decentralized, transparent on-chain
                            </div>
                            <div className="mt-1 text-xs">
                              <span className="text-red-300">Cons:</span> Capital inefficient, vulnerable to market crashes
                            </div>
                          </div>

                          <div className="bg-gray-600 p-3 rounded">
                            <h5 className="font-medium text-purple-300">Algorithmic</h5>
                            <p className="text-sm mt-1">Uses algorithms to automatically expand or contract token supply to maintain price stability.</p>
                            <div className="mt-2">
                              <span className="text-xs font-medium">Examples:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span className="bg-purple-900/30 text-xs py-1 px-2 rounded">FRAX (partial)</span>
                                <span className="bg-purple-900/30 text-xs py-1 px-2 rounded">FEI</span>
                                <span className="bg-red-900/30 text-xs py-1 px-2 rounded line-through">UST (failed)</span>
                              </div>
                            </div>
                            <div className="mt-2 text-xs">
                              <span className="text-green-300">Pros:</span> Potentially capital efficient, no collateral needed
                            </div>
                            <div className="mt-1 text-xs">
                              <span className="text-red-300">Cons:</span> History of catastrophic failures, complex mechanisms
                            </div>
                          </div>

                          <div className="bg-gray-600 p-3 rounded">
                            <h5 className="font-medium text-yellow-300">Hybrid Models</h5>
                            <p className="text-sm mt-1">Combines multiple stability mechanisms for greater resilience.</p>
                            <div className="mt-2">
                              <span className="text-xs font-medium">Examples:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span className="bg-yellow-900/30 text-xs py-1 px-2 rounded">FRAX</span>
                                <span className="bg-yellow-900/30 text-xs py-1 px-2 rounded">RAI</span>
                                <span className="bg-yellow-900/30 text-xs py-1 px-2 rounded">USDD</span>
                              </div>
                            </div>
                            <div className="mt-2 text-xs">
                              <span className="text-green-300">Pros:</span> Better capital efficiency than pure crypto-backed
                            </div>
                            <div className="mt-1 text-xs">
                              <span className="text-red-300">Cons:</span> Complex mechanisms, still experimental
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Token Standards</h3>
                      <p className="mb-4">
                        Token standards are specifications that ensure interoperability between tokens, wallets, and applications.
                      </p>
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-600">
                                <th className="py-2 px-4 text-left">Standard</th>
                                <th className="py-2 px-4 text-left">Blockchain</th>
                                <th className="py-2 px-4 text-left">Type</th>
                                <th className="py-2 px-4 text-left">Description</th>
                                <th className="py-2 px-4 text-left">Popular For</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                              <tr>
                                <td className="py-2 px-4">ERC-20</td>
                                <td className="py-2 px-4">Ethereum</td>
                                <td className="py-2 px-4">Fungible</td>
                                <td className="py-2 px-4">Basic fungible token standard on Ethereum</td>
                                <td className="py-2 px-4">Utility tokens, stablecoins</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">ERC-721</td>
                                <td className="py-2 px-4">Ethereum</td>
                                <td className="py-2 px-4">Non-fungible</td>
                                <td className="py-2 px-4">Standard for representing unique assets</td>
                                <td className="py-2 px-4">Digital art, collectibles</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">ERC-1155</td>
                                <td className="py-2 px-4">Ethereum</td>
                                <td className="py-2 px-4">Multi-token</td>
                                <td className="py-2 px-4">Combines fungible and non-fungible tokens</td>
                                <td className="py-2 px-4">Gaming assets, mixed collections</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">BEP-20</td>
                                <td className="py-2 px-4">BNB Chain</td>
                                <td className="py-2 px-4">Fungible</td>
                                <td className="py-2 px-4">Token standard for BNB Chain (similar to ERC-20)</td>
                                <td className="py-2 px-4">BNB Chain DeFi tokens</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">SPL</td>
                                <td className="py-2 px-4">Solana</td>
                                <td className="py-2 px-4">Fungible</td>
                                <td className="py-2 px-4">Solana's native token standard</td>
                                <td className="py-2 px-4">Solana ecosystem tokens</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">ERC-4626</td>
                                <td className="py-2 px-4">Ethereum</td>
                                <td className="py-2 px-4">Yield-bearing</td>
                                <td className="py-2 px-4">Standardized tokenized vaults</td>
                                <td className="py-2 px-4">DeFi yield strategies</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Token Project Evaluation Criteria</h3>
                      <p className="mb-4">
                        These key factors help assess the quality, legitimacy, and potential of cryptocurrency token projects.
                      </p>
                      <div className="bg-gray-700 p-5 rounded-lg space-y-4">
                        <div className="bg-gray-600 p-3 rounded">
                          <h4 className="font-medium text-white">Team Background & Transparency</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Identified team with verifiable track record</li>
                            <li>Relevant experience in blockchain, finance or project domain</li>
                            <li>History of successful project delivery</li>
                            <li>Public team profiles with professional histories</li>
                            <li>Red flags: Anonymous teams without justification, fake identities</li>
                          </ul>
                        </div>

                        <div className="bg-gray-600 p-3 rounded">
                          <h4 className="font-medium text-white">Tokenomics</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Clear token utility within ecosystem</li>
                            <li>Fair distribution model and vesting schedules</li>
                            <li>Reasonable total supply and inflation rate</li>
                            <li>Transparent allocation (team, investors, community, etc.)</li>
                            <li>Red flags: Extremely concentrated holdings, hidden team allocations</li>
                          </ul>
                        </div>

                        <div className="bg-gray-600 p-3 rounded">
                          <h4 className="font-medium text-white">Technical Architecture</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Open-source code with active development</li>
                            <li>Smart contract audits from reputable firms</li>
                            <li>Bug bounty programs and security measures</li>
                            <li>Scalability and interoperability considerations</li>
                            <li>Red flags: Closed source code, no audits, copied projects</li>
                          </ul>
                        </div>

                        <div className="bg-gray-600 p-3 rounded">
                          <h4 className="font-medium text-white">Roadmap & Development Activity</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Clear, realistic roadmap with measurable milestones</li>
                            <li>Consistent development activity (GitHub commits)</li>
                            <li>Meeting previously announced deadlines</li>
                            <li>Responsiveness to community feedback</li>
                            <li>Red flags: Vague roadmap, inactive repositories, missed deadlines</li>
                          </ul>
                        </div>

                        <div className="bg-gray-600 p-3 rounded">
                          <h4 className="font-medium text-white">Community & Governance</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Active, organic community engagement</li>
                            <li>Transparent communication from team</li>
                            <li>Clear governance mechanisms for protocol changes</li>
                            <li>Decentralized decision-making processes</li>
                            <li>Red flags: Manipulation of social metrics, censorship of criticism</li>
                          </ul>
                        </div>

                        <div className="bg-gray-600 p-3 rounded">
                          <h4 className="font-medium text-white">Market & Competition</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Clear problem the project is solving</li>
                            <li>Competitive advantages over similar projects</li>
                            <li>Sustainable revenue or value accrual model</li>
                            <li>Realistic market size and growth potential</li>
                            <li>Red flags: Unrealistic market claims, no differentiation</li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-3 rounded border border-red-700/50">
                          <h4 className="font-medium text-white">Warning Signs</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Promises of guaranteed returns or "risk-free" investments</li>
                            <li>Excessive focus on price rather than technology or utility</li>
                            <li>Aggressive marketing with unrealistic claims</li>
                            <li>Ponzi-like tokenomics requiring constant new buyers</li>
                            <li>Extreme complexity obscuring simple investment risks</li>
                            <li>High pressure tactics or artificial scarcity ("limited time only")</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              
              {/* DEXs & Liquidity Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'dexs-liquidity' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">DEXs & Liquidity</h2>

                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">Decentralized Exchange Evolution</h3>
                      <p className="mb-4">
                        Decentralized exchanges (DEXs) have evolved dramatically, transforming from simple swap mechanisms to sophisticated trading platforms.
                      </p>
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">DEX Evolution Timeline</h4>
                        <div className="relative">
                          <div className="absolute h-full w-0.5 bg-purple-500/30 left-2.5 top-0"></div>
                          <div className="space-y-6">
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 z-10"></div>
                              <div className="ml-4">
                                <h5 className="font-medium text-purple-300">2016-2017: First-Generation DEXs</h5>
                                <p className="text-sm mt-1">On-chain order books with limited liquidity and high gas costs. Examples: EtherDelta, IDEX.</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 z-10"></div>
                              <div className="ml-4">
                                <h5 className="font-medium text-purple-300">2018-2019: Automated Market Makers Emerge</h5>
                                <p className="text-sm mt-1">Introduction of constant product AMMs eliminating order books. Examples: Uniswap v1 & v2, Bancor.</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 z-10"></div>
                              <div className="ml-4">
                                <h5 className="font-medium text-purple-300">2020: Specialized AMMs</h5>
                                <p className="text-sm mt-1">Optimized AMMs for specific asset types. Examples: Curve (stablecoins), Balancer (weighted pools).</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 z-10"></div>
                              <div className="ml-4">
                                <h5 className="font-medium text-purple-300">2021: Capital Efficiency Innovations</h5>
                                <p className="text-sm mt-1">Concentrated liquidity and other efficiency improvements. Examples: Uniswap v3, dYdX perpetuals.</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 z-10"></div>
                              <div className="ml-4">
                                <h5 className="font-medium text-purple-300">2022: Cross-Chain & Layer 2 DEXs</h5>
                                <p className="text-sm mt-1">Expanding beyond Ethereum to multiple chains and L2s. Examples: Thorchain, dYdX on StarkEx.</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 z-10"></div>
                              <div className="ml-4">
                                <h5 className="font-medium text-purple-300">2023-2024: Hybrid Models & MEV Protection</h5>
                                <p className="text-sm mt-1">Combining AMM and order book approaches with MEV protection. Examples: CoWSwap, Hashflow.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">Automated Market Maker (AMM) Types</h3>
                      <p className="mb-4">
                        AMMs are smart contracts that enable permissionless trading without traditional order books. Different AMM designs optimize for various trading scenarios.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Constant Product AMM</h4>
                          <p className="text-sm mb-2">Uses the formula x * y = k where the product of token reserves remains constant.</p>
                          <div className="space-y-1 text-sm mb-3">
                            <div><span className="text-green-300">Pros:</span> Simple, works for any token pair</div>
                            <div><span className="text-red-300">Cons:</span> High slippage for large trades, impermanent loss</div>
                          </div>
                          <div className="text-xs bg-gray-600 p-2 rounded">
                            <span className="font-medium">Examples:</span> Uniswap v2, SushiSwap, PancakeSwap
                          </div>
                        </div>

                        <div className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Stableswap AMM</h4>
                          <p className="text-sm mb-2">Uses a modified curve optimized for assets that should trade at close to the same price.</p>
                          <div className="space-y-1 text-sm mb-3">
                            <div><span className="text-green-300">Pros:</span> Low slippage for stablecoin swaps</div>
                            <div><span className="text-red-300">Cons:</span> Only efficient for similar-valued assets</div>
                          </div>
                          <div className="text-xs bg-gray-600 p-2 rounded">
                            <span className="font-medium">Examples:</span> Curve Finance, mStable, Saddle
                          </div>
                        </div>

                        <div className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Weighted Pools</h4>
                          <p className="text-sm mb-2">Allows for multiple tokens with custom weightings in a single pool.</p>
                          <div className="space-y-1 text-sm mb-3">
                            <div><span className="text-green-300">Pros:</span> Flexible weights, supports index-like funds</div>
                            <div><span className="text-red-300">Cons:</span> More complex, higher gas costs</div>
                          </div>
                          <div className="text-xs bg-gray-600 p-2 rounded">
                            <span className="font-medium">Examples:</span> Balancer, Beethoven X
                          </div>
                        </div>

                        <div className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Concentrated Liquidity</h4>
                          <p className="text-sm mb-2">Allows liquidity providers to specify price ranges for their capital.</p>
                          <div className="space-y-1 text-sm mb-3">
                            <div><span className="text-green-300">Pros:</span> Higher capital efficiency, better rates</div>
                            <div><span className="text-red-300">Cons:</span> More complex to use, range management</div>
                          </div>
                          <div className="text-xs bg-gray-600 p-2 rounded">
                            <span className="font-medium">Examples:</span> Uniswap v3, Algebra, KyberSwap Elastic
                          </div>
                        </div>

                        <div className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Hybrid Order Book + AMM</h4>
                          <p className="text-sm mb-2">Combines off-chain order books with on-chain settlement using AMM as backup.</p>
                          <div className="space-y-1 text-sm mb-3">
                            <div><span className="text-green-300">Pros:</span> Better pricing, lower MEV exposure</div>
                            <div><span className="text-red-300">Cons:</span> More centralized components</div>
                          </div>
                          <div className="text-xs bg-gray-600 p-2 rounded">
                            <span className="font-medium">Examples:</span> dYdX, CoWSwap, Hashflow, Orderbook.io
                          </div>
                        </div>

                        <div className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Proactive Market Making</h4>
                          <p className="text-sm mb-2">Uses advanced algorithms to actively adjust pricing based on market conditions.</p>
                          <div className="space-y-1 text-sm mb-3">
                            <div><span className="text-green-300">Pros:</span> Better capital efficiency, reduced IL</div>
                            <div><span className="text-red-300">Cons:</span> More complex, often semi-centralized</div>
                          </div>
                          <div className="text-xs bg-gray-600 p-2 rounded">
                            <span className="font-medium">Examples:</span> Drift Protocol, Clipper, dAMM
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">Liquidity Provider (LP) Risks & Benefits</h3>
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-green-400 mb-3">Benefits of Providing Liquidity</h4>
                            <div className="space-y-4">
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Trading Fee Income</h5>
                                <p className="text-sm mt-1">LPs earn a portion of trading fees proportional to their share of the pool. Typically ranges from 0.01% to 1% of trade volume.</p>
                              </div>
                              
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Yield Farming Rewards</h5>
                                <p className="text-sm mt-1">Additional token incentives provided by protocols to attract liquidity. Can significantly boost returns but are typically temporary.</p>
                              </div>
                              
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Passive Income Strategy</h5>
                                <p className="text-sm mt-1">Generates income without active trading or timing the market. Can be more reliable than pure speculation.</p>
                              </div>
                              
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Protocol Governance</h5>
                                <p className="text-sm mt-1">LP positions often grant governance rights or tokens, allowing participation in protocol decisions.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-red-400 mb-3">Risks of Providing Liquidity</h4>
                            <div className="space-y-4">
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Impermanent Loss</h5>
                                <p className="text-sm mt-1">Loss compared to holding when asset prices diverge. Can be substantial in volatile pairs and often misunderstood by new LPs.</p>
                              </div>
                              
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Smart Contract Risk</h5>
                                <p className="text-sm mt-1">Vulnerability to bugs or exploits in the DEX's code. Even audited protocols can have undiscovered vulnerabilities.</p>
                              </div>
                              
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Token/Protocol Risk</h5>
                                <p className="text-sm mt-1">Exposure to potential failures or devaluations of the underlying tokens or protocols.</p>
                              </div>
                              
                              <div className="bg-gray-600 p-3 rounded">
                                <h5 className="font-medium">Gas Costs & Complexity</h5>
                                <p className="text-sm mt-1">Managing LP positions includes deposit, withdrawal, and management fees. Complex strategies can have high operational overhead.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-5 bg-gray-600 p-4 rounded">
                          <h4 className="font-medium text-white mb-2">Impermanent Loss Explained</h4>
                          <p className="text-sm mb-3">
                            Impermanent Loss (IL) is the difference in value between holding assets in an AMM pool versus holding them separately. It occurs when asset prices change relative to each other.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-medium text-yellow-300 mb-1">IL Impact by Price Change</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>1.25x price change: ~0.6% loss</li>
                                <li>1.5x price change: ~2% loss</li>
                                <li>2x price change: ~5.7% loss</li>
                                <li>3x price change: ~13.4% loss</li>
                                <li>4x price change: ~20% loss</li>
                                <li>5x price change: ~25.5% loss</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-yellow-300 mb-1">Risk Mitigation Strategies</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Provide to stable pairs (lower IL risk)</li>
                                <li>Use concentrated liquidity in narrow ranges</li>
                                <li>Utilize IL hedging protocols</li>
                                <li>Factor trading fees and incentives into calculations</li>
                                <li>Set stop-loss thresholds for removing liquidity</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">DEX Innovations & Future Trends</h3>
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <div className="space-y-4">
                          <div className="bg-gray-600 p-4 rounded">
                            <h4 className="font-medium text-white mb-2">Multiple Pool Types & Strategies</h4>
                            <p className="text-sm">
                              Modern DEXs now support various pool types on the same platform, allowing traders to access optimal execution for different asset types. Examples include Maverick Protocol with multiple pool designs and Curve v2 with dynamic fees.
                            </p>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded">
                            <h4 className="font-medium text-white mb-2">Single-Sided Liquidity</h4>
                            <p className="text-sm">
                              Protocols allowing liquidity provision in just one asset, eliminating the need for paired deposits and reducing impermanent loss. Examples include Tokemak, Gamma Strategies, and various lending protocols that support LP token collateralization.
                            </p>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded">
                            <h4 className="font-medium text-white mb-2">MEV Protection Mechanisms</h4>
                            <p className="text-sm">
                              Tools to protect users from Maximal Extractable Value (frontrunning, sandwiching, etc.). These include batch auctions (CoWSwap), private RPC networks (Eden Network), and intent-based trading (UniswapX).
                            </p>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded">
                            <h4 className="font-medium text-white mb-2">Cross-Chain Liquidity</h4>
                            <p className="text-sm">
                              Solutions for trading assets across different blockchains without wrapped tokens or centralized bridges. Examples include LayerZero integrated DEXs, Thorchain, and Symbiosis Finance.
                            </p>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded">
                            <h4 className="font-medium text-white mb-2">Liquidity as a Service (LaaS)</h4>
                            <p className="text-sm">
                              Professional liquidity management services that optimize positions for projects and token holders. Examples include Arrakis Finance, Charm Finance, and Primitive Finance.
                            </p>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded">
                            <h4 className="font-medium text-white mb-2">Real-World Asset (RWA) Integration</h4>
                            <p className="text-sm">
                              DEXs specializing in tokenized real-world assets like bonds, real estate, and commodities. These require specific designs for less liquid markets with different pricing models.
                            </p>
                          </div>
                          
                          <div className="bg-purple-900/30 p-4 rounded border border-purple-700/50">
                            <h4 className="font-medium text-white mb-2">Emerging Future Trends</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                              <div>
                                <h5 className="font-medium text-purple-300">Intent-Based Trading</h5>
                                <p>Users specify desired outcomes rather than exact routes, allowing more efficient execution across fragmented liquidity.</p>
                              </div>
                              
                              <div>
                                <h5 className="font-medium text-purple-300">AI-Powered Liquidity</h5>
                                <p>Machine learning algorithms that optimize liquidity positions based on historical data and market patterns.</p>
                              </div>
                              
                              <div>
                                <h5 className="font-medium text-purple-300">Zero-Knowledge Proofs</h5>
                                <p>Privacy-preserving trading with ZK-proofs enabling confidential transactions while maintaining security.</p>
                              </div>
                              
                              <div>
                                <h5 className="font-medium text-purple-300">Decentralized Liquidity Aggregation</h5>
                                <p>Meta-protocols that automatically distribute liquidity across multiple DEXs for optimal capital efficiency.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              
              {/* Token Launches & Markets Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'token-launches' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">Token Launches & Markets</h2>

                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-amber-400 mb-3">Token Launch Mechanisms</h3>
                      <p className="mb-4">
                        Projects use various token distribution methods to achieve different objectives in terms of fairness, capital raising, and token distribution.
                      </p>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Common Launch Mechanisms</h4>
                        <div className="space-y-4">
                          {fairLaunchPlatforms.map((platform, index) => (
                            <div key={index} className="bg-gray-600 p-4 rounded-lg">
                              <h5 className="font-medium text-amber-300">{platform.name}</h5>
                              <p className="text-sm mt-1 mb-2">{platform.description}</p>
                              
                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <h6 className="text-xs font-medium text-white mb-1">Examples:</h6>
                                  <div className="flex flex-wrap gap-2">
                                    {platform.examples.map((example, i) => (
                                      <span key={i} className="bg-amber-900/30 text-xs py-1 px-2 rounded">{example}</span>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <div>
                                    <h6 className="text-xs font-medium text-green-400 mb-1">Advantages</h6>
                                    <ul className="list-disc pl-5 text-xs space-y-1">
                                      {platform.pros.map((pro, i) => (
                                        <li key={i}>{pro}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h6 className="text-xs font-medium text-red-400 mb-1">Limitations</h6>
                                    <ul className="list-disc pl-5 text-xs space-y-1">
                                      {platform.cons.map((con, i) => (
                                        <li key={i}>{con}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-amber-400 mb-3">Bonding Curves & Tokenomics</h3>
                      <p className="mb-4">
                        Bonding curves are mathematical formulas that determine how token price relates to supply, creating different incentive structures and growth models.
                      </p>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Bonding Curve Types</h4>
                        <div className="space-y-4">
                          {bondingCurveTypes.map((curve, index) => (
                            <div key={index} className="bg-gray-600 p-4 rounded-lg">
                              <div className="flex justify-between items-start">
                                <h5 className="font-medium text-amber-300">{curve.type}</h5>
                                <span className="bg-gray-700 text-xs py-1 px-2 rounded font-mono">{curve.formula}</span>
                              </div>
                              
                              <p className="text-sm mt-2 mb-3">{curve.description}</p>
                              
                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <h6 className="text-xs font-medium text-green-400 mb-1">Applications</h6>
                                  <ul className="list-disc pl-5 text-xs space-y-1">
                                    {curve.applications.map((app, i) => (
                                      <li key={i}>{app}</li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h6 className="text-xs font-medium text-red-400 mb-1">Limitations</h6>
                                  <ul className="list-disc pl-5 text-xs space-y-1">
                                    {curve.limitations.map((limitation, i) => (
                                      <li key={i}>{limitation}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-amber-400 mb-3">NFT Marketplaces & Ecosystem</h3>
                      <p className="mb-4">
                        Non-fungible token (NFT) marketplaces have evolved to serve different segments of the digital asset ecosystem.
                      </p>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">NFT Marketplace Types</h4>
                        <div className="space-y-4">
                          {nftMarketplaces.map((market, index) => (
                            <div key={index} className="bg-gray-600 p-4 rounded-lg">
                              <h5 className="font-medium text-amber-300">{market.name}</h5>
                              
                              <div className="mt-2 mb-3">
                                <h6 className="text-xs font-medium text-white mb-1">Examples:</h6>
                                <div className="flex flex-wrap gap-2">
                                  {market.examples.map((example, i) => (
                                    <span key={i} className="bg-amber-900/30 text-xs py-1 px-2 rounded">{example}</span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="grid md:grid-cols-3 gap-3 text-sm">
                                <div>
                                  <h6 className="text-xs font-medium text-blue-400 mb-1">Key Features</h6>
                                  <ul className="list-disc pl-5 text-xs space-y-1">
                                    {market.features.map((feature, i) => (
                                      <li key={i}>{feature}</li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h6 className="text-xs font-medium text-green-400 mb-1">Advantages</h6>
                                  <ul className="list-disc pl-5 text-xs space-y-1">
                                    {market.advantages.map((advantage, i) => (
                                      <li key={i}>{advantage}</li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h6 className="text-xs font-medium text-red-400 mb-1">Challenges</h6>
                                  <ul className="list-disc pl-5 text-xs space-y-1">
                                    {market.challenges.map((challenge, i) => (
                                      <li key={i}>{challenge}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Challenges in the Current Token Launch Landscape</h3>
                    <div className="space-y-4">
                      {launchProblems.map((problem, index) => (
                        <div key={index} className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-red-400 mb-2">{problem.problem}</h4>
                          <p className="mb-3">{problem.description}</p>
                          
                          <div className="bg-gray-600 p-3 rounded-lg mb-3">
                            <h5 className="text-sm font-medium text-white mb-1">Examples</h5>
                            <ul className="list-disc pl-5 text-xs space-y-1">
                              {problem.examples.map((example, i) => (
                                <li key={i}>{example}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-red-900/30 p-3 rounded-lg border border-red-800/50">
                            <h5 className="text-sm font-medium text-white mb-1">Impact</h5>
                            <p className="text-xs">{problem.impact}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Proposed Solutions & Best Practices</h3>
                    <div className="space-y-4">
                      {launchSolutions.map((solution, index) => (
                        <div key={index} className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">{solution.solution}</h4>
                          <p className="mb-3">{solution.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-600 p-3 rounded-lg">
                              <h5 className="text-sm font-medium text-white mb-1">Implementation Approaches</h5>
                              <ul className="list-disc pl-5 text-xs space-y-1">
                                {solution.implementation.map((approach, i) => (
                                  <li key={i}>{approach}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="bg-green-900/30 p-3 rounded-lg border border-green-800/50">
                              <h5 className="text-sm font-medium text-white mb-1">Potential Benefits</h5>
                              <p className="text-xs">{solution.benefits}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabLayout>
          </div>
        </div>
      </div>
    </>
  )
} 