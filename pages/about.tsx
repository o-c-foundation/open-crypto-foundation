import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaChartLine, FaShieldAlt, FaHandshake, FaHistory, FaMedal, FaLightbulb, FaGlobe, FaRocket } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import TabLayout from '../components/TabLayout'
import ScrollToTop from '../components/ScrollToTop'

export default function AboutPage() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('mission')
  
  // Tabs configuration
  const aboutSections = [
    {
      id: 'mission',
      name: 'Our Mission',
      icon: <FaShieldAlt className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-light-muted">
            The Open Crypto Foundation was established just three weeks ago with the mission to create a safer, more transparent 
            cryptocurrency ecosystem where users can participate with confidence. We believe the promise of decentralized finance 
            can only be realized when users have the tools and knowledge to protect themselves from scams and exploitative projects.
          </p>
          <p className="text-light-muted">
            Though we're new, our vision is clear: to provide accessible education, reliable tools, and independent verification 
            services that empower both newcomers and experienced users to navigate the complexities of cryptocurrency with 
            security and confidence.
          </p>
          <div className="bg-dark-light/30 p-4 rounded-lg border border-dark-light/30">
            <h4 className="text-white font-medium mb-2">Core Objectives</h4>
            <ul className="list-disc pl-5 text-light-muted space-y-1">
              <li>Develop and maintain open-source tools for crypto safety verification</li>
              <li>Provide comprehensive, unbiased educational resources</li>
              <li>Establish transparent, rigorous auditing services for crypto projects</li>
              <li>Support victims of cryptocurrency scams and exploits</li>
              <li>Advocate for industry standards that prioritize user protection</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'purpose',
      name: 'Our Purpose',
      icon: <FaLightbulb className="text-blue-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Despite being just three weeks old, the Open Crypto Foundation aims to serve as a nonprofit organization 
            dedicated to advancing the security, transparency, and accessibility of blockchain technology and cryptocurrency 
            ecosystems. We are establishing ourselves as an independent entity focused solely on the betterment of the space 
            through education, research, and tooling.
          </p>
          <p className="text-gray-300">
            As a newly formed foundation, we're committed to principles of neutrality and objectivity, ensuring that our work 
            will benefit the entire ecosystem rather than any specific project or platform. Our organizational structure is 
            designed to maintain independence while collaborating with various stakeholders in the blockchain space.
          </p>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Key Focus Areas</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Cross-chain security research and implementation</li>
              <li>Educational initiatives for users of all experience levels</li>
              <li>Development of open-source security tools and frameworks</li>
              <li>Standardization of security practices across the industry</li>
              <li>Support for innovative projects that enhance ecosystem safety</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'beginnings',
      name: 'Our Beginnings',
      icon: <FaRocket className="text-purple-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation was founded just three weeks ago in response to the growing prevalence of scams and 
            exploitative projects in the cryptocurrency space. Our organization emerged as a collective effort by concerned 
            community members to address these challenges and promote safety and transparency in the blockchain ecosystem.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Why Now?</h4>
            <p className="text-gray-300">
              The crypto space is at a critical juncture. With growing mainstream adoption and increasing technical complexity, 
              the need for independent safety standards and education has never been more urgent. Our foundation was established 
              to meet this immediate need and create lasting infrastructure for a safer ecosystem.
            </p>
          </div>
          
          <div className="space-y-6 mt-6">
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">Now</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Formation Phase</h4>
                <p className="text-gray-300">
                  Currently building our core infrastructure, establishing partnerships, and developing our initial 
                  educational resources and security tools.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2025</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Initial Goals (3-6 months)</h4>
                <p className="text-gray-300">
                  Launch our first suite of open-source security tools, including Contract Scanner and Risk Calculator. 
                  Establish educational resources and begin development of our scam database.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2025</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Expansion Plans (6-12 months)</h4>
                <p className="text-gray-300">
                  Introduce professional audit services and victim recovery fund. Expand educational resources 
                  and establish partnerships with major blockchain platforms and educational institutions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2026</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Long-term Vision</h4>
                <p className="text-gray-300">
                  Develop advanced AI-powered security tools, expand global educational initiatives, and 
                  advocate for industry standards that protect users worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'partners',
      name: 'Partnerships',
      icon: <FaHandshake className="text-green-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Though we're only three weeks old, the Open Crypto Foundation is actively seeking collaborations with organizations 
            that share our commitment to creating a safer cryptocurrency ecosystem. We're currently in early discussions with 
            potential partners across blockchain platforms, educational institutions, security firms, and consumer protection 
            organizations.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Partnership Goals</h4>
            <p className="text-gray-300">
              As a newly established foundation, we're looking to form strategic partnerships that will help us achieve our 
              mission more effectively. We believe that collaboration across the ecosystem is essential to addressing the 
              complex challenges of cryptocurrency security and education.
            </p>
            <p className="text-gray-300 mt-3">
              If your organization is interested in partnering with us, please reach out through our contact page. We're 
              particularly interested in collaborations focused on education, security research, and community outreach.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium border-b border-gray-600 pb-2 mb-3">Target Collaboration Areas</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
                <div>
                  <h5 className="text-white text-sm">Blockchain Networks</h5>
                  <p className="text-gray-400 text-xs">Collaborative research on cross-chain security implementations</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>
                </div>
                <div>
                  <h5 className="text-white text-sm">Security Firms</h5>
                  <p className="text-gray-400 text-xs">Joint development of audit standards and security tooling</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>
                <div>
                  <h5 className="text-white text-sm">Academic Institutions</h5>
                  <p className="text-gray-400 text-xs">Research collaborations and educational resource development</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'values',
      name: 'Our Values',
      icon: <FaShieldAlt className="text-red-400" size={24} />,
      content: (
        <div className="space-y-5">
          <p className="text-gray-300">
            Despite being just three weeks old, the Open Crypto Foundation was established with a clear set of values 
            that will guide our growth and development. These principles ensure we remain focused on our mission and 
            accountable to the communities we aim to serve.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Transparency</h4>
            <p className="text-gray-300">
              We commit to operating with complete transparency, from our funding sources to our audit methodologies. 
              All our tools will be open-source, our evaluations clearly documented, and our processes subject to 
              public review and feedback.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Independence</h4>
            <p className="text-gray-300">
              Our assessments and recommendations will remain independent from commercial interests. We will not accept payment 
              in exchange for favorable reviews, and our governance structure is designed to ensure no single entity can 
              unduly influence our work.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Accessibility</h4>
            <p className="text-gray-300">
              We are committed to making cryptocurrency safety accessible to everyone, regardless of technical background. 
              Our educational materials will be designed to be understandable to beginners while remaining valuable to experts, 
              and our tools built with usability as a core focus.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Community-Centered</h4>
            <p className="text-gray-300">
              We exist to serve the crypto community, and plan to actively involve community members in our work through 
              open feedback, collaborative research, and participatory governance. Our planned victim recovery fund reflects 
              our commitment to supporting those harmed by scams and exploits.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Evidence-Based</h4>
            <p className="text-gray-300">
              Our recommendations and tools will be based on rigorous research and data analysis. We'll continuously evaluate 
              emerging threats and adapt our approaches based on empirical evidence of what works in protecting users 
              from harm.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      name: 'Global Vision',
      icon: <FaGlobe className="text-teal-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Although the Open Crypto Foundation is only three weeks old, we have a global vision for our work. We aim to 
            address cryptocurrency safety and education across different regions and regulatory environments, recognizing 
            that crypto challenges and opportunities vary worldwide.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Future Regional Initiatives</h4>
            <p className="text-gray-300">
              We plan to develop region-specific educational resources that account for local regulatory frameworks, common
              scam variations, and market conditions. Our materials will be available in multiple languages to ensure 
              accessibility across different communities.
            </p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">North America</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Europe</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Asia Pacific</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Latin America</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Africa</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Middle East</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">South Asia</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm text-center">Oceania</span>
            </div>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Cross-Border Approach</h4>
            <p className="text-gray-300">
              Cryptocurrency security threats often transcend national boundaries. Our foundation aims to coordinate 
              cross-border initiatives to identify emerging threats, share intelligence, and develop standardized 
              responses that protect users globally.
            </p>
            <p className="text-gray-300 mt-3">
              Through our developing international network, we hope to facilitate knowledge sharing between 
              regulatory bodies, security researchers, and consumer protection agencies to create a more 
              unified approach to cryptocurrency security.
            </p>
          </div>
        </div>
      ),
    }
  ]

  return (
    <>
      <Head>
        <title>About the Open Crypto Foundation</title>
        <meta name="description" content="Learn about the Open Crypto Foundation's mission, purpose, and values in advancing blockchain security and transparency." />
      </Head>

      <main className="min-h-screen bg-dark">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About the Open Crypto Foundation
              </h1>
              <p className="text-xl text-light-muted">
                Dedicated to creating a safer, more transparent cryptocurrency ecosystem through education, tools, and verification services.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <TabLayout 
                tabs={aboutSections} 
                activeTab={activeSection} 
                onTabChange={setActiveSection} 
              >
                {aboutSections.map((section) => (
                  <div 
                    key={section.id}
                    className={`transition-opacity duration-300 ${
                      activeSection === section.id ? 'block opacity-100' : 'hidden opacity-0'
                    }`}
                  >
                    {section.content}
                  </div>
                ))}
              </TabLayout>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-dark-light/30 border-y border-dark-light/30">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Team members - retained existing structure but updated styling colors */}
                <div className="bg-dark-card border border-dark-light/30 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="h-48 bg-gradient-to-r from-dark-light to-dark flex items-center justify-center">
                    <div className="w-28 h-28 bg-dark-light rounded-full flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">AT</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Andrew Taylor</h3>
                    <p className="text-primary mb-3">Co-Founder & Executive Director</p>
                    <p className="text-light-muted text-sm mb-4">
                      Former security researcher with 15+ years in blockchain security and cryptography.
                      Led security teams at multiple exchanges before founding OCF.
                    </p>
                  </div>
                </div>
                
                {/* Other team members would follow similar pattern */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </>
  )
} 