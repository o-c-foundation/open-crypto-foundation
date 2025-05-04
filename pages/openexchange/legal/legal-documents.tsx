import React from 'react'
import Layout from '../../../components/Layout'
import type { ReactElement } from 'react'

const legalLinks = [
  {
    category: 'Affiliates and Sub-affiliates of Brokers',
    links: [
      { name: 'Affiliates and Sub-affiliates of Brokers', url: 'https://trade.openexchnage.site/legal/affiliate-disclosure.html' },
    ],
  },
  {
    category: 'Exchange Traders',
    links: [
      { name: 'Spot Market', url: 'https://trade.openexchnage.site/legal/spot-market.html' },
      { name: 'Fiat Service', url: 'https://trade.openexchnage.site/legal/fiat-service.html' },
      { name: 'Convert Market', url: 'https://trade.openexchnage.site/legal/convert-market.html' },
      { name: 'OTC Market', url: 'https://trade.openexchnage.site/legal/otc-market.html' },
      { name: 'P2P users', url: 'https://trade.openexchnage.site/legal/p2p-user.html' },
      { name: 'Copy Trade user', url: 'https://trade.openexchnage.site/legal/copy-trade-user.html' },
      { name: 'Futures Product users', url: 'https://trade.openexchnage.site/legal/futures-product-users.html' },
      { name: 'Options', url: 'https://trade.openexchnage.site/legal/options.html' },
      { name: 'Earn Product users', url: 'https://trade.openexchnage.site/legal/earn-product-users.html' },
      { name: 'Loan users', url: 'https://trade.openexchnage.site/legal/loan-users.html' },
      { name: 'Web3 Wallets users', url: 'https://trade.openexchnage.site/legal/web3-wallets-users.html' },
      { name: 'Mining Pool users', url: 'https://trade.openexchnage.site/legal/mining-pool-users.html' },
    ],
  },
  {
    category: 'Coin Listing',
    links: [
      { name: 'Terms of Use', url: 'https://trade.openexchnage.site/legal/terms-of-use-a-coin.html' },
      { name: 'Coin Unlisting Policy', url: 'https://trade.openexchnage.site/legal/coin-unlisting-a-coin.html' },
      { name: 'Coin Listing Guide', url: 'https://trade.openexchnage.site/legal/coin-listing-a-coin.html' },
    ],
  },
  {
    category: 'NFT Marketplace users',
    links: [
      { name: 'NFT marketplace buyers and NFT listing', url: 'https://trade.openexchnage.site/legal/nft-buyers-and-nft-listing.html' },
    ],
  },
  {
    category: 'Initial Coin Offering (ICO)',
    links: [
      { name: 'Contract Owners', url: 'https://trade.openexchnage.site/legal/contract-owners.html' },
      { name: 'Investors of ICO', url: 'https://trade.openexchnage.site/legal/investors-of-ico.html' },
    ],
  },
  {
    category: 'Privacy Policy',
    links: [
      { name: 'Privacy Policy', url: 'https://trade.openexchnage.site/privacy-policy' },
    ],
  },
  {
    category: 'API users',
    links: [
      { name: 'Exchange Platform API licensing terms', url: 'https://trade.openexchnage.site/legal/exchange-platform-api-licensing-terms.html' },
    ],
  },
  {
    category: 'Merchants using Payments products',
    links: [
      { name: 'Terms of Use', url: 'https://trade.openexchnage.site/legal/terms-of-use-pay-services.html' },
      { name: 'Privacy Policy', url: 'https://trade.openexchnage.site/legal/privacy-policy-pay-services.html' },
    ],
  },
]

const LegalDocuments = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-white mb-8">Legal Documents</h1>
    <div className="space-y-8">
      {legalLinks.map((section, idx) => (
        <div key={idx} className="bg-dark-card rounded-lg p-6 border border-dark-light/20">
          <h2 className="text-xl font-semibold text-primary mb-4">{section.category}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {section.links.map((link, lidx) => (
              <li key={lidx}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-base">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

LegalDocuments.getLayout = (page: ReactElement) => (
  <Layout title="Legal Documents | Open Exchange Legal">
    {page}
  </Layout>
)

export default LegalDocuments 