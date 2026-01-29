import { MessageSquare, UserPlus, Calculator, BookOpen, TrendingUp } from 'lucide-react'

const ACTIVITIES = [
  {
    type: 'post',
    icon: MessageSquare,
    color: 'text-pi-blue bg-pi-blue/10',
    user: 'Michael C.',
    action: 'posted in',
    target: 'General Discussion',
    title: 'Best suburbs for cashflow in Brisbane?',
    time: '2 min ago',
  },
  {
    type: 'join',
    icon: UserPlus,
    color: 'text-green-500 bg-green-100',
    user: 'Sarah W.',
    action: 'joined the community',
    target: null,
    title: null,
    time: '5 min ago',
  },
  {
    type: 'deal',
    icon: Calculator,
    color: 'text-pi-gold bg-pi-gold/10',
    user: 'David T.',
    action: 'analysed a deal in',
    target: 'Deal Calculator',
    title: 'Gladstone 3BR house - 7.2% yield',
    time: '12 min ago',
  },
  {
    type: 'post',
    icon: MessageSquare,
    color: 'text-pi-blue bg-pi-blue/10',
    user: 'Jenny P.',
    action: 'replied to',
    target: 'Property Strategies',
    title: 'SMSF property purchases - experiences?',
    time: '18 min ago',
  },
  {
    type: 'course',
    icon: BookOpen,
    color: 'text-pi-coral bg-pi-coral/10',
    user: 'Tom H.',
    action: 'completed',
    target: '11 Second Solution',
    title: null,
    time: '25 min ago',
  },
  {
    type: 'post',
    icon: MessageSquare,
    color: 'text-pi-blue bg-pi-blue/10',
    user: 'Lisa M.',
    action: 'posted in',
    target: 'Tax & Finance',
    title: 'Depreciation schedules - worth it?',
    time: '32 min ago',
  },
  {
    type: 'join',
    icon: UserPlus,
    color: 'text-green-500 bg-green-100',
    user: 'James K.',
    action: 'joined the community',
    target: null,
    title: null,
    time: '45 min ago',
  },
]

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-pi-blue" />
          <h3 className="font-semibold text-gray-900">Live Activity</h3>
        </div>
        <span className="flex items-center gap-1 text-xs text-green-600">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Live
        </span>
      </div>

      <div className="divide-y divide-gray-50 max-h-[400px] overflow-y-auto">
        {ACTIVITIES.map((activity, i) => (
          <a
            key={i}
            href="#"
            className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activity.color}`}>
              <activity.icon size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700">
                <span className="font-medium">{activity.user}</span>{' '}
                <span className="text-gray-500">{activity.action}</span>{' '}
                {activity.target && <span className="font-medium">{activity.target}</span>}
              </p>
              {activity.title && (
                <p className="text-sm text-gray-900 font-medium truncate mt-0.5">
                  {activity.title}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
        <a href="#" className="text-sm text-pi-blue font-medium hover:underline">
          View all activity →
        </a>
      </div>
    </div>
  )
}
