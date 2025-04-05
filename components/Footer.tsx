import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaGithub, FaDiscord, FaTelegram, FaEnvelope } from 'react-icons/fa'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="py-12 bg-black text-gray-300 border-t border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 pb-8 border-b md:grid-cols-4 border-gray-800">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center">
                <Logo size="sm" />
              </div>
              <span className="text-xl font-bold text-white">Open Crypto Foundation</span>
            </Link>
            <p className="mb-6 text-gray-400">
              Empowering safe DeFi interactions through education and tools.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com/opencryptofdn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors">
                <FaTwitter size={18} className="text-white" />
              </a>
              <a href="https://github.com/opencryptofoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors">
                <FaGithub size={18} className="text-white" />
              </a>
              <a href="https://discord.gg/opencrypto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors">
                <FaDiscord size={18} className="text-white" />
              </a>
              <a href="https://t.me/opencryptofoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors">
                <FaTelegram size={18} className="text-white" />
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope size={16} className="mr-2 text-gray-400" />
              <a href="mailto:contact@opencryptofoundation.org" className="text-gray-400 hover:text-white">
                contact@opencryptofoundation.org
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/contract-scanner" className="hover:text-white">Contract Scanner</Link></li>
              <li><Link href="/tools/token-analyzer" className="hover:text-white">Token Analyzer</Link></li>
              <li><Link href="/tools/risk-calculator" className="hover:text-white">Risk Calculator</Link></li>
              <li><Link href="/tools/scam-token-approver" className="hover:text-white">Scam Token Approver</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/traders" className="hover:text-white">For Traders</Link></li>
              <li><Link href="/resources/developers" className="hover:text-white">For Developers</Link></li>
              <li><Link href="/resources/scam-database" className="hover:text-white">Scam Database</Link></li>
              <li><Link href="/resources/guides" className="hover:text-white">Educational Guides</Link></li>
              <li><Link href="/resources/defi-fundamentals" className="hover:text-white">DeFi Fundamentals</Link></li>
              <li><Link href="/manifesto" className="hover:text-white">Our Manifesto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/about/philosophy" className="hover:text-white">Our Philosophy</Link></li>
              <li><Link href="/about/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col justify-between pt-8 space-y-4 md:space-y-0 md:flex-row">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Open Crypto Foundation. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            <span className="text-gray-600">|</span>
            <Link href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 