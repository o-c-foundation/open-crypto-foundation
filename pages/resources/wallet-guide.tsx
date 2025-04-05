import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  FaWallet,
  FaExchangeAlt,
  FaNetworkWired,
  FaKey,
  FaShieldAlt,
  FaCoins,
  FaPaintBrush,
  FaCode
} from 'react-icons/fa'
import Layout from '../../components/Layout'

export default function WalletGuide() {
  const [activeTab, setActiveTab] = useState('wallet-basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'wallet-basics', label: 'Wallet Basics', icon: <FaWallet className="mr-2" /> },
    { id: 'network-setup', label: 'Network Setup', icon: <FaNetworkWired className="mr-2" /> },
    { id: 'token-types', label: 'Token Types', icon: <FaCoins className="mr-2" /> },
    { id: 'nft-basics', label: 'NFT Basics', icon: <FaPaintBrush className="mr-2" /> },
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
    <Layout>
      <Head>
        <title>Crypto Wallet Guide | Open Crypto Foundation</title>
        <meta name="description" content="Learn how to set up and use crypto wallets, add networks, manage tokens, and navigate the world of NFTs safely and effectively." />
      </Head>

      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl font-bold mb-6 text-white">Crypto Wallet Guide</h1>
            <p className="text-xl text-gray-300">
              Your wallet is your gateway to blockchain interaction. Learn how to set up, secure, and maximize the potential of your crypto wallet.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 border border-gray-700">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-700 scrollbar-hide">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-purple-400 border-b-2 border-purple-500' 
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div className="px-6 py-8">
              {activeTab === 'wallet-basics' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Wallet Basics</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaWallet className="mr-2 text-purple-400" />
                      What Is a Crypto Wallet?
                    </h3>
                    
                    <p className="text-lg mb-6">
                      A cryptocurrency wallet is software or hardware that allows you to interact with blockchain networks. 
                      Unlike traditional wallets that hold physical cash, crypto wallets store the private keys needed to access and manage your blockchain assets.
                    </p>
                    
                    <div className="bg-blue-900/30 p-5 rounded-lg mb-8 border border-blue-800/50">
                      <h4 className="font-bold text-white mb-3">What Crypto Wallets Actually Do</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Store your private keys (not the actual coins)</li>
                        <li>Sign transactions using your private key</li>
                        <li>Connect to blockchain networks</li>
                        <li>Display your balance and transaction history</li>
                        <li>Interact with decentralized applications (dApps)</li>
                        <li>Manage multiple cryptocurrencies and tokens</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaKey className="mr-2 text-purple-400" />
                      Keys, Addresses, and Seed Phrases
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Private Key</h4>
                        <p>A long string of random characters that gives you control over your funds. Think of it as your digital signature.</p>
                        <div className="mt-3 text-red-300 text-sm font-bold">Never share this with anyone!</div>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Public Address</h4>
                        <p>The address others can use to send you crypto. Derived from your private key but mathematically impossible to reverse.</p>
                        <div className="mt-3 text-green-300 text-sm font-bold">Safe to share publicly</div>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Seed Phrase</h4>
                        <p>A series of 12-24 words that can generate all your private keys. It's your master recovery key.</p>
                        <div className="mt-3 text-red-300 text-sm font-bold">Keep offline and highly secure!</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaExchangeAlt className="mr-2 text-purple-400" />
                      Types of Wallets
                    </h3>
                    
                    <div className="space-y-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Browser Extensions</h4>
                        <p className="mb-3">Wallets that integrate directly with your web browser, allowing easy interaction with dApps.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">MetaMask</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Coinbase Wallet</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Brave Wallet</span>
                        </div>
                        <p className="mt-3 text-sm">Best for: Active DeFi users, dApp exploration, and day-to-day transactions</p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Mobile Wallets</h4>
                        <p className="mb-3">Smartphone apps that provide convenient access to your crypto on the go.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Trust Wallet</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Rainbow</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Exodus</span>
                        </div>
                        <p className="mt-3 text-sm">Best for: Everyday use, payments, and basic DeFi interactions</p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Hardware Wallets</h4>
                        <p className="mb-3">Physical devices that store your private keys offline, providing maximum security.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Ledger</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Trezor</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">GridPlus</span>
                        </div>
                        <p className="mt-3 text-sm">Best for: Long-term holdings, large amounts, and maximum security</p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Smart Contract Wallets</h4>
                        <p className="mb-3">Next-generation wallets with advanced features like account recovery, batched transactions, and customizable security.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Safe (formerly Gnosis Safe)</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Argent</span>
                          <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">ZenGo</span>
                        </div>
                        <p className="mt-3 text-sm">Best for: Teams managing shared funds, advanced users, and those wanting extra recovery options</p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-900/30 p-5 rounded-lg mb-8 border border-purple-800/50">
                      <h4 className="font-bold text-white mb-3">Wallet Security Best Practices</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Store your seed phrase on paper or metal (never digitally) and keep it in a secure location</li>
                        <li>Consider using a hardware wallet for amounts you can't afford to lose</li>
                        <li>Never share your private keys or seed phrase with anyone, including support staff</li>
                        <li>Be cautious of phishing attempts and always verify website URLs</li>
                        <li>Use a separate "hot wallet" with smaller amounts for regular transactions</li>
                        <li>Regularly review connected dApps and token approvals</li>
                        <li>Enable additional security features like biometrics or 2FA where available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'network-setup' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Adding Networks to Your Wallet</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaNetworkWired className="mr-2 text-purple-400" />
                      Understanding Blockchain Networks
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Most wallets connect to Ethereum Mainnet by default, but you can expand your horizons by adding additional networks.
                      Each network has its own set of smart contracts, tokens, and applications with different characteristics such as
                      transaction speed, cost, and security guarantees.
                    </p>
                    
                    <div className="bg-blue-900/30 p-5 rounded-lg mb-8 border border-blue-800/50">
                      <h4 className="font-bold text-white mb-3">Why Add Multiple Networks?</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Access to lower transaction fees on Layer 2 networks and sidechains</li>
                        <li>Interact with dApps exclusive to specific networks</li>
                        <li>Participate in new ecosystems with unique opportunities</li>
                        <li>Test applications on testnets before using real funds</li>
                        <li>Bridge assets between different blockchain environments</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaCode className="mr-2 text-purple-400" />
                      Network Information You Need
                    </h3>
                    
                    <p className="mb-6">
                      To add a network to your wallet, you'll typically need the following information:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Required Fields</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Network Name:</strong> The name displayed in your wallet</li>
                          <li><strong>RPC URL:</strong> The endpoint your wallet uses to connect to the network</li>
                          <li><strong>Chain ID:</strong> A unique identifier for the blockchain network</li>
                          <li><strong>Currency Symbol:</strong> The native token symbol (ETH, MATIC, etc.)</li>
                          <li><strong>Block Explorer URL:</strong> Website to view transactions (optional but recommended)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Where to Find Network Details</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Official documentation of the blockchain project</li>
                          <li>Chainlist.org - a directory of EVM networks</li>
                          <li>The network's official block explorer</li>
                          <li>Official Discord or community channels</li>
                          <li>DeFi project documentation when they support multiple chains</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaShieldAlt className="mr-2 text-purple-400" />
                      Popular Networks Details
                    </h3>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="bg-gray-700">
                            <th className="py-3 px-4 text-left font-medium text-white">Network</th>
                            <th className="py-3 px-4 text-left font-medium text-white">Chain ID</th>
                            <th className="py-3 px-4 text-left font-medium text-white">Currency</th>
                            <th className="py-3 px-4 text-left font-medium text-white">RPC URL</th>
                            <th className="py-3 px-4 text-left font-medium text-white">Block Explorer</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-600">
                          {popularNetworks.map((network, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                              <td className="py-3 px-4 font-medium">{network.name}</td>
                              <td className="py-3 px-4">{network.chainId}</td>
                              <td className="py-3 px-4">{network.currency}</td>
                              <td className="py-3 px-4 text-xs break-all">{network.rpcUrl}</td>
                              <td className="py-3 px-4 text-purple-400 hover:text-purple-300 transition-colors">
                                <a href={network.blockExplorer} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                  {network.blockExplorer.replace('https://', '')}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="bg-purple-900/30 p-5 rounded-lg mb-8 border border-purple-800/50">
                      <h4 className="font-bold text-white mb-3">Step-by-Step: Adding a Network to MetaMask</h4>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Open your MetaMask wallet and click on the network dropdown at the top</li>
                        <li>Click "Add Network" at the bottom of the dropdown</li>
                        <li>You can either browse popular networks or add a custom network manually</li>
                        <li>To add manually, fill in the Network Name, RPC URL, Chain ID, Currency Symbol, and Block Explorer URL</li>
                        <li>Click "Save" to add the network</li>
                        <li>MetaMask will switch to the new network automatically</li>
                      </ol>
                      <p className="mt-4 text-yellow-300">Note: The process may vary slightly between different wallet providers, but the required information remains similar.</p>
                    </div>
                    
                    <div className="bg-red-900/30 p-5 rounded-lg mb-8 border border-red-800/50">
                      <h4 className="font-bold text-white mb-3">Security Considerations</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Only add networks from trusted sources to avoid connecting to malicious nodes</li>
                        <li>Verify network details across multiple reliable sources before adding</li>
                        <li>Be aware that some networks may have lower security guarantees than Ethereum Mainnet</li>
                        <li>Consider using different wallets for different networks to compartmentalize risk</li>
                        <li>Adding a testnet? Remember that testnet tokens have no real value</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'token-types' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Understanding Tokens</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaCoins className="mr-2 text-purple-400" />
                      What Are Tokens?
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Tokens are digital assets created on existing blockchain platforms. Unlike native cryptocurrencies (such as ETH or BTC), 
                      tokens don't have their own blockchain but instead operate on top of an underlying blockchain infrastructure.
                    </p>
                    
                    <div className="bg-gray-700 p-5 rounded-lg mb-8 border border-gray-600">
                      <h4 className="font-bold text-white mb-3">Key Token Characteristics</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Created and managed through smart contracts</li>
                        <li>Can represent various forms of value or utility</li>
                        <li>Typically follow standardized formats (ERC-20, BEP-20, etc.)</li>
                        <li>May have governance rights, financial value, or utility within specific ecosystems</li>
                        <li>Can be transferred between wallets like other crypto assets</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaExchangeAlt className="mr-2 text-purple-400" />
                      Major Types of Tokens
                    </h3>
                    
                    <div className="space-y-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Fungible Tokens (ERC-20 and equivalents)</h4>
                        <p className="mb-3">Interchangeable tokens where each unit is identical to every other unit of the same token.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-purple-300 mb-2">Common Use Cases</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Cryptocurrency trading</li>
                              <li>Governance participation</li>
                              <li>Protocol incentives</li>
                              <li>Stablecoins</li>
                              <li>Utility within applications</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-300 mb-2">Examples</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>USDC, USDT (stablecoins)</li>
                              <li>UNI (Uniswap governance token)</li>
                              <li>LINK (Chainlink oracle token)</li>
                              <li>AAVE (lending protocol token)</li>
                              <li>BAT (Basic Attention Token)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Non-Fungible Tokens (ERC-721 and equivalents)</h4>
                        <p className="mb-3">Unique tokens where each one has distinct characteristics that make it different from all others.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-purple-300 mb-2">Common Use Cases</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Digital art and collectibles</li>
                              <li>Virtual real estate</li>
                              <li>Gaming items and characters</li>
                              <li>Event tickets</li>
                              <li>Digital identity verification</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-300 mb-2">Examples</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Bored Ape Yacht Club</li>
                              <li>CryptoPunks</li>
                              <li>Decentraland LAND</li>
                              <li>ENS Domains</li>
                              <li>Axie Infinity creatures</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Semi-Fungible Tokens (ERC-1155 and equivalents)</h4>
                        <p className="mb-3">Hybrid tokens that can function as both fungible and non-fungible, combining the benefits of both.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-purple-300 mb-2">Common Use Cases</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Gaming items (both unique and common)</li>
                              <li>Mixed media collections</li>
                              <li>Bundled assets</li>
                              <li>Redeemable tokens</li>
                              <li>Batch transfers</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-300 mb-2">Examples</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>The Sandbox assets</li>
                              <li>Gods Unchained cards</li>
                              <li>Enjin-powered game items</li>
                              <li>Hybrid collectible sets</li>
                              <li>Limited edition items with multiple copies</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaShieldAlt className="mr-2 text-purple-400" />
                      Managing Tokens in Your Wallet
                    </h3>
                    
                    <div className="bg-green-900/30 p-5 rounded-lg mb-8 border border-green-800/50">
                      <h4 className="font-bold text-white mb-3">Adding Tokens to Your Wallet</h4>
                      <p className="mb-3">Most wallets can automatically detect popular tokens, but you may need to add some manually:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Find the token's contract address from a reliable source (project website, block explorer)</li>
                        <li>In your wallet, locate the "Add Token" or similar option</li>
                        <li>Enter the token contract address (the wallet should auto-fill the name, symbol, and decimals)</li>
                        <li>Confirm to add the token to your wallet</li>
                      </ol>
                      <p className="mt-4 text-yellow-300">Note: Always verify token contract addresses carefully. Scammers often create fake tokens with similar names to trick users.</p>
                    </div>
                    
                    <div className="bg-red-900/30 p-5 rounded-lg mb-8 border border-red-800/50">
                      <h4 className="font-bold text-white mb-3">Token Security Considerations</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Be wary of unsolicited tokens appearing in your wallet (potential scam tokens)</li>
                        <li>Research tokens before interacting with them or providing liquidity</li>
                        <li>Review token approvals regularly and revoke unnecessary permissions</li>
                        <li>Verify token contracts on block explorers (check verification status, code, activity)</li>
                        <li>Be cautious with tokens that request unusual permissions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'nft-basics' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">NFT Basics</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaPaintBrush className="mr-2 text-purple-400" />
                      What Are NFTs?
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of specific items or content on the blockchain.
                      Unlike cryptocurrencies where each token is identical to every other token of the same type, each NFT has unique properties
                      that distinguish it from all others.
                    </p>
                    
                    <div className="bg-blue-900/30 p-5 rounded-lg mb-8 border border-blue-800/50">
                      <h4 className="font-bold text-white mb-3">Key NFT Characteristics</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Uniqueness:</strong> Each NFT has distinct metadata and identifier</li>
                        <li><strong>Indivisibility:</strong> NFTs can't be divided into smaller units</li>
                        <li><strong>Provable Scarcity:</strong> Verifiable limited supply</li>
                        <li><strong>Programmability:</strong> Can include smart contract functionality</li>
                        <li><strong>Immutability:</strong> Ownership history permanently recorded on blockchain</li>
                        <li><strong>Transferability:</strong> Can be bought, sold, and transferred between users</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaCoins className="mr-2 text-purple-400" />
                      Common NFT Use Cases
                    </h3>
                    
                    <div className="space-y-6 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                          <h4 className="font-bold text-white mb-3">Digital Art & Collectibles</h4>
                          <p>Unique digital artworks and collectible items with verifiable ownership and scarcity.</p>
                          <p className="mt-3 text-sm">Examples: Beeple's "Everydays", CryptoPunks, Art Blocks</p>
                        </div>
                        
                        <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                          <h4 className="font-bold text-white mb-3">Gaming Assets</h4>
                          <p>In-game items, characters, and land that can be owned, used, and traded outside the game environment.</p>
                          <p className="mt-3 text-sm">Examples: Axie Infinity creatures, The Sandbox land, Illuvium assets</p>
                        </div>
                        
                        <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                          <h4 className="font-bold text-white mb-3">Virtual Real Estate</h4>
                          <p>Parcels of land in virtual worlds that can be developed, monetized, and sold.</p>
                          <p className="mt-3 text-sm">Examples: Decentraland, Cryptovoxels, Otherside</p>
                        </div>
                        
                        <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                          <h4 className="font-bold text-white mb-3">Digital Identity & Membership</h4>
                          <p>NFTs representing membership, access rights, or identity verification.</p>
                          <p className="mt-3 text-sm">Examples: ENS domains, Proof of Attendance Protocol, membership passes</p>
                        </div>
                        
                        <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                          <h4 className="font-bold text-white mb-3">Music & Media</h4>
                          <p>Songs, albums, videos, and other media with ownership and royalty rights encoded.</p>
                          <p className="mt-3 text-sm">Examples: Kings of Leon NFT album, 3LAU music NFTs</p>
                        </div>
                        
                        <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                          <h4 className="font-bold text-white mb-3">Tokenized Real-World Assets</h4>
                          <p>Physical items represented by NFTs, creating digital certificates of authenticity and ownership.</p>
                          <p className="mt-3 text-sm">Examples: Real estate deeds, luxury goods verification, event tickets</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaWallet className="mr-2 text-purple-400" />
                      Managing NFTs in Your Wallet
                    </h3>
                    
                    <div className="bg-green-900/30 p-5 rounded-lg mb-8 border border-green-800/50">
                      <h4 className="font-bold text-white mb-3">Viewing and Managing Your NFTs</h4>
                      <p className="mb-3">Most modern crypto wallets support NFT viewing and management, but capabilities vary:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>MetaMask:</strong> Supports NFT viewing in the mobile app and browser extension</li>
                        <li><strong>Coinbase Wallet:</strong> Integrated NFT gallery with preview images</li>
                        <li><strong>Rainbow:</strong> Robust NFT support with detailed collection information</li>
                        <li><strong>Trust Wallet:</strong> Basic NFT viewing capabilities</li>
                        <li><strong>Specialized NFT Platforms:</strong> OpenSea, Rarible, LooksRare provide more comprehensive viewing and trading tools</li>
                      </ul>
                      <p className="mt-4">For the best experience viewing and managing your NFTs, consider connecting your wallet to a dedicated NFT marketplace.</p>
                    </div>
                    
                    <div className="bg-yellow-900/30 p-5 rounded-lg mb-8 border border-yellow-800/50">
                      <h4 className="font-bold text-white mb-3">NFT Metadata and Storage</h4>
                      <p className="mb-3">Understanding how NFT data is stored is important for long-term ownership:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>On-Chain Data:</strong> Information stored directly on the blockchain (most secure but expensive)</li>
                        <li><strong>Off-Chain Data:</strong> Content typically stored on IPFS, Arweave, or traditional servers</li>
                        <li><strong>Metadata:</strong> Information about the NFT (attributes, properties, links to media)</li>
                      </ul>
                      <p className="mt-4 text-yellow-300">Note: When collecting NFTs, consider whether the actual media is stored on-chain or just linked. Off-chain storage could potentially lead to broken links if not maintained properly.</p>
                    </div>
                    
                    <div className="bg-red-900/30 p-5 rounded-lg mb-8 border border-red-800/50">
                      <h4 className="font-bold text-white mb-3">NFT Security Considerations</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Be cautious of NFT airdrops from unknown sources</li>
                        <li>Verify marketplaces before connecting your wallet (check URLs carefully)</li>
                        <li>Research collections before purchasing (team, community, roadmap)</li>
                        <li>Review all approval requests carefully when interacting with NFT platforms</li>
                        <li>Consider using a hardware wallet for valuable NFT collections</li>
                        <li>Be aware of "approve all" permissions that give access to your entire collection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Continue Your Crypto Education</h2>
            <p className="text-lg mb-8 text-gray-300">
              Ready to learn more? Explore our other educational resources or check out our 
              recommended tools to start navigating the crypto ecosystem safely.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/resources/defi-fundamentals" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                DeFi Fundamentals
              </Link>
              <Link 
                href="/resources/security-guide" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Security Guide
              </Link>
              <Link 
                href="/tools" 
                className="px-6 py-3 bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                Security Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 