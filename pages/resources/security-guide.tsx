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
import TabLayout from '../../components/TabLayout'

export default function SecurityGuide() {
  const [activeTab, setActiveTab] = useState('basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'basics', name: 'Security Basics', icon: <FaShieldAlt className="text-green-400" size={24} /> },
    { id: 'token-approvals', name: 'Token Approvals', icon: <FaKey className="text-blue-400" size={24} /> },
    { id: 'common-scams', name: 'Common Scams', icon: <FaExclamationTriangle className="text-red-400" size={24} /> },
    { id: 'recover-from-scam', name: 'Scam Recovery', icon: <FaCheckCircle className="text-yellow-400" size={24} /> },
  ]

  return (
    <>
      <Head>
        <title>Crypto Security Guide | Open Crypto Foundation</title>
        <meta name="description" content="Learn essential security practices for protecting your crypto assets, understanding token approvals, avoiding common scams, and steps to take if you've been compromised." />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-transparent bg-clip-text">
              Crypto Security Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Security is paramount in the crypto space. Learn how to protect your assets, identify risks, and keep your digital holdings safe.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <TabLayout
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabPosition="side"
            >
              {/* Security Basics Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'basics' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaShieldAlt className="text-green-400 mr-3" />
                    Security Basics
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      The decentralized nature of cryptocurrencies means you have complete control over your assets, but also full responsibility for their security. Unlike traditional banking systems, there's no central authority to reverse transactions or restore lost funds.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Essential Security Practices</h3>
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
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Understanding Crypto Wallets</h3>
                    
                    <p>
                      A crypto wallet is not a physical container that holds your coins, but rather a tool that stores your private keys - the critical credentials that give you access to your blockchain assets. Without these keys, you cannot access or transfer your cryptocurrency.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Hot Wallets</h4>
                        <p>Connected to the internet (mobile apps, browser extensions, desktop software)</p>
                        <p className="mt-2 text-yellow-300">Best for: Small amounts and active trading</p>
                        <p className="mt-2">Examples: MetaMask, Trust Wallet, Coinbase Wallet</p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Cold Wallets</h4>
                        <p>Kept offline and disconnected from the internet (hardware devices, paper wallets)</p>
                        <p className="mt-2 text-green-300">Best for: Long-term storage and larger holdings</p>
                        <p className="mt-2">Examples: Ledger, Trezor, Paper wallets</p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-900/30 p-6 rounded-lg mt-6 border border-purple-800/50">
                      <h4 className="font-medium text-white mb-3">The Critical Importance of Seed Phrases</h4>
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
              </div>

              {/* Token Approvals Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'token-approvals' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaKey className="text-blue-400 mr-3" />
                    Token Approvals
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Token approvals are permissions you grant to smart contracts allowing them to spend your tokens on your behalf. This mechanism is essential for interacting with DeFi protocols, NFT marketplaces, and other blockchain applications.
                    </p>
                    
                    <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">How Token Approvals Work</h3>
                      <p className="mb-3">When you interact with a decentralized application (dApp) that needs to use your tokens:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>You sign an approval transaction giving the dApp's smart contract permission to access your tokens</li>
                        <li>The approval is recorded on the blockchain and remains valid until explicitly revoked</li>
                        <li>The approved contract can then transfer up to the approved amount from your wallet without requiring additional confirmation</li>
                      </ol>
                    </div>
                    
                    <div className="bg-red-900/30 p-6 rounded-lg mt-6 border border-red-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Security Risks of Token Approvals</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Unlimited approvals: Many dApps request access to unlimited token amounts</li>
                        <li>Forgotten approvals: Old approvals remain active even after you stop using a service</li>
                        <li>Malicious contracts: Scam websites may trick you into approving harmful contracts</li>
                        <li>Compromised protocols: If an approved protocol is hacked, your approved tokens could be at risk</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Managing Your Approvals</h3>
                    
                    <p>
                      Regular auditing and management of your token approvals is an essential security practice. By revoking unnecessary approvals, you can significantly reduce your exposure to potential security vulnerabilities.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Best Practices</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Regularly review and revoke unused approvals</li>
                          <li>Use limited approvals when possible (exact amount needed)</li>
                          <li>Use a dedicated "hot wallet" for active DeFi participation</li>
                          <li>Consider separate wallets for different activities</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">How to Revoke Approvals</h4>
                        <p>Use dedicated tools to review and revoke your approvals:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Etherscan's Token Approvals</li>
                          <li>Revoke.cash</li>
                          <li>Debank's token approval checker</li>
                          <li>Your wallet's built-in approval manager (if available)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Scams Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'common-scams' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaExclamationTriangle className="text-red-400 mr-3" />
                    Common Scams
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Being aware of common scam tactics is your first line of defense in the cryptocurrency space. Scammers continually evolve their methods, but understanding the fundamental patterns can help you spot red flags.
                    </p>
                    
                    <div className="space-y-6 mt-6">
                      <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <FaUserSecret className="text-red-400 mr-2" />
                          Phishing Attacks
                        </h3>
                        <p className="mb-3">
                          Scammers create fake websites, emails, or messages that appear legitimate but are designed to steal your private keys or seed phrase.
                        </p>
                        <div className="bg-gray-600 p-4 rounded">
                          <h4 className="font-medium text-white mb-2">Warning Signs</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Slightly misspelled URLs (e.g., metarnask.io instead of metamask.io)</li>
                            <li>Unsolicited messages asking you to verify your wallet</li>
                            <li>Urgent requests claiming your account needs attention</li>
                            <li>Offers that seem too good to be true (airdrops, giveaways)</li>
                          </ul>
                        </div>
                        <div className="bg-gray-600 p-4 rounded mt-3">
                          <h4 className="font-medium text-white mb-2">Protection Tips</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Bookmark official websites instead of using search engines</li>
                            <li>Never share your seed phrase or private keys with anyone</li>
                            <li>Triple-check URLs before entering sensitive information</li>
                            <li>Use hardware wallets to add an extra layer of security</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <FaExchangeAlt className="text-orange-400 mr-2" />
                          Social Engineering
                        </h3>
                        <p className="mb-3">
                          Manipulative tactics that exploit human psychology to trick people into revealing sensitive information or sending cryptocurrency to scammers.
                        </p>
                        <div className="bg-gray-600 p-4 rounded">
                          <h4 className="font-medium text-white mb-2">Common Techniques</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Impersonating customer support in Discord or Telegram</li>
                            <li>Creating false urgency ("Act now or lose your funds")</li>
                            <li>Building fake relationships to gain trust over time</li>
                            <li>Offering "technical assistance" to fix wallet issues</li>
                          </ul>
                        </div>
                        <div className="bg-gray-600 p-4 rounded mt-3">
                          <h4 className="font-medium text-white mb-2">Protection Tips</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Remember that legitimate support will never DM you first</li>
                            <li>Be skeptical of urgency and pressure tactics</li>
                            <li>Verify identities through official channels</li>
                            <li>Never share your screen with strangers offering help</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <FaThumbsDown className="text-red-400 mr-2" />
                          Malicious Smart Contracts
                        </h3>
                        <p className="mb-3">
                          Deceptive contracts designed to appear legitimate but containing hidden functions that allow attackers to drain funds or manipulate tokens.
                        </p>
                        <div className="bg-gray-600 p-4 rounded">
                          <h4 className="font-medium text-white mb-2">Warning Signs</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Contracts with unusual approval requests</li>
                            <li>Unverified contracts on block explorers</li>
                            <li>Functions with misleading names</li>
                            <li>Projects rushing users to interact with new contracts</li>
                          </ul>
                        </div>
                        <div className="bg-gray-600 p-4 rounded mt-3">
                          <h4 className="font-medium text-white mb-2">Protection Tips</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Only interact with audited and verified contracts</li>
                            <li>Use tools like Etherscan to check contract code</li>
                            <li>Be cautious of newly deployed contracts</li>
                            <li>Research projects thoroughly before interacting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scam Recovery Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'recover-from-scam' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaCheckCircle className="text-yellow-400 mr-3" />
                    Scam Recovery
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      If you suspect you've been scammed or your wallet has been compromised, taking immediate action is crucial. While recovery of lost funds is often difficult, these steps can help minimize damage and potentially aid in recovery.
                    </p>
                    
                    <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">Immediate Actions</h3>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>
                          <strong className="text-yellow-300">Transfer remaining assets:</strong> If you still have access to your wallet and it contains any remaining assets, immediately transfer them to a new, secure wallet.
                        </li>
                        <li>
                          <strong className="text-yellow-300">Revoke token approvals:</strong> Use tools like Revoke.cash to cancel any outstanding token approvals that might give attackers continued access.
                        </li>
                        <li>
                          <strong className="text-yellow-300">Document everything:</strong> Take screenshots and note transaction hashes, addresses, websites, and communications related to the incident.
                        </li>
                        <li>
                          <strong className="text-yellow-300">Create a new wallet:</strong> Abandon the compromised wallet entirely and set up a fresh wallet with a new seed phrase.
                        </li>
                      </ol>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Reporting and Recovery Options</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Report to Authorities</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>File a report with your local police department</li>
                          <li>Submit a complaint to the FBI's Internet Crime Complaint Center (IC3)</li>
                          <li>Report to your country's financial crime unit</li>
                          <li>Contact the FTC if in the US</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Contact Exchanges</h4>
                        <p>If stolen funds were transferred to a centralized exchange:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Contact the exchange's support team immediately</li>
                          <li>Provide transaction details and evidence of the theft</li>
                          <li>Request a freeze on the receiving address</li>
                          <li>Follow up regularly on your case</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-medium text-white mb-3">Seek Community Support</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Join support groups for crypto scam victims</li>
                          <li>Contact blockchain analytics firms that might help trace funds</li>
                          <li>Reach out to project teams if it was a project-specific issue</li>
                          <li>Consider legal consultation specialized in crypto recovery</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Moving Forward</h3>
                      <p className="mb-3">
                        Recovery of stolen crypto is unfortunately rare, but possible in some cases. No matter the outcome:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Review what happened to understand how you were targeted</li>
                        <li>Enhance your security practices for remaining assets</li>
                        <li>Consider using a hardware wallet for future crypto storage</li>
                        <li>Share your experience (anonymously if preferred) to help others avoid similar scams</li>
                        <li>Be wary of "recovery services" promising to retrieve stolen funds - many are secondary scams targeting victims</li>
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