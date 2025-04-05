import React from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt, FaSearch, FaFileContract, FaCalculator, FaExclamationTriangle } from 'react-icons/fa'

const tools = [
  {
    title: "Contract Checker Tools",
    description: "Scan smart contracts for vulnerabilities, backdoors, and suspicious code patterns using verified tools.",
    icon: <FaFileContract className="h-12 w-12 text-primary-500 mb-4" />,
    link: "/tools#contract-checker-tools",
  },
  {
    title: "Token Analysis Tools",
    description: "Research tokens by analyzing distribution, liquidity, and holder patterns with trusted analysis platforms.",
    icon: <FaSearch className="h-12 w-12 text-primary-500 mb-4" />,
    link: "/tools#token-analysis-tools",
  },
  {
    title: "Risk Calculators",
    description: "Evaluate your portfolio risk exposure and get recommendations for safer DeFi participation.",
    icon: <FaCalculator className="h-12 w-12 text-primary-500 mb-4" />,
    link: "/tools#risk-calculators",
  },
  {
    title: "Scam Databases",
    description: "Search established databases for known scams, fraudulent projects, and blacklisted addresses.",
    icon: <FaExclamationTriangle className="h-12 w-12 text-primary-500 mb-4" />,
    link: "/tools#scam-databases",
  },
]

export default function SafetyTools() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted Tools Directory
          </h2>
          <p className="text-lg text-gray-600">
            We've curated the best external tools to help you research, analyze, and stay safe in the crypto space.
            All tools have been verified by our team for reliability and usefulness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-sm border border-gray-100 text-center p-6">
              <div className="flex justify-center">
                {tool.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{tool.title}</h3>
              <p className="mb-6 text-gray-600">{tool.description}</p>
              <Link href={tool.link} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Browse Tools <FaExternalLinkAlt className="ml-1 h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/tools" 
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Explore All Tools
          </Link>
        </div>
      </div>
    </section>
  )
} 