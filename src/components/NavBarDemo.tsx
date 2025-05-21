
import { User, Settings, Activity, TrendingUp, ShieldCheck, HelpCircle, BookOpen } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-background/5 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg white-glow"
      >
        <Link to="/">
          <img 
            src="/lovable-uploads/dacdd0bb-67cb-49cf-98d1-2b6262f2c376.png" 
            alt="Logo" 
            className="h-8 w-auto" 
          />
        </Link>
      </motion.div>

      {/* Navigation in the center */}
      <NavBar items={navItems} className="mx-auto" />

      {/* CTA on the right */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-background/5 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg white-glow"
      >
        <Link 
          to="#" 
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-white/5 text-white text-glow hover:bg-white/10 transition-all duration-300"
        >
          <BookOpen className="h-4 w-4" />
          <span className="hidden md:inline">Book My Free Strategy Call</span>
        </Link>
      </motion.div>
    </div>
  )
}
