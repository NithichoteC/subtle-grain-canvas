
"use client";

import { motion } from "framer-motion";
import { NoiseTexture } from '@/components/ui/noise-texture';
import { colors, noiseConfigs } from '@/lib/design-tokens';

export function TrustBar() {
  const badges = [
    "End-to-End Appointment Delivery",
    "No Hidden Fees", 
    "GDPR-Compliant Data Handling",
    "Real-Time Lead Dashboard",
    "Founder-Led Support"
  ];

  // Calculate total width needed for one complete set
  const singleSetWidth = badges.length * 100 + (badges.length - 1) * 24; // Approximate width

  return (
    <div className="w-full relative overflow-hidden">
      {/* Darker bronze background - 100% opacity */}
      <div className="absolute inset-0" style={{ backgroundColor: '#6B4E0C' }}>
        {/* Animated noise texture that moves with the text */}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: [0, -singleSetWidth]
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
          <NoiseTexture 
            {...noiseConfigs.hero} 
            opacity={0.15}
            backgroundSize="300px 300px"
          />
        </motion.div>
      </div>
      
      {/* Minimal bronze accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/60"></div>
      
      {/* Main content area */}
      <div className="relative py-2">
        {/* Bronze fade edges that match the background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#6B4E0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#6B4E0C] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container with multiple sets for seamless coverage */}
        <div className="flex">
          {/* Multiple sets to ensure coverage on all screen sizes */}
          {[...Array(6)].map((_, setIndex) => (
            <motion.div
              key={setIndex}
              className="flex items-center space-x-6 whitespace-nowrap"
              style={{ marginLeft: setIndex > 0 ? '24px' : '0' }}
              animate={{
                x: [0, -singleSetWidth]
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
                <div key={`set-${setIndex}-${index}`} className="flex items-center">
                  <span className="text-[#efcc8a]/90 text-xs font-light tracking-[0.08em] uppercase">
                    {badge}
                  </span>
                  {/* Always add dot after each badge except we'll handle it differently */}
                  <div className="w-0.5 h-0.5 bg-[#efcc8a]/50 rounded-full ml-6" />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
