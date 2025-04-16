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
  FaEllipsisV,
  FaTools,
  FaShieldAlt
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
  const [mainMenuOpen, setMainMenuOpen] = useState(false)
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false)
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const mainDropdownRef = useRef<HTMLDivElement>(null)
  const toolsDropdownRef = useRef<HTMLDivElement>(null)
  const resourcesDropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { t } = useLanguage()

  // Check if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Define menu structure
  const menuItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Overview',
      submenu: [
        { name: 'About', href: '/about' },
        { name: 'Manifesto', href: '/manifesto' },
        { name: 'Whitepaper', href: '/whitepaper' },
        { name: 'OCF Token', href: '/ocf-token' },
        { name: 'Tokenomics', href: '/tokenomics' },
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Services', href: '/services' },
      ]
    },
    {
      name: 'Launch Projects',
      submenu: [
        { name: 'Launch Projects Overview', href: '/launch-project' },
        { name: 'OpenChat', href: '/launch-project/openchat' },
        { name: 'OpenDrive', href: '/launch-project/opendrive' },
        { name: 'ERC20 Launcher', href: '/launch-project/erc20-launcher' },
        { name: 'Solana Launcher', href: '/launch-project/solana-launcher' },
      ]
    },
    { name: 'Claim', href: '/claim' },
    {
      name: 'Legal',
      submenu: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
      ]
    },
  ]

  // Tools dropdown items
  const toolsItems: MenuItem[] = [
    { name: 'Tools Overview', href: '/tools' },
    { name: 'DEX Aggregator', href: '/tools/dex-aggregator' },
    { name: 'Token Analyzer', href: '/tools/token-analyzer' },
    { name: 'Token Investigator', href: '/tools/token-investigator' },
    { name: 'Contract Analyzer', href: '/tools/contract-analyzer' },
    { name: 'Contract Scanner', href: '/tools/contract-scanner' },
  ]

  // Resources dropdown items (combining resources and security)
  const resourcesItems: MenuItem[] = [
    // Resources section
    { name: 'DeFi Fundamentals', href: '/resources/defi-fundamentals' },
    { name: 'For Traders', href: '/resources/traders' },
    { name: 'For Developers', href: '/resources/developers' },
    { name: 'Wallet Guide', href: '/resources/wallet-guide' },
    { name: 'Security Guide', href: '/resources/security-guide' },
    { name: 'Blockchain Repositories', href: '/resources/blockchain-repositories' },
    { name: 'RPC Endpoints', href: '/resources/rpc-endpoints' },
    // Security section
    { name: 'Audit', href: '/audit' },
    { name: 'Scam Database', href: '/scam-database' },
    { name: 'Report Scam', href: '/report-scam' },
    { name: 'Verified Links', href: '/verified-links' },
    { name: 'Wallets & Funds', href: '/wallets-and-funds' },
  ]

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mainDropdownRef.current && !mainDropdownRef.current.contains(event.target as Node)) {
        setMainMenuOpen(false)
      }
      
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target as Node)) {
        setToolsMenuOpen(false)
      }
      
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesMenuOpen(false)
      }
      
      // Reset the submenu regardless of which menu was clicked outside of
      if (
        (mainDropdownRef.current && !mainDropdownRef.current.contains(event.target as Node)) &&
        (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target as Node)) &&
        (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node))
      ) {
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
      setMainMenuOpen(false)
      setToolsMenuOpen(false)
      setResourcesMenuOpen(false)
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
    // Close all menus when search is opened
    if (!searchOpen) {
      setMainMenuOpen(false)
      setToolsMenuOpen(false)
      setResourcesMenuOpen(false)
    }
  }

  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInputValue.trim())}`);
      setSearchInputValue('');
    }
  }

  return (
    <header className="bg-transparent backdrop-blur-sm border-b border-dark-light/10 sticky top-0 z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center justify-center mr-2 transition-all duration-300 group-hover:shadow-glow">
                <Logo size={isMobile ? "sm" : "md"} />
              </div>
              <span className="font-display font-bold text-sm sm:text-lg md:text-xl text-white whitespace-nowrap group-hover:text-gradient">
                {isMobile ? "OCF" : "Open Crypto Foundation"}
              </span>
            </Link>
          </div>
          
          {/* Center area - now has three separate dropdowns */}
          <div className="flex-grow flex justify-center gap-2 sm:gap-4">
            {/* Main Menu dropdown */}
            <div className="relative" ref={mainDropdownRef}>
              <button
                className="flex items-center justify-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-dark-card/40 focus:outline-none transition-all duration-200 border border-gray-700/40"
                onClick={() => {
                  setMainMenuOpen(!mainMenuOpen)
                  setToolsMenuOpen(false)
                  setResourcesMenuOpen(false)
                }}
                aria-label="Toggle navigation menu"
              >
                <span className="mr-1 sm:mr-2 text-xs sm:text-sm font-medium">Menu</span>
                {mainMenuOpen ? <FaTimes size={isMobile ? 14 : 16} /> : <FaChevronDown size={isMobile ? 14 : 16} />}
              </button>

              <Transition
                show={mainMenuOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className={`absolute ${isMobile ? 'w-screen left-1/2 -translate-x-1/2 max-h-[80vh] overflow-y-auto' : 'left-0 w-64'} top-10 bg-dark-elevated rounded-xl border border-gray-800 shadow-2xl py-2`}>
                  {menuItems.map((item) => 
                    !item.submenu ? (
                      <Link 
                        href={item.href} 
                        key={item.name}
                        className={`block px-4 py-2.5 md:py-2 text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                          router.pathname === item.href ? 'text-primary' : ''
                        }`}
                        onClick={() => setMainMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          {item.name}
                        </span>
                      </Link>
                    ) : (
                      <div key={item.name}>
                        <button
                          className={`flex items-center justify-between w-full px-4 py-2.5 md:py-2 text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                            ((router.pathname === '/whitepaper' || router.pathname === '/roadmap' || 
                              router.pathname === '/tokenomics' || router.pathname === '/ocf-token') && 
                              item.name === 'Overview') ||
                            (router.pathname.startsWith('/launch-project') && item.name === 'Launch Projects')
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
                                className={`block px-4 py-2.5 md:py-2 text-sm text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                                  router.pathname === child.href || 
                                  (router.pathname === '/launch-project/erc20-launcher' && child.href === '/launch-project/erc20-launcher') ||
                                  (router.pathname === '/launch-project/opendrive' && child.href === '/launch-project/opendrive') ||
                                  (router.pathname === '/launch-project/openchat' && child.href === '/launch-project/openchat')
                                    ? 'text-primary' : ''
                                }`}
                                onClick={() => {
                                  setOpenSubmenu(null)
                                  setMainMenuOpen(false)
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

            {/* Tools dropdown */}
            <div className="relative" ref={toolsDropdownRef}>
              <button
                className="flex items-center justify-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-dark-card/40 focus:outline-none transition-all duration-200 border border-gray-700/40"
                onClick={() => {
                  setToolsMenuOpen(!toolsMenuOpen)
                  setMainMenuOpen(false)
                  setResourcesMenuOpen(false)
                }}
                aria-label="Toggle tools menu"
              >
                <FaTools className="mr-1" size={isMobile ? 12 : 14} />
                <span className="mr-1 sm:mr-2 text-xs sm:text-sm font-medium">Tools</span>
                <FaChevronDown size={isMobile ? 12 : 14} />
              </button>

              <Transition
                show={toolsMenuOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className={`absolute ${isMobile ? 'w-screen left-1/2 -translate-x-1/2 max-h-[80vh] overflow-y-auto' : 'left-0 w-56'} top-10 bg-dark-elevated rounded-xl border border-gray-800 shadow-2xl py-2`}>
                  {toolsItems.map((item) => (
                    <Link 
                      href={item.href} 
                      key={item.name}
                      className={`block px-4 py-2.5 md:py-2 text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                        router.pathname === item.href ? 'text-primary' : ''
                      }`}
                      onClick={() => setToolsMenuOpen(false)}
                    >
                      <span className="flex items-center">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </Transition>
            </div>

            {/* Resources dropdown */}
            <div className="relative" ref={resourcesDropdownRef}>
              <button
                className="flex items-center justify-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-dark-card/40 focus:outline-none transition-all duration-200 border border-gray-700/40"
                onClick={() => {
                  setResourcesMenuOpen(!resourcesMenuOpen)
                  setMainMenuOpen(false)
                  setToolsMenuOpen(false)
                }}
                aria-label="Toggle resources menu"
              >
                <FaBook className="mr-1" size={isMobile ? 12 : 14} />
                <span className="mr-1 sm:mr-2 text-xs sm:text-sm font-medium">Resources</span>
                <FaChevronDown size={isMobile ? 12 : 14} />
              </button>

              <Transition
                show={resourcesMenuOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className={`absolute ${isMobile ? 'w-screen right-1/2 translate-x-1/2 max-h-[80vh] overflow-y-auto' : 'right-0 w-56'} top-10 bg-dark-elevated rounded-xl border border-gray-800 shadow-2xl py-2`}>
                  {resourcesItems.map((item) => (
                    <Link 
                      href={item.href} 
                      key={item.name}
                      className={`block px-4 py-2.5 md:py-2 text-light-muted hover:text-light hover:bg-dark-card/50 transition-all duration-200 ${
                        router.pathname === item.href ? 'text-primary' : ''
                      }`}
                      onClick={() => setResourcesMenuOpen(false)}
                    >
                      <span className="flex items-center">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </Transition>
            </div>
          </div>
          
          {/* Right side - Always visible Search */}
          <div className="flex items-center">
            <div className="relative hidden md:block -ml-[200px]">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchInputValue}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    className="bg-dark-card/60 border border-gray-700/50 rounded-lg pl-8 pr-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 w-[330px] h-[36px] transition-all duration-300 ease-in-out"
                  />
                  <FaSearch className="absolute left-2.5 text-gray-400 text-sm" />
                </div>
              </form>
            </div>
            
            {/* Mobile search button */}
            <div className="md:hidden relative">
              <button
                onClick={toggleSearch}
                className="p-1.5 sm:p-2 rounded-full text-gray-400 hover:text-white focus:outline-none"
                aria-label={searchOpen ? "Close search" : "Open search"}
              >
                <FaSearch className="text-lg sm:text-xl" />
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
                <div className="absolute right-0 top-10 w-screen max-w-xs p-3 sm:p-4 bg-dark-elevated rounded-xl border border-gray-800 shadow-2xl">
                  <SearchBar onToggle={toggleSearch} />
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 