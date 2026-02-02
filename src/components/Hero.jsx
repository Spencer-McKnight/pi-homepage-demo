import { Users, Calendar, MessageSquare } from 'lucide-react'

const STATS = [
  { icon: Users, value: '161,000+', label: 'Members' },
  { icon: Calendar, value: '20+', label: 'Years' },
  { icon: MessageSquare, value: '2M+', label: 'Posts' },
]

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pi-blue to-pi-blue-dark text-white py-16 md:py-24 overflow-hidden min-h-[32rem] md:min-h-[36rem]">
      {/* Australia coast map overlay — height pinned to hero so it doesn't cut off */}
      <div
        className="absolute inset-0 opacity-[0.16] md:opacity-[0.22]"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-[length:auto_100%] bg-right bg-bottom"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}Coast_of_Australia.svg)`,
            backgroundPosition: 'right center',
          }}
        />
      </div>
      {/* Scrim: darken left for readability, soft fade so map stays visible on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(15,50,84,0.94) 0%, rgba(15,50,84,0.6) 40%, transparent 70%), linear-gradient(180deg, transparent 70%, rgba(15,50,84,0.4) 100%)',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Make more money, sooner,<br />
            <span className="text-pi-gold">with less risk</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-6">
            Australia's largest property investment community.<br />Learn proven strategies from experienced investors.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#signup" className="bg-pi-coral hover:bg-pi-coral-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Join Free
            </a>
            <a href="#forum" className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Browse Forum
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-6 md:gap-12 mt-6 pt-5">
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
