
import { User, Settings, Activity, TrendingUp, ShieldCheck, HelpCircle } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

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
    <div className="pt-4 px-8 md:px-16 bg-dark/50 backdrop-blur-sm relative">
      <NavBar items={navItems} className="mb-4" />
    </div>
  )
}
