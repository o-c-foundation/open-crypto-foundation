import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaFileContract, FaBalanceScale } from 'react-icons/fa'

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Our terms of service outline the rules, guidelines, and legal terms that govern your use of Open Crypto Foundation services." 
        />
      </Head>
      
      <section className="pt-10 pb-16 bg-gradient-to-br from-black to-gray-900 text-white border-b border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FaBalanceScale className="text-4xl mr-3 text-purple-400" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl text-gray-300">
              The rules and guidelines for using our services
            </p>
            <p className="text-gray-400 mt-4">
              Last Updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none text-gray-300">
                  <h2 className="text-2xl font-bold mb-6 text-white">Introduction</h2>
                  <p>
                    Welcome to the Open Crypto Foundation. By accessing or using our website, you agree to be bound 
                    by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access our services.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">1. Use of Our Services</h2>
                  <p>
                    Our website and tools are provided for educational and informational purposes only. The 
                    information we provide is not financial advice and should not be treated as such.
                  </p>
                  <p>
                    You are permitted to use our services for personal, non-commercial purposes. You must not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Use our services in any way that causes, or may cause, damage to the services or impairment of their availability</li>
                    <li>Use our services in any way that is unlawful, illegal, fraudulent, or harmful</li>
                    <li>Use our services for any purpose related to marketing without our express written consent</li>
                    <li>Scrape, copy, or otherwise collect data from our services using automated means</li>
                    <li>Redistribute content from our services without prior written consent</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">2. Information Accuracy</h2>
                  <p>
                    While we strive to provide accurate and up-to-date information, we make no representations or 
                    warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                    suitability, or availability of the information, products, services, or related graphics 
                    contained on our website.
                  </p>
                  <p>
                    Any reliance you place on such information is therefore strictly at your own risk. You should 
                    always verify any information before acting upon it.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">3. Tools and Analysis</h2>
                  <p>
                    The tools, scanners, and risk analysis features provided by the Open Crypto Foundation are 
                    designed to offer general guidance only. These tools:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>May not identify all risks or vulnerabilities</li>
                    <li>Should not be your sole basis for investment decisions</li>
                    <li>Are based on algorithms and data that may have limitations or errors</li>
                    <li>Do not constitute financial or investment advice</li>
                  </ul>
                  <p>
                    Always conduct your own research and consider consulting with qualified professionals before 
                    making any financial decisions or investments.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">4. External Links</h2>
                  <p>
                    Our website may contain links to external websites that are not provided or maintained by us. 
                    We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on 
                    these external websites.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">5. Intellectual Property</h2>
                  <p>
                    The content, design, layout, look, appearance, and graphics on our website are owned by or 
                    licensed to the Open Crypto Foundation and are protected by copyright and other intellectual 
                    property laws.
                  </p>
                  <p>
                    You may view, download for caching purposes only, and print pages from the website for your 
                    personal use, subject to the restrictions below.
                  </p>
                  <p>You must not:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Republish material from our website (including republication on another website)</li>
                    <li>Sell, rent, or sub-license material from our website</li>
                    <li>Reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose</li>
                    <li>Edit or otherwise modify any material on the website</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">6. Limitation of Liability</h2>
                  <p>
                    In no event shall the Open Crypto Foundation, its officers, directors, employees, or agents 
                    be liable for any indirect, punitive, incidental, special, or consequential damages arising 
                    out of, or in any way connected with, your use of or inability to use our services.
                  </p>
                  <p>
                    This limitation applies whether based on contract, tort, negligence, strict liability, or 
                    otherwise, even if the Open Crypto Foundation has been advised of the possibility of any such damages.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">7. Modifications to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. We will notify users of any changes 
                    by updating the "Last Updated" date of these Terms. Your continued use of our services following 
                    the posting of changes constitutes your acceptance of those changes.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">8. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                    in which the Open Crypto Foundation operates, without regard to its conflict of law provisions.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">9. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at{' '}
                    <a href="mailto:legal@opencryptofoundation.org" className="text-purple-400 hover:text-purple-300">
                      legal@opencryptofoundation.org
                    </a>.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-center text-gray-400">
                    <FaFileContract className="mr-2 text-purple-400" />
                    <span>
                      Please also review our{' '}
                      <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                        Privacy Policy
                      </Link>.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 