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
        
        // Additionally, remove any presale banners that might be injected by other scripts
        const presaleBanners = document.querySelectorAll('.presale-banner, .announcement-banner, [data-banner="presale"]');
        presaleBanners.forEach(banner => {
          banner.remove();
        });
        
        // Specifically look for blue banners with presale text
        const blueBanners = document.querySelectorAll('div[style*="background-color: #"]');
        blueBanners.forEach(banner => {
          if (banner.textContent && banner.textContent.includes('Presale')) {
            banner.remove();
          }
        });
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
      
      // Add a mutation observer to remove any dynamically added presale banners
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1) { // Element node
                const element = node as Element;
                if (element.classList.contains('presale-banner') || 
                    element.classList.contains('announcement-banner') || 
                    element.getAttribute('data-banner') === 'presale') {
                  element.remove();
                }
                
                // Check if it's a blue banner with presale text
                if (element.textContent && element.textContent.includes('Presale')) {
                  const style = window.getComputedStyle(element);
                  if (style.backgroundColor.includes('blue') || style.backgroundColor.includes('rgb(0, 0, 255)')) {
                    element.remove();
                  }
                }
              }
            });
          }
        });
      });
      
      // Start observing the document body for changes
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        cleanupFunc();
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div id="trading-view-ticker-tape" className={`w-full overflow-hidden ${className}`}>
      {/* TradingView widget will be inserted here by the script */}
    </div>
  );
};

export default TradingViewTickerTape; 