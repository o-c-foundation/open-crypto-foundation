import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaShieldAlt, FaExchangeAlt, FaGlobe, FaChartLine, FaCopy, FaUsers } from 'react-icons/fa'
import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop'
import { NextPageWithLayout } from '../types/next-page'

const OpenExchangePage: NextPageWithLayout = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Open Exchange - Secure Crypto Trading Platform | Open Crypto Foundation</title>
        <meta name="description" content="Trade securely, access top digital assets, and experience lightning-fast transactions on a reliable and scalable crypto exchange platform." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enter the World of Digital Assets
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Open Exchange
            </h2>
            <p className="text-xl text-light-muted mb-8">
              Trade securely, access top digital assets, and experience lightning-fast transactions on a reliable and scalable crypto exchange platform.
            </p>
            <a 
              href="https://trade.openexchnage.site/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-block"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-dark-light/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">About OpenExchange</h2>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <h3 className="text-2xl font-bold text-primary mb-4">Empowering Tomorrow's Finances</h3>
              <h4 className="text-xl font-bold text-white mb-4">Trade Crypto with Confidence</h4>
              <p className="text-light-muted mb-6">
                We're a leading crypto exchange making digital asset trading accessible, secure, and efficient. Enjoy a user-friendly interface, advanced tools, fast transactions, and 24/7 support - all backed by robust security and cold wallet storage.
              </p>
              <div className="flex items-center justify-center bg-primary/10 rounded-lg p-4">
                <span className="text-2xl font-bold text-primary">100+</span>
                <span className="text-light-muted ml-2">Countries served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Safe & Secure</h3>
              <p className="text-light-muted">
                This platform uses a robust defense strategy against potential threats, incorporating measures such as MFA and cold storage.
              </p>
            </div>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaExchangeAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Transaction</h3>
              <p className="text-light-muted">
                Providing traders with a swift and seamless trading experience, we ensure lightning-fast order execution and real-time updates.
              </p>
            </div>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaGlobe className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Supports all Major Cryptos</h3>
              <p className="text-light-muted">
                This platform accommodates a variety of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and a wide array of altcoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-dark-light/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Explore Our Services</h2>
            <p className="text-xl text-light-muted">Available Trading Options</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">OTC DESK</h3>
              <p className="text-light-muted mb-4">
                Large crypto trades with private, personalized, and high-touch services.
              </p>
              <a 
                href="https://trade.openexchnage.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaExchangeAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CONVERT</h3>
              <p className="text-light-muted mb-4">
                Free, instant, and user-friendly cryptocurrency trading with real-time rates.
              </p>
              <a 
                href="https://trade.openexchnage.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaGlobe className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SPOT</h3>
              <p className="text-light-muted mb-4">
                Instant cryptocurrency transactions with deep liquidity and infinite opportunities.
              </p>
              <a 
                href="https://trade.openexchnage.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">FUTURES</h3>
              <p className="text-light-muted mb-4">
                Trade crypto at a predetermined price and on a specified date in the future for a better return.
              </p>
              <a 
                href="https://trade.openexchnage.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaExchangeAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">OPTIONS</h3>
              <p className="text-light-muted mb-4">
                Seize opportunities in market fluctuations without the need to possess the underlying asset.
              </p>
              <a 
                href="https://trade.openexchnage.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaCopy className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">COPY TRADING</h3>
              <p className="text-light-muted mb-4">
                Take advantage of market opportunities by emulating the strategies of successful traders.
              </p>
              <a 
                href="https://trade.openexchnage.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Next-Gen Exchange Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Next-Gen Exchange</h2>
            <h3 className="text-2xl font-bold text-primary mb-6">Open Exchange Built for All Traders</h3>
            <p className="text-xl text-light-muted mb-8">
              We are a next-generation crypto exchange committed to empowering users with secure, fast, and user-friendly digital asset trading. Whether you're a beginner or a pro, our platform provides the tools and support you need to trade with confidence.
            </p>
            <a 
              href="https://trade.openexchnage.site/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-block"
            >
              Join The Revolution
            </a>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}

OpenExchangePage.getLayout = (page: React.ReactElement) => {
  return (
    <Layout 
      title="Open Exchange - Secure Crypto Trading Platform | Open Crypto Foundation"
      description="Trade securely, access top digital assets, and experience lightning-fast transactions on a reliable and scalable crypto exchange platform."
    >
      {page}
    </Layout>
  )
}

export default OpenExchangePage 