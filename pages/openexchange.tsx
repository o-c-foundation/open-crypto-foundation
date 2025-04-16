import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaExchangeAlt, FaShieldAlt, FaUserSecret, FaCoins, FaQuestion, FaCreditCard, FaRandom, FaGlobe, FaMoneyBillWave } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import TabLayout from '../components/TabLayout'
import ScrollToTop from '../components/ScrollToTop'
import Layout from '../components/Layout'
import { NextPageWithLayout } from '../types/next-page'

const OpenExchangePage: NextPageWithLayout = () => {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('overview')
  
  // Tabs configuration
  const exchangeSections = [
    {
      id: 'overview',
      name: 'Overview',
      icon: <FaExchangeAlt className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <div className="bg-dark-card p-6 rounded-xl border border-dark-light/30 shadow-glow-sm">
            <h3 className="text-2xl font-bold text-gradient mb-4">OpenExchange: Fast, Secure, Anonymous</h3>
            <p className="text-light-muted">
              OpenExchange is our premier cryptocurrency exchange service that provides a secure and anonymous 
              platform for buying, selling, and trading cryptocurrencies. With maximum protection and reliability, 
              OpenExchange ensures that your transactions are safe and efficient.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-dark-light/30 p-4 rounded-lg border border-dark-light/30 flex flex-col items-center text-center">
                <FaShieldAlt className="text-primary mb-3" size={32} />
                <h4 className="text-white font-medium mb-2">Maximum Protection</h4>
                <p className="text-light-muted text-sm">Our exchange is designed with security as the top priority, ensuring all transactions have the highest level of protection.</p>
              </div>
              <div className="bg-dark-light/30 p-4 rounded-lg border border-dark-light/30 flex flex-col items-center text-center">
                <FaExchangeAlt className="text-blue-400 mb-3" size={32} />
                <h4 className="text-white font-medium mb-2">Reliable Exchange</h4>
                <p className="text-light-muted text-sm">We guarantee quality service and reliable operations for all your cryptocurrency exchange needs.</p>
              </div>
              <div className="bg-dark-light/30 p-4 rounded-lg border border-dark-light/30 flex flex-col items-center text-center">
                <FaUserSecret className="text-purple-400 mb-3" size={32} />
                <h4 className="text-white font-medium mb-2">Complete Anonymity</h4>
                <p className="text-light-muted text-sm">Your personal data remains secure with our commitment to providing complete anonymity for all users.</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a 
                href="https://openexchange.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-dark font-bold rounded-lg hover:shadow-glow transition-all duration-300"
              >
                Visit OpenExchange
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      name: 'Features',
      icon: <FaCoins className="text-yellow-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-light-muted">
            OpenExchange offers a comprehensive suite of features designed to make cryptocurrency exchanges 
            seamless, secure, and accessible to everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-dark-light/30 p-5 rounded-lg border border-dark-light/30">
              <div className="flex items-center mb-3">
                <FaCreditCard className="text-green-400 mr-3" size={24} />
                <h4 className="text-white font-medium">Buy & Sell Crypto with Fiat</h4>
              </div>
              <p className="text-light-muted">
                Easily purchase cryptocurrencies using various fiat payment methods or sell your crypto assets for traditional currencies.
              </p>
            </div>
            
            <div className="bg-dark-light/30 p-5 rounded-lg border border-dark-light/30">
              <div className="flex items-center mb-3">
                <FaRandom className="text-blue-400 mr-3" size={24} />
                <h4 className="text-white font-medium">Bridge Between Chains</h4>
              </div>
              <p className="text-light-muted">
                Transfer your assets seamlessly between different blockchain networks with our secure bridge functionality.
              </p>
            </div>
            
            <div className="bg-dark-light/30 p-5 rounded-lg border border-dark-light/30">
              <div className="flex items-center mb-3">
                <FaExchangeAlt className="text-purple-400 mr-3" size={24} />
                <h4 className="text-white font-medium">Swap Any Token</h4>
              </div>
              <p className="text-light-muted">
                Exchange virtually any cryptocurrency token for another with competitive rates and minimal slippage.
              </p>
            </div>
            
            <div className="bg-dark-light/30 p-5 rounded-lg border border-dark-light/30">
              <div className="flex items-center mb-3">
                <FaShieldAlt className="text-red-400 mr-3" size={24} />
                <h4 className="text-white font-medium">Enhanced Security</h4>
              </div>
              <p className="text-light-muted">
                Advanced security measures protect your assets and transactions, including multi-signature wallets and cold storage.
              </p>
            </div>
            
            <div className="bg-dark-light/30 p-5 rounded-lg border border-dark-light/30">
              <div className="flex items-center mb-3">
                <FaMoneyBillWave className="text-yellow-400 mr-3" size={24} />
                <h4 className="text-white font-medium">Fixed Rate Options</h4>
              </div>
              <p className="text-light-muted">
                Lock in your exchange rate before confirming your transaction to avoid price fluctuations during processing.
              </p>
            </div>
            
            <div className="bg-dark-light/30 p-5 rounded-lg border border-dark-light/30">
              <div className="flex items-center mb-3">
                <FaGlobe className="text-teal-400 mr-3" size={24} />
                <h4 className="text-white font-medium">Global Accessibility</h4>
              </div>
              <p className="text-light-muted">
                Access our exchange services from almost anywhere in the world with multiple language support.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      name: 'FAQ',
      icon: <FaQuestion className="text-red-400" size={24} />,
      content: (
        <div className="space-y-6">
          <p className="text-light-muted mb-6">
            Find answers to commonly asked questions about OpenExchange services and features.
          </p>
          
          <div className="bg-dark-card rounded-lg border border-dark-light/30 divide-y divide-dark-light/30">
            <div className="p-5">
              <h4 className="text-white font-medium mb-3">How does OpenExchange ensure transaction security?</h4>
              <p className="text-light-muted">
                OpenExchange employs multiple layers of security, including encryption for all sensitive data, 
                cold storage for funds, regular security audits, and monitoring systems that detect and prevent 
                suspicious activities. We also implement strict KYC and AML procedures where required by regulations.
              </p>
            </div>
            
            <div className="p-5">
              <h4 className="text-white font-medium mb-3">What cryptocurrencies are supported?</h4>
              <p className="text-light-muted">
                OpenExchange supports a wide range of cryptocurrencies across multiple blockchain networks, 
                including but not limited to Bitcoin, Ethereum, BNB, Solana, and many ERC-20 and other tokens. 
                The list of supported cryptocurrencies is constantly expanding.
              </p>
            </div>
            
            <div className="p-5">
              <h4 className="text-white font-medium mb-3">How are exchange rates determined?</h4>
              <p className="text-light-muted">
                Exchange rates are determined by market conditions, liquidity providers, and network fees. 
                For fixed-rate exchanges, we lock in the rate displayed at the time of transaction initiation 
                to protect users from price fluctuations during processing.
              </p>
            </div>
            
            <div className="p-5">
              <h4 className="text-white font-medium mb-3">What payment methods are accepted for fiat transactions?</h4>
              <p className="text-light-muted">
                OpenExchange accepts various payment methods including credit/debit cards, bank transfers, 
                and supported third-party payment processors. Available payment methods may vary depending 
                on your region and the currencies being exchanged.
              </p>
            </div>
            
            <div className="p-5">
              <h4 className="text-white font-medium mb-3">How long do transactions take to complete?</h4>
              <p className="text-light-muted">
                Transaction times vary depending on the cryptocurrencies involved and network conditions. 
                Most cryptocurrency exchanges are processed within minutes, while fiat transactions may take 
                longer due to banking processes. Bridge transactions between chains typically take 10-30 minutes 
                depending on the networks involved.
              </p>
            </div>
            
            <div className="p-5">
              <h4 className="text-white font-medium mb-3">Is there a limit on transaction amounts?</h4>
              <p className="text-light-muted">
                Yes, there are minimum and maximum transaction limits that vary based on the cryptocurrencies 
                being exchanged and the payment methods used. These limits are in place for security reasons 
                and to ensure liquidity. Specific limits are displayed during the transaction process.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]
  
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  return (
    <div className="pb-12 pt-6">
      <Head>
        <title>OpenExchange - Cryptocurrency Exchange | Open Crypto Foundation</title>
        <meta name="description" content="Fast, secure, and anonymous cryptocurrency exchange service by Open Crypto Foundation. Buy, sell, and swap any token with OpenExchange." />
      </Head>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">OpenExchange</h1>
          <p className="text-xl text-light-muted max-w-3xl mx-auto">
            A fast, secure, and anonymous cryptocurrency exchange platform.
          </p>
        </div>
        
        <TabLayout
          tabs={exchangeSections}
          activeTab={activeSection}
          onTabChange={handleSectionChange}
        >
          {/* Display active tab content */}
          {exchangeSections.find(section => section.id === activeSection)?.content}
        </TabLayout>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Exchange?</h3>
          <a 
            href="https://openexchange.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-dark font-bold rounded-lg hover:shadow-glow transition-all duration-300 inline-block"
          >
            Visit OpenExchange
          </a>
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  )
}

OpenExchangePage.getLayout = (page: React.ReactElement) => {
  return (
    <Layout title="OpenExchange - Cryptocurrency Exchange | Open Crypto Foundation">
      {page}
    </Layout>
  )
}

export default OpenExchangePage 