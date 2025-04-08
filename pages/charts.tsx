import React from 'react';
import Layout from '../components/Layout';
import TradingViewWidget from '../components/charts/TradingViewWidget';
import type { NextPage } from 'next';

const Charts: NextPage = () => {
  return (
    <Layout
      title="Crypto Charts | OFC Foundation"
      description="Real-time cryptocurrency charts powered by TradingView"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Cryptocurrency Charts</h1>
        <p className="text-lg text-center mb-8">Monitor real-time price movements and market trends for major cryptocurrencies.</p>
        
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg mb-8">
          <TradingViewWidget />
        </div>
        
        <div className="text-sm text-gray-400 text-center mt-4">
          <p>Charts powered by TradingView. The information provided is for general information purposes only and does not constitute financial advice.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Charts; 