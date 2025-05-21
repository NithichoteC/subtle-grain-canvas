
import { User, Settings, Activity, TrendingUp, ShieldCheck, HelpCircle, BookOpen } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Button } from "@/components/ui/button"

export function NavBarDemo() {
  const navItems = [
    { name: 'Hi!', url: '#', icon: User },
    { name: 'Process', url: '#', icon: Settings },
    { name: 'Metrics', url: '#', icon: TrendingUp },
    { name: 'Guarantee', url: '#', icon: ShieldCheck },
    { name: 'Who', url: '#', icon: User },
    { name: 'FAQ', url: '#', icon: HelpCircle }
  ]

  return (
    <div className="flex items-center justify-between w-full">
      {/* Logo on the left */}
      <div className="bg-background/5 border border-white/10 backdrop-blur-xl py-1 px-4 rounded-full shadow-lg white-glow">
        <span className="text-white font-semibold text-sm">Agency</span>
      </div>
      
      {/* Center Navigation */}
      <NavBar items={navItems} className="px-4" />
      
      {/* CTA Button on the right */}
      <div className="bg-background/5 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg white-glow">
        <Button className="flex items-center gap-2 rounded-full text-sm">
          <BookOpen size={18} />
          <span className="hidden md:inline">Book My Free Strategy Call</span>
          <span className="md:hidden">Book Call</span>
        </Button>
      </div>
    </div>
  )
}
