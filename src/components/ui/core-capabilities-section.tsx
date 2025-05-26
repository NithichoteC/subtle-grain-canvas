
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { motion } from "framer-motion";
import { Brain, Calendar, BarChart3 } from "lucide-react";

export function CoreCapabilitiesSection() {
  const capabilities = [
    {
      title: "Intelligent Qualification",
      description: "AI ranks & prioritizes leads in seconds.",
      icon: <Brain className="w-8 h-8" />,
      placeholder: "🧠",
      iconConcepts: ["brain", "filter", "target"]
    },
    {
      title: "Instant Scheduling", 
      description: "Calls auto-book with decision-makers.",
      icon: <Calendar className="w-8 h-8" />,
      placeholder: "📅",
      iconConcepts: ["calendar", "clock", "phone"]
    },
    {
      title: "Real-Time Insights",
      description: "Live dashboard tracks appointments & ROI.",
      icon: <BarChart3 className="w-8 h-8" />,
      placeholder: "📊",
      iconConcepts: ["chart", "eye", "activity"]
    }
  ];

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Soft bronze light spots */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-[#efcc8a]/4 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-20 w-20 h-20 bg-[#cd7f32]/6 rounded-full blur-lg"></div>
        {/* Diagonal bronze wave behind middle card */}
        <div className="absolute top-0 left-1/3 right-1/3 bottom-0 bg-gradient-to-br from-[#efcc8a]/3 via-transparent to-[#cd7f32]/2 transform skew-y-3 blur-sm"></div>
      </div>
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full border-b border-white/10 py-16 bg-[#171717] relative"
        >
          <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                <span className="bronze-gradient-fix">Core Capabilities</span>{" "}
                <span className="text-white">That Drive Results</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
                Three pillars of our AI-powered system that transform how you connect with qualified prospects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }} 
                className={cn(
                  "border-b border-white/10 relative",
                  index < 2 ? "md:border-r border-white/10" : "",
                  "border-l border-white/10",
                  index === 2 ? "border-r border-white/10" : ""
                )}
              >
                <Magnetic 
                  intensity={0.04} 
                  rangeX={100} 
                  rangeY={50} 
                  actionArea="self" 
                  shape="rectangular"
                  springOptions={{
                    stiffness: 120,
                    damping: 20,
                    mass: 0.4
                  }}
                >
                  <div className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" style={{ minHeight: '380px' }}>
                    {/* 2.5D Capability Placeholder */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#efcc8a]/20 to-[#cd7f32]/30 rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {capability.placeholder}
                    </div>
                    
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-2 border border-white/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div 
                      className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" 
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                      }}
                    ></div>
                    
                    <div className="relative z-10 space-y-6 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div 
                        className="text-[#efcc8a] group-hover:text-[#ffd700] transition-all duration-400" 
                        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                      >
                        {capability.icon}
                      </motion.div>
                      
                      {/* Content */}
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-xl font-bold bronze-gradient-fix group-hover:text-white transition-colors duration-400 tracking-tight">
                          {capability.title}
                        </h3>
                        
                        <p className="text-base text-white/65 group-hover:text-white/80 transition-colors duration-400 leading-relaxed font-light">
                          {capability.description}
                        </p>
                        
                        {/* Icon concepts preview */}
                        <div className="flex gap-2 mt-4">
                          {capability.iconConcepts.map((concept, i) => (
                            <span key={i} className="text-xs text-[#efcc8a]/40 uppercase tracking-wider">
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover lift animation with bronze glow */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 border border-[#efcc8a]/10 rounded-none"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#efcc8a]/40 to-transparent"></div>
                    </motion.div>
                  </div>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
