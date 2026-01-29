const MEDIA_MENTIONS = [
  { name: 'AFR', initials: 'AFR' },
  { name: 'The Australian', initials: 'TA' },
  { name: 'Sky News', initials: 'SKY' },
  { name: 'Money Magazine', initials: 'MM' },
  { name: 'Smart Property', initials: 'SP' },
]

const STATS = [
  { value: '161,000+', label: 'Active Members' },
  { value: '$2.1B+', label: 'Property Value Analysed' },
  { value: '20+', label: 'Years Operating' },
  { value: '4.9/5', label: 'Average Rating' },
]

export default function SocialProof() {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Media mentions */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-4">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {MEDIA_MENTIONS.map((media) => (
              <div
                key={media.name}
                className="text-gray-400 font-bold text-lg tracking-wider opacity-60 hover:opacity-100 transition-opacity"
                title={media.name}
              >
                {media.initials}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-8" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-bold text-pi-blue">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
