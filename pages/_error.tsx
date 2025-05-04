import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { NextPageContext } from 'next'

interface ErrorProps {
  statusCode: number | null
}

function Error({ statusCode }: ErrorProps) {
  return (
    <>
      <Head>
        <title>Error | Open Crypto Foundation</title>
      </Head>
      
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-red-500">Error</h1>
        <h2 className="text-2xl font-semibold mb-6 text-white">
          {statusCode 
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'
          }
        </h2>
        
        <p className="max-w-md mb-8 text-gray-400">
          We're sorry for the inconvenience. Please try refreshing the page or return to the homepage.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => window.location.reload()}
            className="block w-full sm:w-auto px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors mr-4"
          >
            Refresh Page
          </button>
          
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

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? null : 404
  return { statusCode }
}

export default Error 