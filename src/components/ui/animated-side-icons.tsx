
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedIcon {
  id: string;
  src: string;
  alt: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  size: number;
}

interface AnimatedSideIconsProps {
  side: 'left' | 'right';
}

export function AnimatedSideIcons({ side }: AnimatedSideIconsProps) {
  const [icons, setIcons] = useState<AnimatedIcon[]>([]);

  useEffect(() => {
    if (side === 'left') {
      // Left side - problems flowing toward center (problems moving from left edge toward center)
      const leftIcons: AnimatedIcon[] = [
        {
          id: 'ghost-1',
          src: '/lovable-uploads/94f1bc06-3a18-4cae-a257-f8b89cec0533.png',
          alt: 'Ghost lead',
          startX: 50,
          startY: 120,
          endX: 400,
          endY: 180,
          duration: 12,
          delay: 0,
          size: 120
        },
        {
          id: 'clock-1',
          src: '/lovable-uploads/f9ea4515-3aea-409c-b4b1-2f393a00e80f.png',
          alt: 'Time waste',
          startX: 80,
          startY: 320,
          endX: 420,
          endY: 380,
          duration: 14,
          delay: 3,
          size: 110
        },
        {
          id: 'coin-1',
          src: '/lovable-uploads/5e2fb48f-fda0-4750-8932-cd0de0ad9297.png',
          alt: 'Money loss',
          startX: 60,
          startY: 520,
          endX: 410,
          endY: 580,
          duration: 13,
          delay: 6,
          size: 115
        },
        {
          id: 'ghost-2',
          src: '/lovable-uploads/94f1bc06-3a18-4cae-a257-f8b89cec0533.png',
          alt: 'Ghost lead',
          startX: 70,
          startY: 720,
          endX: 430,
          endY: 780,
          duration: 15,
          delay: 9,
          size: 125
        },
        {
          id: 'clock-2',
          src: '/lovable-uploads/f9ea4515-3aea-409c-b4b1-2f393a00e80f.png',
          alt: 'Time waste',
          startX: 90,
          startY: 220,
          endX: 440,
          endY: 280,
          duration: 11,
          delay: 12,
          size: 105
        }
      ];
      setIcons(leftIcons);
    } else {
      // Right side - solutions flowing from center outward (solutions appearing from center and flowing toward right edge)
      const rightIcons: AnimatedIcon[] = [
        {
          id: 'deal-1',
          src: '/lovable-uploads/9b7d8ecc-065d-42a9-a772-fc48d1903c67.png',
          alt: 'Deal closed',
          startX: -350,
          startY: 150,
          endX: 80,
          endY: 120,
          duration: 12,
          delay: 2,
          size: 130
        },
        {
          id: 'profit-1',
          src: '/lovable-uploads/59675f16-e45d-4726-ad78-e0f57c866636.png',
          alt: 'Profit earned',
          startX: -380,
          startY: 350,
          endX: 90,
          endY: 320,
          duration: 14,
          delay: 5,
          size: 120
        },
        {
          id: 'calendar-1',
          src: '/lovable-uploads/1465df59-9d01-4f31-b906-a87ab19bb92a.png',
          alt: 'Calendar booking',
          startX: -360,
          startY: 550,
          endX: 100,
          endY: 520,
          duration: 13,
          delay: 8,
          size: 115
        },
        {
          id: 'deal-2',
          src: '/lovable-uploads/9b7d8ecc-065d-42a9-a772-fc48d1903c67.png',
          alt: 'Deal closed',
          startX: -370,
          startY: 750,
          endX: 110,
          endY: 720,
          duration: 15,
          delay: 11,
          size: 135
        },
        {
          id: 'calendar-2',
          src: '/lovable-uploads/1465df59-9d01-4f31-b906-a87ab19bb92a.png',
          alt: 'Calendar booking',
          startX: -340,
          startY: 250,
          endX: 70,
          endY: 220,
          duration: 11,
          delay: 14,
          size: 110
        }
      ];
      setIcons(rightIcons);
    }
  }, [side]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          initial={{
            x: icon.startX,
            y: icon.startY,
            opacity: 0,
            scale: 1,
            rotate: side === 'left' ? -15 : 15
          }}
          animate={{
            x: icon.endX,
            y: icon.endY,
            opacity: [0, 0.8, 0.6, 0],
            scale: [1, 1, 1, 1], // Keep stable size throughout animation
            rotate: [side === 'left' ? -15 : 15, 0, side === 'left' ? 10 : -10]
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
          style={{
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))'
          }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full object-contain"
            style={{
              filter: side === 'left' 
                ? 'brightness(0.7) contrast(1.2) sepia(0.3) saturate(0.8)' 
                : 'brightness(1.2) contrast(1.3) saturate(1.4) hue-rotate(15deg)'
            }}
          />
        </motion.div>
      ))}
      
      {/* Enhanced gradient overlays for better depth */}
      {side === 'left' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 pointer-events-none" />
      )}
      {side === 'right' && (
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/30 pointer-events-none" />
      )}
    </div>
  );
}
