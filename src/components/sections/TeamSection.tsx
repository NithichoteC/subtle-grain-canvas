
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  credential: string;
  avatar: string;
}

const TeamMember = ({ name, role, credential, avatar }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Avatar className="h-20 w-20 border-2 border-[#FFC94D]/30">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-[#202020] text-white">{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-white/60 text-sm">{role}</p>
        <p className="text-[#FFC94D]/80 text-sm">{credential}</p>
      </div>
    </div>
  );
};

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder",
      credential: "Ex-Meta Growth Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "AI Engineer",
      credential: "Stanford ML Graduate",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Park",
      role: "Copy Lead",
      credential: "7-Figure Campaign Writer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Maya Johnson",
      role: "Growth Strategist",
      credential: "Scaled 30+ B2B Brands",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
            Meet the <span className="bronze-gradient-fix">Operators</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
