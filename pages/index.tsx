import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaShieldAlt, FaBookOpen, FaTools, FaRegNewspaper, FaRocket } from 'react-icons/fa'
import NewsletterSubscribe from '../components/NewsletterSubscribe'

export default function Home() {
  const [logoError, setLogoError] = useState(false);
  const logoUrl = "https://bafkreiexhzwd7ljjj4xpchedqxajimq7t2k4iubpn44asnlq7nkn2k6qnm.ipfs.w3s.link/";

  return (
    <>
      <Head>
        <title>Open Crypto Foundation | Promoting Safe DeFi</title>
        <meta 
          name="description" 
          content="The newly launched Open Crypto Foundation is dedicated to promoting safe decentralized finance practices and educating users about blockchain technology." 
        />
      </Head>
      
      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative h-48 w-48 mx-auto mb-8">
              {logoError ? (
                <img 
                  src={logoUrl}
                  alt="Open Crypto Foundation Logo" 
                  width={192}
                  height={192}
                  className="max-w-full h-auto"
                />
              ) : (
                <Image 
                  src={logoUrl}
                  alt="Open Crypto Foundation Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                Newly Launched - April 2025
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold">
              Promoting Safe &amp; Accessible Crypto for Everyone
            </h1>
            <p className="mb-10 text-xl text-gray-300">
              Founded just three weeks ago, our mission is to make decentralized finance safer, more transparent, 
              and accessible through education, tools, and community engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/tools" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                Join Our Early Efforts <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/manifesto" className="px-6 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors">
                Read Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">Our Vision for Safer Crypto</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded-lg">
                <FaShieldAlt size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Security Tools</h3>
              <p className="mb-4 text-gray-300">
                We're developing a suite of open source tools to help you verify smart contracts, analyze tokens, 
                and identify potential security risks before investing.
              </p>
              <Link href="/tools" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Follow Our Progress <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded-lg">
                <FaBookOpen size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Educational Resources</h3>
              <p className="mb-4 text-gray-300">
                We're in the early stages of building a comprehensive knowledge base for safe crypto 
                practices, from beginner guides to advanced technical documentation.
              </p>
              <Link href="/resources/defi-fundamentals" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                See Our First Resources <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded-lg">
                <FaRocket size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Growth Roadmap</h3>
              <p className="mb-4 text-gray-300">
                As a new foundation, we have ambitious plans to establish open standards and best practices 
                for token launches, protocol development, and responsible DeFi innovation.
              </p>
              <Link href="/roadmap" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                View Our Roadmap <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-white">Be Part of Our Early Community</h2>
                <p className="text-gray-300 mb-6">
                  Join our newsletter to follow our progress, receive updates on crypto security, 
                  and learn about opportunities to contribute to the Open Crypto Foundation's mission.
                </p>
                <div className="flex items-center mb-2">
                  <FaRegNewspaper className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Development updates</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaRegNewspaper className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Security alerts</span>
                </div>
                <div className="flex items-center">
                  <FaRegNewspaper className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Contribution opportunities</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <NewsletterSubscribe className="md:max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Help Shape Our Foundation</h2>
            <p className="mb-8 text-lg text-gray-300">
              As a newly formed organization, we're looking for passionate individuals and partners to help 
              shape our future. We believe in the transformative potential of decentralized finance, but only if it's 
              built on a foundation of security, education, and user protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors">
                Learn About Our Mission
              </Link>
              <a 
                href="mailto:contact@opencryptofoundation.org" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 