
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
      {/* Consistent bronze background throughout */}
      <div className="absolute inset-0 bg-[#cd7f32]/12"></div>
      
      {/* Minimal bronze accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/25"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/25"></div>
      
      {/* Main content area */}
      <div className="relative py-2">
        {/* Subtle bronze fade edges instead of black */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#cd7f32]/12 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#cd7f32]/12 to-transparent z-10 pointer-events-none" />
        
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
                <span className="text-[#efcc8a]/75 text-xs font-light tracking-[0.08em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-0.5 h-0.5 bg-[#efcc8a]/35 rounded-full ml-6" />
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
                <span className="text-[#efcc8a]/75 text-xs font-light tracking-[0.08em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-0.5 h-0.5 bg-[#efcc8a]/35 rounded-full ml-6" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
