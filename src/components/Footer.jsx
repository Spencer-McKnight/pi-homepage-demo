import { ExternalLink } from 'lucide-react'

const LINKS = {
  Learn: [
    { label: 'Training Courses', href: '#' },
    { label: 'Books', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Finance', href: '#' },
  ],
  Community: [
    { label: 'Forum Home', href: '#' },
    { label: 'Deal Calculator', href: '#' },
    { label: 'Success Stories', href: '#' },
  ],
  About: [
    { label: 'About PI', href: '#' },
    { label: 'Steve McKnight', href: '#' },
    { label: 'SOGIF.au', href: 'https://sogif.au', external: true },
    { label: 'Contact', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/propertyinvesting-logo.png" alt="" className="h-8 w-auto" />
              <span className="font-semibold">PropertyInve$ting</span>
            </div>
            <p className="text-sm text-gray-400">
              Australia's property investment community since 2001.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && <ExternalLink size={12} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PropertyInvesting.com. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
