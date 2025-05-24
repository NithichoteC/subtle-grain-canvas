
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface FlowingIcon {
  id: number
  type: 'problem' | 'solution'
  iconSrc: string
  x: number
  y: number
  targetX: number
  targetY: number
  startTime: number
  size: number
  opacity: number
  depth: number
  rotationSpeed: number
  state: 'entering' | 'floating' | 'transforming' | 'exiting'
  stateChangeTime: number
  floatDirection: { x: number; y: number }
}

interface FlowingIconBackgroundProps {
  className?: string
}

export function FlowingIconBackground({ className = "" }: FlowingIconBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [icons, setIcons] = useState<FlowingIcon[]>([])
  const rafRef = useRef<number | null>(null)
  const lastSpawnTimeRef = useRef(0)

  // Problem icons (representing pain points)
  const problemIcons = [
    '/lovable-uploads/e3afb3fb-3bbf-44d8-b75d-7d1720116183.png', // ghost (ghost leads)
    '/lovable-uploads/64d9e8c8-8465-42bf-844e-071217637a34.png', // dollar drain (money waste)
    '/lovable-uploads/5ffaa893-6c41-4667-a9bc-2413656f22f7.png'  // hourglass (time waste)
  ]

  // Solution icons (representing success outcomes)
  const solutionIcons = [
    '/lovable-uploads/c7f2ebd9-8a2b-4436-b63b-e1bd9acf76c8.png', // handshake (qualified meetings)
    '/lovable-uploads/90c5f4a4-799d-4da3-b8e7-7b1dad997279.png', // calendar star (scheduled appointments)
    '/lovable-uploads/12e0b00f-8648-4108-8a27-13c1db2eb02e.png'  // money bag (revenue)
  ]

  // Premium floating zones for organic movement
  const getRandomFloatZone = (side: 'left' | 'right') => {
    const zones = side === 'left' ? [
      { x: window.innerWidth * 0.05, y: window.innerHeight * 0.25, width: 200, height: 150 },
      { x: window.innerWidth * 0.08, y: window.innerHeight * 0.45, width: 180, height: 120 },
      { x: window.innerWidth * 0.12, y: window.innerHeight * 0.65, width: 220, height: 160 },
    ] : [
      { x: window.innerWidth * 0.75, y: window.innerHeight * 0.2, width: 200, height: 140 },
      { x: window.innerWidth * 0.78, y: window.innerHeight * 0.5, width: 190, height: 130 },
      { x: window.innerWidth * 0.72, y: window.innerHeight * 0.7, width: 210, height: 150 },
    ]
    
    const zone = zones[Math.floor(Math.random() * zones.length)]
    return {
      x: zone.x + Math.random() * zone.width,
      y: zone.y + Math.random() * zone.height
    }
  }

  const createProblemIcon = (): FlowingIcon => {
    const startPos = { x: -250, y: window.innerHeight * (0.2 + Math.random() * 0.6) }
    const floatZone = getRandomFloatZone('left')
    
    return {
      id: Math.random(),
      type: 'problem',
      iconSrc: problemIcons[Math.floor(Math.random() * problemIcons.length)],
      x: startPos.x,
      y: startPos.y,
      targetX: floatZone.x,
      targetY: floatZone.y,
      startTime: Date.now(),
      size: 140 + Math.random() * 80, // 140-220px - Premium size
      opacity: 0.8 + Math.random() * 0.2,
      depth: Math.random() * 0.4,
      rotationSpeed: 0.2 + Math.random() * 0.3,
      state: 'entering',
      stateChangeTime: Date.now(),
      floatDirection: { 
        x: (Math.random() - 0.5) * 0.3, 
        y: (Math.random() - 0.5) * 0.2 
      }
    }
  }

  const createSolutionIcon = (): FlowingIcon => {
    const floatZone = getRandomFloatZone('right')
    
    return {
      id: Math.random(),
      type: 'solution',
      iconSrc: solutionIcons[Math.floor(Math.random() * solutionIcons.length)],
      x: window.innerWidth + 200,
      y: window.innerHeight * (0.15 + Math.random() * 0.7),
      targetX: floatZone.x,
      targetY: floatZone.y,
      startTime: Date.now(),
      size: 150 + Math.random() * 70, // 150-220px - Solution confidence
      opacity: 0.9 + Math.random() * 0.1,
      depth: Math.random() * 0.3,
      rotationSpeed: 0.15 + Math.random() * 0.25,
      state: 'entering',
      stateChangeTime: Date.now(),
      floatDirection: { 
        x: (Math.random() - 0.5) * 0.25, 
        y: (Math.random() - 0.5) * 0.15 
      }
    }
  }

  useEffect(() => {
    const animate = () => {
      const now = Date.now()
      
      // Premium spawn timing - 12-20 seconds between appearances
      if (now - lastSpawnTimeRef.current > 12000 + Math.random() * 8000) {
        setIcons(prev => {
          const newIcons = [...prev]
          
          // Spawn problem icon with 70% chance
          if (Math.random() > 0.3 && newIcons.filter(i => i.type === 'problem').length < 2) {
            newIcons.push(createProblemIcon())
          }
          
          // Delayed solution spawn (3-7 seconds later)
          setTimeout(() => {
            if (Math.random() > 0.25) {
              setIcons(current => {
                const solutionCount = current.filter(i => i.type === 'solution').length
                if (solutionCount < 2) {
                  return [...current, createSolutionIcon()]
                }
                return current
              })
            }
          }, 3000 + Math.random() * 4000)
          
          return newIcons
        })
        lastSpawnTimeRef.current = now
      }

      // Organic state-based movement system
      setIcons(prev => prev
        .map(icon => {
          const elapsed = (now - icon.startTime) / 1000
          const stateElapsed = (now - icon.stateChangeTime) / 1000
          let newIcon = { ...icon }

          // State transitions with organic timing
          switch (icon.state) {
            case 'entering':
              // Smooth approach to floating zone (3-6 seconds)
              const enterProgress = Math.min(stateElapsed / (3 + Math.random() * 3), 1)
              const easeProgress = 1 - Math.pow(1 - enterProgress, 3) // Ease out cubic
              
              newIcon.x = icon.x + (icon.targetX - icon.x) * easeProgress
              newIcon.y = icon.y + (icon.targetY - icon.y) * easeProgress
              
              if (enterProgress >= 0.95) {
                newIcon.state = 'floating'
                newIcon.stateChangeTime = now
              }
              break

            case 'floating':
              // Organic floating motion in zone
              const floatTime = stateElapsed * 0.4
              const floatX = Math.sin(floatTime + icon.id) * 25 * icon.floatDirection.x
              const floatY = Math.cos(floatTime * 0.7 + icon.id) * 15 * icon.floatDirection.y
              
              newIcon.x = icon.targetX + floatX
              newIcon.y = icon.targetY + floatY
              
              // Random state change to transformation (8-15 seconds of floating)
              if (stateElapsed > 8 + Math.random() * 7) {
                if (icon.type === 'problem') {
                  newIcon.state = 'transforming'
                  newIcon.stateChangeTime = now
                } else {
                  newIcon.state = 'exiting'
                  newIcon.stateChangeTime = now
                  // Set new target for exit
                  newIcon.targetX = window.innerWidth + 300
                  newIcon.targetY = newIcon.y + (Math.random() - 0.5) * 100
                }
              }
              break

            case 'transforming':
              // Problem icons fade as they reach center
              const transformProgress = Math.min(stateElapsed / 4, 1)
              const centerX = window.innerWidth * 0.45
              
              newIcon.x = icon.x + (centerX - icon.x) * transformProgress * 0.6
              newIcon.opacity = icon.opacity * (1 - Math.pow(transformProgress, 2))
              
              if (transformProgress >= 0.9 || newIcon.opacity <= 0.1) {
                return null // Remove transformed icons
              }
              break

            case 'exiting':
              // Smooth exit for solution icons
              const exitProgress = Math.min(stateElapsed / 5, 1)
              const exitEase = Math.pow(exitProgress, 2)
              
              newIcon.x = icon.x + (icon.targetX - icon.x) * exitEase
              newIcon.y = icon.y + (icon.targetY - icon.y) * exitEase
              
              if (exitProgress >= 0.95) {
                return null // Remove exited icons
              }
              break
          }

          // Subtle 3D rotation throughout lifecycle
          newIcon.depth = icon.depth + elapsed * 0.01

          return newIcon
        })
        .filter(Boolean) as FlowingIcon[]
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
      {/* Premium Ambient Atmosphere */}
      <div className="absolute left-0 top-0 bottom-0 w-[35%] opacity-8">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 500px 80% at 20% 50%, rgba(220, 38, 38, 0.06), transparent 70%)'
          }}
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[35%] opacity-12">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 500px 80% at 80% 50%, rgba(239, 204, 138, 0.08), transparent 70%)'
          }}
        />
      </div>

      {/* AI Transformation Core */}
      <div 
        className="absolute top-0 bottom-0 w-3 opacity-20"
        style={{ left: '45%' }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-b from-transparent via-[#efcc8a] to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [1, 1.8, 1],
            filter: ['blur(1px)', 'blur(3px)', 'blur(1px)']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Premium 3D Icons with Organic State Flow */}
      {icons.map(icon => {
        const rotation = (Date.now() - icon.startTime) / 1000 * icon.rotationSpeed
        const pulse = Math.sin((Date.now() - icon.startTime) / 2000) * 0.1 + 1
        
        return (
          <motion.div
            key={icon.id}
            className="absolute pointer-events-none"
            style={{
              left: icon.x,
              top: icon.y,
              opacity: icon.opacity,
              filter: `drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 30px rgba(239, 204, 138, 0.2))`,
              transform: `perspective(1200px) rotateY(${rotation * 8}deg) rotateX(${Math.sin(rotation * 0.7) * 4}deg) translateZ(${icon.depth * 60}px)`,
            }}
            initial={{ 
              scale: 0.2, 
              opacity: 0,
              rotateY: icon.type === 'problem' ? -45 : 45,
            }}
            animate={{ 
              scale: pulse,
              opacity: icon.opacity,
              rotateY: rotation * 2,
            }}
            transition={{ 
              scale: { duration: 4, ease: 'easeInOut' },
              opacity: { duration: 2, ease: 'easeOut' },
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
                  ? 'brightness(0.75) saturate(0.8) contrast(1.2) hue-rotate(-5deg)' 
                  : 'brightness(1.25) saturate(1.4) contrast(1.1) hue-rotate(5deg)',
              }}
            />
            
            {/* Premium Aura Effects */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: icon.type === 'problem'
                  ? 'radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 60%)'
                  : 'radial-gradient(circle, rgba(239, 204, 138, 0.15) 0%, transparent 60%)',
                filter: 'blur(20px)',
                transform: 'scale(2.5)',
              }}
            />

            {/* Elite Accent Ring */}
            {icon.type === 'solution' && (
              <motion.div
                className="absolute inset-0 rounded-full border border-[#efcc8a]/20"
                style={{ transform: 'scale(1.4)' }}
                animate={{
                  scale: [1.4, 1.6, 1.4],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </motion.div>
        )
      })}

      {/* Elegant Accent Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${15 + i * 25}%`,
            top: `${30 + i * 20}%`,
            background: 'radial-gradient(circle, #efcc8a 0%, transparent 70%)',
            filter: 'blur(1px)'
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}
