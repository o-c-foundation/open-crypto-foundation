import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-dark text-light flex flex-col">
      {/* Background glow effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[120px] opacity-30" />
      </div>
      
      <Navbar />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  )
} 