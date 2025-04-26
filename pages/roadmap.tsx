import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaCheck, FaHourglass, FaRocket, FaCog, FaFlask, FaNetworkWired, FaShieldAlt, FaUserShield, FaGlobe, FaCode, FaServer, FaUsers, FaLock, FaChartBar, FaBrain } from 'react-icons/fa'
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
      title: "Foundation & Core Development",
      description: "Establishing the OpenNet platform with Cosmos SDK and Tendermint Core",
      icon: FaFlask,
      milestones: [
        {
          title: "Platform Architecture & Design",
          description: "Comprehensive design of OpenNet's application-specific blockchain architecture, including module structure, consensus parameters, and network topology",
          completed: true,
          quarter: "Q2",
          year: "2024"
        },
        {
          title: "Core Infrastructure Implementation",
          description: "Development of foundational components: Cosmos SDK integration, Tendermint Core consensus engine, and ABCI interface implementation",
          completed: false,
          quarter: "Q3",
          year: "2024"
        },
        {
          title: "Initial Network Deployment",
          description: "Setup of initial network topology with single validator and eight peer nodes across distributed cloud infrastructure",
          completed: false,
          quarter: "Q4",
          year: "2024"
        },
        {
          title: "Security Framework Establishment",
          description: "Implementation of comprehensive security measures including BFT guarantees, capability-based security, and infrastructure hardening",
          completed: false,
          quarter: "Q1",
          year: "2025"
        }
      ]
    },
    {
      number: 2,
      title: "Tokenomics & Governance",
      description: "Implementation of dual-token system and governance framework",
      icon: FaChartBar,
      milestones: [
        {
          title: "Token Contract Development",
          description: "Implementation of open and stake token contracts with initial supply distribution and staking mechanisms",
          completed: false,
          quarter: "Q2",
          year: "2025"
        },
        {
          title: "Governance Module Integration",
          description: "Deployment of Cosmos SDK gov module with custom parameters for OpenNet's governance requirements",
          completed: false,
          quarter: "Q2",
          year: "2025"
        },
        {
          title: "Staking & Validator System",
          description: "Implementation of PoS mechanisms, slashing conditions, and validator rotation protocols",
          completed: false,
          quarter: "Q3",
          year: "2025"
        },
        {
          title: "Token Distribution & Initial Staking",
          description: "Launch of token distribution mechanisms and initial validator onboarding process",
          completed: false,
          quarter: "Q4",
          year: "2025"
        }
      ]
    },
    {
      number: 3,
      title: "Application Development",
      description: "Building and deploying the blog module and additional dApp capabilities",
      icon: FaCode,
      milestones: [
        {
          title: "Blog Module Implementation",
          description: "Development of the foundational blog module demonstrating OpenNet's application-specific capabilities",
          completed: false,
          quarter: "Q1",
          year: "2026"
        },
        {
          title: "Developer Documentation & SDK",
          description: "Creation of comprehensive documentation and development tools for building on OpenNet",
          completed: false,
          quarter: "Q2",
          year: "2026"
        },
        {
          title: "Additional Module Development",
          description: "Implementation of supplementary modules for enhanced platform functionality",
          completed: false,
          quarter: "Q3",
          year: "2026"
        },
        {
          title: "dApp Integration Framework",
          description: "Development of standardized interfaces and tools for third-party dApp integration",
          completed: false,
          quarter: "Q4",
          year: "2026"
        }
      ]
    },
    {
      number: 4,
      title: "Network Expansion & Optimization",
      description: "Scaling the network and enhancing performance",
      icon: FaNetworkWired,
      milestones: [
        {
          title: "Network Decentralization",
          description: "Progressive addition of validators and enhancement of network topology",
          completed: false,
          quarter: "Q1",
          year: "2027"
        },
        {
          title: "IBC Protocol Integration",
          description: "Implementation of Inter-Blockchain Communication for cross-chain interoperability",
          completed: false,
          quarter: "Q2",
          year: "2027"
        },
        {
          title: "Performance Optimization",
          description: "Enhancement of transaction throughput and network efficiency",
          completed: false,
          quarter: "Q3",
          year: "2027"
        },
        {
          title: "Infrastructure Scaling",
          description: "Expansion of network infrastructure with enhanced redundancy and reliability",
          completed: false,
          quarter: "Q4",
          year: "2027"
        }
      ]
    },
    {
      number: 5,
      title: "Ecosystem Growth & Innovation",
      description: "Expanding the OpenNet ecosystem and driving innovation",
      icon: FaGlobe,
      milestones: [
        {
          title: "Open Source Release",
          description: "Full open-sourcing of the OpenNet platform with community contribution guidelines",
          completed: false,
          quarter: "Q1",
          year: "2028"
        },
        {
          title: "Community Governance Enhancement",
          description: "Implementation of advanced governance features and community-driven development processes",
          completed: false,
          quarter: "Q2",
          year: "2028"
        },
        {
          title: "Ecosystem Grant Program",
          description: "Launch of funding initiatives for ecosystem development and innovation",
          completed: false,
          quarter: "Q3",
          year: "2028"
        },
        {
          title: "Research & Innovation Hub",
          description: "Establishment of research initiatives for blockchain technology advancement",
          completed: false,
          quarter: "Q4",
          year: "2028"
        }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>OpenNet Development Roadmap | Open Crypto Foundation</title>
        <meta name="description" content="Detailed development roadmap for OpenNet, outlining key milestones, technical implementations, and future plans for the application-specific blockchain platform." />
        <meta name="keywords" content="OpenNet roadmap, blockchain development, Cosmos SDK, Tendermint Core, application-specific blockchain, ASB, tokenomics, governance, OpenLabs, Open Crypto Foundation" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient">OpenNet Development Roadmap</h1>
            <p className="text-xl text-gray-400 mb-8">Strategic timeline for the development and evolution of the OpenNet platform</p>
            
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
              <p className="text-gray-400">
                The OpenNet development roadmap outlines our strategic vision for building a robust, secure, and scalable application-specific blockchain platform. 
                This timeline reflects our commitment to progressive decentralization, technical excellence, and community-driven innovation. 
                Each phase builds upon the previous one, ensuring a solid foundation for the platform's growth and evolution.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <Phase key={index} {...phase} />
            ))}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
} 