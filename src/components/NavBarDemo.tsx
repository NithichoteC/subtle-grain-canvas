
import { BookOpen } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Button } from "@/components/ui/button"

export function NavBarDemo() {
  const navItems = [
    { name: 'Hi!', url: '#', icon: null },
    { name: 'Process', url: '#', icon: null },
    { name: 'Metrics', url: '#', icon: null },
    { name: 'Guarantee', url: '#', icon: null },
    { name: 'Who', url: '#', icon: null },
    { name: 'FAQ', url: '#', icon: null }
  ]

  return (
    <div className="flex items-center justify-between w-full h-full">
      {/* Logo on the left */}
      <div className="bg-background/5 border border-white/10 backdrop-blur-xl py-2 px-4 rounded-full shadow-lg white-glow h-10 flex items-center">
        <img 
          src="/lovable-uploads/1a1833b9-c980-47c7-b726-948277014a48.png" 
          alt="Agency Logo" 
          className="h-6 w-auto filter brightness-200 contrast-200"
        />
      </div>
      
      {/* Center Navigation */}
      <NavBar items={navItems} className="px-4" />
      
      {/* CTA Button on the right with bronze gradient */}
      <div className="bg-background/5 border border-white/10 backdrop-blur-xl py-2 px-2 rounded-full shadow-lg white-glow h-10 flex items-center">
        <Button 
          className="flex items-center justify-center rounded-full w-8 h-8 p-0"
          variant="ghost"
          size="icon"
        >
          <BookOpen size={16} className="bronze-gradient" />
        </Button>
      </div>
    </div>
  )
}
