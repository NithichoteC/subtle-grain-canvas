
import { Home, Settings, TrendingUp, ShieldCheck, Users, HelpCircle } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  // Updated navigation items with more modern icons and cleaner naming
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Process', url: '#', icon: Settings },
    { name: 'Results', url: '#', icon: TrendingUp },
    { name: 'Trust', url: '#', icon: ShieldCheck },
    { name: 'Team', url: '#', icon: Users },
    { name: 'FAQ', url: '#', icon: HelpCircle }
  ]

  return (
    <NavBar items={navItems} className="sticky top-0 z-50" />
  )
}
