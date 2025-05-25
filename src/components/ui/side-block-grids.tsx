
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { DotPattern } from '@/components/ui/dot-pattern';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';
import { motion } from 'framer-motion';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with smooth flowing gradients
 * Matches the premium template aesthetic with elegant gradient flows
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <div className="relative h-full w-full overflow-hidden">
          {/* Main flowing gradient - Left */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 800px 1200px at -200px 50%, 
                  rgba(184, 134, 11, 0.4) 0%,
                  rgba(205, 127, 50, 0.3) 25%, 
                  rgba(255, 215, 0, 0.2) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 800px at -100px 20%, 
                  rgba(226, 209, 195, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 500px 600px at -150px 80%, 
                  rgba(205, 127, 50, 0.25) 0%,
                  rgba(255, 215, 0, 0.1) 50%,
                  transparent 70%
                )`
            }}
            animate={{
              background: [
                `
                radial-gradient(ellipse 800px 1200px at -200px 50%, 
                  rgba(184, 134, 11, 0.4) 0%,
                  rgba(205, 127, 50, 0.3) 25%, 
                  rgba(255, 215, 0, 0.2) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 800px at -100px 20%, 
                  rgba(226, 209, 195, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 500px 600px at -150px 80%, 
                  rgba(205, 127, 50, 0.25) 0%,
                  rgba(255, 215, 0, 0.1) 50%,
                  transparent 70%
                )`,
                `
                radial-gradient(ellipse 900px 1400px at -250px 30%, 
                  rgba(184, 134, 11, 0.5) 0%,
                  rgba(205, 127, 50, 0.35) 25%, 
                  rgba(255, 215, 0, 0.25) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 700px 900px at -50px 60%, 
                  rgba(226, 209, 195, 0.25) 0%,
                  rgba(184, 134, 11, 0.2) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 700px at -200px 10%, 
                  rgba(205, 127, 50, 0.3) 0%,
                  rgba(255, 215, 0, 0.15) 50%,
                  transparent 70%
                )`,
                `
                radial-gradient(ellipse 800px 1200px at -200px 70%, 
                  rgba(184, 134, 11, 0.4) 0%,
                  rgba(205, 127, 50, 0.3) 25%, 
                  rgba(255, 215, 0, 0.2) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 800px at -100px 90%, 
                  rgba(226, 209, 195, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 500px 600px at -150px 40%, 
                  rgba(205, 127, 50, 0.25) 0%,
                  rgba(255, 215, 0, 0.1) 50%,
                  transparent 70%
                )`
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary flowing layer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 400px 800px at -50px 25%, 
                  rgba(255, 215, 0, 0.15) 0%,
                  rgba(184, 134, 11, 0.1) 60%,
                  transparent 80%
                )`
            }}
            animate={{
              background: [
                `radial-gradient(ellipse 400px 800px at -50px 25%, 
                  rgba(255, 215, 0, 0.15) 0%,
                  rgba(184, 134, 11, 0.1) 60%,
                  transparent 80%
                )`,
                `radial-gradient(ellipse 500px 900px at -100px 75%, 
                  rgba(255, 215, 0, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 60%,
                  transparent 80%
                )`,
                `radial-gradient(ellipse 400px 800px at -50px 25%, 
                  rgba(255, 215, 0, 0.15) 0%,
                  rgba(184, 134, 11, 0.1) 60%,
                  transparent 80%
                )`
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          {/* Base noise texture */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
        </div>
      </div>
      
      {/* Right Edge Enhancement */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <div className="relative h-full w-full overflow-hidden">
          {/* Main flowing gradient - Right */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 800px 1200px at calc(100% + 200px) 50%, 
                  rgba(184, 134, 11, 0.4) 0%,
                  rgba(205, 127, 50, 0.3) 25%, 
                  rgba(255, 215, 0, 0.2) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 800px at calc(100% + 100px) 80%, 
                  rgba(226, 209, 195, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 500px 600px at calc(100% + 150px) 20%, 
                  rgba(205, 127, 50, 0.25) 0%,
                  rgba(255, 215, 0, 0.1) 50%,
                  transparent 70%
                )`
            }}
            animate={{
              background: [
                `
                radial-gradient(ellipse 800px 1200px at calc(100% + 200px) 50%, 
                  rgba(184, 134, 11, 0.4) 0%,
                  rgba(205, 127, 50, 0.3) 25%, 
                  rgba(255, 215, 0, 0.2) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 800px at calc(100% + 100px) 80%, 
                  rgba(226, 209, 195, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 500px 600px at calc(100% + 150px) 20%, 
                  rgba(205, 127, 50, 0.25) 0%,
                  rgba(255, 215, 0, 0.1) 50%,
                  transparent 70%
                )`,
                `
                radial-gradient(ellipse 900px 1400px at calc(100% + 250px) 70%, 
                  rgba(184, 134, 11, 0.5) 0%,
                  rgba(205, 127, 50, 0.35) 25%, 
                  rgba(255, 215, 0, 0.25) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 700px 900px at calc(100% + 50px) 40%, 
                  rgba(226, 209, 195, 0.25) 0%,
                  rgba(184, 134, 11, 0.2) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 700px at calc(100% + 200px) 90%, 
                  rgba(205, 127, 50, 0.3) 0%,
                  rgba(255, 215, 0, 0.15) 50%,
                  transparent 70%
                )`,
                `
                radial-gradient(ellipse 800px 1200px at calc(100% + 200px) 30%, 
                  rgba(184, 134, 11, 0.4) 0%,
                  rgba(205, 127, 50, 0.3) 25%, 
                  rgba(255, 215, 0, 0.2) 50%,
                  transparent 70%
                ),
                radial-gradient(ellipse 600px 800px at calc(100% + 100px) 10%, 
                  rgba(226, 209, 195, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 500px 600px at calc(100% + 150px) 60%, 
                  rgba(205, 127, 50, 0.25) 0%,
                  rgba(255, 215, 0, 0.1) 50%,
                  transparent 70%
                )`
              ]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Secondary flowing layer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 400px 800px at calc(100% + 50px) 75%, 
                  rgba(255, 215, 0, 0.15) 0%,
                  rgba(184, 134, 11, 0.1) 60%,
                  transparent 80%
                )`
            }}
            animate={{
              background: [
                `radial-gradient(ellipse 400px 800px at calc(100% + 50px) 75%, 
                  rgba(255, 215, 0, 0.15) 0%,
                  rgba(184, 134, 11, 0.1) 60%,
                  transparent 80%
                )`,
                `radial-gradient(ellipse 500px 900px at calc(100% + 100px) 25%, 
                  rgba(255, 215, 0, 0.2) 0%,
                  rgba(184, 134, 11, 0.15) 60%,
                  transparent 80%
                )`,
                `radial-gradient(ellipse 400px 800px at calc(100% + 50px) 75%, 
                  rgba(255, 215, 0, 0.15) 0%,
                  rgba(184, 134, 11, 0.1) 60%,
                  transparent 80%
                )`
              ]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
          
          {/* Base noise texture */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
        </div>
      </div>
      
      {/* Center connection zone - fills the 1280px center area */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"
        style={{ width: '1280px' }}
      >
        <div 
          className="absolute inset-0"
          style={{ 
            background: colors.dark,
            borderLeft: `1px solid ${colors.white[10]}`,
            borderRight: `1px solid ${colors.white[10]}`
          }}
        >
          {/* Noise texture for consistency */}
          <NoiseTexture {...noiseConfigs.hero} />
        </div>
      </div>
      
      {/* Ultra-subtle ambient enhancement */}
      <div 
        className="absolute inset-0 z-5"
        style={{ 
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colors.bronze.base}01 0%, transparent 70%)`
        }}
      />
    </div>
  );
}
