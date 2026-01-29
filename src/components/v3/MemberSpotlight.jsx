import { MapPin, Building2, Calendar, ArrowRight } from 'lucide-react'

const SPOTLIGHT = {
  name: 'Rachel & Tim Anderson',
  location: 'Adelaide, SA',
  memberSince: 2018,
  properties: 6,
  initials: 'RA',
  quote: 'We started with nothing but a dream and the knowledge from this community. Five years later, we\'ve built a portfolio that generates enough passive income to cover our mortgage. The support from other members has been incredible.',
  journey: 'Started with $40k saved → Now owns 6 properties worth $2.8M',
}

export default function MemberSpotlight() {
  return (
    <div className="bg-gradient-to-br from-pi-blue-dark to-pi-blue rounded-xl overflow-hidden text-white">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <span className="text-lg">⭐</span>
        <h3 className="font-semibold">Member Spotlight</h3>
        <span className="ml-auto text-xs text-white/60">This week</span>
      </div>

      <div className="p-5">
        {/* Profile */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 bg-pi-gold rounded-full flex items-center justify-center text-pi-blue-dark font-bold text-lg shrink-0">
            {SPOTLIGHT.initials}
          </div>
          <div>
            <h4 className="font-semibold text-lg">{SPOTLIGHT.name}</h4>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/70 mt-1">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {SPOTLIGHT.location}
              </span>
              <span className="flex items-center gap-1">
                <Building2 size={14} /> {SPOTLIGHT.properties} properties
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Since {SPOTLIGHT.memberSince}
              </span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-white/90 leading-relaxed mb-4 text-sm">
          "{SPOTLIGHT.quote}"
        </blockquote>

        {/* Journey highlight */}
        <div className="bg-white/10 rounded-lg px-4 py-3 mb-4">
          <div className="text-xs text-white/60 mb-1">Their journey</div>
          <div className="text-sm font-medium text-pi-gold">{SPOTLIGHT.journey}</div>
        </div>

        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-pi-gold hover:underline"
        >
          Read full story <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
