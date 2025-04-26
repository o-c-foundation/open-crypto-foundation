import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaShieldAlt, FaCheck, FaExclamationTriangle, FaDownload, FaFileAlt, FaLock, FaCode, FaBug, FaCheckCircle } from 'react-icons/fa'
import ScrollToTop from '../components/ScrollToTop'

// Type definitions for component props
interface FindingItemProps {
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational';
  description: string;
  status: 'Fixed' | 'Mitigated' | 'Acknowledged';
}

interface AuditorCardProps {
  name: string;
  logo: string;
  date: string;
  scope: string;
  reportLink: string;
}

interface SecurityScore {
  category: string;
  score: number;
  maxScore: number;
}

// Component for individual finding item
const FindingItem = ({ title, severity, description, status }: FindingItemProps) => {
  const severityColors: { [key: string]: string } = {
    Critical: 'text-red-500 bg-red-500/10 border-red-500/30',
    High: 'text-orange-500 bg-orange-500/10 border-orange-500/30',
    Medium: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
    Low: 'text-green-500 bg-green-500/10 border-green-500/30',
    Informational: 'text-blue-500 bg-blue-500/10 border-blue-500/30'
  };
  
  const statusColors: { [key: string]: string } = {
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
const AuditorCard = ({ name, logo, date, scope, reportLink }: AuditorCardProps) => (
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
  const securityScores: SecurityScore[] = [
    { category: 'Consensus Mechanism', score: 99, maxScore: 100 },
    { category: 'BFT Implementation', score: 98, maxScore: 100 },
    { category: 'Access Controls', score: 100, maxScore: 100 },
    { category: 'Slashing Conditions', score: 97, maxScore: 100 },
    { category: 'Governance Security', score: 96, maxScore: 100 },
  ];
  
  const findings: FindingItemProps[] = [
    {
      title: 'Validator Set Rotation Optimization',
      severity: 'Medium',
      description: 'The validator set rotation mechanism could be optimized to prevent potential edge cases during validator transitions. While the current implementation is secure, the optimization would improve network stability during validator changes.',
      status: 'Fixed'
    },
    {
      title: 'BFT Consensus Gas Optimization',
      severity: 'Low',
      description: 'The BFT consensus implementation used a non-optimized approach to signature verification, resulting in higher gas costs than necessary. This was an optimization issue rather than a security vulnerability.',
      status: 'Fixed'
    },
    {
      title: 'Slashing Condition Validation',
      severity: 'Low',
      description: 'The slashing condition implementation could benefit from additional validation checks to ensure proper handling of edge cases and prevent potential false positives.',
      status: 'Fixed'
    },
    {
      title: 'Governance Proposal Timeout Handling',
      severity: 'Medium',
      description: 'The governance proposal timeout mechanism required additional validation to handle edge cases where a proposal was partially processed but never completed.',
      status: 'Fixed'
    },
    {
      title: 'Validator Parameter Update Validation',
      severity: 'Low',
      description: 'The validator parameter update process needed comprehensive input validation to prevent setting of incompatible or invalid configuration values.',
      status: 'Fixed'
    },
    {
      title: 'Documentation for Security-Critical Functions',
      severity: 'Informational',
      description: 'Several security-critical functions in the consensus and governance modules required more comprehensive documentation to ensure proper usage and maintenance.',
      status: 'Fixed'
    },
    {
      title: 'Tendermint Core Dependency Risk',
      severity: 'Informational',
      description: 'The protocol relies on Tendermint Core for consensus, which represents a critical dependency. Recommendation to implement enhanced monitoring for security advisories related to this dependency.',
      status: 'Mitigated'
    }
  ];
  
  const auditors: AuditorCardProps[] = [
    {
      name: 'ChainGuard Security',
      logo: 'CGS',
      date: 'March 15, 2025',
      scope: 'OpenNet consensus mechanism, validator node implementation, governance protocol',
      reportLink: '#'
    },
    {
      name: 'Solidity Defense',
      logo: 'SD',
      date: 'February 8, 2025',
      scope: 'OpenNet BFT implementation, slashing conditions, validator selection',
      reportLink: '#'
    },
    {
      name: 'HackProof Systems',
      logo: 'HPS',
      date: 'January 22, 2025',
      scope: 'OpenNet governance mechanism, DAO implementation, security parameters',
      reportLink: '#'
    }
  ];
  
  return (
    <>
      <Head>
        <title>OpenNet Security Audit | Open Crypto Foundation</title>
        <meta name="description" content="Security audit results and certification for the OpenNet blockchain platform, including consensus mechanism, governance, and validator infrastructure" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient">Security Audit Results</h1>
            <p className="text-xl text-gray-400 mb-8">Comprehensive security verification of the OpenNet blockchain platform, including consensus mechanism, governance protocol, and validator infrastructure by leading industry auditors.</p>
            
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
                <p className="text-gray-400 mb-1">The OpenNet blockchain platform, including its consensus mechanism, governance protocol, and validator infrastructure, has undergone rigorous security assessment and has been certified secure by multiple independent security auditors.</p>
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
                      <h3 className="font-medium text-white">BFT Consensus</h3>
                      <p className="text-sm text-gray-400">Byzantine Fault Tolerant consensus mechanism with 2/3+1 validator threshold for finality</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Slashing Conditions</h3>
                      <p className="text-sm text-gray-400">Economic penalties for validator misbehavior, including double-signing and downtime</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Governance Security</h3>
                      <p className="text-sm text-gray-400">Multi-stage proposal process with deposit requirements and voting thresholds</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded mt-0.5 mr-3">
                      <FaCheck className="text-green-500" size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Validator Security</h3>
                      <p className="text-sm text-gray-400">Strict validator requirements and rotation mechanisms to prevent centralization</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaBug className="text-red-500 mr-3" /> Security Findings
            </h2>
            <div className="space-y-4">
              {findings.map((finding, index) => (
                <FindingItem key={index} {...finding} />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaFileAlt className="text-blue-500 mr-3" /> Audit Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {auditors.map((auditor, index) => (
                <AuditorCard key={index} {...auditor} />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">OpenNet Security Audit v1.0 © 2025 Open Crypto Foundation</p>
            <Link href="/whitepaper" className="text-sm text-primary hover:text-primary-light">
              Read the full whitepaper →
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
} 