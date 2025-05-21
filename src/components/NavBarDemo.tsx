
import { User, Settings, TrendingUp, ShieldCheck, HelpCircle, BookOpen } from 'lucide-react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function NavBarDemo() {
  const navItems = [
    { name: 'Hi!', url: '#' },
    { name: 'Process', url: '#' },
    { name: 'Metrics', url: '#' },
    { name: 'Guarantee', url: '#' },
    { name: 'Who', url: '#' },
    { name: 'FAQ', url: '#' }
  ]

  return (
    <div className="flex items-center justify-between w-full relative">
      {/* Logo on the left */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-black/30 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg"
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
      <div className="hidden md:flex items-center bg-black/30 border border-white/10 backdrop-blur-md rounded-full">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.url}
            className={`px-6 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 ${
              index === 0 ? 'bg-white/5 rounded-full' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile navigation */}
      <div className="flex md:hidden items-center justify-center bg-black/30 border border-white/10 backdrop-blur-md rounded-full py-2 px-6">
        <span className="text-white/80 text-sm font-medium">Menu</span>
      </div>

      {/* CTA on the right */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-black/30 border border-white/10 backdrop-blur-md py-1 px-1 rounded-full shadow-lg"
      >
        <Link 
          to="#" 
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full text-white hover:bg-white/5 transition-all duration-300"
        >
          <BookOpen className="h-4 w-4" />
          <span className="hidden md:inline">Book My Free Strategy Call</span>
        </Link>
      </motion.div>
    </div>
  )
}
