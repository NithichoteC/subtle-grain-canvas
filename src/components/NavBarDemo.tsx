
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
    <NavBar items={navItems} className="sticky top-0 z-50" />
  )
}
