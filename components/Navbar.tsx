import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const router = useRouter()
  const { t } = useLanguage()

  const navigation = [
    { name: t('home'), href: '/' },
    { 
      name: t('tools'), 
      href: '/tools',
      description: 'Directory of trusted third-party tools for safer crypto trading and investment'
    },
    { name: t('services'), href: '/services' },
    { name: 'Scam DB', href: '/scam-database', description: 'Comprehensive database of cryptocurrency scams and phishing websites' },
    { 
      name: t('resources'), 
      children: [
        { name: t('forTraders'), href: '/resources/traders', description: 'Resources for crypto traders and DeFi users' },
        { name: 'Developer Read', href: '/resources/developers', description: 'Essential reading material for smart contract and DeFi developers' },
        { name: 'Developer Tools', href: '/resources/blockchain-repositories', description: 'Comprehensive directory of blockchain development tools and repositories' },
        { name: t('defiFundamentals'), href: '/resources/defi-fundamentals', description: 'Learn about cryptocurrency, blockchain technology, and decentralized finance' },
        { name: t('securityGuide'), href: '/resources/security-guide', description: 'Protect your crypto assets with essential security knowledge and best practices' },
        { name: t('walletGuide'), href: '/resources/wallet-guide', description: 'Set up and manage your crypto wallet, networks, tokens, and NFTs' },
        { name: t('forEveryone'), href: '/resources/everyone', description: 'Resources for anyone interested in crypto safety' }
      ]
    },
    {
      name: 'Token',
      children: [
        { name: 'Whitepaper', href: '/whitepaper', description: 'Technical overview of the OCF token architecture and protocol' },
        { name: 'Roadmap', href: '/roadmap', description: 'Detailed development timeline and milestone tracking' },
        { name: 'Tokenomics', href: '/tokenomics', description: 'Token distribution, vesting, and economic model' },
        { name: 'Security Audit', href: '/audit', description: 'Security verification and audit certification results' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: t('about'), href: '/about' },
    { name: t('manifesto'), href: '/manifesto' },
  ]
  
  const toggleDropdown = (name: string) => {
    if (dropdownOpen === name) {
      setDropdownOpen(null)
    } else {
      setDropdownOpen(name)
    }
  }

  return (
    <header className="bg-dark backdrop-blur-md bg-opacity-80 border-b border-dark-light/30 shadow-md sticky top-0 z-50">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center justify-center mr-2 transition-all duration-300 group-hover:shadow-glow">
                <Logo size="md" />
              </div>
              <span className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-gradient">Open Crypto Foundation</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => 
              !item.children ? (
                <Link 
                  href={item.href} 
                  key={item.name}
                  className={`text-light-muted hover:text-light px-1 py-2 relative group
                    ${router.pathname === item.href ? 'text-light' : ''}
                  `}
                >
                  <span>{item.name}</span>
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 
                    ${router.pathname === item.href ? 'w-full' : 'group-hover:w-full'}`}></span>
                </Link>
              ) : (
                <div className="relative" key={item.name}>
                  <button
                    className={`text-light-muted hover:text-light px-1 py-2 inline-flex items-center relative group
                      ${(router.pathname.startsWith('/resources') && item.name === t('resources')) || 
                        ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                          router.pathname === '/tokenomics' || router.pathname === '/audit') && 
                          item.name === 'Token') ? 'text-light' : ''}
                    `}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 
                      ${(router.pathname.startsWith('/resources') && item.name === t('resources')) || 
                         ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                           router.pathname === '/tokenomics' || router.pathname === '/audit') && 
                           item.name === 'Token') ? 'w-full' : 'group-hover:w-full'}`}></span>
                  </button>
                  
                  {dropdownOpen === item.name && (
                    <div className="absolute z-10 -ml-4 mt-2 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg border border-dark-light overflow-hidden backdrop-blur-xl">
                        <div className="relative grid gap-3 bg-dark-card px-5 py-6 sm:gap-6 sm:p-8">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 hover:bg-dark-elevated rounded-lg text-light-muted hover:text-light transition-all duration-200 border border-transparent hover:border-primary/20"
                              onClick={() => setDropdownOpen(null)}
                            >
                              <p className="text-base font-medium text-light">{child.name}</p>
                              {child.description && (
                                <p className="mt-1 text-sm text-light-muted">{child.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className="text-light-muted hover:text-light p-2 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden py-4 border-t border-dark-light/30 bg-dark-elevated backdrop-blur-md">
          <div className="container px-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => 
                !item.children ? (
                  <Link 
                    href={item.href} 
                    key={item.name}
                    className={`text-light-muted hover:text-light px-3 py-3 border-l-2 transition-all duration-200
                      ${router.pathname === item.href 
                        ? 'border-primary text-light bg-primary/5' 
                        : 'border-transparent hover:border-primary/50 hover:bg-dark-card'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name}>
                    <button
                      className={`text-light-muted hover:text-light px-3 py-3 inline-flex items-center justify-between w-full border-l-2 transition-all duration-200
                        ${(router.pathname.startsWith('/resources') && item.name === t('resources')) || 
                          ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                            router.pathname === '/tokenomics' || router.pathname === '/audit') && 
                            item.name === 'Token')
                          ? 'border-primary text-light bg-primary/5' 
                          : 'border-transparent hover:border-primary/50 hover:bg-dark-card'
                        }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {dropdownOpen === item.name && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-primary/30 ml-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block p-3 text-light-muted hover:text-light transition-all duration-200 rounded-r-lg
                              ${router.pathname === child.href 
                                ? 'bg-primary/10 text-light' 
                                : 'hover:bg-dark-card'
                              }`}
                            onClick={() => {
                              setDropdownOpen(null)
                              setIsOpen(false)
                            }}
                          >
                            <p className="text-sm font-medium">{child.name}</p>
                            {child.description && (
                              <p className="mt-1 text-xs opacity-70">{child.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 