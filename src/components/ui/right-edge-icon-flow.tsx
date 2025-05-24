
"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface FlowingIcon {
  id: string;
  type: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  speed: number;
}

export function RightEdgeIconFlow() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const iconSources = {
    calendar: '/lovable-uploads/d5947268-f6d0-4381-80c3-d132d1a3ccad.png',
    'money-bag': '/lovable-uploads/d1d8d9ab-3490-4ef3-b8a8-03feed07ec59.png',
    ghost: '/lovable-uploads/ef32e710-bc09-423e-b553-5c7815ccd0b0.png'
  };

  const iconTypes = ['calendar', 'money-bag', 'ghost'];

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Create new icon
  const createIcon = useCallback(() => {
    return {
      id: `right-${Date.now()}-${Math.random()}`,
      type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: dimensions.width + 100, // Start further off-screen to the right
      y: Math.random() * (dimensions.height - 300) + 150, // Better vertical distribution
      scale: 0.6 + Math.random() * 0.3, // Smaller but visible icons
      rotation: Math.random() * 360,
      opacity: 0.6 + Math.random() * 0.3, // Higher opacity for visibility
      speed: 1.2 + Math.random() * 0.8
    };
  }, [dimensions, iconTypes]);

  // Continuous spawning system
  useEffect(() => {
    if (dimensions.width === 0) return;

    const spawnInterval = setInterval(() => {
      setIcons(prevIcons => {
        // Remove icons that have moved past the boundary (80% of screen width)
        const rightBoundary = dimensions.width * 0.8;
        const filteredIcons = prevIcons.filter(icon => icon.x > rightBoundary - 100);
        
        // Add new icon
        return [...filteredIcons, createIcon()];
      });
    }, 700); // Slightly different timing for variety

    return () => clearInterval(spawnInterval);
  }, [createIcon, dimensions]);

  // Animation loop
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67;
      lastTime = currentTime;

      setIcons(prevIcons => 
        prevIcons.map(icon => {
          const newX = icon.x - (icon.speed * deltaTime); // Move left
          const newRotation = icon.rotation - 0.5 * deltaTime; // Rotate opposite direction
          
          return {
            ...icon,
            x: newX,
            rotation: newRotation
          };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  console.log('RightEdgeIconFlow: Rendering', icons.length, 'icons');

  return (
    <div className="absolute right-0 top-0 bottom-0 w-[20%] overflow-hidden pointer-events-none z-10">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute will-change-transform"
          style={{
            left: icon.x,
            top: icon.y,
            transform: `scale(${icon.scale}) rotate(${icon.rotation}deg)`,
            opacity: icon.opacity,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: icon.opacity,
            scale: icon.scale
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut"
          }}
        >
          <img 
            src={iconSources[icon.type as keyof typeof iconSources]}
            alt=""
            className="w-12 h-12 object-contain"
            style={{ 
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4)) drop-shadow(0 2px 6px rgba(184,134,11,0.3))',
              imageRendering: 'crisp-edges'
            }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
