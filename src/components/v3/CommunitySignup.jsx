import { Users, ArrowRight } from 'lucide-react'

export default function CommunitySignup() {
  return (
    <div className="bg-gradient-to-r from-pi-blue-dark to-pi-blue rounded-xl p-6 text-white">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
          <Users size={24} className="text-pi-gold" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">Join 161,000+ Property Investors</h3>
          <p className="text-white/70 text-sm mb-4">
            Get full access to the community, forums, and exclusive resources.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pi-gold/50 text-sm"
            />
            <button
              type="submit"
              className="bg-pi-coral hover:bg-pi-coral-hover px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Join Free <ArrowRight size={16} />
            </button>
          </form>
          
          <p className="text-xs text-white/50 mt-3">
            Free forever. No credit card required.
          </p>
        </div>
      </div>
    </div>
  )
}
