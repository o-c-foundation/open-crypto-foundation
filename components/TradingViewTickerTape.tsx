import React, { useEffect } from 'react';

interface TradingViewTickerTapeProps {
  className?: string;
}

declare global {
  interface Window {
    TradingView?: any;
  }
}

const TradingViewTickerTape: React.FC<TradingViewTickerTapeProps> = ({ className = '' }) => {
  useEffect(() => {
    // Only execute in client-side environment
    if (typeof window !== 'undefined') {
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.type = 'text/javascript';
      
      // Add configuration as a JSON string inside the script
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            description: "Solana",
            proName: "BINANCE:SOLUSDT"
          },
          {
            description: "Bitcoin",
            proName: "BINANCE:BTCUSDT"
          },
          {
            description: "Ethereum",
            proName: "BINANCE:ETHUSDT"
          },
          {
            description: "XRP",
            proName: "BINANCE:XRPUSDT"
          },
          {
            description: "DOGE",
            proName: "BINANCE:DOGEUSDT"
          },
          {
            description: "BNB",
            proName: "BINANCE:BNBUSDT"
          },
          {
            description: "PEPE",
            proName: "BINANCE:PEPEUSDT"
          }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "adaptive",
        colorTheme: "dark",
        locale: "en"
      });

      // Cleanup
      const cleanupFunc = () => {
        const tickerTapeContainer = document.querySelector('.tradingview-widget-container');
        const existingScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"]');
        
        if (tickerTapeContainer) {
          tickerTapeContainer.remove();
        }
        
        if (existingScript) {
          existingScript.remove();
        }
      };

      // Clean up any existing widgets first
      cleanupFunc();

      // Add the widget container and script
      const widgetContainer = document.querySelector('#trading-view-ticker-tape');
      if (widgetContainer) {
        const container = document.createElement('div');
        container.className = 'tradingview-widget-container';
        
        const widget = document.createElement('div');
        widget.className = 'tradingview-widget-container__widget';
        container.appendChild(widget);
        
        const copyright = document.createElement('div');
        copyright.className = 'tradingview-widget-copyright';
        copyright.style.display = 'none'; // Hide the copyright
        container.appendChild(copyright);
        
        widgetContainer.appendChild(container);
        widgetContainer.appendChild(script);
      }

      return cleanupFunc;
    }
  }, []);

  return (
    <div id="trading-view-ticker-tape" className={`w-full overflow-hidden ${className}`}>
      {/* TradingView widget will be inserted here by the script */}
    </div>
  );
};

export default TradingViewTickerTape; 