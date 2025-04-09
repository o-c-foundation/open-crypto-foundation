import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  FaBars, 
  FaTimes, 
  FaCoins, 
  FaChartBar, 
  FaHome, 
  FaBook, 
  FaScroll, 
  FaInfoCircle, 
  FaFileAlt, 
  FaRoad, 
  FaShoppingCart,
  FaLayerGroup
} from 'react-icons/fa'
import Logo from './Logo'
import { useLanguage } from '../contexts/LanguageContext'

// Define navigation item type to fix TypeScript errors
type NavItem = {
  name: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
  isSpecial?: boolean;
  children?: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
  current?: boolean;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const router = useRouter()
  const { t } = useLanguage()

  const navigation: NavItem[] = [
    { name: 'Home', href: '/', current: false, icon: <FaHome className="mr-1" /> },
    {
      name: 'Resources',
      current: false,
      icon: <FaLayerGroup className="mr-1" />,
      children: [
        { name: 'Scam Database', href: '/scam-database', description: 'Comprehensive database of cryptocurrency scams and phishing websites' },
        { name: 'Investors and Traders', href: '/resources/traders', description: 'Resources for crypto traders and DeFi users' },
        { name: 'Developers', href: '/resources/developers', description: 'Essential resources for smart contract and DeFi developers' },
        { name: 'Security Guide', href: '/resources/security-guide', description: 'Protect your crypto assets with essential security knowledge and best practices' },
        { name: 'Wallet Guide', href: '/resources/wallet-guide', description: 'Set up and manage your crypto wallet, networks, tokens, and NFTs' },
        { name: 'DeFi Fundamentals', href: '/resources/defi-fundamentals', description: 'Learn about cryptocurrency, blockchain technology, and decentralized finance' }
      ]
    },
    { name: 'Charts', href: '/charts', current: false, icon: <FaChartBar className="mr-1" /> },
    { name: 'Manifesto', href: '/manifesto', current: false, icon: <FaScroll className="mr-1" /> },
    { name: 'About', href: '/about', current: false, icon: <FaInfoCircle className="mr-1" /> },
    { name: 'Whitepaper', href: '/whitepaper', current: false, icon: <FaFileAlt className="mr-1" /> },
    { name: 'Roadmap', href: '/roadmap', current: false, icon: <FaRoad className="mr-1" /> },
    { name: 'Presale', href: '/presale', current: false, icon: <FaShoppingCart className="mr-1" /> },
    { name: 'OFC Airdrops', href: '/claim', icon: <FaCoins className="mr-1" />, badge: 'New' }
  ]
  
  const toggleDropdown = (name: string) => {
    if (dropdownOpen === name) {
      setDropdownOpen(null)
    } else {
      setDropdownOpen(name)
    }
  }

  return (
    <header className="bg-transparent backdrop-blur-sm border-b border-dark-light/10 sticky top-0 z-50">
      <div className="w-full">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center justify-center mr-2 transition-all duration-300 group-hover:shadow-glow">
                <Logo size="md" />
              </div>
              <span className="font-display font-bold text-lg sm:text-xl text-white whitespace-nowrap group-hover:text-gradient">Open Crypto Foundation</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - keep centered */}
          <nav className="hidden md:flex space-x-4 lg:space-x-5 pr-4">
            {navigation.map((item) => 
              !item.children ? (
                <Link 
                  href={item.href} 
                  key={item.name}
                  className={`text-light-muted hover:text-light px-1 py-2 relative group whitespace-nowrap
                    ${router.pathname === item.href ? 'text-light' : ''}
                  `}
                >
                  <span className="flex items-center">
                    {item.icon && item.icon}
                    {item.name}
                    {item.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 
                    ${router.pathname === item.href ? 'w-full' : 'group-hover:w-full'}`}></span>
                </Link>
              ) : (
                <div className="relative" key={item.name}>
                  <button
                    className={`text-light-muted hover:text-light px-1 py-2 inline-flex items-center relative group whitespace-nowrap
                      ${(router.pathname.startsWith('/resources') && item.name === t('resources')) || 
                        ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                          router.pathname === '/tokenomics' || router.pathname === '/audit' ||
                          router.pathname === '/wallets-and-funds') && 
                          item.name === 'Foundation') ? 'text-light' : ''}
                    `}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 
                      ${(router.pathname.startsWith('/resources') && item.name === t('resources')) || 
                         ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                           router.pathname === '/tokenomics' || router.pathname === '/audit' ||
                           router.pathname === '/wallets-and-funds') && 
                           item.name === 'Foundation') ? 'w-full' : 'group-hover:w-full'}`}></span>
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
        <div className="md:hidden py-4 border-t border-dark-light/10 bg-black/50 backdrop-blur-md">
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
                    <span className="flex items-center">
                      {item.icon && item.icon}
                      {item.name}
                      {item.badge && (
                        <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                ) : (
                  <div key={item.name}>
                    <button
                      className={`text-light-muted hover:text-light px-3 py-3 inline-flex items-center justify-between w-full border-l-2 transition-all duration-200
                        ${(router.pathname.startsWith('/resources') && item.name === t('resources')) || 
                          ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                            router.pathname === '/tokenomics' || router.pathname === '/audit' ||
                            router.pathname === '/wallets-and-funds') && 
                            item.name === 'Foundation')
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