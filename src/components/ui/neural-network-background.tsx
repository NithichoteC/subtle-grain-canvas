'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
  activity: number
  pulsePhase: number
  size: number
}

interface Connection {
  from: number
  to: number
  activity: number
  distance: number
}

interface NeuralNetworkBackgroundProps {
  className?: string
}

export function NeuralNetworkBackground({ className = "" }: NeuralNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const nodesRef = useRef<Node[]>([])
  const connectionsRef = useRef<Connection[]>([])

  // Initialize nodes with strategic positioning
  const initializeNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = []
    const nodeCount = Math.min(25, Math.floor((width * height) / 15000)) // Responsive node count
    
    for (let i = 0; i < nodeCount; i++) {
      const node: Node = {
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
        activity: Math.random(),
        pulsePhase: Math.random() * Math.PI * 2,
        size: 2 + Math.random() * 3
      }
      nodes.push(node)
    }
    
    nodesRef.current = nodes
    calculateConnections()
  }, [])

  // Calculate connections between nearby nodes
  const calculateConnections = useCallback(() => {
    const connections: Connection[] = []
    const maxDistance = 120
    
    nodesRef.current.forEach((nodeA, i) => {
      nodesRef.current.forEach((nodeB, j) => {
        if (i < j) {
          const dx = nodeA.x - nodeB.x
          const dy = nodeA.y - nodeB.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            connections.push({
              from: i,
              to: j,
              activity: Math.random(),
              distance
            })
            nodeA.connections.push(j)
            nodeB.connections.push(i)
          }
        }
      })
    })
    
    connectionsRef.current = connections
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
      
      // Activate nearby nodes
      nodesRef.current.forEach(node => {
        const dx = node.x - mouseRef.current.x
        const dy = node.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          node.activity = Math.min(1, node.activity + 0.1)
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

      // Update and draw connections
      connectionsRef.current.forEach(connection => {
        const nodeA = nodesRef.current[connection.from]
        const nodeB = nodesRef.current[connection.to]
        
        // Update connection activity
        connection.activity += (Math.random() - 0.5) * 0.02
        connection.activity = Math.max(0, Math.min(1, connection.activity))
        
        // Draw connection line
        const opacity = connection.activity * 0.6
        const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y)
        gradient.addColorStop(0, `rgba(239, 204, 138, ${opacity * 0.8})`)
        gradient.addColorStop(0.5, `rgba(255, 215, 0, ${opacity})`)
        gradient.addColorStop(1, `rgba(239, 204, 138, ${opacity * 0.8})`)
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1 + connection.activity
        ctx.beginPath()
        ctx.moveTo(nodeA.x, nodeA.y)
        ctx.lineTo(nodeB.x, nodeB.y)
        ctx.stroke()
        
        // Draw data packets along active connections
        if (connection.activity > 0.7) {
          const progress = (timestamp * 0.001) % 1
          const packetX = nodeA.x + (nodeB.x - nodeA.x) * progress
          const packetY = nodeA.y + (nodeB.y - nodeA.y) * progress
          
          ctx.fillStyle = `rgba(255, 215, 0, ${connection.activity})`
          ctx.beginPath()
          ctx.arc(packetX, packetY, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Update and draw nodes
      nodesRef.current.forEach(node => {
        // Update node position
        node.x += node.vx
        node.y += node.vy
        
        // Boundary collision
        if (node.x < 0 || node.x > dimensions.width) node.vx *= -1
        if (node.y < 0 || node.y > dimensions.height) node.vy *= -1
        
        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(dimensions.width, node.x))
        node.y = Math.max(0, Math.min(dimensions.height, node.y))
        
        // Update activity and pulse
        node.activity *= 0.99 // Gradual decay
        node.pulsePhase += 0.05
        
        // Draw node
        const pulseIntensity = Math.sin(node.pulsePhase) * 0.3 + 0.7
        const nodeOpacity = (node.activity * 0.7 + 0.3) * pulseIntensity
        
        // Node glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 3
        )
        gradient.addColorStop(0, `rgba(239, 204, 138, ${nodeOpacity})`)
        gradient.addColorStop(0.7, `rgba(255, 215, 0, ${nodeOpacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2)
        ctx.fill()
        
        // Node core
        ctx.fillStyle = `rgba(255, 215, 0, ${nodeOpacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Active node ring
        if (node.activity > 0.5) {
          ctx.strokeStyle = `rgba(255, 215, 0, ${(node.activity - 0.5) * 2})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size + 3, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

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
      {/* Canvas for neural network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Strategic accent elements */}
      <motion.div
        className="absolute left-8 top-1/4 w-3 h-3 rounded-full bg-[#efcc8a]"
        animate={{
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute right-8 top-3/4 w-3 h-3 rounded-full bg-[#ffd700]"
        animate={{
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Data flow indicators */}
      <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          className="absolute top-0 h-[2px] w-24 opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #efcc8a 50%, transparent 100%)',
          }}
          animate={{
            x: [-96, window.innerWidth + 96],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  )
}
