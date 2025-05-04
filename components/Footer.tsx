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
    <footer className="py-16 bg-dark border-t border-dark-light/20 text-light-muted">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 pb-10 border-b sm:grid-cols-2 md:grid-cols-5 border-dark-elevated">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="flex items-center justify-center transition-all duration-300 group-hover:shadow-glow">
                <Logo size="md" />
              </div>
              <span className="text-xl font-display font-bold text-light group-hover:text-gradient">Open Crypto Foundation</span>
            </Link>
            <p className="mb-8 opacity-70">
              Empowering safe DeFi interactions through education and tools.
            </p>
            <p className="mb-4 opacity-70 flex items-center">
              <FaGlobe size={14} className="mr-2 opacity-70" />
              Based in United States
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com/opencryptofdn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center hover:bg-primary hover:scale-110 hover:shadow-glow transition-all duration-300">
                <FaTwitter size={18} className="text-light" />
              </a>
              <a href="https://github.com/o-c-foundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center hover:bg-primary hover:scale-110 hover:shadow-glow transition-all duration-300">
                <FaGithub size={18} className="text-light" />
              </a>
              <a href="https://discord.gg/opencrypto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center hover:bg-primary hover:scale-110 hover:shadow-glow transition-all duration-300">
                <FaDiscord size={18} className="text-light" />
              </a>
              <a href="https://t.me/ocfcommunity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center hover:bg-primary hover:scale-110 hover:shadow-glow transition-all duration-300">
                <FaTelegram size={18} className="text-light" />
              </a>
            </div>
            <div className="flex items-center group">
              <FaEnvelope size={16} className="mr-2 opacity-70 group-hover:text-primary transition-colors" />
              <a href="mailto:info@opencryptofoundation.com" className="opacity-70 hover:text-light hover:opacity-100 transition-colors">
                info@opencryptofoundation.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-display font-bold text-light">{t('tools')}</h3>
            <ul className="space-y-3">
              <li><Link href="/tools" className="hover:text-primary transition-colors">Tools Overview</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-display font-bold text-light">{t('resources')}</h3>
            <ul className="space-y-3">
              <li><Link href="/resources/traders" className="hover:text-primary transition-colors">{t('forTraders')}</Link></li>
              <li><Link href="/resources/developers" className="hover:text-primary transition-colors">{t('forDevelopers')}</Link></li>
              <li><Link href="/scam-database" className="hover:text-primary transition-colors">Scam Database</Link></li>
              <li><Link href="/verified-links" className="hover:text-primary transition-colors">Verified Links</Link></li>
              <li><Link href="/resources/guides" className="hover:text-primary transition-colors">Educational Guides</Link></li>
              <li><Link href="/resources/defi-fundamentals" className="hover:text-primary transition-colors">{t('defiFundamentals')}</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/manifesto" className="hover:text-primary transition-colors">{t('manifesto')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-display font-bold text-light">O.C. Foundation</h3>
            <ul className="space-y-3">
              <li><Link href="/whitepaper" className="hover:text-primary transition-colors">Whitepaper</Link></li>
              <li><Link href="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link></li>
              <li><Link href="/tokenomics" className="hover:text-primary transition-colors">Tokenomics</Link></li>
              <li><Link href="/wallets-and-funds" className="hover:text-primary transition-colors">O.C.F. Wallets and Funds</Link></li>
              <li><Link href="/audit" className="hover:text-primary transition-colors">Security Audit</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-display font-bold text-light">{t('about')}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('about')}</Link></li>
              <li><Link href="/about/philosophy" className="hover:text-primary transition-colors">Our Philosophy</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">{t('termsOfService')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col justify-between pt-10 space-y-6 md:space-y-0 md:flex-row items-center">
          <div className="text-sm opacity-60">
            {t('copyright').replace('{year}', new Date().getFullYear().toString())}
          </div>
          
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center">
            <div className="flex items-center space-x-3 md:mr-8 px-3 py-1 rounded-full border border-dark-light bg-dark-elevated">
              <FaGlobe className="text-primary" />
              <select 
                value={language}
                onChange={handleLanguageChange}
                className="bg-transparent text-light-muted focus:text-light border-none rounded py-1 px-1 text-sm focus:outline-none focus:ring-0"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ja">日本語</option>
              </select>
            </div>
            
            <div className="flex flex-wrap gap-3 md:gap-0 md:space-x-8 text-sm">
              <Link href="/privacy" className="opacity-70 hover:text-primary hover:opacity-100 transition-colors">{t('privacyPolicy')}</Link>
              <Link href="/terms" className="opacity-70 hover:text-primary hover:opacity-100 transition-colors">{t('termsOfService')}</Link>
              <Link href="/cookies" className="opacity-70 hover:text-primary hover:opacity-100 transition-colors">{t('cookiePolicy')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 