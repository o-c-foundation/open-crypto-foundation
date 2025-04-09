import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

// JavaScript implementation of Heatmap page
function Heatmap() {
  // Add TradingView widget scripts on client side
  useEffect(() => {
    // Make sure we're in the browser
    if (typeof window === 'undefined') return;

    // Create TradingView widget script for Crypto Coins
    const scriptCoins = document.createElement('script');
    scriptCoins.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    scriptCoins.async = true;
    scriptCoins.type = "text/javascript";
    
    // Configure Crypto Coins widget
    scriptCoins.innerHTML = JSON.stringify({
      "dataSource": "Crypto",
      "blockSize": "market_cap_calc",
      "blockColor": "24h_close_change|5",
      "locale": "en",
      "symbolUrl": "https://opencryptofoundation.com/charts",
      "colorTheme": "dark",
      "hasTopBar": true,
      "isDataSetEnabled": true,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "isMonoSize": false,
      "width": "100%",
      "height": "100%"
    });

    // Add script to the container
    const containerCoins = document.getElementById('tradingview_heatmap_coins');
    if (containerCoins) {
      containerCoins.appendChild(scriptCoins);
    }

    // Create TradingView widget script for Crypto Tokens (DeFi)
    const scriptTokens = document.createElement('script');
    scriptTokens.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    scriptTokens.async = true;
    scriptTokens.type = "text/javascript";
    
    // Configure Crypto Tokens widget
    scriptTokens.innerHTML = JSON.stringify({
      "dataSource": "CryptoDeFi",
      "blockSize": "market_cap_calc",
      "blockColor": "24h_close_change|5",
      "locale": "en",
      "symbolUrl": "https://opencryptofoundation.com/charts",
      "colorTheme": "dark",
      "hasTopBar": true,
      "isDataSetEnabled": true,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "isMonoSize": false,
      "width": "100%",
      "height": "100%"
    });

    // Add script to the container
    const containerTokens = document.getElementById('tradingview_heatmap_tokens');
    if (containerTokens) {
      containerTokens.appendChild(scriptTokens);
    }

    // Cleanup on unmount
    return () => {
      if (containerCoins && scriptCoins.parentNode) {
        containerCoins.removeChild(scriptCoins);
      }
      if (containerTokens && scriptTokens.parentNode) {
        containerTokens.removeChild(scriptTokens);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Cryptocurrency Heatmaps</h1>
      <p className="text-lg text-center mb-8">Visualize market performance and trends with interactive heatmaps</p>
      
      {/* Crypto Coins Heatmap */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Crypto Coins Heatmap</h2>
        <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6 shadow-xl mb-4 overflow-hidden">
          <div className="tradingview-widget-container">
            <div id="tradingview_heatmap_coins" className="w-full h-[500px]"></div>
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
      </div>
      
      {/* Crypto Tokens Heatmap */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">DeFi Tokens Heatmap</h2>
        <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6 shadow-xl mb-4 overflow-hidden">
          <div className="tradingview-widget-container">
            <div id="tradingview_heatmap_tokens" className="w-full h-[500px]"></div>
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
      </div>
      
      <div className="text-sm text-light-muted text-center mt-4">
        <p>Heatmaps powered by TradingView. The information provided is for general information purposes only and does not constitute financial advice.</p>
      </div>
    </div>
  );
}

// Plain JavaScript for layout
Heatmap.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Crypto Heatmaps | OFC Foundation"
      description="Cryptocurrency and DeFi token heatmaps powered by TradingView"
      hideTicker={true}
    >
      {page}
    </Layout>
  );
};

export default Heatmap; 