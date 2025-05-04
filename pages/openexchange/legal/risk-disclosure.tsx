import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaExclamationTriangle, FaShieldAlt, FaBalanceScale, FaLock, FaServer, FaGavel } from 'react-icons/fa'
import ScrollToTop from '../../../components/ScrollToTop'

interface RiskItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RiskItem = ({ icon, title, description }: RiskItemProps) => (
  <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-primary/20 p-3 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
)

export default function RiskDisclosure() {
  const riskItems = [
    {
      icon: <FaExclamationTriangle className="text-primary" size={20} />,
      title: "Market Risk",
      description: "Exposure to business risk where positions may move against you. Long positions face losses if crypto prices fall, while short positions face losses if prices rise. You could lose all of your crypto or fiat collateral."
    },
    {
      icon: <FaShieldAlt className="text-primary" size={20} />,
      title: "Counterparty Risk",
      description: "Risk that counterparties may have insufficient collateral in their accounts, potentially resulting in partial or complete loss of owed crypto or fiat currency."
    },
    {
      icon: <FaBalanceScale className="text-primary" size={20} />,
      title: "Liquidity Risk",
      description: "Potential for losses due to inability to close out Futures positions when there is no willing counterparty to take the opposite side of the trade."
    },
    {
      icon: <FaServer className="text-primary" size={20} />,
      title: "Operational Risk",
      description: "Risk of losses due to platform failures, including matching system issues, scheduled/unscheduled downtime, cryptocurrency transfer/storage failures, database issues, API malfunctions, or security breaches."
    },
    {
      icon: <FaGavel className="text-primary" size={20} />,
      title: "Regulatory Risk",
      description: "Potential for losses due to required modifications or discontinuation of services in response to regulatory actions or changes in the legal landscape."
    }
  ]

  return (
    <>
      <Head>
        <title>Risk Disclosure | OpenExchange Legal | Open Crypto Foundation</title>
        <meta name="description" content="Comprehensive risk disclosure for OpenExchange Futures trading, including market, counterparty, liquidity, operational, and regulatory risks." />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6 text-gradient">Risk Disclosure</h1>
            <p className="text-xl text-gray-400 mb-8">
              OCF Exchange Futures provides access to cryptocurrency Futures trading. These are leveraged products that require careful consideration and may not be suitable for all investors.
            </p>
          </div>

          <div className="bg-dark-card p-6 rounded-xl border border-gray-800 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FaExclamationTriangle className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Important Notice</h2>
            </div>
            <p className="text-gray-400 mb-4">
              By trading on OCF Exchange Futures, you acknowledge that you understand and accept the following risks:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-6">
              <li>Cryptocurrencies are highly volatile assets that rely on decentralized financial protocols which are still in experimental stages and may change unexpectedly.</li>
              <li>You should only invest funds that you can afford to lose.</li>
              <li>It is your responsibility to understand cryptocurrency and OCF Exchange Futures before trading.</li>
              <li>You must monitor your open positions and manage them appropriately to avoid liquidation.</li>
              <li>You should not create positions that exceed your financial capacity.</li>
            </ul>
            <p className="text-gray-400">
              We strongly recommend seeking advice from an independent, licensed financial advisor before engaging in Futures trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {riskItems.map((item, index) => (
              <RiskItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FaLock className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Your Responsibilities</h2>
            </div>
            <p className="text-gray-400">
              By using the OCF Exchange Platform, you confirm that you have read and understood these risks. You acknowledge that trading Futures involves significant risk of loss and that you are solely responsible for your trading decisions and their outcomes.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
} 