import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaExclamationTriangle, FaChartLine, FaBook, FaShieldAlt, FaFileAlt, FaBalanceScale, FaSkull, FaRocket, FaTractor, FaLock } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import TabLayout from '../../components/TabLayout';

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
    description: 'A deceptive practice where project creators repeatedly launch new tokens with high initial rewards (yield farming), attract investment, then watch as the token value collapses once the emissions schedule decreases.',
    details: [
      'Developers launch a yield farming protocol with extremely high APY rewards (often 1,000%+ annualized)',
      'The high yields initially come from massive token emissions, creating heavy sell pressure',
      'Early participants who exit at the right time make profits, while later investors see their holdings rapidly decline in value',
      'Developers often move on to launch a new project with a different name but similar mechanics, repeating the cycle'
    ],
    warning_signs: [
      'Unsustainably high APY yields (four or five-digit percentages)',
      'Vague tokenomics with unclear emission schedules',
      'Heavy reliance on inflationary rewards rather than genuine protocol revenue',
      'Anonymous teams with patterns of launching multiple similar projects',
      'Minimal code innovation - often direct forks of established protocols with few changes',
      'Limited explanation of how yields will be sustained long-term'
    ],
    prevention: [
      'Be extremely cautious of protocols offering unusually high yields',
      'Research the token emission schedule and understand how rewards are generated',
      'Look for protocols that generate real revenue rather than relying solely on new tokens',
      'Check if the team has been involved in previous failed farming projects',
      'Avoid "FOMO" farming - entering after a project has gained significant attention'
    ],
    image: '/images/scams/farming/yield-trap.jpg',
    examples: [
      'Numerous "dog coins" on Binance Smart Chain that launched with high farming rewards before collapsing',
      'Many "OHM forks" that copied the tokenomics of OlympusDAO but lacked sustainable revenue models',
      'Projects that repeatedly rebrand and relaunch after each collapse (often with similar team members)'
    ]
  },
  {
    id: 'exit-scam',
    name: 'Exit Scam',
    icon: <FaLock className="text-purple-500" size={24} />,
    description: 'A fraudulent operation where project developers/owners suddenly cease operations, shut down the project, and disappear with investor funds under various pretexts.',
    details: [
      'Scammers establish a seemingly legitimate cryptocurrency project or exchange',
      'They build trust and attract substantial investment or user deposits over time',
      'At a strategic moment, they suddenly shut down operations, cite a hack, regulatory issues, or other excuse',
      'The team disappears with user funds, becoming unresponsive to the community'
    ],
    warning_signs: [
      'Increasing delays in processing withdrawals',
      'Communication becoming less frequent or transparent',
      'Team members removing their names or details from project documentation',
      'Sudden major changes to the project roadmap or tokenomics',
      'Unexplained outages or technical issues',
      'Vague responses to direct questions about security or finances'
    ],
    prevention: [
      'Only use established exchanges with proven track records and security measures',
      'Maintain control of your private keys when possible instead of leaving assets on exchanges',
      'Diversify across multiple platforms to limit exposure to any single exit scam',
      'Be wary of projects that suddenly change direction or ownership',
      'Research the background and reputation of project team members thoroughly'
    ],
    image: '/images/scams/exit-scam/disappeared.jpg',
    examples: [
      'QuadrigaCX (2019): Canadian exchange whose founder supposedly died, taking $190 million in customer funds',
      'Thodex (2021): Turkish exchange whose CEO disappeared with $2 billion in investor assets',
      'Africrypt (2021): South African exchange whose founders disappeared with $3.6 billion in Bitcoin'
    ]
  }
];

export default function Traders() {
  const { t } = useLanguage();
  const [activeScamType, setActiveScamType] = useState('rug-pull');

  return (
    <>
      <Head>
        <title>Trader Resources | Open Crypto Foundation</title>
        <meta name="description" content="Essential resources for cryptocurrency traders: scam prevention, risk management, and trading strategies." />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 text-transparent bg-clip-text">
              Trader Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential knowledge, tools, and guidance for safely trading in cryptocurrency markets.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-3" />
              Common Crypto Scams
            </h2>
            
            <p className="text-lg text-gray-300 mb-8">
              Understanding the common types of scams in cryptocurrency markets is essential for protecting your investments. 
              These are the most prevalent schemes to be aware of:
            </p>

            <TabLayout
              tabs={scamTypes.map(scam => ({
                id: scam.id,
                name: scam.name,
                icon: scam.icon
              }))}
              activeTab={activeScamType}
              onTabChange={setActiveScamType}
              tabPosition="side"
            >
              {scamTypes.map((scam) => (
                <div 
                  key={scam.id}
                  className={`bg-gray-800 rounded-lg p-6 transition-opacity duration-300 ${
                    activeScamType === scam.id ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    {scam.icon}
                    <span className="ml-3">{scam.name}</span>
                  </h3>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">{scam.description}</p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-4">How {scam.name} Scams Work</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {scam.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {scam.image && (
                      <div className="my-6 bg-gray-900 p-2 rounded-lg">
                        <div className="relative h-64 w-full">
                          <Image 
                            src={scam.image} 
                            alt={`${scam.name} diagram`}
                            layout="fill"
                            objectFit="contain"
                            className="rounded"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-900/20 p-5 rounded-lg border border-red-800/30">
                        <h4 className="text-lg font-semibold text-red-400 mb-4">Warning Signs</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {scam.warning_signs.map((sign, i) => (
                            <li key={i}>{sign}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-green-900/20 p-5 rounded-lg border border-green-800/30">
                        <h4 className="text-lg font-semibold text-green-400 mb-4">Prevention Tips</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {scam.prevention.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-4">Real-World Examples</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {scam.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </TabLayout>
          </div>

          {/* Additional sections like Risk Management, Trading Strategy, etc. would go here */}
          
        </div>
      </div>
    </>
  );
}