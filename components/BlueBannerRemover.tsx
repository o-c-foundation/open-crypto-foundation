import React, { useEffect } from 'react';

// This component will directly target and remove the blue presale banner that's shown on every page
const BlueBannerRemover: React.FC = () => {
  useEffect(() => {
    // Function to remove the specific blue banner with the presale text
    const removeBlueBanner = () => {
      // Target using the exact JS path selector provided
      const exactSelector = "#__next > div > div > main > div.relative.bg-gradient-to-r.from-primary.to-primary-dark.py-3";
      const bannerElement = document.querySelector(exactSelector);
      
      if (bannerElement) {
        console.log('Found and removing banner with exact selector:', bannerElement);
        (bannerElement as HTMLElement).style.display = 'none';
      }
      
      // Also target more generally for fallback
      const allDivs = document.querySelectorAll('div');
      
      allDivs.forEach(div => {
        // Check its text content
        const text = div.textContent || '';
        
        // If it contains the presale text and has the gradient styling
        if ((text.includes('OCF Token Presale') || 
             text.includes('Get ready for early access') || 
             text.includes('50% discount')) &&
            (div.className.includes('from-primary') || 
             div.className.includes('bg-gradient-to-r'))) {
          
          console.log('Found and removing presale banner:', div);
          (div as HTMLElement).style.display = 'none';
        }
      });
      
      // Also check for elements with class .bg-blue-* (for backward compatibility)
      document.querySelectorAll('[class*="bg-blue-"]').forEach(element => {
        const text = element.textContent || '';
        if (text.includes('OCF Token Presale') || text.includes('Get ready for early access') || text.includes('50% discount')) {
          console.log('Found and removing blue class banner:', element);
          (element as HTMLElement).style.display = 'none';
        }
      });
      
      // Try to click the close button if present
      const closeButton = document.querySelector('button[aria-label="Close banner"]');
      if (closeButton) {
        console.log('Found close banner button, clicking it');
        (closeButton as HTMLButtonElement).click();
      }
    };
    
    // Run immediately
    removeBlueBanner();
    
    // Also run after DOM is fully loaded
    document.addEventListener('DOMContentLoaded', removeBlueBanner);
    
    // Set an interval to keep checking for dynamically added elements
    const intervalId = setInterval(removeBlueBanner, 500);
    
    // Observe DOM changes to catch dynamically inserted banners
    const observer = new MutationObserver(() => {
      removeBlueBanner();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });
    
    return () => {
      document.removeEventListener('DOMContentLoaded', removeBlueBanner);
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);
  
  return null;
};

export default BlueBannerRemover; 