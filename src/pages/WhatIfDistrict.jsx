import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { districtData } from '../data/districtData'
import { useAppContext } from '../context/AppContext'
import Disclaimer from '../components/Disclaimer'

function WhatIfDistrict() {
  const { selectedDistrict } = useAppContext()
  const data = districtData.find((d) => d.district === selectedDistrict)
  const currentStress = data.stress

  // Scenario: proportional stress reduction for 10/20/30/40% millet conversion
  const scenarioData = [0, 10, 20, 30, 40].map((pct) => ({
    conversion: pct === 0 ? "Current" : `${pct}%`,
    stress: Math.round(currentStress * (1 - pct * 0.0085)), // ~8.5% stress drop per 10% conversion, matching original spec's Agra ratio
  }))

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">What If My District Changes?</h1>
        <p className="text-gray-600 mb-8">
          Simulated impact of millet conversion on groundwater stress ({data.district}, current stress: {currentStress}%)
        </p>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="font-semibold text-gray-700 mb-4">Stress Trend as Millet Conversion Increases</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={scenarioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="conversion" />
              <YAxis domain={[0, 150]} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Line type="monotone" dataKey="stress" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-gray-700 mb-4">Stress by Conversion Scenario</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={scenarioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="conversion" />
              <YAxis domain={[0, 150]} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="stress" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Disclaimer />
    </div>
  )
}

export default WhatIfDistrict