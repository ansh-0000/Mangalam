import { TrendingUp } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  subtitle: string
}

export default function MetricCard({ title, value, subtitle }: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <p className="text-gray-600 text-sm font-medium mb-3">{title}</p>
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-5xl font-extrabold text-gray-900 leading-none">{value}</h3>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600">
          <TrendingUp size={16} />
        </span>
      </div>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  )
}
