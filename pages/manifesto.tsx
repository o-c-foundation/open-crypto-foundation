import React, { useState } from 'react'
import Head from 'next/head'
import {
  FaExclamationTriangle,
  FaChartLine,
  FaBalanceScale,
  FaUserShield,
  FaNewspaper,
  FaHandHoldingUsd,
  FaRegLightbulb,
  FaShieldAlt
} from 'react-icons/fa'
import SkullLogo from '../components/SkullLogo'
import TabLayout from '../components/TabLayout'

export default function Manifesto() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("mission");

  // High-profile scam data
  const majorScams = [
    {
      name: "FTX Collapse",
      year: 2022,
      estimatedLoss: "$8 billion+",
      description: "Once valued at $32 billion, cryptocurrency exchange FTX collapsed after revelations of misappropriated customer funds, poor risk management, and alleged fraud by founder Sam Bankman-Fried.",
      impact: "Over 1 million creditors affected, many retail investors lost life savings, and widespread contagion throughout the crypto industry.",
      status: "Criminal charges filed against executives; bankruptcy proceedings ongoing."
    },
    {
      name: "Terra/Luna Crash",
      year: 2022,
      estimatedLoss: "$40 billion+",
      description: "The algorithmic stablecoin UST lost its peg to the dollar, triggering a death spiral that collapsed the entire Terra ecosystem, including its LUNA token which fell from $116 to virtually zero in days.",
      impact: "Multiple suicides reported, life savings destroyed, and several DeFi platforms exposed to contagion, leading to further failures.",
      status: "Founder Do Kwon facing criminal charges in multiple countries; still contested whether it was a design failure or deliberate fraud."
    },
    {
      name: "BitConnect",
      year: 2018,
      estimatedLoss: "$2.4 billion",
      description: "Promised returns of 1% daily through a 'trading bot' but operated as a Ponzi scheme where new investor funds paid earlier investors.",
      impact: "Thousands of retail investors lost their life savings, with many taking on debt to invest.",
      status: "Founder indicted; $56 million in settlement for victims; founder still at large."
    },
    {
      name: "OneCoin",
      year: 2014-2017,
      estimatedLoss: "$4 billion+",
      description: "A massive Ponzi scheme disguised as a cryptocurrency that never actually had a blockchain or functional token.",
      impact: "Affected victims in over 175 countries, with many losing their entire life savings, particularly in developing countries.",
      status: "Founder Ruja Ignatova (Cryptoqueen) disappeared in 2017; on FBI's Ten Most Wanted List."
    },
    {
      name: "PlusToken",
      year: 2019,
      estimatedLoss: "$6 billion",
      description: "Chinese Ponzi scheme that attracted investors primarily in Asia with promises of high returns from supposed exchange profits and mining activities.",
      impact: "Over 2 million victims, primarily in China, South Korea, and other Asian countries.",
      status: "Multiple arrests; some funds recovered but most investors lost everything."
    }
  ];

  // Celebrity endorsement incidents
  const celebrityScams = [
    {
      celebrity: "Kim Kardashian",
      project: "EthereumMax (EMAX)",
      action: "Promoted the token to 250 million Instagram followers without disclosing payment received.",
      consequence: "Settled with SEC for $1.26 million; token lost 99%+ of value after celebrity promotions ended."
    },
    {
      celebrity: "Floyd Mayweather & DJ Khaled",
      project: "Centra Tech",
      action: "Promoted ICO that raised $32 million based on fabricated relationships with Visa and Mastercard.",
      consequence: "Settled SEC charges ($614,775 and $152,725 respectively); Centra founders sentenced to prison for fraud."
    },
    {
      celebrity: "Steven Seagal",
      project: "Bitcoiin2Gen",
      action: "Served as brand ambassador for ICO without disclosing $250,000 payment.",
      consequence: "Settled with SEC for $314,000; project disappeared after ICO."
    },
    {
      celebrity: "Multiple YouTubers/Influencers",
      project: "SafeMoon, SQUID, and dozens of others",
      action: "Paid promotions on social media without disclosure, creating artificial hype and FOMO.",
      consequence: "Most projects collapsed after pump and dump; few influencers faced consequences."
    }
  ];

  // Fee collection data from platforms
  const platformFees = [
    {
      platform: "Binance",
      annualRevenue: "~$20 billion (2022)",
      source: "Trading fees, listing fees, launchpad fees, withdrawal fees",
      notes: "Estimated 50%+ profit margin at peak; stronger during market volatility"
    },
    {
      platform: "Uniswap",
      annualRevenue: "~$1+ billion (protocol fees)",
      source: "0.3% fee on all trades (primarily to liquidity providers)",
      notes: "Over $1.8 trillion in total trading volume; significant revenue with minimal operational costs"
    },
    {
      platform: "Coinbase",
      annualRevenue: "$3.1 billion (2022)",
      source: "Trading fees (1-4% for retail), custody fees, staking rewards cut",
      notes: "Public company earning significantly from retail traders paying premium fees"
    },
    {
      platform: "OpenSea",
      annualRevenue: "~$365 million (2022)",
      source: "2.5% fee on all NFT sales",
      notes: "Earned over $1 billion during 2021 NFT bubble with minimal user protection"
    }
  ];

  // Regulatory failures
  const regulatoryFailures = [
    {
      issue: "Reactive Rather Than Proactive Oversight",
      description: "Regulators typically act only after major collapses rather than preventing harm.",
      example: "SEC filed charges against FTX only after collapse, despite red flags visible for months.",
      consequence: "Billions in investor funds lost before any regulatory action taken."
    },
    {
      issue: "Jurisdictional Confusion",
      description: "Unclear which regulatory bodies have authority over crypto assets and platforms.",
      example: "In the US, the SEC and CFTC continue to dispute jurisdiction while projects exploit the gap.",
      consequence: "Bad actors exploit regulatory gaps by operating from favorable jurisdictions."
    },
    {
      issue: "Lack of Specialized Knowledge",
      description: "Most regulatory bodies lack technical understanding of blockchain and DeFi.",
      example: "Congressional hearings show basic misunderstandings of fundamental crypto concepts.",
      consequence: "Unsuitable regulation that fails to address actual risks while hampering innovation."
    },
    {
      issue: "Ineffective Enforcement",
      description: "Limited consequences for violations even when actions are taken.",
      example: "Celebrities pay minor fines relative to promotion earnings; founders often flee jurisdictions.",
      consequence: "Penalties viewed as 'cost of doing business' rather than deterrents."
    },
    {
      issue: "Lobby Influence",
      description: "Crypto industry spends hundreds of millions on lobbying to prevent effective regulation.",
      example: "Over $73 million spent on lobbying in the US in 2022 alone.",
      consequence: "Regulatory capture and legislation favorable to industry over retail investor protection."
    }
  ];

  // Statistics on crypto scam impact
  const scamStatistics = [
    {
      stat: "$3.8 billion",
      description: "Total cryptocurrency stolen through scams and hacks in 2022 alone",
      source: "Chainalysis 2023 Crypto Crime Report"
    },
    {
      stat: "82%",
      description: "Increase in crypto-related fraud reports to the FTC from 2020 to 2022",
      source: "Federal Trade Commission Consumer Sentinel Network"
    },
    {
      stat: "$575 million",
      description: "Lost to investment scams on social media in 2021, with cryptocurrency the most common payment method",
      source: "Federal Trade Commission"
    },
    {
      stat: "$8,000",
      description: "Median individual loss in crypto scams, significantly higher than the median of $500 for other fraud types",
      source: "FTC Consumer Protection Data Spotlight"
    },
    {
      stat: "46%",
      description: "Of fraud reports from people who lost crypto started with an ad, post, or message on social media",
      source: "FTC Report on Social Media and Crypto Scams"
    }
  ];

  // Victim personas
  const victimStories = [
    {
      age: "67",
      investment: "$650,000",
      background: "Retired teacher, invested entire pension",
      platform: "Yield-generating platform promising 18% APY",
      outcome: "Platform collapsed; no funds recovered. Now works part-time at 67 to pay rent."
    },
    {
      age: "24",
      investment: "$45,000",
      background: "Recent graduate with student loans who borrowed additional money to invest",
      platform: "NFT project promoted by major influencer",
      outcome: "Project was a rug pull. Now has $45,000 in credit card debt on top of student loans."
    },
    {
      age: "38",
      investment: "$180,000",
      background: "IT professional who invested family's house deposit",
      platform: "Stablecoin platform that 'couldn't depeg'",
      outcome: "Stablecoin collapsed to zero. Family lost house opportunity and facing divorce."
    },
    {
      age: "52",
      investment: "$320,000",
      background: "Small business owner who invested business expansion funds",
      platform: "High-yield farming protocol backed by 'audited' smart contracts",
      outcome: "Smart contract exploit drained all funds. Business closed, 12 employees lost jobs."
    }
  ];

  // Define sections for the TabLayout component
  const manifestoSections = [
    {
      id: "mission",
      name: "Our Mission",
      icon: <FaShieldAlt className="text-purple-400" />
    },
    {
      id: "problem",
      name: "The Problem",
      icon: <FaExclamationTriangle className="text-red-400" />
    },
    {
      id: "incentives",
      name: "Misaligned Incentives",
      icon: <FaChartLine className="text-yellow-400" />
    },
    {
      id: "regulatory",
      name: "Regulatory Failures",
      icon: <FaBalanceScale className="text-blue-400" />
    },
    {
      id: "human",
      name: "Human Impact",
      icon: <FaUserShield className="text-green-400" />
    },
    {
      id: "principles",
      name: "Core Principles",
      icon: <FaRegLightbulb className="text-orange-400" />
    },
    {
      id: "solution",
      name: "Our Solution",
      icon: <FaHandHoldingUsd className="text-pink-400" />
    },
    {
      id: "commitment",
      name: "Our Commitment",
      icon: <FaNewspaper className="text-teal-400" />
    }
  ];

  return (
    <>
      <Head>
        <title>Manifesto | Open Crypto Foundation</title>
        <meta name="description" content="The Open Crypto Foundation's manifesto outlines our mission to create a safer crypto ecosystem through education, transparency, and accountability." />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-5">
              <SkullLogo className="w-24 h-24" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Manifesto</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to creating a safer, more transparent cryptocurrency ecosystem.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <TabLayout
              tabs={manifestoSections}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabPosition="side"
            >
              {/* Mission section */}
              <div className={`transition-all duration-300 ${activeTab === 'mission' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaShieldAlt className="text-purple-400 mr-3" />
                    Our Mission
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The <strong className="text-purple-400">Open Crypto Foundation</strong> exists to create a safer cryptocurrency ecosystem where users can participate with confidence.
                    </p>
                    
                    <p>
                      We believe the promise of decentralized finance can only be realized when users have the tools and knowledge to protect themselves from scams and exploitative projects.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <p className="italic text-lg mb-3">
                        "Our vision is a future where cryptocurrency is truly accessible to everyone because the risks are understood, transparent, and manageable."
                      </p>
                      
                      <p>
                        The cryptocurrency industry has created unprecedented opportunities for financial inclusion, innovation, and wealth creation. However, for many, these opportunities have been overshadowed by catastrophic losses due to scams, fraud, and exploitation.
                      </p>
                      
                      <p className="mt-3">
                        We are creating an independent foundation dedicated to making crypto safer for everyone through education, open-source tools, and establishing clear standards for projects.
                      </p>
                    </div>
                    
                    <p>
                      Through this manifesto, we outline the problems facing cryptocurrency users today and our plan to address them through an independent, transparent, and community-driven approach.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* The Problem Section */}
              <div className={`transition-all duration-300 ${activeTab === 'problem' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaExclamationTriangle className="text-red-400 mr-3" />
                    The Problem
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The cryptocurrency industry has been plagued by massive scams, rugs, and exploits that have cost users billions of dollars.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">High-Profile Cryptocurrency Collapses and Scams</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gray-600">
                            <th className="px-4 py-3 text-left text-white">Name</th>
                            <th className="px-4 py-3 text-left text-white">Year</th>
                            <th className="px-4 py-3 text-left text-white">Estimated Loss</th>
                            <th className="px-4 py-3 text-left text-white">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {majorScams.map((scam, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'}>
                              <td className="px-4 py-3 text-white font-medium">{scam.name}</td>
                              <td className="px-4 py-3">{scam.year}</td>
                              <td className="px-4 py-3 text-red-400">{scam.estimatedLoss}</td>
                              <td className="px-4 py-3">{scam.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Key Statistics</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {scamStatistics.map((stat, index) => (
                        <div key={index} className="bg-gray-700 p-5 rounded-lg">
                          <div className="text-2xl font-bold text-red-400 mb-2">{stat.stat}</div>
                          <div className="text-gray-300">{stat.description}</div>
                          <div className="text-sm text-gray-400 mt-2">Source: {stat.source}</div>
                        </div>
                      ))}
                    </div>
                    
                    <p className="mt-6">
                      These statistics represent only reported losses. Many victims never report their losses due to shame, lack of recourse, or fear of tax implications.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Add the remaining tab content sections following the same pattern */}
              <div className={`transition-all duration-300 ${activeTab === 'incentives' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaChartLine className="text-yellow-400 mr-3" />
                    Misaligned Incentives
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The current cryptocurrency ecosystem is built on incentive structures that often prioritize profit over user protection.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Platform Fee Collection</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gray-600">
                            <th className="px-4 py-3 text-left text-white">Platform</th>
                            <th className="px-4 py-3 text-left text-white">Annual Revenue</th>
                            <th className="px-4 py-3 text-left text-white">Source</th>
                            <th className="px-4 py-3 text-left text-white">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {platformFees.map((platform, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'}>
                              <td className="px-4 py-3 text-white font-medium">{platform.platform}</td>
                              <td className="px-4 py-3 text-green-400">{platform.annualRevenue}</td>
                              <td className="px-4 py-3">{platform.source}</td>
                              <td className="px-4 py-3">{platform.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Celebrity Endorsements</h3>
                    
                    <div className="space-y-4">
                      {celebrityScams.map((celeb, index) => (
                        <div key={index} className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-semibold text-white mb-2">{celeb.celebrity} - {celeb.project}</h4>
                          <p>{celeb.action}</p>
                          <p className="text-red-400 mt-2">{celeb.consequence}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h4 className="font-semibold text-white mb-3">The Incentive Problem</h4>
                      <p>
                        Cryptocurrency platforms generate enormous profits from transaction fees, token listings, and other mechanisms - regardless of whether the underlying assets are legitimate or scams.
                      </p>
                      <p className="mt-3">
                        This creates a fundamental conflict of interest: the more transactions and tokens (including scams) that flow through a platform, the more profit they generate.
                      </p>
                      <p className="mt-3">
                        Even centralized exchanges with KYC requirements have little incentive to carefully vet the thousands of tokens they list, as the volume generated by speculative trading of even questionable projects generates significant fee revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-300 ${activeTab === 'regulatory' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaBalanceScale className="text-blue-400 mr-3" />
                    Regulatory Failures
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Current regulatory approaches have failed to adequately protect cryptocurrency users.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      {regulatoryFailures.map((failure, index) => (
                        <div key={index} className="bg-gray-700 p-5 rounded-lg">
                          <h4 className="font-semibold text-white mb-2">{failure.issue}</h4>
                          <p>{failure.description}</p>
                          <div className="mt-3 p-3 bg-gray-600 rounded">
                            <span className="font-medium text-blue-300">Example:</span> {failure.example}
                          </div>
                          <div className="mt-2 text-red-400">
                            <span className="font-medium">Consequence:</span> {failure.consequence}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h4 className="font-semibold text-white mb-3">The Regulatory Dilemma</h4>
                      <p>
                        Effective regulation in the cryptocurrency space faces significant challenges balancing 
                        innovation with protection, understanding technical complexities, and addressing 
                        cross-border jurisdictional issues.
                      </p>
                      <p className="mt-3">
                        By the time regulatory bodies understand and respond to problems, users have often already 
                        lost billions, and bad actors have moved on to new approaches or jurisdictions.
                      </p>
                      <p className="mt-3">
                        We need complementary approaches that can move faster than traditional regulatory frameworks 
                        while supporting and informing productive regulatory efforts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'human' ? 'block' : 'hidden'}`}>
                {/* Content for Human Impact section */}
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'principles' ? 'block' : 'hidden'}`}>
                {/* Content for Core Principles section */}
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'solution' ? 'block' : 'hidden'}`}>
                {/* Content for Our Solution section */}
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'commitment' ? 'block' : 'hidden'}`}>
                {/* Content for Our Commitment section */}
              </div>
            </TabLayout>
          </div>
        </div>
      </div>
    </>
  );
} 