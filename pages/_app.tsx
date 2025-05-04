import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect, useState, ReactElement, ReactNode } from 'react'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import { LanguageProvider } from '../contexts/LanguageContext'
import dynamic from 'next/dynamic'
import type { NextPageWithLayout } from '../types/next-page'

// Define types for pages that have custom layouts
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// Use a completely client-side only app to avoid any SSR
function ClientOnlyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Dynamically import SolanaWalletProvider with SSR disabled to avoid hydration errors
  const SolanaWalletProvider = dynamic(
    () => import('../components/SolanaWalletProvider'),
    { ssr: false }
  );

  // Use the layout defined at the page level, or use the default Layout component
  const getLayout = Component.getLayout || ((page: ReactElement) => (
    <Layout title="Open Crypto Foundation" description="Empowering safe DeFi interactions with tools and education">
      {page}
    </Layout>
  ))

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
    
    // Patch error handling for auth property issues
    window.addEventListener('error', (event) => {
      if (event.error && event.error.toString().includes("Cannot destructure property 'auth'")) {
        console.log("Caught auth destructuring error, attempting to continue...");
        event.preventDefault();
      }
    });
    
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
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>
      <div className="min-h-screen">
        <SolanaWalletProvider>
          <LanguageProvider>
            {getLayout(<Component {...pageProps} />)}
          </LanguageProvider>
        </SolanaWalletProvider>
      </div>
    </ErrorBoundary>
  )
}

// Export a dynamic component with no SSR to ensure the entire app runs only on client side
export default dynamic(() => Promise.resolve(ClientOnlyApp), {
  ssr: false,
}); 