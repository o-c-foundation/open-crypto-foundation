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
    { id: 'basics', name: 'Wallet Basics', icon: <FaWallet className="text-primary" size={24} /> },
    { id: 'network-setup', name: 'Network Setup', icon: <FaNetworkWired className="text-primary" size={24} /> },
    { id: 'token-types', name: 'Token Types', icon: <FaCoins className="text-primary" size={24} /> },
    { id: 'nft-basics', name: 'NFT Basics', icon: <FaPaintBrush className="text-primary" size={24} /> },
    { id: 'wallet-security', name: 'Wallet Security', icon: <FaIdBadge className="text-primary" size={24} /> }
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

      <div className="py-12 md:py-20 bg-dark">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Crypto Wallet Guide
            </h1>
            <p className="text-xl text-light-muted max-w-3xl mx-auto">
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
                <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaWallet className="text-primary mr-3" />
                    Wallet Basics
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      A cryptocurrency wallet is not a literal wallet that holds your coins, but rather a tool that stores your private keys which give you access to your blockchain assets.
                    </p>
                    
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Wallet Concepts</h3>
                      <ul className="list-disc pl-5 space-y-3">
                        <li>
                          <strong className="text-primary">Private Keys:</strong> The secret codes that allow you to access and send your crypto assets. Never share these with anyone.
                        </li>
                        <li>
                          <strong className="text-primary">Public Address:</strong> Your wallet address that others can use to send you cryptocurrency. This is safe to share.
                        </li>
                        <li>
                          <strong className="text-primary">Seed Phrase:</strong> A sequence of 12-24 words that can be used to restore access to your wallet if you lose the device or forget the password.
                        </li>
                        <li>
                          <strong className="text-primary">Gas Fees:</strong> Fees paid to miners/validators for processing transactions on the blockchain, usually paid in the network's native token.
                        </li>
                      </ul>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Wallets</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Hot Wallets (Online)</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Mobile Wallets:</strong> Apps on your smartphone (Trust Wallet, Coinbase Wallet)</li>
                          <li><strong>Browser Extensions:</strong> Add-ons to your browser (MetaMask, Phantom)</li>
                          <li><strong>Web Wallets:</strong> Online services accessed through websites</li>
                          <li><strong>Advantages:</strong> Convenient, easy to use for frequent transactions</li>
                          <li><strong>Disadvantages:</strong> More vulnerable to online attacks</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Cold Wallets (Offline)</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Hardware Wallets:</strong> Physical devices that store keys offline (Ledger, Trezor)</li>
                          <li><strong>Paper Wallets:</strong> Physical documents containing keys and addresses</li>
                          <li><strong>Advantages:</strong> Maximum security, protection from online threats</li>
                          <li><strong>Disadvantages:</strong> Less convenient for frequent use, risk of physical damage or loss</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg mt-6 border border-primary/30">
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
                <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaNetworkWired className="text-primary mr-3" />
                    Network Setup
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Most modern wallets support multiple blockchain networks. Understanding how to set up and switch between these networks is essential for accessing different ecosystems.
                    </p>
                    
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
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
                    
                    <div className="bg-dark-light/10 p-6 rounded-lg border border-dark-light/20">
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
                      <p className="mt-4 text-primary">Tip: Many networks offer automatic setup through services like Chainlist.org, allowing you to add networks with just a few clicks.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Common Network Issues</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Pending Transactions:</strong> Usually due to low gas fees or network congestion</li>
                          <li><strong>Failed Transactions:</strong> Can occur due to insufficient funds for gas or contract errors</li>
                          <li><strong>RPC Errors:</strong> Connection issues with the network's nodes</li>
                          <li><strong>Wrong Network:</strong> Attempting to interact with a dApp on the incorrect network</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
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
                <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaCoins className="text-primary mr-3" />
                    Token Types
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Blockchains support various token standards, each with different purposes and functionalities. Understanding these differences is important for using your wallet effectively.
                    </p>
                    
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
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
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Adding Custom Tokens</h4>
                        <p className="mb-3">Many tokens may not appear automatically in your wallet and need to be added manually:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Find the token's contract address (from the official website or block explorer)</li>
                          <li>In your wallet, select "Add Token" or "Import Token"</li>
                          <li>Enter the contract address (the wallet usually auto-fills other details)</li>
                          <li>Confirm and the token should appear in your wallet</li>
                        </ol>
                      </div>
                      
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
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
                    
                    <div className="bg-dark-light/10 p-6 rounded-lg mt-6 border border-dark-light/20">
                      <h4 className="font-medium text-white mb-3">Special Token Types</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-primary">Stablecoins</h5>
                          <p>Tokens designed to maintain a stable value, typically pegged to a fiat currency like USD. Examples: USDT, USDC, DAI, BUSD.</p>
                        </div>
                        <div>
                          <h5 className="text-primary">Governance Tokens</h5>
                          <p>Tokens that grant voting rights in decentralized protocols. Examples: UNI (Uniswap), COMP (Compound), AAVE (Aave).</p>
                        </div>
                        <div>
                          <h5 className="text-primary">Wrapped Tokens</h5>
                          <p>Tokens that represent other cryptocurrencies on different blockchains. Examples: WETH (Wrapped Ethereum), WBTC (Wrapped Bitcoin).</p>
                        </div>
                        <div>
                          <h5 className="text-primary">Liquidity Provider (LP) Tokens</h5>
                          <p>Tokens representing a share in a liquidity pool on a decentralized exchange like Uniswap or SushiSwap.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NFT Basics Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'nft-basics' ? 'block' : 'hidden'}`}>
                <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaPaintBrush className="text-primary mr-3" />
                    NFT Basics
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of specific items on the blockchain. Managing NFTs requires some special considerations.
                    </p>
                    
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
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
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
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
                      
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">NFT Viewing Platforms</h4>
                        <p className="mb-3">Specialized platforms for viewing and tracking your NFT collections:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><strong>OpenSea:</strong> The largest NFT marketplace with portfolio tracking</li>
                          <li><strong>Rarible:</strong> Marketplace with collection management</li>
                          <li><strong>Gem.xyz:</strong> NFT aggregator with portfolio analytics</li>
                          <li><strong>Magic Eden:</strong> Popular for Solana NFTs</li>
                          <li><strong>Gallery.so:</strong> Social platform for showcasing NFTs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-dark-light/10 p-6 rounded-lg mt-6 border border-dark-light/20">
                      <h4 className="font-medium text-white mb-3">NFT Security Considerations</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Beware of fake NFT airdrops that ask for wallet connection or signatures</li>
                        <li>Verify marketplace authenticity before connecting your wallet</li>
                        <li>Check collection verification status on marketplaces</li>
                        <li>Be cautious of high-value NFTs stored in hot wallets</li>
                        <li>Consider hardware wallets for valuable NFT collections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet Security Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'wallet-security' ? 'block' : 'hidden'}`}>
                <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaIdBadge className="text-primary mr-3" />
                    Wallet Security
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Security is paramount when it comes to crypto wallets. Following best practices can help protect your assets from theft and unauthorized access.
                    </p>
                    
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                      <h3 className="text-xl font-semibold text-white mb-4">Seed Phrase Security</h3>
                      
                      <div className="space-y-4">
                        <p>Your seed phrase (also called recovery phrase or mnemonic) is the master key to your wallet. If someone has your seed phrase, they have full access to all assets in that wallet.</p>
                        
                        <div className="bg-dark-light/20 border border-red-800/30 rounded-lg p-4">
                          <h4 className="font-medium text-red-400 mb-2">Never Share Your Seed Phrase</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>No legitimate project, support team, or wallet provider will ever ask for your seed phrase</li>
                            <li>Never enter your seed phrase on websites or in messages</li>
                            <li>Do not store your seed phrase digitally (e.g., in email, cloud storage, or as a photo)</li>
                            <li>Beware of phishing attempts claiming you need to "validate" or "verify" your wallet</li>
                          </ul>
                        </div>
                        
                        <h4 className="font-medium text-white">Recommended Storage Methods</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Physical Paper:</strong> Write down your seed phrase and store in a secure, private location</li>
                          <li><strong>Metal Backup:</strong> Specialized metal plates resistant to fire, water, and physical damage</li>
                          <li><strong>Multiple Locations:</strong> Consider storing copies in different secure locations</li>
                          <li><strong>Safety Deposit Box:</strong> For high-value holdings, consider a bank safety deposit box</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Common Security Threats</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Phishing Attacks</h4>
                        <p className="mb-2">Fake websites, emails, or messages designed to steal your wallet credentials.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Always double-check URLs (e.g., metamask.io vs metamask.com)</li>
                          <li>Use bookmarks for important crypto sites</li>
                          <li>Never click on suspicious links in emails or messages</li>
                          <li>Verify project links from multiple sources</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Malware</h4>
                        <p className="mb-2">Software that can steal your private keys or manipulate clipboard data.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Keep your device and software updated</li>
                          <li>Use reputable antivirus/anti-malware protection</li>
                          <li>Always verify addresses before confirming transactions</li>
                          <li>Consider using a separate device for large transactions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Social Engineering</h4>
                        <p className="mb-2">Manipulative tactics to trick you into revealing sensitive information.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Be skeptical of unsolicited help or offers</li>
                          <li>Never share screen with unknown individuals</li>
                          <li>Verify identities through official channels</li>
                          <li>No legitimate project will ask you to send funds to "verify" your wallet</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-light/10 p-5 rounded-lg border border-dark-light/20">
                        <h4 className="font-medium text-white mb-3">Smart Contract Risks</h4>
                        <p className="mb-2">Malicious or vulnerable code that can compromise your assets.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Research projects before interacting with their contracts</li>
                          <li>Check if contracts are verified and audited</li>
                          <li>Use token approval management tools to limit exposure</li>
                          <li>Start with small amounts when using new protocols</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-dark-light/10 p-6 rounded-lg mt-6 border border-dark-light/20">
                      <h4 className="font-medium text-white mb-3">Advanced Security Measures</h4>
                      <ul className="list-disc pl-5 space-y-3">
                        <li>
                          <strong className="text-primary">Hardware Wallets:</strong> Physical devices that keep private keys offline.
                          <div className="pl-5 mt-1">
                            <span className="text-sm">Examples: Ledger Nano, Trezor, GridPlus Lattice1</span>
                          </div>
                        </li>
                        <li>
                          <strong className="text-primary">Multi-Signature Wallets:</strong> Requires multiple approvals for transactions.
                          <div className="pl-5 mt-1">
                            <span className="text-sm">Examples: Gnosis Safe, Multis, Casa</span>
                          </div>
                        </li>
                        <li>
                          <strong className="text-primary">Watch-Only Wallets:</strong> Allow monitoring balances without exposing private keys.
                          <div className="pl-5 mt-1">
                            <span className="text-sm">Use public addresses in portfolio trackers like Zapper or DeBank</span>
                          </div>
                        </li>
                        <li>
                          <strong className="text-primary">Separate Wallets:</strong> Use different wallets for different purposes.
                          <div className="pl-5 mt-1">
                            <span className="text-sm">Hot wallet for small amounts/frequent transactions, cold storage for large holdings</span>
                          </div>
                        </li>
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
} 