import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaDownload, FaClipboard, FaCheckCircle, FaPaperPlane, FaLock, FaSearch, FaSyncAlt, FaExternalLinkAlt } from 'react-icons/fa';

// Interface for claim data
interface Claim {
  timestamp: string;
  walletAddress: string;
  allocation: number;
  status: 'pending' | 'completed';
}

export default function ClaimsAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [claims, setClaims] = useState<Claim[]>([]);
  const [filteredClaims, setFilteredClaims] = useState<Claim[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Simple hardcoded admin password (use a proper auth system in production)
  const adminPassword = 'opencrypto2025';
  
  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);
  
  useEffect(() => {
    if (isAuthenticated) {
      fetchClaims();
      
      // Set up an interval to refresh claims data every 30 seconds
      const refreshInterval = setInterval(() => {
        fetchClaims();
      }, 30000);
      
      // Clean up on unmount
      return () => {
        clearInterval(refreshInterval);
      };
    }
  }, [isAuthenticated]);
  
  // Filter claims when search query changes
  useEffect(() => {
    if (claims.length === 0) return;
    
    if (!searchQuery.trim()) {
      setFilteredClaims(claims);
      return;
    }
    
    const filtered = claims.filter(claim => 
      claim.walletAddress.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredClaims(filtered);
  }, [searchQuery, claims]);
  
  const fetchClaims = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      // Fetch claims from the server API
      const response = await fetch('/api/claims');
      
      if (!response.ok) {
        throw new Error('Failed to fetch claims');
      }
      
      const data = await response.json();
      setClaims(data);
      setFilteredClaims(data);
    } catch (err) {
      console.error('Error fetching claims:', err);
      setError('Failed to load claims. Please refresh and try again.');
      // Keep previous claims if there was an error
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === adminPassword) {
      setIsAuthenticated(true);
      // Store authentication status in session storage
      sessionStorage.setItem('adminAuthenticated', 'true');
      fetchClaims();
    } else {
      alert('Incorrect password');
    }
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
  };
  
  const handleStatusChange = async (claim: Claim, status: 'pending' | 'completed') => {
    try {
      // Update claim status on the server
      const response = await fetch(`/api/claims/${claim.timestamp}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update claim status');
      }
      
      // If successful, update the UI
      fetchClaims();
    } catch (err) {
      console.error('Error updating claim status:', err);
      setError('Failed to update claim status. Please try again.');
    }
  };
  
  const exportToCSV = () => {
    const headers = ['Timestamp', 'Wallet Address', 'Allocation', 'Status'];
    const data = [
      headers.join(','),
      ...claims.map(claim => [
        new Date(claim.timestamp).toLocaleString(),
        `"${claim.walletAddress}"`,
        claim.allocation,
        claim.status
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `ocf-claims-export-${new Date().toISOString().split('T')[0]}.csv`);
    a.click();
  };
  
  const copyToClipboard = () => {
    const data = claims.map(claim => 
      `${new Date(claim.timestamp).toLocaleString()} | ${claim.walletAddress} | ${claim.allocation.toLocaleString()} OCF | ${claim.status}`
    ).join('\n');
    
    navigator.clipboard.writeText(data)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        setCopySuccess('Failed to copy');
      });
  };
  
  const getTotalAllocation = () => {
    return claims.reduce((total, claim) => total + claim.allocation, 0);
  };
  
  const refreshClaims = () => {
    fetchClaims();
  };
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <Head>
          <title>Admin Login - Open Crypto Foundation</title>
        </Head>
        <div className="bg-dark-card p-8 rounded-lg max-w-md w-full border border-dark-light/30">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <FaLock className="text-primary" size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-light-muted mb-2">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-dark rounded-lg border border-dark-light/50 text-white mb-4 focus:outline-none focus:border-primary/50"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
            >
              Login to Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Claims Admin - Open Crypto Foundation</title>
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Token Claims Log</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-dark-light hover:bg-dark-light/80 text-white rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-light/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Total Claims</h3>
              <p className="text-3xl font-bold text-primary">{claims.length}</p>
            </div>
            <div className="bg-dark-light/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Total Allocation</h3>
              <p className="text-3xl font-bold text-primary">{getTotalAllocation().toLocaleString()} OCF</p>
            </div>
            <div className="bg-dark-light/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Pending Claims</h3>
              <p className="text-3xl font-bold text-primary">
                {claims.filter(claim => claim.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4 mb-6 text-red-400">
            <p>{error}</p>
          </div>
        )}
        
        <div className="bg-dark-card rounded-lg border border-dark-light/30 mb-8">
          <div className="p-6 border-b border-dark-light/30 flex flex-wrap justify-between items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by wallet address..."
                  className="w-full pl-10 pr-4 py-2 bg-dark rounded-lg border border-dark-light/50 text-white focus:outline-none focus:border-primary/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-muted" />
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={refreshClaims}
                className={`px-4 py-2 bg-dark-light hover:bg-dark-light/80 text-white rounded-lg transition-colors flex items-center ${isLoading ? 'opacity-50' : ''}`}
                title="Refresh claims list"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    <FaSyncAlt className="mr-2" /> Refresh
                  </>
                )}
              </button>
              <button 
                onClick={exportToCSV}
                className="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors flex items-center"
                disabled={isLoading}
              >
                <FaDownload className="mr-2" /> Export CSV
              </button>
              <button 
                onClick={copyToClipboard}
                className="px-4 py-2 bg-dark-light hover:bg-dark-light/80 text-white rounded-lg transition-colors flex items-center"
                disabled={isLoading}
              >
                <FaClipboard className="mr-2" /> 
                {copySuccess ? copySuccess : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-light/30">
                  <th className="px-6 py-4 text-left text-light-muted">Timestamp</th>
                  <th className="px-6 py-4 text-left text-light-muted">Wallet Address</th>
                  <th className="px-6 py-4 text-left text-light-muted">Allocation</th>
                  <th className="px-6 py-4 text-left text-light-muted">Status</th>
                  <th className="px-6 py-4 text-left text-light-muted">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClaims.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-light-muted">
                      {claims.length === 0 ? 
                        'No claims have been made yet.' : 
                        'No claims match your search criteria.'}
                    </td>
                  </tr>
                ) : (
                  filteredClaims.map((claim, index) => {
                    const originalIndex = claims.findIndex(c => 
                      c.walletAddress === claim.walletAddress && c.timestamp === claim.timestamp
                    );
                    
                    return (
                      <tr key={`${claim.walletAddress}-${claim.timestamp}`} className="border-b border-dark-light/10">
                        <td className="px-6 py-4 text-white">
                          {new Date(claim.timestamp).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-white font-mono text-sm overflow-hidden text-ellipsis">
                          {claim.walletAddress}
                        </td>
                        <td className="px-6 py-4 text-white">
                          {claim.allocation.toLocaleString()} OCF
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            claim.status === 'completed' 
                              ? 'bg-green-900/20 text-green-400' 
                              : 'bg-yellow-900/20 text-yellow-400'
                          }`}>
                            {claim.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            {claim.status === 'pending' ? (
                              <button
                                onClick={() => handleStatusChange(claim, 'completed')}
                                className="px-3 py-1 bg-green-900/20 hover:bg-green-900/30 text-green-400 rounded-md transition-colors flex items-center text-sm"
                              >
                                <FaCheckCircle className="mr-1" /> Mark Completed
                              </button>
                            ) : (
                              <button
                                onClick={() => handleStatusChange(claim, 'pending')}
                                className="px-3 py-1 bg-yellow-900/20 hover:bg-yellow-900/30 text-yellow-400 rounded-md transition-colors flex items-center text-sm"
                              >
                                <FaPaperPlane className="mr-1" /> Mark Pending
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-light-muted text-sm">
          <h3 className="text-white text-lg mb-2">Admin Information</h3>
          <p className="mb-2">This admin panel is now deprecated. Please use the Google Forms response spreadsheet to view claim submissions.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>All claims are now stored directly in Google Sheets for reliability.</li>
            <li>Any claims submitted from any device will be visible in your Google Sheet.</li>
            <li>You can mark claims as completed in Google Sheets by updating the "Status" column.</li>
            <li>Google Sheets allows you to export the data as CSV, Excel, or other formats.</li>
          </ul>
          <a 
            href="https://docs.google.com/spreadsheets/create" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            <FaExternalLinkAlt className="mr-2" size={14} />
            Open Google Sheets
          </a>
        </div>
        
        <div className="bg-yellow-900/20 border border-yellow-900/30 rounded-lg p-6 text-light-muted text-sm mt-6">
          <h3 className="text-yellow-400 text-lg mb-2">⚠️ Important Update</h3>
          <p className="mb-2">
            <strong>We've switched to using Google Forms & Sheets for claim submissions.</strong>
          </p>
          <p className="mb-4">
            For maximum reliability, we now use Google Forms to collect claim submissions and Google Sheets to store and manage them.
            This admin panel is showing older submissions only and will be fully replaced soon.
          </p>
          <p className="font-medium">
            Please check your Google Form responses in Google Sheets to see all claim submissions.
            To set up a Google Form for claims:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Create a new Google Form with fields for wallet address, allocation amount, and timestamp</li>
            <li>Get the form link and update it in the claim page</li>
            <li>View responses in the connected Google Sheet</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 