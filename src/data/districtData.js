export const districtData = [
  { district: "Agra", stress: 117, trend: "Declining", depth: 13, dominant: ["Wheat", "Mustard", "Paddy"] },
  { district: "Ghaziabad", stress: 114, trend: "Declining", depth: 15, dominant: ["Sugarcane", "Paddy"] },
  { district: "Meerut", stress: 78, trend: "Declining", depth: 14, dominant: ["Sugarcane", "Paddy"] },
  { district: "Lucknow", stress: 66, trend: "Stable", depth: 8, dominant: ["Paddy", "Wheat"] },
  { district: "Varanasi", stress: 91, trend: "Stable", depth: 7, dominant: ["Paddy", "Wheat", "Pulses"] },
]

export function getRiskCategory(stress) {
  if (stress <= 50) return { label: "Safe", color: "text-green-600" }
  if (stress <= 80) return { label: "Moderate", color: "text-yellow-600" }
  if (stress <= 100) return { label: "High", color: "text-orange-600" }
  return { label: "Over-exploited", color: "text-red-600" }
}