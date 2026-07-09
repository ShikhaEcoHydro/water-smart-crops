export function getRiskCategory(stress) {
  if (stress > 100) return { label: "Over-exploited", color: "text-red-700 bg-red-100" }
  if (stress >= 81) return { label: "High", color: "text-orange-700 bg-orange-100" }
  if (stress >= 51) return { label: "Moderate", color: "text-yellow-700 bg-yellow-100" }
  return { label: "Safe", color: "text-green-700 bg-green-100" }
}