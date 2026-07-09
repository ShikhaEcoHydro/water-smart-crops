import Disclaimer from '../components/Disclaimer'
import { cropData } from '../data/cropData'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { useAppContext } from '../context/AppContext'

function WaterFootprint() {
  const { area, setArea, currentCrop, setCurrentCrop } = useAppContext()

  const crop = cropData.find((c) => c.crop === currentCrop)
  const demand = area * crop.water

  const chartData = cropData.map((c) => ({
    crop: c.crop,
    demand: area * c.water,
  }))

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Crop Water Footprint</h1>

        <div className="bg-white rounded-xl shadow p-6 mb-8 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Farm Area (hectares)</label>
            <input
              type="number"
              min="0"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Current Crop</label>
            <select
              value={currentCrop}
              onChange={(e) => setCurrentCrop(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              {cropData.map((c) => (
                <option key={c.crop} value={c.crop}>{c.crop}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-600">Annual Water Demand</span>
            <span className="text-2xl font-bold text-blue-700">
              {demand.toLocaleString()} m³
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-gray-700 mb-4">Water Demand Comparison Across Crops</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="crop" />
              <YAxis />
              <Tooltip formatter={(value) => `${value.toLocaleString()} m³`} />
              <Bar dataKey="demand" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Disclaimer />
    </div>
  )
}

export default WaterFootprint