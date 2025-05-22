
"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { GradientButton } from "@/components/ui/gradient-button"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "py-5 border-b border-l border-r border-white/10 w-full relative",
        className,
      )}
    >
      {/* Background with texture - matches HeroSectionBackground */}
      <div className="absolute inset-0 bg-dark z-[-1]">
        <div 
          className="absolute inset-0 opacity-[0.12]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>

      <div className="flex items-center justify-between px-4 md:px-6 relative z-10">
        {/* Logo on the left */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-white">
            <img 
              src="/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png"
              alt="Logo"
              className="h-[36px] w-auto my-0" 
            />
          </div>
        </Link>
        
        {/* Navigation items in the center */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            
            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-medium transition-all duration-300",
                  "flex items-center gap-2 px-3 py-1.5 rounded-full",
                  isActive 
                    ? "text-white bg-white/5 border border-white/10" 
                    : "text-white/60 hover:text-white hover:bg-white/5 hover:border hover:border-white/5"
                )}
              >
                <Icon size={16} strokeWidth={2.5} />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center gap-1">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "p-2 rounded-full transition-all",
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-white/60"
                )}
              >
                <Icon 
                  size={18} 
                  strokeWidth={2} 
                  className="transition-colors" 
                />
              </button>
            )
          })}
        </div>
        
        {/* Button on the right */}
        <div>
          <GradientButton className="text-sm px-3 py-2 font-medium text-base">
            <span className="text-white">Schedule</span>
          </GradientButton>
        </div>
      </div>
    </div>
  )
}
