import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaDownload, FaFileAlt, FaChevronRight, FaBook, FaServer, FaNetworkWired, FaShieldAlt, FaExchangeAlt, FaUsers, FaLock, FaChartBar, FaCode, FaCubes, FaDatabase, FaGlobe, FaShieldVirus, FaRobot, FaBrain } from 'react-icons/fa'
import ScrollToTop from '../components/ScrollToTop'

export default function Whitepaper() {
  return (
    <>
      <Head>
        <title>OpenNet: A Sovereign Application-Specific Blockchain Platform | Open Crypto Foundation</title>
        <meta name="description" content="Technical whitepaper detailing OpenNet, a bespoke blockchain platform engineered using Cosmos SDK and Tendermint Core, developed by OpenLabs under the Open Crypto Foundation." />
        <meta name="keywords" content="OpenNet, Cosmos SDK, Tendermint Core, application-specific blockchain, ASB, Byzantine Fault Tolerance, BFT, dual-token system, open token, stake token, decentralized governance, DAO, OpenLabs, Open Crypto Foundation" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gradient">OpenNet: A Sovereign Application-Specific Blockchain Platform</h1>
            <p className="text-xl text-gray-400 mb-8">White Paper - Version 1.0 | April 26, 2025</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/docs/OpenNet_Whitepaper.pdf" download className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center">
                <FaDownload className="mr-2" /> Download PDF
              </a>
              <Link href="/roadmap" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium flex items-center">
                View Roadmap
              </Link>
              <Link href="/tokenomics" className="px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center">
                Tokenomics Details
              </Link>
            </div>
            
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800 mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Abstract</h2>
              <p className="text-gray-400">
                OpenNet represents a bespoke, sovereign blockchain platform engineered utilizing the Cosmos SDK framework and Tendermint Core consensus engine. Developed by OpenLabs under the auspices of the Open Crypto Foundation, OpenNet is designed for high performance, security, and application-specific customization, providing a dedicated execution environment optimized for its designated use cases. This document elucidates the foundational architecture, network topology, cryptoeconomic model, and strategic vision underpinning the OpenNet ecosystem, reflecting the Foundation's core mission to foster a safer, more transparent, and accessible decentralized financial landscape. Leveraging a modular design and Byzantine Fault Tolerant consensus, OpenNet establishes a robust foundation for decentralized applications, exemplified initially by its integrated blog module. The platform employs a dual-token system, comprising the native utility token open and the staking/governance token stake, to facilitate network operations, security, and the democratic governance of the Open Crypto Foundation and OpenLabs operations. Deployed across distributed cloud infrastructure, OpenNet aims to foster a transparent, community-driven ecosystem through its forthcoming open-source codebase, embodying the Foundation's commitment to open standards and user empowerment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-dark-card p-5 rounded-xl border border-gray-800 md:col-span-1">
              <h3 className="font-bold text-white mb-4">Whitepaper Contents</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#introduction" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    1. Introduction <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    2. Architecture and Technology Stack <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#topology" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    3. Network Topology <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#tokenomics" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    4. Tokenomics and Governance <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    5. Custom Functionality: The blog Module <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    6. Security Considerations <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    7. Future Roadmap and Vision <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    8. Conclusion <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaBook className="text-primary mr-3" />
                  1. Introduction
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    The proliferation of blockchain technology has unveiled transformative potential across diverse sectors. However, monolithic, general-purpose blockchain platforms often impose constraints regarding performance, cost, governance, and feature flexibility, hindering the development of optimally tailored decentralized applications (dApps). Application-specific blockchains (ASBs) emerge as a compelling paradigm, offering dedicated, sovereign environments optimized for particular functionalities. OpenNet embodies this paradigm, architected as a purpose-built blockchain network leveraging the advanced capabilities of the Cosmos ecosystem.
                  </p>
                  <p className="text-gray-400 mb-4">
                    Developed by OpenLabs, the technical arm operating under the guidance of the Open Crypto Foundation, OpenNet is a direct manifestation of the Foundation's core principles. The Foundation is dedicated to making decentralized systems safer, more transparent, and accessible through education, the development of open-source tools, and active community engagement. The limitations inherent in deploying complex applications on shared, congested networks – including variable transaction costs, governance conflicts, and constrained throughput – necessitate solutions that grant developers greater control and predictability, aligning perfectly with the Foundation's goal of fostering responsible innovation.
                  </p>
                  <p className="text-gray-400">
                    OpenNet addresses these challenges by providing an independent, high-performance layer-1 blockchain, built upon the robust and modular Cosmos SDK. This approach grants OpenNet full sovereignty over its execution environment, consensus parameters, and governance mechanisms, enabling rapid iteration and the deployment of bespoke functionalities unencumbered by external platform dependencies. The initial vision for OpenNet encompasses the creation of a secure, efficient, and extensible platform capable of hosting unique decentralized applications, starting with a foundational blog module demonstrating the platform's capacity for integrating application-specific logic directly into the core blockchain state machine.
                  </p>
                </div>
              </section>

              <section id="architecture" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaCubes className="text-primary mr-3" />
                  2. Architecture and Technology Stack
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">2.1. Cosmos SDK Framework</h3>
                  <p className="text-gray-400 mb-4">
                    The core application logic of OpenNet is constructed using the Cosmos SDK, a state-of-the-art open-source framework for building multi-asset public Proof-of-Stake (PoS) blockchains, as well as permissioned Proof-of-Authority (PoA) blockchains. Key advantages conferred by the Cosmos SDK include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
                    <li><strong>Modularity:</strong> The SDK employs a modular architecture where distinct functionalities are encapsulated within self-contained modules.</li>
                    <li><strong>Sovereignty:</strong> Chains built with the Cosmos SDK operate as independent, sovereign networks.</li>
                    <li><strong>Interoperability:</strong> Designed with the Inter-Blockchain Communication (IBC) protocol in mind.</li>
                    <li><strong>Performance:</strong> Optimized for high throughput and efficiency.</li>
                    <li><strong>Developer Experience:</strong> Accelerated development facilitated by tools like Ignite CLI.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-4">2.2. Tendermint Core Consensus Engine</h3>
                  <p className="text-gray-400 mb-4">
                    OpenNet achieves network consensus through Tendermint Core, a high-performance Byzantine Fault Tolerant (BFT) consensus engine and peer-to-peer networking layer. Tendermint Core offers:
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
                    <li><strong>Byzantine Fault Tolerance:</strong> Guarantees network operation and consistency even if up to one-third of validators behave maliciously.</li>
                    <li><strong>Instant Finality:</strong> Transactions confirmed by Tendermint are instantly final and irreversible.</li>
                    <li><strong>High Performance:</strong> Capable of processing thousands of transactions per second.</li>
                    <li><strong>Security:</strong> Proven security model against a wide range of network attacks.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-4">2.3. Application Blockchain Interface (ABCI)</h3>
                  <p className="text-gray-400 mb-4">
                    Tendermint Core interacts with the OpenNet application logic via the Application Blockchain Interface (ABCI). ABCI acts as a standardized communication protocol, allowing the consensus engine to manage transaction ordering and consensus, while delegating transaction validation and state transitions to the application state machine.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-4">2.4. OpenNet Modules</h3>
                  <p className="text-gray-400">
                    The OpenNet state machine comprises several interconnected modules, including standard Cosmos SDK modules and custom modules like the blog module, demonstrating its application-specific capabilities.
                  </p>
                </div>
              </section>

              <section id="topology" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaNetworkWired className="text-primary mr-3" />
                  3. Network Topology
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">3.1. Network Roles</h3>
                  <p className="text-gray-400 mb-4">
                    The initial deployment of the OpenNet network utilizes a defined topology designed for bootstrapping and initial operation, deployed across resilient cloud infrastructure:
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
                    <li><strong>Validator Node (1):</strong> A single node configured as the sole validator, responsible for proposing new blocks and voting on their validity.</li>
                    <li><strong>Peer/Full Nodes (8):</strong> Eight additional nodes functioning as full nodes, replicating the entire blockchain state and serving network requests.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-4">3.2. Connectivity</h3>
                  <p className="text-gray-400 mb-4">
                    Peer nodes maintain persistent connections to the primary validator node to ensure efficient block propagation and network synchronization. Standard peer-to-peer discovery mechanisms inherent in Tendermint Core facilitate broader network connectivity.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-4">3.3. Infrastructure</h3>
                  <p className="text-gray-400">
                    The network operates on geographically distributed virtual private servers, providing a baseline level of infrastructure redundancy.
                  </p>
                </div>
              </section>

              <section id="tokenomics" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaChartBar className="text-primary mr-3" />
                  4. Tokenomics and Governance
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">4.1. Native Utility Token (open)</h3>
                  <p className="text-gray-400 mb-4">
                    The open token serves as the primary utility token of the OpenNet platform, with an initial supply of 10,000,000,000 open (10 Billion base units) allocated at genesis. Its functions include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
                    <li>Payment for transaction fees (gas) within the OpenNet ecosystem</li>
                    <li>Potential medium of exchange within dApps built on OpenNet</li>
                    <li>Utilization in future platform-specific mechanisms and tools</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-4">4.2. Staking & Governance Token (stake)</h3>
                  <p className="text-gray-400 mb-4">
                    The stake token is the linchpin of OpenNet's security and governance, with an initial supply of 1,000,000,000 stake (1 Billion base units). Its functions include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
                    <li>Network Security through staking</li>
                    <li>Decentralized Autonomous Organization (DAO) facilitation</li>
                    <li>Validator security deposits</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-4">4.3. Governance Framework</h3>
                  <p className="text-gray-400">
                    OpenNet leverages the Cosmos SDK's gov module for on-chain governance, enabling stakeholders to submit proposals, deposit tokens, and vote on network changes and strategic decisions.
                  </p>
                </div>
              </section>

              <section id="blog" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaCode className="text-primary mr-3" />
                  5. Custom Functionality: The blog Module
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    The blog module serves as a proof-of-concept for OpenNet's application-specific capabilities, providing basic on-chain blogging functionality. It demonstrates the platform's potential for hosting unique decentralized applications and showcases the ease of extending OpenNet's core logic with bespoke features.
                  </p>
                </div>
              </section>

              <section id="security" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaShieldAlt className="text-primary mr-3" />
                  6. Security Considerations
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    Security is paramount in the design and operation of OpenNet, with multiple layers of protection:
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
                    <li>Consensus Security through Tendermint's BFT guarantees</li>
                    <li>Application Security via Cosmos SDK's capability-based security</li>
                    <li>Staking Security through PoS mechanisms and slashing</li>
                    <li>Infrastructure Security with server hardening and firewall configuration</li>
                    <li>Key Management for secure handling of private keys</li>
                  </ul>
                </div>
              </section>

              <section id="roadmap" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaGlobe className="text-primary mr-3" />
                  7. Future Roadmap and Vision
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    The future development of OpenNet includes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
                    <li>Network Decentralization through additional validators</li>
                    <li>IBC Enablement for cross-chain interoperability</li>
                    <li>Enhanced dApp Development and custom modules</li>
                    <li>Advanced Governance features</li>
                    <li>Performance Optimization</li>
                    <li>Open Source Release</li>
                    <li>Explorer Enhancement</li>
                    <li>Foundation Integration</li>
                  </ul>
                </div>
              </section>

              <section id="conclusion" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <FaBrain className="text-primary mr-3" />
                  8. Conclusion
                </h2>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <p className="text-gray-400">
                    OpenNet represents a significant step towards realizing the potential of application-specific blockchains, conceived and executed under the principles of the Open Crypto Foundation by OpenLabs. By leveraging the robust foundations of the Cosmos SDK and Tendermint Core, it provides a sovereign, high-performance, and customizable platform. Its dual-token system ensures network security and facilitates decentralized governance, while the inclusion of custom modules demonstrates its extensibility. With a clear network topology and comprehensive roadmap, OpenNet is well-positioned to evolve into a valuable component of the decentralized web landscape.
                  </p>
                </div>
              </section>
            </div>
          </div>
          
          <div className="flex justify-between items-center border-t border-gray-800 pt-8 mt-12">
            <p className="text-sm text-gray-500">OCF Token Whitepaper v1.2 © 2025 Open Crypto Foundation</p>
            <div className="flex items-center">
              <a href="#" className="flex items-center text-sm text-primary hover:text-primary-light">
                <FaFileAlt className="mr-2" /> Download Full Whitepaper (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
} 