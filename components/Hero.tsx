import React from 'react'
import Link from 'next/link'
import SkullLogo from './SkullLogo'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white">
            Crypto Safety <span className="text-purple-500">For Everyone</span>
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Tools and education to help traders and developers navigate DeFi safely and efficiently, minimizing exposure to scams and reducing risks for all participants in the ecosystem.
          </p>
          <p className="text-gray-400 italic">
            Creating a more conscious DeFi space where fewer people hesitate to join the crypto revolution.
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link href="/tools" className="px-6 py-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors">
              Explore Safety Tools
            </Link>
            <Link href="/resources/defi-fundamentals" className="px-6 py-3 text-white bg-gray-700 rounded-md hover:bg-gray-600 transition-colors">
              Learn About DeFi Risks
            </Link>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <SkullLogo size="xl" className="mx-auto transform scale-150" />
        </div>
      </div>
    </section>
  )
} 