'use client'

import { TrendingUp, MessageCircle, Star, MoreVertical } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import UserCard from '@/components/dashboard/user-card'
import MetricCard from '@/components/dashboard/metric-card'

const chartData = [
  { year: '2016', value: 8000 },
  { year: '2017', value: 15000 },
  { year: '2018', value: 12000 },
  { year: '2019', value: 35000 },
  { year: '2020', value: 25000 },
  { year: '2021', value: 45000 },
  { year: '2022', value: 50000 },
]

const users = [
  {
    name: 'Chris Friedkly',
    role: 'Admin',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Maggie Johnson',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Gael Harry',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    name: 'Jenna Sullivan',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
]

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Total Company"
          value="6"
          subtitle="Increase compared to last month"
        />
        <MetricCard
          title="Total Manglam"
          value="24%"
          subtitle="Increase compared to last week"
        />
        <MetricCard
          title="Record Updated"
          value="12"
          subtitle="Increase compared to last week"
        />
      </div>

      {/* Users and Growth Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Users</h2>
          <div className="space-y-4">
            {users.map((user, index) => (
              <UserCard key={index} user={user} highlight={index === 1} />
            ))}
          </div>
        </div>

        {/* Growth Chart */}
        <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Growth</h2>
            <select className="text-sm rounded-md border border-gray-200 px-3 py-1 bg-white">
              <option>Yearly</option>
              <option>Monthly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeDasharray="4 4"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGrowth)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">Top month</h3>
          <div className="mt-3">
            <p className="text-2xl font-bold text-gray-900">November</p>
            <p className="text-sm text-yellow-600 font-semibold">2019</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">Top year</h3>
          <div className="mt-3">
            <p className="text-2xl font-bold text-gray-900">2023</p>
            <p className="text-sm text-gray-500">96K record so far</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">Top User</h3>
          <div className="mt-3 flex items-center gap-3">
            <img src={users[1].image} alt={users[1].name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium text-gray-900">{users[1].name}</p>
              <p className="text-xs text-gray-500">{users[1].role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
