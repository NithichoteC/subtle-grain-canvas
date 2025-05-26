
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
    <div className="w-full bg-[#171717] border-t border-white/5 py-4 overflow-hidden relative">
      {/* Subtle gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />
      
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
  );
}
