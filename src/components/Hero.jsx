import { Users, Calendar, MessageSquare } from 'lucide-react'

const STATS = [
  { icon: Users, value: '161,000+', label: 'Members' },
  { icon: Calendar, value: '20+', label: 'Years' },
  { icon: MessageSquare, value: '2M+', label: 'Posts' },
]

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pi-blue to-pi-blue-dark text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Make more money, sooner,<br />
            <span className="text-pi-gold">with less risk</span>
          </h1>
          <p className="text-lg text-white/80 mb-6">
            Australia's largest property investment community. Learn proven strategies from experienced investors.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#signup" className="bg-pi-coral hover:bg-pi-coral-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Sign Up
            </a>
            <a href="#forum" className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Browse Forum
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-6 md:gap-12 mt-10 pt-8 border-t border-white/20">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={24} className="text-pi-gold" />
              <div>
                <div className="text-xl font-bold">{value}</div>
                <div className="text-sm text-white/60">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
