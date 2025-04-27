import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaChartLine, FaShieldAlt, FaHandshake, FaHistory, FaMedal, FaLightbulb, FaGlobe, FaRocket } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import TabLayout from '../components/TabLayout'
import ScrollToTop from '../components/ScrollToTop'
import Layout from '../components/Layout'
import { NextPageWithLayout } from '../types/next-page'

const AboutPage: NextPageWithLayout = () => {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('mission')
  
  // Tabs configuration
  const aboutSections = [
    {
      id: 'mission',
      name: 'Our Mission',
      icon: <FaShieldAlt className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-light-muted">
            The Open Crypto Foundation (OCF) represents a paradigm shift in the blockchain ecosystem, 
            establishing a robust framework for secure, transparent, and interoperable decentralized 
            applications. Our mission encompasses the development of cutting-edge cryptographic solutions, 
            the implementation of advanced consensus mechanisms, and the creation of a comprehensive 
            ecosystem that prioritizes security, scalability, and user sovereignty.
          </p>
          <p className="text-light-muted">
            Through our subsidiary OpenLabs, we are pioneering the OpenNet blockchain protocol, a 
            next-generation distributed ledger technology that integrates zero-knowledge proofs, 
            sharding mechanisms, and cross-chain interoperability protocols to deliver unprecedented 
            performance and security guarantees.
          </p>
          <div className="bg-dark-light/30 p-4 rounded-lg border border-dark-light/30">
            <h4 className="text-white font-medium mb-2">Strategic Objectives</h4>
            <ul className="list-disc pl-5 text-light-muted space-y-1">
              <li>Architect and implement the OpenNet blockchain infrastructure</li>
              <li>Develop advanced cryptographic primitives and security protocols</li>
              <li>Establish comprehensive auditing frameworks for smart contracts</li>
              <li>Create decentralized governance mechanisms for protocol evolution</li>
              <li>Implement cross-chain interoperability solutions</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'purpose',
      name: 'Our Purpose',
      icon: <FaLightbulb className="text-blue-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation operates as a decentralized autonomous organization (DAO) 
            dedicated to advancing the state of blockchain technology through rigorous research, 
            innovative development, and comprehensive education. Our organizational structure 
            implements a multi-tiered governance model that ensures both technical excellence 
            and community-driven decision-making.
          </p>
          <p className="text-gray-300">
            OpenLabs, our technical research and development arm, spearheads the implementation 
            of the OpenNet protocol, incorporating novel consensus algorithms, privacy-preserving 
            computation, and scalable transaction processing mechanisms. This initiative represents 
            a significant advancement in distributed systems architecture.
          </p>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Technical Focus Areas</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Zero-knowledge proof systems and privacy-preserving computation</li>
              <li>Distributed consensus mechanisms and Byzantine fault tolerance</li>
              <li>Cross-chain communication protocols and atomic swaps</li>
              <li>Smart contract formal verification and security analysis</li>
              <li>Decentralized identity and reputation systems</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'beginnings',
      name: 'Our Beginnings',
      icon: <FaRocket className="text-purple-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation emerged from a recognition of critical limitations in existing 
            blockchain architectures. Our inception was driven by the need for a more robust, scalable, 
            and secure foundation for decentralized applications, leading to the conceptualization and 
            development of the OpenNet protocol.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Technical Evolution</h4>
            <p className="text-gray-300">
              The blockchain space requires continuous innovation in cryptographic primitives, 
              consensus mechanisms, and network architecture. Our foundation was established to 
              address these technical challenges through systematic research and development, 
              with OpenLabs serving as our innovation engine.
            </p>
          </div>
          
          <div className="space-y-6 mt-6">
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">Now</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Protocol Development Phase</h4>
                <p className="text-gray-300">
                  Implementing core OpenNet protocol features, including sharding mechanisms, 
                  zero-knowledge proof systems, and cross-chain communication protocols.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2025</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Technical Milestones (3-6 months)</h4>
                <p className="text-gray-300">
                  Deploy OpenNet testnet with initial sharding implementation, launch 
                  privacy-preserving computation framework, and establish formal verification 
                  tools for smart contracts.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2025</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Protocol Enhancement (6-12 months)</h4>
                <p className="text-gray-300">
                  Implement advanced cross-chain interoperability solutions, deploy mainnet 
                  with full sharding capabilities, and introduce decentralized governance 
                  mechanisms.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2026</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Advanced Development</h4>
                <p className="text-gray-300">
                  Deploy quantum-resistant cryptographic primitives, implement advanced 
                  privacy-preserving computation frameworks, and establish a self-sustaining 
                  ecosystem of decentralized applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'partners',
      name: 'Partnerships',
      icon: <FaHandshake className="text-green-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation actively collaborates with leading research institutions, 
            blockchain projects, and technology companies to advance the state of distributed 
            systems technology. Our partnerships focus on joint research initiatives, protocol 
            development, and the establishment of industry standards.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Technical Collaborations</h4>
            <p className="text-gray-300">
              We engage in strategic technical partnerships that enhance our research capabilities 
              and accelerate protocol development. Our collaborations span cryptographic research, 
              distributed systems architecture, and blockchain interoperability.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium border-b border-gray-600 pb-2 mb-3">Research Areas</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
                <div>
                  <h5 className="text-white text-sm">Cryptographic Research</h5>
                  <p className="text-gray-400 text-xs">Advanced zero-knowledge proof systems and privacy-preserving computation</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>
                </div>
                <div>
                  <h5 className="text-white text-sm">Distributed Systems</h5>
                  <p className="text-gray-400 text-xs">Novel consensus mechanisms and network protocols</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>
                <div>
                  <h5 className="text-white text-sm">Protocol Development</h5>
                  <p className="text-gray-400 text-xs">Cross-chain interoperability and smart contract formal verification</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'values',
      name: 'Our Values',
      icon: <FaShieldAlt className="text-red-400" size={24} />,
      content: (
        <div className="space-y-5">
          <p className="text-gray-300">
            The Open Crypto Foundation operates on a foundation of technical excellence, 
            cryptographic security, and decentralized governance. Our values reflect our 
            commitment to advancing the state of blockchain technology while maintaining 
            the highest standards of security and transparency.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Technical Excellence</h4>
            <p className="text-gray-300">
              We maintain rigorous standards in protocol development, cryptographic implementation, 
              and system architecture. Our commitment to technical excellence drives our research 
              initiatives and development processes.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Security First</h4>
            <p className="text-gray-300">
              Security considerations permeate every aspect of our work, from protocol design 
              to implementation. We employ formal verification methods, comprehensive auditing 
              processes, and advanced cryptographic primitives to ensure system integrity.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Decentralized Governance</h4>
            <p className="text-gray-300">
              Our organizational structure implements decentralized governance mechanisms 
              that ensure protocol evolution through community consensus while maintaining 
              technical integrity and security guarantees.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      name: 'Global Vision',
      icon: <FaGlobe className="text-teal-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Although the Open Crypto Foundation is only three weeks old, we have a global vision for our work. We aim to 
            address cryptocurrency safety and education across different regions and regulatory environments, recognizing 
            that crypto challenges and opportunities vary worldwide.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Future Regional Initiatives</h4>
            <p className="text-gray-300">
              We plan to develop region-specific educational resources that account for local regulatory frameworks, common
              scam variations, and market conditions. Our materials will be available in multiple languages to ensure 
              accessibility across different communities.
            </p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">North America</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Europe</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Asia Pacific</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Latin America</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Africa</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Middle East</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">South Asia</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Oceania</span>
            </div>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Cross-Border Approach</h4>
            <p className="text-gray-300">
              Cryptocurrency security threats often transcend national boundaries. Our foundation aims to coordinate 
              cross-border initiatives to identify emerging threats, share intelligence, and develop standardized 
              responses that protect users globally.
            </p>
            <p className="text-gray-300 mt-3">
              Through our developing international network, we hope to facilitate knowledge sharing between 
              regulatory bodies, security researchers, and consumer protection agencies to create a more 
              unified approach to cryptocurrency security.
            </p>
          </div>
        </div>
      ),
    }
  ]
  
  // Handle the click event for tab navigation
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
  }
  
  return (
    <>
      <Head>
        <title>About Us | Open Crypto Foundation</title>
        <meta name="description" content="Learn about the Open Crypto Foundation's mission to create a safer crypto ecosystem through education, tools, and community." />
      </Head>
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Page header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Foundation</h1>
          <p className="text-xl text-light-muted max-w-3xl mx-auto">
            Building a safer cryptocurrency ecosystem through education, tools, and independent verification.
          </p>
        </div>
        
        {/* About page content using TabLayout */}
        <TabLayout
          tabs={aboutSections}
          activeTab={activeSection}
          onTabChange={handleSectionChange}
        >
          {aboutSections.find(section => section.id === activeSection)?.content}
        </TabLayout>
        
        {/* Call to action section */}
        <div className="mt-16 bg-dark-card border border-dark-light/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Join Us In Our Mission</h3>
          <p className="text-light-muted mb-6 max-w-3xl mx-auto">
            We're looking for passionate individuals and organizations to help build a safer crypto ecosystem.
            Whether you're a developer, educator, or enthusiast, there's a place for you at the Open Crypto Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about/philosophy" className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors">
              Our Philosophy
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-primary/30 hover:border-primary hover:bg-dark-elevated text-white rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
}

// Define getLayout property to use the Layout component
AboutPage.getLayout = (page: React.ReactElement) => (
  <Layout
    title="About Us | Open Crypto Foundation"
    description="Learn about the Open Crypto Foundation's mission to create a safer crypto ecosystem through education, tools, and community."
  >
    {page}
  </Layout>
)

export default AboutPage 