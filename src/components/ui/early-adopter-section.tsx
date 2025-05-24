
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
    <div className="w-full py-24 relative font-roboto bg-[#171717]">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bronze-gradient-fix">Be Our First</span>{" "}
            <span className="text-white">Success Story</span>
          </h2>
        </div>

        {/* Features Grid - Using the component structure with 4 features */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 max-w-4xl mx-auto mb-12">
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
    <div
      className={cn(
        "flex flex-col border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 2) && "border-l border-white/10",
        index < 2 && "border-b border-white/10"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#efcc8a]/5 via-transparent to-transparent pointer-events-none" />
      )}
      
      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-[#efcc8a]">
        {icon}
      </div>
      
      {/* Title with accent line */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-[#efcc8a] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white group-hover/feature:text-[#efcc8a]">
          {title}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-sm text-white/70 max-w-xs relative z-10 px-10 group-hover/feature:text-white/90 transition-colors duration-200">
        {description}
      </p>
    </div>
  );
};
