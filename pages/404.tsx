import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Open Crypto Foundation</title>
      </Head>
      
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-purple-500">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-white">Page Not Found</h2>
        
        <p className="max-w-md mb-8 text-gray-400">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="space-y-2">
          <Link 
            href="/" 
            className="block w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  )
} 