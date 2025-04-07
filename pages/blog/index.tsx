import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCalendarAlt, FaTag, FaSearch, FaBullhorn, FaBookOpen, FaShieldAlt } from 'react-icons/fa';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

// Sample blog post data - this would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Understanding Common Cryptocurrency Scams in 2025",
    slug: "understanding-common-crypto-scams-2025",
    excerpt: "A detailed breakdown of the most prevalent scams targeting crypto users this year, and how to protect yourself from them.",
    date: "2025-06-15",
    author: "Open Crypto Foundation",
    category: "Security",
    featured: true,
    imageUrl: "https://bafkreib5mogbk5syxtr2eompzt7kz2gcumxqj6bekamyj4ywwdieoegvgy.ipfs.w3s.link/"
  },
  {
    id: 2,
    title: "OCF Announces Testnet Beta Cross-Chain Token",
    slug: "ocf-announces-testnet-beta-cross-chain-token",
    excerpt: "We're excited to announce our upcoming token launch on ETH, SOLANA, & BNB chains as we work towards our goals and eventually spin off our own network.",
    date: "2025-05-22",
    author: "Open Crypto Foundation",
    category: "Announcement",
    featured: true,
    imageUrl: "https://bafkreiazwt7g4hwwiqjeq5crcvwdrih7yag7paahiuzfdcmzs7rnsufyvy.ipfs.w3s.link/"
  },
  {
    id: 3,
    title: "The Evolution of AMM Design: Examining MEV Protection in Modern DEXs",
    slug: "evolution-amm-design-mev-protection",
    excerpt: "Our comparative analysis of post-Uniswap v4 DEX architectures and how they're adapting novel MEV mitigation strategies while balancing composability and user sovereignty.",
    date: "2025-04-10",
    author: "Open Crypto Foundation",
    category: "Research",
    featured: false,
    imageUrl: "/images/blog/dex-protection.jpg"
  },
  {
    id: 4,
    title: "Quarterly Threat Report: DeFi Security Landscape Q1 2025",
    slug: "quarterly-threat-report-q1-2025",
    excerpt: "Our comprehensive assessment of the evolving attack vectors in DeFi, featuring cross-chain bridge vulnerabilities, governance manipulation, and emergent ZK-circuit exploits.",
    date: "2025-03-28",
    author: "Open Crypto Foundation",
    category: "Report",
    featured: false,
    imageUrl: "/images/blog/quarterly-report.jpg"
  },
  {
    id: 5,
    title: "OCF Partners with Layer-1 Ecosystem Alliance on Auditing Standards",
    slug: "ocf-layer1-auditing-standards-partnership",
    excerpt: "Announcing our groundbreaking collaboration with five leading L1 ecosystems to establish cross-chain security standards and audit certification for protocol deployment.",
    date: "2025-02-14",
    author: "Open Crypto Foundation",
    category: "Announcement",
    featured: false,
    imageUrl: "/images/blog/exchange-partnership.jpg"
  },
  {
    id: 6,
    title: "The Neuroscience of Crypto Scam Vulnerability: Beyond Risk Assessment",
    slug: "neuroscience-crypto-scam-vulnerability",
    excerpt: "Exploring how neurochemical reward mechanisms and cognitive biases override traditional risk evaluation, leaving even experienced investors susceptible to sophisticated fraud.",
    date: "2025-01-30",
    author: "Open Crypto Foundation",
    category: "Research",
    featured: false,
    imageUrl: "/images/blog/scam-psychology.jpg"
  },
  {
    id: 7,
    title: "Post-Mortem: The Raft Protocol Exploit and Liquidity Fragmentation Risks",
    slug: "post-mortem-raft-protocol-exploit",
    excerpt: "Our technical analysis of the $24M Raft Protocol exploit reveals a novel form of economic manipulation through liquidity fragmentation across lending markets.",
    date: "2024-12-08",
    author: "Open Crypto Foundation",
    category: "Security",
    featured: false,
    imageUrl: "/images/blog/scam-psychology.jpg"
  },
  {
    id: 8,
    title: "The Regulatory Implications of FATF's Updated Virtual Asset Guidance",
    slug: "fatf-updated-virtual-asset-guidance-implications",
    excerpt: "Examining how the Financial Action Task Force's latest guidance on virtual assets will reshape compliance requirements for DeFi protocols and affect governance token holders.",
    date: "2024-11-15",
    author: "Open Crypto Foundation",
    category: "Regulation",
    featured: false,
    imageUrl: "/images/blog/quarterly-report.jpg"
  },
  {
    id: 9,
    title: "Zero-Knowledge Systems: Practical Applications Beyond Privacy",
    slug: "zero-knowledge-systems-practical-applications",
    excerpt: "A technical exploration of how ZK-proofs are evolving beyond privacy to address scalability, interoperability, and trustless verification in next-generation crypto infrastructure.",
    date: "2024-10-23",
    author: "Open Crypto Foundation",
    category: "Technology",
    featured: false,
    imageUrl: "/images/blog/dex-protection.jpg"
  },
  {
    id: 10,
    title: "The Aftermath of Ethereum's Cancun-Deneb Upgrade: Ecosystem Impacts",
    slug: "ethereum-cancun-deneb-ecosystem-impacts",
    excerpt: "Our analysis of how the Cancun-Deneb upgrade has transformed Ethereum's L2 landscape, DeFi yields, and validator economics two months after implementation.",
    date: "2024-09-07",
    author: "Open Crypto Foundation",
    category: "Research",
    featured: false,
    imageUrl: "/images/blog/exchange-partnership.jpg"
  }
];

const categories = [
  { name: "All", count: blogPosts.length, icon: <FaBookOpen /> },
  { name: "Security", count: blogPosts.filter(p => p.category === "Security").length, icon: <FaShieldAlt /> },
  { name: "Announcement", count: blogPosts.filter(p => p.category === "Announcement").length, icon: <FaBullhorn /> },
  { name: "Research", count: blogPosts.filter(p => p.category === "Research").length, icon: <FaBookOpen /> },
  { name: "Report", count: blogPosts.filter(p => p.category === "Report").length, icon: <FaBookOpen /> }
];

const seoConfig = {
  title: "OCF Blog | Open Crypto Foundation",
  description: "Articles, insights, and updates from the Open Crypto Foundation team.",
  imageUrl: "https://bafkreic3dkakjycfdlecqgqrnbmj7ghrwzfkfchqlthypadrudnwnp6npy.ipfs.w3s.link/"
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Blog | Open Crypto Foundation</title>
        <meta name="description" content="Read the latest updates, insights, and announcements from the Open Crypto Foundation" />
      </Head>

      <div className="container py-16 px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-teal-500 text-transparent bg-clip-text">
            OCF Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Articles, announcements, and insights on cryptocurrency security and education.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">Featured</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-4px]">
                  <div className="h-56 bg-gray-700 relative overflow-hidden">
                    {/* Display the actual image */}
                    <img 
                      src={post.imageUrl}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm ml-auto flex items-center">
                        <FaCalendarAlt className="mr-1" size={12} />
                        {post.date}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="block">
                        <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                      </a>
                    </Link>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">By {post.author}</span>
                      <Link href={`/blog/${post.slug}`}>
                        <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                          Read More →
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between ${
                        activeCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </span>
                      <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter Subscription */}
            <NewsletterSubscribe />
          </div>
          
          {/* Main Content - Article List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
              </h2>
              <div className="text-gray-400">
                Showing {filteredPosts.length} of {blogPosts.length} posts
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm ml-auto flex items-center">
                          <FaCalendarAlt className="mr-1" size={12} />
                          {post.date}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <a className="block">
                          <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                            {post.title}
                          </h3>
                        </a>
                      </Link>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">By {post.author}</span>
                        <Link href={`/blog/${post.slug}`}>
                          <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                            Read More →
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-800 rounded-lg">
                  <p className="text-gray-400">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  );
} 