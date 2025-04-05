import React, { useState } from 'react';
import { FaSearch, FaChartPie, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';

export default function TokenAnalyzer() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    name: string;
    symbol: string;
    totalSupply: string;
    holders: number;
    distribution: {
      label: string;
      percentage: number;
    }[];
    riskFactors: string[];
    summary: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenAddress) return;
    
    setIsAnalyzing(true);
    
    // Simulate token analysis
    setTimeout(() => {
      setResults({
        name: "Example Token",
        symbol: "EXT",
        totalSupply: "1,000,000,000",
        holders: 523,
        distribution: [
          { label: "Team wallet", percentage: 30 },
          { label: "Marketing", percentage: 15 },
          { label: "Liquidity", percentage: 25 },
          { label: "Top 10 holders", percentage: 18 },
          { label: "Other holders", percentage: 12 }
        ],
        riskFactors: [
          "High concentration of tokens in team wallet",
          "Low liquidity compared to total supply",
          "Project launched less than 3 months ago"
        ],
        summary: "This token shows high centralization with 30% owned by team wallet. Trading volume is relatively low. Consider this a high-risk investment."
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Token Analysis Tool</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            placeholder="Enter token address (0x...)"
            className="flex-grow p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md flex items-center justify-center transition-colors"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </>
            ) : (
              <>
                <FaSearch className="mr-2" />
                Analyze Token
              </>
            )}
          </button>
        </div>
      </form>
      
      {results && (
        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Token Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <span className="ml-2 text-white font-medium">{results.name}</span>
                </div>
                <div>
                  <span className="text-gray-400">Symbol:</span>
                  <span className="ml-2 text-white font-medium">{results.symbol}</span>
                </div>
                <div>
                  <span className="text-gray-400">Total Supply:</span>
                  <span className="ml-2 text-white font-medium">{results.totalSupply}</span>
                </div>
                <div>
                  <span className="text-gray-400">Holders:</span>
                  <span className="ml-2 text-white font-medium">{results.holders}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                <FaChartPie className="mr-2" /> Token Distribution
              </h3>
              <div className="space-y-2">
                {results.distribution.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-full bg-gray-600 rounded-full h-4 mr-2">
                      <div 
                        className="h-4 rounded-full" 
                        style={{ 
                          width: `${item.percentage}%`,
                          backgroundColor: 
                            i === 0 ? '#ff7675' : 
                            i === 1 ? '#74b9ff' : 
                            i === 2 ? '#55efc4' : 
                            i === 3 ? '#a29bfe' : 
                            '#ffeaa7'
                        }}
                      />
                    </div>
                    <div className="w-24 flex justify-between">
                      <span className="text-white">{item.label}</span>
                      <span className="text-white font-medium">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center text-white">
              <FaExclamationTriangle className="mr-2 text-yellow-400" /> Risk Factors
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-white">
              {results.riskFactors.map((risk, i) => (
                <li key={i}>{risk}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-4 bg-gray-800 rounded border border-gray-600">
            <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
              <FaShieldAlt className="mr-2 text-blue-400" /> Safety Summary
            </h3>
            <p className="text-white">{results.summary}</p>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-400">
        <p>Disclaimer: This analysis is for informational purposes only and should not be considered financial advice.</p>
      </div>
    </div>
  );
} 