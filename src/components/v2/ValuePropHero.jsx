import { TrendingUp, Users, Calculator, ArrowRight } from 'lucide-react'

const VALUE_PROPS = [
  {
    icon: TrendingUp,
    title: 'Proven Strategies',
    description: 'Learn methods that have created millions in wealth',
  },
  {
    icon: Users,
    title: '161K+ Investors',
    description: 'Join Australia\'s largest property community',
  },
  {
    icon: Calculator,
    title: 'Deal Analysis Tools',
    description: 'Evaluate properties in seconds, not hours',
  },
]

export default function ValuePropHero() {
  return (
    <section className="bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-b from-pi-blue-dark to-pi-blue text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Over 2,400 investors joined this month</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Build Wealth Through Property Investing —{' '}
            <span className="text-pi-gold">Even If You're Starting from Zero</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get the education, tools, and community support you need to make smart 
            property investment decisions and grow your portfolio with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#courses" 
              className="bg-pi-coral hover:bg-pi-coral-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 text-lg"
            >
              View Our Courses <ArrowRight size={20} />
            </a>
            <a 
              href="#signup" 
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>

      {/* Value props bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {VALUE_PROPS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pi-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-pi-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600 mt-0.5">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
