'use client'

import React from "react"

import { useState } from 'react'
import { Upload, X } from 'lucide-react'

interface DataUploadProps {
  onFileChange?: (file: File | null) => void
  onCancel?: () => void
  onDone?: (file: File | null) => void
}

export default function DataUpload({ onFileChange, onCancel, onDone }: DataUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isDragActive, setIsDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      setFile(files[0])
      onFileChange?.(files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      onFileChange?.(e.target.files[0])
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
      <h2 className="text-lg font-bold text-gray-900 mb-2">Upload Data Sheet</h2>
      <p className="text-sm text-gray-600 mb-6">
        Please upload file in .xls or .xlsx format and make sure the file size is under 12 MB.
      </p>

      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg transition-all cursor-pointer ${
          isDragActive
            ? 'border-blue-500 bg-blue-50'
            : file
              ? 'border-green-500 bg-green-50'
              : 'border-blue-300 bg-white'
        }`}
      >
        <div className="h-48 flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-md bg-blue-50 flex items-center justify-center">
              <Upload size={36} className={isDragActive ? 'text-blue-600' : file ? 'text-green-600' : 'text-blue-500'} />
            </div>
            <p className="mt-4 font-medium text-gray-900">Drop file or browse</p>
            <p className="text-sm text-gray-600">Format: .xls, .xlsx & Max file size: 12 MB</p>
            <label className="mt-4 inline-block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium shadow">Browse Files</button>
              <input type="file" accept=".xls,.xlsx" onChange={handleFileInput} className="hidden" />
            </label>
          </div>
        </div>

        <input
          type="file"
          accept=".xls,.xlsx"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* File Selected */}
      {file && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
          <span className="text-sm text-green-900 font-medium">{file.name}</span>
          <button
            onClick={() => setFile(null)}
            className="p-1 hover:bg-green-200 rounded transition-colors"
          >
            <X size={18} className="text-green-600" />
          </button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            setFile(null)
            onFileChange?.(null)
            onCancel?.()
          }}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => onDone?.(file)}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 shadow-lg transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  )
}
