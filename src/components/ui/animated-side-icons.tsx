
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
      // Left side - problems flowing from left edge toward center
      const leftIcons: AnimatedIcon[] = [
        {
          id: 'ghost-1',
          src: '/lovable-uploads/94f1bc06-3a18-4cae-a257-f8b89cec0533.png',
          alt: 'Ghost lead',
          startX: -150,
          startY: 120,
          endX: 350,
          endY: 180,
          duration: 14,
          delay: 0,
          size: 120
        },
        {
          id: 'clock-1',
          src: '/lovable-uploads/f9ea4515-3aea-409c-b4b1-2f393a00e80f.png',
          alt: 'Time waste',
          startX: -180,
          startY: 320,
          endX: 380,
          endY: 380,
          duration: 16,
          delay: 4,
          size: 110
        },
        {
          id: 'coin-1',
          src: '/lovable-uploads/5e2fb48f-fda0-4750-8932-cd0de0ad9297.png',
          alt: 'Money loss',
          startX: -160,
          startY: 520,
          endX: 360,
          endY: 580,
          duration: 15,
          delay: 8,
          size: 115
        },
        {
          id: 'ghost-2',
          src: '/lovable-uploads/94f1bc06-3a18-4cae-a257-f8b89cec0533.png',
          alt: 'Ghost lead',
          startX: -170,
          startY: 720,
          endX: 370,
          endY: 780,
          duration: 17,
          delay: 12,
          size: 125
        },
        {
          id: 'clock-2',
          src: '/lovable-uploads/f9ea4515-3aea-409c-b4b1-2f393a00e80f.png',
          alt: 'Time waste',
          startX: -140,
          startY: 220,
          endX: 340,
          endY: 280,
          duration: 13,
          delay: 16,
          size: 105
        }
      ];
      setIcons(leftIcons);
    } else {
      // Right side - solutions flowing from center toward right edge
      const rightIcons: AnimatedIcon[] = [
        {
          id: 'deal-1',
          src: '/lovable-uploads/9b7d8ecc-065d-42a9-a772-fc48d1903c67.png',
          alt: 'Deal closed',
          startX: 250,
          startY: 150,
          endX: 500,
          endY: 120,
          duration: 14,
          delay: 2,
          size: 130
        },
        {
          id: 'profit-1',
          src: '/lovable-uploads/59675f16-e45d-4726-ad78-e0f57c866636.png',
          alt: 'Profit earned',
          startX: 220,
          startY: 350,
          endX: 520,
          endY: 320,
          duration: 16,
          delay: 6,
          size: 120
        },
        {
          id: 'calendar-1',
          src: '/lovable-uploads/1465df59-9d01-4f31-b906-a87ab19bb92a.png',
          alt: 'Calendar booking',
          startX: 240,
          startY: 550,
          endX: 510,
          endY: 520,
          duration: 15,
          delay: 10,
          size: 115
        },
        {
          id: 'deal-2',
          src: '/lovable-uploads/9b7d8ecc-065d-42a9-a772-fc48d1903c67.png',
          alt: 'Deal closed',
          startX: 230,
          startY: 750,
          endX: 530,
          endY: 720,
          duration: 17,
          delay: 14,
          size: 135
        },
        {
          id: 'calendar-2',
          src: '/lovable-uploads/1465df59-9d01-4f31-b906-a87ab19bb92a.png',
          alt: 'Calendar booking',
          startX: 260,
          startY: 250,
          endX: 490,
          endY: 220,
          duration: 13,
          delay: 18,
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
            rotate: side === 'left' ? -10 : 10
          }}
          animate={{
            x: icon.endX,
            y: icon.endY,
            opacity: [0, 1, 1, 1, 0],
            scale: [1, 1, 1, 1, 1],
            rotate: [side === 'left' ? -10 : 10, 0, side === 'left' ? 5 : -5, 0, side === 'left' ? 8 : -8]
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
            times: [0, 0.2, 0.7, 0.9, 1]
          }}
          style={{
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))'
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 pointer-events-none" />
      )}
      {side === 'right' && (
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20 pointer-events-none" />
      )}
    </div>
  );
}
