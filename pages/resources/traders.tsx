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
    id: 'platform-scams',
    name: 'Platform-Specific Scams (Pump.fun)',
    icon: <FaBalanceScale className="text-blue-500" size={24} />,
    description: 'Specialized tactics used on token launchpads like Pump.fun that exploit "fair launch" mechanisms through artificial market manipulation, fake activity, and cloned contracts to deceive investors.',
    details: [
      'Scammers use various techniques to create an illusion of genuine trading activity and demand',
      'These tactics exploit the particular mechanisms of token launch platforms while appearing to follow platform rules',
      'Multiple wallets controlled by the same entity coordinate to manipulate price and volume',
      'The end goal is typically to attract genuine investors before dumping tokens or pulling liquidity',
      'Some scams involve token cloning during the migration from launchpads to DEXs like Raydium'
    ],
    warning_signs: [
      'Repeated transactions between the same few wallet addresses (wash trading)',
      'Suspicious transaction timing with many small buys/sells within seconds (volume bots)',
      'Consistent micro-purchases that create artificial buy pressure',
      'Wallets with no prior transaction history suddenly trading actively',
      'Tokens with identical names/symbols appearing on DEXs with minimal liquidity'
    ],
    prevention: [
      'Investigate wallet addresses involved in transactions - check creation dates and previous activity',
      'Look for unnatural transaction patterns like uniform trade sizes or perfectly timed intervals',
      'Verify token contracts on both the launchpad and the DEX before trading',
      'Confirm sufficient liquidity exists in the trading pool before purchasing',
      'Use transaction/wallet explorers to identify suspicious wallet connections and fund flows'
    ],
    examples: [
      'Wash Trading: Multiple projects on Pump.fun creating artificial volume using the same few wallets to simulate demand',
      'Volume Bots: Automated programs that generate hundreds of small transactions to attract genuine investors',
      'Bundled Transactions: Scammers using multiple wallets to accumulate tokens before consolidating them for a single large sell',
      'Contract Cloning: Fake tokens appearing on Raydium with identical names but different contracts than the legitimate token from Pump.fun'
    ],
    scamTactics: [
      {
        name: 'Wash Trading',
        description: 'The practice of buying and selling the same token repeatedly between controlled wallets to create an illusion of genuine trading activity and market interest.',
        technicalDetails: 'Scammers create multiple fresh wallets with no prior transaction history, then execute repeated buy and sell transactions between these wallets. This artificially inflates volume metrics and creates a false impression of market demand. The transaction history appears legitimate at first glance, but careful analysis reveals the same few wallets trading with each other.',
        identification: 'Examine wallet creation dates (new wallets are suspicious), look for repeated transactions between the same addresses, and check if wallets acquired tokens through actual purchases or through direct transfers from other suspicious wallets.'
      },
      {
        name: 'Volume Bots',
        description: 'Automated programs that generate high-frequency trading activity to simulate genuine interest and manipulate trading metrics.',
        technicalDetails: 'These bots execute numerous small trades (often of identical size) at precise intervals, creating artificial trading volume. Unlike manual wash trading, volume bots can generate hundreds of transactions within minutes, making the token appear highly active. They typically use multiple wallet addresses and maintain consistent trade sizes (like 0.01 SOL) to create patterns that look algorithmic rather than organic.',
        identification: 'Look for unnatural transaction patterns such as perfectly timed intervals between trades, identical transaction amounts repeated many times, and high-frequency trading that doesn\'t correspond to news or developments.'
      },
      {
        name: 'Microbuys',
        description: 'A manipulation tactic involving numerous small purchases over time to create the impression of sustained buying interest and organic growth.',
        technicalDetails: 'Unlike volume bots that buy and sell rapidly, microbuy tactics involve making many small purchases and holding the tokens. These purchases are typically made at regular intervals to create the appearance of growing demand. This steady "buy pressure" can attract genuine investors who see what appears to be consistent accumulation by multiple parties.',
        identification: 'While harder to detect than other tactics, microbuys often show as suspiciously consistent small purchases from multiple wallets that never sell. Check if these purchasing wallets have any history before trading this specific token.'
      },
      {
        name: 'Bundled Transactions',
        description: 'A sophisticated exit strategy where tokens accumulated across multiple wallets are consolidated simultaneously for a large coordinated sell-off.',
        technicalDetails: 'After creating artificial demand through other tactics, scammers use bundled transactions to execute their exit. Multiple wallets transfer their tokens to a central wallet simultaneously, which then executes a large sell order. This happens in a single blockchain transaction, making it impossible for regular investors to react before the price collapses.',
        identification: 'These are difficult to predict before they happen, but can be identified after the fact by looking for multiple token transfers feeding into a single wallet immediately before a large sell order. Telegram bots that monitor token contracts can sometimes detect bundling in progress.'
      },
      {
        name: 'Contract Cloning',
        description: 'Creating duplicate tokens with identical names during the migration from launchpads to decentralized exchanges to capture investments meant for legitimate projects.',
        technicalDetails: 'When tokens reach a certain market cap on Pump.fun (around $93,660), they "graduate" to Raydium DEX. During this transfer window, scammers can create tokens with identical names/symbols but different contract addresses. Unsuspecting investors may purchase these clones thinking they\'re buying the real token that reached the graduation threshold.',
        identification: 'Always verify the contract address on both platforms. Legitimate tokens migrating from Pump.fun to Raydium will have substantial liquidity, while clones typically have minimal liquidity. Cross-reference the token contract with official project communications.'
      }
    ]
  },
  {
    id: 'kol-alerts',
    name: 'KOLs & Alert Groups',
    icon: <FaChartLine className="text-yellow-500" size={24} />,
    description: 'Key Opinion Leaders (KOLs) and alert groups who claim to provide unbiased market analysis but are actually paid to promote specific tokens or who use their follower base to pump tokens they\'ve already accumulated.',
    details: [
      'KOLs and alert groups build a following by claiming to have special insights or analysis skills',
      'They showcase high success rates and impressive returns on their calls to attract subscribers',
      'Many receive direct payment from projects to promote tokens while presenting analysis as independent',
      'Large groups accumulate positions in low liquidity tokens before alerting their followers to buy',
      'The resulting influx of buyer volume from followers creates price spikes, allowing group leaders to exit at a profit',
      'The artificially pumped tokens typically collapse shortly after group leaders exit their positions'
    ],
    warning_signs: [
      'Suspiciously high "win rates" on calls (legitimate traders rarely achieve consistent >70% win rates)',
      'Lack of transparency about compensation received from projects they promote',
      'Minimal disclosure about their own positions in recommended tokens',
      'Urgency in messaging ("buy now" or "last chance")',
      'Absence of risk analysis or downside scenarios in their recommendations',
      'Deletion of past unsuccessful calls to manipulate their track record',
      'Excessive focus on short-term price action rather than fundamentals'
    ],
    prevention: [
      'Always assume KOLs and alert groups have accumulated positions before making calls',
      'Look for transparent disclosure of compensation and personal positions',
      'Check if alerts include proper risk analysis and potential downside scenarios',
      'Verify if past unsuccessful calls remain visible or have been deleted',
      'Never make investment decisions solely based on KOL recommendations',
      'Develop your own analysis skills rather than relying on alert services'
    ],
    examples: [
      'FaZe Clan members promoting SaveTheKids token, which crashed after their followers invested',
      'Multiple Discord/Telegram groups with thousands of members who pump low-cap tokens using coordinated buying',
      'Twitter/YouTube influencers who promoted tokens like SafeMoon and EMAX without disclosing compensation'
    ],
    tacticsBreakdown: [
      {
        name: 'Front-Running Subscribers',
        description: 'Group leaders accumulate tokens before sending alerts, then sell into the liquidity provided by their followers.',
        details: 'Group leaders typically buy tokens at low prices, then alert their followers to "a great opportunity." As thousands of followers buy in, the price rises, allowing the leaders to sell their pre-accumulated positions at a profit. This creates an artificial pump driven not by the token\'s fundamental value but by the predictable behavior of the group\'s members.',
        identification: 'Check wallet activity of suspected alert group leaders to see if they buy before alerts and sell shortly after. Be wary of groups that don\'t share entry prices in real-time or that suddenly promote low-cap projects with minimal liquidity.'
      },
      {
        name: 'Manufactured Win Rates',
        description: 'Creating artificially high success percentages by manipulating what counts as a "win" and selectively reporting results.',
        details: 'Many groups advertise 80-90% win rates, which are statistically improbable in trading. These rates are manufactured by counting small price increases as "wins" even if they\'re temporary, deleting failed calls, setting absurdly low targets that are almost guaranteed to hit, or simply fabricating results. The real success isn\'t from market analysis but from creating self-fulfilling prophecies - when enough people buy simultaneously, prices inevitably rise temporarily.',
        identification: 'Request verifiable, time-stamped historical alerts and calculate actual returns if you had followed every call. Legitimate analysts typically have win rates between 40-60% but positive overall returns because winners outperform losers.'
      },
      {
        name: 'Paid Promotions Disguised as Analysis',
        description: 'Receiving payment to promote tokens while presenting the recommendation as independent research.',
        details: 'KOLs and alert groups often receive direct payment (or pre-allocated tokens) from projects to promote them. These compensated recommendations are then presented as unbiased analysis with price targets and technical charts. The payment arrangements are rarely disclosed prominently, if at all. The resulting "analysis" typically emphasizes potential gains while minimizing or ignoring significant risks.',
        identification: 'Look for small, easily missed disclosures like #ad or #sponsored. Be skeptical of sudden interest in obscure projects, especially when multiple influencers promote the same token simultaneously. Genuine analysis usually includes balanced risk assessment.'
      },
      {
        name: 'Tiered Alert Systems',
        description: 'Creating multiple membership tiers where higher-paying members receive alerts before lower tiers, allowing cascading pump and dump schemes.',
        details: 'Some groups operate tiered systems where premium members receive alerts minutes or hours before regular members. This allows the highest tier (and group leaders) to buy at lower prices, then sell into the demand created by regular members who receive the alert later. This is essentially a sophisticated pump and dump scheme where members unknowingly create exit liquidity for each other and the group leaders.',
        identification: 'Compare notes with members in different tiers about alert timing. If price significantly rises before most members receive the alert, the group is likely operating a tiered pump system.'
      },
      {
        name: 'False Credibility Through Association',
        description: 'Creating an illusion of expertise by associating with legitimate projects or claiming special relationships with insiders.',
        details: 'Many KOLs inflate their credibility by claiming connections to legitimate project teams or venture capitalists. They may post photographs with known industry figures or claim to have "insider information" from anonymous sources. These associations are often tenuous or entirely fabricated but create an impression of special access or knowledge that followers cannot verify.',
        identification: 'Be skeptical of vague claims about "sources" or "connections." Legitimate insiders rarely share material non-public information, as this could constitute illegal market manipulation or securities violations.'
      }
    ],
    psychologySection: [
      {
        title: 'The Self-Fulfilling Prophecy Effect',
        content: 'Large alert groups create "wins" simply through the volume of their followers. When thousands of people simultaneously buy a token with limited liquidity, the price inevitably rises in the short term. This creates the illusion that the group leader predicted a market movement, when in reality they created it through their influence. This self-fulfilling dynamic helps maintain the perception that the group has special insight or skills.'
      },
      {
        title: 'The Survivorship Bias Trap',
        content: 'Most followers only see the successful calls highlighted by group leaders while failed calls are downplayed or deleted. This creates a skewed perception of the group\'s success rate. Additionally, followers who lose money often leave quietly, while those who profit become vocal advocates, further distorting the perceived value of the group.'
      },
      {
        title: 'The Authority Bias',
        content: 'Many KOLs cultivate an image of expertise through displays of wealth (luxury cars, expensive watches, screenshots of trades) and complex-looking analysis. This triggers authority bias in followers, who assume someone who appears successful must have special knowledge. In reality, this displayed wealth often comes from subscription fees or paid promotions rather than actual trading skill.'
      }
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
                    
                    {scam.tacticsBreakdown && (
                      <div className="bg-gray-700 p-6 rounded-lg mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Common Tactics Used by {scam.name}</h4>
                        <div className="space-y-6">
                          {scam.tacticsBreakdown.map((tactic, i) => (
                            <div key={i} className="bg-gray-600 p-5 rounded-lg">
                              <h5 className="text-lg font-medium text-yellow-400 mb-2">{tactic.name}</h5>
                              <p className="mb-3">{tactic.description}</p>
                              
                              <div className="mt-3 space-y-3">
                                <div>
                                  <h6 className="font-medium text-gray-200">How it works:</h6>
                                  <p className="text-sm text-gray-300">{tactic.details}</p>
                                </div>
                                
                                <div>
                                  <h6 className="font-medium text-gray-200">How to identify it:</h6>
                                  <p className="text-sm text-gray-300">{tactic.identification}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {scam.psychologySection && (
                      <div className="bg-yellow-900/20 p-6 rounded-lg mt-6 border border-yellow-800/30">
                        <h4 className="text-lg font-semibold text-yellow-400 mb-4">The Psychology Behind It</h4>
                        <div className="space-y-4">
                          {scam.psychologySection.map((section, i) => (
                            <div key={i} className="bg-gray-700/50 p-4 rounded-lg">
                              <h5 className="font-medium text-white mb-2">{section.title}</h5>
                              <p className="text-sm">{section.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {scam.scamTactics && (
                      <div className="bg-gray-700 p-6 rounded-lg mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Specific Tactics Used in {scam.name}</h4>
                        <div className="space-y-6">
                          {scam.scamTactics.map((tactic, i) => (
                            <div key={i} className="bg-gray-600 p-5 rounded-lg">
                              <h5 className="text-lg font-medium text-blue-400 mb-2">{tactic.name}</h5>
                              <p className="mb-3">{tactic.description}</p>
                              
                              <div className="mt-3 space-y-3">
                                <div>
                                  <h6 className="font-medium text-gray-200">How it works:</h6>
                                  <p className="text-sm text-gray-300">{tactic.technicalDetails}</p>
                                </div>
                                
                                <div>
                                  <h6 className="font-medium text-gray-200">How to identify it:</h6>
                                  <p className="text-sm text-gray-300">{tactic.identification}</p>
                                </div>
                              </div>
                            </div>
                          ))}
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