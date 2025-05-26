
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
      {/* Solid bronze background with static noise texture - exactly like the rest of the site */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: '#6B4E0C'
        }}
      >
        {/* Static noise texture overlay - exactly like TextureBackground */}
        <NoiseTexture {...noiseConfigs.hero} />
      </div>
      
      {/* Minimal bronze accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#efcc8a]/40"></div>
      
      {/* Main content area */}
      <div className="relative py-2">
        {/* Smooth gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#6B4E0C] via-[#6B4E0C]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#6B4E0C] via-[#6B4E0C]/90 to-transparent z-10 pointer-events-none" />
        
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
                  {/* Always add dot after each badge */}
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
