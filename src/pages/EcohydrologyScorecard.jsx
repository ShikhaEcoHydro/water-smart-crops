import Disclaimer from '../components/Disclaimer'
import { cropData } from '../data/cropData'
import { useAppContext } from '../context/AppContext'

const CROPS = ["Paddy", "Wheat", "Millet", "Mustard", "Pulses", "Sugarcane"]

function EcohydrologyScorecard() {
  const { percentages } = useAppContext()

  const bioMap = Object.fromEntries(cropData.map((c) => [c.crop, c.biodiversity]))
  const waterMap = Object.fromEntries(cropData.map((c) => [c.crop, c.water]))

  const biodiversityScore = CROPS.reduce(
    (sum, c) => sum + (percentages[c] / 100) * bioMap[c], 0
  )

  const maxWater = Math.max(...cropData.map((c) => c.water))
  const avgWater = CROPS.reduce(
    (sum, c) => sum + (percentages[c] / 100) * waterMap[c], 0
  )
  const waterScore = 5 * (1 - avgWater / maxWater)

  const ecosystemScore = (waterScore + biodiversityScore) / 2
  const resilienceScore = (biodiversityScore * 0.6 + waterScore * 0.4)

  const scores = [
    { label: "Water Score", value: waterScore, color: "bg-blue-500" },
    { label: "Biodiversity Score", value: biodiversityScore, color: "bg-green-500" },
    { label: "Ecosystem Services Score", value: ecosystemScore, color: "bg-teal-500" },
    { label: "Resilience Score", value: resilienceScore, color: "bg-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Ecohydrology Scorecard</h1>

        <div className="bg-white rounded-xl shadow p-6 space-y-6">
          {scores.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{s.label}</span>
                <span className="font-semibold">{s.value.toFixed(1)} / 5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${s.color}`}
                  style={{ width: `${(s.value / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Disclaimer />
    </div>
  )
}

export default EcohydrologyScorecard