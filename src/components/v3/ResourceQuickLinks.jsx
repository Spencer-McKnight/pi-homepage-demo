import { Calculator, BookOpen, Newspaper, DollarSign, FileText, HelpCircle, Video, Download } from 'lucide-react'

const RESOURCES = [
  {
    icon: Calculator,
    label: 'Deal Calculator',
    description: 'Analyse properties',
    color: 'bg-pi-gold/10 text-pi-gold',
    href: '#',
  },
  {
    icon: BookOpen,
    label: 'Training Hub',
    description: 'Courses & guides',
    color: 'bg-pi-coral/10 text-pi-coral',
    href: '#',
  },
  {
    icon: Newspaper,
    label: 'Blog',
    description: 'Latest articles',
    color: 'bg-pi-blue/10 text-pi-blue',
    href: '#',
  },
  {
    icon: DollarSign,
    label: 'Finance',
    description: 'Lending resources',
    color: 'bg-green-100 text-green-600',
    href: '#',
  },
  {
    icon: FileText,
    label: 'Books',
    description: 'Steve\'s publications',
    color: 'bg-purple-100 text-purple-600',
    href: '#',
  },
  {
    icon: Video,
    label: 'Webinars',
    description: 'Free recordings',
    color: 'bg-orange-100 text-orange-600',
    href: '#',
  },
  {
    icon: Download,
    label: 'Downloads',
    description: 'Free templates',
    color: 'bg-cyan-100 text-cyan-600',
    href: '#',
  },
  {
    icon: HelpCircle,
    label: 'Help Centre',
    description: 'FAQs & support',
    color: 'bg-gray-100 text-gray-600',
    href: '#',
  },
]

export default function ResourceQuickLinks() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900">Quick Links</h3>
      </div>

      <div className="grid grid-cols-2 gap-px bg-gray-100">
        {RESOURCES.map(({ icon: Icon, label, description, color, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-3 p-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
              <Icon size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">{label}</div>
              <div className="text-xs text-gray-500">{description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
