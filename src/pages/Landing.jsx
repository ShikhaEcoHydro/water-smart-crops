import Disclaimer from '../components/Disclaimer'
import { useNavigate } from 'react-router-dom'
function Landing() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-green-50 px-6 text-center">
      <h1 className="text-5xl font-bold text-blue-800 mb-2">Water Smart Crops</h1>
      <p className="text-xl text-green-700 mb-6">Know Your Crops, Save Your Water</p>
      <p className="text-gray-600 max-w-xl mb-8">
        Explore how crop choices affect groundwater and discover sustainable farming pathways.
      </p>
      <div className="flex gap-4">
        <button
  onClick={() => navigate('/dashboard')}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
>
  Start Exploring
</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
          Learn More
        </button>
      </div>
      <Disclaimer />
    </div>
  )
}

export default Landing