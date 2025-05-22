
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function FloatingElements() {
  // Define various floating elements with different positions and animations
  const elements = [
    // Right side large subtle glow
    {
      id: 1,
      className: "absolute top-[25%] -right-20 w-60 h-60 rounded-full opacity-10 bg-gradient-to-r from-[#FFC94D] to-transparent blur-3xl",
      animation: {
        y: [0, 15, 0],
        opacity: [0.1, 0.15, 0.1],
      }
    },
    // Left side medium glow
    {
      id: 2,
      className: "absolute top-[60%] -left-10 w-40 h-40 rounded-full opacity-5 bg-gradient-to-l from-[#FFC94D] to-transparent blur-2xl",
      animation: {
        y: [0, -20, 0],
        opacity: [0.05, 0.09, 0.05],
      }
    },
    // Top center subtle line
    {
      id: 3,
      className: "absolute top-[15%] left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent",
      animation: {
        scaleY: [0.8, 1.2, 0.8],
        opacity: [0.07, 0.1, 0.07],
      }
    },
    // Bottom left subtle dot group
    {
      id: 4,
      className: "absolute bottom-[10%] left-[15%] w-40 h-40",
      animation: {
        rotate: [0, 10, 0],
        scale: [0.98, 1.02, 0.98],
      },
      children: (
        <>
          <div className="absolute left-0 top-0 w-1 h-1 rounded-full bg-white/20"></div>
          <div className="absolute left-8 top-3 w-[2px] h-[2px] rounded-full bg-white/15"></div>
          <div className="absolute left-12 top-10 w-1 h-1 rounded-full bg-white/20"></div>
        </>
      )
    },
    // Bottom right subtle dot group
    {
      id: 5,
      className: "absolute bottom-[20%] right-[20%] w-40 h-40",
      animation: {
        rotate: [0, -5, 0],
        scale: [0.95, 1.05, 0.95],
      },
      children: (
        <>
          <div className="absolute right-0 top-0 w-[3px] h-[3px] rounded-full bg-[#FFC94D]/30"></div>
          <div className="absolute right-10 top-8 w-[1px] h-[1px] rounded-full bg-[#FFC94D]/20"></div>
          <div className="absolute right-6 top-14 w-[2px] h-[2px] rounded-full bg-[#FFC94D]/30"></div>
        </>
      )
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={element.className}
          animate={element.animation}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          {element.children}
        </motion.div>
      ))}
    </div>
  );
}
