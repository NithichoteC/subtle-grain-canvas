
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { motion } from "framer-motion";
import { Brain, Calendar, BarChart3, ArrowDown } from "lucide-react";

export function CoreCapabilitiesSection() {
  const capabilities = [
    {
      title: "Intelligent Qualification",
      description: "AI ranks & prioritizes leads in seconds, eliminating manual sorting and ensuring only high-value prospects reach your team.",
      icon: <Brain className="w-10 h-10" />,
      placeholder: "🧠",
      iconConcepts: ["brain", "filter", "target"],
      width: "35%"
    },
    {
      title: "Instant Scheduling", 
      description: "Calls auto-book with decision-makers through our intelligent calendar system that prevents conflicts and optimizes timing.",
      icon: <Calendar className="w-10 h-10" />,
      placeholder: "📅",
      iconConcepts: ["calendar", "clock", "phone"],
      width: "30%",
      isMiddle: true
    },
    {
      title: "Real-Time Insights",
      description: "Live dashboard tracks appointments, conversion rates, and ROI metrics to optimize your lead generation strategy continuously.",
      icon: <BarChart3 className="w-10 h-10" />,
      placeholder: "📊",
      iconConcepts: ["chart", "eye", "activity"],
      width: "35%"
    }
  ];

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced diagonal bronze wave behind middle card */}
        <div className="absolute top-0 left-1/3 right-1/3 bottom-0 bg-gradient-to-br from-[#efcc8a]/4 via-transparent to-[#cd7f32]/3 transform skew-y-2 blur-sm"></div>
        {/* Larger background blobs */}
        <div className="absolute top-16 left-16 w-40 h-40 bg-[#efcc8a]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-24 w-32 h-32 bg-[#cd7f32]/8 rounded-full blur-2xl"></div>
        {/* Additional visual anchors for odd cards */}
        <div className="absolute top-1/2 left-12 w-24 h-24 bg-[#ffd700]/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 right-12 w-28 h-28 bg-[#efcc8a]/4 rounded-full blur-xl"></div>
      </div>
      
      {/* Enhanced background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/60 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Expanded Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          {/* Enhanced Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="py-32 lg:py-40 space-y-12"
          >
            {/* Left-aligned title with enhanced typography */}
            <div className="text-left space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]" style={{ lineHeight: '1.2' }}>
                <span className="bronze-gradient-fix">Core Capabilities</span>{" "}
                <span className="text-white">That Drive Results</span>
              </h2>
              
              {/* Enhanced progress bar */}
              <motion.div 
                className="w-full h-[2px] bg-white/10 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#efcc8a] to-[#cd7f32]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </motion.div>
              
              <p className="text-2xl md:text-3xl text-white/70 max-w-3xl leading-relaxed font-light" style={{ lineHeight: '1.6' }}>
                Three pillars of our AI-powered system that transform how you connect with qualified prospects.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Asymmetric Three Pillars - 35%/30%/35% */}
          <div className="flex flex-col lg:flex-row border-b border-white/10 mb-16">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }} 
                className={cn(
                  "border-b lg:border-b-0 border-white/10 relative flex-1",
                  index < 2 ? "lg:border-r border-white/10" : "",
                  "border-l border-white/10",
                  index === 2 ? "lg:border-r border-white/10" : ""
                )}
                style={{ 
                  flexBasis: capability.width,
                  minWidth: capability.width 
                }}
              >
                <Magnetic 
                  intensity={0.04} 
                  rangeX={120} 
                  rangeY={60} 
                  actionArea="self" 
                  shape="rectangular"
                  springOptions={{
                    stiffness: 120,
                    damping: 20,
                    mass: 0.4
                  }}
                >
                  <div className="relative h-full p-12 lg:p-16 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" style={{ minHeight: '480px' }}>
                    {/* Enhanced 2.5D Capability Placeholder */}
                    <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-[#efcc8a]/25 to-[#cd7f32]/35 rounded-2xl flex items-center justify-center text-3xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      {capability.placeholder}
                    </div>
                    
                    {/* Enhanced inner shadow for depth */}
                    <div className="absolute inset-3 border border-white/8 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div 
                      className="absolute inset-0 opacity-[0.10] group-hover:opacity-[0.15] transition-opacity duration-500" 
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                      }}
                    ></div>
                    
                    <div className="relative z-10 space-y-8 h-full flex flex-col">
                      {/* Enhanced Icon */}
                      <motion.div 
                        className="text-[#efcc8a] group-hover:text-[#ffd700] transition-all duration-400" 
                        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                      >
                        {capability.icon}
                      </motion.div>
                      
                      {/* Enhanced Content */}
                      <div className="space-y-6 flex-grow">
                        <h3 className="text-2xl md:text-3xl font-bold bronze-gradient-fix group-hover:text-white transition-colors duration-400 tracking-tight leading-tight">
                          {capability.title}
                        </h3>
                        
                        <p className="text-lg text-white/65 group-hover:text-white/80 transition-colors duration-400 leading-relaxed font-light" style={{ lineHeight: '1.6' }}>
                          {capability.description}
                        </p>
                        
                        {/* Enhanced icon concepts preview */}
                        <div className="flex gap-3 mt-6">
                          {capability.iconConcepts.map((concept, i) => (
                            <span key={i} className="text-sm text-[#efcc8a]/50 uppercase tracking-wider font-medium">
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced hover effects */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 border border-[#efcc8a]/15 rounded-none"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#efcc8a]/50 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
                    </motion.div>
                  </div>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Flow Guide Arrow */}
        <motion.div 
          className="flex justify-center py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-6 h-6 text-[#efcc8a]">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
