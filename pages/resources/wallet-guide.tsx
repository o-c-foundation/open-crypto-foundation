import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  FaWallet,
  FaNetworkWired,
  FaCoins,
  FaPaintBrush,
  FaIdBadge
} from 'react-icons/fa'
import TabLayout from '../../components/TabLayout'

export default function WalletGuide() {
  const [activeTab, setActiveTab] = useState('basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'basics', name: 'Wallet Basics', icon: <FaWallet className="text-blue-400" size={24} /> },
    { id: 'network-setup', name: 'Network Setup', icon: <FaNetworkWired className="text-green-400" size={24} /> },
    { id: 'token-types', name: 'Token Types', icon: <FaCoins className="text-yellow-400" size={24} /> },
    { id: 'nft-basics', name: 'NFT Basics', icon: <FaPaintBrush className="text-purple-400" size={24} /> },
    { id: 'wallet-security', name: 'Wallet Security', icon: <FaIdBadge className="text-red-400" size={24} /> }
  ]

  // Popular Networks Data
  const popularNetworks = [
    {
      name: "Ethereum Mainnet",
      chainId: "1",
      currency: "ETH",
      rpcUrl: "https://mainnet.infura.io/v3/YOUR-API-KEY",
      blockExplorer: "https://etherscan.io",
      description: "The primary Ethereum blockchain network where actual value is transferred."
    },
    {
      name: "Polygon",
      chainId: "137",
      currency: "MATIC",
      rpcUrl: "https://polygon-rpc.com",
      blockExplorer: "https://polygonscan.com",
      description: "A Layer 2 scaling solution for Ethereum offering fast transactions and low fees."
    },
    {
      name: "BNB Chain",
      chainId: "56",
      currency: "BNB",
      rpcUrl: "https://bsc-dataseed1.binance.org",
      blockExplorer: "https://bscscan.com",
      description: "Formerly Binance Smart Chain, offers EVM compatibility with lower fees."
    },
    {
      name: "Arbitrum",
      chainId: "42161",
      currency: "ETH",
      rpcUrl: "https://arb1.arbitrum.io/rpc",
      blockExplorer: "https://arbiscan.io",
      description: "An Ethereum Layer 2 solution that uses optimistic rollups to increase throughput."
    },
    {
      name: "Optimism",
      chainId: "10",
      currency: "ETH",
      rpcUrl: "https://mainnet.optimism.io",
      blockExplorer: "https://optimistic.etherscan.io",
      description: "An Ethereum Layer 2 solution using optimistic rollups for scalability."
    }
  ]

  return (
    <>
      <Head>
        <title>Crypto Wallet Guide | Open Crypto Foundation</title>
        <meta name="description" content="Learn everything about crypto wallets, setting up networks, and managing different token types." />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Crypto Wallet Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your wallet is your gateway to the blockchain. Learn how to set up, secure, and use crypto wallets effectively.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <TabLayout
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabPosition="side"
            >
              {/* Wallet Basics Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'basics' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaWallet className="text-blue-400 mr-3" />
                    Wallet Basics
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      A cryptocurrency wallet is not a literal wallet that holds your coins, but rather a tool that stores your private keys which give you access to your blockchain assets.
                    </p>
                    
                    <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Wallet Concepts</h3>
                      <ul className="list-disc pl-5 space-y-3">
                        <li>
                          <strong className="text-blue-300">Private Keys:</strong> The secret codes that allow you to access and send your crypto assets. Never share these with anyone.
                        </li>
                        <li>
                          <strong className="text-blue-300">Public Address:</strong> Your wallet address that others can use to send you cryptocurrency. This is safe to share.
                        </li>
                        <li>
                          <strong className="text-blue-300">Seed Phrase:</strong> A sequence of 12-24 words that can be used to restore access to your wallet if you lose the device or forget the password.
                        </li>
                        <li>
                          <strong className="text-blue-300">Gas Fees:</strong> Fees paid to miners/validators for processing transactions on the blockchain, usually paid in the network's native token.
                        </li>
                      </ul>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Wallets</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Hot Wallets (Online)</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Mobile Wallets:</strong> Apps on your smartphone (Trust Wallet, Coinbase Wallet)</li>
                          <li><strong>Browser Extensions:</strong> Add-ons to your browser (MetaMask, Phantom)</li>
                          <li><strong>Web Wallets:</strong> Online services accessed through websites</li>
                          <li><strong>Advantages:</strong> Convenient, easy to use for frequent transactions</li>
                          <li><strong>Disadvantages:</strong> More vulnerable to online attacks</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Cold Wallets (Offline)</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Hardware Wallets:</strong> Physical devices that store keys offline (Ledger, Trezor)</li>
                          <li><strong>Paper Wallets:</strong> Physical documents containing keys and addresses</li>
                          <li><strong>Advantages:</strong> Maximum security, protection from online threats</li>
                          <li><strong>Disadvantages:</strong> Less convenient for frequent use, risk of physical damage or loss</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-purple-900/30 p-6 rounded-lg mt-6 border border-purple-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Choosing the Right Wallet</h3>
                      <p className="mb-4">The ideal wallet depends on your specific needs:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Frequent Trader:</strong> Mobile or browser wallet for convenience</li>
                        <li><strong>Long-term Investor:</strong> Hardware wallet for enhanced security</li>
                        <li><strong>NFT Collector:</strong> Specialized wallets with NFT display features</li>
                        <li><strong>DeFi User:</strong> Wallet with strong dApp integration capabilities</li>
                      </ul>
                      <p className="mt-4">Many users employ a hybrid approach: hardware wallet for long-term storage and a hot wallet with smaller amounts for everyday transactions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Setup Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'network-setup' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaNetworkWired className="text-green-400 mr-3" />
                    Network Setup
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Most modern wallets support multiple blockchain networks. Understanding how to set up and switch between these networks is essential for accessing different ecosystems.
                    </p>
                    
                    <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Popular Networks</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-white flex items-center">
                            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                            Ethereum Mainnet
                          </h4>
                          <ul className="list-disc pl-7 mt-2 space-y-1">
                            <li>The primary Ethereum blockchain network</li>
                            <li>Native token: ETH</li>
                            <li>High security, highest gas fees</li>
                            <li>Used for high-value transactions and established dApps</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white flex items-center">
                            <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                            Polygon
                          </h4>
                          <ul className="list-disc pl-7 mt-2 space-y-1">
                            <li>Layer 2 scaling solution for Ethereum</li>
                            <li>Native token: MATIC</li>
                            <li>Lower fees, faster transactions</li>
                            <li>Popular for gaming, NFTs, and smaller transactions</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white flex items-center">
                            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                            BNB Chain (formerly BSC)
                          </h4>
                          <ul className="list-disc pl-7 mt-2 space-y-1">
                            <li>Binance's smart contract blockchain</li>
                            <li>Native token: BNB</li>
                            <li>Low fees, high throughput</li>
                            <li>Large ecosystem of DeFi and gaming applications</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white flex items-center">
                            <span className="inline-block w-3 h-3 bg-blue-300 rounded-full mr-2"></span>
                            Solana
                          </h4>
                          <ul className="list-disc pl-7 mt-2 space-y-1">
                            <li>High-performance blockchain with fast transaction times</li>
                            <li>Native token: SOL</li>
                            <li>Very low fees, high throughput</li>
                            <li>Popular for DeFi, NFTs, and decentralized exchanges</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Setting Up Networks in MetaMask</h3>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <p className="mb-4">Most EVM-compatible networks can be added to MetaMask. Here's how:</p>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>Open MetaMask and click on the network dropdown at the top</li>
                        <li>Select "Add Network"</li>
                        <li>Fill in the network details:
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Network Name (e.g., "Polygon Mainnet")</li>
                            <li>RPC URL (network's endpoint)</li>
                            <li>Chain ID (unique identifier for the blockchain)</li>
                            <li>Currency Symbol (e.g., "MATIC")</li>
                            <li>Block Explorer URL (e.g., "https://polygonscan.com")</li>
                          </ul>
                        </li>
                        <li>Click "Save"</li>
                      </ol>
                      <p className="mt-4 text-yellow-300">Tip: Many networks offer automatic setup through services like Chainlist.org, allowing you to add networks with just a few clicks.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Common Network Issues</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Pending Transactions:</strong> Usually due to low gas fees or network congestion</li>
                          <li><strong>Failed Transactions:</strong> Can occur due to insufficient funds for gas or contract errors</li>
                          <li><strong>RPC Errors:</strong> Connection issues with the network's nodes</li>
                          <li><strong>Wrong Network:</strong> Attempting to interact with a dApp on the incorrect network</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Network Selection Tips</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Use Ethereum Mainnet for high-value transactions and stability</li>
                          <li>Consider Layer 2 solutions or sidechains for frequent, lower-value transactions</li>
                          <li>Match your network to the dApp or service you want to use</li>
                          <li>Be aware of bridging requirements when moving assets between networks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Types Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'token-types' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaCoins className="text-yellow-400 mr-3" />
                    Token Types
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Blockchains support various token standards, each with different purposes and functionalities. Understanding these differences is important for using your wallet effectively.
                    </p>
                    
                    <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Major Token Standards</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-white mb-2">ERC-20 (Ethereum)</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>The most common token standard for fungible tokens</li>
                            <li>Used for cryptocurrencies, utility tokens, stablecoins</li>
                            <li>All tokens are identical and interchangeable (like currencies)</li>
                            <li>Examples: USDC, DAI, LINK, UNI, AAVE</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">ERC-721 (Ethereum)</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Standard for non-fungible tokens (NFTs)</li>
                            <li>Each token has unique properties and identifiers</li>
                            <li>Used for digital art, collectibles, virtual land, and more</li>
                            <li>Examples: CryptoPunks, Bored Ape Yacht Club, Art Blocks</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">ERC-1155 (Ethereum)</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Multi-token standard supporting both fungible and non-fungible tokens</li>
                            <li>More efficient for multiple token types in a single contract</li>
                            <li>Popular for gaming items, mixed collections</li>
                            <li>Examples: Many blockchain games, some metaverse assets</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">BEP-20 (BNB Chain)</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>BNB Chain's token standard, similar to ERC-20</li>
                            <li>Compatible with Ethereum tools and infrastructure</li>
                            <li>Used for tokens on the BNB Chain ecosystem</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">SPL (Solana)</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Solana's native token program</li>
                            <li>Highly efficient, low-cost token standard</li>
                            <li>Used for all tokens in the Solana ecosystem</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Managing Tokens in Your Wallet</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Adding Custom Tokens</h4>
                        <p className="mb-3">Many tokens may not appear automatically in your wallet and need to be added manually:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Find the token's contract address (from the official website or block explorer)</li>
                          <li>In your wallet, select "Add Token" or "Import Token"</li>
                          <li>Enter the contract address (the wallet usually auto-fills other details)</li>
                          <li>Confirm and the token should appear in your wallet</li>
                        </ol>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Token Security Tips</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Always verify token contract addresses from official sources</li>
                          <li>Be cautious of "airdropped" tokens you didn't request (potential scams)</li>
                          <li>Research tokens before interacting with them or providing liquidity</li>
                          <li>Watch for "dust attacks" - small amounts of suspicious tokens sent to your address</li>
                          <li>Use token approval management tools to control smart contract permissions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h4 className="font-medium text-white mb-3">Special Token Types</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-blue-300">Stablecoins</h5>
                          <p>Tokens designed to maintain a stable value, typically pegged to a fiat currency like USD. Examples: USDT, USDC, DAI, BUSD.</p>
                        </div>
                        <div>
                          <h5 className="text-blue-300">Governance Tokens</h5>
                          <p>Tokens that grant voting rights in decentralized protocols. Examples: UNI (Uniswap), COMP (Compound), AAVE (Aave).</p>
                        </div>
                        <div>
                          <h5 className="text-blue-300">Wrapped Tokens</h5>
                          <p>Tokens that represent other cryptocurrencies on different blockchains. Examples: WETH (Wrapped Ethereum), WBTC (Wrapped Bitcoin).</p>
                        </div>
                        <div>
                          <h5 className="text-blue-300">Liquidity Provider (LP) Tokens</h5>
                          <p>Tokens representing a share in a liquidity pool on a decentralized exchange like Uniswap or SushiSwap.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NFT Basics Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'nft-basics' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaPaintBrush className="text-purple-400 mr-3" />
                    NFT Basics
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of specific items on the blockchain. Managing NFTs requires some special considerations.
                    </p>
                    
                    <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Understanding NFTs</h3>
                      
                      <div className="space-y-4">
                        <p>Unlike cryptocurrencies where each unit is identical (fungible), NFTs have unique properties and identifiers that make each one distinct. This uniqueness allows NFTs to represent:</p>
                        
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Digital Art:</strong> Illustrations, animations, music, videos</li>
                          <li><strong>Collectibles:</strong> Digital trading cards, virtual pets, avatars</li>
                          <li><strong>Virtual Real Estate:</strong> Land parcels in metaverse platforms</li>
                          <li><strong>Gaming Assets:</strong> In-game items, characters, skins</li>
                          <li><strong>Proof of Ownership:</strong> Real-world assets, event tickets, memberships</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Viewing and Managing NFTs</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">NFT-Compatible Wallets</h4>
                        <p className="mb-3">Not all wallets display NFTs effectively. Popular NFT-friendly wallets include:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><strong>MetaMask:</strong> Shows basic NFT info, requires additional steps to view images</li>
                          <li><strong>Coinbase Wallet:</strong> Built-in NFT gallery with previews</li>
                          <li><strong>Rainbow:</strong> Excellent visual display of NFT collections</li>
                          <li><strong>Phantom:</strong> Great for Solana NFTs</li>
                          <li><strong>TokenPocket:</strong> Multi-chain support with NFT viewing</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">NFT Viewing Platforms</h4>
                        <p className="mb-3">Specialized platforms for viewing and tracking your NFT collections:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><strong>OpenSea:</strong> The largest NFT marketplace with portfolio tracking</li>
                          <li><strong>Rarible:</strong> Marketplace with collection management</li>
                          <li><strong>Gem.xyz:</strong> NFT aggregator with portfolio analytics</li>
                          <li><strong>NFTBank:</strong> Portfolio tracking with valuation metrics</li>
                          <li><strong>Gallery.so:</strong> Social platform for showcasing NFTs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h4 className="font-medium text-white mb-3">NFT Security Considerations</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Hidden Content:</strong> Some NFTs may contain hidden content or traits not visible in preview images</li>
                        <li><strong>Metadata Storage:</strong> The data associated with NFTs may be stored on-chain or off-chain (IPFS, centralized servers)</li>
                        <li><strong>Approval Risks:</strong> Be cautious when approving marketplace contracts to "sell on your behalf"</li>
                        <li><strong>Signature Requests:</strong> Only sign messages you understand and trust (some scams use deceptive signature requests)</li>
                        <li><strong>Digital Persistence:</strong> Consider how the NFT data is stored and whether it's dependent on third-party services</li>
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-900/30 p-6 rounded-lg mt-6 border border-indigo-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Tips for NFT Collectors</h3>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>
                          <strong className="text-indigo-300">Research before buying:</strong> Investigate the project, creator, community, and roadmap before investing.
                        </li>
                        <li>
                          <strong className="text-indigo-300">Verify authenticity:</strong> Check official links and contract addresses to avoid counterfeits.
                        </li>
                        <li>
                          <strong className="text-indigo-300">Consider gas fees:</strong> Factor in transaction costs, which can be significant on Ethereum mainnet.
                        </li>
                        <li>
                          <strong className="text-indigo-300">Understand royalties:</strong> Many NFTs include creator royalties on secondary sales.
                        </li>
                        <li>
                          <strong className="text-indigo-300">Back up your wallet:</strong> Ensure your seed phrase is securely stored in case you need to recover your NFTs.
                        </li>
                        <li>
                          <strong className="text-indigo-300">Consider hardware storage:</strong> Valuable NFT collections may warrant a hardware wallet for enhanced security.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet Security Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'wallet-security' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaIdBadge className="text-red-400 mr-3" />
                    Wallet Security
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The security of your wallet is directly tied to the safety of your crypto assets. Implementing proper security measures is essential for protecting your investments.
                    </p>
                    
                    <div className="bg-red-900/30 p-6 rounded-lg border border-red-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Essential Security Practices</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Seed Phrase Protection</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Write your seed phrase on paper (multiple copies) and store in secure locations</li>
                            <li>Never store it digitally (no photos, cloud storage, or password managers)</li>
                            <li>Consider metal backups for protection against fire and water damage</li>
                            <li>Never share your seed phrase with anyone, including "support staff"</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">Strong Password Practices</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Use unique, complex passwords for wallet apps</li>
                            <li>Enable biometric authentication when available</li>
                            <li>Avoid reusing passwords from other services</li>
                            <li>Consider a password manager for non-seed passwords</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">Multi-Wallet Strategy</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Use a hardware wallet for long-term storage (cold storage)</li>
                            <li>Maintain a separate "hot wallet" with smaller amounts for daily use</li>
                            <li>Consider dedicated wallets for different activities (trading, DeFi, NFTs)</li>
                            <li>Use burner wallets for high-risk interactions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Advanced Security Measures</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Hardware Security</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Hardware wallets:</strong> Physical devices that store private keys offline (Ledger, Trezor)</li>
                          <li><strong>Air-gapped computers:</strong> Systems never connected to the internet for generating wallets</li>
                          <li><strong>Dedicated devices:</strong> Using a separate mobile device only for crypto</li>
                          <li><strong>PIN protection:</strong> Setting up PINs on hardware wallets and apps</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Software Security</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>2FA:</strong> Enable two-factor authentication for exchange accounts</li>
                          <li><strong>Phishing protection:</strong> Verify URLs and bookmark official sites</li>
                          <li><strong>Approval management:</strong> Regularly audit and revoke smart contract approvals</li>
                          <li><strong>Transaction simulation:</strong> Use tools to preview transaction outcomes before signing</li>
                          <li><strong>System security:</strong> Keep your operating system and wallet apps updated</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-orange-900/30 p-6 rounded-lg mt-6 border border-orange-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Common Security Risks</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-orange-300 mb-1">Phishing Attacks</h4>
                          <p>Malicious websites and messages designed to steal your private keys or seed phrase.</p>
                          <p className="mt-1"><strong>Protection:</strong> Always verify URLs, never click suspicious links, bookmark official websites.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-orange-300 mb-1">Malware</h4>
                          <p>Software that can monitor clipboard activity to swap addresses or steal keys.</p>
                          <p className="mt-1"><strong>Protection:</strong> Use antivirus software, verify addresses before confirming transactions.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-orange-300 mb-1">SIM Swapping</h4>
                          <p>Attackers gain control of your phone number to bypass 2FA and access accounts.</p>
                          <p className="mt-1"><strong>Protection:</strong> Use authentication apps instead of SMS for 2FA, set up strong security with your mobile carrier.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-orange-300 mb-1">Social Engineering</h4>
                          <p>Manipulative tactics to trick you into revealing sensitive information.</p>
                          <p className="mt-1"><strong>Protection:</strong> Be skeptical of unsolicited help, verify identities through official channels.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h4 className="font-medium text-white mb-3">Security Checklist</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Securely back up seed phrases in multiple physical locations</li>
                        <li>Use hardware wallets for significant holdings</li>
                        <li>Enable 2FA on all exchange accounts</li>
                        <li>Regularly review and revoke token approvals</li>
                        <li>Verify all transaction details before signing</li>
                        <li>Keep software and firmware updated</li>
                        <li>Research projects before connecting your wallet</li>
                        <li>Be cautious of airdrops and free token offers</li>
                        <li>Consider the principle of least privilege (minimal permissions)</li>
                        <li>Have a recovery plan in case of wallet compromise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabLayout>
          </div>
        </div>
      </div>
    </>
  )
} 