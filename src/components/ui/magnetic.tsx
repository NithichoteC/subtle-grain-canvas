
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from 'framer-motion';

// Refined spring config for smoother motion
const SPRING_CONFIG = { stiffness: 14, damping: 9, mass: 0.6 };

export type MagneticProps = {
  children: React.ReactNode;
  intensity?: number;
  rangeX?: number;
  rangeY?: number;
  actionArea?: 'self' | 'parent' | 'global';
  springOptions?: SpringOptions;
  shape?: 'circular' | 'rectangular' | 'elliptical';
};

export function Magnetic({
  children,
  intensity = 0.25, // Default intensity
  rangeX = 100,
  rangeY,
  actionArea = 'self',
  springOptions = SPRING_CONFIG,
  shape = 'elliptical',
}: MagneticProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // If rangeY is not specified, default to rangeX
  const effectiveRangeY = rangeY ?? rangeX;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  // Set isHovered to true immediately if actionArea is global
  useEffect(() => {
    if (actionArea === 'global') {
      console.log('Magnetic: Setting global hover state to true');
      setIsHovered(true);
    }
  }, [actionArea]);

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Debug information
        if (Math.abs(distanceX) < rangeX && Math.abs(distanceY) < effectiveRangeY) {
          console.log(`Magnetic effect active: 
            - distanceX: ${distanceX.toFixed(2)} 
            - distanceY: ${distanceY.toFixed(2)} 
            - isHovered: ${isHovered}
            - intensity: ${intensity}
            - rect: ${JSON.stringify({
              top: rect.top.toFixed(0),
              left: rect.left.toFixed(0),
              width: rect.width.toFixed(0),
              height: rect.height.toFixed(0)
            })}`);
        }

        // Calculate normalized distance based on the selected shape
        let normalizedDistance: number;
        
        if (shape === 'circular') {
          // Circular: standard Euclidean distance
          normalizedDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2) / rangeX;
        } else if (shape === 'rectangular') {
          // Rectangular: max of normalized x and y distances
          normalizedDistance = Math.max(
            Math.abs(distanceX) / rangeX,
            Math.abs(distanceY) / effectiveRangeY
          );
        } else { // elliptical
          // Elliptical: normalized distance considering different x and y ranges
          normalizedDistance = Math.sqrt(
            (distanceX / rangeX) ** 2 + 
            (distanceY / effectiveRangeY) ** 2
          );
        }

        // CRITICAL FIX: Always apply magnetic effect when in range and isHovered is true
        // This is the key fix to ensure the buttons move with the cursor
        if (isHovered && normalizedDistance <= 1) {
          // Use a more aggressive easing for better visual effect
          const scale = 1 - normalizedDistance; // Linear scale based on distance
          const effectiveIntensity = intensity * scale;
          
          // Apply the magnetic effect directly
          x.set(distanceX * effectiveIntensity);
          y.set(distanceY * effectiveIntensity);
          console.log(`Magnetic applied: X=${distanceX * effectiveIntensity}, Y=${distanceY * effectiveIntensity}`);
        } else if (normalizedDistance > 1) {
          // Reset position when out of range
          x.set(0);
          y.set(0);
        }
      }
    };

    // Run calculation on every mouse move
    document.addEventListener('mousemove', calculateDistance);

    return () => {
      document.removeEventListener('mousemove', calculateDistance);
    };
  }, [ref, isHovered, intensity, rangeX, effectiveRangeY, x, y, shape]);

  useEffect(() => {
    if (actionArea === 'parent' && ref.current?.parentElement) {
      const parent = ref.current.parentElement;

      const handleParentEnter = () => setIsHovered(true);
      const handleParentLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      };

      parent.addEventListener('mouseenter', handleParentEnter);
      parent.addEventListener('mouseleave', handleParentLeave);

      return () => {
        parent.removeEventListener('mouseenter', handleParentEnter);
        parent.removeEventListener('mouseleave', handleParentLeave);
      };
    }
  }, [actionArea, x, y]);

  const handleMouseEnter = () => {
    if (actionArea === 'self') {
      console.log('Magnetic: Mouse enter - setting hover state to true');
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (actionArea === 'self') {
      console.log('Magnetic: Mouse leave - setting hover state to false');
      setIsHovered(false);
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        position: "relative", // Ensure proper positioning
        display: "inline-block", // Make sure it only takes necessary space
      }}
    >
      {children}
    </motion.div>
  );
}
