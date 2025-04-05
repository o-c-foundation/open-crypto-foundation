import React from 'react'
import { FaBan, FaHandHoldingHeart, FaCrown, FaUserShield, FaUsers } from 'react-icons/fa'

export default function HarmReduction() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Harm Reduction Strategies
          </h2>
          <p className="text-lg text-gray-700">
            While we firmly oppose harmful activities in DeFi, we recognize that providing guidance on minimizing harm 
            can protect more users during incidents. Our goal is to reduce overall negative impact within the ecosystem.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-6 mb-8 bg-white rounded-xl shadow-sm">
            <h3 className="mb-4 text-xl font-semibold flex items-center">
              <span className="mr-2 text-red-500"><FaBan size={20} /></span>
              For Those Considering Harmful Activities
            </h3>
            <p className="mb-3">
              We strongly encourage exploring legitimate alternatives instead. However, if you're determined to proceed, 
              consider these harm-minimizing approaches:
            </p>
            <ul className="ml-6 space-y-2 list-disc">
              <li>Target only users who can afford losses (avoid exploiting small retail investors)</li>
              <li>Implement caps on how much a single user can lose</li>
              <li>Allow users to recover a portion of their funds</li>
              <li>Provide clear warnings about risks so users can make informed decisions</li>
              <li>Avoid permanent or irreversible damage to protocols</li>
            </ul>
          </div>

          <div className="p-6 mb-8 bg-white rounded-xl shadow-sm">
            <h3 className="mb-4 text-xl font-semibold flex items-center">
              <span className="mr-2 text-green-500"><FaHandHoldingHeart size={20} /></span>
              For Projects and Developers
            </h3>
            <p className="mb-3">
              Implement safeguards that can minimize damage from potential exploits:
            </p>
            <ul className="ml-6 space-y-2 list-disc">
              <li>Transaction limits to prevent large-scale theft</li>
              <li>Time-locks for significant withdrawals</li>
              <li>Emergency pause functions for critical contract functions</li>
              <li>Whitelist trusted addresses for sensitive operations</li>
              <li>Insurance funds to compensate users in case of incidents</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="mb-4 text-xl font-semibold flex items-center">
              <span className="mr-2 text-blue-500"><FaUserShield size={20} /></span>
              For Users: Protecting Yourself
            </h3>
            <p className="mb-3">
              Best practices to minimize risk exposure:
            </p>
            <ul className="ml-6 space-y-2 list-disc">
              <li>Never invest more than you can afford to lose</li>
              <li>Distribute investments across multiple platforms</li>
              <li>Use hardware wallets for long-term storage</li>
              <li>Regularly check contract approvals and revoke unnecessary ones</li>
              <li>Research projects thoroughly before investing</li>
              <li>Use simulation tools before approving transactions</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-center flex items-center justify-center">
            <span className="mr-2 text-purple-500"><FaUsers size={20} /></span>
            Community Responsibility
          </h3>
          <p className="text-center text-gray-700">
            As a community, we share the responsibility of creating a safer DeFi ecosystem. 
            By promoting ethical standards and supporting projects that prioritize user safety, 
            we can collectively reduce harm and build a more sustainable future for decentralized finance.
          </p>
        </div>
      </div>
    </section>
  )
} 