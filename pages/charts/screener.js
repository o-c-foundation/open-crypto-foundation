import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

// JavaScript implementation of Screener page
function Screener() {
  // Add TradingView widget script on client side
  useEffect(() => {
    // Make sure we're in the browser
    if (typeof window === 'undefined') return;

    // Create TradingView widget script
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.type = "text/javascript";
    
    // Configure widget
    script.innerHTML = JSON.stringify({
      "width": "150%",
      "height": "825",
      "defaultColumn": "moving_averages",
      "defaultScreen": "top_gainers",
      "market": "crypto",
      "showToolbar": true,
      "colorTheme": "dark",
      "locale": "en",
      "isTransparent": true,
      "largeChartUrl": "https://opencryptofoundation.com/charts"
    });

    // Add script to the container
    const container = document.getElementById('tradingview_screener');
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
      <h1 className="text-3xl font-bold mb-6 text-center">Cryptocurrency Screener</h1>
      <p className="text-lg text-center mb-8">Find and filter cryptocurrency assets based on performance, market cap, and technical indicators.</p>
      
      <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6 shadow-xl mb-8 overflow-hidden">
        <div className="tradingview-widget-container">
          <div id="tradingview_screener" className="w-full"></div>
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
      
      <div className="text-sm text-light-muted text-center mt-4">
        <p>Screener powered by TradingView. The information provided is for general information purposes only and does not constitute financial advice.</p>
      </div>
    </div>
  );
}

// Plain JavaScript for layout
Screener.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Crypto Screener | OFC Foundation"
      description="Cryptocurrency screener tool powered by TradingView"
      hideTicker={true}
    >
      {page}
    </Layout>
  );
};

export default Screener; 