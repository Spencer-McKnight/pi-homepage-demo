import { useState } from 'react'
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react'

const NAV_ITEMS = {
  primary: [
    { label: 'Forum', href: '#' },
    { label: 'Training', href: '#' },
    { label: 'Calculator', href: '#' },
    { label: 'Books', href: '#' },
    { label: 'SOGIF', href: 'https://sogif.au', external: true },
  ],
  secondary: [
    { label: 'About', href: '#' },
    { label: 'Finance', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ]
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="bg-pi-blue-dark text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/propertyinvesting-logo.png" alt="" className="h-8 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.primary.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.external && <ExternalLink size={12} />}
              </a>
            ))}
            
            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors flex items-center gap-1"
              >
                More <ChevronDown size={14} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <>
                  <div className="fixed inset-0" onClick={() => setMoreOpen(false)} />
                  <div className="absolute right-0 mt-1 w-40 bg-white text-gray-800 rounded-lg shadow-lg py-1 z-10">
                    {NAV_ITEMS.secondary.map(item => (
                      <a key={item.label} href={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href="#" className="hidden sm:block text-sm px-3 py-1.5 hover:bg-white/10 rounded-md transition-colors">
              My Account
            </a>
            <a href="#signup" className="bg-pi-coral hover:bg-pi-coral-hover text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors">
              Join Free
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-md">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 pb-4">
          <div className="px-4 py-2 space-y-1">
            {[...NAV_ITEMS.primary, ...NAV_ITEMS.secondary].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md flex items-center gap-2"
              >
                {item.label}
                {item.external && <ExternalLink size={12} />}
              </a>
            ))}
            <a href="#" className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md">My Account</a>
          </div>
        </nav>
      )}
    </header>
  )
}
