import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useClientSideOnly } from '../hooks/useClientSideOnly'
import TradingViewTickerTape from './TradingViewTickerTape'
import Head from 'next/head'
import BlueBannerRemover from './BlueBannerRemover'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  const isClient = useClientSideOnly();
  
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
      {/* Add the BlueBannerRemover component to remove the presale banner */}
      <BlueBannerRemover />
      
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
      
      <Navbar />
      
      {/* TradingView Ticker Tape below navbar */}
      <TradingViewTickerTape />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 