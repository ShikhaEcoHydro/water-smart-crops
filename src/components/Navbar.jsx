import { Link } from 'react-router-dom'
import { LayoutDashboard } from 'lucide-react'

function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <span className="font-bold text-blue-800">AquaCrop Insight</span>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar