import { useNavigate } from 'react-router-dom'
import Disclaimer from '../components/Disclaimer'

function FinalPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-green-50 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">Water Smart Crops</h1>
      <p className="text-lg text-green-700 mb-8">Know Your Crops, Save Your Water</p>

      <p className="text-gray-700 max-w-md mb-10 text-lg">
        Small changes in crop choices can secure groundwater for future generations.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/report')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Download Report
        </button>
        <button
          onClick={() => navigate('/simulator')}
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Start New Simulation
        </button>
      </div>

      <Disclaimer />
    </div>
  )
}

export default FinalPage