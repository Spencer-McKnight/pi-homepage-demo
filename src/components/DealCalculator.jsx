import { useState } from 'react'
import { Calculator, Info, ArrowRight } from 'lucide-react'

export default function DealCalculator() {
  const [mode, setMode] = useState('income')
  const [rent, setRent] = useState('')
  const [price, setPrice] = useState('')
  const [growth, setGrowth] = useState('')

  const weeklyRent = parseFloat(rent) || 0
  const purchasePrice = parseFloat(price) || 0
  const annualGrowth = parseFloat(growth) || 0

  const annualRent = weeklyRent * 52
  const grossYield = purchasePrice > 0 ? ((annualRent / purchasePrice) * 100).toFixed(2) : 0
  const projection = purchasePrice > 0 ? (purchasePrice * Math.pow(1 + annualGrowth / 100, 10)).toFixed(0) : 0

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left - Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pi-gold/10 rounded-lg">
                <Calculator size={24} className="text-pi-gold" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Deal Calculator</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Road test the numbers to see if a property is a deal, or a dud. Input rent, purchase price and annual growth to analyse potential returns.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pi-blue text-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">1</div>
                <p className="text-sm text-gray-600">Enter the property details to get instant yield calculations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pi-blue text-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">2</div>
                <p className="text-sm text-gray-600">Compare multiple properties to find the best investment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pi-blue text-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">3</div>
                <p className="text-sm text-gray-600">Save deals to your account for future reference</p>
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-pi-blue font-medium hover:underline">
              Launch Full Calculator <ArrowRight size={16} />
            </a>
          </div>

          {/* Right - Calculator */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-pi-blue-dark text-white p-4">
              <h3 className="font-semibold">Quick Analysis</h3>
            </div>

            <div className="p-5 space-y-4">
              {/* Mode toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setMode('income')}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${mode === 'income' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
                >
                  Income
                </button>
                <button
                  onClick={() => setMode('growth')}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${mode === 'growth' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
                >
                  Growth
                </button>
              </div>

              {/* Inputs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weekly Rent</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    placeholder="320"
                    value={rent}
                    onChange={e => setRent(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pi-blue/20 focus:border-pi-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    placeholder="450,000"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pi-blue/20 focus:border-pi-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Est. Annual Growth</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="3"
                    value={growth}
                    onChange={e => setGrowth(e.target.value)}
                    className="w-full pr-8 pl-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pi-blue/20 focus:border-pi-blue"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    Gross Yield <Info size={12} className="text-gray-400" />
                  </span>
                  <span className="font-semibold text-gray-900">{grossYield}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Annual Rent</span>
                  <span className="font-semibold text-gray-900">${annualRent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">10yr Projection</span>
                  <span className="font-semibold text-gray-900">${parseInt(projection).toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-pi-blue-dark hover:bg-pi-blue text-white font-medium py-3 rounded-lg transition-colors">
                Launch Detailed Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
