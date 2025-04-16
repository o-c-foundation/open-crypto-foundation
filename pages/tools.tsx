import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  FaTools, 
  FaShieldAlt, 
  FaSearchDollar, 
  FaChartLine, 
  FaExclamationTriangle,
  FaFileContract,
  FaChartPie,
  FaUserShield,
  FaExchangeAlt,
  FaCheck,
  FaLink,
  FaExternalLinkAlt
} from 'react-icons/fa'

export default function ToolsPage() {
  // Tool categories with their respective tools
  const toolCategories = [
    {
      name: "Smart Contract Analysis",
      icon: <FaFileContract className="text-primary" />,
      description: "Analyze blockchain smart contracts for security vulnerabilities, backdoors, and suspicious code patterns.",
      tools: [
        {
          name: "Contract Scanner",
          description: "Scan Ethereum and Solana smart contracts for common vulnerabilities and suspicious functionality",
          url: "/tools/contract-scanner",
          isInternal: true
        },
        {
          name: "Etherscan",
          description: "Official Ethereum blockchain explorer for reading and verifying contract code",
          url: "https://etherscan.io",
          isInternal: false
        },
        {
          name: "Token Sniffer",
          description: "Analyzes cryptocurrency tokens for honeypot characteristics and scam indicators",
          url: "https://tokensniffer.com",
          isInternal: false
        },
        {
          name: "Solidity Visual Developer",
          description: "Visual security analysis for Solidity smart contracts on EVM blockchains",
          url: "https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-visual-auditor",
          isInternal: false
        }
      ]
    },
    {
      name: "Cryptocurrency Token Investigation",
      icon: <FaSearchDollar className="text-primary" />,
      description: "Research digital assets and their distribution patterns, liquidity pools, and other crypto risk factors.",
      tools: [
        {
          name: "Token Analyzer",
          description: "Analyze token distribution, tokenomics risks, and potential crypto red flags",
          url: "/tools/token-analyzer",
          isInternal: true
        },
        {
          name: "DEXTools",
          description: "Cryptocurrency analytics, trading charts, and decentralized liquidity tracking",
          url: "https://www.dextools.io",
          isInternal: false
        },
        {
          name: "CoinGecko",
          description: "Comprehensive cryptocurrency market database and digital asset analytics",
          url: "https://www.coingecko.com",
          isInternal: false
        },
        {
          name: "DexScreener",
          description: "Multi-chain DEX trading charts and blockchain token information",
          url: "https://dexscreener.com",
          isInternal: false
        }
      ]
    },
    {
      name: "Blockchain Risk Assessment",
      icon: <FaExclamationTriangle className="text-primary" />,
      description: "Evaluate the overall risk profile of crypto projects and DeFi investment opportunities.",
      tools: [
        {
          name: "Risk Calculator",
          description: "Calculate the risk score of a blockchain project based on multiple security factors",
          url: "/tools/risk-calculator",
          isInternal: true
        },
        {
          name: "DefiLlama",
          description: "DeFi TVL rankings and decentralized finance protocol analytics",
          url: "https://defillama.com",
          isInternal: false
        },
        {
          name: "CertiK Alert",
          description: "Real-time blockchain security alerts and cryptocurrency incident tracker",
          url: "https://www.certik.com/leaderboard",
          isInternal: false
        },
        {
          name: "Web3 Rekt Database",
          description: "Historical database of cryptocurrency hacks, DeFi exploits, and blockchain vulnerabilities",
          url: "https://rekt.news/leaderboard",
          isInternal: false
        }
      ]
    },
    {
      name: "Crypto Wallet & Transaction Safety",
      icon: <FaUserShield className="text-primary" />,
      description: "Secure your cryptocurrency wallet and analyze blockchain transactions for security threats.",
      tools: [
        {
          name: "Permission Checker",
          description: "Check and revoke smart contract permissions for your crypto wallet addresses",
          url: "https://revoke.cash",
          isInternal: false
        },
        {
          name: "Transaction Simulator",
          description: "Simulate blockchain transactions before sending to verify outcome and prevent scams",
          url: "https://tenderly.co",
          isInternal: false
        },
        {
          name: "Gas Tracker",
          description: "Optimize gas fees for different Ethereum transaction speeds and EVM networks",
          url: "https://etherscan.io/gastracker",
          isInternal: false
        }
      ]
    },
    {
      name: "DeFi Monitoring Tools",
      icon: <FaChartLine className="text-primary" />,
      description: "Track and monitor your crypto portfolio, gas prices, and digital asset market changes.",
      tools: [
        {
          name: "Portfolio Tracker",
          description: "Track your cryptocurrency portfolio across multiple blockchain networks",
          url: "https://zapper.fi",
          isInternal: false
        },
        {
          name: "DeBank",
          description: "DeFi portfolio dashboard and decentralized finance analytics platform",
          url: "https://debank.com",
          isInternal: false
        },
        {
          name: "Nansen",
          description: "On-chain analytics platform tracking crypto smart money movement and trends",
          url: "https://www.nansen.ai",
          isInternal: false
        },
        {
          name: "Whale Alert",
          description: "Track large cryptocurrency transactions and blockchain whale movements",
          url: "https://whale-alert.io",
          isInternal: false
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Crypto Security & DeFi Safety Tools | Blockchain Analytics | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Comprehensive directory of cryptocurrency security tools to navigate DeFi safely - smart contract analyzers, blockchain analytics, wallet protection, and crypto risk assessment platforms for digital asset security." 
        />
        <meta 
          name="keywords" 
          content="cryptocurrency security, blockchain tools, DeFi safety, smart contract analysis, crypto wallet protection, token analytics, blockchain explorer, crypto risk assessment, digital asset security, decentralized finance tools" 
        />
      </Head>
      
      <section className="pt-10 pb-16 bg-dark text-white border-b border-dark-light/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FaTools className="text-4xl mr-3 text-primary" />
              <h1 className="text-4xl font-bold">Cryptocurrency & DeFi Security Tools</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              A curated collection of essential blockchain tools to help you navigate the cryptocurrency and DeFi ecosystem safely and make informed digital asset investment decisions.
            </p>
            <div className="p-6 bg-dark-card rounded-lg border border-dark-light/30 text-left">
              <h2 className="text-xl font-bold mb-3 flex items-center text-white">
                <FaShieldAlt className="text-primary mr-2" /> How to Protect Your Crypto Investments
              </h2>
              <p className="mb-4 text-gray-300">
                We've carefully selected and reviewed these blockchain security tools to help you protect your cryptocurrency assets in the DeFi ecosystem. 
                Each tool addresses a specific aspect of digital asset safety and can be used as part of a comprehensive 
                security strategy for your crypto portfolio.
              </p>
              <p className="text-gray-300">
                For maximum protection, we recommend using multiple tools across different categories before interacting with any new smart contract or cryptocurrency token.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-dark">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Essential Blockchain Security Toolkit</h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Tool Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {toolCategories.map((category, index) => (
                <div key={index} className="bg-dark-card rounded-xl border border-dark-light/30 p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-dark-elevated p-3 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mt-6">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-start">
                        <div className="mr-3 mt-1">
                          <FaCheck className="text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center flex-wrap">
                            <h4 className="font-semibold text-white mr-2">{tool.name}</h4>
                            {/* Tool link with appropriate styling based on internal/external */}
                            {tool.isInternal ? (
                              <Link href={tool.url} className="inline-flex items-center text-primary hover:text-primary-light text-sm">
                                <FaLink className="mr-1" size={12} /> OCF Tool
                              </Link>
                            ) : (
                              <a 
                                href={tool.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gray-500 hover:text-gray-300 text-sm"
                              >
                                <FaExternalLinkAlt className="mr-1" size={10} /> External
                              </a>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">{tool.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Building a Safer Cryptocurrency Ecosystem</h3>
              <p className="text-gray-400 mb-8">
                The Open Crypto Foundation is committed to developing and promoting tools that make the blockchain space safer for everyone. 
                We're continuously expanding our catalog of DeFi security resources and building proprietary crypto protection tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200">
                  Explore Our Security Services
                </Link>
                <Link href="/report-scam" className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-200">
                  Report a Crypto Scam
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 