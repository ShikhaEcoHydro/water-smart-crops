import { Link } from 'react-router-dom'
import { Droplets, SlidersHorizontal, Leaf, Sprout, ShoppingBag, TrendingDown, FileText } from 'lucide-react'

const cards = [
  { path: '/water-footprint', icon: Droplets, label: 'Water Footprint', desc: 'See how much water your crop uses' },
  { path: '/simulator', icon: SlidersHorizontal, label: 'Crop Simulator', desc: 'Try different crop mixes' },
  { path: '/scorecard', icon: Leaf, label: 'Ecohydrology Score', desc: 'Check your sustainability score' },
  { path: '/solutions', icon: Sprout, label: 'Nature-Based Solutions', desc: 'Explore recommended fixes' },
  { path: '/market', icon: ShoppingBag, label: 'Market Opportunities', desc: 'Find buyers for alt crops' },
  { path: '/what-if', icon: TrendingDown, label: 'What If?', desc: 'Simulate district-wide change' },
  { path: '/report', icon: FileText, label: 'Community Report', desc: 'Download a summary PDF' },
]

function ExploreCards() {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Explore Next</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {cards.map((c) => {
          const Icon = c.icon
          return (
            <Link
              key={c.path}
              to={c.path}
              className="bg-white rounded-xl shadow p-4 hover:shadow-md hover:-translate-y-0.5 transition flex flex-col items-center text-center gap-2"
            >
              <div className="bg-blue-50 p-3 rounded-full">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-semibold text-sm text-gray-800">{c.label}</span>
              <span className="text-xs text-gray-500">{c.desc}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreCards