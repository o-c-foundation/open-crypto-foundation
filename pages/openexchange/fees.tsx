import React from 'react'
import { FaExchangeAlt, FaCoins, FaChartLine, FaPercentage } from 'react-icons/fa'
import Layout from '../../components/Layout'

interface FeeTable {
  title: string
  headers: string[]
  rows: string[][]
  icon?: React.ReactNode
}

const FeeTable: React.FC<{ table: FeeTable }> = ({ table }) => (
  <div className="mb-12">
    <div className="flex items-center mb-4">
      {table.icon && <span className="mr-3 text-primary">{table.icon}</span>}
      <h2 className="text-xl font-bold text-white">{table.title}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-dark-card rounded-lg">
        <thead>
          <tr className="border-b border-gray-700">
            {table.headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left text-sm font-medium text-gray-300">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-700 last:border-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-sm text-gray-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const ExchangeFees = () => {
  const tables: FeeTable[] = [
    {
      title: 'Trading Fee',
      icon: <FaPercentage />,
      headers: ['Volume Tier (Monthly volume) (USD)', 'Maker Fee (%)', 'Taker Fee (%)', 'Maker Fees HCX (%)', 'Taker Fee HCX (%)'],
      rows: [
        ['0-10000', '0.50', '0.50', '0.375', '0.375'],
        ['10001-50000', '0.35', '0.35', '0.2625', '0.2625'],
        ['50001-100000', '0.15', '0.25', '0.1125', '0.1875'],
        ['100001-1000000', '0.10', '0.20', '0.075', '0.15'],
        ['1000001-10000000', '0.08', '0.18', '0.06', '0.135'],
        ['10000001-50000000', '0.05', '0.15', '0.0375', '0.1125'],
        ['50000001-100000000', '0.04', '0.10', '0.03', '0.07'],
        ['100000001-300000000', '0', '0.07', '0', '0.0525'],
        ['300000001-500000000', '0', '0.06', '0', '0.045'],
        ['500000001-1000000000', '0', '0.05', '0', '0.0375'],
        ['1000000001-100000000000000', '0', '0.04', '0', '0.03']
      ]
    },
    {
      title: 'Deposit and Withdrawal Fees',
      icon: <FaCoins />,
      headers: ['Currency', 'Minimum Withdrawal', 'Maximum Withdrawal', 'Deposit', 'Withdrawal Fee'],
      rows: [
        ['BTC', '0.0015', '6', 'Free', '1% + 0.00085'],
        ['ETH', '0.01', '200', 'Free', '1% + 0.0015'],
        ['BCH', '0.002', '200', 'Free', '0% + 0.00064'],
        ['LTC', '0.002', '1150', 'Free', '0% + 0.001'],
        ['HCX', '1', '24000', 'Free', '0% + 0.01'],
        ['HCX ERC20', '1', '24000', 'Free', '0% + 0.01'],
        ['XRP', '15', '26050', 'Free', '1% + 0.2'],
        ['USDT POL', '25', '10000', 'Free', '1% + 2'],
        ['USDT TRC', '25', '10000', 'Free', '1% + 2'],
        ['USDT', '25', '10000', 'Free', '1% + 6']
      ]
    },
    {
      title: 'Options Lending Borrowing & Transaction Charges',
      icon: <FaChartLine />,
      headers: ['Currency Name', 'Transfer In Margin Wallet', 'Borrowable', 'Transaction Charges (%)', 'Daily Interest / Yearly Interest Paid by Borrower', 'Daily Interest / Yearly Interest Earned by Lender'],
      rows: [
        ['USDT', '', '', '0.5', '0.06% / 21.9%', '0.051% / 18.615%'],
        ['BTC', '', '', '0.5', '0.06% / 21.9%', '0.051% / 18.615%'],
        ['ETH', '', '', '0.5', '0.06% / 21.9%', '0.051% / 18.615%']
      ]
    }
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <FaExchangeAlt className="text-primary mr-3" size={24} />
          <h1 className="text-3xl font-bold text-white">Exchange Fees</h1>
        </div>
        <div className="space-y-8">
          {tables.map((table, index) => (
            <FeeTable key={index} table={table} />
          ))}
          <div className="bg-dark-card p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Futures Lending Borrowing & Transaction Charges</h3>
            <p className="text-gray-300">Valatility dependent</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ExchangeFees 