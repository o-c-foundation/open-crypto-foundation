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
      name: "Contract Analysis",
      icon: <FaFileContract className="text-primary" />,
      description: "Analyze smart contracts for security vulnerabilities, backdoors, and suspicious code.",
      tools: [
        {
          name: "Contract Scanner",
          description: "Scan smart contracts for common vulnerabilities and suspicious functionality",
          url: "/tools/contract-scanner",
          isInternal: true
        },
        {
          name: "Etherscan",
          description: "Official blockchain explorer for reading and verifying contract code",
          url: "https://etherscan.io",
          isInternal: false
        },
        {
          name: "Token Sniffer",
          description: "Analyzes tokens for honeypot characteristics and scam indicators",
          url: "https://tokensniffer.com",
          isInternal: false
        },
        {
          name: "Solidity Visual Developer",
          description: "Visual security analysis for Solidity contracts",
          url: "https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-visual-auditor",
          isInternal: false
        }
      ]
    },
    {
      name: "Token Investigation",
      icon: <FaSearchDollar className="text-primary" />,
      description: "Research tokens and their distribution patterns, liquidity, and other risk factors.",
      tools: [
        {
          name: "Token Analyzer",
          description: "Analyze token distribution, risks, and potential red flags",
          url: "/tools/token-analyzer",
          isInternal: true
        },
        {
          name: "DEXTools",
          description: "Token analytics, trading charts, and liquidity tracking",
          url: "https://www.dextools.io",
          isInternal: false
        },
        {
          name: "CoinGecko",
          description: "Comprehensive cryptocurrency database and analytics",
          url: "https://www.coingecko.com",
          isInternal: false
        },
        {
          name: "DexScreener",
          description: "Multi-chain DEX trading charts and token info",
          url: "https://dexscreener.com",
          isInternal: false
        }
      ]
    },
    {
      name: "Risk Assessment",
      icon: <FaExclamationTriangle className="text-primary" />,
      description: "Evaluate the overall risk profile of projects and investments.",
      tools: [
        {
          name: "Risk Calculator",
          description: "Calculate the risk score of a project based on multiple factors",
          url: "/tools/risk-calculator",
          isInternal: true
        },
        {
          name: "DefiLlama",
          description: "DeFi TVL rankings and analytics",
          url: "https://defillama.com",
          isInternal: false
        },
        {
          name: "CertiK Alert",
          description: "Real-time blockchain security alerts and incident tracker",
          url: "https://www.certik.com/leaderboard",
          isInternal: false
        },
        {
          name: "Web3 Rekt Database",
          description: "Historical database of cryptocurrency hacks and exploits",
          url: "https://rekt.news/leaderboard",
          isInternal: false
        }
      ]
    },
    {
      name: "Wallet & Transaction Safety",
      icon: <FaUserShield className="text-primary" />,
      description: "Secure your wallet and analyze transactions for safety.",
      tools: [
        {
          name: "Permission Checker",
          description: "Check and revoke contract permissions for your wallet",
          url: "https://revoke.cash",
          isInternal: false
        },
        {
          name: "Transaction Simulator",
          description: "Simulate transactions before sending to verify outcome",
          url: "https://tenderly.co",
          isInternal: false
        },
        {
          name: "Gas Tracker",
          description: "Optimize gas fees for different transaction speeds",
          url: "https://etherscan.io/gastracker",
          isInternal: false
        }
      ]
    },
    {
      name: "Monitoring Tools",
      icon: <FaChartLine className="text-primary" />,
      description: "Track and monitor your portfolio, gas prices, and market changes.",
      tools: [
        {
          name: "Portfolio Tracker",
          description: "Track your crypto portfolio across multiple chains",
          url: "https://zapper.fi",
          isInternal: false
        },
        {
          name: "DeBank",
          description: "Portfolio dashboard and DeFi analytics",
          url: "https://debank.com",
          isInternal: false
        },
        {
          name: "Nansen",
          description: "On-chain analytics platform tracking smart money movement",
          url: "https://www.nansen.ai",
          isInternal: false
        },
        {
          name: "Whale Alert",
          description: "Track large cryptocurrency transactions",
          url: "https://whale-alert.io",
          isInternal: false
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>DeFi Safety Tools | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="A curated directory of essential tools to help you navigate DeFi safely - contract scanners, risk assessors, wallet protectors, and more." 
        />
      </Head>
      
      <section className="pt-10 pb-16 bg-dark text-white border-b border-dark-light/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FaTools className="text-4xl mr-3 text-primary" />
              <h1 className="text-4xl font-bold">DeFi Safety Tools</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              A curated collection of essential tools to help you navigate the DeFi ecosystem safely and confidently.
            </p>
            <div className="p-6 bg-dark-card rounded-lg border border-dark-light/30 text-left">
              <h2 className="text-xl font-bold mb-3 flex items-center text-white">
                <FaShieldAlt className="text-primary mr-2" /> How to Use This Directory
              </h2>
              <p className="mb-4 text-gray-300">
                We've carefully selected and reviewed these tools to help you protect yourself in the DeFi ecosystem. 
                Each tool addresses a specific aspect of crypto safety and can be used as part of a comprehensive 
                security strategy.
              </p>
              <div className="flex items-start space-x-2 text-gray-300">
                <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                <p>
                  <strong className="text-white">Tools with the</strong> <FaExternalLinkAlt className="inline text-xs" /> <strong className="text-white">icon</strong> link to external services we recommend but don't operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-dark">
        <div className="container px-4 mx-auto">
          {toolCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center mb-6">
                <div className="mr-3 text-2xl">
                  {React.cloneElement(category.icon, { className: "text-primary" })}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              </div>
              <p className="text-gray-300 mb-6 max-w-4xl">
                {category.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-dark-card border border-dark-light/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    {tool.isInternal ? (
                      <Link href={tool.url} className="block p-6">
                        <h3 className="text-lg font-bold mb-2 text-white">{tool.name}</h3>
                        <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                        <div className="flex items-center text-primary text-sm">
                          <FaLink className="mr-2" />
                          <span>Open tool</span>
                        </div>
                      </Link>
                    ) : (
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block p-6">
                        <h3 className="text-lg font-bold mb-2 flex items-center text-white">
                          {tool.name} 
                          <FaExternalLinkAlt className="ml-2 text-xs text-gray-400" />
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                        <div className="flex items-center text-primary text-sm">
                          <FaExternalLinkAlt className="mr-2" />
                          <span>Visit site</span>
                        </div>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="max-w-4xl mx-auto mt-12 p-6 bg-primary/10 rounded-lg border border-primary/30">
            <h2 className="text-xl font-bold mb-4 text-white flex items-center">
              <FaShieldAlt className="text-primary mr-2" /> Best Practices for Safe DeFi Navigation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Before Using Any DeFi Service</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Verify contracts on block explorers</li>
                  <li>Check official links through multiple sources</li>
                  <li>Research the team and project history</li>
                  <li>Use a dedicated wallet with limited funds</li>
                  <li>Simulate transactions before confirming</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Regular Security Maintenance</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Review and revoke unused token approvals</li>
                  <li>Monitor your wallet for suspicious activities</li>
                  <li>Keep your device software updated</li>
                  <li>Use hardware wallets for significant holdings</li>
                  <li>Never share your private keys or seed phrases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 