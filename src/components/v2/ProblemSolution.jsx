import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'

const PROBLEMS = [
  'Overwhelmed by conflicting advice online',
  'Scared of making a costly mistake',
  'Don\'t know how to analyse a deal properly',
  'Unsure where to invest or what to buy',
]

const SOLUTIONS = [
  'Clear, proven strategies from experienced investors',
  'Step-by-step frameworks that minimise risk',
  'Tools to evaluate any property in seconds',
  'A supportive community to guide your decisions',
]

export default function ProblemSolution() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Struggling to Get Started with Property Investing?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You're not alone. Here's how we help thousands of Australians overcome the same challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle size={20} className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">The Challenge</h3>
            </div>
            <ul className="space-y-4">
              {PROBLEMS.map((problem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-600">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-pi-blue-dark to-pi-blue rounded-xl p-6 md:p-8 text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircle size={20} className="text-pi-gold" />
              </div>
              <h3 className="text-lg font-semibold">Our Solution</h3>
            </div>
            <ul className="space-y-4">
              {SOLUTIONS.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-pi-gold shrink-0 mt-0.5" />
                  <span className="text-white/90">{solution}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#courses" 
              className="inline-flex items-center gap-2 mt-6 bg-pi-coral hover:bg-pi-coral-hover px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See How We Can Help <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
