import { MessageCircle, Star, Edit, MoreVertical } from 'lucide-react'
import Image from 'next/image'

interface UserCardProps {
  user: {
    name: string
    role: string
    image: string
  }
  highlight?: boolean
}

export default function UserCard({ user, highlight }: UserCardProps) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
      highlight ? 'bg-yellow-50' : 'bg-gray-50 hover:bg-gray-100'
    }`}>
      <div className="flex items-center gap-3">
        <Image
          src={user.image || '/placeholder.svg'}
          alt={user.name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <MessageCircle size={18} className="text-gray-500" />
        </button>
        <div className="h-6 w-px bg-gray-200 mx-1" />
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <Star size={18} className="text-gray-500" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <Edit size={18} className="text-gray-500" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <MoreVertical size={18} className="text-gray-500" />
        </button>
      </div>
    </div>
  )
}
