
"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
        "py-4 border-b border-l border-r border-white/10 w-full relative",
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
          <div className="text-white text-glow">
            <img 
              src="/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png"
              alt="Logo"
              className="h-[36px] w-auto my-0" 
            />
          </div>
        </Link>
        
        {/* Navigation items in the center */}
        <div className="flex items-center gap-6">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            
            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold transition-all duration-300 font-inter",
                  "text-white/60 hover:text-white",
                  isActive && "text-white"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon 
                    size={18} 
                    strokeWidth={2.5} 
                    className={cn(
                      "transition-colors",
                      isActive ? "stroke-white" : "stroke-white/60 hover:stroke-white/90"
                    )} 
                  />
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
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
