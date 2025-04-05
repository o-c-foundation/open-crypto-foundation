import React from 'react'
import Link from 'next/link'
import { FaChartLine, FaLock, FaCode, FaSearch, FaShieldAlt } from 'react-icons/fa'

const alternatives = [
  {
    title: "DeFi Bounty Programs",
    description: "Use your skills to find vulnerabilities and get paid legitimately through bug bounty programs.",
    icon: FaSearch,
    color: "text-indigo-600",
  },
  {
    title: "Security Auditing",
    description: "Offer auditing services to projects by leveraging your understanding of vulnerabilities.",
    icon: FaShieldAlt,
    color: "text-blue-600",
  },
  {
    title: "Ethical Arbitrage",
    description: "Profit from price differences across exchanges without harming other users.",
    icon: FaChartLine,
    color: "text-green-600",
  },
  {
    title: "Sustainable Yield Farming",
    description: "Learn about legitimate yield generation that doesn't rely on unsustainable tokenomics.",
    icon: FaLock,
    color: "text-amber-600",
  },
  {
    title: "Build Real Solutions",
    description: "Create genuine value by developing tools that solve real problems in the DeFi space.",
    icon: FaCode,
    color: "text-purple-600",
  },
]

export default function AlternativePaths() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Alternative Paths to Profit
          </h2>
          <p className="text-lg text-gray-700">
            The DeFi ecosystem offers numerous legitimate ways to generate returns without causing harm. 
            We believe in redirecting skills toward beneficial activities that contribute positively to the ecosystem.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {alternatives.map((alternative, index) => (
            <div key={index} className="flex items-start p-5 mb-5 bg-white rounded-xl shadow-sm">
              <div className={`p-3 mr-4 rounded-full bg-gray-100 ${alternative.color}`}>
                <alternative.icon size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{alternative.title}</h3>
                <p className="text-gray-700">{alternative.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="mb-6 text-lg text-gray-700">
            If you're considering harmful activities due to financial pressures or technical interests, 
            we invite you to explore these ethical alternatives that can be equally or more profitable in the long run.
          </p>
          <Link href="/resources/alternative-paths" className="btn btn-primary">
            Explore Ethical Opportunities
          </Link>
        </div>
      </div>
    </section>
  )
} 