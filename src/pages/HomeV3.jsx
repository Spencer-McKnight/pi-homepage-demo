// Strategy 3: Community Hub Dashboard
import QuickActionsBar from '../components/v3/QuickActionsBar'
import ActivityFeed from '../components/v3/ActivityFeed'
import MemberSpotlight from '../components/v3/MemberSpotlight'
import EventsCalendar from '../components/v3/EventsCalendar'
import TrendingTopics from '../components/v3/TrendingTopics'
import LeaderboardWidget from '../components/v3/LeaderboardWidget'
import ResourceQuickLinks from '../components/v3/ResourceQuickLinks'
import CommunitySignup from '../components/v3/CommunitySignup'

export default function HomeV3() {
  return (
    <>
      <QuickActionsBar />
      
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Dashboard grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left column - Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Welcome banner for non-members */}
              <CommunitySignup />
              
              {/* Trending topics */}
              <TrendingTopics />
              
              {/* Events */}
              <EventsCalendar />
            </div>

            {/* Right column - Sidebar */}
            <div className="space-y-6">
              {/* Activity feed */}
              <ActivityFeed />
              
              {/* Member spotlight */}
              <MemberSpotlight />
              
              {/* Leaderboard */}
              <LeaderboardWidget />
            </div>
          </div>

          {/* Bottom section - Resources */}
          <div className="mt-8">
            <ResourceQuickLinks />
          </div>
        </div>
      </section>
    </>
  )
}
