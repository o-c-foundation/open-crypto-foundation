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
        
        {/* Inline script to forcibly remove blue presale banner */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function removeBlueBanner() {
                // Target the blue banner that contains presale text
                var allDivs = document.querySelectorAll('div');
                
                for (var i = 0; i < allDivs.length; i++) {
                  var div = allDivs[i];
                  var style = getComputedStyle(div);
                  var text = div.textContent || '';
                  
                  if (style.backgroundColor.includes('rgb(0, 123, 255)') || 
                      style.backgroundColor.includes('rgb(0, 0, 255)') ||
                      div.className.includes('bg-blue-')) {
                    // If it's blue and has presale text
                    if (text.includes('OCF Token Presale') || 
                        text.includes('Get ready for early access') || 
                        text.includes('50% discount')) {
                      div.style.display = 'none';
                      console.log('Removed blue presale banner');
                    }
                  }
                }
                
                // Try to find Navbar and remove next div if it's blue
                var navbar = document.querySelector('nav');
                if (navbar) {
                  var nextElement = navbar.nextElementSibling;
                  if (nextElement) {
                    var style = getComputedStyle(nextElement);
                    if (style.backgroundColor.includes('rgb(0, 123, 255)') ||
                        style.backgroundColor.includes('rgb(0, 0, 255)') ||
                        nextElement.className.includes('bg-blue-')) {
                      nextElement.style.display = 'none';
                      console.log('Removed banner after navbar');
                    }
                  }
                }
                
                // NEW: Target the exact selector path
                var exactPath = document.querySelector("#__next > div > div > main > div.relative.bg-gradient-to-r.from-primary.to-primary-dark.py-3");
                if (exactPath) {
                  exactPath.style.display = 'none';
                  console.log('Removed banner with exact path selector');
                }
                
                // NEW: Look for gradient backgrounds with presale text
                var gradientDivs = document.querySelectorAll('div[class*="from-primary"]');
                for (var i = 0; i < gradientDivs.length; i++) {
                  var div = gradientDivs[i];
                  var text = div.textContent || '';
                  if (text.includes('OCF Token Presale') || 
                      text.includes('Get ready for early access') || 
                      text.includes('50% discount')) {
                    div.style.display = 'none';
                    console.log('Removed primary gradient banner');
                  }
                }
                
                // NEW: Try to click the close button if it exists
                var closeButton = document.querySelector('button[aria-label="Close banner"]');
                if (closeButton) {
                  closeButton.click();
                  console.log('Clicked close banner button');
                }
              }
              
              // Run on initial load
              document.addEventListener('DOMContentLoaded', removeBlueBanner);
              
              // Also run after a short delay to catch any dynamically added banner
              setTimeout(removeBlueBanner, 500);
              setTimeout(removeBlueBanner, 1000);
              setTimeout(removeBlueBanner, 2000);
              
              // Watch for DOM changes and remove banner if reappears
              var observer = new MutationObserver(function() {
                removeBlueBanner();
              });
              
              // Start observing when DOM is ready
              document.addEventListener('DOMContentLoaded', function() {
                observer.observe(document.body, { 
                  childList: true, 
                  subtree: true 
                });
              });
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