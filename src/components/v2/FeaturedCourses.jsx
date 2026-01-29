import { Clock, Users, Star, Check, ArrowRight } from 'lucide-react'

const COURSES = [
  {
    title: 'Property Investing Bootcamp',
    subtitle: 'Most Popular',
    price: '$2,497',
    originalPrice: '$3,497',
    description: 'The complete A-Z system for finding, analysing, and acquiring profitable investment properties.',
    duration: '12 weeks',
    students: '8,400+',
    rating: 4.9,
    features: [
      '24 video modules',
      'Deal analysis templates',
      'Live Q&A sessions',
      'Private community access',
      '12-month support',
    ],
    badge: 'BESTSELLER',
    featured: true,
  },
  {
    title: 'The 11 Second Solution',
    subtitle: 'Deal Analysis',
    price: '$497',
    originalPrice: null,
    description: 'Master Steve\'s signature quick-analysis method to evaluate any property in seconds.',
    duration: '4 weeks',
    students: '12,000+',
    rating: 4.8,
    features: [
      '8 video lessons',
      'Calculator tool access',
      'Practice deals library',
      'Certificate on completion',
    ],
    badge: null,
    featured: false,
  },
  {
    title: 'Advanced Portfolio Strategies',
    subtitle: 'For Experienced Investors',
    price: '$1,997',
    originalPrice: null,
    description: 'Scale your portfolio with advanced techniques for financing, structuring, and risk management.',
    duration: '8 weeks',
    students: '2,100+',
    rating: 4.9,
    features: [
      '16 advanced modules',
      'Portfolio modelling tools',
      '1-on-1 strategy call',
      'Mastermind group access',
    ],
    badge: 'ADVANCED',
    featured: false,
  },
]

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Training Programs That Deliver Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Structured courses designed to take you from beginner to confident investor, 
            with support every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {COURSES.map((course, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-xl border overflow-hidden flex flex-col ${
                course.featured 
                  ? 'border-pi-blue shadow-xl scale-[1.02]' 
                  : 'border-gray-200 hover:shadow-lg transition-shadow'
              }`}
            >
              {course.badge && (
                <div className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 ${
                  course.badge === 'BESTSELLER' 
                    ? 'bg-pi-coral text-white' 
                    : 'bg-pi-blue text-white'
                }`}>
                  {course.badge}
                </div>
              )}

              <div className={`p-6 ${course.featured ? 'bg-pi-blue text-white' : ''}`}>
                <div className={`text-sm font-medium mb-1 ${course.featured ? 'text-pi-gold' : 'text-pi-blue'}`}>
                  {course.subtitle}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${course.featured ? 'text-white' : 'text-gray-900'}`}>
                  {course.title}
                </h3>
                <p className={`text-sm mb-4 ${course.featured ? 'text-white/80' : 'text-gray-600'}`}>
                  {course.description}
                </p>
                
                <div className={`flex items-center gap-4 text-sm ${course.featured ? 'text-white/70' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} className={course.featured ? 'text-pi-gold' : 'text-pi-gold'} fill="currentColor" /> 
                    {course.rating}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {course.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-gray-400 line-through">{course.originalPrice}</span>
                  )}
                </div>

                <a
                  href="#"
                  className={`w-full py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2 ${
                    course.featured
                      ? 'bg-pi-coral hover:bg-pi-coral-hover text-white'
                      : 'bg-pi-blue hover:bg-pi-blue-dark text-white'
                  }`}
                >
                  Enrol Now <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-pi-blue font-medium hover:underline">
            View all training programs →
          </a>
        </div>
      </div>
    </section>
  )
}
