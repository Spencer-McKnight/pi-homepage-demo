import { MessageSquarePlus, Calculator, GraduationCap, Bookmark, Search } from 'lucide-react'

const ACTIONS = [
  {
    icon: MessageSquarePlus,
    label: 'Post a Question',
    description: 'Ask the community',
    color: 'bg-pi-blue',
    href: '#',
  },
  {
    icon: Calculator,
    label: 'Deal Calculator',
    description: 'Analyse a property',
    color: 'bg-pi-gold',
    href: '#',
  },
  {
    icon: GraduationCap,
    label: 'Latest Course',
    description: 'Continue learning',
    color: 'bg-pi-coral',
    href: '#',
  },
  {
    icon: Bookmark,
    label: 'Saved Items',
    description: 'Your bookmarks',
    color: 'bg-green-500',
    href: '#',
  },
]

export default function QuickActionsBar() {
  return (
    <section className="bg-gradient-to-r from-pi-blue-dark to-pi-blue py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search forums, deals, resources..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pi-gold/50 focus:border-pi-gold text-sm"
              />
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {ACTIONS.map(({ icon: Icon, label, description, color, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors shrink-0"
              >
                <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center`}>
                  <Icon size={16} className="text-white" />
                </div>
                <div className="hidden lg:block">
                  <div className="text-white text-sm font-medium">{label}</div>
                  <div className="text-white/60 text-xs">{description}</div>
                </div>
                <div className="lg:hidden text-white text-sm font-medium">{label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
