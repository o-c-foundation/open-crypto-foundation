import React from 'react'

export default function Disclaimer() {
  return (
    <section className="py-12 bg-red-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">Our Stance Against Scams</h2>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <p className="mb-4 text-lg">
              <strong>Disclaimer:</strong> The Open Crypto Foundation is firmly against all types of DeFi scams and fraudulent activities. 
              Our mission is to create a safer, more transparent ecosystem for everyone.
            </p>
            
            <p className="mb-4">
              We recognize that we cannot prevent all malicious activity in the decentralized space. However, by providing education, tools, 
              and resources for all participants - including those who might otherwise turn to harmful practices - we aim to gradually 
              transform the ecosystem into one where harmful activities are both less common and less damaging.
            </p>
            
            <div className="mt-6">
              <h3 className="mb-3 text-xl font-semibold">Major Scam Types We Oppose:</h3>
              <ul className="ml-6 space-y-2 list-disc">
                <li><strong>Rug Pulls:</strong> Developers abandoning projects after raising funds</li>
                <li><strong>Pump and Dumps:</strong> Artificially inflating token prices before selling</li>
                <li><strong>Phishing Attacks:</strong> Deceiving users into revealing private keys or approving malicious transactions</li>
                <li><strong>Honeypots:</strong> Contracts designed to prevent token selling</li>
                <li><strong>Fake ICOs/IDOs:</strong> Fraudulent token launches with no real product</li>
                <li><strong>Flash Loan Attacks:</strong> Manipulating prices using uncollateralized loans</li>
                <li><strong>Social Engineering:</strong> Manipulating individuals into transferring funds</li>
              </ul>
            </div>
            
            <p className="mt-6 italic text-gray-600">
              Our approach is pragmatic: By educating all participants and promoting ethical alternatives, we aim to foster a DeFi 
              ecosystem where safety and transparency prevail, reducing hesitancy around adopting cryptocurrency technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 