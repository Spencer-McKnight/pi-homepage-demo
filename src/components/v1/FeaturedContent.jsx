import { ArrowRight, MessageSquare, Eye, Star } from 'lucide-react'

const STEVES_PICKS = [
  {
    title: 'Why I\'m Bullish on Regional Markets in 2024',
    type: 'Blog Post',
    date: '2 days ago',
    excerpt: 'The capital city vs regional debate continues, but here\'s what the numbers are telling me...',
  },
  {
    title: 'The 11 Second Solution Explained',
    type: 'Training',
    date: 'Featured',
    excerpt: 'My signature deal analysis method that\'s helped thousands evaluate properties in seconds.',
  },
]

const FORUM_PICKS = [
  {
    title: 'Help Needed Please! First IP purchase decision',
    views: 2218,
    posts: 25,
    isHot: true,
  },
  {
    title: 'Property management systems - what do you use?',
    views: 181,
    posts: 5,
    isHot: false,
  },
  {
    title: 'Gladstone area for an investment - thoughts?',
    views: 141,
    posts: 4,
    isHot: false,
  },
]

export default function FeaturedContent() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Steve's Latest */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-pi-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Steve's Latest</h2>
                <p className="text-sm text-gray-500">Insights & resources from Steve</p>
              </div>
            </div>

            <div className="space-y-4">
              {STEVES_PICKS.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-pi-blue/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-pi-blue/10 text-pi-blue px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                </a>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-pi-blue font-medium mt-4 hover:underline">
              View All from Steve <ArrowRight size={16} />
            </a>
          </div>

          {/* Steve's Forum Picks */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-pi-gold/20 rounded-full flex items-center justify-center">
                <Star size={20} className="text-pi-gold" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Steve's Forum Picks</h2>
                <p className="text-sm text-gray-500">Discussions worth reading</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {FORUM_PICKS.map((topic, i) => (
                <a
                  key={i}
                  href="#"
                  className={`block p-4 hover:bg-gray-50 transition-colors ${
                    i !== FORUM_PICKS.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pi-blue/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare size={16} className="text-pi-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 truncate">{topic.title}</h3>
                        {topic.isHot && (
                          <span className="shrink-0 text-xs bg-pi-coral/10 text-pi-coral px-2 py-0.5 rounded-full font-medium">
                            Hot
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={14} /> {topic.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare size={14} /> {topic.posts} replies
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-pi-blue font-medium mt-4 hover:underline">
              Browse All Forums <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
