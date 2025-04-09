import React, { useEffect, useRef } from 'react';

// Define the TradingView types globally
declare global {
  interface Window {
    TradingView: any;
  }
}

const TradingViewChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'COINBASE:SOLUSD',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_widget',
          watchlist: ['BINANCE:SOLUSDT', 'BINANCE:BTCUSDT', 'BINANCE:ETHUSDT'],
          studies: [
            'BB@tv-basicstudies',
            'MACD@tv-basicstudies',
            'RSI@tv-basicstudies'
          ]
        });
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="tradingview_widget" 
      ref={containerRef}
      style={{ 
        height: 'calc(100vh - 200px)', 
        width: '100%',
        borderRadius: '10px',
        overflow: 'hidden' 
      }} 
    />
  );
};

export default TradingViewChart; 