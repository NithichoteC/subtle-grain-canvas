
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Magnetic } from "@/components/ui/magnetic"
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
        "py-5 border-b border-l border-r border-white/10 w-full",
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

      <div className="flex items-center justify-center px-4 md:px-6">
        {/* Logo on the left */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-white">
              <img 
                src="/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png"
                alt="Logo"
                className="h-[36px] w-auto my-0" 
              />
            </div>
          </Link>
        </div>
        
        {/* Navigation items in the middle */}
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg border border-white/10">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            
            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-white/80 hover:text-white",
                  isActive && "bg-white/10 text-white",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FFC94D] rounded-t-full">
                      <div className="absolute w-12 h-6 bg-[#FFC94D]/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#FFC94D]/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-[#FFC94D]/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
        
        {/* Button on the right */}
        <div className="flex-1 flex justify-end">
          <Magnetic 
            intensity={0.5} 
            rangeX={80} 
            rangeY={40} 
            actionArea="global"
            shape="elliptical"
          >
            <GradientButton className="text-sm font-semibold py-2 px-3">
              Schedule
            </GradientButton>
          </Magnetic>
        </div>
      </div>
    </div>
  )
}
