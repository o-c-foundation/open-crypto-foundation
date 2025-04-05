import React, { useState } from 'react'
import Image from 'next/image'

export default function Logo({ className = "", size = "md" }: { className?: string, size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  const [imageError, setImageError] = useState(false);
  
  // Define sizes based on the size prop
  const dimensions = {
    xs: { width: 24, height: 24 },
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
    xl: { width: 64, height: 64 }
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