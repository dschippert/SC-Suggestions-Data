'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NavItem {
  id: string
  label: string
  icon: string
}

interface SidebarNavProps {
  sections: NavItem[]
  activeSection: string
  onSectionClick: (id: string) => void
}

export function SidebarNav({ sections, activeSection, onSectionClick }: SidebarNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const NavContent = () => (
    <ScrollArea className="h-full py-6">
      <div className="space-y-1 px-3">
        <h2 className="mb-4 px-4 text-lg font-semibold tracking-tight">
          Navigation
        </h2>
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start text-left font-normal',
              activeSection === section.id && 'bg-muted font-medium'
            )}
            onClick={() => {
              onSectionClick(section.id)
              setIsOpen(false)
            }}
          >
            <span className="mr-2 text-lg">{section.icon}</span>
            <span className="truncate">{section.label}</span>
          </Button>
        ))}
      </div>
    </ScrollArea>
  )

  if (isMobile) {
    return (
      <>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-4 top-4 z-40 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <NavContent />
          </SheetContent>
        </Sheet>
      </>
    )
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r bg-background md:block">
      <NavContent />
    </aside>
  )
}