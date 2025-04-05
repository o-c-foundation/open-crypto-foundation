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
  FaShieldAlt,
  FaCodeBranch,
  FaCheckCircle
} from 'react-icons/fa'
import Image from 'next/image'
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
    },
    {
      id: "initiatives",
      name: "Our Initiatives",
      icon: <FaHandHoldingUsd className="text-pink-400" />
    }
  ];

  return (
    <>
      <Head>
        <title>Manifesto | Open Crypto Foundation</title>
        <meta name="description" content="The Open Crypto Foundation's manifesto outlines our mission to create a safer crypto ecosystem through education, transparency, and accountability." />
      </Head>

      <div className="py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center relative">
            <div className="flex justify-center items-center w-full mb-24">
              <div className="mx-auto">
                <div className="relative w-36 h-36">
                  <Image
                    src="https://bafkreiemmssqupiqu6uaaeyqcpksj7ialgqff3mrolzd6rcyjzvs252j54.ipfs.w3s.link/"
                    alt="Open Crypto Foundation Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-teal-500 text-transparent bg-clip-text">
                Manifesto
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Our commitment to creating a safer, more transparent cryptocurrency ecosystem.
              </p>
            </div>
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
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaUserShield className="text-green-400 mr-3" />
                    Human Impact
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Behind every cryptocurrency scam statistic are real people whose lives have been severely impacted. These stories highlight the profound human consequences of inadequate protection.
                    </p>

                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">The Hidden Human Toll</h3>
                      <p className="mb-4">
                        While proponents focus on financial inclusion and technological innovation, the industry has a darker reality: countless individuals have lost life savings, homes, relationships, and in some cases, even taken their own lives following catastrophic financial losses in crypto markets.
                      </p>
                      <p>
                        The cryptocurrency ecosystem has created a perfect storm of factors that make scams particularly devastating:
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Irreversible transactions mean that once funds are stolen, there is virtually no recourse</li>
                        <li>Complex technology that few users fully understand creates information asymmetry exploited by scammers</li>
                        <li>FOMO culture encourages impulsive decisions and overinvestment beyond what individuals can afford to lose</li>
                        <li>Lack of regulation means few safeguards exist to protect retail investors</li>
                        <li>Pseudonymity allows perpetrators to hide their identities and escape consequences</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Real Victim Profiles</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {victimStories.map((victim, index) => (
                        <div key={index} className="bg-gray-700 p-5 rounded-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <span className="text-white font-medium">Age: {victim.age}</span>
                            </div>
                            <div className="text-red-400 font-semibold">
                              {victim.investment}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p><span className="text-green-400">Background:</span> {victim.background}</p>
                            <p><span className="text-blue-400">Platform:</span> {victim.platform}</p>
                            <p className="border-t border-gray-600 pt-3 mt-3 text-yellow-200">{victim.outcome}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h4 className="font-semibold text-white mb-3">Beyond Financial Loss</h4>
                      <p className="mb-3">
                        While financial losses are quantifiable, many victims suffer profound non-financial consequences:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h5 className="font-medium text-white mb-2">Mental Health Impact</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Depression and anxiety disorders</li>
                            <li>Post-traumatic stress symptoms</li>
                            <li>Increased suicidal ideation (numerous documented cases)</li>
                            <li>Substance abuse as coping mechanism</li>
                            <li>Relationship breakdown under financial stress</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h5 className="font-medium text-white mb-2">Long-Term Financial Impact</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Loss of retirement security</li>
                            <li>Spiraling debt from borrowed investment funds</li>
                            <li>Inability to afford housing, education, or healthcare</li>
                            <li>Destroyed credit scores</li>
                            <li>Multi-generational financial setbacks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-900/30 p-6 rounded-lg mt-6 border border-red-800/50">
                      <h4 className="text-lg font-medium text-white mb-3">Vulnerable Populations at Higher Risk</h4>
                      <p className="mb-4">Research indicates that certain groups are disproportionately impacted by cryptocurrency scams:</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-red-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Elderly individuals</span> often lack technical knowledge to evaluate crypto projects but have substantial retirement savings that make them attractive targets.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-red-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Young adults</span> are susceptible to FOMO (fear of missing out) and influencer marketing but lack financial literacy and experience with scam patterns.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-red-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Financially distressed individuals</span> seeking quick solutions are more likely to ignore red flags when promised unrealistic returns.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-red-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Non-English speakers</span> face additional barriers in accessing legitimate information and resources to verify projects.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-red-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Individuals in developing countries</span> with less regulatory protection and financial infrastructure are disproportionately targeted.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h4 className="text-lg font-medium text-white mb-3">The Retail-Dominated Market Problem</h4>
                      <p className="mb-4">Unlike traditional financial markets with substantial institutional involvement and professional oversight, cryptocurrency markets remain heavily dominated by retail traders with minimal financial education or experience:</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h5 className="font-medium text-white mb-2">Low Barriers, High Stakes</h5>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Minimal entry requirements with no knowledge prerequisites</li>
                            <li>Gambling tendencies masquerading as investment</li>
                            <li>Trading interfaces that use gamification elements</li>
                            <li>24/7 markets creating constant engagement and stress</li>
                            <li>Absence of professional guardrails and risk management</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h5 className="font-medium text-white mb-2">Systemic Vulnerabilities</h5>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Markets easily manipulated by triggering emotional responses</li>
                            <li>Exaggerated volatility from emotional herding behaviors</li>
                            <li>Susceptibility to social proof over fundamental analysis</li>
                            <li>Fragile liquidity during market stress</li>
                            <li>Shortened project timelines prioritizing price over sustainability</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-center font-medium text-lg">
                      These real human stories underscore why stronger protections, better education, and industry accountability are not just desirable, but essential.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'principles' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaRegLightbulb className="text-yellow-400 mr-3" />
                    Core Principles
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The Open Crypto Foundation operates according to these fundamental principles that guide all our work and initiatives.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Independence</h3>
                        <p className="mb-3">
                          We maintain complete independence from cryptocurrency projects, exchanges, and financial interests that could compromise our mission.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>No token sales or ICOs to fund operations</li>
                          <li>Transparent funding sources with no conflicts of interest</li>
                          <li>No paid partnerships with projects we evaluate</li>
                          <li>No financial incentives tied to project success or failure</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Transparency</h3>
                        <p className="mb-3">
                          We operate with radical transparency in all aspects of our organization and methodology.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Open-source code and methodologies</li>
                          <li>Public documentation of all evaluation criteria</li>
                          <li>Full disclosure of funding sources and expenditures</li>
                          <li>Clear explanation of how recommendations are determined</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Education First</h3>
                        <p className="mb-3">
                          We believe that informed users make better decisions and are less vulnerable to scams and exploits.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Create accessible, jargon-free educational resources</li>
                          <li>Prioritize teaching principles over specific recommendations</li>
                          <li>Explain the "why" behind security best practices</li>
                          <li>Build critical thinking skills for evaluating projects</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Evidence-Based</h3>
                        <p className="mb-3">
                          Our recommendations and tools are based on evidence, data, and technical analysis, not speculation or opinion.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Employ rigorous technical evaluation methodologies</li>
                          <li>Base assessments on verifiable on-chain and off-chain data</li>
                          <li>Document reasoning behind security evaluations</li>
                          <li>Update recommendations as new evidence emerges</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Inclusive & Accessible</h3>
                        <p className="mb-3">
                          We create resources that are accessible to all, regardless of technical background, geography, or language.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Multi-language resources and tools</li>
                          <li>Content designed for all knowledge levels</li>
                          <li>Free, open access to all core educational materials</li>
                          <li>Design for accessibility across devices and limitations</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Collaborative</h3>
                        <p className="mb-3">
                          We work with the broader ecosystem to create positive change rather than operating in isolation.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Partner with security researchers and organizations</li>
                          <li>Engage with regulators to share expertise and insights</li>
                          <li>Support projects committed to security and transparency</li>
                          <li>Coordinate with other educational initiatives</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Our Ethical Framework</h3>
                      <p className="mb-4">
                        The Open Crypto Foundation follows strict ethical guidelines in all our work:
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-yellow-400">No Conflicts of Interest</h4>
                          <p>Board members and employees cannot hold positions in evaluated projects or receive compensation that could create conflicts.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-yellow-400">Public Disclosure</h4>
                          <p>All funding sources, partnerships, and potential conflicts must be publicly disclosed in a timely manner.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-yellow-400">Responsible Disclosure</h4>
                          <p>We follow standard security vulnerability disclosure procedures to protect users while giving projects appropriate time to address issues.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-yellow-400">User Privacy</h4>
                          <p>We minimize data collection, never sell user data, and design tools with privacy-preserving principles.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Redemption and Growth</h3>
                      <p className="mb-4">
                        We recognize that the crypto ecosystem—like any human system—is not black and white. Our approach balances accountability with opportunity for positive change:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Past Mistakes as Valuable Insight</h4>
                          <p className="text-sm">
                            Individuals who have participated in questionable activities but have since reformed can provide invaluable perspective. Former scammers who choose to become part of the solution offer unique insights that can strengthen protective measures.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Education Over Ostracism</h4>
                          <p className="text-sm">
                            Our goal is not to eliminate scams by vilifying those who've perpetrated them, but rather by making potential victims more knowledgeable and aware of the tactics used against them.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Alternative Paths</h4>
                          <p className="text-sm">
                            We're committed to demonstrating that there are legitimate, sustainable ways to earn a living in the cryptocurrency space by highlighting ethical business models and promoting transparency.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Balancing Accountability</h4>
                          <p className="text-sm">
                            While we advocate for redemption, we also firmly believe in accountability. There must be a balance between providing second chances and ensuring that harmful actions have appropriate consequences.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-900/30 p-6 rounded-lg mt-6 border border-red-800/50">
                      <h3 className="text-xl font-semibold text-white mb-3">Confronting Toxic Culture</h3>
                      <p className="mb-4">
                        We take a stand against the normalization and glorification of predatory behavior in cryptocurrency culture:
                      </p>
                      
                      <div className="space-y-3">
                        <p>
                          The industry has developed a disturbing vocabulary that masks unethical behavior:
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="bg-gray-800/50 p-3 rounded">
                            <span className="font-medium text-white">"Diamond hands"</span> – Celebrating holding through losses, often encouraging others not to sell while insiders exit
                          </div>
                          <div className="bg-gray-800/50 p-3 rounded">
                            <span className="font-medium text-white">"FUD"</span> – Dismissing legitimate criticism or concerns as "Fear, Uncertainty and Doubt"
                          </div>
                          <div className="bg-gray-800/50 p-3 rounded">
                            <span className="font-medium text-white">"WAGMI"</span> – Creating false solidarity that discourages critical thinking
                          </div>
                          <div className="bg-gray-800/50 p-3 rounded">
                            <span className="font-medium text-white">"Degen"</span> – Normalizing reckless financial behavior as a badge of honor
                          </div>
                        </div>
                        <p className="mt-2">
                          This culture has created an environment where predatory behavior is rewarded and even celebrated. We believe in replacing this with a culture of transparency, accountability, and genuine user protection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'solution' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaHandHoldingUsd className="text-blue-400 mr-3" />
                    Our Solution
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The Open Crypto Foundation is creating practical, user-focused solutions to make cryptocurrency safer for everyone.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Approach</h3>
                      
                      <p className="mb-4">
                        Our approach addresses the fundamental issues in cryptocurrency through three interconnected pillars:
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-5">
                        <div className="bg-gray-600 p-5 rounded-lg">
                          <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                            <FaShieldAlt className="text-blue-400 text-xl" />
                          </div>
                          <h4 className="font-medium text-white text-lg mb-2">Education</h4>
                          <p className="text-sm">
                            Accessible, jargon-free resources that empower users to identify risks and make informed decisions. Knowledge is the first line of defense.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-5 rounded-lg">
                          <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                            <FaCodeBranch className="text-blue-400 text-xl" />
                          </div>
                          <h4 className="font-medium text-white text-lg mb-2">Audit Services</h4>
                          <p className="text-sm">
                            Professional security audits and reviews that help projects identify vulnerabilities and implement best practices for user protection.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-5 rounded-lg">
                          <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                            <FaCheckCircle className="text-green-400 text-xl" />
                          </div>
                          <h4 className="font-medium text-white text-lg mb-2">Vetted Resources</h4>
                          <p className="text-sm">
                            Curated directories of trusted third-party tools and services that meet our rigorous standards for security and transparency.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Initiatives</h3>
                      
                      <div className="space-y-5">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-pink-300 text-lg flex items-center mb-3">
                            <span className="bg-pink-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                            Comprehensive Scam Database
                          </h4>
                          <p className="mb-3">
                            A living, educational repository of known scams, their techniques, and warning signs.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <h5 className="font-medium text-white mb-1">Features:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Searchable catalog of scam techniques</li>
                                <li>Documentation of high-risk patterns</li>
                                <li>Real-world case studies</li>
                                <li>Educational resources on emerging threats</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-white mb-1">Impact:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Helps users recognize patterns before becoming victims</li>
                                <li>Creates shared knowledge pool of scam tactics</li>
                                <li>Reduces repeated successful attacks</li>
                                <li>Provides educational material for platforms</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-300 text-lg flex items-center mb-3">
                            <span className="bg-blue-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                            Trusted Tool Directory
                          </h4>
                          <p className="mb-3">
                            A curated list of vetted third-party security tools and resources that meet our strict standards for effectiveness and trustworthiness.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <h5 className="font-medium text-white mb-1">Features:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Rigorous vetting process for included tools</li>
                                <li>Categorized by use case and complexity</li>
                                <li>User guides and implementation tutorials</li>
                                <li>Regular review of listed resources</li>
                                <li>Transparent evaluation criteria</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-white mb-1">Impact:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Simplifies finding trustworthy security tools</li>
                                <li>Reduces confusion for non-technical users</li>
                                <li>Encourages adoption of security best practices</li>
                                <li>Creates incentives for tool developers to improve</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-300 text-lg flex items-center mb-3">
                            <span className="bg-blue-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                            Safe Crypto Standards
                          </h4>
                          <p className="mb-3">
                            A transparent, community-driven certification framework for cryptocurrency projects that demonstrates commitment to user protection.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <h5 className="font-medium text-white mb-1">Features:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Clear, measurable security criteria</li>
                                <li>Transparency requirements</li>
                                <li>Community governance of standards</li>
                                <li>Regular re-verification process</li>
                                <li>Integration with exchanges and platforms</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-white mb-1">Impact:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Creates baseline quality expectations</li>
                                <li>Helps users quickly identify safer projects</li>
                                <li>Incentivizes better project practices</li>
                                <li>Builds consensus on minimum security measures</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-300 text-lg flex items-center mb-3">
                            <span className="bg-blue-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-2">4</span>
                            Educational Platform
                          </h4>
                          <p className="mb-3">
                            A multilingual learning platform with interactive modules, videos, and resources tailored to different experience levels.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <h5 className="font-medium text-white mb-1">Features:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Progressive learning paths</li>
                                <li>Interactive safety simulations</li>
                                <li>Red flag recognition training</li>
                                <li>Wallet security best practices</li>
                                <li>Recovery and response guides</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-white mb-1">Impact:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Builds critical evaluation skills</li>
                                <li>Reduces successful scam attempts</li>
                                <li>Increases confidence in legitimate projects</li>
                                <li>Creates more knowledgeable ecosystem participants</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">How It's Different</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="text-green-400 mr-3 mt-1">
                            <FaCheckCircle size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Independent & Unconflicted</h4>
                            <p className="text-sm">Unlike existing solutions that often have financial incentives tied to particular projects or platforms, we operate without conflicts of interest that could compromise our assessments.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="text-green-400 mr-3 mt-1">
                            <FaCheckCircle size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">User-Centric, Not Protocol-Centric</h4>
                            <p className="text-sm">We prioritize the needs and protection of users over the growth metrics of protocols, focusing on practical solutions rather than theoretical ideals.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="text-green-400 mr-3 mt-1">
                            <FaCheckCircle size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Accessible To Everyone</h4>
                            <p className="text-sm">Our educational resources and directories are designed to be understood by non-technical users while still being valuable for experienced participants.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="text-green-400 mr-3 mt-1">
                            <FaCheckCircle size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Community-Powered</h4>
                            <p className="text-sm">We leverage collective intelligence and experiences through a transparent, community-driven approach to identifying threats and developing resources.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="text-green-400 mr-3 mt-1">
                            <FaCheckCircle size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Transparent & Open</h4>
                            <p className="text-sm">All our methodologies and assessment criteria are open for scrutiny and improvement, ensuring we maintain the highest standards.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-900/30 to-teal-900/30 p-6 rounded-lg border border-blue-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Get Involved</h3>
                      
                      <p className="mb-4">
                        The Open Crypto Foundation is a collaborative effort that becomes stronger with diverse contributions. Here's how you can participate:
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-300 mb-2">For Developers</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Submit your projects for audit review</li>
                            <li>Contribute to educational materials</li>
                            <li>Help evaluate third-party tools for our directory</li>
                            <li>Participate in responsible disclosure</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h4 className="font-medium text-green-300 mb-2">For Community Members</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Report suspicious projects</li>
                            <li>Share experiences and lessons</li>
                            <li>Help translate resources</li>
                            <li>Spread awareness of best practices</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h4 className="font-medium text-yellow-300 mb-2">For Projects & Platforms</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Adopt security standards</li>
                            <li>Request audit services</li>
                            <li>Support transparency initiatives</li>
                            <li>Prioritize user protection</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="text-center mt-5">
                        <a href="#" className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium py-2 px-5 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors">
                          Join Our Discord
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'commitment' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaNewspaper className="text-teal-400 mr-3" />
                    Our Commitment
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The Open Crypto Foundation pledges to operate with transparency, independence, and an unwavering focus on user protection, staying true to these commitments:
                    </p>
                    
                    <div className="bg-teal-900/30 p-6 rounded-lg border border-teal-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Independence Pledge</h3>
                      <p className="mb-4 italic text-lg">
                        "We will never accept funding that compromises our mission or creates conflicts of interest in our evaluations."
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-teal-300 mb-2">How We Maintain Independence</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Diversified funding model to prevent undue influence</li>
                            <li>No token sales, ICOs, or investment in projects we evaluate</li>
                            <li>Clear conflict of interest policies for all team members</li>
                            <li>Regular audits of funding sources and expenditures</li>
                            <li>Public disclosure of all major donors and partnerships</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-teal-300 mb-2">Funding Approach</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Grants from established charitable foundations</li>
                            <li>Small individual donations (with caps on large contributions)</li>
                            <li>Research collaboration funding without editorial control</li>
                            <li>Educational service fees that don't influence evaluations</li>
                            <li>Open-source technology development sponsorships</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Transparency Commitment</h3>
                      
                      <p className="mb-4">
                        The Open Crypto Foundation believes transparency builds trust. We commit to making the following information publicly available:
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Financial Transparency</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Detailed quarterly financial reports</li>
                            <li>All funding sources with amounts</li>
                            <li>Complete expenditure breakdowns</li>
                            <li>Board member compensation</li>
                            <li>Annual independent financial audits</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Operational Transparency</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Decision-making processes</li>
                            <li>Evaluation methodologies</li>
                            <li>Team member backgrounds</li>
                            <li>Partnership agreements</li>
                            <li>Progress against roadmap targets</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Technical Transparency</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Open-source code repositories</li>
                            <li>Security audit results</li>
                            <li>Data collection practices</li>
                            <li>Research methodologies</li>
                            <li>Tool development roadmaps</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-3">Accountability Framework</h3>
                      
                      <p className="mb-4">
                        We hold ourselves accountable to the community through these mechanisms:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Community Oversight Board</h4>
                          <p className="text-sm">
                            A diverse board of community representatives, industry experts, and victim advocates who review our work, provide guidance, and ensure we remain true to our mission.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Regular Public Reviews</h4>
                          <p className="text-sm">
                            Quarterly public meetings where we present progress, challenges, and plans, with open Q&A sessions for community input and feedback.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Impact Measurement</h4>
                          <p className="text-sm">
                            Clear metrics to track our effectiveness in reducing scam losses, improving user security practices, and increasing awareness of safety measures.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Feedback Mechanisms</h4>
                          <p className="text-sm">
                            Accessible channels for users to provide feedback, report issues, and suggest improvements to all our resources and tools.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-900/30 p-6 rounded-lg mt-6 border border-teal-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Our Core Advocacy Positions</h3>
                      <p className="mb-4">
                        We are committed to advocating for fundamental changes in the cryptocurrency ecosystem:
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-teal-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">User-centered design</span> that prioritizes protection over speculation, making security the default rather than an optional feature.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-teal-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Platform accountability</span> for the projects they list and promote, with higher standards for verification and ongoing monitoring.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-teal-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Meaningful transparency</span> in project funding, tokenomics, and risk disclosures that go beyond checkbox compliance to genuine informative disclosure.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-teal-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Sensible regulation</span> that protects users without stifling innovation, focused on outcomes rather than technologies.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-teal-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
                          <div>
                            <span className="font-medium text-white">Ethical standards</span> for developers, influencers, and platforms that create clear boundaries between acceptable innovation and harmful exploitation.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-3">Call to Action</h3>
                      
                      <p className="mb-4">
                        Creating a safer cryptocurrency ecosystem requires collaboration. We invite participation through these channels:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">For Individuals</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Use and share our educational resources</li>
                            <li>Provide feedback on tools and content</li>
                            <li>Report scams to our incident database</li>
                            <li>Volunteer technical skills or domain expertise</li>
                            <li>Support our work through donations</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">For Organizations</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Adopt our security standards and practices</li>
                            <li>Contribute to research initiatives</li>
                            <li>Integrate our educational content</li>
                            <li>Participate in the incident response network</li>
                            <li>Support our initiatives through grants or sponsorships</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-3">Vision for the Future</h3>
                      
                      <p className="mb-4">
                        We believe the future of cryptocurrency depends on building user trust through actual protection rather than empty promises. Our commitment is to help create:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">A Transformed Ecosystem</h4>
                          <p className="text-sm">
                            Where the culture and business practices evolve from a predatory gold rush to a sustainable system that delivers real value to users, with reduced information asymmetry and exploitation.
                          </p>
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-teal-300 mb-2">Empowered Users</h4>
                          <p className="text-sm">
                            With the knowledge, tools, and support to navigate blockchain technology safely, evaluate projects effectively, and recover when things go wrong.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-xl font-medium text-white">
                        Together, we can build a cryptocurrency ecosystem where innovation flourishes without sacrificing user safety.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-300 ${activeTab === 'initiatives' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaHandHoldingUsd className="text-blue-400 mr-3" />
                    Our Initiatives
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The Open Crypto Foundation is implementing practical solutions to create a safer cryptocurrency ecosystem through these key initiatives.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Comprehensive Educational Platform</h3>
                      <div className="space-y-4">
                        <p>We're building an accessible, multilingual educational platform designed for users at all knowledge levels, focusing on security best practices and scam identification.</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-gray-600 p-4 rounded-lg">
                            <h4 className="font-medium text-white mb-2">Key Features</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Interactive learning modules covering everything from basic wallet security to advanced scam identification</li>
                              <li>Real-world case studies of common scams with prevention guidance</li>
                              <li>Visual guides to secure setup for different blockchains</li>
                              <li>Customized learning paths based on user experience level</li>
                              <li>Multiple language support starting with major global languages</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded-lg">
                            <h4 className="font-medium text-white mb-2">Implementation Timeline</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li><strong>Phase 1:</strong> Core educational content in English</li>
                              <li><strong>Phase 2:</strong> Interactive modules and assessment tools</li>
                              <li><strong>Phase 3:</strong> Multi-language support and community contribution system</li>
                              <li><strong>Phase 4:</strong> Mobile application and offline learning resources</li>
                              <li><strong>Phase 5:</strong> Partnership program with exchanges and projects</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Project Safety Standards</h3>
                      <div className="space-y-4">
                        <p>We're developing an open, community-driven standard for project transparency and security, enabling users to quickly identify projects meeting baseline safety criteria.</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-gray-600 p-4 rounded-lg">
                            <h4 className="font-medium text-white mb-2">Standard Requirements</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Verified team identities with proven track record</li>
                              <li>Smart contract audits from reputable providers</li>
                              <li>Transparent tokenomics with clear distribution schedules</li>
                              <li>Documented use cases and sustainable revenue model</li>
                              <li>Responsible marketing practices without misleading claims</li>
                              <li>Clear roadmap with measurable milestones</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded-lg">
                            <h4 className="font-medium text-white mb-2">Verification Process</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Open application process for any project</li>
                              <li>Technical review by security experts</li>
                              <li>Community feedback period for each application</li>
                              <li>Transparent scoring system with detailed rationale</li>
                              <li>Regular re-verification to maintain standard</li>
                              <li>Immediate revocation for serious violations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Professional Audit Services</h3>
                      <div className="space-y-4">
                        <p>Our comprehensive security audit services help cryptocurrency projects identify vulnerabilities, implement best practices, and build user trust through enhanced security and transparency.</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-gray-600 p-4 rounded-lg">
                            <h4 className="font-medium text-white mb-2">Audit Offerings</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li><strong>Smart Contract Audits:</strong> Comprehensive code reviews to identify vulnerabilities and security flaws</li>
                              <li><strong>Architecture Reviews:</strong> Analysis of system design and potential structural weaknesses</li>
                              <li><strong>Tokenomics Assessment:</strong> Evaluation of economic models and incentive structures</li>
                              <li><strong>Security Consulting:</strong> Custom guidance on implementing security best practices</li>
                              <li><strong>Incident Response:</strong> Support during security incidents or exploits</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-600 p-4 rounded-lg">
                            <h4 className="font-medium text-white mb-2">Audit Methodology</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Multi-phase review process with multiple auditors</li>
                              <li>Manual code review combined with automated analysis</li>
                              <li>Standardized vulnerability classification system</li>
                              <li>Detailed remediation recommendations</li>
                              <li>Verification of fixes after implementation</li>
                              <li>Public reporting option to enhance transparency</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Curated Security Resource Directory</h3>
                      <div className="space-y-4">
                        <p>We carefully evaluate and curate directories of third-party security tools and services, helping users find trustworthy resources that meet our strict standards for security and effectiveness.</p>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Directory Categories</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Wallet Security:</strong> Vetted hardware and software wallet solutions</li>
                            <li><strong>Transaction Verification:</strong> Tools for analyzing transactions before signing</li>
                            <li><strong>Project Research:</strong> Resources for conducting due diligence on projects</li>
                            <li><strong>Monitoring Services:</strong> Account and asset monitoring solutions</li>
                            <li><strong>Educational Resources:</strong> Trusted learning materials and guides</li>
                            <li><strong>Recovery Services:</strong> Legitimate recovery assistance providers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Incident Response Network</h3>
                      <div className="space-y-4">
                        <p>We're establishing a coordinated response network to assist scam victims, report incidents, and facilitate recovery efforts when possible.</p>
                        
                        <div className="bg-gray-600 p-4 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Network Components</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Victim Support Center:</strong> Guidance and resources for those affected by scams</li>
                            <li><strong>Scam Reporting Database:</strong> Centralized system to document and track scam operations</li>
                            <li><strong>Exchange Coordination:</strong> Direct lines to major exchanges to freeze stolen funds</li>
                            <li><strong>Legal Resources:</strong> Templates and guides for filing reports with authorities</li>
                            <li><strong>Mental Health Support:</strong> Connections to counseling resources for victims</li>
                            <li><strong>Recovery Specialists:</strong> Network of experts who can assist in asset recovery when possible</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-900/30 p-6 rounded-lg mt-6 border border-purple-800/50">
                      <h3 className="text-xl font-semibold text-white mb-3">Collaborative Research Program</h3>
                      <p className="mb-4">
                        We're funding and publishing independent research to better understand cryptocurrency scams, their mechanisms, and effective prevention strategies.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <h4 className="font-medium text-blue-300 mb-2">Research Focus Areas</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Psychological factors in crypto scam susceptibility</li>
                            <li>Smart contract vulnerability patterns and detection</li>
                            <li>Effectiveness of various educational approaches</li>
                            <li>Cross-border coordination for scam recovery</li>
                            <li>Economic impacts of scams on ecosystem development</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-blue-300 mb-2">Output Formats</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Peer-reviewed academic papers</li>
                            <li>Accessible summaries for general audiences</li>
                            <li>Practical recommendation guides</li>
                            <li>Open datasets for further analysis</li>
                            <li>Regular industry briefings and reports</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabLayout>
          </div>
        </div>
      </div>
    </>
  );
} 