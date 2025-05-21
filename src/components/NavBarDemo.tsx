
import { User, Settings, Activity, TrendingUp, ShieldCheck, HelpCircle } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function NavBarDemo() {
  const navItems = [
    { name: 'Process', url: '#', icon: Settings },
    { name: 'Metrics', url: '#', icon: TrendingUp },
    { name: 'Guarantee', url: '#', icon: ShieldCheck },
    { name: 'Who', url: '#', icon: User },
    { name: 'FAQ', url: '#', icon: HelpCircle }
  ]

  return (
    <div className="pt-4 px-8 md:px-16 bg-dark/30 backdrop-blur-sm relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 border border-white/10 bg-dark/30">
            <AvatarImage src="/lovable-uploads/688d5291-7768-47a9-b8b2-e492889b5fbe.png" alt="Agency Logo" />
            <AvatarFallback className="text-white">AG</AvatarFallback>
          </Avatar>
          <span className="ml-2 font-semibold text-white">Agency</span>
        </div>
        <NavBar items={navItems} className="mb-0" />
      </div>
    </div>
  )
}
