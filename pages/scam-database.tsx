import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FaSearch, 
  FaExclamationTriangle, 
  FaExternalLinkAlt, 
  FaFilter, 
  FaGithub, 
  FaDatabase,
  FaShieldAlt,
  FaListAlt,
  FaClock
} from 'react-icons/fa';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';

// Types for our scam database entries
interface ScamEntry {
  id: string;
  name: string;
  url: string;
  category: string;
  subcategory: string;
  description: string;
  reporter?: string;
  addresses?: string[];
  status: 'Active' | 'Inactive' | 'Offline';
  dateAdded: string;
  dateUpdated?: string;
  screenshot?: string;
}

export default function ScamDatabase() {
  const [scamData, setScamData] = useState<ScamEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Categories of crypto scams
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'phishing', name: 'Phishing' },
    { id: 'fake-ico', name: 'Fake ICO/Token' },
    { id: 'ponzi', name: 'Ponzi Scheme' },
    { id: 'malware', name: 'Malware' },
    { id: 'fake-exchange', name: 'Fake Exchange' },
    { id: 'social-engineering', name: 'Social Engineering' },
    { id: 'rugpull', name: 'Rug Pull' },
    { id: 'honeypot', name: 'Honeypot' },
  ];

  // Status filters
  const statuses = [
    { id: 'all', name: 'All Statuses' },
    { id: 'active', name: 'Active' },
    { id: 'inactive', name: 'Inactive' },
    { id: 'offline', name: 'Offline' },
  ];

  // Sample scam data (to be replaced with API call to CryptoScamDB)
  useEffect(() => {
    // Simulating API call to CryptoScamDB
    const fetchScamData = async () => {
      try {
        setIsLoading(true);
        
        // In production, this would be replaced with:
        // const response = await fetch('https://api.cryptoscamdb.org/v1/scams');
        // const data = await response.json();
        
        // For now, using sample data
        const sampleData: ScamEntry[] = [
          {
            id: '1',
            name: 'Fake MetaMask',
            url: 'metamask-wallet.io',
            category: 'phishing',
            subcategory: 'wallet',
            description: 'Fake MetaMask website that steals users\' seed phrases and private keys.',
            status: 'Active',
            dateAdded: '2023-04-15',
            dateUpdated: '2023-06-18'
          },
          {
            id: '2',
            name: 'ETH2x Multiplier',
            url: 'eth-multiplier.com',
            category: 'ponzi',
            subcategory: 'investment',
            description: 'Fraudulent website claiming to double ETH deposits.',
            status: 'Offline',
            dateAdded: '2023-01-05'
          },
          {
            id: '3',
            name: 'UniSwoop',
            url: 'uniswoop-exchange.org',
            category: 'fake-exchange',
            subcategory: 'dex',
            description: 'Fake Uniswap interface that steals user funds.',
            status: 'Active',
            dateAdded: '2023-03-22',
            dateUpdated: '2023-05-19'
          },
          {
            id: '4',
            name: 'ShibaAirdrop',
            url: 'shibainuairdrop.net',
            category: 'social-engineering',
            subcategory: 'airdrop',
            description: 'Fake Shiba Inu token airdrop that requires users to send tokens first.',
            status: 'Inactive',
            dateAdded: '2022-11-17'
          },
          {
            id: '5',
            name: 'SafeDeFiToken',
            url: 'safedefitoken.finance',
            category: 'rugpull',
            subcategory: 'token',
            description: 'Token project where developers abandoned it after raising funds.',
            addresses: ['0x123f85d21f34a2b90b1d21f86'],
            status: 'Inactive',
            dateAdded: '2022-09-08'
          },
          {
            id: '6',
            name: 'CryptoTaxHelper',
            url: 'cryptotax-helper.com',
            category: 'malware',
            subcategory: 'software',
            description: 'Malicious software claiming to help with crypto taxes but steals wallet information.',
            status: 'Active',
            dateAdded: '2023-02-12'
          },
          {
            id: '7',
            name: 'BNB Miner',
            url: 'bnb-mining-pool.com',
            category: 'ponzi',
            subcategory: 'mining',
            description: 'Fake mining pool that promises unrealistic BNB returns.',
            status: 'Active',
            dateAdded: '2023-05-01'
          },
          {
            id: '8',
            name: 'Lido Staking Clone',
            url: 'lido-staking.net',
            category: 'phishing',
            subcategory: 'staking',
            description: 'Fake Lido Finance staking site that steals deposited ETH.',
            status: 'Offline',
            dateAdded: '2023-03-05'
          },
          {
            id: '9',
            name: 'StarGate Copy',
            url: 'stargate-finance.org',
            category: 'fake-exchange',
            subcategory: 'bridge',
            description: 'Fake Stargate Finance bridge that steals cross-chain transfers.',
            status: 'Active',
            dateAdded: '2023-06-10'
          },
          {
            id: '10',
            name: 'YieldBooster',
            url: 'yield-booster.finance',
            category: 'honeypot',
            subcategory: 'defi',
            description: 'Honeypot smart contract that allows deposits but not withdrawals.',
            addresses: ['0xabc85d89d2130a90823ab95c3d'],
            status: 'Active',
            dateAdded: '2023-05-28'
          },
          {
            id: '11',
            name: 'Arbitrum Airdrop Scam',
            url: 'arbitrum-airdrop.io',
            category: 'social-engineering',
            subcategory: 'airdrop',
            description: 'Fake Arbitrum airdrop site stealing user credentials.',
            status: 'Inactive',
            dateAdded: '2023-04-02'
          },
          {
            id: '12',
            name: 'Pancake Swap Frontend',
            url: 'pancakeswaps.finance',
            category: 'phishing',
            subcategory: 'dex',
            description: 'Fake PancakeSwap interface with malicious approval transactions.',
            status: 'Active',
            dateAdded: '2023-06-15'
          }
        ];
        
        // Simulate API delay
        setTimeout(() => {
          setScamData(sampleData);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching scam data:', error);
        setIsLoading(false);
      }
    };
    
    fetchScamData();
  }, []);

  // Filter scam data based on search and filters
  const filteredScams = scamData.filter(scam => {
    const matchesSearch = 
      scam.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      scam.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scam.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || scam.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || scam.status.toLowerCase() === selectedStatus.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Pagination
  const pageCount = Math.ceil(filteredScams.length / itemsPerPage);
  const displayedScams = filteredScams.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-red-600';
      case 'inactive':
        return 'bg-yellow-600';
      case 'offline':
        return 'bg-gray-600';
      default:
        return 'bg-blue-600';
    }
  };

  // Get category label
  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <>
      <Head>
        <title>Scam Database | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Comprehensive database of cryptocurrency scams, phishing sites, and fraudulent projects to help users stay safe in the crypto space." 
        />
      </Head>

      <ScrollToTop />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Cryptocurrency <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Scam Database</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300 leading-relaxed">
              A comprehensive directory of known cryptocurrency scams, phishing websites, and fraudulent projects.
              Powered by data from CryptoScamDB.
            </p>
            <Link 
              href="/report-scam" 
              className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors"
            >
              <FaExclamationTriangle className="mr-2" />
              Report Scam
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-gray-900 border-b border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="w-full md:flex-1 relative">
                <input
                  type="text"
                  placeholder="Search by name, URL, or description..."
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              {/* Category Filter */}
              <div className="w-full md:w-auto">
                <select
                  className="w-full md:w-48 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Status Filter */}
              <div className="w-full md:w-auto">
                <select
                  className="w-full md:w-48 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map(status => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Results counter */}
            <div className="mt-4 text-gray-400 text-sm">
              Showing {filteredScams.length} of {scamData.length} scams
            </div>
          </div>
        </div>
      </section>

      {/* Database Table */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : displayedScams.length > 0 ? (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800 text-left">
                        <th className="p-4 text-gray-300 font-semibold">Name</th>
                        <th className="p-4 text-gray-300 font-semibold">URL</th>
                        <th className="p-4 text-gray-300 font-semibold">Category</th>
                        <th className="p-4 text-gray-300 font-semibold">Status</th>
                        <th className="p-4 text-gray-300 font-semibold">Date Added</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedScams.map((scam) => (
                        <tr key={scam.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <td className="p-4 text-white">
                            <div className="flex items-start">
                              <FaExclamationTriangle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium">{scam.name}</p>
                                <p className="text-sm text-gray-400 mt-1">{scam.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-red-400 font-mono text-sm">
                            {scam.url}
                            {scam.addresses && scam.addresses.length > 0 && (
                              <div className="mt-1 text-xs text-gray-400 break-all">
                                {scam.addresses[0]}
                                {scam.addresses.length > 1 && '...'}
                              </div>
                            )}
                          </td>
                          <td className="p-4">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/30 text-blue-400">
                              {getCategoryLabel(scam.category)}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(scam.status)} text-white`}>
                              {scam.status}
                            </span>
                          </td>
                          <td className="p-4 text-gray-300">
                            <div className="flex items-center">
                              <FaClock className="text-gray-500 mr-2" size={14} />
                              {scam.dateAdded}
                            </div>
                            {scam.dateUpdated && (
                              <div className="text-xs text-gray-500 mt-1">
                                Updated: {scam.dateUpdated}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                {pageCount > 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex space-x-2">
                      <button
                        className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      
                      {Array.from({ length: pageCount }).map((_, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      ))}
                      
                      <button
                        className={`px-3 py-1 rounded-md ${currentPage === pageCount ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                        disabled={currentPage === pageCount}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-gray-800 rounded-lg p-10 text-center">
                <FaSearch className="mx-auto text-gray-500 mb-4" size={48} />
                <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                <p className="text-gray-400">
                  No scams match your current search and filter criteria. Try adjusting your search or filters.
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedStatus('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">About the Scam Database</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-red-900/40 text-red-400 rounded-lg mb-4">
                  <FaDatabase size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Sources</h3>
                <p className="text-gray-300">
                  This database aggregates information from CryptoScamDB, a community-driven project that tracks and documents cryptocurrency scams to help users stay safe.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-900/40 text-blue-400 rounded-lg mb-4">
                  <FaShieldAlt size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Staying Safe</h3>
                <p className="text-gray-300">
                  Always verify URLs before connecting your wallet or entering sensitive information. Use this database to check suspicious sites and stay informed about emerging threats.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-green-900/40 text-green-400 rounded-lg mb-4">
                  <FaListAlt size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reporting Scams</h3>
                <p className="text-gray-300">
                  Help protect the community by reporting new scams. Submit detailed information through the GitHub repository or contact our team to have entries added to the database.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 mt-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Disclaimer</h3>
              <p className="text-gray-300">
                While we strive to maintain accurate and up-to-date information, this database should be used as a reference tool only and not as a definitive source of truth. Always conduct your own research and exercise caution when interacting with any cryptocurrency website or project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto">
            <NewsletterSubscribe />
          </div>
        </div>
      </section>
    </>
  );
} 