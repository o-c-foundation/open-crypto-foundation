import { useState, useEffect } from 'react';

/**
 * A hook that returns true when running on the client side
 * Use this to prevent hydration errors and SSR issues with browser-only code
 */
export function useClientSideOnly() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
} 