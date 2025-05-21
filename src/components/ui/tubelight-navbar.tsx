
"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

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
        "py-6 border-b border-white/10 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {items.map((item, index) => {
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
      </div>
    </div>
  )
}
