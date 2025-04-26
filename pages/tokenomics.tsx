import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaChartPie, FaExchangeAlt, FaCogs, FaShieldAlt, FaUsers, FaLock, FaCoins, FaServer, FaLightbulb } from 'react-icons/fa'
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
    { name: 'Public Sale', percentage: 20, color: '#4F46E5', description: 'Tokens distributed through initial public sale' },
    { name: 'Ecosystem Growth', percentage: 25, color: '#8B5CF6', description: 'Incentives for ecosystem participants and developers' },
    { name: 'Core Team', percentage: 15, color: '#EC4899', description: 'Allocated to core development team and advisors' },
    { name: 'Treasury', percentage: 15, color: '#10B981', description: 'Managed by DAO for ongoing operations and development' },
    { name: 'Protocol Security', percentage: 10, color: '#14B8A6', description: 'Reserved for network security and validator incentives' },
    { name: 'Strategic Partners', percentage: 8, color: '#F59E0B', description: 'Allocated to strategic partners and investors' },
    { name: 'Cross-Chain Liquidity', percentage: 7, color: '#F97316', description: 'Dedicated to providing cross-chain liquidity' }
  ];
  
  const vestingSchedules: VestingSchedule[] = [
    { category: 'Public Sale', immediate: '40%', cliff: 'None', vesting: '60% over 3 months' },
    { category: 'Ecosystem Growth', immediate: '10%', cliff: 'None', vesting: '90% over 36 months' },
    { category: 'Core Team', immediate: '0%', cliff: '12 months', vesting: '100% over 36 months' },
    { category: 'Treasury', immediate: '15%', cliff: 'None', vesting: '85% over 48 months' },
    { category: 'Protocol Security', immediate: '20%', cliff: 'None', vesting: '80% over 24 months' },
    { category: 'Strategic Partners', immediate: '0%', cliff: '6 months', vesting: '100% over 24 months' },
    { category: 'Cross-Chain Liquidity', immediate: '100%', cliff: 'None', vesting: 'None' }
  ];
  
  const networks: NetworkCardProps[] = [
    {
      name: 'Ethereum',
      icon: FaCoins,
      tokenType: 'ERC-20',
      color: 'bg-blue-900/40',
      allocation: '350,000,000',
      features: [
        'Gas-optimized token contract with OpenZeppelin standards',
        'ERC-2612 permit functionality for gasless approvals',
        'Minimal proxy implementation for reduced deployment costs',
        'Integrated with Wormhole via specialized Gateway contract',
        'Meta-transaction support for improved UX'
      ]
    },
    {
      name: 'Solana',
      icon: FaCoins,
      tokenType: 'SPL Token',
      color: 'bg-purple-900/40',
      allocation: '350,000,000',
      features: [
        'Custom SPL token program with compressed account structure',
        'Optimized for high-throughput transactions',
        'Program Derived Address (PDA) based authority model',
        'Native Wormhole portal integration with transaction attestation',
        'On-chain transaction metadata support'
      ]
    },
    {
      name: 'BNB Chain',
      icon: FaCoins,
      tokenType: 'BEP-20',
      color: 'bg-yellow-900/40',
      allocation: '300,000,000',
      features: [
        'BEP-20 compatible with BSC-specific optimizations',
        'Reduced gas consumption through proxy implementation',
        'Cross-chain messaging via specialized BNB adapter',
        'Enhanced meta-transaction support for MEV protection',
        'Native integration with BNB Chain security model'
      ]
    }
  ];
  
  const utilityFeatures: UtilityFeature[] = [
    {
      icon: FaServer,
      title: 'Validator Staking',
      description: 'Stake OCF tokens to participate in network validation and earn rewards proportional to stake amount and validation performance.'
    },
    {
      icon: FaExchangeAlt,
      title: 'Cross-Chain Transaction Fees',
      description: 'OCF tokens are used to pay for cross-chain transactions with dynamic fee adjustment based on network conditions and transaction complexity.'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Bonding',
      description: 'Validators must post OCF security bonds that are subject to slashing for malicious behavior or protocol violations.'
    },
    {
      icon: FaUsers,
      title: 'Governance Participation',
      description: 'Token holders can participate in protocol governance, with voting power proportional to stake amounts and holding periods.'
    },
    {
      icon: FaLock,
      title: 'Priority Transaction Access',
      description: 'Staked tokens provide prioritized transaction processing during periods of network congestion.'
    },
    {
      icon: FaLightbulb,
      title: 'Protocol Feature Access',
      description: 'Certain advanced protocol features require holding minimum OCF token amounts for access and utilization.'
    }
  ];
  
  return (
    <>
      <Head>
        <title>OCF Token Economics | Open Crypto Foundation</title>
        <meta name="description" content="Comprehensive details about OCF token distribution, allocation, vesting schedules, and utility across multiple blockchain networks" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">OCF Token Economics</h1>
          <p className="text-xl text-gray-400 mb-8">A detailed breakdown of the OCF token allocation, distribution model, and utility mechanisms across all supported blockchain networks.</p>
          
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaChartPie size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Token Allocation</h2>
                </div>
                
                <p className="text-gray-400 mb-6">Total Supply: <span className="text-white font-semibold">1,000,000,000 OCF</span></p>
                
                <DonutChart segments={tokenAllocations} />
                
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {tokenAllocations.map((allocation, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: allocation.color }}></div>
                      <span className="text-gray-400">{allocation.name}: <span className="text-white font-medium">{allocation.percentage}%</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaLock size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Vesting Schedule</h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 text-gray-400 font-medium">Allocation</th>
                        <th className="text-center py-3 text-gray-400 font-medium">Immediate</th>
                        <th className="text-center py-3 text-gray-400 font-medium">Cliff</th>
                        <th className="text-center py-3 text-gray-400 font-medium">Vesting</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vestingSchedules.map((schedule, index) => (
                        <tr key={index} className="border-b border-gray-800">
                          <td className="py-3 text-white">{schedule.category}</td>
                          <td className="py-3 text-center text-gray-300">{schedule.immediate}</td>
                          <td className="py-3 text-center text-gray-300">{schedule.cliff}</td>
                          <td className="py-3 text-center text-gray-300">{schedule.vesting}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-gray-400 text-sm">
                  <p className="mb-2"><strong>Linear Vesting:</strong> All vesting schedules follow a linear release model with monthly unlocks after any applicable cliff periods.</p>
                  <p><strong>Governance Control:</strong> Any changes to vesting schedules require a supermajority (75%) approval through on-chain governance voting.</p>
                </div>
                
                <div className="mt-6 p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Circulating Supply Projection</h3>
                  <p className="text-sm text-gray-300 mb-3">Based on vesting schedules, the projected circulating supply follows a gradual release curve:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Initial Circulation:</span>
                      <span className="text-white">157 million tokens (15.7%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">6 months:</span>
                      <span className="text-white">268 million tokens (26.8%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">12 months:</span>
                      <span className="text-white">392 million tokens (39.2%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">24 months:</span>
                      <span className="text-white">685 million tokens (68.5%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">36 months:</span>
                      <span className="text-white">913 million tokens (91.3%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">48 months:</span>
                      <span className="text-white">1 billion tokens (100%)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaExchangeAlt size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white">Cross-Chain Distribution</h2>
              </div>
              
              <p className="text-gray-400 mb-6">OCF tokens are implemented natively on multiple blockchain networks, with specialized features and implementations for each environment. Total supply is distributed across networks with cross-chain parity maintained through the OCF bridging protocol.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {networks.map((network, index) => (
                  <NetworkCard key={index} {...network} />
                ))}
              </div>
            </div>
            
            <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Wormhole Integration for Cross-Chain Parity</h3>
              
              <p className="text-gray-400 mb-4">
                The OCF token maintains supply parity across all supported networks through a specialized Wormhole integration with enhanced security features:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-2 rounded mr-3 mt-1">
                    <FaShieldAlt className="text-blue-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Enhanced Guardian Validation</h4>
                    <p className="text-sm text-gray-400">Custom Wormhole guardian logic with OCF-specific validation rules and threshold signature requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-900/30 p-2 rounded mr-3 mt-1">
                    <FaCogs className="text-purple-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Optimized Message Passing</h4>
                    <p className="text-sm text-gray-400">Gas-optimized cross-chain transfer mechanisms with batched processing and redundant relay paths</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-900/30 p-2 rounded mr-3 mt-1">
                    <FaUsers className="text-green-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Multi-Chain Governance</h4>
                    <p className="text-sm text-gray-400">Synchronized governance decisions across all deployed networks with cross-chain voting aggregation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-900/30 p-2 rounded mr-3 mt-1">
                    <FaLock className="text-red-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Chain-Specific Circuit Breakers</h4>
                    <p className="text-sm text-gray-400">Automated safety mechanisms to prevent imbalanced token distribution during network disruptions</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 border border-gray-700 rounded-lg bg-dark-card">
                <h4 className="font-medium text-white mb-2">Mathematical Supply Invariant</h4>
                <p className="text-sm text-gray-400 mb-2">The protocol maintains the following invariant across all networks:</p>
                <div className="bg-dark p-3 rounded font-mono text-sm text-gray-300">
                  <p>∑ OCF(n) = Total Supply</p>
                  <p className="mt-1">∀ n ∈ Networks</p>
                  <p className="mt-3 text-xs text-gray-500">Where OCF(n) represents the effective circulating supply on network n, accounting for tokens locked in bridge contracts.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaCogs size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white">Token Utility</h2>
              </div>
              
              <p className="text-gray-400 mb-6">The OCF token serves multiple utility functions within the ecosystem, providing essential capabilities for network operation and participant incentivization:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {utilityFeatures.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="bg-primary/20 p-3 rounded-lg h-min mr-4">
                      <feature.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-5 border border-gray-700 rounded-lg bg-dark-elevated">
                <h3 className="font-semibold text-white mb-3">Fee Economics & Token Velocity</h3>
                <p className="text-sm text-gray-400 mb-3">
                  The OCF token implements a sophisticated fee mechanism that combines deflationary pressure with network incentives:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div className="p-4 bg-dark-card rounded-lg border border-gray-700">
                    <h4 className="font-medium text-white mb-2">Transaction Fees</h4>
                    <p className="text-xs text-gray-400">30% of fees are burned, creating deflationary pressure proportional to network usage</p>
                  </div>
                  <div className="p-4 bg-dark-card rounded-lg border border-gray-700">
                    <h4 className="font-medium text-white mb-2">Validator Rewards</h4>
                    <p className="text-xs text-gray-400">60% distributed to active validators proportional to stake and performance metrics</p>
                  </div>
                  <div className="p-4 bg-dark-card rounded-lg border border-gray-700">
                    <h4 className="font-medium text-white mb-2">Treasury Allocation</h4>
                    <p className="text-xs text-gray-400">10% directed to DAO treasury for ongoing development and ecosystem initiatives</p>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>Fee calculations adjust dynamically based on network congestion, transaction complexity, and cross-chain destination characteristics.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaUsers size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white">Governance Model</h2>
              </div>
              
              <p className="text-gray-400 mb-6">OCF implements a sophisticated multi-chain governance system that enables coordinated protocol management across all supported networks:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Governance Parameters</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Proposal Threshold:</span>
                      <span className="text-white">100,000 OCF</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Quorum Requirement:</span>
                      <span className="text-white">15% of circulating supply</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Voting Period:</span>
                      <span className="text-white">7 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Timelock Delay:</span>
                      <span className="text-white">48 hours</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Implementation Delay:</span>
                      <span className="text-white">72 hours after approval</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-white mt-6 mb-3">Voting Power Calculation</h3>
                  <div className="bg-dark p-3 rounded font-mono text-sm text-gray-300 mb-3">
                    <p>VP = Balance × (1 + Lock_Duration / Max_Duration)^0.5</p>
                  </div>
                  <p className="text-xs text-gray-400">Voting power increases with longer token lock commitments, with a maximum multiplier of 2x for 4-year locks.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Governance Scope</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <h4 className="text-white font-medium">Protocol Parameters</h4>
                        <p className="text-gray-400">Fee structures, minimum stakes, and validator requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <h4 className="text-white font-medium">Treasury Management</h4>
                        <p className="text-gray-400">Allocation of treasury funds for development, marketing, and ecosystem incentives</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <h4 className="text-white font-medium">Protocol Upgrades</h4>
                        <p className="text-gray-400">Implementation of technical improvements and feature additions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <h4 className="text-white font-medium">Network Expansion</h4>
                        <p className="text-gray-400">Addition of new supported blockchain networks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <h4 className="text-white font-medium">Emergency Actions</h4>
                        <p className="text-gray-400">Critical security responses requiring expedited implementation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">OCF Token Economics v1.2 © 2025 Open Crypto Foundation</p>
            <Link href="/whitepaper" className="text-sm text-primary hover:text-primary-light">
              Read the full whitepaper →
            </Link>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
} 