import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaCheck, FaHourglass, FaRocket, FaCog, FaFlask, FaNetworkWired, FaShieldAlt, FaUserShield, FaGlobe } from 'react-icons/fa'
import { IconType } from 'react-icons'
import ScrollToTop from '../components/ScrollToTop'

// TypeScript interfaces for component props
interface MilestoneProps {
  title: string;
  description: string;
  completed: boolean;
  quarter: string;
  year: string;
}

interface PhaseProps {
  number: number;
  title: string;
  description: string;
  icon: IconType;
  milestones: MilestoneProps[];
}

// Component for milestone items with completed status
const Milestone = ({ title, description, completed, quarter, year }: MilestoneProps) => (
  <div className={`relative pl-8 pb-8 border-l-2 ${completed ? 'border-green-500' : 'border-gray-700'}`}>
    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${completed ? 'bg-green-500' : 'bg-gray-700'}`}></div>
    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${completed ? 'bg-green-500/20 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
        {quarter} {year}
      </div>
      {completed && <span className="text-green-500 flex items-center"><FaCheck className="mr-1" /> Completed</span>}
    </div>
    <p className="text-gray-400 mt-1">{description}</p>
  </div>
)

// Phase component with its milestones
const Phase = ({ number, title, description, icon: Icon, milestones }: PhaseProps) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-primary/20 p-4 rounded-xl">
        <Icon size={24} className="text-primary" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gradient">Phase {number}: {title}</h2>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </div>
    
    <div className="ml-4 mt-8">
      {milestones.map((milestone, index) => (
        <Milestone key={index} {...milestone} />
      ))}
    </div>
  </div>
)

export default function Roadmap() {
  const phases: PhaseProps[] = [
    {
      number: 1,
      title: "Foundation & Research",
      description: "Establishing core infrastructure and research frameworks for secure cross-chain implementation",
      icon: FaFlask,
      milestones: [
        {
          title: "Protocol Research & Architecture Design",
          description: "Comprehensive analysis of existing cross-chain protocols, formal verification approaches, and Designated Verifier zero-knowledge proof systems for selective private state transitions",
          completed: true,
          quarter: "Q4",
          year: "2023"
        },
        {
          title: "Tokenomics Modeling & Simulation",
          description: "Mathematical modeling of complex multi-chain token utility scenarios with synthetic load testing under varying network conditions and liquidity constraints",
          completed: true,
          quarter: "Q1",
          year: "2024"
        },
        {
          title: "Core Infrastructure Development",
          description: "Implementation of foundational components: validator node architecture, cross-chain messaging protocol, and Byzantine fault-tolerant consensus mechanism with threshold signature scheme",
          completed: true,
          quarter: "Q2",
          year: "2024"
        },
        {
          title: "Security Framework Development",
          description: "Establishment of comprehensive security standards, formal verification methodologies, and automated vulnerability detection systems for cross-chain protocols",
          completed: true,
          quarter: "Q3",
          year: "2024"
        }
      ]
    },
    {
      number: 2,
      title: "Technical Implementation",
      description: "Building and deploying the core OCF infrastructure across multiple blockchain networks",
      icon: FaCog,
      milestones: [
        {
          title: "Wormhole Integration & Custom Message Passing Protocol",
          description: "Development of specialized Guardian node integration with Wormhole's cross-chain messaging infrastructure, implementing custom validator attestation for improved security guarantees",
          completed: true,
          quarter: "Q4",
          year: "2024"
        },
        {
          title: "Ethereum Implementation",
          description: "Deployment of OCF smart contracts on Ethereum, including governance modules, cross-chain bridges, and token distribution mechanisms with optimized gas consumption patterns",
          completed: true,
          quarter: "Q1",
          year: "2025"
        },
        {
          title: "Solana Program Development",
          description: "Implementation of OCF's Solana Program Library (SPL) infrastructure with custom instruction-optimized state compression and parallel transaction execution",
          completed: false,
          quarter: "Q2",
          year: "2025"
        },
        {
          title: "BNB Chain Integration",
          description: "Deployment of OCF protocols on BNB Chain with dedicated BEP-20 compatibility layer and custom BSC validator coordination mechanism",
          completed: false,
          quarter: "Q2",
          year: "2025"
        },
        {
          title: "Cross-Chain Liquidity Protocol",
          description: "Development of automated liquidity provisioning system with multi-chain collateralization and optimized rebalancing strategies to minimize slippage across networks",
          completed: false,
          quarter: "Q3",
          year: "2025"
        }
      ]
    },
    {
      number: 3,
      title: "Testnet & Beta Release",
      description: "Launching testnet environments and conducting rigorous testing across all supported networks",
      icon: FaRocket,
      milestones: [
        {
          title: "Multi-Chain Testnet Launch",
          description: "Simultaneous deployment of OCF infrastructure on Ethereum Sepolia, Solana Devnet, and BNB Testnet with cross-chain transaction capability and synthetic load generation",
          completed: false,
          quarter: "Q2",
          year: "2025"
        },
        {
          title: "Security Audits & Formal Verification",
          description: "Multiple independent audits by leading security firms with formal verification of critical protocol components and cross-chain message verification logic",
          completed: false,
          quarter: "Q3",
          year: "2025"
        },
        {
          title: "Validator Network Bootstrap",
          description: "Onboarding of initial validator set with progressive decentralization strategy and cross-chain staking incentive mechanism",
          completed: false,
          quarter: "Q3",
          year: "2025"
        },
        {
          title: "Public Beta Launch",
          description: "Limited public release with transaction caps and progressive feature unlocking based on security milestones and network stability metrics",
          completed: false,
          quarter: "Q4",
          year: "2025"
        }
      ]
    },
    {
      number: 4,
      title: "Mainnet & Ecosystem Development",
      description: "Full public launch and continued enhancement of the OCF ecosystem",
      icon: FaNetworkWired,
      milestones: [
        {
          title: "Mainnet Launch Across All Networks",
          description: "Coordinated deployment of fully audited production systems on Ethereum, Solana, and BNB Chain with complete cross-chain functionality",
          completed: false,
          quarter: "Q1",
          year: "2026"
        },
        {
          title: "Additional L1/L2 Integrations",
          description: "Expansion to additional networks including Arbitrum, Optimism, Avalanche, and Polygon with dedicated optimized implementations for each execution environment",
          completed: false,
          quarter: "Q2",
          year: "2026"
        },
        {
          title: "Developer SDK & API Suite",
          description: "Comprehensive tooling for third-party developers including cross-chain development frameworks, testing environments, and analytics infrastructure",
          completed: false,
          quarter: "Q3",
          year: "2026"
        },
        {
          title: "Governance DAO Transition",
          description: "Complete transition to community-governed protocol with on-chain voting mechanisms and cross-chain governance coordination system",
          completed: false,
          quarter: "Q4",
          year: "2026"
        }
      ]
    },
    {
      number: 5,
      title: "Independent Network & Expansion",
      description: "Launching OCF's dedicated blockchain and expanding cross-chain capabilities",
      icon: FaGlobe,
      milestones: [
        {
          title: "OCF Network Testnet",
          description: "Launch of purpose-built blockchain optimized for cross-chain coordination with novel consensus mechanism combining delegated proof-of-stake with threshold encryption",
          completed: false,
          quarter: "Q1",
          year: "2027"
        },
        {
          title: "Cross-Chain Privacy Layer",
          description: "Implementation of zero-knowledge proof system for confidential cross-chain transactions with optional privacy preservation and regulatory compliance mechanisms",
          completed: false,
          quarter: "Q2",
          year: "2027"
        },
        {
          title: "OCF Network Mainnet Launch",
          description: "Full deployment of independent blockchain with migration path for existing deployments and enhanced cross-chain interoperability features",
          completed: false,
          quarter: "Q3",
          year: "2027"
        },
        {
          title: "Universal Cross-Chain Standard",
          description: "Finalization and promotion of open interoperability standards for cross-chain communication with industry partners and major blockchain networks",
          completed: false,
          quarter: "Q4",
          year: "2027"
        }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>OCF Token Roadmap | Open Crypto Foundation</title>
        <meta name="description" content="Detailed roadmap for the Open Crypto Foundation cross-chain token and ecosystem development" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">OCF Token Development Roadmap</h1>
          <p className="text-xl text-gray-400 mb-8">Our comprehensive plan for building a secure, interoperable cross-chain ecosystem powered by the OCF token. This roadmap outlines our strategic vision spanning multiple development phases from research and infrastructure to mainnet deployment and ecosystem expansion.</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/whitepaper" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center">
              Read Whitepaper
            </Link>
            <Link href="/tokenomics" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium flex items-center">
              Tokenomics Details
            </Link>
            <Link href="/audit" className="px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center">
              Security Audits
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-card p-5 rounded-xl border border-gray-800">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                  <FaHourglass className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Current Phase</h3>
              </div>
              <p className="text-2xl font-bold text-gradient mb-1">Technical Implementation</p>
              <p className="text-sm text-gray-400">Q2 2025: Focus on multi-chain deployment and core infrastructure</p>
            </div>
            
            <div className="bg-dark-card p-5 rounded-xl border border-gray-800">
              <div className="flex items-center mb-3">
                <div className="bg-green-500/20 p-2 rounded-lg mr-3">
                  <FaCheck className="text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Milestones Completed</h3>
              </div>
              <p className="text-2xl font-bold text-gradient mb-1">6 of 21</p>
              <p className="text-sm text-gray-400">29% completion rate across all phases</p>
            </div>
            
            <div className="bg-dark-card p-5 rounded-xl border border-gray-800">
              <div className="flex items-center mb-3">
                <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                  <FaUserShield className="text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Security Focus</h3>
              </div>
              <p className="text-2xl font-bold text-gradient mb-1">High Priority</p>
              <p className="text-sm text-gray-400">Multiple audits scheduled with leading security firms</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <Phase key={index} {...phase} />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-dark-card rounded-xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ongoing Research & Development</h2>
          <p className="text-gray-400 mb-4">In parallel with our core roadmap, the Open Crypto Foundation maintains several ongoing research initiatives that inform our development process:</p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-blue-500/20 p-2 rounded-lg mr-3 mt-1">
                <FaShieldAlt className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Advanced Cross-Chain Security Mechanisms</h3>
                <p className="text-sm text-gray-400">Investigating novel approaches to cross-chain security including threshold cryptography, fraud proofs, and economic incentive design</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-2 rounded-lg mr-3 mt-1">
                <FaCog className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Interoperability Protocol Standards</h3>
                <p className="text-sm text-gray-400">Contributing to open standards for cross-chain communication and working with ecosystem partners on adoption strategies</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-2 rounded-lg mr-3 mt-1">
                <FaNetworkWired className="text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Scalability Enhancements</h3>
                <p className="text-sm text-gray-400">Researching state compression techniques, optimistic validation mechanisms, and parallel execution strategies to enhance cross-chain throughput</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
} 