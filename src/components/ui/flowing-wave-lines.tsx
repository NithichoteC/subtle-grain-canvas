
"use client";

import { motion } from "framer-motion";

interface FlowingWaveLinesProps {
  className?: string;
  side: 'left' | 'right';
}

export function FlowingWaveLines({ className, side }: FlowingWaveLinesProps) {
  // Create highly visible wave paths
  const generateWavePath = (index: number) => {
    const amplitude = 60;
    const yStart = index * 120 + 100;
    const width = 300;
    
    if (side === 'left') {
      return `M 0 ${yStart} 
              Q ${amplitude} ${yStart + 30} 0 ${yStart + 60} 
              T 0 ${yStart + 120}
              Q ${amplitude * 1.5} ${yStart + 150} 0 ${yStart + 180}`;
    } else {
      return `M ${width} ${yStart} 
              Q ${width - amplitude} ${yStart + 30} ${width} ${yStart + 60} 
              T ${width} ${yStart + 120}
              Q ${width - amplitude * 1.5} ${yStart + 150} ${width} ${yStart + 180}`;
    }
  };

  const waves = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    path: generateWavePath(i),
    opacity: 0.9 - (i * 0.15),
    strokeWidth: 3 + (i % 2),
    delay: i * 0.5
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none z-[1015] ${className || ''}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 300 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id={`wave-glow-${side}`}>
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
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
              pathLength: { duration: 3, delay: wave.delay },
              opacity: { duration: 1.5, delay: wave.delay },
            }}
          />
        ))}
        
        {/* Bright test line to confirm visibility */}
        <line 
          x1={side === 'left' ? "20" : "280"} 
          y1="50" 
          x2={side === 'left' ? "100" : "200"} 
          y2="200" 
          stroke="#00FF00" 
          strokeWidth="4"
          opacity="0.8"
        />
        
        {/* Additional bright accent line */}
        <line 
          x1={side === 'left' ? "0" : "300"} 
          y1="0" 
          x2={side === 'left' ? "0" : "300"} 
          y2="800" 
          stroke="#FFD700" 
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
