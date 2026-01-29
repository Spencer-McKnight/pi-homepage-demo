import { Mail, Check } from 'lucide-react'

const BENEFITS = [
  'Weekly insights from Steve',
  'Exclusive member resources',
  'Early access to new courses',
  'Community forum access',
]

export default function PersonalCTA() {
  return (
    <section id="signup" className="py-12 md:py-16 bg-pi-blue-dark text-white relative overflow-hidden">
      {/* Signature decoration */}
      <div className="absolute bottom-0 right-0 opacity-5 text-[200px] font-script select-none pointer-events-none">
        Steve
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Personal message */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-pi-gold rounded-full flex items-center justify-center text-pi-blue-dark font-bold text-xl">
                SM
              </div>
              <div>
                <div className="font-semibold text-lg">A message from Steve</div>
                <div className="text-white/60 text-sm">Founder, PropertyInvesting.com</div>
              </div>
            </div>

            <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-white/90">
              "Property investing changed my life, and I genuinely believe it can change yours too. 
              Join our community and let me share what I've learned over 20+ years of experience. 
              The first step is always the hardest—but you don't have to take it alone."
            </blockquote>

            <div className="flex items-center gap-2 text-pi-gold font-medium">
              <span className="text-2xl italic font-serif">Steve McKnight</span>
            </div>
          </div>

          {/* Right - Signup form */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Mail size={20} className="text-pi-gold" />
              <h3 className="text-xl font-semibold">Get Updates from Steve</h3>
            </div>
            
            <p className="text-white/70 mb-6">
              Join 161,000+ members and get Steve's latest insights, strategies, and community updates.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pi-gold/50 focus:border-pi-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pi-gold/50 focus:border-pi-gold"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pi-coral hover:bg-pi-coral-hover text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Join the Community — It's Free
              </button>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-white/70">
                  <Check size={14} className="text-pi-gold shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/40 mt-4 text-center">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
