
"use client";

import { motion } from "framer-motion";

interface FlowingWaveLinesProps {
  className?: string;
  side: 'left' | 'right';
}

export function FlowingWaveLines({ className, side }: FlowingWaveLinesProps) {
  // Create simple, visible wave paths
  const generateSimpleWave = (index: number) => {
    const amplitude = 30;
    const frequency = 0.02;
    const yOffset = index * 80;
    
    if (side === 'left') {
      // Left side - simple sine wave from left edge
      return `M 0 ${yOffset} Q ${amplitude} ${yOffset + 20} 0 ${yOffset + 40} T 0 ${yOffset + 80}`;
    } else {
      // Right side - simple sine wave from right edge  
      const width = 200;
      return `M ${width} ${yOffset} Q ${width - amplitude} ${yOffset + 20} ${width} ${yOffset + 40} T ${width} ${yOffset + 80}`;
    }
  };

  const waves = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    path: generateSimpleWave(i),
    opacity: 0.8 - (i * 0.1),
    strokeWidth: 2 + (i % 2),
    delay: i * 0.2
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none ${className || ''}`}>
      {/* High contrast background for debugging */}
      <div className="absolute inset-0 bg-red-500/10" />
      
      <svg
        className="w-full h-full"
        viewBox="0 0 200 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id={`wave-glow-${side}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
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
            stroke="#FFD700"
            strokeWidth={wave.strokeWidth}
            strokeOpacity={wave.opacity}
            fill="none"
            strokeLinecap="round"
            filter={`url(#wave-glow-${side})`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: wave.opacity,
            }}
            transition={{
              pathLength: { duration: 2, delay: wave.delay },
              opacity: { duration: 1, delay: wave.delay },
            }}
          />
        ))}
        
        {/* Additional bright test lines */}
        <line 
          x1={side === 'left' ? "0" : "200"} 
          y1="0" 
          x2={side === 'left' ? "50" : "150"} 
          y2="100" 
          stroke="#00FF00" 
          strokeWidth="3"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
