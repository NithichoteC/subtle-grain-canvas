
"use client";

import { motion } from "framer-motion";

export function TrustBar() {
  const badges = [
    "End-to-End Appointment Delivery",
    "No Hidden Fees", 
    "GDPR-Compliant Data Handling",
    "Real-Time Lead Dashboard",
    "Founder-Led Support"
  ];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Enhanced background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-[#1a1a1a] to-[#171717]"></div>
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Subtle bronze accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#efcc8a]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#efcc8a]/10 to-transparent"></div>
      
      {/* Main content area */}
      <div className="relative border-t border-b border-white/5 py-4">
        {/* Elegant gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex">
          {/* First set of badges */}
          <motion.div
            className="flex items-center space-x-8 whitespace-nowrap"
            animate={{
              x: [0, -100 * badges.length - 32 * (badges.length - 1)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {badges.map((badge, index) => (
              <div key={`first-${index}`} className="flex items-center">
                <span className="text-[#efcc8a]/80 text-sm font-light tracking-[0.05em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-1 h-1 bg-[#efcc8a]/40 rounded-full ml-8" />
                )}
              </div>
            ))}
          </motion.div>
          
          {/* Duplicate set for seamless loop */}
          <motion.div
            className="flex items-center space-x-8 whitespace-nowrap ml-8"
            animate={{
              x: [0, -100 * badges.length - 32 * (badges.length - 1)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {badges.map((badge, index) => (
              <div key={`second-${index}`} className="flex items-center">
                <span className="text-[#efcc8a]/80 text-sm font-light tracking-[0.05em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-1 h-1 bg-[#efcc8a]/40 rounded-full ml-8" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
