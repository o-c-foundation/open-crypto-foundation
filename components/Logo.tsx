import React from 'react'
import Image from 'next/image'

export default function Logo({ className = "", size = "md" }: { className?: string, size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  // Define sizes based on the size prop
  const dimensions = {
    xs: { width: 24, height: 24 },
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
    xl: { width: 64, height: 64 }
  }[size];

  return (
    <div className={`relative ${className}`} style={{ width: dimensions.width, height: dimensions.height }}>
      <Image
        src="https://bafkreibvunxo4row3xx7ju3cjgietdvpb7mem4luvclzbkbpz37i3scani.ipfs.w3s.link/"
        alt="Open Crypto Foundation Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
} 