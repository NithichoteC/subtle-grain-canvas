
"use client";

import { motion } from "framer-motion";

interface FlowingWaveLinesProps {
  className?: string;
  side: 'left' | 'right';
}

export function FlowingWaveLines({ className, side }: FlowingWaveLinesProps) {
  // Generate much more visible and simpler wave paths
  const generateWavePath = (index: number, total: number) => {
    const spacing = 100 / total;
    const startY = index * spacing;
    const waveHeight = 15 + (index % 2) * 5; // More pronounced waves
    
    if (side === 'left') {
      // Left side - curves flowing from left edge inward
      return `M0,${startY} Q${waveHeight},${startY + spacing/3} 0,${startY + spacing/2} T0,${startY + spacing}`;
    } else {
      // Right side - curves flowing from right edge inward
      return `M100,${startY} Q${100-waveHeight},${startY + spacing/3} 100,${startY + spacing/2} T100,${startY + spacing}`;
    }
  };

  const waveCount = 8;
  const waves = Array.from({ length: waveCount }, (_, i) => ({
    id: i,
    path: generateWavePath(i, waveCount),
    opacity: 0.6 + (i % 3) * 0.2, // High opacity for visibility
    strokeWidth: 2 + (i % 2) * 1, // Thick strokes
    delay: i * 0.3
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none ${className || ''}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id={`glow-${side}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {waves.map((wave) => (
          <motion.path
            key={wave.id}
            d={wave.path}
            stroke="#efcc8a"
            strokeWidth={wave.strokeWidth}
            strokeOpacity={wave.opacity}
            fill="none"
            strokeLinecap="round"
            filter={`url(#glow-${side})`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: wave.opacity,
              strokeDashoffset: [0, -20, 0]
            }}
            transition={{
              pathLength: { duration: 2, delay: wave.delay },
              opacity: { duration: 1, delay: wave.delay },
              strokeDashoffset: { 
                duration: 4 + wave.id * 0.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: wave.delay 
              }
            }}
            strokeDasharray="10 5"
          />
        ))}
      </svg>
      
      {/* Strong gradient overlay for enhanced visibility */}
      <div className={`absolute inset-0 ${
        side === 'left' 
          ? 'bg-gradient-to-r from-[#efcc8a]/20 via-[#efcc8a]/10 to-transparent' 
          : 'bg-gradient-to-l from-[#efcc8a]/20 via-[#efcc8a]/10 to-transparent'
      }`} />
    </div>
  );
}
