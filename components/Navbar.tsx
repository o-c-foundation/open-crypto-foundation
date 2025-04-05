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
    { 
      name: t('resources'), 
      children: [
        { name: t('forTraders'), href: '/resources/traders', description: 'Resources for crypto traders and DeFi users' },
        { name: t('forDevelopers'), href: '/resources/developers', description: 'Resources for smart contract and DeFi developers' },
        { name: t('defiFundamentals'), href: '/resources/defi-fundamentals', description: 'Learn about cryptocurrency, blockchain technology, and decentralized finance' },
        { name: t('securityGuide'), href: '/resources/security-guide', description: 'Protect your crypto assets with essential security knowledge and best practices' },
        { name: t('walletGuide'), href: '/resources/wallet-guide', description: 'Set up and manage your crypto wallet, networks, tokens, and NFTs' },
        { name: t('forEveryone'), href: '/resources/everyone', description: 'Resources for anyone interested in crypto safety' }
      ]
    },
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
    <header className="bg-black border-b border-gray-800 shadow-md sticky top-0 z-50">
      <div className="container px-4 md:px-0">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-center mr-2">
                <Logo size="md" />
              </div>
              <span className="font-bold text-lg sm:text-xl text-white">Open Crypto Foundation</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => 
              !item.children ? (
                <Link 
                  href={item.href} 
                  key={item.name}
                  className={`text-gray-300 hover:text-white px-3 py-2 ${
                    router.pathname === item.href ? 'font-medium text-white' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <div className="relative" key={item.name}>
                  <button
                    className={`text-gray-300 hover:text-white px-3 py-2 inline-flex items-center ${
                      router.pathname.startsWith(item.name.toLowerCase()) ? 'font-medium text-white' : ''
                    }`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {dropdownOpen === item.name && (
                    <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 hover:bg-gray-700 rounded-lg text-gray-200"
                              onClick={() => setDropdownOpen(null)}
                            >
                              <p className="text-base font-medium text-white">{child.name}</p>
                              {child.description && (
                                <p className="mt-1 text-sm text-gray-400">{child.description}</p>
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
              className="text-gray-300 hover:text-white p-2"
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
        <div className="md:hidden py-4 border-t border-gray-800 bg-black">
          <div className="container px-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => 
                !item.children ? (
                  <Link 
                    href={item.href} 
                    key={item.name}
                    className={`text-gray-300 hover:text-white px-3 py-2 ${
                      router.pathname === item.href ? 'font-medium text-white' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name}>
                    <button
                      className={`text-gray-300 hover:text-white px-3 py-2 inline-flex items-center justify-between w-full ${
                        router.pathname.startsWith(item.name.toLowerCase()) ? 'font-medium text-white' : ''
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {dropdownOpen === item.name && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg"
                            onClick={() => {
                              setDropdownOpen(null)
                              setIsOpen(false)
                            }}
                          >
                            <p className="text-sm font-medium text-white">{child.name}</p>
                            {child.description && (
                              <p className="mt-1 text-xs text-gray-400">{child.description}</p>
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