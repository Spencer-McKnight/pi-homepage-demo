import { TrendingUp, MessageSquare, Eye, Flame } from 'lucide-react'

const TRENDING = [
  {
    title: 'Help Needed Please! First IP purchase decision',
    category: 'General',
    views: 2218,
    replies: 25,
    isHot: true,
  },
  {
    title: 'Interest rate predictions for 2024',
    category: 'Finance',
    views: 1847,
    replies: 42,
    isHot: true,
  },
  {
    title: 'Best property management software?',
    category: 'Property Mgmt',
    views: 891,
    replies: 18,
    isHot: false,
  },
  {
    title: 'Gladstone vs Mackay - which has better prospects?',
    category: 'Regions',
    views: 756,
    replies: 31,
    isHot: false,
  },
  {
    title: 'SMSF lending - current options',
    category: 'Finance',
    views: 623,
    replies: 14,
    isHot: false,
  },
]

const POPULAR_TAGS = [
  'Brisbane', 'Cashflow', 'Regional', 'First Home', 'SMSF', 
  'Interest Rates', 'Tax', 'Depreciation', 'Renovations'
]

export default function TrendingTopics() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <TrendingUp size={18} className="text-pi-coral" />
        <h3 className="font-semibold text-gray-900">Trending This Week</h3>
      </div>

      {/* Topics list */}
      <div className="divide-y divide-gray-50">
        {TRENDING.map((topic, i) => (
          <a
            key={i}
            href="#"
            className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-gray-500 shrink-0">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-medium text-gray-900 truncate">{topic.title}</h4>
                {topic.isHot && <Flame size={14} className="text-pi-coral shrink-0" />}
              </div>
              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                <span className="text-pi-blue">{topic.category}</span>
                <span className="flex items-center gap-1">
                  <Eye size={12} /> {topic.views.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={12} /> {topic.replies}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Popular tags */}
      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
        <p className="text-xs text-gray-500 mb-2">Popular topics</p>
        <div className="flex flex-wrap gap-1.5">
          {POPULAR_TAGS.map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-xs px-2 py-1 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-pi-blue hover:text-pi-blue transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
