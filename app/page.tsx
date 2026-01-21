'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LayoutGrid, Building2, FileUp, BarChart3 } from 'lucide-react'
import Dashboard from '@/components/pages/dashboard'
import Company from '@/components/pages/company'
import AddData from '@/components/pages/add-data'
import DataAnalysis from '@/components/pages/data-analysis'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'add-data', label: 'Add Data', icon: FileUp },
    { id: 'data-analysis', label: 'Data Analysis', icon: BarChart3 },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">anglam</h1>
        </div>

        <nav className="space-y-2">
          <div className="text-xs font-semibold text-gray-500 mb-4 tracking-wider">MAIN</div>
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'company' && <Company />}
        {currentPage === 'add-data' && <AddData />}
        {currentPage === 'data-analysis' && <DataAnalysis />}
      </main>
    </div>
  )
}
