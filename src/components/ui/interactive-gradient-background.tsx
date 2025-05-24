
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

interface InteractiveGradientBackgroundProps {
  className?: string
}

export function InteractiveGradientBackground({ className = "" }: InteractiveGradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const rafRef = useRef<number | null>(null)

  // Mouse tracking
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

  // Particle system
  useEffect(() => {
    const createParticle = (x: number, y: number): Particle => ({
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 0,
      maxLife: 60 + Math.random() * 60
    })

    const updateParticles = () => {
      setParticles(prev => {
        const newParticles = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life + 1,
            vx: p.vx * 0.99,
            vy: p.vy * 0.99
          }))
          .filter(p => p.life < p.maxLife)

        // Add new particles near mouse occasionally
        if (Math.random() < 0.1 && newParticles.length < 20) {
          const mouse = mouseRef.current
          newParticles.push(createParticle(
            mouse.x + (Math.random() - 0.5) * 100,
            mouse.y + (Math.random() - 0.5) * 100
          ))
        }

        return newParticles
      })
    }

    const animate = () => {
      updateParticles()
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
      {/* Left Edge Gradient Flow */}
      <div className="absolute left-0 top-0 bottom-0 w-64 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Animated gradient lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`left-${i}`}
              className="absolute left-0 w-[2px] h-32 opacity-30"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, #efcc8a 50%, transparent 100%)',
                left: `${i * 15 + 10}px`,
              }}
              animate={{
                y: [-128, window.innerHeight + 128],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.8,
              }}
            />
          ))}
          
          {/* Subtle glow effect */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse 200px 100% at 0% 50%, #efcc8a, transparent)'
            }}
          />
        </div>
      </div>

      {/* Right Edge Gradient Flow */}
      <div className="absolute right-0 top-0 bottom-0 w-64 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Animated gradient lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`right-${i}`}
              className="absolute right-0 w-[2px] h-32 opacity-30"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, #efcc8a 50%, transparent 100%)',
                right: `${i * 15 + 10}px`,
              }}
              animate={{
                y: [window.innerHeight + 128, -128],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.8,
              }}
            />
          ))}
          
          {/* Subtle glow effect */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse 200px 100% at 100% 50%, #efcc8a, transparent)'
            }}
          />
        </div>
      </div>

      {/* Interactive Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: '#efcc8a',
            left: particle.x,
            top: particle.y,
            opacity: Math.max(0, 1 - particle.life / particle.maxLife) * 0.6,
          }}
          animate={{
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.maxLife / 60,
            ease: 'easeOut',
          }}
        />
      ))}

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

      {/* Bottom flowing accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <motion.div
          className="absolute bottom-0 h-[1px] w-32 opacity-40"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #efcc8a 50%, transparent 100%)',
          }}
          animate={{
            x: [-128, window.innerWidth + 128],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  )
}
