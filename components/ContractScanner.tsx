import React, { useState } from "react";
import { FaSearch, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

export default function ContractScanner() {
  const [contractAddress, setContractAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    score: number;
    warnings: string[];
    recommendations: string[];
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contractAddress) return;
    
    setIsAnalyzing(true);
    
    // Simulate contract analysis
    setTimeout(() => {
      setResults({
        score: 65,
        warnings: [
          "Contract code is not verified on Etherscan",
          "Owner has privileged functions that can modify token behavior",
          "Contains potential backdoor functions"
        ],
        recommendations: [
          "Proceed with caution - contract has privileged admin functions",
          "Consider limiting your exposure to this contract",
          "Check if the team is doxxed and has a proven track record"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Smart Contract Safety Scanner</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            placeholder="Enter contract address (0x...)"
            className="flex-grow p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
          />
          <button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md flex items-center justify-center transition-colors"
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
                Scan Contract
              </>
            )}
          </button>
        </div>
      </form>
      
      {results && (
        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Analysis Results</h3>
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-2 text-white">Safety Score:</span>
              <span className={`text-lg font-bold ${
                results.score < 50 ? "text-red-500" : 
                results.score < 80 ? "text-yellow-400" : 
                "text-green-400"
              }`}>
                {results.score}/100
              </span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="flex items-center text-red-400 font-semibold mb-2">
              <FaExclamationTriangle className="mr-2" /> Warnings
            </h4>
            <ul className="list-disc pl-8 space-y-2 text-white">
              {results.warnings.map((warning, i) => (
                <li key={i}>{warning}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="flex items-center text-green-400 font-semibold mb-2">
              <FaCheckCircle className="mr-2" /> Recommendations
            </h4>
            <ul className="list-disc pl-8 space-y-2 text-white">
              {results.recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-400">
        <p>Note: This tool provides basic analysis only. Always do your own research before interacting with any smart contract.</p>
      </div>
    </div>
  );
} 