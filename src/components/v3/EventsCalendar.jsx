import { Calendar, Video, Users, Clock, ExternalLink } from 'lucide-react'

const EVENTS = [
  {
    title: 'Live Q&A with Steve McKnight',
    type: 'Webinar',
    date: 'Feb 8, 2024',
    time: '7:00 PM AEDT',
    spots: 'Unlimited',
    isLive: false,
    isFree: true,
  },
  {
    title: 'Property Market Update: Feb 2024',
    type: 'Webinar',
    date: 'Feb 15, 2024',
    time: '12:00 PM AEDT',
    spots: 'Unlimited',
    isLive: false,
    isFree: true,
  },
  {
    title: 'Brisbane Property Tour',
    type: 'In-Person',
    date: 'Feb 24, 2024',
    time: '9:00 AM AEST',
    spots: '15 spots left',
    isLive: false,
    isFree: false,
  },
  {
    title: 'Bootcamp Intake - February 2024',
    type: 'Course',
    date: 'Feb 28, 2024',
    time: 'Self-paced',
    spots: '8 spots left',
    isLive: false,
    isFree: false,
  },
]

export default function EventsCalendar() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <Calendar size={18} className="text-pi-blue" />
        <h3 className="font-semibold text-gray-900">Upcoming Events</h3>
      </div>

      <div className="divide-y divide-gray-100">
        {EVENTS.map((event, i) => (
          <a
            key={i}
            href="#"
            className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors"
          >
            {/* Date badge */}
            <div className="w-12 h-12 bg-pi-blue/10 rounded-lg flex flex-col items-center justify-center shrink-0">
              <span className="text-xs text-pi-blue font-medium">
                {event.date.split(' ')[0]}
              </span>
              <span className="text-lg font-bold text-pi-blue leading-none">
                {event.date.split(' ')[1].replace(',', '')}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  event.type === 'Webinar' 
                    ? 'bg-purple-100 text-purple-700' 
                    : event.type === 'In-Person'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-pi-coral/10 text-pi-coral'
                }`}>
                  {event.type}
                </span>
                {event.isFree && (
                  <span className="text-xs text-green-600 font-medium">Free</span>
                )}
              </div>
              
              <h4 className="font-medium text-gray-900 text-sm leading-snug">
                {event.title}
              </h4>
              
              <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {event.time}
                </span>
                <span className={`flex items-center gap-1 ${
                  event.spots.includes('left') ? 'text-pi-coral font-medium' : ''
                }`}>
                  <Users size={12} /> {event.spots}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
        <a href="#" className="text-sm text-pi-blue font-medium hover:underline">
          View all events
        </a>
        <a 
          href="#" 
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <Calendar size={14} /> Add to calendar
        </a>
      </div>
    </div>
  )
}
