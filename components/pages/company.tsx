 'use client'

import { useState } from 'react'
import { Plus, Edit } from 'lucide-react'
import CompanyCard from '@/components/company/company-card'

const companies = [
  {
    id: 1,
    name: 'Company Name - 01.',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 2,
    name: 'Company Name - 02.',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 3,
    name: 'Company Name - 03.',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 4,
    name: 'Company Name - 04.',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 5,
    name: 'Company Name - 04.',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 6,
    name: 'Company Name - 05.',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
]

export default function Company() {
  const [list, setList] = useState(companies)
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ name: '', description: '' })

  const handleCreate = () => {
    if (!form.name.trim()) return
    const newCompany = { id: Date.now(), name: form.name, description: form.description }
    setList((prev) => [newCompany, ...prev])
    setForm({ name: '', description: '' })
    setShowAdd(false)
  }

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Companies</h1>
        <button onClick={() => setShowAdd(true)} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center">
          <Plus size={20} />
          Add Company
        </button>
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {/* Add Company Modal (simple) */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create Company</h2>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3" />
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4" />
            <div className="flex gap-3 justify-end">
              <button onClick={() => setShowAdd(false)} className="px-4 py-2 border border-gray-300 rounded-md">Cancel</button>
              <button onClick={handleCreate} className="px-4 py-2 bg-blue-600 text-white rounded-md">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
