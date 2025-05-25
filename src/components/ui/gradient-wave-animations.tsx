
"use client";

import { motion } from "framer-motion";

interface GradientWaveAnimationsProps {
  side: 'left' | 'right';
}

export function GradientWaveAnimations({ side }: GradientWaveAnimationsProps) {
  if (side === 'left') {
    // Left side - problems theme with red/orange waves flowing right
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave 1 - Thin line */}
        <motion.div
          className="absolute top-20 left-0 h-[2px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(239, 68, 68, 0.6) 20%, rgba(251, 146, 60, 0.8) 50%, rgba(239, 68, 68, 0.6) 80%, transparent 100%)',
            filter: 'blur(0.5px)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
            delay: 0,
          }}
        />
        
        {/* Wave 2 - Medium band */}
        <motion.div
          className="absolute top-32 left-0 h-[8px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(220, 38, 38, 0.4) 25%, rgba(234, 88, 12, 0.6) 50%, rgba(220, 38, 38, 0.4) 75%, transparent 100%)',
            filter: 'blur(1px)',
          }}
          animate={{
            x: ['-150%', '250%'],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
            delay: 3,
          }}
        />
        
        {/* Wave 3 - Thick wave */}
        <motion.div
          className="absolute top-48 left-0 h-[12px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(185, 28, 28, 0.3) 30%, rgba(194, 65, 12, 0.5) 50%, rgba(185, 28, 28, 0.3) 70%, transparent 100%)',
            filter: 'blur(2px)',
          }}
          animate={{
            x: ['-200%', '300%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: 6,
          }}
        />
        
        {/* Wave 4 - Subtle glow */}
        <motion.div
          className="absolute top-64 left-0 h-[4px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(254, 202, 202, 0.5) 25%, rgba(253, 186, 116, 0.7) 50%, rgba(254, 202, 202, 0.5) 75%, transparent 100%)',
            filter: 'blur(1.5px)',
          }}
          animate={{
            x: ['-120%', '220%'],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear',
            delay: 9,
          }}
        />
        
        {/* Wave 5 - Fast thin line */}
        <motion.div
          className="absolute top-80 left-0 h-[1px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(239, 68, 68, 0.8) 15%, rgba(251, 146, 60, 0.9) 50%, rgba(239, 68, 68, 0.8) 85%, transparent 100%)',
            filter: 'blur(0.3px)',
          }}
          animate={{
            x: ['-80%', '180%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: 12,
          }}
        />
      </div>
    );
  } else {
    // Right side - solutions theme with green/gold waves flowing left
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave 1 - Thin line */}
        <motion.div
          className="absolute top-24 right-0 h-[2px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.6) 20%, rgba(239, 204, 138, 0.8) 50%, rgba(34, 197, 94, 0.6) 80%, transparent 100%)',
            filter: 'blur(0.5px)',
          }}
          animate={{
            x: ['200%', '-100%'],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'linear',
            delay: 1,
          }}
        />
        
        {/* Wave 2 - Medium band */}
        <motion.div
          className="absolute top-36 right-0 h-[8px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(22, 163, 74, 0.4) 25%, rgba(205, 127, 50, 0.6) 50%, rgba(22, 163, 74, 0.4) 75%, transparent 100%)',
            filter: 'blur(1px)',
          }}
          animate={{
            x: ['250%', '-150%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
            delay: 4,
          }}
        />
        
        {/* Wave 3 - Thick wave */}
        <motion.div
          className="absolute top-52 right-0 h-[12px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(21, 128, 61, 0.3) 30%, rgba(184, 134, 11, 0.5) 50%, rgba(21, 128, 61, 0.3) 70%, transparent 100%)',
            filter: 'blur(2px)',
          }}
          animate={{
            x: ['300%', '-200%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
            delay: 7,
          }}
        />
        
        {/* Wave 4 - Subtle glow */}
        <motion.div
          className="absolute top-68 right-0 h-[4px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(187, 247, 208, 0.5) 25%, rgba(254, 240, 138, 0.7) 50%, rgba(187, 247, 208, 0.5) 75%, transparent 100%)',
            filter: 'blur(1.5px)',
          }}
          animate={{
            x: ['220%', '-120%'],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'linear',
            delay: 10,
          }}
        />
        
        {/* Wave 5 - Fast thin line */}
        <motion.div
          className="absolute top-84 right-0 h-[1px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.8) 15%, rgba(239, 204, 138, 0.9) 50%, rgba(34, 197, 94, 0.8) 85%, transparent 100%)',
            filter: 'blur(0.3px)',
          }}
          animate={{
            x: ['180%', '-80%'],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'linear',
            delay: 13,
          }}
        />
      </div>
    );
  }
}
