import React, { useEffect } from 'react';
import Layout from '../components/Layout';

// JavaScript implementation of Charts page
function Charts() {
  // Add TradingView widget script on client side
  useEffect(() => {
    // Make sure we're in the browser
    if (typeof window === 'undefined') return;

    // Create TradingView widget script
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.type = "text/javascript";
    
    // Configure widget
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "COINBASE:SOLUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "backgroundColor": "rgba(0, 0, 0, 1)",
      "gridColor": "rgba(0, 0, 0, 0.06)",
      "withdateranges": true,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "watchlist": [
        "CRYPTO:BTCUSD",
        "COINBASE:ETHUSD",
        "COINBASE:SOLUSD",
        "BITSTAMP:XRPUSD",
        "BINANCEUS:SUIUSD",
        "BINANCEUS:TRUMPUSD",
        "BINANCEUS:DOGEUSD",
        "BINANCEUS:BNBUSD",
        "BINANCEUS:PEPEUSD",
        "BINANCEUS:POLUSD"
      ],
      "details": true,
      "support_host": "https://www.tradingview.com"
    });

    // Add script to the container
    const container = document.getElementById('tradingview_widget');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Cryptocurrency Charts</h1>
      <p className="text-lg text-center mb-8">Monitor real-time price movements and market trends for major cryptocurrencies.</p>
      
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg mb-8">
        <div className="tradingview-widget-container w-full h-[600px]">
          <div id="tradingview_widget" className="w-full h-[calc(100%-32px)]"></div>
          <div className="tradingview-widget-copyright mt-2">
            <a 
              href="https://www.tradingview.com/" 
              rel="noopener nofollow" 
              target="_blank"
            >
              <span className="blue-text">Track all markets on TradingView</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-400 text-center mt-4">
        <p>Charts powered by TradingView. The information provided is for general information purposes only and does not constitute financial advice.</p>
      </div>
    </div>
  );
}

// Plain JavaScript for layout
Charts.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Crypto Charts | OFC Foundation"
      description="Real-time cryptocurrency charts powered by TradingView"
      hideTicker={true}
    >
      {page}
    </Layout>
  );
};

export default Charts; 