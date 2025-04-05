import React from 'react'
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

export default function Manifesto() {
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

  return (
    <>
      <Head>
        <title>The Open Crypto Manifesto | Open Crypto Foundation</title>
        <meta
          name="description"
          content="Our manifesto on the critical issues facing cryptocurrency and DeFi, including scams, regulatory failures, and the need for greater user protection and education."
        />
      </Head>

      <section className="pt-12 pb-16 bg-gradient-to-br from-black to-gray-900 text-white border-b border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center mb-8 opacity-20 absolute">
              <SkullLogo size="md" />
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-center relative z-10">The Open Crypto Manifesto</h1>
            <p className="text-xl opacity-90 mb-6 text-center">
              A call for transparency, accountability, and reform in the cryptocurrency and DeFi ecosystem
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Published by Open Crypto Foundation</span>
              <span className="mx-2">•</span>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <div className="mb-12 p-6 bg-gray-800 border-l-4 border-gray-600 rounded-lg">
              <h2 className="mt-0 text-white flex items-center">
                <FaExclamationTriangle className="mr-2 text-gray-400" />
                Our Position
              </h2>
              <p className="mb-0 text-gray-300">
                We believe in the transformative potential of decentralized technology, but we cannot 
                ignore the devastating impact of scams, market manipulation, and regulatory failures 
                that have become endemic to this space. This manifesto outlines the critical issues we 
                must address as a community, backed by data and real-world impacts. Our mission is to 
                advocate for meaningful reform while empowering users with the knowledge needed to 
                navigate these waters safely.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
              <FaHandHoldingUsd className="mr-2 text-gray-400" />
              The Human Cost: Lives Destroyed by Crypto Scams
            </h2>

            <p className="text-gray-300">
              Behind the market cap figures and trading volumes are real human beings whose lives have been 
              devastated by cryptocurrency scams, collapses, and exploits. While proponents focus on financial 
              inclusion and technological innovation, the industry has a darker reality: countless individuals 
              have lost life savings, homes, relationships, and in some cases, even taken their own lives 
              following catastrophic financial losses in crypto markets.
            </p>

            <div className="my-8 p-6 bg-red-900/30 border border-red-800/50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-300">Crypto Scam Impact: By the Numbers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {scamStatistics.map((item, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                    <div className="text-2xl font-bold text-red-400 mb-2">{item.stat}</div>
                    <p className="text-gray-300 mb-1">{item.description}</p>
                    <p className="text-sm text-gray-400 italic">Source: {item.source}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300">
              These statistics represent more than numbers—they represent shattered dreams, depleted 
              retirement accounts, lost homes, and strained relationships. The cryptocurrency 
              ecosystem has created a perfect storm of factors that make scams particularly devastating:
            </p>

            <ul className="text-gray-300">
              <li><strong className="text-white">Irreversible transactions</strong> mean that once funds are stolen, there is virtually no recourse</li>
              <li><strong className="text-white">Complex technology</strong> that few users fully understand creates information asymmetry exploited by scammers</li>
              <li><strong className="text-white">FOMO culture</strong> encourages impulsive decisions and overinvestment beyond what individuals can afford to lose</li>
              <li><strong className="text-white">Lack of regulation</strong> means few safeguards exist to protect retail investors</li>
              <li><strong className="text-white">Pseudonymity</strong> allows perpetrators to hide their identities and escape consequences</li>
            </ul>

            <div className="my-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Real People, Real Losses</h3>
              <div className="space-y-6">
                {victimStories.map((victim, index) => (
                  <div key={index} className="bg-gray-700/50 p-5 rounded shadow-sm border border-gray-600">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-white">Age: {victim.age}</span>
                      <span className="font-bold text-red-400">Lost: {victim.investment}</span>
                    </div>
                    <p className="mb-2 text-gray-300"><strong className="text-white">Background:</strong> {victim.background}</p>
                    <p className="mb-2 text-gray-300"><strong className="text-white">Platform:</strong> {victim.platform}</p>
                    <p className="text-gray-300"><strong className="text-white">Outcome:</strong> {victim.outcome}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-400 italic">
                These represent composite profiles based on multiple documented cases. Specific details have been altered to protect privacy.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FaNewspaper className="mr-2 text-gray-400" />
              High-Profile Collapses: Billions Erased Overnight
            </h2>

            <p>
              The cryptocurrency industry has seen a series of catastrophic collapses that have shaken even 
              ardent believers. These weren't simply market corrections or the failure of speculative projects; 
              they were fundamental breakdowns that exposed fraud, mismanagement, and systemic risks at the 
              highest levels of the industry.
            </p>

            <div className="my-8">
              {majorScams.map((scam, index) => (
                <div key={index} className="mb-6 border border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 p-4 border-b border-gray-700">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{scam.name}</h3>
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-4">{scam.year}</span>
                        <span className="text-red-400 font-bold">{scam.estimatedLoss}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-gray-900">
                    <p className="mb-3 text-gray-300">{scam.description}</p>
                    <div className="bg-red-900/30 p-3 rounded mb-3 border border-red-800/50">
                      <p className="font-semibold text-red-300">Impact: {scam.impact}</p>
                    </div>
                    <p className="text-gray-400 text-sm"><strong className="text-gray-300">Current Status:</strong> {scam.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              These collapses represent more than financial losses—they represent broken trust. Many of these projects 
              were endorsed by respected figures in finance, technology, and venture capital. They underwent audits, 
              received billions in institutional investment, and were held up as examples of cryptocurrency's legitimacy, 
              only to implode and expose lies at their foundation.
            </p>

            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FaChartLine className="mr-2 text-gray-400" />
              The Real Winners: Platforms Extracting Value
            </h2>

            <p>
              While most cryptocurrency participants have experienced significant losses during market downturns, one group 
              has consistently profited regardless of market conditions: the platforms and exchanges that facilitate trading. 
              These entities collect fees on every transaction, benefiting from volatility and volume rather than directional 
              price movement.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full bg-gray-800 border border-gray-700">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="py-3 px-4 border-b border-gray-700 text-left text-white">Platform</th>
                    <th className="py-3 px-4 border-b border-gray-700 text-left text-white">Annual Revenue</th>
                    <th className="py-3 px-4 border-b border-gray-700 text-left text-white">Revenue Sources</th>
                    <th className="py-3 px-4 border-b border-gray-700 text-left text-white">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {platformFees.map((platform, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-850'}>
                      <td className="py-3 px-4 border-b border-gray-700 font-medium text-white">{platform.platform}</td>
                      <td className="py-3 px-4 border-b border-gray-700 text-gray-300">{platform.annualRevenue}</td>
                      <td className="py-3 px-4 border-b border-gray-700 text-gray-300">{platform.source}</td>
                      <td className="py-3 px-4 border-b border-gray-700 text-sm text-gray-400">{platform.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The misalignment of incentives is clear: these platforms profit from transaction volume and user 
              activity—not from user success. This creates a troubling dynamic where platforms have little incentive 
              to prevent harmful trading patterns or protect users from scams, as long as those activities generate fees. 
              In fact, the most profitable activities for platforms often involve:
            </p>

            <ul>
              <li>High-frequency trading and market volatility</li>
              <li>Listing fees from new tokens, regardless of their legitimacy</li>
              <li>Promoting speculative trading rather than long-term investment</li>
              <li>Complex derivatives and leveraged products with high fees</li>
              <li>Encouraging continuous trading through gamification and FOMO</li>
            </ul>

            <div className="p-6 bg-yellow-900/20 border-l-4 border-yellow-700/50 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2 text-yellow-300">The Imbalance of Risk and Reward</h3>
              <p className="text-gray-300 mb-0">
                Platform revenue models create a fundamental imbalance: they collect guaranteed income 
                through fees while offloading all risk to users. When projects fail or markets crash, 
                exchanges and platforms retain all historical fees collected, while users bear the entirety 
                of the losses. This asymmetry explains why exchanges remain highly profitable even during 
                extended bear markets when most users are losing money.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FaUserShield className="mr-2 text-gray-400" />
              Celebrity Endorsements and Influencer Manipulation
            </h2>

            <p>
              A particularly troubling aspect of cryptocurrency scams has been the role of celebrities and 
              influencers who have leveraged their fame and follower bases to promote questionable or 
              outright fraudulent projects—often without disclosing their compensation or conflicts of interest.
            </p>

            <div className="my-8 space-y-4">
              {celebrityScams.map((item, index) => (
                <div key={index} className="p-5 border border-gray-700 bg-gray-800 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{item.celebrity}</h3>
                    <div className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm border border-indigo-700/50">
                      Promoted: {item.project}
                    </div>
                  </div>
                  <p className="mb-3 text-gray-300">{item.action}</p>
                  <p className="text-sm text-gray-400"><strong className="text-white">Outcome:</strong> {item.consequence}</p>
                </div>
              ))}
            </div>

            <p>
              These high-profile promotions significantly amplify harm by:
            </p>

            <ul>
              <li>Lending legitimacy to projects through association with trusted public figures</li>
              <li>Reaching millions of followers who lack the technical knowledge to evaluate the claims</li>
              <li>Creating artificial FOMO (fear of missing out) that drives impulsive investment decisions</li>
              <li>Disproportionately affecting vulnerable and less financially sophisticated audiences</li>
            </ul>

            <p>
              While some celebrities have faced SEC fines for these promotions, the penalties have typically 
              been far smaller than the compensation received, creating a situation where the financial 
              incentive to promote dubious projects outweighs the potential consequences.
            </p>

            <h2 className="text-3xl font-bold mb-6 flex items-center mt-12 text-white">
              <FaRegLightbulb className="mr-2 text-gray-400" />
              The Crypto Influencer Problem: Misinformation and Conflicts of Interest
            </h2>

            <p className="text-gray-300">
              Beyond mainstream celebrities, a uniquely damaging ecosystem of crypto-specific influencers has emerged. 
              Unlike traditional financial advisors who operate under regulatory oversight and fiduciary responsibilities, 
              crypto influencers often have little to no background in finance, economics, or market analysis—yet millions 
              rely on their advice for investment decisions.
            </p>

            <div className="my-8 bg-red-900/30 p-6 rounded-lg border border-red-800/50">
              <h3 className="text-xl font-bold mb-4 text-red-300">The Dangerous Reality of Crypto Influencers</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Lack of Financial Expertise</h4>
                  <p className="text-gray-300">
                    Many popular crypto influencers have no formal training in finance, economics, or investment management. 
                    Their expertise often comes from simply being early adopters who got lucky during bull markets, not from 
                    understanding fundamentals or risk management. Despite this, they confidently provide specific investment 
                    advice to audiences of hundreds of thousands or millions.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Undisclosed Conflicts of Interest</h4>
                  <p className="text-gray-300">
                    Crypto influencers frequently hold positions in the assets they promote, receive payments for 
                    recommendations, negotiate private pre-sale allocations, and create multiple revenue streams from 
                    the projects they endorse—all while presenting themselves as unbiased information sources. These 
                    conflicts are rarely disclosed with the transparency that would be legally required in traditional 
                    financial advising.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Profit from Volatility and Emotion</h4>
                  <p className="text-gray-300">
                    The business model of many influencers relies on generating engagement through emotional content that 
                    creates either excessive euphoria ("to the moon") or panic ("crash incoming"). This content drives 
                    views, subscriptions, and paid promotions while encouraging the exact type of emotional trading that 
                    harms retail investors. By profiting from both panic and euphoria, these influencers have no incentive 
                    to promote responsible investing.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Coordinated Pump and Dumps</h4>
                  <p className="text-gray-300">
                    Investigation has revealed multiple private groups where influencers coordinate promotion of tokens, 
                    creating artificial hype before selling into the demand they generate. These schemes have become so 
                    common that they're barely hidden, with influencers openly discussing "bags" they're looking to "pump" 
                    across social media platforms.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300">
              The impact of this influencer ecosystem extends beyond individual scams, creating a culture of 
              misinformation that damages the entire space:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-300">
              <li>
                <strong className="text-white">Normalization of unrealistic returns</strong> - Creating expectations of 100x or 1000x gains 
                leads investors to reject legitimate projects with sustainable but modest return potential
              </li>
              <li>
                <strong className="text-white">Technical analysis theater</strong> - Pseudoscientific chart reading and predictions give 
                followers a false sense of certainty in highly unpredictable markets
              </li>
              <li>
                <strong className="text-white">Echo chambers</strong> - Influencers cross-promote each other, creating closed information 
                ecosystems where critical perspectives are labeled as "FUD" and excluded
              </li>
              <li>
                <strong className="text-white">Expertise inversion</strong> - The loudest, most confident voices gain the largest platforms, 
                while nuanced, risk-aware perspectives are drowned out
              </li>
              <li>
                <strong className="text-white">Manufactured consensus</strong> - Coordinated messaging across multiple influencers creates 
                the illusion of widespread agreement about dubious projects or tokens
              </li>
            </ul>

            <div className="p-6 bg-yellow-900/20 border-l-4 border-yellow-700/50 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2 text-yellow-300">The Regulatory Gap</h3>
              <p className="text-gray-300 mb-0">
                While financial advisors must register with regulatory bodies, disclose conflicts of interest, 
                and can face significant penalties for misleading clients, crypto influencers operate in a regulatory 
                gray area. By avoiding terms like "financial advice" while still making specific investment recommendations, 
                they exploit loopholes that enable them to effectively function as unregistered, unqualified investment 
                advisors without any accountability for the financial harm they cause.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
              <FaBalanceScale className="mr-2 text-gray-400" />
              Regulatory Failures and Accountability Gaps
            </h2>

            <p className="text-gray-300">
              Much of the harm in cryptocurrency markets can be attributed to regulatory failures—gaps, 
              inconsistencies, and enforcement issues that have allowed bad actors to operate with near-impunity.
            </p>

            <div className="p-6 bg-blue-900/30 border-l-4 border-blue-700 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2 text-blue-300">The Jurisdictional Arbitrage Problem</h3>
              <p className="text-gray-300">
                A significant challenge is that cryptocurrency operates globally while regulations 
                are jurisdictional. This creates "regulatory arbitrage" opportunities where projects 
                simply relocate to the most permissive jurisdictions, undermining attempts at meaningful 
                oversight. Addressing this requires international coordination and agreement on 
                baseline standards that protect users regardless of their location.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FaRegLightbulb className="mr-2 text-gray-400" />
              Glorification of Get-Rich-Quick Schemes
            </h2>

            <p>
              Perhaps the most insidious aspect of cryptocurrency culture has been the normalization and 
              glorification of behavior that would be recognized as predatory in any other context. Terms 
              like "rug pull," "pump and dump," and "exit scam" have become commonplace, often discussed 
              with humor rather than the moral condemnation they deserve.
            </p>

            <p>
              The industry has developed a disturbing vocabulary that masks unethical behavior:
            </p>

            <ul>
              <li><strong>"Diamond hands"</strong> – Celebrating holding through losses, often encouraging others not to sell while insiders exit</li>
              <li><strong>"FUD"</strong> – Dismissing legitimate criticism or concerns as "Fear, Uncertainty and Doubt"</li>
              <li><strong>"WAGMI"</strong> (We're All Gonna Make It) – Creating false solidarity that discourages critical thinking</li>
              <li><strong>"Degen"</strong> – Normalizing reckless financial behavior as a badge of honor</li>
              <li><strong>"Pump it"</strong> – Openly discussing market manipulation as a community goal</li>
            </ul>

            <p>
              This culture has created an environment where predatory behavior is rewarded and even celebrated, 
              with social media influencers openly bragging about "getting in early" and selling to less informed 
              buyers at inflated prices. The gamification of financial predation represents a moral failing of 
              the cryptocurrency community that cannot be addressed through technology or regulation alone.
            </p>

            <h2 className="text-3xl font-bold mb-6 flex items-center mt-12">
              <FaChartLine className="mr-2 text-gray-400" />
              The Retail-Dominated Market: Emotional Trading and Low Barriers to Entry
            </h2>

            <p>
              Another critical factor contributing to DeFi's vulnerability is its participant composition. 
              Unlike traditional financial markets with substantial institutional involvement and professional oversight, 
              cryptocurrency markets remain heavily dominated by retail traders with minimal financial education or 
              experience managing substantial assets.
            </p>

            <div className="my-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">The Dangerous Combination of Low Barriers and High Stakes</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded shadow-sm border border-gray-600">
                  <h4 className="font-bold text-white mb-2">Minimal Entry Requirements</h4>
                  <p className="text-gray-300">
                    Anyone with a smartphone and internet connection can begin trading cryptocurrencies with no minimum 
                    knowledge requirements, background checks, or understanding of financial principles. This democratization 
                    of access, while aligned with crypto's ethos, creates an environment where the least prepared participants 
                    are making high-risk financial decisions with significant capital.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded shadow-sm border border-gray-600">
                  <h4 className="font-bold text-white mb-2">Gambling Tendencies Masquerading as Investment</h4>
                  <p className="text-gray-300">
                    For many participants, cryptocurrency trading has become an outlet for gambling tendencies rather than 
                    thoughtful investment. The rapid feedback loops, 24/7 markets, and potential for dramatic gains activate 
                    the same dopamine pathways as traditional gambling, but without the social stigma or regulatory oversight. 
                    Trading interfaces that use gamification elements further blur the line between investing and gambling.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded shadow-sm border border-gray-600">
                  <h4 className="font-bold text-white mb-2">Emotional Decision-Making at Scale</h4>
                  <p className="text-gray-300">
                    The inherent emotional immaturity and inexperience of many retail traders creates market-wide volatility 
                    that wouldn't exist in professionally managed markets. Fear and greed drive massive coordinated movements 
                    as retail traders simultaneously panic-sell during downturns or FOMO-buy during upswings, amplifying market 
                    movements beyond what fundamentals would justify.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded shadow-sm border border-gray-600">
                  <h4 className="font-bold text-white mb-2">Self-Inflicted Harm</h4>
                  <p className="text-gray-300">
                    Paradoxically, retail traders often become victims of their own collective behavior. The same retail investors 
                    who create visibility for fraudulent projects through social sharing and FOMO eventually become the victims when 
                    those projects collapse. Similarly, waves of panic selling often see retail investors liquidating assets at market 
                    bottoms, effectively "rugging themselves" and transferring wealth to more patient, sophisticated players.
                  </p>
                </div>
              </div>
            </div>

            <p>
              This retail-dominated environment creates several systemic vulnerabilities:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>
                <strong>Exploitation opportunities</strong> - Sophisticated bad actors can easily manipulate markets by triggering 
                predictable emotional responses from retail traders
              </li>
              <li>
                <strong>Exaggerated volatility</strong> - Normal market movements are amplified by emotional herding behaviors, 
                creating volatility that drives away legitimate institutional investment
              </li>
              <li>
                <strong>Susceptibility to social engineering</strong> - Retail traders are more influenced by social proof and peer 
                validation than by fundamental analysis or risk assessment
              </li>
              <li>
                <strong>Fragile liquidity</strong> - During market stress, retail traders tend to move in herds, creating sudden 
                liquidity crises that wouldn't occur with more diverse market participants
              </li>
              <li>
                <strong>Shortened project timelines</strong> - The impatience of retail traders forces projects to prioritize 
                short-term token price over sustainable development
              </li>
            </ul>

            <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2">The Missing Professional Layer</h3>
              <p className="mb-0">
                While traditional finance certainly has its flaws, it benefits from layers of professional 
                management, risk assessment, and fiduciary responsibility that are largely absent in DeFi. 
                The absence of these professional guardrails means even well-intentioned retail participants 
                are navigating complex financial products without the expertise to evaluate them properly. 
                This knowledge gap is easily exploited by those with more sophisticated understanding, creating 
                a persistent asymmetry that disadvantages average users.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 flex items-center mt-12">
              <FaRegLightbulb className="mr-2 text-gray-400" />
              A Note on Redemption: Beyond Blame and Shame
            </h2>

            <p>
              Despite the critical issues we've outlined, we must emphasize that the Open Crypto Foundation 
              does not believe in shaming individuals—whether they've perpetrated scams or fallen victim to them. 
              We recognize the complex circumstances that can lead people to make morally and legally questionable 
              choices, and we understand that human beings are capable of growth, change, and redemption.
            </p>

            <div className="my-8 bg-green-900/30 p-6 rounded-lg border border-green-800/50">
              <h3 className="text-xl font-bold mb-4 text-green-300">Our Approach to Reform and Redemption</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Past Mistakes as Valuable Insight</h4>
                  <p className="text-gray-300">
                    We believe that individuals who have participated in questionable activities but have since 
                    reformed can provide invaluable perspective. Former scammers who choose to become part of the 
                    solution rather than the problem offer unique insights that can strengthen protective measures 
                    and educational resources. Their experience and knowledge, when directed toward positive change, 
                    can be transformative for the ecosystem.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Education Over Ostracism</h4>
                  <p className="text-gray-300">
                    Our goal is not to eliminate scams by vilifying those who've perpetrated them, but rather 
                    by making potential victims more knowledgeable and aware of the tactics used against them. 
                    By focusing on education and awareness rather than shame and retribution, we create an environment 
                    where redemption is possible and prevention is prioritized.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Alternative Paths and Incentives</h4>
                  <p className="text-gray-300">
                    We're committed to demonstrating that there are legitimate, sustainable ways to earn a living 
                    in the cryptocurrency space. By highlighting ethical business models, promoting transparency in 
                    tokenomics, and showcasing success stories of reformed individuals, we aim to redirect talent 
                    toward constructive rather than exploitative endeavors.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded shadow-sm border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Harm Reduction Approach</h4>
                  <p className="text-gray-300">
                    While we firmly stand against fraudulent activities, we also recognize that taking a purely 
                    punitive approach has limitations. For those who remain determined to engage in questionable practices, 
                    we advocate for principles that at least minimize harm to the most financially vulnerable users. 
                    This pragmatic stance acknowledges that perfect solutions don't exist, but harm reduction is always possible.
                  </p>
                </div>
              </div>
            </div>

            <p>
              This balanced approach reflects our understanding that the crypto ecosystem—like any human system—is not 
              black and white. Victims sometimes become perpetrators, scammers can become reformers, and even well-intentioned 
              projects can cause harm through poor design or oversight. By maintaining this nuanced perspective, we aim 
              to create spaces for genuine reform while never compromising on our core mission of user protection.
            </p>

            <div className="p-6 bg-purple-900/20 border-l-4 border-purple-700/50 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2 text-purple-300">The Power of Lived Experience</h3>
              <p className="text-gray-300 mb-0">
                Some of the most effective advocates for safety and transparency in cryptocurrency come from 
                backgrounds that include involvement in problematic projects. Their journey from participating 
                in harmful activities to actively working to prevent them represents exactly the kind of 
                transformation the space needs. We value these perspectives and believe that redemption stories 
                can be powerful catalysts for positive change in an ecosystem still finding its ethical footing.
              </p>
            </div>

            <div className="my-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Balancing Accountability with Redemption</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded shadow-sm border border-gray-600">
                  <h4 className="font-bold text-white mb-2">Justice and Second Chances</h4>
                  <p className="text-gray-300">
                    While we advocate for redemption, we also firmly believe in accountability. There must be a balance 
                    between providing second chances to those who have genuinely reformed and ensuring that harmful 
                    actions have appropriate consequences. This balance is essential for maintaining the integrity of 
                    the ecosystem while allowing for personal growth and transformation.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded shadow-sm border border-gray-600">
                  <h4 className="font-bold text-white mb-2">Empowering Victims to Speak Up</h4>
                  <p className="text-gray-300">
                    Many crypto frauds go undetected because victims remain silent due to shame, embarrassment, or fear 
                    of ridicule. We must create safe spaces where victims can share their experiences without judgment. 
                    When victims speak up, they not only help themselves heal but also protect others by exposing 
                    fraudulent schemes and actors. Their testimony is invaluable to building a safer ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FaShieldAlt className="mr-2 text-gray-400" />
              Our Commitment: A Path Forward
            </h2>

            <p>
              Despite these profound challenges, we at the Open Crypto Foundation believe in the potential 
              for blockchain technology and decentralized finance to create meaningful positive change. However, 
              this potential can only be realized if we honestly confront the problems plaguing the industry 
              and commit to fundamental reforms.
            </p>

            <p>
              Our commitment is to advocate for:
            </p>

            <ul>
              <li><strong>User-centered design</strong> that prioritizes protection over speculation</li>
              <li><strong>Meaningful transparency</strong> in project funding, tokenomics, and risk disclosures</li>
              <li><strong>Educational resources</strong> that help users understand risks without technical jargon</li>
              <li><strong>Sensible regulation</strong> that protects users without stifling innovation</li>
              <li><strong>Platform accountability</strong> for the projects they list and promote</li>
              <li><strong>Ethical standards</strong> for developers, influencers, and platforms</li>
            </ul>

            <p>
              We believe the future of cryptocurrency depends on building user trust through actual 
              protection rather than empty promises. The technology remains revolutionary, but the culture 
              and business practices surrounding it must evolve from a predatory gold rush to a sustainable 
              ecosystem that delivers real value to users.
            </p>

            <div className="mt-12 p-6 bg-gray-800 border-l-4 border-gray-600 rounded-lg">
              <h2 className="mt-0 text-white">Join Our Mission</h2>
              <p className="mb-4 text-gray-300">
                The Open Crypto Foundation is committed to advancing the values outlined in this manifesto 
                through education, advocacy, and the development of tools that help users navigate this 
                complex landscape safely.
              </p>
              <p className="mb-0 text-gray-300">
                We invite you to explore our resources, utilize our tools, and join us in promoting a 
                cryptocurrency ecosystem that serves users rather than exploits them.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a 
                  href="/resources/defi-fundamentals" 
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Educational Resources
                </a>
                <a 
                  href="/tools" 
                  className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Safety Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 