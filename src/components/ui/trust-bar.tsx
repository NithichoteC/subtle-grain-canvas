
import { motion } from "framer-motion";

export function TrustBar() {
  const trustBadges = [
    "End-to-End Appointment Delivery",
    "No Hidden Fees",
    "GDPR-Compliant Data Handling", 
    "Real-Time Lead Dashboard",
    "Founder-Led Support"
  ];

  // Duplicate the badges for seamless infinite scroll
  const duplicatedBadges = [...trustBadges, ...trustBadges];

  return (
    <div className="w-full bg-[#171717] border-t border-b border-white/10 relative overflow-hidden py-4">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Scrolling container */}
      <div className="relative">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-[#efcc8a] font-medium text-sm tracking-wide uppercase">
                {badge}
              </span>
              {/* Separator dot */}
              <div className="w-1 h-1 rounded-full bg-[#efcc8a]/40 flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient fade edges for smooth appearance */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#171717] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#171717] to-transparent pointer-events-none" />
    </div>
  );
}
