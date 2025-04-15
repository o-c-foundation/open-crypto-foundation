import React, { useState, useEffect, useRef } from 'react'
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
  FaLayerGroup,
  FaFilter,
  FaRocket,
  FaCode,
  FaChevronDown,
  FaChevronRight,
  FaSearch,
  FaEllipsisV
} from 'react-icons/fa'
import Logo from './Logo'
import { useLanguage } from '../contexts/LanguageContext'
import { Transition } from '@headlessui/react'
import SearchBar from './SearchBar'

// Define interfaces for menu items
interface SubmenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href?: string;
  submenu?: SubmenuItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { t } = useLanguage()

  // Define menu structure
  const menuItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Overview',
      submenu: [
        { name: 'Manifesto', href: '/manifesto' },
        { name: 'Whitepaper', href: '/whitepaper' },
        { name: 'OCF Token', href: '/ocf-token' },
        { name: 'Tokenomics', href: '/tokenomics' },
        { name: 'Roadmap', href: '/roadmap' },
      ]
    },
    {
      name: 'Tools',
      submenu: [
        { name: 'DEX Aggregator', href: '/tools/dex-aggregator' },
        { name: 'Wallet Connect', href: '/tools/wallet-connect' },
        { name: 'Token Analyzer', href: '/tools/token-analyzer' },
        { name: 'Token Investigator', href: '/tools/token-investigator' },
      ]
    },
    {
      name: 'Launch Projects',
      submenu: [
        { name: 'OpenChat', href: '/launch-project/openchat' },
        { name: 'OpenDrive', href: '/launch-project/opendrive' },
        { name: 'ERC20 Launcher', href: '/launch-project/erc20-launcher' },
      ]
    },
    {
      name: 'Resources',
      submenu: [
        { name: 'Guides', href: '/resources/guides' },
        { name: 'DeFi Fundamentals', href: '/resources/defi-fundamentals' },
        { name: 'For Traders', href: '/resources/traders' },
        { name: 'For Developers', href: '/resources/developers' },
      ]
    },
    { name: 'Claim', href: '/claim' },
  ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setOpenSubmenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false)
      setOpenSubmenu(null)
      setSearchOpen(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    if (isOpen) setIsOpen(false)
  }

  return (
    <header className="bg-transparent backdrop-blur-sm border-b border-dark-light/10 sticky top-0 z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center justify-center mr-2 transition-all duration-300 group-hover:shadow-glow">
                <Logo size="md" />
              </div>
              <span className="font-display font-bold text-lg sm:text-xl text-white whitespace-nowrap group-hover:text-gradient">Open Crypto Foundation</span>
            </Link>
          </div>
          
          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Search button */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="p-2 rounded-full text-gray-400 hover:text-white focus:outline-none"
                aria-label={searchOpen ? "Close search" : "Open search"}
              >
                <FaSearch className="text-xl" />
              </button>

              <Transition
                show={searchOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="absolute right-0 top-10 w-screen max-w-md p-4 bg-dark-elevated rounded-xl border border-gray-800 shadow-2xl">
                  <SearchBar onToggle={toggleSearch} />
                </div>
              </Transition>
            </div>

            {/* Main navigation dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaEllipsisV size={24} />}
              </button>

              <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="absolute right-0 top-12 w-64 bg-dark-elevated rounded-xl border border-gray-800 shadow-2xl py-2">
                  {menuItems.map((item) => 
                    !item.submenu ? (
                      <Link 
                        href={item.href} 
                        key={item.name}
                        className={`block px-4 py-2 text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                          router.pathname === item.href ? 'text-primary' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center">
                          {item.name}
                        </span>
                      </Link>
                    ) : (
                      <div key={item.name}>
                        <button
                          className={`flex items-center justify-between w-full px-4 py-2 text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                            (router.pathname.startsWith('/resources') && item.name === t('resources')) || 
                            ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                              router.pathname === '/tokenomics' || router.pathname === '/ocf-token') && 
                              item.name === 'Overview') ||
                            (router.pathname.startsWith('/launch-project') && item.name === 'Launch Projects') ||
                            (router.pathname.startsWith('/tools') && item.name === 'Tools')
                              ? 'text-primary' : ''
                          }`}
                          onClick={() => toggleSubmenu(item.name)}
                        >
                          <span>{item.name}</span>
                          <FaChevronDown 
                            className={`ml-2 h-4 w-4 transition-transform ${
                              openSubmenu === item.name ? 'transform rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <Transition
                          show={openSubmenu === item.name}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0"
                          enterTo="transform opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="transform opacity-100"
                          leaveTo="transform opacity-0"
                        >
                          <div className="pl-4 py-1 bg-dark-card/30">
                            {item.submenu.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block px-4 py-2 text-sm text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                                  router.pathname === child.href || 
                                  (router.pathname === '/launch-project/erc20-launcher' && child.href === '/launch-project/erc20-launcher') ||
                                  (router.pathname === '/launch-project/opendrive' && child.href === '/launch-project/opendrive') ||
                                  (router.pathname === '/launch-project/openchat' && child.href === '/launch-project/openchat')
                                    ? 'text-primary' : ''
                                }`}
                                onClick={() => {
                                  setOpenSubmenu(null)
                                  setIsOpen(false)
                                }}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </Transition>
                      </div>
                    )
                  )}
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 