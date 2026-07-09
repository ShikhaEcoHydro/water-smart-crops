import Disclaimer from '../components/Disclaimer'
import jsPDF from 'jspdf'
import { districtData } from '../data/districtData'
import { cropData } from '../data/cropData'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const CROPS = ["Paddy", "Wheat", "Millet", "Mustard", "Pulses", "Sugarcane"]

function CommunityReport() {
  const { selectedDistrict, area, currentCrop, percentages } = useAppContext()
  const navigate = useNavigate()

  const districtInfo = districtData.find((d) => d.district === selectedDistrict)
  const waterMap = Object.fromEntries(cropData.map((c) => [c.crop, c.water]))
  const bioMap = Object.fromEntries(cropData.map((c) => [c.crop, c.biodiversity]))

  const originalDemand = area * waterMap[currentCrop]
  const newDemand = CROPS.reduce(
    (sum, c) => sum + (percentages[c] / 100) * area * waterMap[c], 0
  )
  const waterSaved = Math.round(originalDemand - newDemand)

  const biodiversityScore = CROPS.reduce(
    (sum, c) => sum + (percentages[c] / 100) * bioMap[c], 0
  ).toFixed(1)

  const scenarioSummary = CROPS
    .filter((c) => percentages[c] > 0)
    .map((c) => `${c} ${percentages[c]}%`)
    .join(', ')

  const recommendations = ["Millet Diversification", "Crop Rotation", "Intercropping", "Soil Organic Matter Improvement"]
  const sdgs = ["SDG 2: Zero Hunger", "SDG 4: Quality Education", "SDG 6: Clean Water", "SDG 13: Climate Action", "SDG 15: Life on Land"]

  function generatePDF() {
    const doc = new jsPDF()
    let y = 20

    doc.setFontSize(18)
    doc.text("AquaCrop Insight — Community Report", 20, y)
    y += 15

    doc.setFontSize(12)
    doc.text(`District: ${selectedDistrict}`, 20, y); y += 8
    doc.text(`Groundwater Stress: ${districtInfo.stress}%`, 20, y); y += 8
    doc.text(`Crop Scenario: ${scenarioSummary}`, 20, y); y += 8
    doc.text(`Water Saved: ${waterSaved.toLocaleString()} m³`, 20, y); y += 8
    doc.text(`Biodiversity Score: ${biodiversityScore} / 5`, 20, y); y += 12

    doc.setFontSize(14)
    doc.text("Recommendations:", 20, y); y += 8
    doc.setFontSize(12)
    recommendations.forEach((r) => { doc.text(`• ${r}`, 25, y); y += 7 })
    y += 5

    doc.setFontSize(14)
    doc.text("SDGs Supported:", 20, y); y += 8
    doc.setFontSize(12)
    sdgs.forEach((s) => { doc.text(`• ${s}`, 25, y); y += 7 })

    y += 10
    doc.setFontSize(9)
    doc.text("This platform provides educational estimates using publicly available and sample data.", 20, y)

    doc.save("AquaCrop_Insight_Report.pdf")
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Community Report</h1>

        <div className="bg-white rounded-xl shadow p-6 space-y-3 mb-8">
          <div className="flex justify-between"><span className="text-gray-600">District</span><span className="font-semibold">{selectedDistrict}</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Groundwater Stress</span><span className="font-semibold">{districtInfo.stress}%</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Scenario</span><span className="font-semibold text-right">{scenarioSummary}</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Water Saved</span><span className="font-semibold text-green-700">{waterSaved.toLocaleString()} m³</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Biodiversity Score</span><span className="font-semibold">{biodiversityScore} / 5</span></div>
        </div>

        <button onClick={generatePDF} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Download PDF Report
        </button>
        <button
          onClick={() => navigate('/final')}
          className="ml-3 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Finish
        </button>
      </div>
      <Disclaimer />
    </div>
  )
}

export default CommunityReport