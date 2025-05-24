
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FlowingIcon {
  id: string;
  type: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
}

export function LeftEdgeIconFlow() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [isReady, setIsReady] = useState(false);

  const iconSources = {
    hourglass: '/lovable-uploads/83193ce6-4234-4e80-aa3e-8303138086ed.png',
    coin: '/lovable-uploads/407183a3-e389-4e77-8a09-ce67efb564d3.png',
    handshake: '/lovable-uploads/3ab5d070-aa02-423c-b5cb-d5701c8089f1.png'
  };

  const iconTypes = ['hourglass', 'coin', 'handshake'];

  // Create initial icons immediately
  useEffect(() => {
    console.log('LeftEdgeIconFlow: Initializing...');
    
    const initialIcons: FlowingIcon[] = [];
    for (let i = 0; i < 3; i++) {
      const icon = {
        id: `left-initial-${i}`,
        type: iconTypes[i % iconTypes.length],
        x: -80,
        y: 150 + (i * 200),
        scale: 0.8,
        rotation: 0,
        opacity: 0.7
      };
      initialIcons.push(icon);
      console.log('LeftEdgeIconFlow: Created initial icon', icon);
    }
    
    setIcons(initialIcons);
    setIsReady(true);
    console.log('LeftEdgeIconFlow: Set initial icons count:', initialIcons.length);
  }, []);

  // Simple animation loop
  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      setIcons(prevIcons => {
        return prevIcons.map(icon => ({
          ...icon,
          x: icon.x + 1,
          rotation: icon.rotation + 1
        })).filter(icon => icon.x < window.innerWidth * 0.3);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isReady]);

  // Add new icons periodically
  useEffect(() => {
    if (!isReady) return;

    const spawnInterval = setInterval(() => {
      const newIcon = {
        id: `left-${Date.now()}`,
        type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        x: -80,
        y: Math.random() * (window.innerHeight - 200) + 100,
        scale: 0.6 + Math.random() * 0.4,
        rotation: 0,
        opacity: 0.5 + Math.random() * 0.3
      };

      console.log('LeftEdgeIconFlow: Adding new icon', newIcon);
      
      setIcons(prevIcons => [...prevIcons, newIcon]);
    }, 2000);

    return () => clearInterval(spawnInterval);
  }, [isReady]);

  console.log('LeftEdgeIconFlow: Rendering with icons count:', icons.length);

  return (
    <div className="fixed left-0 top-0 bottom-0 w-[25%] overflow-hidden pointer-events-none z-[5]">
      <div className="relative w-full h-full">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute"
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
              duration: 0.5, 
              ease: "easeOut"
            }}
          >
            <img 
              src={iconSources[icon.type as keyof typeof iconSources]}
              alt=""
              className="w-16 h-16 object-contain"
              style={{ 
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4)) brightness(1.2)',
                imageRendering: 'crisp-edges'
              }}
              onLoad={() => console.log('LeftEdgeIconFlow: Image loaded for', icon.type)}
              onError={() => console.log('LeftEdgeIconFlow: Image failed to load for', icon.type)}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Debug indicator */}
      <div className="absolute top-4 left-4 text-white text-xs bg-red-500 px-2 py-1 rounded z-10">
        Left Icons: {icons.length}
      </div>
    </div>
  );
}
