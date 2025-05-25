
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

interface AmbientParticlesProps {
  type: 'problems' | 'solutions';
}

export function AmbientParticles({ type }: AmbientParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 8;
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: `particle-${type}-${i}`,
          x: Math.random() * 80 + 10, // Keep particles within bounds
          y: Math.random() * 90 + 5,
          size: Math.random() * 2 + 2, // Larger particles
          opacity: Math.random() * 0.6 + 0.3, // More visible
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 8,
          color: type === 'problems' 
            ? `rgba(239, 204, 138, ${Math.random() * 0.4 + 0.3})`
            : `rgba(239, 204, 138, ${Math.random() * 0.4 + 0.3})`
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
  }, [type]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 6}px ${particle.color}`,
            filter: 'blur(0.5px)'
          }}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + (Math.random() * 15 - 7.5)}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y + (Math.random() * 20 - 10)}%`, `${particle.y}%`],
            opacity: [0, particle.opacity, particle.opacity, 0],
            scale: [0, 1, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Modern geometric accents */}
      <motion.div
        className="absolute w-12 h-12 border border-[#efcc8a]/20"
        style={{
          left: '15%',
          top: '25%',
          borderRadius: '2px'
        }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-8 h-8 bg-[#efcc8a]/10 rounded-full"
        style={{
          right: '20%',
          bottom: '30%'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Flowing lines */}
      <motion.div
        className="absolute h-px w-24 bg-gradient-to-r from-transparent via-[#efcc8a]/30 to-transparent"
        style={{
          left: '10%',
          top: '60%'
        }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
