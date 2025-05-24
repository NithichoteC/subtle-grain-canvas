
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface FlowingIcon {
  id: number
  type: 'problem' | 'solution'
  iconSrc: string
  x: number
  y: number
  startTime: number
}

interface FlowingIconBackgroundProps {
  className?: string
}

export function FlowingIconBackground({ className = "" }: FlowingIconBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [icons, setIcons] = useState<FlowingIcon[]>([])
  const rafRef = useRef<number | null>(null)
  const lastSpawnTimeRef = useRef(0)

  // Problem icons (left side)
  const problemIcons = [
    '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // ghost
    '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // dollar drain
    '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png'  // hourglass
  ]

  // Solution icons (right side) 
  const solutionIcons = [
    '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // handshake
    '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png', // calendar star
    '/lovable-uploads/4bc8f358-13e0-4525-8ac8-6fdad9dd5d5c.png'  // money bag
  ]

  const createProblemIcon = (): FlowingIcon => ({
    id: Math.random(),
    type: 'problem',
    iconSrc: problemIcons[Math.floor(Math.random() * problemIcons.length)],
    x: -100, // Start off-screen left
    y: Math.random() * (window.innerHeight * 0.6) + (window.innerHeight * 0.2), // Random height in middle 60%
    startTime: Date.now()
  })

  const createSolutionIcon = (): FlowingIcon => ({
    id: Math.random(),
    type: 'solution',
    iconSrc: solutionIcons[Math.floor(Math.random() * solutionIcons.length)],
    x: window.innerWidth - 200, // Start near right grid boundary
    y: Math.random() * (window.innerHeight * 0.6) + (window.innerHeight * 0.2),
    startTime: Date.now()
  })

  useEffect(() => {
    const animate = () => {
      const now = Date.now()
      
      // Spawn new icons every 4-6 seconds
      if (now - lastSpawnTimeRef.current > 4000 + Math.random() * 2000) {
        setIcons(prev => {
          const newIcons = [...prev]
          
          // Add problem icon (left side)
          newIcons.push(createProblemIcon())
          
          // Add solution icon (right side) with slight delay
          setTimeout(() => {
            setIcons(current => [...current, createSolutionIcon()])
          }, 1000)
          
          return newIcons
        })
        lastSpawnTimeRef.current = now
      }

      // Update icon positions and remove old ones
      setIcons(prev => prev
        .map(icon => {
          const elapsed = (now - icon.startTime) / 1000 // seconds
          
          if (icon.type === 'problem') {
            // Move left to right, fade out at grid boundary
            const newX = icon.x + elapsed * 80 // 80px per second
            return { ...icon, x: newX }
          } else {
            // Move right and off screen
            const newX = icon.x + elapsed * 100 // 100px per second
            return { ...icon, x: newX }
          }
        })
        .filter(icon => {
          if (icon.type === 'problem') {
            // Remove when reaching center (grid boundary)
            return icon.x < window.innerWidth * 0.5
          } else {
            // Remove when off-screen right
            return icon.x < window.innerWidth + 200
          }
        })
      )

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Render flowing icons */}
      {icons.map(icon => {
        const opacity = icon.type === 'problem' 
          ? Math.max(0, 1 - (icon.x / (window.innerWidth * 0.5))) // Fade out as approaching center
          : Math.min(1, (icon.x - (window.innerWidth - 200)) / 100) // Fade in from right boundary

        return (
          <motion.div
            key={icon.id}
            className="absolute pointer-events-none"
            style={{
              left: icon.x,
              top: icon.y,
              opacity: opacity,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: opacity }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div 
              className="w-12 h-12 bg-contain bg-no-repeat bg-center filter drop-shadow-lg"
              style={{
                backgroundImage: `url(${icon.iconSrc})`,
                filter: 'drop-shadow(0 0 8px rgba(239, 204, 138, 0.4))', // Bronze glow
              }}
            />
          </motion.div>
        )
      })}

      {/* Left Edge Ambient Glow */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 150px 100% at 0% 50%, #efcc8a, transparent)'
          }}
        />
      </div>

      {/* Right Edge Ambient Glow */}
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 150px 100% at 100% 50%, #efcc8a, transparent)'
          }}
        />
      </div>

      {/* Accent Dots at Strategic Points */}
      <motion.div
        className="absolute left-8 top-1/4 w-2 h-2 rounded-full bg-[#efcc8a]"
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
        className="absolute right-8 top-3/4 w-2 h-2 rounded-full bg-[#efcc8a]"
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
