import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCalendarAlt, FaTag, FaSearch, FaMegaphone, FaBookOpen, FaShieldAlt } from 'react-icons/fa';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';

// Sample blog post data - this would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Understanding Common Cryptocurrency Scams in 2023",
    slug: "understanding-common-crypto-scams-2023",
    excerpt: "A detailed breakdown of the most prevalent scams targeting crypto users this year, and how to protect yourself from them.",
    date: "2023-06-15",
    author: "Alex Chen",
    category: "Security",
    featured: true,
    imageUrl: "/images/blog/crypto-scams.jpg"
  },
  {
    id: 2,
    title: "The OCF Launches New Wallet Security Tool",
    slug: "ocf-launches-wallet-security-tool",
    excerpt: "We're excited to announce the release of our new open-source wallet security assessment tool to help users identify potential vulnerabilities.",
    date: "2023-05-22",
    author: "Jamie Rodriguez",
    category: "Announcement",
    featured: true,
    imageUrl: "/images/blog/wallet-security.jpg"
  },
  {
    id: 3,
    title: "How Decentralized Exchanges Can Improve User Protection",
    slug: "decentralized-exchanges-user-protection",
    excerpt: "Analyzing the current state of DEXs and proposing standards for better user safety while maintaining decentralization principles.",
    date: "2023-04-30",
    author: "Sam Wilson",
    category: "Research",
    featured: false,
    imageUrl: "/images/blog/dex-protection.jpg"
  },
  {
    id: 4,
    title: "Quarterly Report: State of Crypto Security Q1 2023",
    slug: "quarterly-report-q1-2023",
    excerpt: "Our analysis of major security incidents, emerging threat vectors, and improved protection measures from the first quarter.",
    date: "2023-04-05",
    author: "Taylor Johnson",
    category: "Report",
    featured: false,
    imageUrl: "/images/blog/quarterly-report.jpg"
  },
  {
    id: 5,
    title: "OCF Partners with Leading Exchanges on Security Standards",
    slug: "ocf-exchange-partnership",
    excerpt: "Announcing our collaboration with major cryptocurrency exchanges to develop consistent security standards for listed projects.",
    date: "2023-03-18",
    author: "Chris Morgan",
    category: "Announcement",
    featured: false,
    imageUrl: "/images/blog/exchange-partnership.jpg"
  },
  {
    id: 6,
    title: "The Psychology of Crypto Scams: Why Smart People Fall for Them",
    slug: "psychology-crypto-scams",
    excerpt: "Exploring the psychological tactics used by scammers and why experience and intelligence don't always protect users.",
    date: "2023-02-27",
    author: "Dr. Priya Shah",
    category: "Research",
    featured: false,
    imageUrl: "/images/blog/scam-psychology.jpg"
  }
];

const categories = [
  { name: "All", count: blogPosts.length, icon: <FaBookOpen /> },
  { name: "Security", count: blogPosts.filter(p => p.category === "Security").length, icon: <FaShieldAlt /> },
  { name: "Announcement", count: blogPosts.filter(p => p.category === "Announcement").length, icon: <FaMegaphone /> },
  { name: "Research", count: blogPosts.filter(p => p.category === "Research").length, icon: <FaBookOpen /> },
  { name: "Report", count: blogPosts.filter(p => p.category === "Report").length, icon: <FaBookOpen /> }
];

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
        <meta name="description" content="Articles, announcements, and insights from the Open Crypto Foundation on cryptocurrency security, research, and education." />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
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
                    <div className="h-48 bg-gray-700 relative">
                      {/* This would be an actual image in production */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <span className="text-sm">Featured Image</span>
                      </div>
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
      </div>
    </>
  );
} 