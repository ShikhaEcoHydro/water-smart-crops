import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Landing from './pages/Landing'
import GroundwaterDashboard from './pages/GroundwaterDashboard'
import WaterFootprint from './pages/WaterFootprint'
import CropTransitionSimulator from './pages/CropTransitionSimulator'
import EcohydrologyScorecard from './pages/EcohydrologyScorecard'
import NatureBasedSolutions from './pages/NatureBasedSolutions'
import MarketOpportunities from './pages/MarketOpportunities'
import WhatIfDistrict from './pages/WhatIfDistrict'
import CommunityReport from './pages/CommunityReport'
import Navbar from './components/Navbar'
import FinalPage from './pages/FinalPage'

function App() {
  return (
    <AppProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<GroundwaterDashboard />} />
      <Route path="/water-footprint" element={<WaterFootprint />} />
      <Route path="/simulator" element={<CropTransitionSimulator />} />
      <Route path="/scorecard" element={<EcohydrologyScorecard />} />
      <Route path="/solutions" element={<NatureBasedSolutions />} />
      <Route path="/market" element={<MarketOpportunities />} />
      <Route path="/what-if" element={<WhatIfDistrict />} />
      <Route path="/report" element={<CommunityReport />} />
      <Route path="/final" element={<FinalPage />} />
    </Routes>
  </BrowserRouter>
</AppProvider>
  )
}

export default App