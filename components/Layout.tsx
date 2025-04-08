import React, { ReactNode, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useClientSideOnly } from '../hooks/useClientSideOnly'
import TradingViewTickerTape from './TradingViewTickerTape'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  const isClient = useClientSideOnly();
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  
  // Simple layout for server-side rendering to prevent hydration errors
  if (!isClient) {
    return (
      <div className="relative min-h-screen bg-dark text-light flex flex-col">
        <div className="w-full h-16"></div> {/* Navbar placeholder */}
        <main className="flex-grow">
          {children}
        </main>
        <div className="w-full h-16"></div> {/* Footer placeholder */}
      </div>
    )
  }
  
  return (
    <div className="relative min-h-screen bg-dark text-light flex flex-col">
      {title && (
        <Head>
          <title>{title}</title>
          {description && <meta name="description" content={description} />}
        </Head>
      )}

      {/* Background glow effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1/3 h-1/6 rounded-full bg-primary/10 blur-[100px] top-0 left-1/3"></div>
        <div className="absolute w-1/3 h-1/6 rounded-full bg-primary/5 blur-[100px] bottom-0 right-1/3"></div>
      </div>
      
      {/* Global Announcement Banner */}
      {showAnnouncement && (
        <div className="bg-blue-900 text-white py-2 px-4 text-center relative">
          <div className="container mx-auto">
            <span>OCF Token Presale launching in 48 hours! </span>
            <Link href="/presale" className="font-medium underline hover:text-blue-200 inline-flex items-center ml-1">
              Learn more <FaExternalLinkAlt className="ml-1 h-3 w-3" />
            </Link>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Close announcement"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      
      <TradingViewTickerTape />
      
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 