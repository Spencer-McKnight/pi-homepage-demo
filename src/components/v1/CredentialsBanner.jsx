import { Building2, BookOpen, Users, Award } from 'lucide-react'

const CREDENTIALS = [
  {
    icon: Building2,
    value: '130+',
    label: 'Properties Acquired',
    description: 'Personal investment portfolio',
  },
  {
    icon: BookOpen,
    value: '5',
    label: 'Bestselling Books',
    description: 'Including "From 0 to 130 Properties"',
  },
  {
    icon: Users,
    value: '161,000+',
    label: 'Community Members',
    description: 'Australia\'s largest investor network',
  },
  {
    icon: Award,
    value: '20+',
    label: 'Years Teaching',
    description: 'Proven track record since 2001',
  },
]

export default function CredentialsBanner() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {CREDENTIALS.map(({ icon: Icon, value, label, description }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pi-gold/10 rounded-xl mb-3">
                <Icon size={24} className="text-pi-gold" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{value}</div>
              <div className="font-medium text-gray-900 mt-1">{label}</div>
              <div className="text-sm text-gray-500 mt-0.5 hidden md:block">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
