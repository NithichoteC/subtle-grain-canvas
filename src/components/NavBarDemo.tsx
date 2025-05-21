
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
      <div className="flex items-center justify-center h-9 w-9 bg-background/5 border border-white/10 backdrop-blur-xl rounded-full shadow-sm">
        <img 
          src="/lovable-uploads/1a1833b9-c980-47c7-b726-948277014a48.png" 
          alt="Agency Logo" 
          className="h-5 w-auto filter brightness-200 contrast-200"
        />
      </div>
      
      {/* Center Navigation */}
      <NavBar items={navItems} className="px-4" />
      
      {/* CTA Button on the right with bronze gradient */}
      <div className="flex items-center justify-center h-9 w-9 bg-background/5 border border-white/10 backdrop-blur-xl rounded-full shadow-sm">
        <Button 
          className="h-7 w-7 p-0 flex items-center justify-center rounded-full"
          variant="ghost"
          size="icon"
        >
          <BookOpen size={14} className="bronze-gradient" />
        </Button>
      </div>
    </div>
  )
}
