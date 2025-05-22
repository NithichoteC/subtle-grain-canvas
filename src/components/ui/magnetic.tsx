
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from 'framer-motion';

const SPRING_CONFIG = { stiffness: 26.7, damping: 4.1, mass: 0.2 };

export type MagneticProps = {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
  actionArea?: 'self' | 'parent' | 'global';
  springOptions?: SpringOptions;
};

export function Magnetic({
  children,
  intensity = 0.6,
  range = 100,
  actionArea = 'self',
  springOptions = SPRING_CONFIG,
}: MagneticProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

        const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        
        // Check if mouse is within the element's bounds plus the range
        const isInRange = 
          Math.abs(distanceX) <= (rect.width / 2 + range) && 
          Math.abs(distanceY) <= (rect.height / 2 + range);

        if (isHovered && isInRange) {
          // Use normalized distance for smoother effect based on button dimensions
          const scale = 1 - absoluteDistance / (Math.max(rect.width, rect.height) + range);
          const effectiveScale = Math.max(0, scale);
          
          x.set(distanceX * intensity * effectiveScale);
          y.set(distanceY * intensity * effectiveScale);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    document.addEventListener('mousemove', calculateDistance);

    return () => {
      document.removeEventListener('mousemove', calculateDistance);
    };
  }, [ref, isHovered, intensity, range, x, y]);

  useEffect(() => {
    if (actionArea === 'parent' && ref.current?.parentElement) {
      const parent = ref.current.parentElement;

      const handleParentEnter = () => setIsHovered(true);
      const handleParentLeave = () => setIsHovered(false);

      parent.addEventListener('mouseenter', handleParentEnter);
      parent.addEventListener('mouseleave', handleParentLeave);

      return () => {
        parent.removeEventListener('mouseenter', handleParentEnter);
        parent.removeEventListener('mouseleave', handleParentLeave);
      };
    } else if (actionArea === 'global') {
      setIsHovered(true);
    }
  }, [actionArea]);

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
        width: 'fit-content', // Ensure the container fits the button exactly
        display: 'inline-block', // Prevent container from taking full width
      }}
      className="magnetic-wrapper"
    >
      {children}
    </motion.div>
  );
}
