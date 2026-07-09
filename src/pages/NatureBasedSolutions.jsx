import Disclaimer from '../components/Disclaimer'
import { districtData } from '../data/districtData'
import { useAppContext } from '../context/AppContext'

const solutions = [
  { title: "Millet Diversification", why: "Millets need up to 4x less water than paddy while providing better nutrition and market resilience, directly reducing groundwater extraction." },
  { title: "Crop Rotation", why: "Alternating water-intensive crops with legumes or pulses breaks pest cycles, restores soil nitrogen naturally, and reduces cumulative water demand across a growing season." },
  { title: "Intercropping", why: "Growing complementary crops together improves land-use efficiency, reduces irrigation needs per unit area, and increases biodiversity on the same footprint." },
  { title: "Soil Organic Matter Improvement", why: "Higher organic matter increases soil water retention, meaning less irrigation is needed to sustain the same yield — it acts like a natural reservoir." },
]

function NatureBasedSolutions() {
  const { selectedDistrict } = useAppContext()
  const data = districtData.find((d) => d.district === selectedDistrict)
  const isHighStress = data.stress > 80

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Nature-Based Solutions</h1>
        <p className="text-gray-600 mb-8">
          Recommendations for {data.district} (Groundwater Stress: {data.stress}%)
        </p>

        {isHighStress ? (
          <div className="space-y-4">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow p-6">
                <h2 className="font-bold text-green-700 text-lg mb-2">{s.title}</h2>
                <p className="text-gray-600">{s.why}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-6 text-gray-600">
            Groundwater stress in {data.district} is currently within a manageable range.
            Continued monitoring and gradual diversification are still recommended good practice.
          </div>
        )}
      </div>
      <Disclaimer />
    </div>
  )
}

export default NatureBasedSolutions