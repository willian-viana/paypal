import { useEffect, useState } from 'react'
import { Item } from '../components/Item'

type Transaction = {
  id: string,
  title: string,
  date: string,
  description: string,
  amount: string
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('/api/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data)
      })
      .catch(error => {
        alert('Sorry, an error ocurred')
        console.log(error)
      })
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Transaction List</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {transactions.map((item, index) => (
            <Item key={index.toString()} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
