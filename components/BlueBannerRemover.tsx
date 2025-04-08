import React, { useEffect } from 'react';

// This component will directly target and remove the blue presale banner that's shown on every page
const BlueBannerRemover: React.FC = () => {
  useEffect(() => {
    // Function to remove the specific blue banner with the presale text
    const removeBlueBanner = () => {
      // Target all divs that have blue background class
      const allDivs = document.querySelectorAll('div');
      
      allDivs.forEach(div => {
        // Check its text content
        const text = div.textContent || '';
        
        // If it contains the presale text and is blue
        if ((text.includes('OCF Token Presale') || 
             text.includes('Get ready for early access') || 
             text.includes('50% discount')) &&
            (div.className.includes('bg-blue') || 
             div.style.backgroundColor?.includes('blue') ||
             div.style.backgroundColor?.includes('rgb(0, 123, 255)'))) {
          
          console.log('Found and removing blue presale banner:', div);
          div.style.display = 'none';
        }
      });
      
      // Also check specifically for elements with class .bg-blue-500, .bg-blue-600, etc.
      document.querySelectorAll('[class*="bg-blue-"]').forEach(element => {
        const text = element.textContent || '';
        if (text.includes('OCF Token Presale') || text.includes('Get ready for early access') || text.includes('50% discount')) {
          console.log('Found and removing blue class banner:', element);
          (element as HTMLElement).style.display = 'none';
        }
      });
    };
    
    // Run immediately
    removeBlueBanner();
    
    // Also run on DOMContentLoaded to ensure it works after the page fully loads
    document.addEventListener('DOMContentLoaded', removeBlueBanner);
    
    // Set an interval to keep checking for 10 seconds to catch any dynamically added elements
    const intervalId = setInterval(removeBlueBanner, 500);
    setTimeout(() => clearInterval(intervalId), 10000);
    
    // Observe DOM changes to catch dynamically inserted banners
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        removeBlueBanner();
      });
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