import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaGithub, FaDiscord, FaTelegram, FaEnvelope, FaGlobe } from 'react-icons/fa'
import Logo from './Logo'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { language, changeLanguage, t } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as 'en' | 'es' | 'ja');
  }

  return (
    <footer className="py-12 bg-black text-gray-300 border-t border-gray-800">
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-1 gap-8 pb-8 border-b sm:grid-cols-2 md:grid-cols-4 border-gray-800">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center">
                <Logo size="md" />
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
            <h3 className="mb-4 text-lg font-semibold text-white">{t('tools')}</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/contract-scanner" className="hover:text-white">Contract Scanner</Link></li>
              <li><Link href="/tools/token-analyzer" className="hover:text-white">Token Analyzer</Link></li>
              <li><Link href="/tools/risk-calculator" className="hover:text-white">Risk Calculator</Link></li>
              <li><Link href="/tools/scam-token-approver" className="hover:text-white">Scam Token Approver</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{t('resources')}</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/traders" className="hover:text-white">{t('forTraders')}</Link></li>
              <li><Link href="/resources/developers" className="hover:text-white">{t('forDevelopers')}</Link></li>
              <li><Link href="/resources/scam-database" className="hover:text-white">Scam Database</Link></li>
              <li><Link href="/resources/guides" className="hover:text-white">Educational Guides</Link></li>
              <li><Link href="/resources/defi-fundamentals" className="hover:text-white">{t('defiFundamentals')}</Link></li>
              <li><Link href="/manifesto" className="hover:text-white">{t('manifesto')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{t('about')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">{t('about')}</Link></li>
              <li><Link href="/about/philosophy" className="hover:text-white">Our Philosophy</Link></li>
              <li><Link href="/about/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">{t('privacyPolicy')}</Link></li>
              <li><Link href="/terms" className="hover:text-white">{t('termsOfService')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col justify-between pt-8 space-y-6 md:space-y-0 md:flex-row">
          <div className="text-sm text-gray-400">
            {t('copyright').replace('{year}', new Date().getFullYear().toString())}
          </div>
          
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center">
            <div className="flex items-center space-x-3 md:mr-6">
              <FaGlobe className="text-gray-400" />
              <select 
                value={language}
                onChange={handleLanguageChange}
                className="bg-gray-800 text-gray-300 border border-gray-700 rounded py-1 px-2 text-sm"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ja">日本語</option>
              </select>
            </div>
            
            <div className="flex flex-wrap gap-3 md:gap-0 md:space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white">{t('privacyPolicy')}</Link>
              <span className="hidden md:inline text-gray-600">|</span>
              <Link href="/terms" className="text-gray-400 hover:text-white">{t('termsOfService')}</Link>
              <span className="hidden md:inline text-gray-600">|</span>
              <Link href="/cookies" className="text-gray-400 hover:text-white">{t('cookiePolicy')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 