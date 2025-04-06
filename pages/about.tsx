import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaChartLine, FaShieldAlt, FaHandshake, FaHistory, FaMedal, FaLightbulb, FaGlobe } from 'react-icons/fa'
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
      icon: <FaShieldAlt className="text-yellow-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation exists to create a safer, more transparent cryptocurrency ecosystem where users can 
            participate with confidence. We believe the promise of decentralized finance can only be realized when users 
            have the tools and knowledge to protect themselves from scams and exploitative projects.
          </p>
          <p className="text-gray-300">
            Our mission is to provide accessible education, reliable tools, and independent verification services that empower 
            both newcomers and experienced users to navigate the complexities of cryptocurrency with security and confidence.
          </p>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Core Objectives</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Develop and maintain open-source tools for crypto safety verification</li>
              <li>Provide comprehensive, unbiased educational resources</li>
              <li>Offer transparent, rigorous auditing services for crypto projects</li>
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
            The Open Crypto Foundation serves as a nonprofit organization dedicated to advancing the security, transparency, 
            and accessibility of blockchain technology and cryptocurrency ecosystems. We function as an independent entity 
            focused solely on the betterment of the space through education, research, and tooling.
          </p>
          <p className="text-gray-300">
            As a foundation, we operate with a commitment to neutrality and objectivity, ensuring that our work benefits the 
            entire ecosystem rather than any specific project or platform. Our organizational structure allows us to maintain 
            independence while collaborating with various stakeholders in the blockchain space.
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
      id: 'history',
      name: 'Our History',
      icon: <FaHistory className="text-purple-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation was established in 2022 in response to the growing prevalence of scams and 
            exploitative projects in the cryptocurrency space. The foundation emerged as a collective effort by the 
            community to create an organization dedicated to promoting safety and transparency in the blockchain ecosystem.
          </p>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2022</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Foundation Established</h4>
                <p className="text-gray-300">
                  OCF was formed as a response to the 2021-2022 wave of cryptocurrency scams and exploits, 
                  with a mission to create safer blockchain ecosystems through education and tooling.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2023</span>
              </div>
              <div>
                <h4 className="text-white font-medium">First Tools Launched</h4>
                <p className="text-gray-300">
                  Released our first suite of open-source security tools, including the Contract Scanner and Risk Calculator. 
                  Established educational resources and scam database.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2024</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Expanded Services</h4>
                <p className="text-gray-300">
                  Launched professional audit services and victim recovery fund. Expanded educational resources 
                  and established partnerships with major blockchain platforms and educational institutions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-2 border-purple-500 mr-4">
                <span className="text-white font-bold">2025</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Future Vision</h4>
                <p className="text-gray-300">
                  Our roadmap includes developing advanced AI-powered security tools, expanding global educational 
                  initiatives, and continuing to advocate for industry standards that protect users.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'partners',
      name: 'Our Partners',
      icon: <FaHandshake className="text-green-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation collaborates with a variety of organizations that share our commitment to creating 
            a safer cryptocurrency ecosystem. Our partnerships extend across blockchain platforms, educational institutions, 
            security firms, and consumer protection organizations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-5 rounded-lg">
              <h4 className="text-white font-medium border-b border-gray-600 pb-2 mb-3">Blockchain Partners</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                  <div>
                    <h5 className="text-white text-sm">Ethereum Foundation</h5>
                    <p className="text-gray-400 text-xs">Collaborative research on smart contract security</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                  </div>
                  <div>
                    <h5 className="text-white text-sm">Solana Foundation</h5>
                    <p className="text-gray-400 text-xs">Educational initiatives and developer resources</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                  </div>
                  <div>
                    <h5 className="text-white text-sm">Binance Academy</h5>
                    <p className="text-gray-400 text-xs">Security awareness content and training</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-700 p-5 rounded-lg">
              <h4 className="text-white font-medium border-b border-gray-600 pb-2 mb-3">Security & Research</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>
                  </div>
                  <div>
                    <h5 className="text-white text-sm">CertiK</h5>
                    <p className="text-gray-400 text-xs">Shared audit standards and security research</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  </div>
                  <div>
                    <h5 className="text-white text-sm">Chainalysis</h5>
                    <p className="text-gray-400 text-xs">Collaborative scam detection and tracking</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  </div>
                  <div>
                    <h5 className="text-white text-sm">MIT Digital Currency Initiative</h5>
                    <p className="text-gray-400 text-xs">Academic research and education</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium border-b border-gray-600 pb-2 mb-3">Consumer Protection</h4>
            <p className="text-gray-300">
              We work with consumer advocacy groups, regulatory bodies, and legal experts to help shape policies 
              that protect cryptocurrency users while preserving the innovation that makes blockchain technology valuable.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Global Digital Finance</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Consumer Financial Protection Bureau</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Financial Consumer Agency</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Crypto Consumer Coalition</span>
            </div>
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
            At the Open Crypto Foundation, our work is guided by a core set of values that inform everything we do. 
            These principles ensure we remain focused on our mission and accountable to the communities we serve.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Transparency</h4>
            <p className="text-gray-300">
              We believe in operating with complete transparency, from our funding sources to our audit methodologies. 
              All our tools are open-source, our evaluations are clearly documented, and our processes are subject to 
              public review and feedback.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Independence</h4>
            <p className="text-gray-300">
              Our assessments and recommendations remain independent from commercial interests. We do not accept payment 
              in exchange for favorable reviews, and our multisig governance structure ensures no single entity can 
              unduly influence our work.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Accessibility</h4>
            <p className="text-gray-300">
              We are committed to making cryptocurrency safety accessible to everyone, regardless of technical background. 
              Our educational materials are designed to be understandable to beginners while remaining valuable to experts, 
              and our tools are built with usability as a core focus.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Community-Centered</h4>
            <p className="text-gray-300">
              We exist to serve the crypto community, and we actively involve community members in our work through 
              open feedback, collaborative research, and participatory governance. Our victim recovery fund reflects 
              our commitment to supporting those harmed by scams and exploits.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Evidence-Based</h4>
            <p className="text-gray-300">
              Our recommendations and tools are based on rigorous research and data analysis. We continuously evaluate 
              emerging threats and adapt our approaches based on empirical evidence of what works in protecting users 
              from harm.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      name: 'Global Impact',
      icon: <FaGlobe className="text-teal-400" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Open Crypto Foundation operates globally, working to improve cryptocurrency safety and education 
            across different regions and regulatory environments. Our decentralized approach allows us to address 
            unique challenges in various markets while maintaining a consistent mission.
          </p>
          
          <div className="bg-gray-700 p-5 rounded-lg mb-4">
            <h4 className="text-white font-medium mb-3">Regional Initiatives</h4>
            <p className="text-gray-300">
              We develop region-specific educational resources that account for local regulatory frameworks, common
              scam variations, and market conditions. Our materials are available in multiple languages to ensure 
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
            <h4 className="text-white font-medium mb-3">Cross-Border Collaboration</h4>
            <p className="text-gray-300">
              Cryptocurrency security threats often transcend national boundaries. Our foundation coordinates 
              cross-border initiatives to identify emerging threats, share intelligence, and develop standardized 
              responses that protect users globally.
            </p>
            <p className="text-gray-300 mt-3">
              Through our international network of partners, we facilitate knowledge sharing between 
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
        <title>About Us | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Learn about the Open Crypto Foundation's mission, purpose, history, partners, and core values." 
        />
      </Head>
      
      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-0">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The Open Crypto Foundation is dedicated to creating a safer cryptocurrency ecosystem through education, tools, and transparency.
            </p>
          </div>

          {/* Main content with vertical tabs */}
          <div className="max-w-4xl mx-auto mb-16">
            <TabLayout
              tabs={aboutSections.map(section => ({
                id: section.id,
                name: section.name,
                icon: section.icon
              }))}
              activeTab={activeSection}
              onTabChange={setActiveSection}
              tabPosition="side"
            >
              {aboutSections.map((section) => (
                <div 
                  key={section.id}
                  className={`bg-gray-800 rounded-lg p-6 transition-opacity duration-300 ${
                    activeSection === section.id ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    {section.icon}
                    <span className="ml-3">{section.name}</span>
                  </h2>
                  
                  {section.content}
                </div>
              ))}
            </TabLayout>
          </div>

          {/* CTA section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Join Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us create a safer cryptocurrency ecosystem by contributing to our projects, using our tools, or spreading awareness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
              <Link 
                href="/manifesto" 
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
              >
                Read Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
} 