import { useState, useEffect } from 'react'
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react'

export default function UrgencyCTA() {
  // Mock countdown to "next bootcamp" - in production this would be real data
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) { seconds = 59; minutes-- }
        if (minutes < 0) { minutes = 59; hours-- }
        if (hours < 0) { hours = 23; days-- }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0 }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="signup" className="py-12 md:py-16 bg-gradient-to-br from-pi-blue-dark via-pi-blue to-pi-blue-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pi-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pi-coral rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Event details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-pi-coral px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar size={16} />
              <span>Next Live Bootcamp</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Property Investing Bootcamp
              <span className="block text-pi-gold mt-1">February 2024 Intake</span>
            </h2>
            
            <p className="text-white/80 mb-6 text-lg">
              Join Steve McKnight live for our flagship 12-week intensive program. 
              Limited spots available to ensure quality interaction.
            </p>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-pi-gold" />
                <span>Starts Feb 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-pi-gold" />
                <span>12 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-pi-gold" />
                <span>Only 50 spots</span>
              </div>
            </div>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-pi-coral hover:bg-pi-coral-hover px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Reserve Your Spot <ArrowRight size={20} />
            </a>
          </div>

          {/* Right - Countdown */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <p className="text-white/70 text-sm uppercase tracking-wide mb-2">Early Bird Pricing Ends In</p>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pi-gold">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div className="bg-pi-coral/20 border border-pi-coral/30 rounded-lg p-4 text-center">
              <div className="text-sm text-white/70 mb-1">Early Bird Price</div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-bold text-pi-gold">$2,497</span>
                <span className="text-white/50 line-through">$3,497</span>
              </div>
              <div className="text-sm text-pi-coral mt-1 font-medium">Save $1,000</div>
            </div>

            <p className="text-center text-white/50 text-sm mt-4">
              30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Or free signup */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/70 mb-4">Not ready for a course? Start with free membership:</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pi-gold"
            />
            <button
              type="submit"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap border border-white/20"
            >
              Join Free
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
