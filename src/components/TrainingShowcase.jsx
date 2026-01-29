import { GraduationCap, TrendingUp, ArrowRight, Calendar } from 'lucide-react'

const FEATURED_OFFERINGS = [
  {
    type: 'Seminar',
    icon: Calendar,
    title: 'Property Summit 2026',
    description: "Steve McKnight's flagship one-day annual conference with cutting-edge strategies and expert insights.",
    badge: '2026 Earlybird Available',
    badgeColor: 'bg-pi-coral text-white',
    ctaText: 'View Event',
    ctaStyle: 'bg-pi-coral hover:bg-pi-coral-hover text-white'
  },
  {
    type: 'Course',
    icon: GraduationCap,
    title: 'Cash In On Commercial',
    description: 'Comprehensive 2-day seminar recording on commercial property strategies with proven frameworks.',
    badge: 'Recording Available',
    badgeColor: 'bg-pi-blue text-white',
    ctaText: 'Learn More',
    ctaStyle: 'bg-pi-blue-dark hover:bg-pi-blue text-white'
  },
  {
    type: 'Course',
    icon: TrendingUp,
    title: 'Due Diligence System',
    description: 'Step-by-step system to scope, identify, and secure unbeatable property deals with confidence.',
    badge: 'Popular',
    badgeColor: 'bg-pi-gold text-white',
    ctaText: 'Discover More',
    ctaStyle: 'bg-pi-blue-dark hover:bg-pi-blue text-white'
  }
]

export default function TrainingShowcase() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-pi-gold/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap size={20} className="text-pi-gold" />
            <span className="text-sm font-medium text-pi-gold">Professional Training</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Learn From Steve McKnight
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your property investing with proven strategies, frameworks, and insights from 20+ years of real-world experience.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_OFFERINGS.map((offering) => {
            const Icon = offering.icon
            return (
              <div key={offering.title} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-pi-blue/10 rounded-lg">
                      <Icon size={24} className="text-pi-blue" />
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${offering.badgeColor}`}>
                      {offering.badge}
                    </span>
                  </div>
                  
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-medium">
                    {offering.type}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {offering.description}
                  </p>
                  
                  <a 
                    href="#" 
                    className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-medium transition-colors ${offering.ctaStyle}`}
                  >
                    {offering.ctaText}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 text-pi-blue font-medium hover:underline">
            View All Courses & Seminars
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
