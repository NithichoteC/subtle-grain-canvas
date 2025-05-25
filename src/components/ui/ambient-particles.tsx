
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
      const particleCount = 12;
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: `particle-${type}-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 10,
          color: type === 'problems' 
            ? `rgba(239, 68, 68, ${Math.random() * 0.3 + 0.1})`
            : `rgba(34, 197, 94, ${Math.random() * 0.3 + 0.1})`
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
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
            filter: 'blur(0.5px)'
          }}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y + (Math.random() * 30 - 15)}%`, `${particle.y}%`],
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
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-16 h-16 border border-white/10 rounded-full"
        style={{
          left: '20%',
          top: '30%'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-8 h-8 border border-white/5 rotate-45"
        style={{
          right: '25%',
          bottom: '40%'
        }}
        animate={{
          rotate: [45, 405],
          y: [-10, 10, -10],
          opacity: [0.2, 0.05, 0.2]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
