import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Michael Chen',
    location: 'Sydney, NSW',
    image: null,
    initials: 'MC',
    quote: 'Steve\'s 11 Second Solution completely changed how I evaluate deals. I went from analysis paralysis to confidently purchasing my first three investment properties within 18 months.',
    properties: 3,
    memberSince: 2019,
  },
  {
    name: 'Sarah Williams',
    location: 'Brisbane, QLD',
    image: null,
    initials: 'SW',
    quote: 'The forum community is incredible. When I had doubts about a deal, I posted it and got feedback from experienced investors within hours. That advice saved me from a costly mistake.',
    properties: 5,
    memberSince: 2017,
  },
  {
    name: 'David & Emma Thompson',
    location: 'Melbourne, VIC',
    image: null,
    initials: 'DT',
    quote: 'We attended Steve\'s bootcamp in 2020 not knowing anything about property investing. Today we have a portfolio generating $48,000 in passive income. The education is world-class.',
    properties: 7,
    memberSince: 2020,
  },
  {
    name: 'Jennifer Park',
    location: 'Perth, WA',
    image: null,
    initials: 'JP',
    quote: 'As a single mum, I thought property investing was out of reach. The strategies I learned here helped me purchase my first IP with just $30k saved. Now I own two properties.',
    properties: 2,
    memberSince: 2021,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  const testimonial = TESTIMONIALS[current]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Success Stories from Our Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from real Australians who started their property journey with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="bg-gradient-to-br from-pi-blue-dark to-pi-blue rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Quote icon */}
            <Quote size={80} className="absolute top-6 right-6 text-white/10" />
            
            <div className="relative">
              {/* Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-pi-gold rounded-full flex items-center justify-center text-pi-blue-dark font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.location}</div>
                </div>
                <div className="ml-auto text-right hidden sm:block">
                  <div className="text-pi-gold font-semibold">{testimonial.properties} Properties</div>
                  <div className="text-white/70 text-sm">Member since {testimonial.memberSince}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-pi-blue' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
