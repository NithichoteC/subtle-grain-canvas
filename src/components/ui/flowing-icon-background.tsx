
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
  size: number
  opacity: number
}

interface FlowingIconBackgroundProps {
  className?: string
}

export function FlowingIconBackground({ className = "" }: FlowingIconBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [icons, setIcons] = useState<FlowingIcon[]>([])
  const rafRef = useRef<number | null>(null)
  const lastSpawnTimeRef = useRef(0)

  // Problem icons (left side) - representing pain points
  const problemIcons = [
    '/lovable-uploads/e3afb3fb-3bbf-44d8-b75d-7d1720116183.png', // ghost (ghost leads)
    '/lovable-uploads/64d9e8c8-8465-42bf-844e-071217637a34.png', // dollar drain (money waste)
    '/lovable-uploads/5ffaa893-6c41-4667-a9bc-2413656f22f7.png'  // hourglass (time waste)
  ]

  // Solution icons (right side) - representing success outcomes
  const solutionIcons = [
    '/lovable-uploads/c7f2ebd9-8a2b-4436-b63b-e1bd9acf76c8.png', // handshake (qualified meetings)
    '/lovable-uploads/90c5f4a4-799d-4da3-b8e7-7b1dad997279.png', // calendar star (scheduled appointments)
    '/lovable-uploads/12e0b00f-8648-4108-8a27-13c1db2eb02e.png'  // money bag (revenue)
  ]

  const createProblemIcon = (): FlowingIcon => ({
    id: Math.random(),
    type: 'problem',
    iconSrc: problemIcons[Math.floor(Math.random() * problemIcons.length)],
    x: -120, // Start off-screen left
    y: Math.random() * (window.innerHeight * 0.5) + (window.innerHeight * 0.25), // Random height in middle 50%
    startTime: Date.now(),
    size: 48 + Math.random() * 16, // 48-64px
    opacity: 0.8 + Math.random() * 0.2
  })

  const createSolutionIcon = (): FlowingIcon => ({
    id: Math.random(),
    type: 'solution',
    iconSrc: solutionIcons[Math.floor(Math.random() * solutionIcons.length)],
    x: window.innerWidth * 0.75, // Start near right boundary
    y: Math.random() * (window.innerHeight * 0.5) + (window.innerHeight * 0.25),
    startTime: Date.now(),
    size: 52 + Math.random() * 16, // 52-68px - slightly larger for success
    opacity: 0.9 + Math.random() * 0.1
  })

  useEffect(() => {
    const animate = () => {
      const now = Date.now()
      
      // Spawn new icons every 3-5 seconds with staggered timing
      if (now - lastSpawnTimeRef.current > 3000 + Math.random() * 2000) {
        setIcons(prev => {
          const newIcons = [...prev]
          
          // Add problem icon (left side)
          if (Math.random() > 0.3) { // 70% chance
            newIcons.push(createProblemIcon())
          }
          
          // Add solution icon (right side) with slight delay
          setTimeout(() => {
            if (Math.random() > 0.4) { // 60% chance
              setIcons(current => [...current, createSolutionIcon()])
            }
          }, 800 + Math.random() * 1200)
          
          return newIcons
        })
        lastSpawnTimeRef.current = now
      }

      // Update icon positions and remove old ones
      setIcons(prev => prev
        .map(icon => {
          const elapsed = (now - icon.startTime) / 1000 // seconds
          
          if (icon.type === 'problem') {
            // Move left to right, fade out as approaching center
            const newX = icon.x + elapsed * 65 // 65px per second
            const centerBoundary = window.innerWidth * 0.45
            const fadeStartPoint = window.innerWidth * 0.25
            
            let newOpacity = icon.opacity
            if (newX > fadeStartPoint) {
              const fadeProgress = (newX - fadeStartPoint) / (centerBoundary - fadeStartPoint)
              newOpacity = icon.opacity * (1 - Math.pow(fadeProgress, 0.8))
            }
            
            return { ...icon, x: newX, opacity: Math.max(0, newOpacity) }
          } else {
            // Move right and off screen with confidence
            const newX = icon.x + elapsed * 80 // 80px per second
            return { ...icon, x: newX }
          }
        })
        .filter(icon => {
          if (icon.type === 'problem') {
            // Remove when reaching center or faded out
            return icon.x < window.innerWidth * 0.45 && icon.opacity > 0.05
          } else {
            // Remove when off-screen right
            return icon.x < window.innerWidth + 150
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
      style={{ zIndex: 10 }}
    >
      {/* Premium Ambient Background Effects */}
      
      {/* Left Edge Problem Zone - Subtle Red Undertones */}
      <div className="absolute left-0 top-0 bottom-0 w-80 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 300px 100% at 0% 50%, rgba(239, 68, 68, 0.1), transparent 70%)'
          }}
        />
      </div>

      {/* Right Edge Success Zone - Golden Prosperity */}
      <div className="absolute right-0 top-0 bottom-0 w-80 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 300px 100% at 100% 50%, rgba(239, 204, 138, 0.2), transparent 70%)'
          }}
        />
      </div>

      {/* Center Processing Zone Indicator - Subtle Pulse */}
      <div 
        className="absolute top-0 bottom-0 w-1 opacity-20"
        style={{ left: '45%' }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-b from-transparent via-[#efcc8a] to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Flowing 3D Icons */}
      {icons.map(icon => (
        <motion.div
          key={icon.id}
          className="absolute pointer-events-none"
          style={{
            left: icon.x,
            top: icon.y,
            opacity: icon.opacity,
            filter: `drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 12px rgba(239, 204, 138, 0.2))`,
          }}
          initial={{ 
            scale: 0.6, 
            opacity: 0,
            rotateY: icon.type === 'problem' ? -15 : 15
          }}
          animate={{ 
            scale: 1, 
            opacity: icon.opacity,
            rotateY: 0,
            y: [0, -8, 0] // Gentle floating
          }}
          transition={{ 
            initial: { duration: 0.8, ease: 'easeOut' },
            y: { 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }
          }}
        >
          <img
            src={icon.iconSrc}
            alt=""
            className="w-auto h-auto object-contain"
            style={{
              width: `${icon.size}px`,
              height: `${icon.size}px`,
              filter: icon.type === 'problem' 
                ? 'brightness(0.9) saturate(0.8)' // Slightly dimmed problems
                : 'brightness(1.1) saturate(1.2)', // Enhanced solutions
            }}
          />
          
          {/* Premium Glow Effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: icon.type === 'problem'
                ? 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(239, 204, 138, 0.2) 0%, transparent 70%)',
              filter: 'blur(8px)',
              transform: 'scale(1.5)',
            }}
          />
        </motion.div>
      ))}

      {/* Strategic Accent Elements */}
      <motion.div
        className="absolute left-12 top-1/3 w-3 h-3 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, #efcc8a 0%, transparent 70%)',
          filter: 'blur(1px)'
        }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute right-12 top-2/3 w-2 h-2 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, #efcc8a 0%, transparent 70%)',
          filter: 'blur(1px)'
        }}
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.6, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      />

      {/* Flowing Energy Lines */}
      <motion.div
        className="absolute bottom-20 h-[1px] w-40 opacity-25"
        style={{
          left: '10%',
          background: 'linear-gradient(90deg, transparent 0%, #efcc8a 50%, transparent 100%)',
        }}
        animate={{
          x: [0, window.innerWidth * 0.8],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
