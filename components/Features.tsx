import React from 'react'
import { FaShieldAlt, FaTools, FaLightbulb, FaUsers } from 'react-icons/fa'

const features = [
  {
    title: "Smart Contract Scanner",
    description: "Analyze smart contracts for vulnerabilities and potential scams before interacting with them.",
    icon: FaShieldAlt,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Risk Assessment Tools",
    description: "Calculate and limit your exposure to risk with our suite of DeFi-specific tools.",
    icon: FaTools,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Educational Resources",
    description: "Comprehensive guides and tutorials on identifying and avoiding common DeFi scams.",
    icon: FaLightbulb,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Community Alerts",
    description: "Real-time notifications about emerging threats and scams in the crypto space.",
    icon: FaUsers,
    color: "bg-purple-100 text-purple-600",
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Tools For Safe DeFi Interactions
          </h2>
          <p className="text-lg text-gray-600">
            We provide everything you need to stay informed and protected in the decentralized finance ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 transition-transform bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1">
              <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 