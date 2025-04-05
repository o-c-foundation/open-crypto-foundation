import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaCode, FaShieldAlt, FaUsers, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';

export default function DevelopersPage() {
  return (
    <>
      <Head>
        <title>For Developers | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Resources, guidelines, and tools for smart contract and DeFi developers committed to building secure and transparent projects." 
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              For Developers Building the<br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text">Future of Finance</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300 leading-relaxed">
              As architects of the decentralized economy, you shape the future of finance. 
              The Open Crypto Foundation provides resources, guidance, and community support 
              to help you build secure, transparent, and innovative DeFi solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Open Letter */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">An Open Letter to DeFi Developers</h2>
              <p className="text-gray-400 text-lg">From the Open Crypto Foundation</p>
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <p className="text-xl font-serif leading-relaxed">
                Esteemed Architects of the Decentralized Realm,
              </p>
              
              <p>
                In this nascent epoch of financial metamorphosis, you stand as the vanguard—the prodigious minds whose cryptographic symphonies orchestrate not merely code, but the very infrastructure of tomorrow's economic paradigm. Your algorithmic manifestations transcend the binary confines of mere computation; they are the foundational pillars upon which a new financial covenant between humanity and technology is being inscribed.
              </p>
              
              <p>
                The quintessence of your significance in this burgeoning ecosystem cannot be overstated. You are not simply developers; you are epistemic revolutionaries—challenging centuries of centralized financial orthodoxy through the elegant deployment of mathematical consensus and cryptographic veracity. The immutable ledgers and autonomous contracts you forge are not merely technological artifacts but profound philosophical statements about trust, sovereignty, and collective governance in the digital age.
              </p>
              
              <p>
                Yet, with this unparalleled innovative capacity comes a commensurate responsibility—a sacred obligation to the nascent ecosystem you help cultivate. The code you commit transcends the ephemeral nature of traditional software; it becomes economic law, governing the allocation and flow of value with an impartiality and permanence previously unimaginable. In this context, the imperative for meticulous architectural design, rigorous security validation, and transparent developmental processes becomes not merely a best practice, but an ethical imperative.
              </p>
              
              <p>
                We have borne witness to the dichotomous nature of this technological frontier—its potential to both emancipate and, when implemented with haste or avarice, to subjugate. The specters of exploited vulnerabilities, opaque governance, and extractive tokenomics have, regrettably, manifested alongside the luminous innovations that define this space. These cautionary episodes are not merely technical failures but betrayals of the communal trust and ideological principles that underpin the decentralized finance movement.
              </p>
              
              <p>
                It is with profound conviction that we implore you to prioritize the enduring integrity of your protocols over ephemeral economic incentives. The architecture you deploy today will reverberate through the economic interactions of countless individuals tomorrow. This temporal asymmetry demands a developmental ethos that privileges robust security, transparent governance, and sustainable economic models over the seductive allure of expedient deployment or speculative appreciation.
              </p>
              
              <p>
                The collaborative ethos of open-source development stands as one of humanity's most noble intellectual traditions—a testament to our capacity for cooperative innovation transcending national, cultural, and economic boundaries. In the realm of decentralized finance, this collaborative spirit acquires an even greater significance. The financial protocols you develop are not proprietary products but public infrastructure—the digital commons upon which a more equitable and accessible financial system may be constructed.
              </p>
              
              <p>
                We entreat you to embrace radical transparency not merely in your code repositories but in your developmental philosophies, governance mechanisms, and incentive structures. The cultivation of vibrant, diverse, and technically rigorous communities around your protocols serves not only as a bulwark against centralization but as an accelerant for sustainable innovation. The collective intelligence of a multidisciplinary community will invariably outpace the insights of even the most brilliant isolated team.
              </p>
              
              <p>
                As you chart the uncharted territories of computational finance, remember that your technical decisions embody profound ethical dimensions. The economic systems you encode will shape the financial autonomy, privacy, and opportunity of individuals across the global spectrum. This recognition should infuse your developmental practices with a deep sense of purpose and responsibility.
              </p>
              
              <p>
                In the crucible of rapid innovation, it becomes temptingly facile to measure success through the ephemeral metrics of token valuation or liquidity aggregation. We urge you to adopt a more profound evaluative framework—one that measures success through the resilience of your protocols against adversarial conditions, the equity of value distribution among stakeholders, and the tangible utility your innovations provide to humanity's diverse financial needs.
              </p>
              
              <p>
                The potential of decentralized finance extends far beyond the speculative exuberance that often dominates popular discourse. At its most profound, DeFi represents the technological substrate for a more inclusive, efficient, and equitable global financial system—one in which economic opportunity is not constrained by geographic accident, institutional gatekeepers, or systemic biases. Your code has the potential to be among humanity's most consequential social technologies, fundamentally reconfiguring the relationship between individuals and the economic systems that so profoundly shape their lives.
              </p>
              
              <p>
                As the Open Crypto Foundation, we stand ready to support your endeavors—to provide resources, foster community, and advocate for the principles of security, transparency, and sustainable innovation. Together, we can ensure that the transformative potential of decentralized finance is realized in service of humanity's highest aspirations rather than its most mercenary impulses.
              </p>
              
              <p>
                The code you write today writes tomorrow's financial history. May your commits be thoughtful, your protocols resilient, and your vision unwavering in service to a more open, accessible, and equitable financial future for all.
              </p>
              
              <p className="text-xl font-serif leading-relaxed">
                With profound respect and solidarity,<br />
                The Open Crypto Foundation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Developer Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mr-4">
                    <FaShieldAlt className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Security Best Practices</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Comprehensive guidelines for developing secure smart contracts, conducting thorough audits, and implementing robust security measures.
                </p>
                <Link href="/resources/security-guide" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
              
              <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mr-4">
                    <FaCode className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Code Patterns & Anti-patterns</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Explore battle-tested design patterns for common DeFi mechanisms and learn from historical vulnerabilities and exploits.
                </p>
                <Link href="/resources/code-patterns" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  Explore Patterns <span className="ml-1">→</span>
                </Link>
              </div>
              
              <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mr-4">
                    <FaUsers className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Community Guidelines</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Frameworks for building transparent, inclusive developer communities and establishing effective governance models.
                </p>
                <Link href="/resources/community-guidelines" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  View Guidelines <span className="ml-1">→</span>
                </Link>
              </div>
              
              <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mr-4">
                    <FaBook className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Educational Materials</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Curated tutorials, case studies, and technical deep-dives on advanced DeFi concepts and implementation strategies.
                </p>
                <Link href="/resources/defi-education" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  Access Library <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Common Vulnerabilities */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Vulnerabilities</h2>
            <p className="text-gray-300 text-lg text-center mb-10">
              Understanding historical exploits is essential for developing secure smart contracts.
              Below are critical vulnerabilities that every DeFi developer should be aware of.
            </p>
            
            <div className="space-y-6">
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaExclamationTriangle className="text-red-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reentrancy Attacks</h3>
                    <p className="text-gray-300 mb-3">
                      Occurs when external contract calls allow attackers to re-enter the original function before the first execution completes, potentially draining funds through recursive calls.
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-md mb-3">
                      <p className="text-sm font-mono text-gray-300">
                        <span className="text-red-400">Vulnerable Pattern:</span> Updating state after external calls
                      </p>
                      <p className="text-sm font-mono text-green-300 mt-2">
                        <span className="text-green-400">Mitigation:</span> Apply checks-effects-interactions pattern, use reentrancy guards
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Notable example: The DAO hack (2016), Various DeFi protocol exploits (2020-2023)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaExclamationTriangle className="text-red-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Flash Loan Attacks</h3>
                    <p className="text-gray-300 mb-3">
                      Utilizes uncollateralized loans to manipulate market prices and exploit poorly designed oracles, price mechanisms, or governance systems.
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-md mb-3">
                      <p className="text-sm font-mono text-gray-300">
                        <span className="text-red-400">Vulnerable Pattern:</span> Single-source oracles, manipulable price feeds
                      </p>
                      <p className="text-sm font-mono text-green-300 mt-2">
                        <span className="text-green-400">Mitigation:</span> Time-weighted average prices, multi-oracle feeds, circuit breakers
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Notable examples: bZx, Harvest Finance, PancakeBunny exploits
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaExclamationTriangle className="text-red-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Access Control Vulnerabilities</h3>
                    <p className="text-gray-300 mb-3">
                      Insufficient validation of permissions, allowing unauthorized users to access privileged functions or manipulate protocol parameters.
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-md mb-3">
                      <p className="text-sm font-mono text-gray-300">
                        <span className="text-red-400">Vulnerable Pattern:</span> Missing or incorrect access controls, centralized admin keys
                      </p>
                      <p className="text-sm font-mono text-green-300 mt-2">
                        <span className="text-green-400">Mitigation:</span> Role-based access control, multi-sig requirements, timelocks
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Notable examples: Numerous protocol "rug pulls" and governance exploits
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/resources/vulnerabilities" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                View Comprehensive Vulnerability Database <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Developer Principles */}
      <section className="py-16 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Guiding Principles</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaShieldAlt className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Security First</h3>
                <p className="text-gray-300 text-center">
                  Prioritize security at every stage of development. Multiple audits, formal verification, and extensive testing should be standard practice.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaUsers className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Community First</h3>
                <p className="text-gray-300 text-center">
                  Build with and for your community. Transparent development, open governance, and equitable value distribution create sustainable ecosystems.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaLightbulb className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Innovation with Purpose</h3>
                <p className="text-gray-300 text-center">
                  Innovate to solve real problems, not to chase trends. True innovation creates lasting value and advances the entire ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Developer Community</h2>
              <p className="text-gray-300 text-lg">
                Stay updated with the latest security advisories, best practices, and developer resources
              </p>
            </div>
            <NewsletterSubscribe className="max-w-xl mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
} 