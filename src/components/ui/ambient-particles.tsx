
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
          x: Math.random() * 85 + 5,
          y: Math.random() * 90 + 5,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.8 + 0.4,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 10,
          color: type === 'problems' 
            ? `rgba(239, 204, 138, ${Math.random() * 0.6 + 0.4})`
            : `rgba(205, 127, 50, ${Math.random() * 0.6 + 0.4})`
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
            boxShadow: `0 0 ${particle.size * 8}px ${particle.color}`,
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
            y: [`${particle.y}%`, `${particle.y + (Math.random() * 25 - 12.5)}%`, `${particle.y}%`],
            opacity: [0, particle.opacity, particle.opacity, 0],
            scale: [0, 1, 1.2, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Sophisticated geometric accent elements */}
      <motion.div
        className="absolute w-16 h-16 border border-[#efcc8a]/25 bg-[#efcc8a]/5 backdrop-blur-sm"
        style={{
          left: type === 'problems' ? '20%' : '70%',
          top: '30%',
          borderRadius: '4px'
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-12 h-12 bg-gradient-radial from-[#efcc8a]/20 to-transparent rounded-full backdrop-blur-sm"
        style={{
          right: type === 'problems' ? '65%' : '15%',
          bottom: '35%'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Elegant flowing lines with glow */}
      <motion.div
        className="absolute h-px w-32 bg-gradient-to-r from-transparent via-[#efcc8a]/40 to-transparent shadow-[0_0_8px_rgba(239,204,138,0.4)]"
        style={{
          left: type === 'problems' ? '15%' : '60%',
          top: '65%'
        }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
}
