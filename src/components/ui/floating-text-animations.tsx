
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingText {
  id: string;
  text: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  fontSize: string;
  opacity: number;
}

interface FloatingTextAnimationsProps {
  side: 'left' | 'right';
}

export function FloatingTextAnimations({ side }: FloatingTextAnimationsProps) {
  const [texts, setTexts] = useState<FloatingText[]>([]);

  useEffect(() => {
    if (side === 'left') {
      // Left side - problems flowing from left edge toward center
      const leftTexts: FloatingText[] = [
        {
          id: 'ghost-leads',
          text: 'Ghost Leads',
          startX: -200,
          startY: 150,
          endX: 250,
          endY: 200,
          duration: 18,
          delay: 0,
          fontSize: 'text-lg',
          opacity: 0.7
        },
        {
          id: 'tire-kickers',
          text: 'Tire Kickers',
          startX: -180,
          startY: 300,
          endX: 270,
          endY: 350,
          duration: 20,
          delay: 4,
          fontSize: 'text-base',
          opacity: 0.6
        },
        {
          id: 'wasted-ad-spend',
          text: 'Wasted Ad Spend',
          startX: -220,
          startY: 450,
          endX: 230,
          endY: 500,
          duration: 19,
          delay: 8,
          fontSize: 'text-xl',
          opacity: 0.8
        },
        {
          id: 'no-shows',
          text: 'No-Shows',
          startX: -190,
          startY: 600,
          endX: 260,
          endY: 650,
          duration: 17,
          delay: 12,
          fontSize: 'text-lg',
          opacity: 0.7
        },
        {
          id: 'unqualified-leads',
          text: 'Unqualified Leads',
          startX: -210,
          startY: 750,
          endX: 240,
          endY: 800,
          duration: 21,
          delay: 16,
          fontSize: 'text-base',
          opacity: 0.6
        },
        {
          id: 'time-waste',
          text: 'Time Waste',
          startX: -170,
          startY: 250,
          endX: 280,
          endY: 300,
          duration: 16,
          delay: 20,
          fontSize: 'text-lg',
          opacity: 0.7
        }
      ];
      setTexts(leftTexts);
    } else {
      // Right side - solutions flowing from center toward right edge
      const rightTexts: FloatingText[] = [
        {
          id: 'qualified-leads',
          text: 'Qualified Leads',
          startX: 200,
          startY: 180,
          endX: 450,
          endY: 150,
          duration: 18,
          delay: 2,
          fontSize: 'text-lg',
          opacity: 0.8
        },
        {
          id: 'instant-bookings',
          text: 'Instant Bookings',
          startX: 220,
          startY: 330,
          endX: 470,
          endY: 300,
          duration: 20,
          delay: 6,
          fontSize: 'text-base',
          opacity: 0.7
        },
        {
          id: 'roi-growth',
          text: 'ROI Growth',
          startX: 180,
          startY: 480,
          endX: 430,
          endY: 450,
          duration: 19,
          delay: 10,
          fontSize: 'text-xl',
          opacity: 0.9
        },
        {
          id: 'decision-makers',
          text: 'Decision Makers',
          startX: 210,
          startY: 630,
          endX: 460,
          endY: 600,
          duration: 17,
          delay: 14,
          fontSize: 'text-lg',
          opacity: 0.8
        },
        {
          id: 'pre-vetted-prospects',
          text: 'Pre-Vetted Prospects',
          startX: 190,
          startY: 780,
          endX: 440,
          endY: 750,
          duration: 21,
          delay: 18,
          fontSize: 'text-base',
          opacity: 0.7
        },
        {
          id: 'closed-deals',
          text: 'Closed Deals',
          startX: 230,
          startY: 280,
          endX: 480,
          endY: 250,
          duration: 16,
          delay: 22,
          fontSize: 'text-lg',
          opacity: 0.8
        }
      ];
      setTexts(rightTexts);
    }
  }, [side]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {texts.map((textItem) => (
        <motion.div
          key={textItem.id}
          className={`absolute ${textItem.fontSize} font-medium tracking-wide font-roboto select-none`}
          initial={{
            x: textItem.startX,
            y: textItem.startY,
            opacity: 0,
            scale: 0.8,
            rotate: side === 'left' ? -5 : 5
          }}
          animate={{
            x: textItem.endX,
            y: textItem.endY,
            opacity: [0, textItem.opacity, textItem.opacity, textItem.opacity, 0],
            scale: [0.8, 1, 1, 1, 0.9],
            rotate: [side === 'left' ? -5 : 5, 0, side === 'left' ? 2 : -2, 0, side === 'left' ? 3 : -3]
          }}
          transition={{
            duration: textItem.duration,
            delay: textItem.delay,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeInOut",
            times: [0, 0.2, 0.6, 0.8, 1]
          }}
          style={{
            color: side === 'left' 
              ? 'rgba(239, 68, 68, 0.6)' // Red tint for problems
              : 'rgba(34, 197, 94, 0.7)', // Green tint for solutions
            textShadow: side === 'left' 
              ? '0 2px 8px rgba(239, 68, 68, 0.2)' 
              : '0 2px 8px rgba(34, 197, 94, 0.2)',
            filter: 'blur(0.5px)'
          }}
        >
          {textItem.text}
        </motion.div>
      ))}
      
      {/* Enhanced gradient overlays for better text contrast */}
      {side === 'left' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 pointer-events-none" />
      )}
      {side === 'right' && (
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/30 pointer-events-none" />
      )}
    </div>
  );
}
