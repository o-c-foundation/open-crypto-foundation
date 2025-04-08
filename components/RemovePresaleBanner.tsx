import React, { useEffect } from 'react';

// This component will forcibly remove the blue presale banner from the DOM
const RemovePresaleBanner: React.FC = () => {
  useEffect(() => {
    // Function to remove the banner
    const removeBanner = () => {
      // Target the specific banner based on its content and styling
      const banners = document.querySelectorAll('div');
      banners.forEach(banner => {
        // Check if this is the banner we want to remove
        if (
          (banner.textContent?.includes('OCF Token Presale Coming Soon') || 
           banner.textContent?.includes('Get ready for early access') ||
           banner.textContent?.includes('50% discount')) &&
          (banner.style.backgroundColor === 'rgb(0, 123, 255)' || 
           banner.style.backgroundColor === '#007bff' ||
           banner.classList.contains('bg-blue-500') ||
           banner.classList.contains('bg-blue-600') ||
           banner.classList.contains('bg-blue-700') ||
           banner.classList.contains('bg-blue-800') ||
           banner.classList.contains('bg-blue-900'))
        ) {
          console.log('Removing presale banner:', banner);
          banner.remove();
        }
      });

      // Also try to find it by style (blue background color)
      const blueDivs = document.querySelectorAll('div[style*="background-color"]');
      blueDivs.forEach(div => {
        const computedStyle = window.getComputedStyle(div);
        const bgColor = computedStyle.backgroundColor;
        
        // Check if it's a blue color
        if (
          bgColor.includes('rgb(0, 123, 255)') || 
          bgColor.includes('rgb(0, 0, 255)') || 
          bgColor.includes('rgb(0, 100, 255)') ||
          bgColor.includes('blue')
        ) {
          // Check if it contains presale text
          if (
            div.textContent?.includes('Presale') || 
            div.textContent?.includes('discount') ||
            div.textContent?.includes('Coming Soon')
          ) {
            console.log('Removing blue div with presale text:', div);
            div.remove();
          }
        }
      });
    };

    // Run immediately
    removeBanner();
    
    // Also set up a mutation observer to catch any dynamically added banners
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          // If new nodes are added, check for the banner again
          removeBanner();
        }
      });
    });
    
    // Start observing the document
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default RemovePresaleBanner; 