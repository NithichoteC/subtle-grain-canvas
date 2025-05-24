
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
  depth: number
  rotationSpeed: number
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

  // Strategic Y positions for visual hierarchy
  const strategicPositions = [
    window.innerHeight * 0.2,  // Upper third
    window.innerHeight * 0.35, // Upper middle
    window.innerHeight * 0.5,  // Center
    window.innerHeight * 0.65, // Lower middle
    window.innerHeight * 0.8   // Lower third
  ]

  const createProblemIcon = (): FlowingIcon => ({
    id: Math.random(),
    type: 'problem',
    iconSrc: problemIcons[Math.floor(Math.random() * problemIcons.length)],
    x: -200, // Start further off-screen for dramatic entrance
    y: strategicPositions[Math.floor(Math.random() * strategicPositions.length)],
    startTime: Date.now(),
    size: 120 + Math.random() * 60, // 120-180px - MUCH larger
    opacity: 0.85 + Math.random() * 0.15,
    depth: Math.random() * 0.3, // 3D depth effect
    rotationSpeed: 0.5 + Math.random() * 0.5
  })

  const createSolutionIcon = (): FlowingIcon => ({
    id: Math.random(),
    type: 'solution',
    iconSrc: solutionIcons[Math.floor(Math.random() * solutionIcons.length)],
    x: window.innerWidth * 0.7, // Start from strategic right position
    y: strategicPositions[Math.floor(Math.random() * strategicPositions.length)],
    startTime: Date.now(),
    size: 130 + Math.random() * 50, // 130-180px - Premium sized solutions
    opacity: 0.9 + Math.random() * 0.1,
    depth: Math.random() * 0.2,
    rotationSpeed: 0.3 + Math.random() * 0.4
  })

  useEffect(() => {
    const animate = () => {
      const now = Date.now()
      
      // Strategic spawning every 8-12 seconds
      if (now - lastSpawnTimeRef.current > 8000 + Math.random() * 4000) {
        setIcons(prev => {
          const newIcons = [...prev]
          
          // Add problem icon with premium timing
          if (Math.random() > 0.2) { // 80% chance for strategic appearance
            newIcons.push(createProblemIcon())
          }
          
          // Add solution icon with elegant delay
          setTimeout(() => {
            if (Math.random() > 0.3) { // 70% chance for confident solutions
              setIcons(current => [...current, createSolutionIcon()])
            }
          }, 2000 + Math.random() * 2000) // 2-4 second staggered delay
          
          return newIcons
        })
        lastSpawnTimeRef.current = now
      }

      // Elegant movement and sophisticated lifecycle
      setIcons(prev => prev
        .map(icon => {
          const elapsed = (now - icon.startTime) / 1000 // seconds
          
          if (icon.type === 'problem') {
            // Slow, confident movement - 20px per second
            const newX = icon.x + elapsed * 20
            const centerBoundary = window.innerWidth * 0.45
            const fadeStartPoint = window.innerWidth * 0.2
            
            // Elegant fade with sophisticated curve
            let newOpacity = icon.opacity
            if (newX > fadeStartPoint) {
              const fadeProgress = (newX - fadeStartPoint) / (centerBoundary - fadeStartPoint)
              newOpacity = icon.opacity * (1 - Math.pow(fadeProgress, 1.2))
            }
            
            return { 
              ...icon, 
              x: newX, 
              opacity: Math.max(0, newOpacity),
              depth: icon.depth + elapsed * 0.02 // Subtle 3D depth progression
            }
          } else {
            // Solutions move with premium confidence - 25px per second
            const newX = icon.x + elapsed * 25
            return { 
              ...icon, 
              x: newX,
              depth: icon.depth + elapsed * 0.015
            }
          }
        })
        .filter(icon => {
          if (icon.type === 'problem') {
            // Remove when transformed (reached center) or completely faded
            return icon.x < window.innerWidth * 0.45 && icon.opacity > 0.02
          } else {
            // Remove when successfully delivered off-screen
            return icon.x < window.innerWidth + 300
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
      {/* Premium Ambient Zones */}
      
      {/* Problem Zone - Subtle tension */}
      <div className="absolute left-0 top-0 bottom-0 w-96 opacity-12">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 400px 100% at 0% 50%, rgba(220, 38, 38, 0.08), transparent 80%)'
          }}
        />
      </div>

      {/* Transformation Zone - AI processing power */}
      <div 
        className="absolute top-0 bottom-0 w-2 opacity-25"
        style={{ left: '45%' }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-b from-transparent via-[#efcc8a] to-transparent"
          animate={{
            opacity: [0.15, 0.4, 0.15],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Success Zone - Golden prosperity */}
      <div className="absolute right-0 top-0 bottom-0 w-96 opacity-18">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 400px 100% at 100% 50%, rgba(239, 204, 138, 0.15), transparent 80%)'
          }}
        />
      </div>

      {/* Premium 3D Icons with Sophisticated Animation */}
      {icons.map(icon => {
        const rotation = (Date.now() - icon.startTime) / 1000 * icon.rotationSpeed
        
        return (
          <motion.div
            key={icon.id}
            className="absolute pointer-events-none"
            style={{
              left: icon.x,
              top: icon.y,
              opacity: icon.opacity,
              filter: `drop-shadow(0 12px 24px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 20px rgba(239, 204, 138, 0.3))`,
              transform: `perspective(1000px) rotateY(${rotation * 5}deg) rotateX(${Math.sin(rotation) * 3}deg) translateZ(${icon.depth * 50}px)`,
            }}
            initial={{ 
              scale: 0.3, 
              opacity: 0,
              rotateY: icon.type === 'problem' ? -30 : 30,
              y: icon.y + 50
            }}
            animate={{ 
              scale: 1, 
              opacity: icon.opacity,
              rotateY: 0,
              y: [icon.y, icon.y - 15, icon.y], // Elegant floating
            }}
            transition={{ 
              initial: { duration: 1.2, ease: 'easeOut' },
              y: { 
                duration: 4 + Math.random() * 2, 
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
                  ? 'brightness(0.85) saturate(0.9) contrast(1.1)' // Sophisticated problem styling
                  : 'brightness(1.15) saturate(1.3) contrast(1.05)', // Premium solution enhancement
              }}
            />
            
            {/* Premium Halo Effect */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: icon.type === 'problem'
                  ? 'radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(239, 204, 138, 0.25) 0%, transparent 70%)',
                filter: 'blur(12px)',
                transform: 'scale(2)',
              }}
            />

            {/* Elite Glow Ring */}
            <div
              className="absolute inset-0 rounded-full border border-white/10"
              style={{
                transform: 'scale(1.3)',
                background: icon.type === 'solution' 
                  ? 'radial-gradient(circle, transparent 60%, rgba(239, 204, 138, 0.1) 70%, transparent 80%)'
                  : 'none',
              }}
            />
          </motion.div>
        )
      })}

      {/* Strategic Accent Elements for Premium Feel */}
      <motion.div
        className="absolute left-16 top-1/4 w-4 h-4 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, #efcc8a 0%, transparent 70%)',
          filter: 'blur(2px)'
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.6, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute right-16 top-3/4 w-3 h-3 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, #efcc8a 0%, transparent 70%)',
          filter: 'blur(1px)'
        }}
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Premium Energy Flow Lines */}
      <motion.div
        className="absolute bottom-24 h-[2px] w-64 opacity-30"
        style={{
          left: '8%',
          background: 'linear-gradient(90deg, transparent 0%, #efcc8a 50%, transparent 100%)',
          filter: 'blur(1px)',
        }}
        animate={{
          x: [0, window.innerWidth * 0.7],
          opacity: [0, 0.5, 0],
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-20 h-[1px] w-48 opacity-25"
        style={{
          right: '12%',
          background: 'linear-gradient(90deg, transparent 0%, #efcc8a 50%, transparent 100%)',
        }}
        animate={{
          x: [0, -window.innerWidth * 0.6],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
          delay: 7,
        }}
      />
    </div>
  )
}
