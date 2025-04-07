import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCheckCircle, FaShieldAlt, FaUsers, FaCodeBranch, FaNetworkWired, FaFileContract, FaHandHoldingUsd } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import TabLayout from '../components/TabLayout';

// Service types data
const serviceTypes = [
  {
    id: 'token-audits',
    name: 'Token Audits',
    icon: <FaFileContract className="text-primary" size={24} />,
    description: 'Comprehensive review of token smart contracts, tokenomics, and implementation to identify vulnerabilities, security issues, and potential exploits.'
  },
  {
    id: 'team-audits',
    name: 'Team Audits',
    icon: <FaUsers className="text-primary" size={24} />,
    description: 'Thorough background checks on project founders and team members, including verification of credentials, work history, and reputation in the industry.'
  },
  {
    id: 'dapp-audits',
    name: 'DApp Audits',
    icon: <FaCodeBranch className="text-primary" size={24} />,
    description: 'End-to-end review of decentralized applications, analyzing smart contract interactions, front-end security, and potential attack vectors.'
  },
  {
    id: 'network-audits',
    name: 'Network Audits',
    icon: <FaNetworkWired className="text-primary" size={24} />,
    description: 'Evaluation of blockchain networks, consensus mechanisms, scalability solutions, and security architectures to ensure robustness and reliability.'
  },
  {
    id: 'program-audits',
    name: 'Program Audits',
    icon: <FaShieldAlt className="text-primary" size={24} />,
    description: 'Detailed code review of protocols, platforms, and programs to identify security flaws, logic errors, and compliance issues before deployment.'
  }
];

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState('token-audits');

  return (
    <>
      <Head>
        <title>Our Services | Open Crypto Foundation</title>
        <meta name="description" content="Professional audit services for crypto projects by Open Crypto Foundation" />
      </Head>

      <div className="py-12 md:py-20 bg-dark text-white">
        <div className="container px-4 md:px-0">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive audit services to ensure the safety and integrity of crypto projects and protect the community.
            </p>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Professional Audit Services</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              At Open Crypto Foundation, we provide comprehensive audit services performed by trusted associates operating under rigorous scrutiny. Our audits are fully transparent and honest, without the risk of influence or monetary bribery from projects or associated parties. Obtaining a certificate of Passed Audit from the Open Crypto Foundation signifies that your project and the team behind it have been thoroughly vetted and are safe for the community to interact with.
            </p>

            <h3 className="text-xl font-semibold mb-6 text-white">Our Audit Services Include:</h3>
            
            {/* Vertical tabs using TabLayout component */}
            <TabLayout
              tabs={serviceTypes.map(service => ({
                id: service.id,
                name: service.name,
                icon: service.icon
              }))}
              activeTab={activeService}
              onTabChange={setActiveService}
              tabPosition="side"
            >
              {serviceTypes.map((service) => (
                <div 
                  key={service.id}
                  className={`bg-dark-card border border-dark-light/30 rounded-lg p-6 transition-opacity duration-300 ${
                    activeService === service.id ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">{service.name}</h4>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="bg-dark-light/10 p-5 rounded-lg mb-6 border border-dark-light/20">
                    <h5 className="font-semibold text-white mb-3">What We Analyze</h5>
                    {service.id === 'token-audits' && (
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Contract code structure, logic, and security vulnerabilities</li>
                        <li>Token distribution and wallet concentration risks</li>
                        <li>Tokenomics sustainability and incentive alignment</li>
                        <li>Liquidity provisions and potential manipulation vectors</li>
                        <li>Transaction fee structures and their implications</li>
                        <li>Contract ownership and administrative privileges</li>
                      </ul>
                    )}
                    
                    {service.id === 'team-audits' && (
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Identity verification and background checks</li>
                        <li>Previous project history and reputation</li>
                        <li>Professional credentials and qualifications</li>
                        <li>Social media footprint and community interactions</li>
                        <li>History of previous ventures and their outcomes</li>
                        <li>Alignment of team expertise with project goals</li>
                      </ul>
                    )}
                    
                    {service.id === 'dapp-audits' && (
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Smart contract integration and interaction patterns</li>
                        <li>Frontend-to-blockchain communication security</li>
                        <li>User authentication and authorization mechanisms</li>
                        <li>Asset handling and transaction flow security</li>
                        <li>Oracle implementations and external data validation</li>
                        <li>Gas optimization and transaction efficiency</li>
                      </ul>
                    )}
                    
                    {service.id === 'network-audits' && (
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Consensus mechanism security and efficiency</li>
                        <li>Node distribution and decentralization analysis</li>
                        <li>Network throughput and scalability assessment</li>
                        <li>Attack vector identification and mitigation strategies</li>
                        <li>Cross-chain bridge security and implementation</li>
                        <li>Network governance mechanisms and incentive structures</li>
                      </ul>
                    )}
                    
                    {service.id === 'program-audits' && (
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Code quality, organization, and documentation</li>
                        <li>Security vulnerabilities and exploit potential</li>
                        <li>Logic errors and edge case handling</li>
                        <li>Compliance with industry standards and best practices</li>
                        <li>Testing coverage and quality assurance processes</li>
                        <li>System architecture and component integration</li>
                      </ul>
                    )}
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
                    <h5 className="font-semibold text-white mb-3">Audit Deliverables</h5>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Detailed audit report with findings and recommendations</li>
                      <li>Risk assessment and severity classification</li>
                      <li>Actionable remediation steps for identified issues</li>
                      <li>Certificate of audit completion upon passing standards</li>
                    </ul>
                  </div>
                </div>
              ))}
            </TabLayout>
          </div>

          {/* Fund Allocation Section */}
          <div className="max-w-4xl mx-auto bg-dark-card rounded-xl shadow-xl overflow-hidden mb-16 border border-dark-light/30">
            <div className="p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-6 text-white">Fund Allocation</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transparency in how we utilize funds is a core principle at Open Crypto Foundation:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="bg-dark-light/10 p-6 rounded-lg border border-dark-light/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Operational Expenses</h4>
                  <p className="text-gray-300 mb-3">
                    50% of all revenue is allocated to cover operational expenses and salaries, ensuring we maintain a professional team and high-quality services.
                  </p>
                  <div className="w-full bg-dark-light/20 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div className="bg-dark-light/10 p-6 rounded-lg border border-dark-light/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Project Capital & Victim Recovery</h4>
                  <p className="text-gray-300 mb-3">
                    The other 50% is directed to providing capital for sustainable long-term projects and supporting a victim recovery fund for those affected by crypto scams.
                  </p>
                  <div className="w-full bg-dark-light/20 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-light/10 p-6 rounded-lg border border-dark-light/20">
                <div className="flex items-center mb-4">
                  <FaHandHoldingUsd className="text-primary mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-white">Transparent Multisig Governance</h4>
                </div>
                <p className="text-gray-300">
                  Both our project capital fund and victim recovery fund are public and secured by a 10-person multisig wallet, requiring consensus from multiple trusted parties to approve any transaction. This ensures maximum security and prevents unilateral decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate Section */}
          <div className="max-w-4xl mx-auto bg-dark-card rounded-xl shadow-xl overflow-hidden mb-16 border border-dark-light/30">
            <div className="p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" size={20} />
                Certificate of Passed Audit
              </h3>
              <p className="text-gray-300 mb-4">
                Projects that successfully complete our rigorous audit process receive our Certificate of Passed Audit, a recognized symbol of trust in the crypto community. This certification indicates that:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>The project's code has been thoroughly reviewed and is free from critical vulnerabilities</li>
                <li>The team's backgrounds have been verified and found to be legitimate</li>
                <li>The project's tokenomics and business model are sustainable</li>
                <li>The project adheres to industry best practices and standards</li>
              </ul>
              <p className="text-gray-300">
                Our certification helps projects build trust with their communities while helping users identify safe protocols to interact with.
              </p>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ready to secure your project?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss how our audit services can help establish trust and security for your crypto project.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Request an Audit
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 