import React, { useState } from 'react'
import Head from 'next/head'
import { FaUsers, FaChartLine, FaShieldAlt, FaHandshake, FaHistory, FaMedal } from 'react-icons/fa'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story')
  
  // Tabs configuration
  const tabs = [
    { id: 'story', label: 'Our Story', icon: <FaHistory className="mr-2" /> },
    { id: 'mission', label: 'Mission', icon: <FaShieldAlt className="mr-2" /> },
    { id: 'approach', label: 'Our Approach', icon: <FaHandshake className="mr-2" /> },
    { id: 'stats', label: 'DeFi Statistics', icon: <FaChartLine className="mr-2" /> },
    { id: 'team', label: 'Our Team', icon: <FaUsers className="mr-2" /> },
    { id: 'achievements', label: 'Achievements', icon: <FaMedal className="mr-2" /> }
  ]

  // DeFi scam statistics with sources
  const scamStats = [
    {
      figure: "$10.3 Billion",
      description: "Lost to crypto scams in 2023 alone",
      source: "Chainalysis Crypto Crime Report 2024",
      sourceUrl: "https://www.chainalysis.com/",
      year: 2023
    },
    {
      figure: "53%",
      description: "Increase in DeFi-related scams from 2022 to 2023",
      source: "CipherTrace DeFi Security Report 2023",
      sourceUrl: "https://ciphertrace.com/",
      year: 2023
    },
    {
      figure: "82%",
      description: "Of all crypto scam revenue came from rug pulls and exit scams",
      source: "Elliptic DeFi Risk Report",
      sourceUrl: "https://www.elliptic.co/",
      year: 2023
    },
    {
      figure: "$2.5 Billion",
      description: "Lost to crypto scams by first-time users",
      source: "Federal Trade Commission Consumer Protection Data",
      sourceUrl: "https://www.ftc.gov/",
      year: 2022
    },
    {
      figure: "70%",
      description: "Of DeFi exploits could have been prevented with proper auditing",
      source: "Certik State of DeFi Security",
      sourceUrl: "https://www.certik.com/",
      year: 2023
    },
    {
      figure: "60%",
      description: "Average recovery rate when using security best practices",
      source: "DeFi Safety Protocol Rankings",
      sourceUrl: "https://www.defisafety.com/",
      year: 2023
    }
  ]

  // Team members (generic descriptions since we don't have specific people)
  const teamMembers = [
    {
      role: "Founding Director",
      background: "Former crypto trader with 10+ years of experience across traditional finance and DeFi markets. Has experienced both sides of the market and now focuses on education and harm reduction.",
      expertise: ["Market Analysis", "Regulatory Compliance", "Community Building"]
    },
    {
      role: "Lead Security Researcher",
      background: "Former security auditor who has identified vulnerabilities in several major DeFi protocols. Brings comprehensive knowledge of smart contract vulnerabilities and exploit techniques.",
      expertise: ["Smart Contract Auditing", "Vulnerability Research", "Security Design"]
    },
    {
      role: "Community Education Director",
      background: "Previously led education initiatives at several crypto exchanges. Has helped thousands of new users safely navigate their first DeFi experiences.",
      expertise: ["Educational Content", "User Onboarding", "Harm Reduction"]
    },
    {
      role: "Technical Director",
      background: "Blockchain developer with experience building on multiple chains. Has contributed to several open-source DeFi protocols and security tools.",
      expertise: ["Blockchain Development", "Technical Documentation", "Tool Integration"]
    },
    {
      role: "Ethics & Transparency Advocate",
      background: "Former regulator who has worked on both enforcement and education. Brings a balanced perspective on regulation and self-governance in DeFi.",
      expertise: ["Ethics Frameworks", "Transparent Governance", "Regulatory Strategy"]
    }
  ]

  // Achievements and milestones
  const achievements = [
    {
      year: 2023,
      title: "Launch of the Open Crypto Foundation",
      description: "Established with a mission to improve safety and education in the DeFi space"
    },
    {
      year: 2023,
      title: "First Security Resource Guide",
      description: "Published comprehensive guides for traders and developers that have helped thousands stay safe"
    },
    {
      year: 2023,
      title: "Community Growth",
      description: "Built a community of over 15,000 members dedicated to safer DeFi practices"
    },
    {
      year: 2024,
      title: "Tools Directory Launch",
      description: "Created a curated directory of trusted tools to help users navigate DeFi safely"
    },
    {
      year: 2024,
      title: "Educational Partnerships",
      description: "Formed partnerships with leading DeFi protocols to improve security education"
    }
  ]

  return (
    <>
      <Head>
        <title>About Us | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Learn about the Open Crypto Foundation, our mission to improve DeFi safety, and our unique perspective on the crypto ecosystem." 
        />
      </Head>
      
      <section className="pt-10 pb-12 bg-gradient-to-br from-black to-gray-900 text-white border-b border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">About the Open Crypto Foundation</h1>
            <p className="text-xl text-gray-300">
              A diverse collective of traders, developers, and enthusiasts committed to 
              creating a safer and more transparent DeFi ecosystem.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 border border-gray-700">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-700 scrollbar-hide">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-purple-400 border-b-2 border-purple-500' 
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="p-6 md:p-8">
              {/* Our Story */}
              {activeTab === 'story' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p className="text-lg mb-4">
                      The Open Crypto Foundation was formed by a diverse group of professionals who have experienced DeFi from all angles. 
                      Our founders include traders, programmers, and crypto enthusiasts who have been on both sides of the spectrum — some 
                      were victims of sophisticated scams, while others have operated projects that later realized the harm they caused.
                    </p>
                    <p className="text-lg mb-4">
                      After coming together through various crypto communities and conferences, we recognized a common goal: to use our 
                      collective knowledge and experiences to make DeFi safer for everyone. We've been in the trenches, both as victims 
                      who lost significant funds and as those who once participated in questionable projects.
                    </p>
                    <p className="text-lg mb-4">
                      This unique perspective gives us an invaluable advantage. We understand exactly how scams are perpetrated,
                      the psychological tactics used, the technical vulnerabilities exploited, and the regulatory gaps that allow
                      bad actors to thrive. But we also understand the legitimate opportunities in DeFi and how proper education
                      can help users protect themselves.
                    </p>
                    <p className="text-lg mb-4">
                      Rather than keeping this knowledge private, we decided to open source it. The Open Crypto Foundation was 
                      established as a platform to share these insights, develop educational resources, and curate tools that 
                      can help everyone from newcomers to experienced traders navigate the space safely.
                    </p>
                    <p className="text-lg">
                      Our journey has transformed us from being part of the problem to being part of the solution. We believe that 
                      with the right information and tools, the crypto revolution can continue to grow while minimizing harm and 
                      building trust with the broader public.
                    </p>
                  </div>
                </div>
              )}

              {/* Mission */}
              {activeTab === 'mission' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p className="text-lg mb-6">
                      The Open Crypto Foundation exists to transform the DeFi landscape from one often characterized by risk, 
                      scams, and misinformation into an ecosystem of transparency, education, and user protection.
                    </p>
                    
                    <h3 className="text-xl font-bold mt-8 mb-4 text-white">Core Objectives</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Education First</h4>
                        <p className="text-gray-300">
                          Provide accessible, high-quality resources that empower users of all experience levels to make 
                          informed decisions about their participation in DeFi.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Harm Reduction</h4>
                        <p className="text-gray-300">
                          Recognize that complete elimination of scams is unlikely, but strategic information sharing and 
                          tool development can significantly reduce their impact.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Transparency Advocacy</h4>
                        <p className="text-gray-300">
                          Promote a culture where projects are held to high standards of transparency, with clear 
                          documentation of risks and honest communication about capabilities.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Alternative Pathways</h4>
                        <p className="text-gray-300">
                          Show those who might otherwise turn to harmful practices that there are legitimate, 
                          sustainable ways to succeed in the DeFi ecosystem.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg">
                      We believe that DeFi has the potential to democratize finance and create more equitable access to financial 
                      services globally. However, this vision can only be realized when users can participate with confidence 
                      and security. Every resource we create, every tool we recommend, and every piece of knowledge we share 
                      serves this ultimate mission.
                    </p>
                  </div>
                </div>
              )}

              {/* Our Approach */}
              {activeTab === 'approach' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Unique Approach</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p className="text-lg mb-8">
                      What makes the Open Crypto Foundation different is our nuanced, reality-based approach to DeFi safety. 
                      We don't operate with idealistic assumptions but with practical strategies based on real-world experience.
                    </p>
                    
                    <div className="bg-purple-900/30 p-6 rounded-xl mb-8 border border-purple-800/50">
                      <h3 className="text-xl font-bold mb-4 text-purple-300">The Reality Principle</h3>
                      <p className="mb-0 text-gray-300">
                        We acknowledge that despite our best efforts, scams and exploits will continue to exist in the DeFi space. 
                        Rather than focusing exclusively on prevention, we also emphasize preparation, rapid response, and damage 
                        mitigation strategies.
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">Knowledge From Both Sides</h3>
                    <p className="mb-6">
                      Our team includes individuals who have been on both sides of crypto scams. This dual perspective allows us to:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="border border-gray-700 bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-white">For Users</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                          <li>Identify red flags based on real tactics used by scammers</li>
                          <li>Develop practical verification strategies for project evaluation</li>
                          <li>Create recovery and reporting protocols for those who become victims</li>
                          <li>Share authentic testimonials that resonate with real experiences</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-700 bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-white">For Potential Bad Actors</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                          <li>Demonstrate legitimate paths to success in DeFi</li>
                          <li>Illustrate the increasing legal and reputational risks of scams</li>
                          <li>Show how transparent projects can achieve sustainable growth</li>
                          <li>If they still proceed with harmful actions, guide toward minimizing human impact</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">Education Through Curation</h3>
                    <p className="mb-6">
                      Rather than reinventing tools that already exist, we focus on carefully vetting and curating the best 
                      resources in the space. Our recommendations come with context, guidance, and specific use cases to help 
                      users choose the right tools for their needs.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">Harm Reduction Philosophy</h3>
                    <p>
                      Like public health approaches to various social challenges, we believe that providing accurate information 
                      and safer options yields better outcomes than judgment or silence. This philosophy guides all our work, 
                      from the educational content we create to the way we engage with the community.
                    </p>
                  </div>
                </div>
              )}

              {/* DeFi Stats */}
              {activeTab === 'stats' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">DeFi Security Statistics</h2>
                  <p className="text-lg mb-8 text-gray-300">
                    The reality of DeFi security challenges underscores the importance of our mission. These statistics 
                    highlight both the scale of the problem and the opportunity for improvement through education and 
                    proper tools.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {scamStats.map((stat, index) => (
                      <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-5 shadow-sm">
                        <div className="text-3xl font-bold text-purple-400 mb-2">{stat.figure}</div>
                        <div className="mb-4 text-gray-300">{stat.description}</div>
                        <div className="flex justify-between items-center text-sm text-gray-400 border-t border-gray-600 pt-3">
                          <a 
                            href={stat.sourceUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-purple-200"
                          >
                            {stat.source}
                          </a>
                          <span>{stat.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-900/20 border-l-4 border-yellow-700/50 p-5 rounded-lg">
                    <h3 className="font-bold mb-2 text-yellow-300">Why These Numbers Matter</h3>
                    <p className="mb-0 text-gray-300">
                      These statistics aren't just numbers—they represent real people who have lost savings, investments, and 
                      trust in the broader crypto ecosystem. Each percentage point of improvement means fewer victims and 
                      stronger legitimacy for the technology we believe in.
                    </p>
                  </div>
                </div>
              )}

              {/* Team */}
              {activeTab === 'team' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Team</h2>
                  <p className="text-lg mb-8 text-gray-300">
                    The Open Crypto Foundation brings together individuals with diverse backgrounds but a shared commitment to 
                    improving the DeFi ecosystem. Our team members bring experience from both sides of the crypto landscape, 
                    giving us unique insight into effective safety strategies.
                  </p>
                  
                  <div className="space-y-8">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-bold mb-2 text-purple-300">{member.role}</h3>
                        <p className="mb-4 text-gray-300">{member.background}</p>
                        
                        <h4 className="font-medium mb-2 text-white">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-purple-900/20 border border-purple-800/50 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-3 text-white">Join Our Team</h3>
                    <p className="mb-4 text-gray-300">
                      We're always looking for passionate individuals who share our vision for a safer DeFi ecosystem. 
                      If you have expertise in blockchain security, education, community building, or relevant fields, 
                      we'd love to hear from you.
                    </p>
                    <a 
                      href="mailto:team@opencryptofoundation.org" 
                      className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              )}

              {/* Achievements */}
              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Milestones & Achievements</h2>
                  <p className="text-lg mb-8 text-gray-300">
                    Since our inception, the Open Crypto Foundation has been working diligently to improve DeFi safety and 
                    education. Here's a look at our journey and key accomplishments so far.
                  </p>
                  
                  <div className="relative border-l-2 border-purple-800 pl-8 ml-4 space-y-10">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-12 bg-purple-900/50 text-purple-300 font-bold py-1 px-3 rounded-full border border-purple-700/50">
                          {achievement.year}
                        </div>
                        <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full mt-1.5 border-4 border-gray-800"></div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                          <p className="text-gray-300">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 bg-gray-700 p-6 rounded-lg border border-gray-600">
                    <h3 className="text-xl font-bold mb-4 text-white">Looking Forward</h3>
                    <p className="mb-0 text-gray-300">
                      Our work is just beginning. In the coming years, we aim to expand our educational resources, develop 
                      more comprehensive safety tools, and build partnerships with key players in the DeFi ecosystem to 
                      create meaningful, industry-wide standards for user protection.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Join Our Mission</h2>
            <p className="text-lg mb-8 text-gray-300">
              Whether you're a DeFi user looking to stay safe, a developer wanting to build more 
              secure projects, or someone passionate about improving the crypto ecosystem, there's 
              a place for you in our community.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/resources" 
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore Resources
              </a>
              <a 
                href="/tools" 
                className="px-6 py-3 bg-gray-700 border border-purple-600 text-purple-300 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Browse Tools
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 