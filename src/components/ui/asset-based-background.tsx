
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface AssetBasedBackgroundProps {
  className?: string
}

export function AssetBasedBackground({ className = "" }: AssetBasedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Mouse tracking for subtle interactions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Trigger visibility after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Left edge problem icons
  const leftAssets = [
    { 
      src: '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // Ghost-Leads Icon
      delay: 0,
      y: '20%',
      size: 'w-16 h-16'
    },
    { 
      src: '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // Dollar-Drain Icon
      delay: 1,
      y: '50%',
      size: 'w-14 h-14'
    },
    { 
      src: '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // Clock/Hourglass Icon
      delay: 2,
      y: '75%',
      size: 'w-12 h-12'
    }
  ]

  // Right edge solution icons
  const rightAssets = [
    { 
      src: '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // Handshake Icon
      delay: 3,
      y: '25%',
      size: 'w-16 h-16'
    },
    { 
      src: '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // Calendar-Star Icon
      delay: 4,
      y: '55%',
      size: 'w-14 h-14'
    },
    { 
      src: '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // Money-Profit Icon
      delay: 5,
      y: '80%',
      size: 'w-12 h-12'
    }
  ]

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Left Edge - Problems flowing in */}
      <div className="absolute left-0 top-0 bottom-0 w-32 overflow-hidden">
        {leftAssets.map((asset, index) => (
          <motion.div
            key={`left-${index}`}
            className={`absolute ${asset.size} opacity-60`}
            style={{
              top: asset.y,
              left: '-20px',
            }}
            initial={{ 
              x: -100, 
              opacity: 0,
              scale: 0.8,
              rotate: -10
            }}
            animate={isVisible ? { 
              x: 60, 
              opacity: 0.7,
              scale: 1,
              rotate: 0
            } : {}}
            transition={{
              duration: 2,
              delay: asset.delay * 0.8,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 6
            }}
          >
            <motion.img
              src={asset.src}
              alt="Problem Asset"
              className="w-full h-full object-contain filter brightness-75 sepia saturate-150 hue-rotate-15"
              whileHover={{ scale: 1.1, brightness: 1.2 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Subtle glow effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-30 blur-lg"
              style={{
                background: 'radial-gradient(circle, #ff6b6b 0%, transparent 70%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Right Edge - Solutions flowing out */}
      <div className="absolute right-0 top-0 bottom-0 w-32 overflow-hidden">
        {rightAssets.map((asset, index) => (
          <motion.div
            key={`right-${index}`}
            className={`absolute ${asset.size} opacity-60`}
            style={{
              top: asset.y,
              right: '-20px',
            }}
            initial={{ 
              x: -60, 
              opacity: 0,
              scale: 0.8,
              rotate: 10
            }}
            animate={isVisible ? { 
              x: 100, 
              opacity: 0.8,
              scale: 1,
              rotate: 0
            } : {}}
            transition={{
              duration: 2,
              delay: asset.delay * 0.8,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 6
            }}
          >
            <motion.img
              src={asset.src}
              alt="Solution Asset"
              className="w-full h-full object-contain filter brightness-110 saturate-125"
              whileHover={{ scale: 1.1, brightness: 1.3 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Success glow effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-40 blur-lg"
              style={{
                background: 'radial-gradient(circle, #efcc8a 0%, transparent 70%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Connecting flow particles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#efcc8a]/40"
            style={{
              top: `${30 + i * 25}%`,
              left: '15%',
            }}
            animate={{
              x: [0, window.innerWidth * 0.7],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.5 + 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Ambient accent dots */}
      <motion.div
        className="absolute left-8 top-1/4 w-2 h-2 rounded-full bg-[#efcc8a]/30"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute right-8 top-3/4 w-2 h-2 rounded-full bg-[#efcc8a]/30"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />
    </div>
  )
}
