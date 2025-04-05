import React from 'react'
import Link from 'next/link'
import { FaBook, FaUserShield, FaCode, FaExclamationTriangle, FaRoute, FaLightbulb } from 'react-icons/fa'

const resourceCategories = [
  {
    title: "For Traders",
    description: "Learn how to spot scams, evaluate projects, and protect your investments.",
    icon: FaUserShield,
    link: "/resources/traders",
    color: "bg-blue-50 border-blue-200 text-blue-600",
  },
  {
    title: "For Developers",
    description: "Best practices for secure smart contract development and tools for code auditing.",
    icon: FaCode,
    link: "/resources/developers",
    color: "bg-green-50 border-green-200 text-green-600",
  },
  {
    title: "Scam Database",
    description: "Extensive catalog of known scams, vulnerabilities, and attack vectors in DeFi.",
    icon: FaExclamationTriangle,
    link: "/resources/scam-database",
    color: "bg-red-50 border-red-200 text-red-600",
  },
  {
    title: "Educational Guides",
    description: "In-depth tutorials and articles on safely navigating the DeFi ecosystem.",
    icon: FaBook,
    link: "/resources/guides",
    color: "bg-purple-50 border-purple-200 text-purple-600",
  },
  {
    title: "Alternative Paths",
    description: "Ethical and sustainable ways to generate returns in DeFi without resorting to harmful practices.",
    icon: FaRoute,
    link: "/resources/alternative-paths",
    color: "bg-amber-50 border-amber-200 text-amber-600",
  },
  {
    title: "Harm Reduction",
    description: "Guidelines for minimizing the impact of exploits and ensuring users can recover from incidents.",
    icon: FaLightbulb,
    link: "/resources/harm-reduction",
    color: "bg-teal-50 border-teal-200 text-teal-600",
  },
]

export default function Resources() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Educational Resources
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive guides and information to help everyone stay informed and safe in the crypto space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {resourceCategories.map((category, index) => (
            <Link 
              key={index} 
              href={category.link}
              className={`p-6 border rounded-xl ${category.color} hover:shadow-md transition-shadow flex items-start space-x-4`}
            >
              <div className="p-3 rounded-full bg-white">
                <category.icon size={24} className={category.color.split(' ')[2]} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                <p className="text-gray-700">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="p-8 mt-12 bg-primary-50 rounded-xl">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-primary-800">Our Philosophy</h3>
              <p className="text-gray-700">
                We believe in creating a fair environment where both users and developers can interact safely. 
                While we can't stop all malicious activity, we can make everyone more informed to minimize harm.
              </p>
            </div>
            <div className="text-center md:text-right">
              <Link href="/about/philosophy" className="btn btn-primary">
                Learn More About Our Approach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 