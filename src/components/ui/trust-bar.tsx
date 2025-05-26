
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
    <div className="w-full bg-[#171717] border-t border-white/10 py-6 overflow-hidden relative">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container */}
      <div className="flex">
        {/* First set of badges */}
        <motion.div
          className="flex items-center space-x-12 whitespace-nowrap"
          animate={{
            x: [0, -100 * badges.length - 48 * (badges.length - 1)]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {badges.map((badge, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="text-[#efcc8a] text-sm font-medium tracking-wide px-6 py-2 border border-[#efcc8a]/20 rounded-full bg-[#efcc8a]/5 backdrop-blur-sm">
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate set for seamless loop */}
        <motion.div
          className="flex items-center space-x-12 whitespace-nowrap ml-12"
          animate={{
            x: [0, -100 * badges.length - 48 * (badges.length - 1)]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {badges.map((badge, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="text-[#efcc8a] text-sm font-medium tracking-wide px-6 py-2 border border-[#efcc8a]/20 rounded-full bg-[#efcc8a]/5 backdrop-blur-sm">
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
