import Disclaimer from '../components/Disclaimer'
import { cropData } from '../data/cropData'
import { districtData } from '../data/districtData'
import { useAppContext } from '../context/AppContext'

const CROPS = ["Paddy", "Wheat", "Millet", "Mustard", "Pulses", "Sugarcane"]

function CropTransitionSimulator() {
  const { area, currentCrop, selectedDistrict, percentages, setPercentages } = useAppContext()

  const districtInfo = districtData.find((d) => d.district === selectedDistrict)
  const currentStress = districtInfo.stress

  function handleSliderChange(crop, newValue) {
    newValue = Number(newValue)
    const oldValue = percentages[crop]
    const diff = newValue - oldValue

    const others = CROPS.filter((c) => c !== crop)
    const othersTotal = others.reduce((sum, c) => sum + percentages[c], 0)

    const updated = { ...percentages, [crop]: newValue }

    if (othersTotal > 0) {
      others.forEach((c) => {
        const share = percentages[c] / othersTotal
        updated[c] = Math.max(0, Math.round(percentages[c] - diff * share))
      })
    }

    const total = CROPS.reduce((sum, c) => sum + updated[c], 0)
    const correction = 100 - total
    if (correction !== 0) {
      const firstOther = others.find((c) => updated[c] + correction >= 0)
      if (firstOther) updated[firstOther] += correction
    }

    setPercentages(updated)
  }

  const waterMap = Object.fromEntries(cropData.map((c) => [c.crop, c.water]))

  const originalDemand = area * waterMap[currentCrop]
  const newDemand = CROPS.reduce(
    (sum, c) => sum + (percentages[c] / 100) * area * waterMap[c],
    0
  )
  const waterSaved = originalDemand - newDemand
  const newStress = Math.min(150, Math.max(0, currentStress * (newDemand / originalDemand)))

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Crop Transition Simulator</h1>
        <p className="text-gray-600 mb-6">
          {selectedDistrict} — {area} hectares, currently growing {currentCrop}
        </p>

        <div className="bg-white rounded-xl shadow p-6 mb-8 space-y-5">
          {CROPS.map((crop) => (
            <div key={crop}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{crop}</span>
                <span className="text-gray-600">{percentages[crop]}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={percentages[crop]}
                onChange={(e) => handleSliderChange(crop, e.target.value)}
                className="w-full"
              />
            </div>
          ))}
          <div className="text-sm text-gray-500 pt-2">
            Total: {CROPS.reduce((sum, c) => sum + percentages[c], 0)}%
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Original Water Demand</span>
            <span className="font-semibold">{originalDemand.toLocaleString()} m³</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">New Water Demand</span>
            <span className="font-semibold">{Math.round(newDemand).toLocaleString()} m³</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Water Saved</span>
            <span className="font-bold text-green-700">{Math.round(waterSaved).toLocaleString()} m³</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Stress Before</span>
            <span className="font-semibold">{currentStress}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Stress After</span>
            <span className="font-bold text-blue-700">{Math.round(newStress)}%</span>
          </div>
        </div>
      </div>
      <Disclaimer />
    </div>
  )
}

export default CropTransitionSimulator