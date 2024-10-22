import React from 'react'

type TransactionItem = {
    id: string,
    title: string,
    date: string,
    description: string,
    amount: string
}

export const Item = ({
  id,
  date,
  title,
  description,
  amount
} :TransactionItem ) => {
  return (
    <li key={id} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between">
      <div className="flex-1 mb-2 sm:mb-0">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 sm:mb-0">{title}</h3>
        <p className="text-sm font-medium text-gray-900">{description}</p>
        <p className="text-xs text-gray-500">{new Date(date).toLocaleDateString("en-US")}</p>
      </div>
      <div className="flex items-center justify-between sm:justify-end space-x-4">
        <span className="text-sm font-semibold text-green-600">
          {amount}
        </span>
      </div>
    </div>
  </li>
  )
}