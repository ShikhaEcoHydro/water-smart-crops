import Disclaimer from '../components/Disclaimer'
import ExploreCards from '../components/ExploreCards'
import { districtData } from '../data/districtData'
import { getRiskCategory } from '../data/riskUtils'
import { useAppContext } from '../context/AppContext'

function GroundwaterDashboard() {
  const { selectedDistrict, setSelectedDistrict } = useAppContext()

  const data = districtData.find((d) => d.district === selectedDistrict)
  const risk = getRiskCategory(data.stress)

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Groundwater Dashboard</h1>

        <label className="block text-gray-700 font-medium mb-2">Select District</label>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-8"
        >
          {districtData.map((d) => (
            <option key={d.district} value={d.district}>{d.district}</option>
          ))}
        </select>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Groundwater Stress</span>
            <span className="text-2xl font-bold">{data.stress}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Trend</span>
            <span className="font-semibold">{data.trend}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Groundwater Depth</span>
            <span className="font-semibold">{data.depth} m</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Dominant Crops</span>
            <span className="font-semibold">{data.dominant.join(', ')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Risk Category</span>
            <span className={`px-3 py-1 rounded-full font-semibold ${risk.color}`}>{risk.label}</span>
          </div>
        </div>

        <ExploreCards />
      </div>
      <Disclaimer />
    </div>
  )
}

export default GroundwaterDashboard