import Disclaimer from '../components/Disclaimer'

const companies = [
  {
    name: "Little Cherry Foods (Little Cherry Mom)",
    type: "Local Brand — Meerut",
    description: "A Meerut-based millet baby food company founded by Jyoti Srivastava, sourcing millets directly for its product line. Grown from a home kitchen into a business doing roughly ₹1 crore in annual revenue, serving 12,000+ customers.",
    website: "https://www.littlecherrymom.com",
    products: "Millet flours, dosa/pancake mixes, sugar-free laddus, khakhras, millet noodles",
  },
  {
    name: "UP Government Millet (Bajra) MSP Procurement",
    type: "Government Procurement — Western UP",
    description: "The Uttar Pradesh government runs a direct Minimum Support Price procurement drive for bajra (millet) across 33 districts including Agra, Meerut, Bulandshahr, and Aligarh, paying farmers directly via Aadhaar-linked bank accounts.",
    website: "https://fcs.up.gov.in",
    products: "Direct farmer procurement of bajra (millet) at government-fixed MSP",
  },
  {
    name: "PMFME Local FPOs & Cooperatives",
    type: "Government Scheme — Pan-India incl. UP",
    description: "The Pradhan Mantri Formalisation of Micro Food Processing Enterprises scheme funds and links local Farmer Producer Organisations and self-help groups to buy directly from farmers for millet-based value-added products, with credit-linked subsidies.",
    website: "https://pmfme.mofpi.gov.in",
    products: "Grants and market linkage for local millet/pulses processing groups",
  },
  {
    name: "ITC",
    type: "Big Brand",
    description: "One of India's largest FMCG conglomerates, ITC's Mission Sunehra Kal supports sustainable agriculture sourcing, including millet-based product lines.",
    website: "https://www.itcportal.com",
    products: "Millet-based snacks and ready-to-eat foods under ITC's food brands",
  },
  {
    name: "Tata Consumer Products",
    type: "Big Brand",
    description: "A major Indian food and beverage company actively expanding its millet and pulses product portfolio as part of sustainable sourcing initiatives.",
    website: "https://www.tataconsumer.com",
    products: "Millet-based food products, pulses, and grain-based staples",
  },
  {
    name: "24 Mantra Organic",
    type: "Big Brand",
    description: "A leading organic food brand in India sourcing directly from farmers practicing sustainable, low-water-intensity crop cultivation.",
    website: "https://www.24mantra.com",
    products: "Organic millets, pulses, and grains",
  },
  {
    name: "Slurrp Farm",
    type: "Big Brand",
    description: "A health-food brand focused on millet and traditional grain-based products for children and families, promoting nutritional diversity.",
    website: "https://www.slurrpfarm.com",
    products: "Millet-based baby food, snacks, and breakfast cereals",
  },
  {
    name: "Government Millet Mission",
    type: "Government Scheme — National",
    description: "India's National Millet Mission, part of the push around the International Year of Millets, supports farmers transitioning to millet cultivation through subsidies and procurement guarantees.",
    website: "https://www.myscheme.gov.in",
    products: "Farmer subsidies, procurement support, and market linkage programs",
  },
]

function MarketOpportunities() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Market Opportunities</h1>
        <p className="text-gray-600 mb-6">
          From national brands to local Meerut-based businesses actively buying low-water crops.
        </p>
        <div className="space-y-4">
          {companies.map((c) => (
            <div key={c.name} className="bg-white rounded-xl shadow p-6">
              <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full mb-2">
                {c.type}
              </span>
              <h2 className="font-bold text-gray-800 text-lg mb-2">{c.name}</h2>
              <p className="text-gray-600 mb-3">{c.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Products:</span> {c.products}
              </p>
              <a href={c.website} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
      <Disclaimer />
    </div>
  )
}

export default MarketOpportunities