import { MessageSquare, Eye, Clock, ArrowRight } from 'lucide-react'

const FORUM_TOPICS = [
  { title: 'Property management systems', views: 181, posts: 5, time: '19 hours ago' },
  { title: 'Questions about building inspection condition', views: 147, posts: 7, time: '19 hours ago' },
  { title: 'Gladstone area for an investment', views: 141, posts: 4, time: '2 days ago' },
  { title: 'Help Needed Please!', views: 2218, posts: 25, time: '4 days ago', hot: true },
  { title: 'Property accounting and tax differences across Australian states', views: 227, posts: 4, time: '6 days ago' },
]

export default function ForumPreview() {
  return (
    <section id="forum" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Community Q&A</h2>
            <p className="text-gray-600 mt-1">Real discussions from real investors</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-pi-blue font-medium hover:underline">
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <input
              type="text"
              placeholder="Search the forums..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pi-blue/20 focus:border-pi-blue"
            />
          </div>

          {/* Topics */}
          <div className="divide-y divide-gray-100">
            {FORUM_TOPICS.map((topic, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-pi-blue/10 rounded-lg shrink-0">
                  <MessageSquare size={18} className="text-pi-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900 truncate">{topic.title}</h3>
                    {topic.hot && (
                      <span className="shrink-0 text-xs bg-pi-coral/10 text-pi-coral px-2 py-0.5 rounded-full font-medium">
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Eye size={14} /> {topic.views}</span>
                    <span className="flex items-center gap-1"><MessageSquare size={14} /> {topic.posts}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {topic.time}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-gray-400 shrink-0 hidden sm:block" />
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a href="#" className="text-sm text-pi-blue font-medium hover:underline">Post a Question</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm text-pi-blue font-medium hover:underline">View All Topics</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm text-pi-blue font-medium hover:underline">Search by Keyword</a>
          </div>
        </div>

        <a href="#" className="sm:hidden flex items-center justify-center gap-1 text-pi-blue font-medium mt-4">
          View All Topics <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
