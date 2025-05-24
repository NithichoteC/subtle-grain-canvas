
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

export function LeftEdgeIconFlow() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const iconSources = {
    hourglass: '/lovable-uploads/83193ce6-4234-4e80-aa3e-8303138086ed.png',
    coin: '/lovable-uploads/407183a3-e389-4e77-8a09-ce67efb564d3.png',
    handshake: '/lovable-uploads/3ab5d070-aa02-423c-b5cb-d5701c8089f1.png'
  };

  const iconTypes = ['hourglass', 'coin', 'handshake'];

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
      id: `left-${Date.now()}-${Math.random()}`,
      type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: -100, // Start further off-screen to the left
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
        // Remove icons that have moved past the boundary (20% of screen width)
        const leftBoundary = dimensions.width * 0.2;
        const filteredIcons = prevIcons.filter(icon => icon.x < leftBoundary + 100);
        
        // Add new icon
        return [...filteredIcons, createIcon()];
      });
    }, 600); // Faster spawning for more continuous flow

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
          const newX = icon.x + (icon.speed * deltaTime);
          const newRotation = icon.rotation + 0.5 * deltaTime;
          
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

  console.log('LeftEdgeIconFlow: Rendering', icons.length, 'icons');

  return (
    <div className="absolute left-0 top-0 bottom-0 w-[20%] overflow-hidden pointer-events-none z-10">
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
