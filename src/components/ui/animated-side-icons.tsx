
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
      // Left side - problems flowing toward center
      const leftIcons: AnimatedIcon[] = [
        {
          id: 'ghost-1',
          src: '/lovable-uploads/94f1bc06-3a18-4cae-a257-f8b89cec0533.png',
          alt: 'Ghost lead',
          startX: -50,
          startY: 100,
          endX: 300,
          endY: 200,
          duration: 8,
          delay: 0,
          size: 80
        },
        {
          id: 'clock-1',
          src: '/lovable-uploads/f9ea4515-3aea-409c-b4b1-2f393a00e80f.png',
          alt: 'Time waste',
          startX: -30,
          startY: 300,
          endX: 280,
          endY: 400,
          duration: 10,
          delay: 2,
          size: 70
        },
        {
          id: 'coin-1',
          src: '/lovable-uploads/5e2fb48f-fda0-4750-8932-cd0de0ad9297.png',
          alt: 'Money loss',
          startX: -60,
          startY: 500,
          endX: 320,
          endY: 600,
          duration: 9,
          delay: 4,
          size: 75
        },
        {
          id: 'ghost-2',
          src: '/lovable-uploads/94f1bc06-3a18-4cae-a257-f8b89cec0533.png',
          alt: 'Ghost lead',
          startX: -40,
          startY: 700,
          endX: 290,
          endY: 800,
          duration: 11,
          delay: 6,
          size: 85
        },
        {
          id: 'clock-2',
          src: '/lovable-uploads/f9ea4515-3aea-409c-b4b1-2f393a00e80f.png',
          alt: 'Time waste',
          startX: -25,
          startY: 150,
          endX: 275,
          endY: 250,
          duration: 7,
          delay: 8,
          size: 65
        }
      ];
      setIcons(leftIcons);
    } else {
      // Right side - solutions flowing from center outward
      const rightIcons: AnimatedIcon[] = [
        {
          id: 'deal-1',
          src: '/lovable-uploads/9b7d8ecc-065d-42a9-a772-fc48d1903c67.png',
          alt: 'Deal closed',
          startX: -250,
          startY: 150,
          endX: 100,
          endY: 100,
          duration: 8,
          delay: 1,
          size: 90
        },
        {
          id: 'profit-1',
          src: '/lovable-uploads/59675f16-e45d-4726-ad78-e0f57c866636.png',
          alt: 'Profit earned',
          startX: -280,
          startY: 350,
          endX: 120,
          endY: 300,
          duration: 10,
          delay: 3,
          size: 85
        },
        {
          id: 'calendar-1',
          src: '/lovable-uploads/1465df59-9d01-4f31-b906-a87ab19bb92a.png',
          alt: 'Calendar booking',
          startX: -260,
          startY: 550,
          endX: 110,
          endY: 500,
          duration: 9,
          delay: 5,
          size: 80
        },
        {
          id: 'deal-2',
          src: '/lovable-uploads/9b7d8ecc-065d-42a9-a772-fc48d1903c67.png',
          alt: 'Deal closed',
          startX: -270,
          startY: 750,
          endX: 130,
          endY: 700,
          duration: 11,
          delay: 7,
          size: 95
        },
        {
          id: 'calendar-2',
          src: '/lovable-uploads/1465df59-9d01-4f31-b906-a87ab19bb92a.png',
          alt: 'Calendar booking',
          startX: -240,
          startY: 200,
          endX: 90,
          endY: 150,
          duration: 7,
          delay: 9,
          size: 75
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
          className="absolute opacity-60"
          initial={{
            x: icon.startX,
            y: icon.startY,
            opacity: 0,
            scale: 0.8,
            rotate: -10
          }}
          animate={{
            x: icon.endX,
            y: icon.endY,
            opacity: [0, 0.7, 0.5, 0],
            scale: [0.8, 1, 0.9, 0.7],
            rotate: [side === 'left' ? -10 : 10, 0, side === 'left' ? 5 : -5]
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
          style={{
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
          }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full object-contain"
            style={{
              filter: side === 'left' 
                ? 'brightness(0.8) contrast(1.1) sepia(0.2)' 
                : 'brightness(1.1) contrast(1.2) saturate(1.3) hue-rotate(10deg)'
            }}
          />
        </motion.div>
      ))}
      
      {/* Gradient overlays for depth */}
      {side === 'left' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 pointer-events-none" />
      )}
      {side === 'right' && (
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20 pointer-events-none" />
      )}
    </div>
  );
}
