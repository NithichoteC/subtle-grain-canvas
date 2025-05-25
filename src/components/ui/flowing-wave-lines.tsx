
"use client";

import { motion } from "framer-motion";

interface FlowingWaveLinesProps {
  className?: string;
  side: 'left' | 'right';
}

export function FlowingWaveLines({ className, side }: FlowingWaveLinesProps) {
  // Generate wave paths for the specified side
  const generateWavePath = (index: number, total: number) => {
    const baseY = (index / total) * 100;
    const amplitude = 15 + (index % 3) * 5; // Varying wave amplitude
    const frequency = 0.02 + (index % 2) * 0.01; // Varying frequency
    
    if (side === 'left') {
      return `M0,${baseY} Q${amplitude},${baseY + 10} 0,${baseY + 20} T0,${baseY + 40} T0,${baseY + 60} T0,${baseY + 80}`;
    } else {
      return `M100,${baseY} Q${100 - amplitude},${baseY + 10} 100,${baseY + 20} T100,${baseY + 40} T100,${baseY + 60} T100,${baseY + 80}`;
    }
  };

  const waveCount = 8;
  const waves = Array.from({ length: waveCount }, (_, i) => ({
    id: i,
    path: generateWavePath(i, waveCount),
    opacity: 0.1 + (i % 3) * 0.05,
    strokeWidth: 0.5 + (i % 2) * 0.3,
    delay: i * 0.2
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
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
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: wave.opacity,
              y: [0, -2, 0]
            }}
            transition={{
              pathLength: { duration: 2, delay: wave.delay },
              opacity: { duration: 1, delay: wave.delay },
              y: { 
                duration: 4 + wave.id * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: wave.delay 
              }
            }}
          />
        ))}
      </svg>
      
      {/* Subtle gradient overlay for depth */}
      <div className={`absolute inset-0 ${
        side === 'left' 
          ? 'bg-gradient-to-r from-[#efcc8a]/[0.02] via-[#efcc8a]/[0.01] to-transparent' 
          : 'bg-gradient-to-l from-[#efcc8a]/[0.02] via-[#efcc8a]/[0.01] to-transparent'
      }`} />
    </div>
  );
}
