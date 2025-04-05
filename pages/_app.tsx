import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('App mounted');
    
    // Add global error handler
    const originalError = console.error;
    console.error = (...args) => {
      // Log to original console.error
      originalError.apply(console, args);
      
      // Log additional debug info
      console.log('App state at error time:', {
        url: window.location.href,
        userAgent: navigator.userAgent
      });
    };
    
    // Cleanup
    return () => {
      console.error = originalError;
    };
  }, []);
  
  return (
    <ErrorBoundary>
      <Head>
        <title>Open Crypto Foundation</title>
        <meta name="description" content="Empowering safe DeFi interactions with tools and education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ErrorBoundary>
  )
} 