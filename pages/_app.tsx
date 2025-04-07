import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import { LanguageProvider } from '../contexts/LanguageContext'
import dynamic from 'next/dynamic'

// Dynamically import SolanaWalletProvider with SSR disabled
const SolanaWalletProvider = dynamic(
  () => import('../components/SolanaWalletProvider'),
  { ssr: false }
);

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
  
  // Enable responsive viewport behavior
  useEffect(() => {
    // This helps ensure proper responsive behavior on mobile devices
    const viewport = document.querySelector('meta[name=viewport]')
    if (!viewport) {
      const meta = document.createElement('meta')
      meta.name = 'viewport'
      meta.content = 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <ErrorBoundary>
      <Head>
        <title>Open Crypto Foundation</title>
        <meta name="description" content="Empowering safe DeFi interactions with tools and education" />
        <link rel="icon" href="https://bafkreih4hdkhpjoxluzj526ehakmylfg5o2ri4wctumedqc3i5lv35k7ay.ipfs.w3s.link/" />
      </Head>
      <div className="min-h-screen">
        <SolanaWalletProvider>
          <LanguageProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LanguageProvider>
        </SolanaWalletProvider>
      </div>
    </ErrorBoundary>
  )
} 