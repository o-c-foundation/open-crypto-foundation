import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaExclamationTriangle, FaChartLine, FaBook, FaShieldAlt, FaFileAlt, FaBalanceScale } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

export default function TraderResources() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Trader Resources | Open Crypto Foundation</title>
        <meta name="description" content="Resources and safety guidelines for cryptocurrency traders and investors" />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-0">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Trader Resources</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential resources for cryptocurrency traders to navigate safely in a complex and often deceptive market.
            </p>
          </div>

          {/* Disclaimer Banner */}
          <div className="max-w-4xl mx-auto mb-16 bg-red-900 bg-opacity-30 border border-red-500 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start">
                <FaExclamationTriangle className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Reality Check: The Hard Truth About Crypto Trading</h2>
                  <div className="prose prose-lg text-gray-300 max-w-none">
                    <p className="mb-4">
                      In the current speculative cryptocurrency environment, trading is essentially a <strong className="text-red-400">zero-sum game</strong> where for every winner, there must be a loser. The market is dominated by useless meme tokens and projects with little to no fundamental value or utility.
                    </p>
                    <p className="mb-4">
                      As traders, we must acknowledge our role in perpetuating this cycle. By chasing quick profits and engaging in speculative trading of unproven assets, we collectively fuel the hype that incentivizes bad actors to create exploitative schemes.
                    </p>
                    <p className="mb-4">
                      The reckless risk-taking and "get-rich-quick" mentality prevalent in crypto trading communities directly contribute to an environment where scams thrive. When we invest without due diligence, we become unwitting participants in legitimizing projects designed to extract value from less informed participants.
                    </p>
                    <p className="font-semibold text-white">
                      This page exists to help traders break this cycle by providing education, tools, and resources that promote responsible trading practices and protect the broader ecosystem from harmful actors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Trading Safely in Cryptocurrency Markets</h2>
              
              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-4">
                    <FaBalanceScale className="text-purple-400 mr-3" size={22} />
                    <h3 className="text-xl font-semibold text-white">Responsible Trading Practices</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Trading cryptocurrencies can be profitable when approached with discipline, risk management, and proper research. The following principles can help you trade more responsibly:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Only trade with capital you can afford to lose completely</li>
                    <li>Conduct thorough research before investing in any project</li>
                    <li>Verify the team, code, tokenomics, and use case of every project</li>
                    <li>Maintain realistic expectations about returns and timeline</li>
                    <li>Develop a clear strategy with defined entry and exit points</li>
                    <li>Never chase losses or trade based on FOMO (Fear Of Missing Out)</li>
                    <li>Recognize that most traders lose money in the long run</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-purple-400 mr-3" size={22} />
                    <h3 className="text-xl font-semibold text-white">Protecting Yourself from Scams</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The cryptocurrency space is rife with scams, rug pulls, and exploitative projects. Here's how to protect yourself:
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-gray-700 p-5 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Red Flags to Watch For</h4>
                      <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                        <li>Anonymous teams without verifiable backgrounds</li>
                        <li>Excessive promises of returns or guaranteed profits</li>
                        <li>Heavy focus on price and "tokenomics" over utility</li>
                        <li>Excessive marketing with little substance</li>
                        <li>Limited or locked liquidity pools</li>
                        <li>Centralized token distribution</li>
                        <li>Unaudited or closed-source contracts</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 p-5 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Safety Measures</h4>
                      <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                        <li>Use our <Link href="/tools/contract-scanner" className="text-purple-400 hover:underline">Contract Scanner</Link> before investing</li>
                        <li>Check contracts on block explorers and audit platforms</li>
                        <li>Verify liquidity is sufficient and locked</li>
                        <li>Research the team's background and previous projects</li>
                        <li>Join community channels to assess project legitimacy</li>
                        <li>Use hardware wallets for larger holdings</li>
                        <li>Regularly revoke unnecessary contract approvals</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-purple-400 mr-3" size={22} />
                    <h3 className="text-xl font-semibold text-white">Market Analysis Resources</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    While we emphasize safety and fundamentals, we recognize that technical and market analysis are important skills for traders. These resources can help you develop a more informed approach:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Link href="#" className="bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-colors">
                      <h4 className="font-semibold text-white mb-1">Technical Analysis Basics</h4>
                      <p className="text-gray-300 text-sm">Learn fundamental chart patterns and indicators that can help identify potential market movements</p>
                    </Link>
                    <Link href="#" className="bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-colors">
                      <h4 className="font-semibold text-white mb-1">On-Chain Analysis Guide</h4>
                      <p className="text-gray-300 text-sm">Understand how to interpret blockchain data to gain insights beyond traditional price charts</p>
                    </Link>
                    <Link href="#" className="bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-colors">
                      <h4 className="font-semibold text-white mb-1">Risk Management Strategies</h4>
                      <p className="text-gray-300 text-sm">Practical approaches to position sizing, stop losses, and portfolio diversification</p>
                    </Link>
                    <Link href="#" className="bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-colors">
                      <h4 className="font-semibold text-white mb-1">Fundamental Analysis</h4>
                      <p className="text-gray-300 text-sm">How to evaluate projects based on technology, team, tokenomics, and real-world utility</p>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <FaBook className="text-purple-400 mr-3" size={22} />
                    <h3 className="text-xl font-semibold text-white">Educational Resources</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Continuous education is essential for surviving and thriving in cryptocurrency markets. These resources can help you develop a deeper understanding of the space:
                  </p>
                  <div className="space-y-4">
                    <Link href="#" className="block bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-colors">
                      <h4 className="font-semibold text-white mb-1">Cryptocurrency Trading Psychology</h4>
                      <p className="text-gray-300 text-sm">Understanding emotional biases and developing mental discipline for better trading decisions</p>
                    </Link>
                    <Link href="#" className="block bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-colors">
                      <h4 className="font-semibold text-white mb-1">DeFi Mechanisms and Risks</h4>
                      <p className="text-gray-300 text-sm">Learn how various DeFi protocols work and the unique risks associated with each type</p>
                    </Link>
                    <Link href="#" className="block bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-colors">
                      <h4 className="font-semibold text-white mb-1">Market Cycles and Macro Analysis</h4>
                      <p className="text-gray-300 text-sm">Historical patterns in crypto markets and how they relate to broader economic cycles</p>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <FaFileAlt className="text-purple-400 mr-3" size={22} />
                    <h3 className="text-xl font-semibold text-white">Trading Tools and Resources</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    These tools can help you make more informed trading decisions and manage risk more effectively:
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors flex flex-col justify-between h-full">
                      <h4 className="font-semibold text-white mb-1">TradingView</h4>
                      <p className="text-gray-300 text-sm">Advanced charting platform with scripts and indicators</p>
                    </a>
                    <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors flex flex-col justify-between h-full">
                      <h4 className="font-semibold text-white mb-1">CoinGecko</h4>
                      <p className="text-gray-300 text-sm">Comprehensive cryptocurrency data and information</p>
                    </a>
                    <a href="https://www.binance.com/en/futures-activity/leaderboard" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors flex flex-col justify-between h-full">
                      <h4 className="font-semibold text-white mb-1">Binance Leaderboards</h4>
                      <p className="text-gray-300 text-sm">Track and learn from profitable traders</p>
                    </a>
                    <a href="https://glassnode.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors flex flex-col justify-between h-full">
                      <h4 className="font-semibold text-white mb-1">Glassnode</h4>
                      <p className="text-gray-300 text-sm">On-chain metrics and market intelligence</p>
                    </a>
                    <a href="https://defillama.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors flex flex-col justify-between h-full">
                      <h4 className="font-semibold text-white mb-1">DefiLlama</h4>
                      <p className="text-gray-300 text-sm">DeFi TVL and protocol analytics dashboard</p>
                    </a>
                    <Link href="/tools/risk-calculator" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors flex flex-col justify-between h-full">
                      <h4 className="font-semibold text-white mb-1">OCF Risk Calculator</h4>
                      <p className="text-gray-300 text-sm">Assess the risk level of potential investments</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="max-w-4xl mx-auto text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Start Trading Responsibly</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Remember that your actions as a trader impact the broader ecosystem. By trading responsibly, you can help create a healthier market for everyone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/tools/contract-scanner" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Scan a Contract
              </Link>
              <Link 
                href="/resources/scam-database" 
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
              >
                Check Scam Database
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 