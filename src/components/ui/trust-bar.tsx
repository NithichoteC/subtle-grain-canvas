
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
      {/* Professional low-opacity background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-[#171717]/40 to-[#0a0a0a]/60"></div>
      
      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a1a1a]/20 via-transparent to-[#0f0f0f]/30"></div>
      
      {/* Ultra-subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}
      ></div>
      
      {/* Minimal bronze accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#efcc8a]/15 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#efcc8a]/8 to-transparent"></div>
      
      {/* Main content area */}
      <div className="relative py-2">
        {/* Clean gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex">
          {/* First set of badges */}
          <motion.div
            className="flex items-center space-x-6 whitespace-nowrap"
            animate={{
              x: [0, -100 * badges.length - 24 * (badges.length - 1)]
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
                <span className="text-[#efcc8a]/70 text-xs font-light tracking-[0.08em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-0.5 h-0.5 bg-[#efcc8a]/30 rounded-full ml-6" />
                )}
              </div>
            ))}
          </motion.div>
          
          {/* Duplicate set for seamless loop */}
          <motion.div
            className="flex items-center space-x-6 whitespace-nowrap ml-6"
            animate={{
              x: [0, -100 * badges.length - 24 * (badges.length - 1)]
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
                <span className="text-[#efcc8a]/70 text-xs font-light tracking-[0.08em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-0.5 h-0.5 bg-[#efcc8a]/30 rounded-full ml-6" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
