
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
  intensity = 0.25, // Reduced default intensity for smoother effect
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

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Check if cursor is at the edge of the viewport
        const edgeSensitivity = 20; // pixels from edge to consider "at edge"
        const atEdge = 
          e.clientX < edgeSensitivity || 
          e.clientY < edgeSensitivity || 
          window.innerWidth - e.clientX < edgeSensitivity || 
          window.innerHeight - e.clientY < edgeSensitivity;

        if (atEdge) {
          // Gradually reset when at viewport edges
          x.set(x.get() * 0.85);
          y.set(y.get() * 0.85);
          return;
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

        const inRange = normalizedDistance <= 1;
        
        if (isHovered && inRange) {
          // Improved easing function for smoother transition
          const scale = Math.max(0, 1 - Math.pow(normalizedDistance, 1.8));
          
          // Apply with smoothing and more controlled intensity
          const easedIntensity = intensity * Math.min(0.8, scale);
          x.set(distanceX * easedIntensity);
          y.set(distanceY * easedIntensity);
        } else if (normalizedDistance > 1.2) { // Adding some buffer for smooth transition
          // Reset position when out of range, with gentle transition
          x.set(0);
          y.set(0);
        }
      }
    };

    // Improved throttle with smoother frame rate control
    let lastCall = 0;
    const throttledCalculateDistance = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastCall > 16) { // ~60fps (1000ms/60)
        lastCall = now;
        calculateDistance(e);
      }
    };

    document.addEventListener('mousemove', throttledCalculateDistance);

    return () => {
      document.removeEventListener('mousemove', throttledCalculateDistance);
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
    } else if (actionArea === 'global') {
      setIsHovered(true);
    }
  }, [actionArea, x, y]);

  const handleMouseEnter = () => {
    if (actionArea === 'self') {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (actionArea === 'self') {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={actionArea === 'self' ? handleMouseEnter : undefined}
      onMouseLeave={actionArea === 'self' ? handleMouseLeave : undefined}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}
