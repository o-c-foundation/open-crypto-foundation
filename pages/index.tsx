import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaShieldAlt, FaBookOpen, FaTools } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Crypto Foundation | Promoting Safe DeFi</title>
        <meta 
          name="description" 
          content="The Open Crypto Foundation is dedicated to promoting safe decentralized finance practices and educating users about blockchain technology." 
        />
      </Head>
      
      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative h-24 w-24 mx-auto mb-8">
              <Image 
                src="https://bafkreibvunxo4row3xx7ju3cjgietdvpb7mem4luvclzbkbpz37i3scani.ipfs.w3s.link/" 
                alt="Open Crypto Foundation Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <h1 className="mb-6 text-5xl font-bold">
              Promoting Safe &amp; Accessible Crypto for Everyone
            </h1>
            <p className="mb-10 text-xl text-gray-300">
              We're dedicated to making decentralized finance safer, more transparent, 
              and accessible through education, tools, and community engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/tools" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                Explore Our Tools <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/manifesto" className="px-6 py-3 bg-transparent border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-900/20 transition-colors">
                Read Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">How We're Making Crypto Safer</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-purple-900/50 text-purple-400 rounded-lg">
                <FaShieldAlt size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Security Tools</h3>
              <p className="mb-4 text-gray-300">
                Our suite of open source tools helps you verify smart contracts, analyze tokens, 
                and identify potential security risks before investing.
              </p>
              <Link href="/tools" className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center">
                Explore Tools <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-purple-900/50 text-purple-400 rounded-lg">
                <FaBookOpen size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Educational Resources</h3>
              <p className="mb-4 text-gray-300">
                From beginner guides to advanced technical documentation, we're building a comprehensive 
                knowledge base for safe crypto practices.
              </p>
              <Link href="/resources/defi-fundamentals" className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center">
                Start Learning <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-purple-900/50 text-purple-400 rounded-lg">
                <FaTools size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Community Guidelines</h3>
              <p className="mb-4 text-gray-300">
                We're establishing open standards and best practices for token launches, 
                protocol development, and responsible DeFi innovation.
              </p>
              <Link href="/manifesto" className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center">
                Read Guidelines <FaArrowRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Join Our Mission</h2>
            <p className="mb-8 text-lg text-gray-300">
              We believe in the transformative potential of decentralized finance, but only if it's 
              built on a foundation of security, education, and user protection. Join us in making 
              crypto safer for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors">
                Learn About the Foundation
              </Link>
              <a 
                href="mailto:contact@opencryptofoundation.org" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 