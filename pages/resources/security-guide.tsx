import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  FaShieldAlt,
  FaKey,
  FaExclamationTriangle,
  FaCheckCircle,
  FaSignature,
  FaThumbsDown,
  FaUserSecret,
  FaExchangeAlt
} from 'react-icons/fa'

export default function SecurityGuide() {
  const [activeTab, setActiveTab] = useState('basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'basics', label: 'Security Basics', icon: <FaShieldAlt className="mr-2" /> },
    { id: 'token-approvals', label: 'Token Approvals', icon: <FaKey className="mr-2" /> },
    { id: 'common-scams', label: 'Common Scams', icon: <FaExclamationTriangle className="mr-2" /> },
    { id: 'recover-from-scam', label: 'Scam Recovery', icon: <FaCheckCircle className="mr-2" /> },
  ]

  return (
    <>
      <Head>
        <title>Crypto Security Guide | Open Crypto Foundation</title>
        <meta name="description" content="Learn essential security practices for protecting your crypto assets, understanding token approvals, avoiding common scams, and steps to take if you've been compromised." />
      </Head>

      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl font-bold mb-6 text-white">Crypto Security Guide</h1>
            <p className="text-xl text-gray-300">
              Security is paramount in the crypto space. Learn how to protect your assets, identify risks, and keep your digital holdings safe.
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
              {activeTab === 'basics' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Security Basics</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaShieldAlt className="mr-2 text-purple-400" />
                      Keeping Your Crypto Safe
                    </h3>
                    
                    <p className="text-lg mb-6">
                      The decentralized nature of cryptocurrencies means you have complete control over your assets, but also full responsibility for their security. Unlike traditional banking systems, there's no central authority to reverse transactions or restore lost funds.
                    </p>
                    
                    <div className="bg-gray-700 p-5 rounded-lg mb-8 border border-gray-600">
                      <h4 className="font-bold text-white mb-3">Essential Security Practices</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Use a hardware wallet for significant holdings</li>
                        <li>Enable 2FA on all exchange accounts</li>
                        <li>Maintain separate wallets for trading and long-term storage</li>
                        <li>Regularly audit connected applications and token approvals</li>
                        <li>Never share your seed phrase or private keys with anyone</li>
                        <li>Verify all transaction details before confirming</li>
                        <li>Be skeptical of offers that seem too good to be true</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaKey className="mr-2 text-purple-400" />
                      Understanding Crypto Wallets
                    </h3>
                    
                    <p className="text-lg mb-6">
                      A crypto wallet is not a physical container that holds your coins, but rather a tool that stores your private keys - the critical credentials that give you access to your blockchain assets. Without these keys, you cannot access or transfer your cryptocurrency.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Hot Wallets</h4>
                        <p>Connected to the internet (mobile apps, browser extensions, desktop software)</p>
                        <p className="mt-2 text-yellow-300">Best for: Small amounts and active trading</p>
                        <p className="mt-2">Examples: MetaMask, Trust Wallet, Coinbase Wallet</p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Cold Wallets</h4>
                        <p>Kept offline and disconnected from the internet (hardware devices, paper wallets)</p>
                        <p className="mt-2 text-green-300">Best for: Long-term storage and larger holdings</p>
                        <p className="mt-2">Examples: Ledger, Trezor, Paper wallets</p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-900/30 p-5 rounded-lg mb-8 border border-purple-800/50">
                      <h4 className="font-bold text-white mb-3">The Critical Importance of Seed Phrases</h4>
                      <p>Your seed phrase (recovery phrase) is a sequence of 12-24 words that serves as a master key to your wallet. If you lose access to your wallet:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-3">
                        <li>Your seed phrase can restore all your accounts and funds</li>
                        <li>Without it, your crypto assets may be permanently lost</li>
                        <li>Never store it digitally (no photos, no cloud storage, no password managers)</li>
                        <li>Write it down on paper and store in multiple secure locations</li>
                        <li>Consider metal backups for protection against fire and water damage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'token-approvals' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Token Approvals</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaKey className="mr-2 text-purple-400" />
                      What Are Token Approvals?
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Token approvals are permissions you grant to smart contracts allowing them to spend your tokens on your behalf. This mechanism is essential for interacting with DeFi protocols, NFT marketplaces, and other blockchain applications.
                    </p>
                    
                    <div className="bg-blue-900/30 p-5 rounded-lg mb-8 border border-blue-800/50">
                      <h4 className="font-bold text-white mb-3">How Token Approvals Work</h4>
                      <p className="mb-3">When you interact with a decentralized application (dApp) that needs to use your tokens:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>You sign an approval transaction giving the dApp's smart contract permission to access your tokens</li>
                        <li>The approval is recorded on the blockchain and remains valid until explicitly revoked</li>
                        <li>The approved contract can then transfer up to the approved amount from your wallet without requiring additional confirmation</li>
                      </ol>
                    </div>
                    
                    <div className="bg-red-900/30 p-5 rounded-lg mb-8 border border-red-800/50">
                      <h4 className="font-bold text-white mb-3">Security Risks of Token Approvals</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Unlimited approvals: Many dApps request access to unlimited token amounts</li>
                        <li>Forgotten approvals: Old approvals remain active even after you stop using a service</li>
                        <li>Malicious contracts: Scam websites may trick you into approving harmful contracts</li>
                        <li>Compromised protocols: If an approved protocol is hacked, your approved tokens could be at risk</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaCheckCircle className="mr-2 text-purple-400" />
                      Managing Your Approvals
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Regular auditing and management of your token approvals is an essential security practice. By revoking unnecessary approvals, you can significantly reduce your exposure to potential security vulnerabilities.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Best Practices</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Regularly review and revoke unused approvals</li>
                          <li>Use limited approvals when possible (exact amount needed)</li>
                          <li>Use a dedicated "hot wallet" for active DeFi participation</li>
                          <li>Consider separate wallets for different activities</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">How to Revoke Approvals</h4>
                        <p>Use dedicated tools to review and revoke your approvals:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Etherscan's Token Approvals</li>
                          <li>Revoke.cash</li>
                          <li>Debank's token approval checker</li>
                          <li>Your wallet's built-in approval manager (if available)</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaSignature className="mr-2 text-purple-400" />
                      Permit Signatures & Permit2
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Newer standards are emerging to improve the token approval experience, offering alternatives to traditional approvals that provide better security and usability.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Permit Signatures</h4>
                        <p>Permit signatures allow approvals via gasless signatures rather than on-chain transactions:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Save gas by combining approval and transaction</li>
                          <li>Can include expiration timestamps</li>
                          <li>Limited to tokens that support the permit standard</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Permit2 (Uniswap)</h4>
                        <p>Uniswap's system enabling gasless approvals for any token:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Works with any ERC-20 token</li>
                          <li>Includes built-in time limits on approvals</li>
                          <li>Reduces approval management complexity</li>
                          <li>Still requires vigilance against malicious signatures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'common-scams' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Common Crypto Scams</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <p className="text-lg mb-6">
                      The cryptocurrency space offers remarkable opportunities but also attracts malicious actors. Learning to identify common scam patterns can help you avoid becoming a victim.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                          <FaUserSecret className="mr-2 text-red-400" />
                          Address Poisoning
                        </h3>
                        <p className="mb-3">
                          Address poisoning is a scam where attackers send tiny amounts of tokens to your wallet, then create addresses very similar to ones you've interacted with, hoping you'll mistake them for legitimate addresses in future transactions.
                        </p>
                        <h4 className="font-bold text-white mb-2">How it works:</h4>
                        <ol className="list-decimal pl-5 space-y-1 mb-3">
                          <li>Scammers monitor blockchain for active addresses</li>
                          <li>They create copycat addresses that differ by only a few characters</li>
                          <li>They send a tiny "dust" transaction to your wallet</li>
                          <li>When you check your transaction history, you might copy their similar-looking address instead of your intended recipient</li>
                        </ol>
                        <h4 className="font-bold text-white mb-2">Protection measures:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Always verify the full address before sending funds</li>
                          <li>Use your wallet's address book feature for frequent contacts</li>
                          <li>Double-check addresses even when copy-pasting</li>
                          <li>Consider using ENS domains or similar human-readable addresses</li>
                        </ul>
                      </div>

                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                          <FaThumbsDown className="mr-2 text-red-400" />
                          Phishing Scams
                        </h3>
                        <p className="mb-3">
                          Phishing attacks use deceptive emails, websites, or messages to trick you into revealing sensitive information like seed phrases or private keys, or to approve malicious transactions.
                        </p>
                        <h4 className="font-bold text-white mb-2">Common phishing tactics:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>Fake websites mimicking legitimate services (e.g., MetaMask, Uniswap)</li>
                          <li>Deceptive emails claiming urgent account issues</li>
                          <li>Direct messages offering "exclusive" opportunities</li>
                          <li>Fake customer support representatives</li>
                          <li>Airdrops requiring seed phrase "verification"</li>
                        </ul>
                        <h4 className="font-bold text-white mb-2">Protection measures:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Bookmark official websites rather than using search results</li>
                          <li>Never share your seed phrase or private keys with anyone</li>
                          <li>Be suspicious of direct messages about crypto</li>
                          <li>Verify URLs carefully before connecting your wallet</li>
                          <li>Use hardware wallets for additional security</li>
                        </ul>
                      </div>

                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                          <FaExchangeAlt className="mr-2 text-red-400" />
                          Token Approval Scams
                        </h3>
                        <p className="mb-3">
                          These scams trick users into granting malicious smart contracts unlimited access to their tokens, which are then stolen immediately or at a later time.
                        </p>
                        <h4 className="font-bold text-white mb-2">How they work:</h4>
                        <ol className="list-decimal pl-5 space-y-1 mb-3">
                          <li>Scammers create deceptive websites or airdrops requiring "connection"</li>
                          <li>Users connect their wallets and approve what seems like a standard transaction</li>
                          <li>The transaction actually contains an unlimited token approval</li>
                          <li>Scammers drain approved tokens immediately or wait for larger balances</li>
                        </ol>
                        <h4 className="font-bold text-white mb-2">Protection measures:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Read all transaction details before signing</li>
                          <li>Be wary of "Set Approval For All" requests, especially from new sites</li>
                          <li>Use a separate wallet for unknown or high-risk interactions</li>
                          <li>Regularly review and revoke unnecessary token approvals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'recover-from-scam' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Recovering From a Scam</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <p className="text-lg mb-6">
                      If you believe you've been scammed or your wallet has been compromised, taking immediate action can help minimize losses and potentially aid in recovery.
                    </p>

                    <div className="bg-red-900/20 p-6 rounded-lg border border-red-800/40 mb-8">
                      <h3 className="text-xl font-bold mb-3 text-white">Immediate Actions to Take</h3>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>
                          <strong className="text-white">Transfer remaining assets immediately</strong>
                          <p>If you still have assets in the compromised wallet, transfer them to a new, secure wallet as quickly as possible.</p>
                        </li>
                        <li>
                          <strong className="text-white">Revoke all token approvals</strong>
                          <p>Use tools like Revoke.cash or Etherscan to revoke any outstanding token approvals from the compromised wallet.</p>
                        </li>
                        <li>
                          <strong className="text-white">Document everything</strong>
                          <p>Record all relevant transaction hashes, timestamps, wallet addresses, and communications related to the incident.</p>
                        </li>
                        <li>
                          <strong className="text-white">Disconnect from sites and dApps</strong>
                          <p>Disconnect your wallet from all websites and decentralized applications.</p>
                        </li>
                      </ol>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaExclamationTriangle className="mr-2 text-yellow-400" />
                      Reporting the Scam
                    </h3>
                    
                    <p className="mb-6">
                      While blockchain transactions are irreversible, reporting scams can sometimes help with recovery and always helps protect others.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">Where to Report</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Local law enforcement</li>
                          <li>FBI Internet Crime Complaint Center (IC3)</li>
                          <li>Financial regulatory authorities in your jurisdiction</li>
                          <li>The cryptocurrency exchange involved (if applicable)</li>
                          <li>Blockchain security firms like CertiK, PeckShield</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-white mb-3">What to Include in Reports</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Your wallet address</li>
                          <li>The scammer's wallet address</li>
                          <li>Transaction hashes</li>
                          <li>Description of how the scam occurred</li>
                          <li>Screenshots of communications or websites</li>
                          <li>Date and time of incident</li>
                          <li>Financial value of lost assets</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaCheckCircle className="mr-2 text-green-400" />
                      Creating a New Secure Setup
                    </h3>
                    
                    <p className="mb-6">
                      After a security incident, it's essential to establish a more secure setup to prevent future issues.
                    </p>

                    <div className="bg-green-900/20 p-6 rounded-lg border border-green-800/40 mb-8">
                      <h3 className="text-xl font-bold mb-3 text-white">Steps for a Fresh Start</h3>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>
                          <strong className="text-white">Create a new wallet with a fresh seed phrase</strong>
                          <p>Never reuse the seed phrase from a compromised wallet.</p>
                        </li>
                        <li>
                          <strong className="text-white">Consider investing in a hardware wallet</strong>
                          <p>Hardware wallets provide significant security advantages over software wallets.</p>
                        </li>
                        <li>
                          <strong className="text-white">Implement a multi-wallet strategy</strong>
                          <p>Use separate wallets for different purposes (e.g., trading, DeFi, long-term storage).</p>
                        </li>
                        <li>
                          <strong className="text-white">Review your security practices</strong>
                          <p>Evaluate what went wrong and how you can improve your security habits.</p>
                        </li>
                        <li>
                          <strong className="text-white">Learn from the community</strong>
                          <p>Join security-focused communities to stay informed about emerging threats and best practices.</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-yellow-900/20 p-5 rounded-lg border border-yellow-800/40 mb-8">
                      <h4 className="font-bold text-white mb-3">Remember: Prevention is Better Than Recovery</h4>
                      <p>
                        While these steps can help after a scam occurs, the reality is that most stolen crypto is never recovered. 
                        The best protection is vigilance and sound security practices before an incident occurs.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Continue Your Crypto Security Education</h2>
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
                href="/tools" 
                className="px-6 py-3 bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                Security Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 