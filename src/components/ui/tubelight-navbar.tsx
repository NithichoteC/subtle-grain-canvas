
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
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-background/10 border border-white/20 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg white-glow">
        {items.map((item, index) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          
          return (
            <React.Fragment key={item.name}>
              {index > 0 && (
                <div className="h-4 w-px bg-white/10" aria-hidden="true" />
              )}
              <Link
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 font-inter",
                  "text-white/60 hover:text-white/90",
                  isActive && "bg-white/10 text-white text-glow",
                )}
              >
                <span className="hidden md:inline text-white">{item.name}</span>
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
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="lamp"
                      className="absolute inset-0 w-full h-full bg-white/10 rounded-full -z-10 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        opacity: { duration: 0.15 }
                      }}
                      style={{
                        willChange: "transform, opacity",
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0)"
                      }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
