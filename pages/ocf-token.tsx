import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  FaCoins, 
  FaVoteYea, 
  FaUsers, 
  FaShieldAlt, 
  FaExchangeAlt, 
  FaChartLine, 
  FaLock, 
  FaGlobe, 
  FaHandshake,
  FaFileAlt,
  FaRoad
} from 'react-icons/fa'
import { IconType } from 'react-icons'
import ScrollToTop from '../components/ScrollToTop'

interface BenefitProps {
  icon: IconType;
  title: string;
  description: string;
}

interface GovernanceProcessProps {
  title: string;
  icon: IconType;
  description: string;
}

interface TreasuryUseCaseProps {
  title: string;
  percentage: number;
  description: string;
  color: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitProps) => (
  <div className="bg-dark-elevated rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-dark-elevated/70">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-primary/10 p-3 rounded-lg">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const GovernanceStep = ({ icon: Icon, title, description }: GovernanceProcessProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="bg-primary/10 p-3 rounded-lg mt-1">
        <Icon size={20} className="text-primary" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
    </div>
  </div>
);

const TreasuryUseCase = ({ title, percentage, description, color }: TreasuryUseCaseProps) => (
  <div className="bg-dark-card rounded-xl border border-gray-800 overflow-hidden">
    <div className={`${color} px-4 py-3`}>
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400">Allocation</span>
        <span className="text-white font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
        <div className={`${color.replace('bg-', 'bg-')} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

export default function OCFToken() {
  const benefits: BenefitProps[] = [
    {
      icon: FaVoteYea,
      title: "Governance Voting Rights",
      description: "OCF token holders can vote on protocol upgrades, treasury allocations, and strategic decisions based on their token holdings."
    },
    {
      icon: FaUsers,
      title: "Community Ownership",
      description: "As a token holder, you own a piece of the OCF protocol and have a direct say in its future direction and development."
    },
    {
      icon: FaShieldAlt,
      title: "Protocol Security",
      description: "Token staking increases network security and decentralization while earning staking rewards for participants."
    },
    {
      icon: FaExchangeAlt,
      title: "Reduced Cross-Chain Fees",
      description: "OCF token holders receive discounted fees when using OCF cross-chain bridges and interoperability services."
    },
    {
      icon: FaChartLine,
      title: "Value Accrual",
      description: "As the OCF ecosystem grows, the OCF token captures value through deflationary mechanisms and protocol fee sharing."
    },
    {
      icon: FaLock,
      title: "Premium Feature Access",
      description: "Holding OCF tokens grants access to premium features across all OCF applications and platforms."
    }
  ];

  const governanceProcess: GovernanceProcessProps[] = [
    {
      icon: FaFileAlt,
      title: "Proposal Submission",
      description: "Any OCF token holder with at least 100,000 tokens (1% of circulating supply) can submit a governance proposal for consideration by the DAO. Proposals can include protocol upgrades, parameter changes, treasury allocations, or new initiatives."
    },
    {
      icon: FaUsers,
      title: "Community Discussion",
      description: "Each proposal undergoes a mandatory 7-day discussion period where the community can debate the merits, suggest improvements, and ask questions to refine the proposal. This happens on the OCF governance forum."
    },
    {
      icon: FaVoteYea,
      title: "Voting Period",
      description: "After the discussion period, voting begins and lasts for 5 days. Votes are weighted by token holdings, with longer-term holders receiving bonus voting weight. A minimum of 5% of the total token supply must participate for a vote to be valid."
    },
    {
      icon: FaHandshake,
      title: "Implementation",
      description: "If a proposal reaches the required quorum and passes with a majority vote (>50% for standard proposals, >66% for core protocol changes), it will be automatically implemented through smart contracts or delegated to the DAO's multisig operators for execution."
    }
  ];

  const treasuryUseCases: TreasuryUseCaseProps[] = [
    {
      title: "Protocol Development",
      percentage: 40,
      description: "Funding ongoing development, security audits, and technical improvements to the OCF protocol stack.",
      color: "bg-blue-900/40"
    },
    {
      title: "Community Grants",
      percentage: 25,
      description: "Supporting community-led projects, educational initiatives, and ecosystem growth activities.",
      color: "bg-purple-900/40"
    },
    {
      title: "Cross-Chain Liquidity",
      percentage: 15,
      description: "Providing liquidity across multiple chains to ensure seamless cross-chain transactions.",
      color: "bg-emerald-900/40"
    },
    {
      title: "Security Reserves",
      percentage: 10,
      description: "Emergency funds reserved for security incidents, bug bounties, and protocol insurance.",
      color: "bg-red-900/40"
    },
    {
      title: "Ecosystem Partnerships",
      percentage: 10,
      description: "Strategic investments and partnerships to expand the OCF ecosystem and interoperability capabilities.",
      color: "bg-amber-900/40"
    }
  ];

  return (
    <>
      <Head>
        <title>OCF Token | Cryptocurrency Governance & DeFi Utility | Open Crypto Foundation</title>
        <meta name="description" content="Discover the OCF governance token powering decentralized finance (DeFi) innovation. Learn about our blockchain technology, DAO structure, token utility, cross-chain capabilities, and cryptocurrency investment benefits." />
        <meta name="keywords" content="OCF token, cryptocurrency, blockchain, DeFi, DAO governance, crypto investment, utility token, Solana, SPL token, digital asset, crypto staking, blockchain protocol" />
      </Head>

      <ScrollToTop />

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">OCF Token: Decentralized Governance & Utility</h1>
          <p className="text-xl text-gray-400 mb-8">The governance cryptocurrency that powers the Open Crypto Foundation blockchain ecosystem, enabling decentralized decision-making, cross-chain interoperability, and DeFi utility for the next generation of crypto innovators.</p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/whitepaper" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center gap-2">
              <FaFileAlt /> Read Whitepaper
            </Link>
            <Link href="/roadmap" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium flex items-center gap-2">
              <FaRoad /> View Roadmap
            </Link>
            <Link href="/tokenomics" className="px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center gap-2">
              <FaCoins /> Tokenomics
            </Link>
          </div>
          
          <div className="bg-dark-card p-8 rounded-xl border border-gray-800 mb-12">
            {/* ICO Announcement Banner */}
            <div className="bg-gradient-to-r from-primary/30 to-purple-800/30 p-4 rounded-lg border border-primary/30 mb-6">
              <div className="flex items-center gap-3">
                <FaCoins size={24} className="text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-white">ICO Announcement</h3>
                  <p className="text-gray-200">Token Live on <span className="text-primary font-semibold">Meteora, PumpSwap, Orca & Raydium on April 18, 2025 at 5PM EST</span></p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FaCoins size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">OCF Contract Address</h2>
              <div className="ml-auto mt-2 sm:mt-0">
                <div className="px-4 py-2 bg-dark-elevated rounded-lg border border-gray-700 font-mono text-sm text-gray-300 flex items-center backdrop-blur-sm relative overflow-hidden">
                  <FaLock className="text-yellow-500 mr-2" />
                  <div className="filter blur-sm select-none">
                    <span className="mr-2 sm:block hidden">Contract:</span> 
                    <span className="text-gray-400">••••••••••••••••••••••••••••••••••••</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-dark-elevated/80 px-2 py-1 rounded text-xs text-primary">Available at launch</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-dark-elevated p-4 rounded-lg border border-gray-800">
                <p className="text-gray-400 mb-1 text-sm">Circulating Supply</p>
                <p className="text-white font-bold text-xl">1,000,000,000 OCF</p>
              </div>
              <div className="bg-dark-elevated p-4 rounded-lg border border-gray-800">
                <p className="text-gray-400 mb-1 text-sm">Network</p>
                <p className="text-white font-bold text-xl">Solana (SPL Token)</p>
              </div>
            </div>
            
            <p className="text-gray-400">
              The OCF token is the governance and utility cryptocurrency that powers the Open Crypto Foundation blockchain ecosystem. 
              It enables holders to participate in the DAO, vote on key decisions, and access premium DeFi features 
              across all OCF applications and services. With Solana's high-performance blockchain technology, OCF token offers 
              fast transactions and low fees for cryptocurrency enthusiasts and investors.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white">OCF DAO: <span className="text-gradient">Decentralized Blockchain Governance</span></h2>
            
            <div className="bg-dark-card p-8 rounded-xl border border-gray-800 mb-8">
              <p className="text-gray-400 mb-6">
                The OCF DAO (Decentralized Autonomous Organization) is the governing body of the Open Crypto Foundation ecosystem. 
                Through the OCF cryptocurrency token, community members collectively make decisions about protocol upgrades, treasury management, 
                and strategic direction, ensuring the blockchain platform remains truly decentralized, secure, and community-owned in the evolving crypto landscape.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-dark-elevated p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                  <FaUsers size={32} className="text-primary mb-3" />
                  <p className="text-white font-semibold mb-1">Community-Owned Blockchain</p>
                  <p className="text-gray-400 text-sm">No central authority or controlling entity</p>
                </div>
                <div className="bg-dark-elevated p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                  <FaGlobe size={32} className="text-primary mb-3" />
                  <p className="text-white font-semibold mb-1">Globally Accessible Crypto</p>
                  <p className="text-gray-400 text-sm">Open to anyone with OCF tokens, regardless of location</p>
                </div>
                <div className="bg-dark-elevated p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                  <FaShieldAlt size={32} className="text-primary mb-3" />
                  <p className="text-white font-semibold mb-1">Transparent & Secure</p>
                  <p className="text-gray-400 text-sm">All decisions and transactions are recorded on-chain</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">The OCF DAO Blockchain Governance Process</h3>
              <div className="space-y-6">
                {governanceProcess.map((step, index) => (
                  <GovernanceStep key={index} {...step} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Benefits of <span className="text-gradient">Holding OCF Cryptocurrency</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">DAO <span className="text-gradient">Crypto Treasury Allocation</span></h2>
            <p className="text-gray-400 mb-6">
              The OCF DAO controls a significant treasury of cryptocurrency tokens that are used to fund ongoing blockchain development, 
              crypto community initiatives, and DeFi ecosystem growth. Token holders vote on how these funds are allocated 
              across various categories to strengthen the platform's position in the digital asset marketplace:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treasuryUseCases.map((useCase, index) => (
                <TreasuryUseCase key={index} {...useCase} />
              ))}
            </div>
          </div>
          
          <div className="bg-dark-card p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-white">How to <span className="text-gradient">Participate in the Blockchain DAO</span></h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg h-min">
                  <span className="font-bold text-primary text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Acquire OCF Cryptocurrency</h3>
                  <p className="text-gray-400 mb-4">
                    Purchase OCF tokens through supported cryptocurrency exchanges or earn them through community contributions 
                    and participation in the blockchain ecosystem.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg h-min">
                  <span className="font-bold text-primary text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Join the DeFi Governance Forum</h3>
                  <p className="text-gray-400 mb-4">
                    Create an account on the OCF Governance Forum to participate in discussions about blockchain innovations, 
                    learn about upcoming crypto proposals, and engage with the DeFi community.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg h-min">
                  <span className="font-bold text-primary text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Delegate or Vote on Blockchain Proposals</h3>
                  <p className="text-gray-400 mb-4">
                    Use your OCF cryptocurrency tokens to vote directly on proposals or delegate your voting power to trusted 
                    community members who align with your vision for the blockchain protocol.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg h-min">
                  <span className="font-bold text-primary text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Submit DeFi Protocol Proposals</h3>
                  <p className="text-gray-400">
                    Once you meet the token threshold, you can submit your own proposals for consideration by the crypto community, 
                    helping shape the future of the Open Crypto Foundation's blockchain ecosystem and DeFi innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 