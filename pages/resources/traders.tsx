import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaExclamationTriangle, FaChartLine, FaBook, FaShieldAlt, FaFileAlt, FaBalanceScale, FaSkull, FaRocket, FaTractor, FaLock } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Scam types data
const scamTypes = [
  {
    id: 'rug-pull',
    name: 'Rug Pull',
    icon: <FaSkull className="text-red-500" size={24} />,
    description: 'A rug pull occurs when the project developers/insiders hold a significant portion of the token supply, build up hype, and then suddenly sell (dump) all their holdings, causing the token price to crash to near zero.',
    details: [
      'Developers create a token and pair it with a valuable cryptocurrency (like ETH or BNB) in a liquidity pool',
      'They market the project aggressively, promising incredible returns or utility',
      'Once sufficient liquidity has been added by investors, developers withdraw all liquidity and disappear',
      'Investors are left with worthless tokens that cannot be sold'
    ],
    warning_signs: [
      'Anonymous team with no verifiable history or credentials',
      'Contract is not verified on blockchain explorers like Etherscan',
      'Team owns a large percentage of the total token supply (> 20%)',
      'Liquidity is not locked or is only locked for a short period',
      'Ownership of the contract is not renounced (allowing developers to modify functions)',
      'Suspiciously fast growth in value without corresponding development milestones'
    ],
    prevention: [
      'Check token distribution - highly concentrated ownership is a red flag',
      'Verify that liquidity is locked for an extended period (years, not months)',
      'Research the team thoroughly - look for real identities with verifiable track records',
      'Use tools like Token Sniffer or our Contract Scanner to check for malicious functions',
      'Be skeptical of projects with extremely high promised returns'
    ],
    image: '/images/scams/rug-pull/diagram.jpg',
    examples: [
      'SQUID token (2021): Inspired by Netflix show "Squid Game", raised millions before developers disappeared with an estimated $3.38 million',
      'Luna Yield (2021): DeFi project on Solana that vanished with over $10 million in investor funds',
      'Thodex (2021): Turkish exchange whose CEO disappeared with $2 billion in investor assets'
    ]
  },
  {
    id: 'pump-and-dump',
    name: 'Pump and Dump',
    icon: <FaRocket className="text-orange-500" size={24} />,
    description: 'A coordinated effort to artificially inflate a token\'s price (pump) through misleading statements, celebrity endorsements, or false news, followed by selling off holdings (dump) once prices rise sufficiently.',
    details: [
      'Organizers accumulate a large position in a low-cap, illiquid cryptocurrency at low prices',
      'They spread misleading positive information through social media, paid promotions, or influencer endorsements',
      'When enough unsuspecting investors buy in and drive the price up, organizers sell their entire position',
      'The token price crashes, leaving new investors with significant losses'
    ],
    warning_signs: [
      'Sudden price increases without substantial news or development updates',
      'Coordinated promotion by multiple influencers simultaneously',
      'Celebrity endorsements, especially from those not typically involved in cryptocurrency',
      'Excessive hype on social media with little substance about actual utility',
      'Unrealistic price predictions in a short timeframe',
      'Heavy emphasis on "buying now before it\'s too late"'
    ],
    prevention: [
      'Be skeptical of projects heavily promoted by influencers, especially if they\'re paid to promote',
      'Research the token\'s fundamentals rather than making decisions based on FOMO',
      'Check trading volume - artificially pumped coins often have unusual volume patterns',
      'Avoid buying into sudden price spikes without clear catalysts',
      'Look for evidence of long-term development and real use cases'
    ],
    image: '/images/scams/pump-and-dump/chart.jpg',
    examples: [
      'SaveTheKids token (2021): Promoted by several social media influencers before crashing',
      'Multiple coins endorsed by celebrities like Kim Kardashian (EthereumMax) and Floyd Mayweather',
      'Countless small-cap altcoins promoted through coordinated Telegram and Discord groups'
    ]
  },
  {
    id: 'farming',
    name: 'Farming (Cyclic Pump and Dump)',
    icon: <FaTractor className="text-green-500" size={24} />,
    description: 'A sophisticated manipulation technique where scammers repeatedly cycle a token through artificial pumps and dumps, extracting value from investors at each cycle while creating the illusion of a volatile but recovering asset.',
    details: [
      'Scammers establish positions in a relatively unknown token',
      'They artificially pump the price to attract attention and new investors',
      'After reaching a target price, they sell a portion of their holdings, causing a significant dip',
      'This creates panic selling among investors, driving the price down further',
      'Scammers then rebuy at the bottom and repeat the cycle multiple times',
      'Each cycle extracts value from new investors while maintaining the appearance of a legitimate but volatile token'
    ],
    warning_signs: [
      'Repetitive price patterns that show sharp rises followed by steep drops',
      'Recovery phases that never quite reach previous highs',
      'Suspicious trading volume that increases dramatically during pumps',
      'Project teams that always provide explanations for dips and promise recoveries',
      'Constant new "partnerships" or developments announced just as price begins to fall'
    ],
    prevention: [
      'Analyze the token\'s price history for suspicious repetitive patterns',
      'Be wary of communities that dismiss concerns about volatility as "weak hands"',
      'Check wallet distribution to see if large holdings are concentrated among a few addresses',
      'Look for projects with tangible progress rather than just marketing announcements',
      'Use blockchain explorers to track large trades that occur before major price movements'
    ],
    image: '/images/scams/farming/cycles.jpg',
    examples: [
      'Numerous small to mid-cap altcoins exhibit this pattern over extended periods',
      'Often disguised as "accumulation phases" in trading communities',
      'Frequently seen in meme coins that rely on community sentiment rather than fundamentals'
    ]
  },
  {
    id: 'honeypot',
    name: 'Honeypot',
    icon: <FaLock className="text-yellow-500" size={24} />,
    description: 'A deceptive contract designed to prevent investors from selling their tokens, trapping their funds while allowing only the creators to withdraw.',
    details: [
      'Developers create a token with a seemingly normal smart contract but with hidden functions',
      'The contract has code that allows buying but prevents everyone except the creators from selling',
      'Price initially rises as people can only buy, creating FOMO and attracting more investors',
      'Once enough people have invested, the creators sell their tokens and/or remove liquidity',
      'Investors discover they cannot sell their tokens regardless of the price'
    ],
    warning_signs: [
      'Extremely positive early price performance with few or no dips',
      'Small number of sell transactions visible on blockchain explorers',
      'Contract code includes complex or obfuscated functions that restrict selling',
      'Very new contracts with limited transaction history',
      'Project teams that are completely anonymous',
      'Excessive transaction taxes or fees (beyond typical tokenomics)'
    ],
    prevention: [
      'Always verify the contract code or use honeypot detection tools before investing',
      'Test with a very small amount first and ensure you can sell before investing more',
      'Check trading history to confirm others have successfully sold tokens',
      'Use our Contract Scanner which checks for honeypot code patterns',
      'Be suspicious of tokens with unusual restrictions on selling or extraordinary fees'
    ],
    image: '/images/scams/honeypot/contract.jpg',
    examples: [
      'Thousands of tokens on BSC and other chains specifically designed as honeypots',
      'Often named after popular memes, games, or current events to attract attention',
      'Frequently deployed during bull markets when investor caution is lowest'
    ]
  }
];

export default function TraderResources() {
  const { t } = useLanguage();
  const [activeScam, setActiveScam] = useState('rug-pull');

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
                  <div className="grid gap-6 md:grid-cols-2 mb-10">
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

                  {/* Common Crypto Scams Section */}
                  <div className="mt-8 mb-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Common Crypto Scams to Recognize</h4>
                    <p className="text-gray-300 mb-6">
                      Understanding how these scams work is your first line of defense. Click on each tab to learn about different scam tactics used by malicious actors in the crypto space.
                    </p>
                    
                    {/* Scam Type Tabs */}
                    <div className="border-b border-gray-700 mb-6">
                      <div className="flex flex-wrap -mb-px">
                        {scamTypes.map((scam) => (
                          <button
                            key={scam.id}
                            onClick={() => setActiveScam(scam.id)}
                            className={`inline-flex items-center py-4 px-4 text-sm font-medium text-center border-b-2 ${
                              activeScam === scam.id 
                                ? 'text-white border-purple-500' 
                                : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-600'
                            }`}
                          >
                            <span className="mr-2">{scam.icon}</span>
                            {scam.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Scam Details */}
                    {scamTypes.map((scam) => (
                      <div 
                        key={scam.id} 
                        className={activeScam === scam.id ? 'block' : 'hidden'}
                      >
                        <div className="bg-gray-900 rounded-lg p-6 mb-6">
                          <div className="flex items-center mb-4">
                            {scam.icon}
                            <h5 className="text-xl font-bold text-white ml-3">{scam.name}</h5>
                          </div>
                          <p className="text-gray-300 mb-4">{scam.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Left column - details and warnings */}
                            <div>
                              <h6 className="font-semibold text-purple-400 mb-2">How it Works</h6>
                              <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-1">
                                {scam.details.map((detail, index) => (
                                  <li key={index}>{detail}</li>
                                ))}
                              </ul>
                              
                              <h6 className="font-semibold text-red-400 mb-2">Warning Signs</h6>
                              <ul className="list-disc pl-5 text-gray-300 mb-4 space-y-1">
                                {scam.warning_signs.map((sign, index) => (
                                  <li key={index}>{sign}</li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Right column - prevention and examples */}
                            <div>
                              <h6 className="font-semibold text-green-400 mb-2">How to Protect Yourself</h6>
                              <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-1">
                                {scam.prevention.map((tip, index) => (
                                  <li key={index}>{tip}</li>
                                ))}
                              </ul>
                              
                              <h6 className="font-semibold text-yellow-400 mb-2">Real-World Examples</h6>
                              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                                {scam.examples.map((example, index) => (
                                  <li key={index}>{example}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        {/* Image placeholder - shows where to place images */}
                        <div className="bg-gray-900 rounded-lg p-4 text-center mb-4">
                          <p className="text-gray-400 mb-3 text-sm italic">
                            The diagram below illustrates how a {scam.name.toLowerCase()} typically works:
                          </p>
                          <div className="bg-gray-800 border border-dashed border-gray-700 rounded-lg p-8 flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-gray-500 mb-2 font-mono text-sm">
                                {`[Image: ${scam.name} Diagram]`}
                              </p>
                              <p className="text-gray-400 text-xs">
                                Place an image at: {scam.image}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-400 mt-3 text-sm">
                            To add this image, place it in: <code className="bg-gray-800 px-1 py-0.5 rounded font-mono">/public/images/scams/{scam.id}/</code>
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6 bg-purple-900 bg-opacity-20 border border-purple-800 rounded-lg p-4">
                      <h5 className="font-semibold text-white mb-2 flex items-center">
                        <FaShieldAlt className="text-purple-400 mr-2" />
                        Use Our Safety Tools
                      </h5>
                      <p className="text-gray-300 text-sm mb-3">
                        Don't fall victim to these scams. Use our free tools to verify contracts and check for potential red flags before investing.
                      </p>
                      <Link 
                        href="/tools/contract-scanner" 
                        className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Scan a Contract
                      </Link>
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