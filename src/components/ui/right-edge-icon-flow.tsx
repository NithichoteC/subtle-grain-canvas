
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

export function RightEdgeIconFlow() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [isReady, setIsReady] = useState(false);

  const iconSources = {
    calendar: '/lovable-uploads/d5947268-f6d0-4381-80c3-d132d1a3ccad.png',
    'money-bag': '/lovable-uploads/d1d8d9ab-3490-4ef3-b8a8-03feed07ec59.png',
    ghost: '/lovable-uploads/ef32e710-bc09-423e-b553-5c7815ccd0b0.png'
  };

  const iconTypes = ['calendar', 'money-bag', 'ghost'];

  // Create initial icons immediately
  useEffect(() => {
    console.log('RightEdgeIconFlow: Initializing...');
    
    const initialIcons: FlowingIcon[] = [];
    for (let i = 0; i < 3; i++) {
      const icon = {
        id: `right-initial-${i}`,
        type: iconTypes[i % iconTypes.length],
        x: window.innerWidth + 80,
        y: 150 + (i * 200),
        scale: 0.8,
        rotation: 0,
        opacity: 0.7
      };
      initialIcons.push(icon);
      console.log('RightEdgeIconFlow: Created initial icon', icon);
    }
    
    setIcons(initialIcons);
    setIsReady(true);
    console.log('RightEdgeIconFlow: Set initial icons count:', initialIcons.length);
  }, []);

  // Simple animation loop
  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      setIcons(prevIcons => {
        return prevIcons.map(icon => ({
          ...icon,
          x: icon.x - 1,
          rotation: icon.rotation - 1
        })).filter(icon => icon.x > window.innerWidth * 0.7);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isReady]);

  // Add new icons periodically
  useEffect(() => {
    if (!isReady) return;

    const spawnInterval = setInterval(() => {
      const newIcon = {
        id: `right-${Date.now()}`,
        type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        x: window.innerWidth + 80,
        y: Math.random() * (window.innerHeight - 200) + 100,
        scale: 0.6 + Math.random() * 0.4,
        rotation: 0,
        opacity: 0.5 + Math.random() * 0.3
      };

      console.log('RightEdgeIconFlow: Adding new icon', newIcon);
      
      setIcons(prevIcons => [...prevIcons, newIcon]);
    }, 2500);

    return () => clearInterval(spawnInterval);
  }, [isReady]);

  console.log('RightEdgeIconFlow: Rendering with icons count:', icons.length);

  return (
    <div className="fixed right-0 top-0 bottom-0 w-[25%] overflow-hidden pointer-events-none z-[5]">
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
              onLoad={() => console.log('RightEdgeIconFlow: Image loaded for', icon.type)}
              onError={() => console.log('RightEdgeIconFlow: Image failed to load for', icon.type)}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Debug indicator */}
      <div className="absolute top-4 right-4 text-white text-xs bg-blue-500 px-2 py-1 rounded z-10">
        Right Icons: {icons.length}
      </div>
    </div>
  );
}
