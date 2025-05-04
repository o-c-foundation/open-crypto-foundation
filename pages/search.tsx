import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

// Mock search database - this would be replaced with actual search logic
const searchDatabase = [
  { title: 'Tokenomics', path: '/tokenomics', content: 'Explore the token economics of the OCF ecosystem', category: 'Token' },
  { title: 'Whitepaper', path: '/whitepaper', content: 'Read the OCF whitepaper and technical documentation', category: 'Resources' },
  { title: 'Manifesto', path: '/manifesto', content: 'Discover the vision and mission of the Open Crypto Foundation', category: 'About' },
  { title: 'DeFi Fundamentals', path: '/resources/defi-fundamentals', content: 'Learn about the fundamentals of decentralized finance', category: 'Resources' },
  { title: 'For Traders', path: '/resources/traders', content: 'Resources and tools for cryptocurrency traders', category: 'Resources' },
];

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [categories, setCategories] = useState<{[key: string]: number}>({});

  useEffect(() => {
    if (q && typeof q === 'string') {
      setSearchQuery(q);
      performSearch(q);
    }
  }, [q]);

  const performSearch = (query: string) => {
    // Simple search implementation - would be more sophisticated in production
    const queryLower = query.toLowerCase();
    const searchResults = searchDatabase.filter(item => 
      item.title.toLowerCase().includes(queryLower) || 
      item.content.toLowerCase().includes(queryLower)
    );
    
    setResults(searchResults);
    
    // Calculate categories
    const categoryCount: {[key: string]: number} = {};
    searchResults.forEach(result => {
      categoryCount[result.category] = (categoryCount[result.category] || 0) + 1;
    });
    setCategories(categoryCount);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`, undefined, { shallow: true });
      performSearch(searchQuery);
    }
  };

  return (
    <Layout title={`Search Results for "${q || ''}"`}>
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search the site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-elevated border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200"
            >
              Search
            </button>
          </div>
        </form>

        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              {results.length > 0 
                ? `${results.length} results for "${q}"`
                : `No results found for "${q}"`
              }
            </h1>
            {results.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {Object.entries(categories).map(([category, count]) => (
                  <span key={category} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {category} ({count})
                  </span>
                ))}
              </div>
            )}
          </div>

          {results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result, index) => (
                <Link href={result.path} key={index} className="block">
                  <div className="p-6 bg-dark-elevated rounded-lg hover:bg-opacity-80 transition-all duration-200 border border-gray-800 hover:border-primary/40">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{result.title}</h3>
                        <p className="text-gray-400 mb-2">{result.content}</p>
                        <span className="text-sm text-primary">{result.path}</span>
                      </div>
                      <FaArrowRight className="text-primary mt-2 opacity-70" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-6">
                <p>We couldn't find any results matching your search.</p>
                <p className="mt-2">Try using different keywords or browsing our categories.</p>
              </div>
              <Link href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200">
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search; 