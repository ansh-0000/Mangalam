'use client'

import { useState } from 'react'
import { Upload, ChevronDown } from 'lucide-react'
import DataUpload from '@/components/add-data/data-upload'
import DataTable from '@/components/add-data/data-table'

export default function AddData() {
  const [filters, setFilters] = useState({
    company: '',
    type: '',
  })

  const initialRows = [
    { timestamp: '12/10/2024 19:20pm', company: 'Dum', type: '2D', record: 10 },
    { timestamp: '12/10/2024 19:20pm', company: 'Dum', type: '2D', record: 10 },
    { timestamp: '12/10/2024 19:20pm', company: 'Dum', type: '2D', record: 10 },
  ]

  const [rows, setRows] = useState(initialRows)

  const handleFileChange = (file: File | null) => {
    // optional: could set preview or validation here
    console.log('file selected:', file)
  }

  const handleCancel = () => {
    // reset filters if needed; currently nothing else to do
    setFilters({ company: '', type: '' })
  }

  const handleDone = (file: File | null) => {
    const timestamp = new Date().toLocaleString()
    const company = filters.company || 'Dum'
    const type = filters.type || '2D'
    const record = 10
    setRows((prev) => [{ timestamp, company, type, record }, ...prev])
    console.log('Done clicked, appended row for', file?.name)
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add Data</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Upload Form */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="w-full max-w-2xl lg:max-w-xs">
          {/* Filter Dropdowns */}
            <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <div className="relative">
                <select
                  value={filters.company}
                  onChange={(e) => setFilters({ ...filters, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Company</option>
                  <option value="company1">Company 1</option>
                  <option value="company2">Company 2</option>
                </select>
                <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <div className="relative">
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Type</option>
                  <option value="2d">2D</option>
                  <option value="3d">3D</option>
                </select>
                <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

            {/* Upload Section */}
            <div className="">
              <DataUpload onFileChange={handleFileChange} onCancel={handleCancel} onDone={handleDone} />
            </div>
          </div>
        </div>

        {/* Right Side - Data Table */}
        <div className="lg:col-span-2">
          <DataTable rows={rows} />
        </div>
      </div>
    </div>
  )
}
