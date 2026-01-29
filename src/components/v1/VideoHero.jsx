import { Play, ArrowRight } from 'lucide-react'

export default function VideoHero() {
  return (
    <section className="relative bg-gradient-to-br from-pi-blue-dark via-pi-blue to-pi-blue-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Content */}
          <div className="text-white">
            <p className="text-pi-gold font-medium mb-3 tracking-wide uppercase text-sm">
              Welcome to PropertyInvesting.com
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              I'm Steve McKnight, and I've helped thousands of Australians{' '}
              <span className="text-pi-gold">build wealth through property</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              After building a portfolio of 130+ properties and achieving financial freedom, 
              I've dedicated the last 20 years to sharing what works—and what doesn't—with 
              everyday Australians ready to take control of their financial future.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#signup" 
                className="bg-pi-coral hover:bg-pi-coral-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2"
              >
                Start Your Journey <ArrowRight size={18} />
              </a>
              <a 
                href="#about" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-4 rounded-lg transition-colors"
              >
                Learn More About Steve
              </a>
            </div>
          </div>

          {/* Right - Video/Image placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Placeholder for Steve's image/video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60">
                <div className="w-20 h-20 bg-pi-coral/90 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-pi-coral transition-colors hover:scale-105 transform">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
                <p className="text-sm">Watch Steve's Welcome Message</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pi-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">130+ Properties</div>
                  <div className="text-sm text-gray-500">Personal Portfolio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
