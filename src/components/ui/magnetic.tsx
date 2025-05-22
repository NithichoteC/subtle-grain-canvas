
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from 'framer-motion';

// Much more responsive spring config
const SPRING_CONFIG = { stiffness: 150, damping: 15, mass: 0.3 };

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
  intensity = 0.25, // Increased default intensity for more noticeable effect
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

  // Configure more responsive springs
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  // Set isHovered to true immediately if actionArea is global
  useEffect(() => {
    if (actionArea === 'global') {
      console.log('Magnetic: Global hover active');
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

        // Log when within range for debugging
        if (Math.abs(distanceX) < rangeX && Math.abs(distanceY) < effectiveRangeY) {
          console.log(`Mouse position: ${e.clientX}, ${e.clientY}`);
          console.log(`Button center: ${centerX}, ${centerY}`);
          console.log(`Distance: X=${distanceX.toFixed(2)}, Y=${distanceY.toFixed(2)}`);
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

        // CRITICAL FIX: Simplify the application logic and make it more direct
        if (isHovered) {
          if (normalizedDistance <= 1) {
            // Calculate a smoother easing curve for the magnetic effect
            const easing = 1 - Math.pow(normalizedDistance, 1.5);
            const effectIntensity = intensity * easing * 2; // Double the effect for visibility
            
            // Apply directly to motion values - this is key for the effect to be visible
            x.set(distanceX * effectIntensity);
            y.set(distanceY * effectIntensity);
            
            console.log(`✅ Applied: X=${(distanceX * effectIntensity).toFixed(2)}, Y=${(distanceY * effectIntensity).toFixed(2)}, Intensity=${effectIntensity.toFixed(2)}`);
          } else {
            // Gradual reset when out of range
            const currentX = x.get();
            const currentY = y.get();
            
            // If we have movement, gradually reset to 0
            if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
              x.set(currentX * 0.85);
              y.set(currentY * 0.85);
            } else {
              x.set(0);
              y.set(0);
            }
          }
        }
      }
    };

    // Use requestAnimationFrame for smoother performance
    let animationFrameId: number;
    
    const animateFrame = () => {
      calculateDistance(lastMouseEvent);
      animationFrameId = requestAnimationFrame(animateFrame);
    };

    let lastMouseEvent: MouseEvent;
    const handleMouseMove = (e: MouseEvent) => {
      lastMouseEvent = e;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animateFrame);
      }
    };

    // Start only if we have mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Initial animation frame if global mode
    if (actionArea === 'global' && lastMouseEvent) {
      animationFrameId = requestAnimationFrame(animateFrame);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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
        willChange: "transform", // Performance optimization for transform
        zIndex: 10, // Ensure it's above other elements
      }}
    >
      {children}
    </motion.div>
  );
}
