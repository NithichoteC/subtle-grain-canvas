
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
      {/* Solid bronze background to cover grid pattern */}
      <div className="absolute inset-0 bg-[#cd7f32]/30"></div>
      
      {/* Minimal bronze accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/40"></div>
      
      {/* Main content area */}
      <div className="relative py-2">
        {/* Bronze fade edges that match the background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#cd7f32]/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#cd7f32]/30 to-transparent z-10 pointer-events-none" />
        
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
                <span className="text-[#efcc8a]/85 text-xs font-light tracking-[0.08em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-0.5 h-0.5 bg-[#efcc8a]/45 rounded-full ml-6" />
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
                <span className="text-[#efcc8a]/85 text-xs font-light tracking-[0.08em] uppercase">
                  {badge}
                </span>
                {index < badges.length - 1 && (
                  <div className="w-0.5 h-0.5 bg-[#efcc8a]/45 rounded-full ml-6" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
