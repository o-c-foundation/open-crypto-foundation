import React, { useRef, useEffect } from 'react';

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the TradingView widget script
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.type = "text/javascript";
    
    // Set the TradingView widget configuration
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

    // Append the script to the container
    if (container.current) {
      container.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (container.current && script.parentNode) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-[600px]">
      <div 
        ref={container}
        className="tradingview-widget-container__widget w-full h-[calc(100%-32px)]"
      ></div>
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
  );
};

export default TradingViewWidget; 