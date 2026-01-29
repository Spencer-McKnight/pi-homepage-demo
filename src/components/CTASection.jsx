import { Check } from 'lucide-react'

const BENEFITS = [
  'Post questions in the forum',
  'Access free resources & guides',
  'Save deals in the calculator',
]

export default function CTASection() {
  return (
    <section id="signup" className="py-12 md:py-16 bg-pi-blue-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join 161,000+ Property Investors
          </h2>
          <p className="text-white/80 mb-8">
            Become a member to unlock the full community experience. It's free to join.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {BENEFITS.map(benefit => (
              <div key={benefit} className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-pi-gold" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pi-gold"
            />
            <button
              type="submit"
              className="bg-pi-coral hover:bg-pi-coral-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-white/50 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
