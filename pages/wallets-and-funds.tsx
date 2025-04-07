import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FaWallet, 
  FaExternalLinkAlt, 
  FaClock, 
  FaUsers, 
  FaCheckCircle, 
  FaExchangeAlt, 
  FaHandHoldingUsd, 
  FaLightbulb, 
  FaLaptopCode,
  FaEthereum,
  FaCoins,
  FaShield
} from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import ScrollToTop from '../components/ScrollToTop';

// Mock data for wallet balances - in a real implementation, this would come from an API
const walletData = {
  ethereum: [
    {
      id: 'eth-treasury',
      name: 'ETH Treasury',
      address: '0x1234567890123456789012345678901234567890',
      explorerUrl: 'https://etherscan.io/address/0x1234567890123456789012345678901234567890',
      balances: [
        { token: 'ETH', amount: '125.75', usdValue: '251,500' },
        { token: 'USDC', amount: '250,000', usdValue: '250,000' },
        { token: 'USDT', amount: '175,000', usdValue: '175,000' },
        { token: 'OFC', amount: '2,500,000', usdValue: '500,000' }
      ],
      owners: [
        { name: 'OCF Governance', address: '0xabcdef1234567890abcdef1234567890abcdef12' },
        { name: 'Multisig Signer 1', address: '0x1234abcdef5678901234abcdef5678901234abcd' },
        { name: 'Multisig Signer 2', address: '0x5678901234abcdef5678901234abcdef56789012' }
      ],
      recentTransactions: [
        { 
          hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890', 
          type: 'Transfer Out', 
          amount: '25,000 USDC', 
          recipient: '0x9876543210987654321098765432109876543210',
          timestamp: '2023-06-10 14:32:15',
          status: 'Confirmed'
        },
        { 
          hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', 
          type: 'Receive', 
          amount: '50 ETH', 
          sender: '0xfedcba9876543210fedcba9876543210fedcba98',
          timestamp: '2023-06-05 09:17:42',
          status: 'Confirmed'
        }
      ],
      requiredSigners: 2,
      totalSigners: 3
    },
    {
      id: 'eth-operations',
      name: 'ETH Operations',
      address: '0x2345678901234567890123456789012345678901',
      explorerUrl: 'https://etherscan.io/address/0x2345678901234567890123456789012345678901',
      balances: [
        { token: 'ETH', amount: '45.25', usdValue: '90,500' },
        { token: 'USDC', amount: '120,000', usdValue: '120,000' },
        { token: 'OFC', amount: '750,000', usdValue: '150,000' }
      ],
      owners: [
        { name: 'OCF Operations', address: '0xbcdef1234567890abcdef1234567890abcdef123' },
        { name: 'Multisig Signer 1', address: '0x234abcdef5678901234abcdef5678901234abcde' },
        { name: 'Multisig Signer 2', address: '0x678901234abcdef5678901234abcdef567890123' }
      ],
      recentTransactions: [
        { 
          hash: '0xcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890a', 
          type: 'Transfer Out', 
          amount: '15 ETH', 
          recipient: '0xa987654321098765432109876543210987654321',
          timestamp: '2023-06-08 11:45:28',
          status: 'Confirmed'
        }
      ],
      requiredSigners: 2,
      totalSigners: 3
    }
  ],
  solana: [
    {
      id: 'sol-treasury',
      name: 'Solana Treasury',
      address: 'SoLTr3asury1111111111111111111111111111111',
      explorerUrl: 'https://solscan.io/account/SoLTr3asury1111111111111111111111111111111',
      balances: [
        { token: 'SOL', amount: '2,500', usdValue: '150,000' },
        { token: 'USDC', amount: '200,000', usdValue: '200,000' },
        { token: 'OFC', amount: '3,500,000', usdValue: '700,000' }
      ],
      owners: [
        { name: 'OCF Governance', address: 'SoLGovernance111111111111111111111111111111' },
        { name: 'Multisig Signer 1', address: 'SoLSigner111111111111111111111111111111111' },
        { name: 'Multisig Signer 2', address: 'SoLSigner222222222222222222222222222222222' }
      ],
      recentTransactions: [
        { 
          hash: 'SoLHash1111111111111111111111111111111111111111111111111111', 
          type: 'Transfer Out', 
          amount: '100 SOL', 
          recipient: 'SoLRecipient11111111111111111111111111111111',
          timestamp: '2023-06-09 16:24:53',
          status: 'Confirmed'
        }
      ],
      requiredSigners: 2,
      totalSigners: 3
    }
  ],
  bnb: [
    {
      id: 'bnb-treasury',
      name: 'BNB Treasury',
      address: '0x3456789012345678901234567890123456789012',
      explorerUrl: 'https://bscscan.com/address/0x3456789012345678901234567890123456789012',
      balances: [
        { token: 'BNB', amount: '750', usdValue: '175,000' },
        { token: 'USDT', amount: '150,000', usdValue: '150,000' },
        { token: 'OFC', amount: '1,800,000', usdValue: '360,000' }
      ],
      owners: [
        { name: 'OCF Governance', address: '0xcdef1234567890abcdef1234567890abcdef1234' },
        { name: 'Multisig Signer 1', address: '0x34abcdef5678901234abcdef5678901234abcdef' },
        { name: 'Multisig Signer 2', address: '0x78901234abcdef5678901234abcdef5678901234' }
      ],
      recentTransactions: [
        { 
          hash: '0xef1234567890abcdef1234567890abcdef1234567890abcdef1234567890ab', 
          type: 'Receive', 
          amount: '250 BNB', 
          sender: '0xb9876543210987654321098765432109876543210',
          timestamp: '2023-06-07 13:28:41',
          status: 'Confirmed'
        }
      ],
      requiredSigners: 2,
      totalSigners: 3
    }
  ],
  monad: [
    {
      id: 'monad-testnet',
      name: 'Monad Testnet',
      address: '0x4567890123456789012345678901234567890123',
      explorerUrl: 'https://explorer.monad.testnet/address/0x4567890123456789012345678901234567890123',
      balances: [
        { token: 'MONAD', amount: '5,000', usdValue: 'Testnet' },
        { token: 'OFC', amount: '1,000,000', usdValue: 'Testnet' }
      ],
      owners: [
        { name: 'OCF Development', address: '0xdef1234567890abcdef1234567890abcdef12345' },
        { name: 'Multisig Signer 1', address: '0x4abcdef5678901234abcdef5678901234abcdef5' },
        { name: 'Multisig Signer 2', address: '0x8901234abcdef5678901234abcdef56789012345' }
      ],
      recentTransactions: [
        { 
          hash: '0xf1234567890abcdef1234567890abcdef1234567890abcdef1234567890abc', 
          type: 'Contract Deployment', 
          amount: 'N/A', 
          recipient: '0xc987654321098765432109876543210987654321',
          timestamp: '2023-06-06 10:15:33',
          status: 'Confirmed'
        }
      ],
      requiredSigners: 2,
      totalSigners: 3
    }
  ]
};

// Mock data for the grant funds
const fundData = [
  {
    id: 'victim-recovery',
    name: 'Victim Recovery Fund',
    description: 'Dedicated fund to assist victims of major cryptocurrency scams, hacks, and exploits, providing direct financial relief and recovery resources to affected individuals and projects.',
    address: '0x5678901234567890123456789012345678901234',
    explorerUrl: 'https://etherscan.io/address/0x5678901234567890123456789012345678901234',
    balance: '$2,500,000 USD',
    icon: <FaHandHoldingUsd className="text-green-500" size={24} />
  },
  {
    id: 'safety-rd',
    name: 'OFC Protocol Safety R&D Fund',
    description: 'Research and development fund focused on advancing blockchain security protocols, smart contract auditing tools, and early detection systems for potential vulnerabilities or attacks.',
    address: '0x6789012345678901234567890123456789012345',
    explorerUrl: 'https://etherscan.io/address/0x6789012345678901234567890123456789012345',
    balance: '$3,750,000 USD',
    icon: <FaShield className="text-blue-500" size={24} />
  },
  {
    id: 'developer-grants',
    name: 'Developers and Projects Grant Fund',
    description: 'Grant program supporting innovative developers and projects that enhance blockchain security, transparency, or user protection through technical solutions or educational initiatives.',
    address: '0x7890123456789012345678901234567890123456',
    explorerUrl: 'https://etherscan.io/address/0x7890123456789012345678901234567890123456',
    balance: '$5,000,000 USD',
    icon: <FaLaptopCode className="text-purple-500" size={24} />
  }
];

export default function WalletsAndFundsPage() {
  const [activeChain, setActiveChain] = React.useState('ethereum');
  const [activeWallet, setActiveWallet] = React.useState(walletData.ethereum[0].id);

  const handleChainChange = (chain) => {
    setActiveChain(chain);
    // Set the first wallet of the selected chain as active
    setActiveWallet(walletData[chain][0].id);
  };

  const getWalletById = (walletId) => {
    let wallet = null;
    Object.keys(walletData).forEach(chain => {
      const found = walletData[chain].find(w => w.id === walletId);
      if (found) wallet = found;
    });
    return wallet;
  };

  const selectedWallet = getWalletById(activeWallet);

  return (
    <>
      <Head>
        <title>OCF Wallets and Funds | Open Crypto Foundation</title>
        <meta name="description" content="Transparent view of Open Crypto Foundation wallets and grant funds across multiple blockchains" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gradient">O.C.F Wallets and Funds</h1>
            <p className="text-xl text-gray-400 mb-8">
              Transparent oversight of the Open Crypto Foundation's multi-chain treasury, operational wallets, and dedicated grant funds. 
              All transactions require multi-signature approval through our decentralized governance protocol.
            </p>
          </div>

          {/* Chain Selector */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Foundation Wallets</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 
                  ${activeChain === 'ethereum' ? 'bg-blue-600 text-white' : 'bg-dark-card border border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                onClick={() => handleChainChange('ethereum')}
              >
                <FaEthereum size={20} />
                Ethereum
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 
                  ${activeChain === 'solana' ? 'bg-purple-600 text-white' : 'bg-dark-card border border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                onClick={() => handleChainChange('solana')}
              >
                <SiSolana size={20} />
                Solana
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 
                  ${activeChain === 'bnb' ? 'bg-yellow-600 text-white' : 'bg-dark-card border border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                onClick={() => handleChainChange('bnb')}
              >
                <FaCoins size={20} />
                BNB Chain
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 
                  ${activeChain === 'monad' ? 'bg-green-600 text-white' : 'bg-dark-card border border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                onClick={() => handleChainChange('monad')}
              >
                <FaCoins size={20} />
                Monad Testnet
              </button>
            </div>
          </div>

          {/* Wallet Display */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
            {/* Wallet Selector Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-dark-card p-5 rounded-xl border border-gray-800">
                <h3 className="font-bold text-white mb-4">Select Wallet</h3>
                <ul className="space-y-2">
                  {walletData[activeChain].map(wallet => (
                    <li key={wallet.id}>
                      <button
                        className={`w-full text-left p-3 rounded-lg transition-colors flex items-center gap-2
                          ${activeWallet === wallet.id 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : 'text-gray-400 hover:bg-dark-elevated'}`}
                        onClick={() => setActiveWallet(wallet.id)}
                      >
                        <FaWallet size={16} />
                        <span>{wallet.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wallet Details */}
            <div className="lg:col-span-3">
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedWallet.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-400 font-mono">{selectedWallet.address}</span>
                      <a 
                        href={selectedWallet.explorerUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light transition-colors"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    </div>
                  </div>
                  <div className="bg-dark-elevated px-3 py-1 rounded-full flex items-center gap-1">
                    <FaUsers size={14} className="text-primary" />
                    <span className="text-gray-300 text-sm">{selectedWallet.requiredSigners} of {selectedWallet.totalSigners} Multi-Sig</span>
                  </div>
                </div>

                {/* Balances */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <FaCoins className="text-primary" />
                    Wallet Balances
                  </h4>
                  <div className="bg-dark-elevated rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-dark-card">
                        <tr>
                          <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Token</th>
                          <th className="py-3 px-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                          <th className="py-3 px-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">USD Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark-card">
                        {selectedWallet.balances.map((balance, index) => (
                          <tr key={index} className="hover:bg-dark-card/50 transition-colors">
                            <td className="py-4 px-4 text-left whitespace-nowrap">
                              <span className="font-medium text-white">{balance.token}</span>
                            </td>
                            <td className="py-4 px-4 text-right whitespace-nowrap">
                              <span className="text-gray-300">{balance.amount}</span>
                            </td>
                            <td className="py-4 px-4 text-right whitespace-nowrap">
                              <span className="text-primary">${balance.usdValue}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <FaExchangeAlt className="text-primary" />
                    Recent Transactions
                  </h4>
                  <div className="bg-dark-elevated rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-dark-card">
                        <tr>
                          <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Type</th>
                          <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                          <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Recipient/Sender</th>
                          <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Time</th>
                          <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                          <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Tx Hash</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark-card">
                        {selectedWallet.recentTransactions.map((tx, index) => (
                          <tr key={index} className="hover:bg-dark-card/50 transition-colors">
                            <td className="py-4 px-4 text-left whitespace-nowrap">
                              <span className={`font-medium ${tx.type.includes('Out') ? 'text-red-400' : 'text-green-400'}`}>
                                {tx.type}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-left whitespace-nowrap">
                              <span className="text-gray-300">{tx.amount}</span>
                            </td>
                            <td className="py-4 px-4 text-left whitespace-nowrap">
                              <span className="text-gray-300 font-mono text-xs truncate max-w-[120px] inline-block">
                                {tx.recipient || tx.sender}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-left whitespace-nowrap">
                              <div className="flex items-center gap-1">
                                <FaClock className="text-gray-500" size={12} />
                                <span className="text-gray-400 text-sm">{tx.timestamp}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-left whitespace-nowrap">
                              <div className="flex items-center gap-1">
                                <FaCheckCircle className="text-green-500" size={12} />
                                <span className="text-gray-300 text-sm">{tx.status}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-left whitespace-nowrap">
                              <span className="text-gray-300 font-mono text-xs truncate max-w-[100px] inline-block">
                                {tx.hash.slice(0, 10)}...
                              </span>
                              <a 
                                href={`${selectedWallet.explorerUrl}/tx/${tx.hash}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-light transition-colors ml-2"
                              >
                                <FaExternalLinkAlt size={12} />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Owners/Signers */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <FaUsers className="text-primary" />
                    Multi-Signature Owners
                  </h4>
                  <div className="bg-dark-elevated rounded-xl p-5">
                    <p className="text-gray-400 mb-4">
                      This wallet requires {selectedWallet.requiredSigners} out of {selectedWallet.totalSigners} signatures to execute any transaction. 
                      All signers are verified OCF governance participants with secure key management protocols.
                    </p>
                    <ul className="space-y-3">
                      {selectedWallet.owners.map((owner, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-dark-card pb-3">
                          <div>
                            <span className="text-white font-medium">{owner.name}</span>
                            <p className="text-gray-400 font-mono text-xs mt-1">{owner.address}</p>
                          </div>
                          <a 
                            href={`${selectedWallet.explorerUrl.split('/address')[0]}/address/${owner.address}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            <FaExternalLinkAlt size={14} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grant Funds Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Grant Programs</h2>
            <p className="text-gray-400 mb-8">
              The Open Crypto Foundation operates three dedicated grant programs focused on different aspects of the crypto ecosystem. 
              Each fund is governed by a separate multi-signature wallet with transparent allocation processes and regular reporting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fundData.map(fund => (
                <div key={fund.id} className="bg-dark-card rounded-xl border border-gray-800 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-dark-elevated p-3 rounded-lg">
                        {fund.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{fund.name}</h3>
                    </div>
                    <p className="text-gray-400 mb-4 h-24 overflow-auto">
                      {fund.description}
                    </p>
                    <div className="bg-dark-elevated rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400">Current Balance</span>
                        <span className="text-primary font-bold">{fund.balance}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-gray-500 font-mono truncate max-w-[250px]">{fund.address}</span>
                        <a 
                          href={fund.explorerUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-light transition-colors"
                        >
                          <FaExternalLinkAlt size={12} />
                        </a>
                      </div>
                    </div>
                    <Link 
                      href={`/grants/${fund.id}`} 
                      className="block w-full text-center py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                    >
                      View Grant Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Commitment */}
          <div className="bg-dark-card rounded-xl border border-gray-800 p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Transparency</h2>
            <p className="text-gray-400 mb-6">
              The Open Crypto Foundation is committed to full financial transparency. All wallet addresses are publicly verifiable, and transactions 
              require multi-signature approval from foundation governors. Regular financial reports are published quarterly and all grant allocations 
              are documented with clear objectives and outcomes.
            </p>
            <p className="text-gray-400">
              For additional information or questions about our financial governance, please contact our treasury team at 
              <a href="mailto:treasury@opencryptofoundation.org" className="text-primary hover:underline ml-1">
                treasury@opencryptofoundation.org
              </a>
            </p>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
} 