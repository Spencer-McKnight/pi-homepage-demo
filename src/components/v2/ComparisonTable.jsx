import { Check, X, ArrowRight } from 'lucide-react'

const FEATURES = [
  { name: 'Forum Access', free: true, member: true, premium: true },
  { name: 'Read Community Q&A', free: true, member: true, premium: true },
  { name: 'Post Questions', free: false, member: true, premium: true },
  { name: 'Deal Calculator', free: 'Limited', member: true, premium: true },
  { name: 'Save Deals', free: false, member: true, premium: true },
  { name: 'Free Resources & Guides', free: false, member: true, premium: true },
  { name: 'Weekly Newsletter', free: false, member: true, premium: true },
  { name: 'Course Discounts', free: false, member: '10%', premium: '25%' },
  { name: 'Live Webinars', free: false, member: false, premium: true },
  { name: 'Priority Support', free: false, member: false, premium: true },
]

const TIERS = [
  { 
    name: 'Visitor', 
    price: 'Free', 
    description: 'Browse and learn',
    cta: 'Browse Site',
    variant: 'outline',
  },
  { 
    name: 'Member', 
    price: 'Free', 
    description: 'Full community access',
    cta: 'Sign Up Free',
    variant: 'primary',
    featured: true,
  },
  { 
    name: 'Premium', 
    price: '$19/mo', 
    description: 'For serious investors',
    cta: 'Go Premium',
    variant: 'secondary',
  },
]

function CellValue({ value }) {
  if (value === true) return <Check size={18} className="text-green-500 mx-auto" />
  if (value === false) return <X size={18} className="text-gray-300 mx-auto" />
  return <span className="text-gray-700 font-medium">{value}</span>
}

export default function ComparisonTable() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Choose Your Level of Access
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you're ready for more
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-gray-200 w-1/3"></th>
                {TIERS.map((tier) => (
                  <th 
                    key={tier.name} 
                    className={`p-4 border-b text-center ${
                      tier.featured ? 'bg-pi-blue text-white' : 'border-gray-200'
                    }`}
                  >
                    <div className="text-lg font-bold">{tier.name}</div>
                    <div className={`text-2xl font-bold mt-1 ${tier.featured ? 'text-pi-gold' : 'text-gray-900'}`}>
                      {tier.price}
                    </div>
                    <div className={`text-sm mt-1 ${tier.featured ? 'text-white/70' : 'text-gray-500'}`}>
                      {tier.description}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 text-gray-700 font-medium">{feature.name}</td>
                  <td className="p-4 text-center"><CellValue value={feature.free} /></td>
                  <td className={`p-4 text-center ${TIERS[1].featured ? 'bg-pi-blue/5' : ''}`}>
                    <CellValue value={feature.member} />
                  </td>
                  <td className="p-4 text-center"><CellValue value={feature.premium} /></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4"></td>
                {TIERS.map((tier) => (
                  <td key={tier.name} className="p-4 text-center">
                    <a
                      href="#signup"
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                        tier.variant === 'primary'
                          ? 'bg-pi-coral hover:bg-pi-coral-hover text-white'
                          : tier.variant === 'secondary'
                          ? 'bg-pi-blue hover:bg-pi-blue-dark text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {TIERS.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-xl p-6 ${
                tier.featured 
                  ? 'bg-pi-blue text-white ring-2 ring-pi-coral' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="text-center mb-4">
                <div className={`text-lg font-bold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </div>
                <div className={`text-2xl font-bold ${tier.featured ? 'text-pi-gold' : 'text-gray-900'}`}>
                  {tier.price}
                </div>
              </div>
              <a
                href="#signup"
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                  tier.variant === 'primary'
                    ? 'bg-pi-coral hover:bg-pi-coral-hover text-white'
                    : tier.variant === 'secondary'
                    ? 'bg-white text-pi-blue hover:bg-gray-100'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
