import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [selectedDistrict, setSelectedDistrict] = useState("Agra")
  const [area, setArea] = useState(10)
  const [currentCrop, setCurrentCrop] = useState("Paddy")
  const [percentages, setPercentages] = useState({
    Paddy: 100, Wheat: 0, Millet: 0, Mustard: 0, Pulses: 0, Sugarcane: 0,
  })

  const value = {
    selectedDistrict, setSelectedDistrict,
    area, setArea,
    currentCrop, setCurrentCrop,
    percentages, setPercentages,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}