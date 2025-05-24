
'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface EnergyNode {
  id: number
  x: number
  y: number
  energy: number
  pulsePhase: number
  size: number
  type: 'primary' | 'secondary' | 'accent'
}

interface GeometricEnergyGridProps {
  className?: string
}

export function GeometricEnergyGrid({ className = "" }: GeometricEnergyGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const nodesRef = useRef<EnergyNode[]>([])

  // Initialize energy nodes at strategic positions
  const initializeNodes = useCallback((width: number, height: number) => {
    const nodes: EnergyNode[] = []
    
    // Strategic node placement for visual impact
    const positions = [
      { x: 0.15 * width, y: 0.25 * height, type: 'primary' as const },
      { x: 0.85 * width, y: 0.25 * height, type: 'primary' as const },
      { x: 0.25 * width, y: 0.75 * height, type: 'accent' as const },
      { x: 0.75 * width, y: 0.75 * height, type: 'accent' as const },
      { x: 0.5 * width, y: 0.15 * height, type: 'secondary' as const },
      { x: 0.1 * width, y: 0.6 * height, type: 'secondary' as const },
      { x: 0.9 * width, y: 0.6 * height, type: 'secondary' as const },
    ]
    
    positions.forEach((pos, i) => {
      nodes.push({
        id: i,
        x: pos.x,
        y: pos.y,
        energy: Math.random() * 0.5 + 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        size: pos.type === 'primary' ? 6 : pos.type === 'accent' ? 4 : 3,
        type: pos.type
      })
    })
    
    nodesRef.current = nodes
  }, [])

  // Mouse interaction handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      
      // Energize nearby nodes
      nodesRef.current.forEach(node => {
        const dx = node.x - mouseRef.current.x
        const dy = node.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 200) {
          node.energy = Math.min(1, node.energy + 0.05)
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Canvas resize handler
  useEffect(() => {
    const updateDimensions = () => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      setDimensions({ width: rect.width, height: rect.height })
      
      canvasRef.current.width = rect.width * window.devicePixelRatio
      canvasRef.current.height = rect.height * window.devicePixelRatio
      
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      }
      
      initializeNodes(rect.width, rect.height)
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [initializeNodes])

  // Animation loop
  useEffect(() => {
    const animate = (timestamp: number) => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw geometric grid pattern
      const gridSize = 80
      ctx.strokeStyle = 'rgba(107, 114, 128, 0.08)'
      ctx.lineWidth = 1
      
      // Hexagonal grid pattern
      for (let x = 0; x < dimensions.width + gridSize; x += gridSize) {
        for (let y = 0; y < dimensions.height + gridSize; y += gridSize * 0.866) {
          const offsetX = (Math.floor(y / (gridSize * 0.866)) % 2) * (gridSize / 2)
          const hexX = x + offsetX
          
          if (hexX > -gridSize && hexX < dimensions.width + gridSize) {
            // Draw hexagon outline (very subtle)
            ctx.beginPath()
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3
              const hx = hexX + Math.cos(angle) * (gridSize / 4)
              const hy = y + Math.sin(angle) * (gridSize / 4)
              if (i === 0) ctx.moveTo(hx, hy)
              else ctx.lineTo(hx, hy)
            }
            ctx.closePath()
            ctx.stroke()
          }
        }
      }

      // Draw energy nodes and their effects
      nodesRef.current.forEach(node => {
        // Update node energy and pulse
        node.energy *= 0.995 // Gradual decay
        node.pulsePhase += 0.03
        
        const pulseIntensity = Math.sin(node.pulsePhase) * 0.4 + 0.6
        const nodeOpacity = node.energy * pulseIntensity
        
        // Node colors based on type
        let nodeColor = ''
        let glowColor = ''
        switch (node.type) {
          case 'primary':
            nodeColor = `rgba(239, 204, 138, ${nodeOpacity})`
            glowColor = `rgba(239, 204, 138, ${nodeOpacity * 0.3})`
            break
          case 'accent':
            nodeColor = `rgba(255, 215, 0, ${nodeOpacity})`
            glowColor = `rgba(255, 215, 0, ${nodeOpacity * 0.3})`
            break
          case 'secondary':
            nodeColor = `rgba(156, 163, 175, ${nodeOpacity * 0.8})`
            glowColor = `rgba(156, 163, 175, ${nodeOpacity * 0.2})`
            break
        }
        
        // Draw energy field (subtle glow)
        const glowRadius = node.size * (3 + node.energy * 2)
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        )
        gradient.addColorStop(0, glowColor)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw core node
        ctx.fillStyle = nodeColor
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw energy pulse ring for active nodes
        if (node.energy > 0.7) {
          const ringRadius = node.size + (Math.sin(node.pulsePhase * 2) * 3 + 5)
          ctx.strokeStyle = nodeColor
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      // Draw connecting energy lines between high-energy nodes
      const activeNodes = nodesRef.current.filter(node => node.energy > 0.6)
      for (let i = 0; i < activeNodes.length; i++) {
        for (let j = i + 1; j < activeNodes.length; j++) {
          const nodeA = activeNodes[i]
          const nodeB = activeNodes[j]
          const distance = Math.sqrt(
            (nodeA.x - nodeB.x) ** 2 + (nodeA.y - nodeB.y) ** 2
          )
          
          if (distance < 300) {
            const opacity = ((nodeA.energy + nodeB.energy) / 2) * (1 - distance / 300) * 0.3
            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y)
            gradient.addColorStop(0, `rgba(239, 204, 138, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(255, 215, 0, ${opacity * 1.5})`)
            gradient.addColorStop(1, `rgba(239, 204, 138, ${opacity})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    if (dimensions.width > 0 && dimensions.height > 0) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Canvas for geometric energy grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Strategic accent elements for premium feel */}
      <motion.div
        className="absolute left-12 top-1/3 w-2 h-2 rounded-full bg-[#efcc8a]"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute right-12 top-2/3 w-2 h-2 rounded-full bg-[#ffd700]"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      {/* Subtle scanning line effect */}
      <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
        <motion.div
          className="absolute top-0 h-[1px] w-32 opacity-40"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #efcc8a 50%, transparent 100%)',
          }}
          animate={{
            x: [-128, dimensions.width + 128],
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
