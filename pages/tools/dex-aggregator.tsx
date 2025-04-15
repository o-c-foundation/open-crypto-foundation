import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { FaChartLine, FaExchangeAlt, FaShieldAlt, FaCoins, FaEthereum, FaSun } from 'react-icons/fa';
import type { NextPageWithLayout } from '../../types/next-page';

// Add TypeScript interfaces for external libraries
declare global {
  interface Window {
    Jupiter?: {
      init: (config: any) => any;
    };
  }
}

const DexAggregator: NextPageWithLayout = () => {
  // Reference to track if Jupiter script is loaded
  const jupiterScriptLoaded = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load Jupiter script if not already loaded
    if (!jupiterScriptLoaded.current) {
      const jupiterScript = document.createElement('script');
      jupiterScript.src = 'https://terminal.jup.ag/v4/terminal.js';
      jupiterScript.async = true;
      jupiterScript.onload = () => {
        jupiterScriptLoaded.current = true;
        
        // Initialize Jupiter with the specified parameters
        if (window.Jupiter) {
          window.Jupiter.init({
            displayMode: "integrated",
            integratedTargetId: "integrated-terminal",
            endpoint: "https://solana-mainnet.core.chainstack.com/ff2a1adced524a99c90cc768cdfb889f",
          });
        }
      };
      document.body.appendChild(jupiterScript);
    }

    // Cleanup function
    return () => {
      const script = document.querySelector('script[src="https://terminal.jup.ag/v4/terminal.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Find the best prices across decentralized exchanges for both EVM chains and Solana with our DEX aggregator." />
      </Head>

      {/* Hero Section */}
      <section className="py-16 md:py-24 animated-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Multi-Chain DEX Aggregator</h1>
            <p className="text-xl text-light-muted mb-8">
              Swap tokens at the best rates across multiple chains. Our DEX aggregator sources liquidity from various DEXes to ensure optimal trading conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Swap Widgets Section */}
      <section className="py-12 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* EVM Widget */}
              <div className="bg-dark-card p-6 rounded-xl border border-dark-light">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <FaEthereum className="text-primary text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">EVM Chains</h3>
                </div>
                <p className="text-light-muted mb-6">
                  Swap tokens across Ethereum, Arbitrum, Optimism, Polygon, BNB Chain, and other EVM-compatible networks.
                </p>
                
                {/* Rango Widget for EVM Chains - Using direct iframe */}
                <div className="h-[600px] rounded-xl overflow-hidden bg-dark-elevated border border-gray-800">
                  <iframe 
                    src="https://widget.rango.exchange/?apiKey=c6381a79-2817-4602-83bf-6a641a409e32&theme=dark"
                    title="Rango Exchange Widget for EVM chains"
                    frameBorder="0"
                    className="w-full h-full"
                    allow="clipboard-write"
                  />
                </div>
              </div>

              {/* Solana Widget */}
              <div className="bg-dark-card p-6 rounded-xl border border-dark-light">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <FaSun className="text-primary text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Solana</h3>
                </div>
                <p className="text-light-muted mb-6">
                  Swap SPL tokens on Solana with the fastest and most efficient DEX aggregator in the ecosystem.
                  <br />
                  <span className="text-xs text-primary mt-2 block">
                    Connected to Chainstack RPC: 27WjGsyL2myFxLukr8SenGPhWU6Wf6W6YeAAtvqRPJCs9UqEU9yg3Zym3fCa2Q4xfR2fMTdmFfewF3ZjC7jUgC5H
                  </span>
                </p>
                
                {/* Jupiter Terminal Widget for Solana - Using integrated mode */}
                <div className="h-[600px] rounded-xl overflow-hidden bg-dark-elevated border border-gray-800">
                  <div id="integrated-terminal" className="w-full h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 animated-gradient-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Using DEX Aggregators</h2>
            <p className="text-light-muted">
              DEX aggregators provide significant advantages for traders and investors in the DeFi ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <FaChartLine className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Prices</h3>
              <p className="text-light-muted">
                Automatically scan multiple DEXes to find the best possible rates for your swaps, maximizing your returns.
              </p>
            </div>

            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <FaExchangeAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Slippage</h3>
              <p className="text-light-muted">
                Smart routing splits orders across multiple liquidity sources to minimize slippage on large trades.
              </p>
            </div>

            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security</h3>
              <p className="text-light-muted">
                Non-custodial swaps where you maintain control of your funds throughout the entire transaction process.
              </p>
            </div>

            <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <FaCoins className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Token Variety</h3>
              <p className="text-light-muted">
                Access to thousands of tokens across multiple blockchains all from a single unified interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding DeFi Tokens Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-card p-8 rounded-xl border border-dark-light/30">
              <h2 className="text-3xl font-bold mb-6">Understanding DeFi Tokens</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">What are DeFi Tokens?</h3>
                <p className="text-light-muted mb-4">
                  DeFi (Decentralized Finance) tokens are digital assets that operate on blockchain technology and enable various financial services without traditional intermediaries. These tokens power applications for lending, borrowing, trading, and earning yield.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Types of DeFi Tokens</h3>
                <ul className="list-disc pl-6 text-light-muted space-y-2">
                  <li><span className="font-medium text-white">Governance Tokens:</span> Allow holders to vote on protocol changes and updates (e.g., UNI, COMP, AAVE)</li>
                  <li><span className="font-medium text-white">Utility Tokens:</span> Provide access to specific platform features and services</li>
                  <li><span className="font-medium text-white">Liquidity Pool Tokens:</span> Represent a share in a liquidity pool on DEXes</li>
                  <li><span className="font-medium text-white">Stablecoins:</span> Maintain stable value by pegging to external assets (e.g., USDC, DAI, USDT)</li>
                  <li><span className="font-medium text-white">Wrapped Tokens:</span> Represent assets from other blockchains (e.g., WETH, WBTC)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Key Considerations When Trading DeFi Tokens</h3>
                <ul className="list-disc pl-6 text-light-muted space-y-2">
                  <li><span className="font-medium text-white">Liquidity:</span> Higher liquidity typically means less slippage and better execution prices</li>
                  <li><span className="font-medium text-white">Market Cap:</span> Consider the token's total market value and circulating supply</li>
                  <li><span className="font-medium text-white">Utility:</span> Understand the token's purpose and use case within its ecosystem</li>
                  <li><span className="font-medium text-white">Security:</span> Research the protocol's security audits and track record</li>
                  <li><span className="font-medium text-white">Tokenomics:</span> Analyze the token's distribution, inflation rate, and economic model</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Define custom layout for the DEX Aggregator page to fix duplicate layout issues
DexAggregator.getLayout = (page) => {
  return (
    <Layout 
      title="DEX Aggregator | Open Crypto Foundation"
      description="Find the best prices across decentralized exchanges for both EVM chains and Solana with our DEX aggregator."
    >
      {page}
    </Layout>
  );
};

export default DexAggregator; 