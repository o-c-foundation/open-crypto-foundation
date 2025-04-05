import React from 'react';
import Head from 'next/head';
import { FaCheckCircle, FaShieldAlt, FaUsers, FaCodeBranch, FaNetworkWired, FaFileContract, FaHandHoldingUsd } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Our Services | Open Crypto Foundation</title>
        <meta name="description" content="Professional audit services for crypto projects by Open Crypto Foundation" />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-0">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive audit services to ensure the safety and integrity of crypto projects and protect the community.
            </p>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Professional Audit Services</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                At Open Crypto Foundation, we provide comprehensive audit services performed by trusted associates operating under rigorous scrutiny. Our audits are fully transparent and honest, without the risk of influence or monetary bribery from projects or associated parties. Obtaining a certificate of Passed Audit from the Open Crypto Foundation signifies that your project and the team behind it have been thoroughly vetted and are safe for the community to interact with.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">Our Audit Services Include:</h3>
              
              <div className="grid gap-6 md:grid-cols-2 mb-10">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FaFileContract className="text-purple-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">Token Audits</h4>
                  </div>
                  <p className="text-gray-300">
                    Comprehensive review of token smart contracts, tokenomics, and implementation to identify vulnerabilities, security issues, and potential exploits.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FaUsers className="text-purple-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">Team Audits</h4>
                  </div>
                  <p className="text-gray-300">
                    Thorough background checks on project founders and team members, including verification of credentials, work history, and reputation in the industry.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FaCodeBranch className="text-purple-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">DApp Audits</h4>
                  </div>
                  <p className="text-gray-300">
                    End-to-end review of decentralized applications, analyzing smart contract interactions, front-end security, and potential attack vectors.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FaNetworkWired className="text-purple-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">Network Audits</h4>
                  </div>
                  <p className="text-gray-300">
                    Evaluation of blockchain networks, consensus mechanisms, scalability solutions, and security architectures to ensure robustness and reliability.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg md:col-span-2">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-purple-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">Program Audits</h4>
                  </div>
                  <p className="text-gray-300">
                    Detailed code review of protocols, platforms, and programs to identify security flaws, logic errors, and compliance issues before deployment.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-600 pt-10 mb-10">
                <h3 className="text-xl font-semibold mb-6 text-white">Fund Allocation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transparency in how we utilize funds is a core principle at Open Crypto Foundation:
                </p>
                
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-3">Operational Expenses</h4>
                    <p className="text-gray-300 mb-3">
                      50% of all revenue is allocated to cover operational expenses and salaries, ensuring we maintain a professional team and high-quality services.
                    </p>
                    <div className="w-full bg-gray-600 rounded-full h-2.5">
                      <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-3">Project Capital & Victim Recovery</h4>
                    <p className="text-gray-300 mb-3">
                      The other 50% is directed to providing capital for sustainable long-term projects and supporting a victim recovery fund for those affected by crypto scams.
                    </p>
                    <div className="w-full bg-gray-600 rounded-full h-2.5">
                      <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg mb-10">
                  <div className="flex items-center mb-4">
                    <FaHandHoldingUsd className="text-purple-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">Transparent Multisig Governance</h4>
                  </div>
                  <p className="text-gray-300">
                    Both our project capital fund and victim recovery fund are public and secured by a 10-person multisig wallet, requiring consensus from multiple trusted parties to approve any transaction. This ensures maximum security and prevents unilateral decision-making.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-6">
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
          </div>

          {/* CTA section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ready to secure your project?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss how our audit services can help establish trust and security for your crypto project.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Request an Audit
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 