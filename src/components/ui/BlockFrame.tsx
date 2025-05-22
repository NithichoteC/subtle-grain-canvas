
"use client";

import { cn } from "@/lib/utils";
import GridLines from "@/components/GridLines";
import { motion } from "framer-motion";

interface BlockFrameProps {
  children: React.ReactNode;
  className?: string;
  flowIntensity?: 'light' | 'medium' | 'heavy';
  flowDirection?: 'left-to-right' | 'right-to-left' | 'both';
}

export function BlockFrame({ 
  children, 
  className,
  flowIntensity = 'medium',
  flowDirection = 'both'
}: BlockFrameProps) {
  // Generate intensity based on the prop
  const getIntensity = () => {
    switch(flowIntensity) {
      case 'light': return { pathCount: 5, opacity: 0.08, width: 1.2 };
      case 'heavy': return { pathCount: 12, opacity: 0.18, width: 2.4 };
      default: return { pathCount: 8, opacity: 0.12, width: 1.8 };
    }
  };
  
  const intensity = getIntensity();
  
  // Generate the background flow paths
  const generatePaths = (side: 'left' | 'right') => {
    return Array.from({ length: intensity.pathCount }, (_, i) => {
      const yPosition = 100 + (i * 70);
      const variance = i % 3 === 0 ? 50 : i % 2 === 0 ? 30 : 10;
      
      let pathData;
      if (side === 'left') {
        pathData = {
          d: `M-50 ${yPosition}C100 ${yPosition - variance} 300 ${yPosition + variance} 500 ${yPosition - (variance/2)}`,
          width: intensity.width + (i % 3) * 0.3,
          opacity: intensity.opacity + (i % 4) * 0.05,
          duration: 24 + (i % 5) * 6
        };
      } else {
        pathData = {
          d: `M650 ${yPosition}C500 ${yPosition + variance} 300 ${yPosition - variance} 100 ${yPosition + (variance/2)}`,
          width: intensity.width + (i % 3) * 0.3,
          opacity: intensity.opacity + (i % 4) * 0.05,
          duration: 24 + (i % 5) * 6
        };
      }
      
      return {
        id: i,
        ...pathData
      };
    });
  };

  // Create left and right paths based on direction
  const leftPaths = flowDirection === 'right-to-left' || flowDirection === 'both' ? generatePaths('left') : [];
  const rightPaths = flowDirection === 'left-to-right' || flowDirection === 'both' ? generatePaths('right') : [];

  return (
    <div className={cn("relative border border-white/10 rounded-lg overflow-hidden", className)}>
      {/* Grid lines for the frame */}
      <GridLines className="z-10" />
      
      {/* Background flow paths */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Left side paths */}
        {leftPaths.length > 0 && (
          <div className="absolute top-0 bottom-0 left-0 w-full pointer-events-none">
            <svg
              className="w-full h-full text-white/80"
              viewBox="0 0 600 500"
              preserveAspectRatio="none"
              fill="none"
            >
              {leftPaths.map((path) => (
                <motion.path
                  key={`left-${path.id}`}
                  d={path.d}
                  stroke="currentColor"
                  strokeWidth={path.width}
                  strokeOpacity={path.opacity}
                  initial={{ pathLength: 0, opacity: 0.1 }}
                  animate={{
                    pathLength: 1,
                    opacity: [path.opacity * 0.8, path.opacity * 1.4, path.opacity * 0.8],
                  }}
                  transition={{
                    duration: path.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatType: "loop",
                  }}
                />
              ))}
            </svg>
          </div>
        )}
        
        {/* Right side paths */}
        {rightPaths.length > 0 && (
          <div className="absolute top-0 bottom-0 right-0 w-full pointer-events-none">
            <svg
              className="w-full h-full text-white/80"
              viewBox="0 0 600 500"
              preserveAspectRatio="none"
              fill="none"
            >
              {rightPaths.map((path) => (
                <motion.path
                  key={`right-${path.id}`}
                  d={path.d}
                  stroke="currentColor"
                  strokeWidth={path.width}
                  strokeOpacity={path.opacity}
                  initial={{ pathLength: 0, opacity: 0.1 }}
                  animate={{
                    pathLength: 1,
                    opacity: [path.opacity * 0.8, path.opacity * 1.4, path.opacity * 0.8],
                  }}
                  transition={{
                    duration: path.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatType: "loop",
                  }}
                />
              ))}
            </svg>
          </div>
        )}
      </div>
      
      {/* Content with z-index to appear on top */}
      <div className="relative z-20 p-6">
        {children}
      </div>
    </div>
  );
}
