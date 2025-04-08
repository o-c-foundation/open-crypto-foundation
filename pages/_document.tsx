import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://bafkreidnf7j4gen5gwgnqxmi3fcprksdmorptbdenb4q76ejbpgbjqkzqq.ipfs.w3s.link/" sizes="any" />
        <link rel="apple-touch-icon" href="https://bafkreidnf7j4gen5gwgnqxmi3fcprksdmorptbdenb4q76ejbpgbjqkzqq.ipfs.w3s.link/" />
        <meta name="theme-color" content="#000000" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        
        {/* Inline script to forcibly remove the blue presale banner */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Function to remove the presale banner
              function removePresaleBanner() {
                // Look for elements that might be the blue presale banner
                var blueBanners = document.querySelectorAll('div[style*="background-color"]');
                blueBanners.forEach(function(banner) {
                  // Check if it's blue and has presale text
                  var style = getComputedStyle(banner);
                  if (style.backgroundColor.includes('blue') || 
                      style.backgroundColor.includes('rgb(0, 0, 255)') || 
                      style.backgroundColor.includes('rgb(0, 123, 255)')) {
                    
                    if (banner.textContent && 
                        (banner.textContent.includes('Presale') || 
                         banner.textContent.includes('discount') || 
                         banner.textContent.includes('Coming Soon'))) {
                      banner.style.display = 'none';
                      console.log('Removed presale banner');
                    }
                  }
                });
                
                // Also try by content
                var allDivs = document.querySelectorAll('div');
                allDivs.forEach(function(div) {
                  if (div.textContent && 
                      (div.textContent.includes('OCF Token Presale Coming Soon') || 
                       div.textContent.includes('Get ready for early access'))) {
                    div.style.display = 'none';
                    console.log('Removed presale banner by content');
                  }
                });
              }
              
              // Run on DOM content loaded
              document.addEventListener('DOMContentLoaded', removePresaleBanner);
              
              // Also run after a short delay to catch dynamically added elements
              setTimeout(removePresaleBanner, 500);
              setTimeout(removePresaleBanner, 1000);
              setTimeout(removePresaleBanner, 2000);
            })();
          `
        }} />
      </Head>
      <body className="bg-dark text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 