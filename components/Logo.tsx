import React, { useState } from 'react'
import Image from 'next/image'

export default function Logo({ className = "", size = "md" }: { className?: string, size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  const [imageError, setImageError] = useState(false);
  
  // Define sizes based on the size prop - increased to better match text
  const dimensions = {
    xs: { width: 28, height: 28 },
    sm: { width: 36, height: 36 },
    md: { width: 46, height: 46 },
    lg: { width: 56, height: 56 },
    xl: { width: 72, height: 72 }
  }[size];

  const imageUrl = "https://bafkreibvunxo4row3xx7ju3cjgietdvpb7mem4luvclzbkbpz37i3scani.ipfs.w3s.link/";

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