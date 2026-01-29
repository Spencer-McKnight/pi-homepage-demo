import { NavLink } from 'react-router-dom'

const VERSIONS = [
  { path: '/', label: 'Base', description: 'Current' },
  { path: '/v1', label: 'V1', description: 'Steve-Led' },
  { path: '/v2', label: 'V2', description: 'Course-Forward' },
  { path: '/v3', label: 'V3', description: 'Community Hub' },
]

export default function VersionSwitcher() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-900/95 backdrop-blur-sm text-white px-2 py-2 rounded-full shadow-xl flex items-center gap-1">
        <span className="text-xs text-gray-400 px-2 hidden sm:block">Layout:</span>
        {VERSIONS.map(({ path, label, description }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-pi-coral text-white'
                  : 'text-gray-300 hover:bg-white/10'
              }`
            }
          >
            <span className="sm:hidden">{label}</span>
            <span className="hidden sm:inline">{description}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
