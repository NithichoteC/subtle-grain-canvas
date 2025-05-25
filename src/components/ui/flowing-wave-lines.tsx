
"use client";

import { motion } from "framer-motion";

interface FlowingWaveLinesProps {
  className?: string;
  side: 'left' | 'right';
}

export function FlowingWaveLines({ className, side }: FlowingWaveLinesProps) {
  // Generate simpler, more visible wave paths
  const generateWavePath = (index: number, total: number) => {
    const startY = (index / total) * 100;
    const amplitude = 20 + (index % 3) * 8; // Increased amplitude for visibility
    
    if (side === 'left') {
      // Left side waves flowing inward
      return `M0,${startY} C${amplitude},${startY + 15} ${amplitude * 0.5},${startY + 35} 0,${startY + 50} S${amplitude},${startY + 75} 0,${startY + 100}`;
    } else {
      // Right side waves flowing inward  
      return `M100,${startY} C${100 - amplitude},${startY + 15} ${100 - amplitude * 0.5},${startY + 35} 100,${startY + 50} S${100 - amplitude},${startY + 75} 100,${startY + 100}`;
    }
  };

  const waveCount = 6;
  const waves = Array.from({ length: waveCount }, (_, i) => ({
    id: i,
    path: generateWavePath(i, waveCount),
    opacity: 0.4 + (i % 3) * 0.2, // Much higher opacity
    strokeWidth: 1.5 + (i % 2) * 0.8, // Thicker strokes
    delay: i * 0.4
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 120"
        preserveAspectRatio="none"
        fill="none"
      >
        {waves.map((wave) => (
          <motion.path
            key={wave.id}
            d={wave.path}
            stroke="#efcc8a"
            strokeWidth={wave.strokeWidth}
            strokeOpacity={wave.opacity}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: wave.opacity,
              x: side === 'left' ? [0, 3, 0] : [0, -3, 0]
            }}
            transition={{
              pathLength: { duration: 2.5, delay: wave.delay },
              opacity: { duration: 1.5, delay: wave.delay },
              x: { 
                duration: 6 + wave.id * 0.8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: wave.delay 
              }
            }}
          />
        ))}
        
        {/* Additional glow effects */}
        {waves.slice(0, 3).map((wave) => (
          <motion.path
            key={`glow-${wave.id}`}
            d={wave.path}
            stroke="#efcc8a"
            strokeWidth={wave.strokeWidth * 2}
            strokeOpacity={wave.opacity * 0.3}
            fill="none"
            strokeLinecap="round"
            filter="blur(2px)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: wave.opacity * 0.3,
              x: side === 'left' ? [0, 2, 0] : [0, -2, 0]
            }}
            transition={{
              pathLength: { duration: 3, delay: wave.delay + 0.5 },
              opacity: { duration: 2, delay: wave.delay + 0.5 },
              x: { 
                duration: 8 + wave.id, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: wave.delay + 0.5
              }
            }}
          />
        ))}
      </svg>
      
      {/* Enhanced gradient overlay for depth */}
      <div className={`absolute inset-0 ${
        side === 'left' 
          ? 'bg-gradient-to-r from-[#efcc8a]/[0.08] via-[#efcc8a]/[0.04] to-transparent' 
          : 'bg-gradient-to-l from-[#efcc8a]/[0.08] via-[#efcc8a]/[0.04] to-transparent'
      }`} />
    </div>
  );
}
