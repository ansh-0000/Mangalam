interface Row {
  timestamp: string
  company: string
  type: string
  record?: number
}

export default function DataTable({ rows }: { rows: Row[] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-left text-sm font-semibold text-gray-900">Time stamp</th>
              <th className="px-4 py-3 border border-gray-300 text-left text-sm font-semibold text-gray-900">Company Name</th>
              <th className="px-4 py-3 border border-gray-300 text-left text-sm font-semibold text-gray-900">Type</th>
              <th className="px-4 py-3 border border-gray-300 text-center text-sm font-semibold text-gray-900">Record</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                <td className="px-4 py-3 border border-gray-300 text-sm text-gray-900">{row.timestamp}</td>
                <td className="px-4 py-3 border border-gray-300 text-sm text-gray-900">{row.company}</td>
                <td className="px-4 py-3 border border-gray-300 text-sm text-gray-900">{row.type}</td>
                <td className="px-4 py-3 border border-gray-300 text-sm text-gray-900 text-center">{row.record ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
