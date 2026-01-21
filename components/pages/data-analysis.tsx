'use client'

import { useState } from 'react'
import { ChevronDown, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function DataAnalysis() {
  const [filters, setFilters] = useState({
    company: '',
    topic: '',
    category: '',
    rangeType: '',
    date: '',
  })

  const [dataShown, setDataShown] = useState(false)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Data Analysis</h1>

      {/* Filter Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <div className="relative">
              <select
                value={filters.company}
                onChange={(e) => setFilters({ ...filters, company: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
            <div className="relative">
              <select
                value={filters.topic}
                onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="topic1">Topic 1</option>
                <option value="topic2">Topic 2</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <div className="relative">
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="cat1">Category 1</option>
                <option value="cat2">Category 2</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Range Type</label>
            <div className="relative">
              <select
                value={filters.rangeType}
                onChange={(e) => setFilters({ ...filters, rangeType: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
            <div className="relative">
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar size={18} className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Get Data Button */}
        <div className="mt-6">
          <button
            onClick={() => setDataShown(true)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors block sm:inline-block"
          >
            Get Data
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center items-center py-16 relative">
        <div className="text-center w-full">
          <button
            onClick={() => {
              // simple CSV export of selected filters
              const rows = [["filter", "value"], ["company", filters.company || 'all'], ["topic", filters.topic || 'all'], ["category", filters.category || 'all'], ["rangeType", filters.rangeType || 'all'], ["date", filters.date || '']]
              const csv = rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n')
              const blob = new Blob([csv], { type: 'text/csv' })
              const url = URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url
              a.download = `data-analysis-filters-${Date.now()}.csv`
              a.click()
              URL.revokeObjectURL(url)
            }}
            className="absolute right-6 top-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-lg inline-flex items-center gap-2 z-20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3v12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 11l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Export
          </button>
          <svg width="400" height="300" viewBox="0 0 400 300" className="mx-auto mb-6">
            {/* Illustration placeholder - representing analytics data analysis */}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#ffa94d', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f9fa" />
            {/* Person silhouette */}
            <circle cx="200" cy="80" r="25" fill="#ff6b6b" />
            <path
              d="M 200 110 L 200 160 M 180 130 L 220 130 M 200 160 L 185 200 M 200 160 L 215 200"
              stroke="#ff6b6b"
              strokeWidth="4"
              fill="none"
            />
            {/* Chart elements */}
            <rect x="100" y="150" width="8" height="100" fill="#51cf66" />
            <rect x="115" y="120" width="8" height="130" fill="#51cf66" />
            <rect x="130" y="100" width="8" height="150" fill="#51cf66" />
            {/* Stats display */}
            <circle cx="270" cy="100" r="40" fill="#ffa94d" opacity="0.3" />
            <text x="270" y="105" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#ff6b6b">
              4900
            </text>
            {/* Analytics icon */}
            <path
              d="M 280 200 L 320 160 L 340 180 L 360 140"
              stroke="#228be6"
              strokeWidth="3"
              fill="none"
            />
          </svg>
          <p className="text-gray-600 font-medium">Select filters and click &quot;Get Data&quot; to view analytics</p>
        </div>
      </div>
    </div>
  )
}
