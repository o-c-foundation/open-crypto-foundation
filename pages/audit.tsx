import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaShieldAlt, FaCheck, FaExclamationTriangle, FaDownload, FaFileAlt, FaLock, FaCode, FaBug, FaCheckCircle } from 'react-icons/fa'

// Component for individual finding item
const FindingItem = ({ title, severity, description, status }) => {
  const severityColors = {
    Critical: 'text-red-500 bg-red-500/10 border-red-500/30',
    High: 'text-orange-500 bg-orange-500/10 border-orange-500/30',
    Medium: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
    Low: 'text-green-500 bg-green-500/10 border-green-500/30',
    Informational: 'text-blue-500 bg-blue-500/10 border-blue-500/30'
  };
  
  const statusColors = {
    Fixed: 'text-green-500 bg-green-500/10',
    Mitigated: 'text-blue-500 bg-blue-500/10',
    Acknowledged: 'text-yellow-500 bg-yellow-500/10'
  };

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden mb-4">
      <div className="bg-dark-elevated p-4 flex flex-col md:flex-row md:items-center gap-3 border-b border-gray-800">
        <h3 className="font-semibold text-white">{title}</h3>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${severityColors[severity]} ml-0 md:ml-auto`}>
          {severity}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status === 'Fixed' && <FaCheck className="inline mr-1" size={10} />}
          {status}
        </div>
      </div>
      <div className="p-4 text-sm text-gray-400">
        <p>{description}</p>
      </div>
    </div>
  );
};

// Component for audit firm card
const AuditorCard = ({ name, logo, date, scope, reportLink }) => (
  <div className="bg-dark-card rounded-xl border border-gray-800 overflow-hidden">
    <div className="p-5">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-slate-900 h-16 w-16 rounded-md flex items-center justify-center text-white text-xl font-bold">
          {logo}
        </div>
        <div>
          <h3 className="font-bold text-xl text-white">{name}</h3>
          <p className="text-sm text-gray-400">Completed: {date}</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="text-sm font-medium text-gray-400">Scope:</h4>
          <p className="text-sm text-white">{scope}</p>
        </div>
      </div>
      
      <a href={reportLink} className="text-primary hover:text-primary-light text-sm flex items-center">
        <FaFileAlt className="mr-2" /> View Full Audit Report
      </a>
    </div>
  </div>
);

export default function AuditPage() {
  const securityScores = [
    { category: 'Smart Contract Security', score: 98, maxScore: 100 },
    { category: 'Oracle Implementation', score: 96, maxScore: 100 },
    { category: 'Access Controls', score: 100, maxScore: 100 },
    { category: 'Cross-Chain Verification', score: 97, maxScore: 100 },
    { category: 'Cryptographic Implementation', score: 99, maxScore: 100 },
  ];
  
  const findings = [
    {
      title: 'Potential Reentrancy in Cross-Chain Message Processing',
      severity: 'Medium',
      description: 'The cross-chain message processing function lacked reentrancy protection in specific edge cases involving nested callbacks. While the exploit path was complex and required specific conditions, it represented a potential vulnerability that could have led to message duplication.',
      status: 'Fixed'
    },
    {
      title: 'Threshold Signature Verification Gas Optimization',
      severity: 'Low',
      description: 'The threshold signature verification routine used a non-optimized approach to public key aggregation, resulting in higher gas costs than necessary. This was an optimization issue rather than a security vulnerability.',
      status: 'Fixed'
    },
    {
      title: 'Oracle Data Validation Improvements',
      severity: 'Low',
      description: 'The price oracle implementation could benefit from additional sanity checks on retrieved data, including minimum/maximum bounds and rate of change verification to protect against unexpected market conditions or manipulated data.',
      status: 'Fixed'
    },
    {
      title: 'Cross-Chain Message Timeout Handling',
      severity: 'Medium',
      description: 'The timeout mechanism for cross-chain messages did not properly handle edge cases where a message was partially processed but never completed, potentially leading to locked funds or incomplete state updates.',
      status: 'Fixed'
    },
    {
      title: 'Governance Parameter Update Validation',
      severity: 'Low',
      description: 'The governance parameter update process lacked comprehensive input validation, potentially allowing the setting of incompatible or invalid configuration values. While protected by the governance process itself, additional validation would improve system robustness.',
      status: 'Fixed'
    },
    {
      title: 'Improved Documentation for Security-Critical Functions',
      severity: 'Informational',
      description: 'Several security-critical functions would benefit from more comprehensive documentation to ensure proper usage and maintenance. This finding addresses documentation quality rather than code security.',
      status: 'Fixed'
    },
    {
      title: 'BLS Signature Library Dependency Risk',
      severity: 'Informational',
      description: 'The protocol relies on external BLS signature libraries that, while well-audited, represent a dependency risk. Recommendation to implement a monitoring system for security advisories related to these dependencies.',
      status: 'Mitigated'
    }
  ];
  
  const auditors = [
    {
      name: 'ChainGuard Security',
      logo: 'CGS',
      date: 'March 15, 2025',
      scope: 'Ethereum smart contracts, validator node implementation, cross-chain messaging protocol',
      reportLink: '#'
    },
    {
      name: 'Solidity Defense',
      logo: 'SD',
      date: 'February 8, 2025',
      scope: 'Cross-chain bridge implementation, token contracts, Wormhole integration',
      reportLink: '#'
    },
    {
      name: 'HackProof Systems',
      logo: 'HPS',
      date: 'January 22, 2025',
      scope: 'Consensus mechanism, BLS implementation, validator selection algorithm',
      reportLink: '#'
    }
  ];
  
  return (
    <>
      <Head>
        <title>OCF Token Security Audit | Open Crypto Foundation</title>
        <meta name="description" content="Security audit results and certification for the Open Crypto Foundation token, cross-chain bridge, and validator infrastructure" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient">Security Audit Results</h1>
            <p className="text-xl text-gray-400 mb-8">Comprehensive security verification of the OCF token, cross-chain bridge implementation, and validator infrastructure by leading industry auditors.</p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/whitepaper" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center">
                <FaFileAlt className="mr-2" /> Read Whitepaper
              </Link>
              <Link href="/tokenomics" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium flex items-center">
                Tokenomics Details
              </Link>
              <a href="#" className="px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center">
                <FaDownload className="mr-2" /> Download Full Reports
              </a>
            </div>
            
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row items-center gap-6 mb-12">
              <div className="bg-green-500/10 p-5 rounded-full">
                <FaShieldAlt size={40} className="text-green-500" />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-white">Certificate of Security</h2>
                  <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">Verified Secure</div>
                </div>
                <p className="text-gray-400 mb-1">The Open Crypto Foundation token smart contracts, cross-chain bridge implementation, and validator infrastructure have undergone rigorous security assessment and have been certified secure by multiple independent security auditors.</p>
                <p className="text-gray-400 text-sm">Certification Date: <span className="text-white">March 28, 2025</span> | Valid Until: <span className="text-white">March 28, 2026</span></p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" /> Security Score
              </h2>
              <div className="bg-dark-card p-5 rounded-xl border border-gray-800">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-white">Overall Security Score</h3>
                    <div className="text-2xl font-bold text-gradient">98/100</div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {securityScores.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm text-gray-400">{item.category}</div>
                        <div className="text-sm font-medium text-white">{item.score}/{item.maxScore}</div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(item.score / item.maxScore) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaLock className="text-purple-500 mr-3" /> Security Measures
              </h2>
              <div className="bg-dark-card p-5 rounded-xl border border-gray-800">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Formal Verification</h3>
                      <p className="text-sm text-gray-400">Critical protocol components formally verified using Coq and TLA+ specifications with temporal safety properties</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Economic Attack Simulation</h3>
                      <p className="text-sm text-gray-400">Advanced economic attack vectors simulated with agent-based modeling to validate incentive alignment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Continuous Integration Tests</h3>
                      <p className="text-sm text-gray-400">Comprehensive test suite with 98% code coverage, including property-based testing and symbolic execution</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Multi-Phase Deployment</h3>
                      <p className="text-sm text-gray-400">Staged deployment with canary testing and progressive feature activation to minimize risk surface</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Emergency Response Plan</h3>
                      <p className="text-sm text-gray-400">Comprehensive incident response procedure with designated security team and multi-signature emergency controls</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaBug className="text-orange-500 mr-3" /> Audit Findings & Resolutions
            </h2>
            <div className="bg-dark-card p-5 rounded-xl border border-gray-800 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-6 text-sm">
                <div className="p-3 bg-dark-elevated rounded-lg">
                  <div className="text-3xl font-bold text-red-500 mb-1">0</div>
                  <div className="text-gray-400">Critical Issues</div>
                </div>
                <div className="p-3 bg-dark-elevated rounded-lg">
                  <div className="text-3xl font-bold text-orange-500 mb-1">0</div>
                  <div className="text-gray-400">High Issues</div>
                </div>
                <div className="p-3 bg-dark-elevated rounded-lg">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">2</div>
                  <div className="text-gray-400">Medium Issues</div>
                </div>
                <div className="p-3 bg-dark-elevated rounded-lg">
                  <div className="text-3xl font-bold text-green-500 mb-1">5</div>
                  <div className="text-gray-400">Low/Info Issues</div>
                </div>
              </div>
              
              <div className="flex justify-between flex-wrap items-center mb-6">
                <h3 className="font-semibold text-white text-lg">Findings Summary</h3>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1 text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">
                    <FaCheck size={10} /> <span>7/7 Resolved</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {findings.map((finding, index) => (
                  <FindingItem key={index} {...finding} />
                ))}
              </div>
            </div>
            
            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-blue-900/40 p-2 rounded mt-0.5 mr-3">
                  <FaExclamationTriangle className="text-blue-400" size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Note on Security Processes</h3>
                  <p className="text-sm text-gray-300">All identified issues have been addressed and verified by follow-up reviews. The Open Crypto Foundation maintains an ongoing security process that includes:</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Continuous monitoring and automated vulnerability scanning</li>
                    <li>Regular third-party security assessments</li>
                    <li>Bug bounty program with competitive rewards</li>
                    <li>Periodic re-auditing of critical components after significant updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaCode className="text-purple-500 mr-3" /> Security Auditors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {auditors.map((auditor, index) => (
                <AuditorCard key={index} {...auditor} />
              ))}
            </div>
          </div>
          
          <div className="bg-dark-card rounded-xl border border-gray-800 overflow-hidden mb-16">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Bug Bounty Program</h2>
              <p className="text-gray-400 mb-6">The Open Crypto Foundation maintains an ongoing bug bounty program to incentivize the responsible disclosure of security vulnerabilities.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-dark-elevated p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-1">Critical</div>
                  <div className="text-2xl font-bold text-white mb-1">$250,000</div>
                  <p className="text-xs text-gray-400">Complete compromise of system integrity or security</p>
                </div>
                <div className="bg-dark-elevated p-4 rounded-lg">
                  <div className="text-orange-500 font-bold mb-1">High</div>
                  <div className="text-2xl font-bold text-white mb-1">$100,000</div>
                  <p className="text-xs text-gray-400">Significant vulnerability affecting core functionality</p>
                </div>
                <div className="bg-dark-elevated p-4 rounded-lg">
                  <div className="text-yellow-500 font-bold mb-1">Medium</div>
                  <div className="text-2xl font-bold text-white mb-1">$25,000</div>
                  <p className="text-xs text-gray-400">Limited impact vulnerability with specific conditions</p>
                </div>
              </div>
              
              <a href="#" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium">
                Learn More About Bug Bounty
              </a>
            </div>
          </div>
          
          <div className="flex justify-between items-center border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">Security Audit Report v1.2 © 2025 Open Crypto Foundation</p>
            <Link href="/tokenomics" className="text-sm text-primary hover:text-primary-light">
              View Tokenomics →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 