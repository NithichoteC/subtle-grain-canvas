
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { motion } from "framer-motion";
import { Brain, Calendar, BarChart3, ArrowDown } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

export function CoreCapabilitiesSection() {
  const capabilities = [
    {
      title: "Intelligent Qualification",
      description: "AI ranks & prioritizes leads in seconds, eliminating manual sorting and ensuring only high-value prospects reach your team.",
      icon: <Brain className="w-8 h-8" />,
      placeholder: "🧠",
      accent: "from-blue-400/30 to-purple-500/40"
    },
    {
      title: "Instant Scheduling", 
      description: "Calls auto-book with decision-makers through our intelligent calendar system that prevents conflicts and optimizes timing.",
      icon: <Calendar className="w-8 h-8" />,
      placeholder: "📅",
      accent: "from-[#efcc8a]/30 to-[#cd7f32]/40",
      featured: true
    },
    {
      title: "Real-Time Insights",
      description: "Live dashboard tracks appointments, conversion rates, and ROI metrics to optimize your lead generation strategy continuously.",
      icon: <BarChart3 className="w-8 h-8" />,
      placeholder: "📊",
      accent: "from-green-400/30 to-emerald-500/40"
    }
  ];

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Continuous Grid Pattern Background - same as problem-solution */}
      <div className="absolute inset-0">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className={cn(
            "opacity-40 stroke-[#efcc8a]/50 fill-transparent",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* Enhanced Layered Background */}
      <div className="absolute inset-0">
        {/* Central featured column highlight */}
        <div className="absolute top-0 left-1/3 right-1/3 bottom-0 bg-gradient-to-b from-[#efcc8a]/6 via-[#cd7f32]/4 to-[#efcc8a]/6 blur-xl"></div>
        
        {/* Dynamic floating elements */}
        <motion.div 
          className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/25 to-purple-500/35 rounded-3xl flex items-center justify-center text-2xl shadow-xl"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎯
        </motion.div>
        
        <motion.div 
          className="absolute bottom-24 right-16 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-500/40 rounded-2xl flex items-center justify-center text-xl shadow-lg"
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📈
        </motion.div>
        
        {/* Enhanced background blobs */}
        <div className="absolute top-1/4 left-12 w-36 h-36 bg-[#efcc8a]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-[#cd7f32]/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Rich background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#171717] to-[#1a1a1a]/60"></div>
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}
      ></div>
      
      {/* Compact Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/15">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          {/* Compact Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="py-16 lg:py-20 space-y-8"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="bronze-gradient-fix">Core Capabilities</span>{" "}
                <span className="text-white">That Drive Results</span>
              </h2>
              
              {/* Enhanced progress bar */}
              <motion.div 
                className="w-32 h-[3px] bg-white/10 relative mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#efcc8a] to-[#cd7f32] shadow-[0_0_15px_rgba(239,204,138,0.6)]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </motion.div>
              
              <p className="text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light">
                Three pillars of our AI-powered system that transform how you connect with qualified prospects.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Three Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }} 
                className="relative"
              >
                <Magnetic 
                  intensity={0.06} 
                  rangeX={100} 
                  rangeY={50} 
                  actionArea="self" 
                  shape="rectangular"
                  springOptions={{ stiffness: 150, damping: 25, mass: 0.3 }}
                >
                  <div className={cn(
                    "relative p-8 lg:p-10 rounded-2xl border transition-all duration-500 group flex flex-col min-h-[320px]",
                    capability.featured 
                      ? "bg-gradient-to-br from-[#1c1c1c] to-[#1a1a1a] border-[#efcc8a]/40 shadow-[0_0_30px_rgba(239,204,138,0.15)]" 
                      : "bg-gradient-to-br from-[#1a1a1a] to-[#171717] border-white/20 hover:border-white/30",
                    "hover:transform hover:scale-105 hover:shadow-2xl"
                  )}>
                    {/* Enhanced floating placeholder */}
                    <div className={cn(
                      "absolute -top-6 -right-6 w-20 h-20 rounded-3xl flex items-center justify-center text-3xl shadow-2xl transition-all duration-300 group-hover:scale-110",
                      `bg-gradient-to-br ${capability.accent}`
                    )}>
                      {capability.placeholder}
                    </div>
                    
                    {/* Enhanced glow effect for featured */}
                    {capability.featured && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#efcc8a]/10 to-[#cd7f32]/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    <div className="relative z-10 space-y-6 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div 
                        className={cn(
                          "transition-all duration-400",
                          capability.featured ? "text-[#efcc8a]" : "text-white/80 group-hover:text-[#efcc8a]"
                        )}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      >
                        {capability.icon}
                      </motion.div>
                      
                      {/* Content */}
                      <div className="space-y-4 flex-grow">
                        <h3 className={cn(
                          "text-xl md:text-2xl font-bold tracking-tight leading-tight transition-colors duration-400",
                          capability.featured 
                            ? "bronze-gradient-fix" 
                            : "text-white group-hover:text-[#efcc8a]"
                        )}>
                          {capability.title}
                        </h3>
                        
                        <p className="text-base text-white/70 group-hover:text-white/85 transition-colors duration-400 leading-relaxed font-light">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Flow Guide Arrow */}
        <motion.div 
          className="flex justify-center py-8"
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
