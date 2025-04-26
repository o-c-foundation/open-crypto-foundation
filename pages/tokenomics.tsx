import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaChartPie, FaExchangeAlt, FaCogs, FaShieldAlt, FaUsers, FaLock, FaCoins, FaServer, FaLightbulb, FaCode, FaNetworkWired, FaVoteYea } from 'react-icons/fa'
import { IconType } from 'react-icons'
import ScrollToTop from '../components/ScrollToTop'

// TypeScript interfaces for props
interface DonutChartSegment {
  name: string;
  percentage: number;
  color: string;
  description: string;
}

interface DonutChartProps {
  segments: DonutChartSegment[];
}

interface NetworkCardProps {
  name: string;
  icon: IconType;
  tokenType: string;
  features: string[];
  allocation: string;
  color: string;
}

interface VestingSchedule {
  category: string;
  immediate: string;
  cliff: string;
  vesting: string;
}

interface UtilityFeature {
  icon: IconType;
  title: string;
  description: string;
}

// Donut chart component for token allocation visualization
const DonutChart = ({ segments }: DonutChartProps) => {
  let cumulativePercentage = 0;
  
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {segments.map((segment, index) => {
          const startAngle = cumulativePercentage * 3.6; // 3.6 degrees per percentage point
          cumulativePercentage += segment.percentage;
          const endAngle = cumulativePercentage * 3.6;
          
          // Calculate the SVG arc parameters
          const x1 = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
          const y1 = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
          const x2 = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
          const y2 = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));
          
          const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
          
          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `Z`
          ].join(' ');
          
          return (
            <path
              key={index}
              d={pathData}
              fill={segment.color}
              stroke="#111927"
              strokeWidth="1"
              className="transition-all duration-300 hover:opacity-80"
            >
              <title>{segment.name}: {segment.percentage}%</title>
            </path>
          );
        })}
        <circle cx="50" cy="50" r="25" fill="#111927" />
      </svg>
    </div>
  );
};

// Network component for displaying token features on different blockchains
const NetworkCard = ({ name, icon: Icon, tokenType, features, allocation, color }: NetworkCardProps) => (
  <div className="bg-dark-card rounded-xl border border-gray-800 overflow-hidden">
    <div className={`${color} px-4 py-3 flex items-center gap-3 border-b border-gray-800`}>
      <Icon size={20} />
      <h3 className="font-semibold text-white">{name}</h3>
      <span className="ml-auto text-xs px-2 py-1 bg-black/20 rounded-full">{tokenType}</span>
    </div>
    <div className="p-5">
      <p className="mb-3 text-sm text-gray-400">OCF Token implements network-specific optimizations:</p>
      <ul className="space-y-2 text-sm mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-400">
        <div className="flex justify-between">
          <span>Network Allocation:</span>
          <span className="text-white font-medium">{allocation} OCF</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Tokenomics() {
  const tokenAllocations: DonutChartSegment[] = [
    { name: 'Initial Treasury', percentage: 100, color: '#4F46E5', description: 'Initial allocation to validator account for operational bootstrapping' }
  ];

  const openTokenAllocations: DonutChartSegment[] = [
    { name: 'Initial Treasury', percentage: 100, color: '#8B5CF6', description: '10,000,000,000 open allocated to validator account' }
  ];

  const stakeTokenAllocations: DonutChartSegment[] = [
    { name: 'Initial Bonding', percentage: 0.1, color: '#EC4899', description: '1,000,000 stake bonded by genesis validator' },
    { name: 'Available for Delegation', percentage: 99.9, color: '#10B981', description: '999,000,000 stake available for delegation' }
  ];

  const vestingSchedules: VestingSchedule[] = [
    { category: 'Initial Treasury', immediate: '100%', cliff: 'None', vesting: 'None' },
    { category: 'Genesis Validator', immediate: '100%', cliff: 'None', vesting: 'None' }
  ];

  const networks: NetworkCardProps[] = [
    {
      name: 'OpenNet',
      icon: FaNetworkWired,
      tokenType: 'Native',
      color: 'bg-blue-900/40',
      allocation: '10,000,000,000 open / 1,000,000,000 stake',
      features: [
        'Cosmos SDK and Tendermint Core integration',
        'Dual-token system with clear utility separation',
        'Advanced governance mechanisms via stake token',
        'BFT consensus with slashing conditions',
        'Cross-chain communication protocols'
      ]
    }
  ];

  const utilityFeatures: UtilityFeature[] = [
    {
      icon: FaServer,
      title: 'Network Security',
      description: 'stake tokens are required for validator participation and network security through PoS consensus mechanism.'
    },
    {
      icon: FaExchangeAlt,
      title: 'Transaction Fees',
      description: 'open tokens are used for paying computational and storage costs associated with transactions.'
    },
    {
      icon: FaShieldAlt,
      title: 'Slashing Mechanism',
      description: 'Validators bond stake as collateral, subject to slashing for protocol violations or malicious behavior.'
    },
    {
      icon: FaVoteYea,
      title: 'Governance Rights',
      description: 'stake tokens represent voting power within the OpenNet ecosystem\'s governance framework.'
    },
    {
      icon: FaCode,
      title: 'dApp Utility',
      description: 'open tokens serve as the native currency within applications built upon OpenNet.'
    },
    {
      icon: FaCogs,
      title: 'Platform Services',
      description: 'open tokens may be utilized for accessing specialized tools and services within the ecosystem.'
    }
  ];

  return (
    <>
      <Head>
        <title>OpenNet Token Economics | Open Crypto Foundation</title>
        <meta name="description" content="Comprehensive details about OpenNet's dual-token system, governance model, and economic architecture" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">OpenNet Token Economics</h1>
          <p className="text-xl text-gray-400 mb-8">Document Version: 1.0 | Date: April 26, 2025</p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/whitepaper" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center">
              Read Whitepaper
            </Link>
            <Link href="/roadmap" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium flex items-center">
              View Roadmap
            </Link>
            <Link href="/audit" className="px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center">
              Security Audits
            </Link>
          </div>
          
          <div className="bg-dark-card p-6 rounded-xl border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-400">
              This document delineates the cryptoeconomic architecture and governance framework underpinning the OpenNet blockchain platform. 
              Developed by OpenLabs under the strategic direction of the Open Crypto Foundation, OpenNet is engineered as a sovereign, 
              application-specific blockchain utilizing the Cosmos SDK and Tendermint Core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaChartPie size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">open Token Allocation</h2>
                </div>
                
                <p className="text-gray-400 mb-6">Total Supply: <span className="text-white font-semibold">10,000,000,000 open</span></p>
                
                <DonutChart segments={openTokenAllocations} />
                
                <div className="mt-6 space-y-2">
                  {openTokenAllocations.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: segment.color }} />
                        <span className="text-gray-300">{segment.name}</span>
                      </div>
                      <span className="text-white font-medium">{segment.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaChartPie size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">stake Token Allocation</h2>
                </div>
                
                <p className="text-gray-400 mb-6">Total Supply: <span className="text-white font-semibold">1,000,000,000 stake</span></p>
                
                <DonutChart segments={stakeTokenAllocations} />
                
                <div className="mt-6 space-y-2">
                  {stakeTokenAllocations.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: segment.color }} />
                        <span className="text-gray-300">{segment.name}</span>
                      </div>
                      <span className="text-white font-medium">{segment.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card p-6 rounded-xl border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Core Economic Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Utility</h3>
                <p className="text-gray-400">Tokens must possess intrinsic utility within the ecosystem to drive demand and facilitate network operations.</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-400">The economic design must incentivize participants to act honestly and secure the network against attacks.</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Governance</h3>
                <p className="text-gray-400">Token holders must have formalized mechanisms to govern protocol evolution and strategic direction.</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Sustainability</h3>
                <p className="text-gray-400">The model incorporates mechanisms for long-term network maintenance and ecosystem development.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {utilityFeatures.map((feature, index) => (
              <div key={index} className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <div className="bg-primary/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-dark-card p-6 rounded-xl border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Governance Implementation (DAO)</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Voting Power</h3>
                <p className="text-gray-400">Derived from bonded (staked) stake tokens, with weight proportional to stake amount.</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Proposal Lifecycle</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Submission: Any stake holder can submit proposals meeting deposit requirements</li>
                  <li>Deposit Period: Minimum total deposit within specified timeframe</li>
                  <li>Voting Period: Fixed duration for bonded stake holders to cast votes</li>
                  <li>Tallying: Votes tallied based on predefined thresholds</li>
                  <li>Execution: Automatic execution of approved changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-gray-400">
              The token economics of OpenNet are designed to create a synergistic relationship between utility, security, and decentralized governance. 
              The open token fuels network activity and application usage, while the stake token secures the network through PoS and empowers the community DAO. 
              The initial allocation provides a foundation, but the long-term evolution of supply, rewards, and resource allocation is placed firmly in the hands of the stake holders.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
} 