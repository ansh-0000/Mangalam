import { Edit } from 'lucide-react'

interface CompanyCardProps {
  company: {
    id: number
    name: string
    description: string
  }
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-blue-600 mb-3">{company.name}</h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{company.description}</p>
      <div className="flex items-center justify-between">
        <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm">
          Create
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit size={20} className="text-orange-500" />
        </button>
      </div>
    </div>
  )
}
