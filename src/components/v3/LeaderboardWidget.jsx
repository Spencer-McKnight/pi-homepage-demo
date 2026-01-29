import { Trophy, MessageSquare, ThumbsUp, HelpCircle } from 'lucide-react'

const LEADERS = [
  { name: 'PropertyPro_Steve', score: 2847, rank: 1, initials: 'PS' },
  { name: 'BrisInvestor22', score: 1923, rank: 2, initials: 'BI' },
  { name: 'RegionalQueen', score: 1654, rank: 3, initials: 'RQ' },
  { name: 'CashflowKing', score: 1432, rank: 4, initials: 'CK' },
  { name: 'FirstTimeBuyer_M', score: 1287, rank: 5, initials: 'FT' },
]

export default function LeaderboardWidget() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-pi-gold" />
          <h3 className="font-semibold text-gray-900">Top Contributors</h3>
        </div>
        <span className="text-xs text-gray-500">This month</span>
      </div>

      <div className="divide-y divide-gray-50">
        {LEADERS.map((leader) => (
          <a
            key={leader.rank}
            href="#"
            className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
          >
            {/* Rank badge */}
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              leader.rank === 1 
                ? 'bg-pi-gold text-white' 
                : leader.rank === 2 
                ? 'bg-gray-300 text-gray-700'
                : leader.rank === 3
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-500'
            }`}>
              {leader.rank}
            </div>

            {/* Avatar */}
            <div className="w-8 h-8 bg-pi-blue/10 rounded-full flex items-center justify-center text-pi-blue text-xs font-medium">
              {leader.initials}
            </div>

            {/* Name & score */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{leader.name}</div>
            </div>

            {/* Score */}
            <div className="text-sm font-semibold text-pi-blue">
              {leader.score.toLocaleString()} pts
            </div>
          </a>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <HelpCircle size={12} />
            Earn points by helping others
          </span>
          <a href="#" className="text-pi-blue font-medium hover:underline">
            View full leaderboard
          </a>
        </div>
      </div>
    </div>
  )
}
