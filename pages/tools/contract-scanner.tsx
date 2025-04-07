import React from 'react'
import Head from 'next/head'
import ContractScanner from '../../components/ContractScanner'

export default function ContractScannerPage() {
  return (
    <>
      <Head>
        <title>Contract Scanner | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Scan smart contracts for vulnerabilities, backdoors, and suspicious code patterns with our contract scanner tool." 
        />
      </Head>
      
      <section className="pt-10 pb-12 bg-dark text-white border-b border-dark-light/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold">Smart Contract Scanner</h1>
            <p className="text-xl text-gray-300">
              Analyze contract code for potential vulnerabilities and security risks
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-dark">
        <div className="container px-4 mx-auto">
          <ContractScanner />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-dark-card rounded-lg p-6 border border-dark-light/30">
              <h2 className="text-xl font-bold mb-4 text-white">How This Tool Works</h2>
              <p className="text-gray-300 mb-4">
                Our Contract Scanner analyzes smart contract code for common vulnerabilities, backdoors, and 
                suspicious patterns that might indicate malicious intent. The scanner looks for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                <li>Ownership control and privileged functions</li>
                <li>Fee manipulation capabilities</li>
                <li>Backdoor functions and hidden minting abilities</li>
                <li>Honeypot characteristics that prevent selling</li>
                <li>Suspicious code patterns associated with common scams</li>
              </ul>
              
              <div className="bg-yellow-600/10 p-4 rounded-lg border-l-4 border-yellow-600">
                <h3 className="font-bold text-yellow-400 mb-2">Limitations</h3>
                <p className="text-gray-300">
                  This tool provides a basic safety analysis but cannot guarantee that a contract is 100% safe.
                  Always do additional research before interacting with any smart contract.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 