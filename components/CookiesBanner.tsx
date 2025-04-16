import React, { useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';

const CookiesBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user has already seen the banner in this session
    const hasAcceptedCookies = sessionStorage.getItem('cookiesAccepted');
    
    // If they haven't seen it yet, show the banner
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Save to session storage that user has accepted cookies
    sessionStorage.setItem('cookiesAccepted', 'true');
    // Also save to localStorage for longer-term persistence if needed
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Just mark as seen for this session but don't store the longer-term acceptance
    sessionStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-card border-t border-primary/30 shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center">
            <FaCookieBite className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-white">Cookie Consent</h3>
              <p className="text-sm text-gray-300 pr-4 max-w-3xl">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies as described in our 
                <a href="/cookies" className="text-primary hover:text-primary-light ml-1">Cookie Policy</a>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:ml-4">
            <button 
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-white bg-dark-elevated hover:bg-dark-light rounded transition-colors"
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner; 