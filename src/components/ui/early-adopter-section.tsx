
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { BarChart3, Crown, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function EarlyAdopterSection() {
  const features = [
    {
      title: "48-Hour AI Implementation",
      description: "Complete AI lead qualification system deployed and optimized for your specific market within 48 hours.",
      metric: "48hrs",
      metricLabel: "Setup Time",
      icon: <Zap className="w-6 h-6" />,
      number: "01",
      size: "large"
    },
    {
      title: "Weekly 1:1 Strategy Sessions",
      description: "Private optimization calls with our AI specialists to maximize your conversion rates and ROI.",
      metric: "4x",
      metricLabel: "Average ROI",
      icon: <BarChart3 className="w-6 h-6" />,
      number: "02",
      size: "medium"
    },
    {
      title: "Real-Time Lead Intelligence",
      description: "Live dashboard showing every lead interaction, qualification score, and conversion opportunity.",
      metric: "100%",
      metricLabel: "Transparency",
      icon: <Shield className="w-6 h-6" />,
      number: "03",
      size: "medium"
    },
    {
      title: "Founding Partner Privileges",
      description: "Direct access to our team, priority feature requests, and lifetime pricing protection.",
      metric: "24/7",
      metricLabel: "VIP Support",
      icon: <Crown className="w-6 h-6" />,
      number: "04",
      size: "large"
    },
  ];

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Full-width asymmetric bento grid with proper borders */}
      <div className="w-full relative z-10">
        {/* Header Block - full width with matching borders */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border-l border-r border-b border-white/10 p-12 bg-[#171717] relative"
        >
          {/* Texture background for header block */}
          <div 
            className="absolute inset-0 opacity-[0.12]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
          
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#efcc8a]/20 bg-[#efcc8a]/5">
              <Crown className="w-4 h-4 text-[#efcc8a]" />
              <span className="text-sm font-medium text-[#efcc8a] tracking-wider">FOUNDING PARTNER PROGRAM</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bronze-gradient-fix">Become Our</span>{" "}
              <span className="text-white">Founding Partner</span>
            </h2>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Join an exclusive group of 50 solar & roofing leaders who get priority access, 
              personalized support, and help shape the future of AI-powered lead generation.
            </p>
            
            {/* Progress indicator */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-20 h-1 bg-[#efcc8a] rounded-full"></div>
                <span className="text-[#efcc8a] text-sm font-medium">13 spots remaining</span>
                <div className="w-8 h-1 bg-white/20 rounded-full"></div>
              </div>
              <p className="text-white/40 text-xs">Limited founding partner positions</p>
            </div>
          </div>
        </motion.div>

        {/* Improved Asymmetric Bento Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr border-l border-r border-white/10">
          {/* Large Feature Block 1 - spans 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="lg:col-span-2 border-b border-white/10 lg:border-r"
          >
            <Magnetic 
              intensity={0.03} 
              rangeX={80} 
              rangeY={40} 
              actionArea="self" 
              shape="rectangular"
              springOptions={{
                stiffness: 150,
                damping: 20,
                mass: 0.4
              }}
            >
              <div className="relative h-full p-8 lg:p-12 bg-[#171717] transition-all duration-500 hover:bg-[#1a1a1a] group min-h-[300px]">
                {/* Texture background */}
                <div 
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.15] transition-opacity duration-500" 
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}
                ></div>
                
                {/* Block number */}
                <div className="absolute top-6 right-8 text-7xl lg:text-8xl font-bold text-white/[0.06] group-hover:text-[#efcc8a]/[0.12] transition-colors duration-500">
                  {features[0].number}
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6 max-w-lg">
                  {/* Icon */}
                  <motion.div 
                    className="text-[#efcc8a] group-hover:text-[#efcc8a] transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {features[0].icon}
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {features[0].title}
                  </h3>
                  
                  <p className="text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {features[0].description}
                  </p>
                  
                  {/* Metric display */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl lg:text-4xl font-bold text-[#efcc8a]">{features[0].metric}</span>
                      <span className="text-sm text-white/50 uppercase tracking-wider">{features[0].metricLabel}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#efcc8a]/60 group-hover:text-[#efcc8a] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Subtle hover border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border border-[#efcc8a]/10"></div>
                </div>
              </div>
            </Magnetic>
          </motion.div>

          {/* Medium Feature Block - right side, top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="border-b border-white/10"
          >
            <Magnetic 
              intensity={0.03} 
              rangeX={60} 
              rangeY={30} 
              actionArea="self" 
              shape="rectangular"
              springOptions={{
                stiffness: 150,
                damping: 20,
                mass: 0.4
              }}
            >
              <div className="relative h-full p-6 lg:p-8 bg-[#171717] transition-all duration-500 hover:bg-[#1a1a1a] group min-h-[300px]">
                {/* Texture background */}
                <div 
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.15] transition-opacity duration-500" 
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}
                ></div>
                
                {/* Block number */}
                <div className="absolute top-4 right-6 text-5xl lg:text-6xl font-bold text-white/[0.06] group-hover:text-[#efcc8a]/[0.12] transition-colors duration-500">
                  {features[1].number}
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div 
                    className="text-[#efcc8a] group-hover:text-[#efcc8a] transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {features[1].icon}
                  </motion.div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {features[1].title}
                  </h3>
                  
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {features[1].description}
                  </p>
                  
                  {/* Metric display */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#efcc8a]">{features[1].metric}</span>
                      <span className="text-xs text-white/50 uppercase tracking-wider">{features[1].metricLabel}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#efcc8a]/60 group-hover:text-[#efcc8a] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Subtle hover border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border border-[#efcc8a]/10"></div>
                </div>
              </div>
            </Magnetic>
          </motion.div>

          {/* Medium Feature Block 2 - left side, bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="border-b border-white/10 lg:border-r"
          >
            <Magnetic 
              intensity={0.03} 
              rangeX={60} 
              rangeY={30} 
              actionArea="self" 
              shape="rectangular"
              springOptions={{
                stiffness: 150,
                damping: 20,
                mass: 0.4
              }}
            >
              <div className="relative h-full p-6 lg:p-8 bg-[#171717] transition-all duration-500 hover:bg-[#1a1a1a] group min-h-[300px]">
                {/* Texture background */}
                <div 
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.15] transition-opacity duration-500" 
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}
                ></div>
                
                {/* Block number */}
                <div className="absolute top-4 right-6 text-5xl lg:text-6xl font-bold text-white/[0.06] group-hover:text-[#efcc8a]/[0.12] transition-colors duration-500">
                  {features[2].number}
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div 
                    className="text-[#efcc8a] group-hover:text-[#efcc8a] transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {features[2].icon}
                  </motion.div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {features[2].title}
                  </h3>
                  
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {features[2].description}
                  </p>
                  
                  {/* Metric display */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#efcc8a]">{features[2].metric}</span>
                      <span className="text-xs text-white/50 uppercase tracking-wider">{features[2].metricLabel}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#efcc8a]/60 group-hover:text-[#efcc8a] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Subtle hover border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border border-[#efcc8a]/10"></div>
                </div>
              </div>
            </Magnetic>
          </motion.div>

          {/* Large Feature Block 2 - right side, bottom, spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="lg:row-span-2 border-b border-white/10"
          >
            <Magnetic 
              intensity={0.03} 
              rangeX={80} 
              rangeY={40} 
              actionArea="self" 
              shape="rectangular"
              springOptions={{
                stiffness: 150,
                damping: 20,
                mass: 0.4
              }}
            >
              <div className="relative h-full p-8 lg:p-12 bg-[#171717] transition-all duration-500 hover:bg-[#1a1a1a] group min-h-[300px] lg:min-h-[400px]">
                {/* Texture background */}
                <div 
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.15] transition-opacity duration-500" 
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}
                ></div>
                
                {/* Block number */}
                <div className="absolute top-6 right-8 text-7xl lg:text-8xl font-bold text-white/[0.06] group-hover:text-[#efcc8a]/[0.12] transition-colors duration-500">
                  {features[3].number}
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6 max-w-sm">
                  {/* Icon */}
                  <motion.div 
                    className="text-[#efcc8a] group-hover:text-[#efcc8a] transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {features[3].icon}
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {features[3].title}
                  </h3>
                  
                  <p className="text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {features[3].description}
                  </p>
                  
                  {/* Metric display */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl lg:text-4xl font-bold text-[#efcc8a]">{features[3].metric}</span>
                      <span className="text-sm text-white/50 uppercase tracking-wider">{features[3].metricLabel}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#efcc8a]/60 group-hover:text-[#efcc8a] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Subtle hover border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border border-[#efcc8a]/10"></div>
                </div>
              </div>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
