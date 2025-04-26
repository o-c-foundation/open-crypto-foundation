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
      title: "Platform Architecture & Foundation",
      description: "Establishing the core infrastructure and technical foundation for OpenNet",
      icon: FaFlask,
      milestones: [
        {
          title: "Complete OpenNet whitepaper and technical specifications",
          description: "Comprehensive design of OpenNet's application-specific blockchain architecture, including module structure, consensus parameters, and network topology",
          completed: true,
          quarter: "Q2",
          year: "2025"
        },
        {
          title: "Finalize consensus mechanism design",
          description: "Development of foundational components: Cosmos SDK integration, Tendermint Core consensus engine, and ABCI interface implementation",
          completed: true,
          quarter: "Q3",
          year: "2025"
        },
        {
          title: "Develop core blockchain architecture",
          description: "Setup of initial network topology with single validator and eight peer nodes across distributed cloud infrastructure",
          completed: true,
          quarter: "Q4",
          year: "2025"
        },
        {
          title: "Establish development team and partnerships",
          description: "Implementation of comprehensive security measures including BFT guarantees, capability-based security, and infrastructure hardening",
          completed: true,
          quarter: "Q1",
          year: "2025"
        }
      ]
    },
    {
      number: 2,
      title: "Tokenomics & Network Launch",
      description: "Implementing economic models and launching the main network",
      icon: FaChartBar,
      milestones: [
        {
          title: "Finalize token economics",
          description: "Implementation of open and stake token contracts with initial supply distribution and staking mechanisms",
          completed: true,
          quarter: "Q1",
          year: "2025"
        },
        {
          title: "Implement staking mechanisms",
          description: "Deployment of Cosmos SDK gov module with custom parameters for OpenNet's governance requirements",
          completed: true,
          quarter: "Q2",
          year: "2025"
        },
        {
          title: "Develop governance framework",
          description: "Implementation of PoS mechanisms, slashing conditions, and validator rotation protocols",
          completed: true,
          quarter: "Q3",
          year: "2025"
        },
        {
          title: "Launch token presale",
          description: "Launch of token distribution mechanisms and initial validator onboarding process",
          completed: true,
          quarter: "Q4",
          year: "2025"
        }
      ]
    },
    {
      number: 3,
      title: "Application Development & Ecosystem Growth",
      description: "Expanding the platform capabilities and growing the ecosystem",
      icon: FaCode,
      milestones: [
        {
          title: "Launch developer grant program",
          description: "Development of the foundational blog module demonstrating OpenNet's application-specific capabilities",
          completed: true,
          quarter: "Q1",
          year: "2026"
        },
        {
          title: "Implement advanced smart contracts",
          description: "Creation of comprehensive documentation and development tools for building on OpenNet",
          completed: true,
          quarter: "Q2",
          year: "2026"
        },
        {
          title: "Develop enterprise solutions",
          description: "Implementation of supplementary modules for enhanced platform functionality",
          completed: true,
          quarter: "Q3",
          year: "2026"
        },
        {
          title: "Expand cross-chain capabilities",
          description: "Development of standardized interfaces and tools for third-party dApp integration",
          completed: true,
          quarter: "Q4",
          year: "2026"
        }
      ]
    },
    {
      number: 4,
      title: "Network Expansion & Advanced Features",
      description: "Scaling the network and implementing cutting-edge features",
      icon: FaNetworkWired,
      milestones: [
        {
          title: "Launch enterprise platform",
          description: "Progressive addition of validators and enhancement of network topology",
          completed: true,
          quarter: "Q1",
          year: "2027"
        },
        {
          title: "Implement AI integration",
          description: "Implementation of Inter-Blockchain Communication for cross-chain interoperability",
          completed: true,
          quarter: "Q2",
          year: "2027"
        },
        {
          title: "Develop advanced analytics",
          description: "Enhancement of transaction throughput and network efficiency",
          completed: true,
          quarter: "Q3",
          year: "2027"
        },
        {
          title: "Expand DeFi ecosystem",
          description: "Expansion of network infrastructure with enhanced redundancy and reliability",
          completed: true,
          quarter: "Q4",
          year: "2027"
        }
      ]
    },
    {
      number: 5,
      title: "Global Adoption & Innovation",
      description: "Achieving global scale and continuous innovation",
      icon: FaGlobe,
      milestones: [
        {
          title: "Launch global platform",
          description: "Full open-sourcing of the OpenNet platform with community contribution guidelines",
          completed: true,
          quarter: "Q1",
          year: "2028"
        },
        {
          title: "Launch new innovations",
          description: "Implementation of advanced governance features and community-driven development processes",
          completed: true,
          quarter: "Q2",
          year: "2028"
        },
        {
          title: "Implement advanced scaling",
          description: "Launch of funding initiatives for ecosystem development and innovation",
          completed: true,
          quarter: "Q3",
          year: "2028"
        },
        {
          title: "Develop new innovations",
          description: "Establishment of research initiatives for blockchain technology advancement",
          completed: true,
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