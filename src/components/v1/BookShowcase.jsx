import { ArrowRight, Star } from 'lucide-react'

const BOOKS = [
  {
    title: 'From 0 to 130 Properties in 3.5 Years',
    subtitle: 'The #1 Bestseller',
    description: 'Steve\'s flagship book that started it all. Learn the exact strategies used to build a massive property portfolio.',
    rating: 4.8,
    reviews: 1240,
    featured: true,
  },
  {
    title: 'From 0 to 260+ Properties in 7 Years',
    subtitle: 'The Sequel',
    description: 'The continuation of Steve\'s journey with advanced strategies for scaling your portfolio.',
    rating: 4.7,
    reviews: 856,
    featured: false,
  },
  {
    title: 'The Property Apprentice',
    subtitle: 'Beginner Friendly',
    description: 'Perfect for those just starting out. A step-by-step guide to your first investment property.',
    rating: 4.9,
    reviews: 632,
    featured: false,
  },
]

export default function BookShowcase() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Learn Steve's Methodology
            </h2>
            <p className="text-gray-600">
              Bestselling books that have helped thousands of Australians start their property journey
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-pi-blue font-medium hover:underline shrink-0">
            View All Books <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BOOKS.map((book, i) => (
            <a
              key={i}
              href="#"
              className={`group relative bg-white rounded-xl border overflow-hidden transition-all hover:shadow-lg ${
                book.featured ? 'border-pi-gold shadow-md' : 'border-gray-200'
              }`}
            >
              {book.featured && (
                <div className="absolute top-3 right-3 bg-pi-gold text-pi-blue-dark text-xs font-bold px-2 py-1 rounded-full">
                  BESTSELLER
                </div>
              )}
              
              {/* Book cover placeholder */}
              <div className={`aspect-[3/4] flex items-center justify-center p-8 ${
                book.featured 
                  ? 'bg-gradient-to-br from-pi-blue-dark to-pi-blue' 
                  : 'bg-gradient-to-br from-gray-700 to-gray-900'
              }`}>
                <div className="text-center text-white">
                  <div className="text-lg font-bold leading-tight mb-2">{book.title}</div>
                  <div className="text-sm text-white/70">Steve McKnight</div>
                </div>
              </div>

              {/* Book info */}
              <div className="p-5">
                <div className="text-xs font-medium text-pi-blue mb-1">{book.subtitle}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pi-blue transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{book.description}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(book.rating) ? 'text-pi-gold fill-pi-gold' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {book.rating} ({book.reviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
