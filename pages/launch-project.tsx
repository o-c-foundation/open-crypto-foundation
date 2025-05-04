import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaRocket, FaCheck, FaShieldAlt, FaUserShield, FaCode, FaUsers, FaHandshake, FaChartLine, FaArrowRight, FaFileContract } from 'react-icons/fa';
import Layout from '../components/Layout';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';

export default function LaunchProject() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Launch Your Project | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Partner with the Open Crypto Foundation to launch your blockchain project with security, transparency, and credibility." 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block p-3 bg-primary/20 rounded-full">
                <FaRocket className="text-primary text-3xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Launch Your Blockchain Project With OCF
              </h1>
              <p className="text-xl text-light-muted mb-8">
                Partner with us to develop, vet, and launch your project with enhanced security, transparency, and credibility.
              </p>
              <Link 
                href="mailto:projects@opencryptofoundation.com" 
                className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
              >
                Contact Our Team <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">How We Can Help Your Project</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaShieldAlt className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Security Auditing</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Our team of security experts will audit your smart contracts and infrastructure to identify 
                    vulnerabilities before they become exploits. We focus on both code security and economic security.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Smart contract audit
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Tokenomics review
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Economic vulnerability assessment
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaUserShield className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Trust & Credibility</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Leverage our foundation's reputation to build trust with your audience. Projects vetted by OCF 
                    demonstrate a commitment to security and ethical practices in DeFi.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> OCF verification badge
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Listing in our trusted projects directory
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Transparency reporting framework
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaCode className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Development Support</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Our team can assist with developing secure, efficient, and scalable smart contracts and 
                    DeFi protocols that align with best practices in the industry.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Smart contract development
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Security-first architecture
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Technical consulting
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaUsers className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Community Building</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Build a sustainable community around your project with our guidance on 
                    transparent communication, user education, and community governance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Community engagement strategies
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Educational content development
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Governance system design
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Launch Process</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">1</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Initial Consultation</h3>
                      <p className="text-light-muted">
                        We'll meet with your team to understand your project's goals, technology, and vision. 
                        This helps us tailor our approach to your specific needs and objectives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">2</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Security Assessment</h3>
                      <p className="text-light-muted">
                        Our security team conducts a comprehensive audit of your smart contracts, infrastructure, 
                        and tokenomics to identify potential vulnerabilities and suggest improvements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">3</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Implementation & Refinement</h3>
                      <p className="text-light-muted">
                        Based on our assessment, we work with your team to implement security improvements, 
                        refine your tokenomics, and enhance your project's overall quality and sustainability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">4</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Pre-Launch Verification</h3>
                      <p className="text-light-muted">
                        Before your project launches, we conduct a final verification to ensure all security 
                        recommendations have been implemented and the project meets our standards for transparency and quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">5</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Launch Support & Beyond</h3>
                      <p className="text-light-muted">
                        We provide ongoing support during your launch phase, helping with community engagement, 
                        technical support, and addressing any issues that may arise. Our relationship continues 
                        beyond launch with regular check-ins and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-dark-elevated to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch Your Project Securely?</h2>
              <p className="text-xl text-light-muted mb-8">
                Partner with the Open Crypto Foundation for a safer, more transparent launch that 
                builds trust with your community from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="mailto:projects@opencryptofoundation.com" 
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg"
                >
                  Contact Our Team
                </Link>
                <Link 
                  href="/launch-project#faq" 
                  className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">What types of projects do you work with?</h3>
                  <p className="text-light-muted">
                    We work with a wide range of blockchain projects, including DeFi protocols, NFT platforms, 
                    DAOs, and infrastructure solutions. Our focus is on projects that prioritize security, 
                    transparency, and long-term value creation for users.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">How long does the launch process typically take?</h3>
                  <p className="text-light-muted">
                    The timeline varies depending on the complexity of your project and its current development stage. 
                    A typical process from initial consultation to launch readiness takes 4-8 weeks, with 
                    security audits requiring 2-3 weeks on average.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">What does OCF verification provide?</h3>
                  <p className="text-light-muted">
                    OCF verification signals to users that your project has undergone thorough security auditing, 
                    implemented best practices for transparency, and committed to ethical standards in DeFi. 
                    This helps build trust with your community and distinguishes your project in a crowded market.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">What are your fees for project launching services?</h3>
                  <p className="text-light-muted">
                    Our fees vary based on the scope of services required and the complexity of your project. 
                    We offer flexible engagement models, including fixed-fee packages and ongoing partnerships. 
                    Contact us for a customized quote based on your specific needs.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Do you offer marketing services for launches?</h3>
                  <p className="text-light-muted">
                    While our primary focus is on technical security and quality assurance, we do provide guidance 
                    on ethical marketing practices and can connect you with trusted marketing partners in our network. 
                    We emphasize sustainable community building over short-term promotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
                <p className="text-light-muted">Subscribe to receive news about our project launch services and opportunities.</p>
              </div>
              <NewsletterSubscribe />
            </div>
          </div>
        </section>
      </main>
      
      <ScrollToTop />
    </div>
  );
}

// Define custom layout for the page
LaunchProject.getLayout = function getLayout(page) {
  return (
    <Layout 
      title="Launch Your Project | OCF Foundation"
      description="Partner with the Open Crypto Foundation to launch your blockchain project with security, transparency, and credibility."
    >
      {page}
    </Layout>
  );
}; 