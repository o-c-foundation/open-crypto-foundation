import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Logo({ className = "", size = "md" }: { className?: string, size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Handle responsive size detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Define sizes based on the size prop - adjusted for mobile if needed
  const getDimensions = () => {
    const baseSize = {
      xs: { width: 28, height: 28 },
      sm: { width: 36, height: 36 },
      md: { width: 46, height: 46 },
      lg: { width: 56, height: 56 },
      xl: { width: 72, height: 72 }
    }[size];
    
    // Scale down slightly on mobile devices
    if (isMobile && size !== 'xs' && size !== 'sm') {
      return {
        width: Math.floor(baseSize.width * 0.85),
        height: Math.floor(baseSize.height * 0.85)
      };
    }
    
    return baseSize;
  };

  const dimensions = getDimensions();
  const imageUrl = "https://bafkreic3dkakjycfdlecqgqrnbmj7ghrwzfkfchqlthypadrudnwnp6npy.ipfs.w3s.link/";

  // If Next.js Image fails, fall back to regular img tag
  if (imageError) {
    return (
      <div className={`${className}`} style={{ width: dimensions.width, height: dimensions.height }}>
        <img
          src={imageUrl}
          alt="Open Crypto Foundation Logo"
          width={dimensions.width}
          height={dimensions.height}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: dimensions.width, height: dimensions.height }}>
      <Image
        src={imageUrl}
        alt="Open Crypto Foundation Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
} 