
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { GradientButton } from "@/components/ui/gradient-button";
import { Calendar, Users, BarChart3, Crown } from "lucide-react";

export function EarlyAdopterSection() {
  const features = [
    {
      title: "Tailored Onboarding & Rapid Kick-off",
      description: "We adapt our AI workflows to your exact sales process.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Weekly Strategy Optimization",
      description: "One-on-one calls to sharpen your targeting and messaging.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Real-Time Dashboard Access",
      description: "Watch vetted leads flow in and track ROI live.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Priority Influence & VIP Support",
      description: "Your feedback drives feature releases and custom fixes.",
      icon: <Crown className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full py-24 relative font-roboto">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bronze-gradient-fix">Be Our First</span>{" "}
            <span className="text-white">Success Story</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Magnetic 
            intensity={0.1} 
            rangeX={120} 
            rangeY={50} 
            actionArea="global" 
            shape="elliptical"
            springOptions={{
              stiffness: 100,
              damping: 20,
              mass: 0.5
            }}
          >
            <GradientButton className="gap-2 flex items-center text-base font-roboto py-[12px]">
              <span className="text-white whitespace-nowrap">Claim Your Early Access</span>
              <Calendar className="w-4 h-4 text-white flex-shrink-0" />
            </GradientButton>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="group relative">
      {/* Card Background */}
      <div className="relative p-8 rounded-2xl border border-white/10 bg-[#202020]/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[#efcc8a]/30 group-hover:bg-[#202020]/50">
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#efcc8a]/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Icon */}
        <div className="mb-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#efcc8a]/20 to-[#cd7f32]/20 flex items-center justify-center text-[#efcc8a] group-hover:from-[#efcc8a]/30 group-hover:to-[#cd7f32]/30 transition-all duration-300">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#efcc8a] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Left Border Accent */}
        <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-transparent via-[#efcc8a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full" />
      </div>
    </div>
  );
};
