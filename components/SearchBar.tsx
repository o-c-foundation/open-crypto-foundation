import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

export interface SearchBarProps {
  className?: string;
  collapsed?: boolean;
  onToggle?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = '', 
  collapsed = false,
  onToggle
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      if (onToggle && !collapsed) {
        onToggle();
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSearch} className="flex items-center w-full">
        {!collapsed && (
          <div className="relative flex-1 w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search the entire site..."
              className="bg-dark-card border border-gray-700 rounded-lg pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent w-full transition-all duration-300 ease-in-out"
              autoFocus
            />
            <button
              type="button"
              onClick={onToggle}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
              aria-label="Close search"
            >
              <FaTimes />
            </button>
          </div>
        )}
        
        {collapsed && (
          <button 
            type="button" 
            onClick={onToggle}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label="Open search"
          >
            <FaSearch className="text-xl" />
          </button>
        )}
      </form>
      
      {!collapsed && (
        <div className="mt-3 text-xs text-gray-400">
          <span>Search our knowledge base, guides, tools, and more</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 