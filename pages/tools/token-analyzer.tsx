import React from 'react'
import Head from 'next/head'
import TokenAnalyzer from '../../components/TokenAnalyzer'

export default function TokenAnalyzerPage() {
  return (
    <>
      <Head>
        <title>Token Analyzer | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Analyze token distribution, holder concentrations, liquidity, and other key metrics to assess cryptocurrency token risks." 
        />
      </Head>
      
      <section className="pt-10 pb-12 bg-dark text-white border-b border-dark-light/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold">Token Analyzer</h1>
            <p className="text-xl text-gray-300">
              Evaluate token distribution, ownership concentration, and key risk factors
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-dark">
        <div className="container px-4 mx-auto">
          <TokenAnalyzer />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
              <h2 className="text-xl font-bold mb-4 text-white">Understanding Token Distribution</h2>
              <p className="text-gray-300 mb-4">
                The distribution of tokens is one of the most important factors to consider when evaluating 
                a cryptocurrency project. Here's why distribution matters:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                <li>
                  <strong className="text-white">Centralization Risk:</strong> When a large percentage of tokens is held by 
                  a small number of wallets, those holders have disproportionate control over the market price.
                </li>
                <li>
                  <strong className="text-white">Liquidity Risk:</strong> Low liquidity relative to market cap can make it 
                  difficult to exit positions without significant slippage.
                </li>
                <li>
                  <strong className="text-white">Unlock Events:</strong> Team tokens that unlock at scheduled intervals can 
                  create significant selling pressure.
                </li>
                <li>
                  <strong className="text-white">Wallet Behavior:</strong> How early holders behave can indicate whether a 
                  project is legitimate or potentially manipulated.
                </li>
              </ul>
              
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-primary-light mb-2">Pro Tip</h3>
                <p className="text-gray-300">
                  Always check the token distribution along with the project's fundamentals. Even projects 
                  with strong technology can be risky investments if the token distribution is heavily concentrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 