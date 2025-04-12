import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCloudUploadAlt, FaLock, FaShieldAlt, FaDatabase, FaGlobe, FaGithub, FaExternalLinkAlt, FaCheck, FaServer, FaUserShield, FaNetworkWired, FaTools, FaUsers, FaCube, FaCubes } from 'react-icons/fa';
import Layout from '../../components/Layout';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

export default function OpenDrivePage() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OpenDrive - Decentralized Storage | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Secure, decentralized storage powered by IPFS with end-to-end encryption, content addressing, and data ownership" 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block p-3 bg-primary/20 rounded-full">
                <FaCloudUploadAlt className="text-primary text-3xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OpenDrive
              </h1>
              <p className="text-xl text-light-muted mb-8">
                Secure, decentralized storage for the modern web. Powered by IPFS with end-to-end encryption and content addressing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://open-drive-file-upload.vercel.app/" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" /> Launch App
                </Link>
                <Link 
                  href="https://github.com/o-c-foundation/Open-Drive-" 
                  target="_blank"
                  className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">What is OpenDrive?</h2>
                  <p className="text-light-muted mb-4">
                    OpenDrive is a cutting-edge decentralized storage platform developed by The Open Crypto Foundation. Designed with user privacy, security, and data ownership as core principles, it provides a resilient alternative to traditional centralized storage solutions.
                  </p>
                  <p className="text-light-muted mb-4">
                    By leveraging the power of <span className="text-primary font-medium">content-addressable storage through IPFS</span> (InterPlanetary File System), OpenDrive ensures your files are identified by what they contain, not where they're stored, revolutionizing how we think about data storage.
                  </p>
                </div>
                <div className="bg-dark-card p-6 rounded-xl border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaCube className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Content-Addressed Storage</p>
                        <p className="text-sm text-light-muted">Files are identified by what they are, not where they're stored</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaLock className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">End-to-End Encryption</p>
                        <p className="text-sm text-light-muted">Optional client-side encryption for your most sensitive files</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaUserShield className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Granular Access Control</p>
                        <p className="text-sm text-light-muted">Share precisely what you want, with whom you want</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaDatabase className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Built for Permanence</p>
                        <p className="text-sm text-light-muted">Store your data with confidence for the long term</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">How OpenDrive Works</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">1</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">File Upload</h3>
                      <p className="text-light-muted">
                        When you upload a file to OpenDrive, it's split into smaller chunks, each assigned a unique content ID (CID) based on its data. This process ensures data integrity and enables efficient storage and retrieval.
                      </p>
                    </div>
                  </div>
                
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">2</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Encryption (Optional)</h3>
                      <p className="text-light-muted">
                        For enhanced privacy, you can enable client-side encryption. Your files are encrypted before leaving your device, with encryption keys that only you control, ensuring that no one—not even OpenDrive—can access your content.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">3</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Distributed Storage</h3>
                      <p className="text-light-muted">
                        Your data is distributed across the IPFS network, eliminating single points of failure. This means your files remain accessible even if some nodes go offline, providing superior reliability compared to centralized storage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">4</div>
                    </div>
                    <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Access & Sharing</h3>
                      <p className="text-light-muted">
                        Retrieve your files anytime via their unique content IDs. Sharing is as simple as sending a link, with optional access controls to determine who can view your content. You can also set expiration dates for shared links.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Storage Plans Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Storage Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="px-4 py-2 bg-primary/10 rounded-lg text-primary font-medium text-center mb-4 self-start">Basic</div>
                  <h3 className="text-2xl font-bold text-white mb-2">5GB</h3>
                  <div className="text-xl font-medium text-white mb-6">Free</div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Content addressing
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Basic file sharing
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Web access
                    </li>
                  </ul>
                  <Link 
                    href="https://open-drive-file-upload.vercel.app/" 
                    target="_blank"
                    className="text-center px-4 py-2 bg-dark-elevated hover:bg-dark-light/20 text-white rounded-lg transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-primary/30 shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col">
                  <div className="px-4 py-2 bg-primary/20 rounded-lg text-primary font-medium text-center mb-4 self-start">Standard</div>
                  <h3 className="text-2xl font-bold text-white mb-2">100GB</h3>
                  <div className="text-xl font-medium text-white mb-6">$12.99<span className="text-light-muted text-sm">/month</span></div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Everything in Basic
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Priority uploads
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Enhanced redundancy
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Advanced sharing controls
                    </li>
                  </ul>
                  <Link 
                    href="https://open-drive-file-upload.vercel.app/" 
                    target="_blank"
                    className="text-center px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
                  >
                    Choose Plan
                  </Link>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="px-4 py-2 bg-primary/10 rounded-lg text-primary font-medium text-center mb-4 self-start">Professional</div>
                  <h3 className="text-2xl font-bold text-white mb-2">1TB</h3>
                  <div className="text-xl font-medium text-white mb-6">$49.99<span className="text-light-muted text-sm">/month</span></div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Everything in Standard
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Advanced analytics
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Multiple accounts
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Custom branding
                    </li>
                  </ul>
                  <Link 
                    href="https://open-drive-file-upload.vercel.app/" 
                    target="_blank"
                    className="text-center px-4 py-2 bg-dark-elevated hover:bg-dark-light/20 text-white rounded-lg transition-colors"
                  >
                    Choose Plan
                  </Link>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="px-4 py-2 bg-primary/10 rounded-lg text-primary font-medium text-center mb-4 self-start">Enterprise</div>
                  <h3 className="text-2xl font-bold text-white mb-2">5TB+</h3>
                  <div className="text-xl font-medium text-white mb-6">Custom pricing</div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Everything in Professional
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Dedicated support
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> SLA guarantees
                    </li>
                    <li className="flex items-center text-light-muted">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" /> Custom integration
                    </li>
                  </ul>
                  <Link 
                    href="mailto:enterprise@opencryptofoundation.org" 
                    className="text-center px-4 py-2 bg-dark-elevated hover:bg-dark-light/20 text-white rounded-lg transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Features Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Security & Privacy</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaNetworkWired className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Distributed Architecture</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Files are distributed across the network, eliminating single points of failure. Even if some nodes go 
                    offline, your data remains accessible through other nodes in the network.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaCubes className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Content Integrity</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Content addressing ensures data integrity through cryptographic verification. Each file's unique 
                    identifier is derived from its content, making it impossible to tamper with data without detection.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaLock className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Client-Side Encryption</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Optional but recommended, client-side encryption ensures your data is encrypted before it leaves your 
                    device. Only you hold the encryption keys, giving you complete privacy and control over your data.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaUserShield className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">No Tracking or Data Mining</h3>
                  </div>
                  <p className="text-light-muted mb-4">
                    Unlike many cloud storage providers, OpenDrive doesn't track your usage patterns or mine your data. 
                    Your content is yours alone, and we have no visibility into what you store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">What You Can Do With OpenDrive</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaUsers className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Secure File Sharing</h3>
                  </div>
                  <p className="text-light-muted">
                    Share sensitive documents with colleagues, clients, or friends with granular access controls. Set expiration 
                    dates, password protection, and view-only access as needed.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaDatabase className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Data Backup</h3>
                  </div>
                  <p className="text-light-muted">
                    Safely back up important documents, photos, and other digital assets. The distributed nature of 
                    IPFS ensures your backups are resilient against hardware failures and data loss.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 mr-4">
                      <FaGlobe className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Content Distribution</h3>
                  </div>
                  <p className="text-light-muted">
                    Distribute content globally with high availability. Perfect for media files, static websites, 
                    and other content that benefits from IPFS's peer-to-peer distribution model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Stack Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Stack</h2>
              
              <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                <p className="text-light-muted mb-6 text-center">
                  OpenDrive is built with modern web technologies and decentralized protocols to deliver a 
                  seamless and secure storage experience.
                </p>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> React with TypeScript
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Tailwind CSS for styling
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Vite for fast development
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Progressive Web App (PWA) capabilities
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Storage & Authentication</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> IPFS for content-addressable storage
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Email-based authentication
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Private key security
                      </li>
                      <li className="flex items-center text-light-muted">
                        <FaCheck className="text-primary mr-2 flex-shrink-0" /> Zustand for state management
                      </li>
                    </ul>
                  </div>
                </div>
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
                  <h3 className="text-xl font-bold text-white mb-3">How is OpenDrive different from traditional cloud storage?</h3>
                  <p className="text-light-muted">
                    Unlike traditional cloud storage that relies on centralized servers controlled by a single entity, 
                    OpenDrive leverages IPFS to distribute your data across a global network. This provides greater 
                    resilience against outages, censorship, and data loss. Additionally, with content addressing, your 
                    files are identified by what they contain rather than where they're stored, ensuring data integrity.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Is my data secure on OpenDrive?</h3>
                  <p className="text-light-muted">
                    Yes, OpenDrive prioritizes security through multiple mechanisms. With optional client-side 
                    encryption, your data is encrypted before it leaves your device, ensuring that only you (or those you 
                    explicitly share with) can access the decrypted content. Additionally, content addressing ensures data 
                    integrity by cryptographically verifying content.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Can I access my files offline?</h3>
                  <p className="text-light-muted">
                    OpenDrive is designed as a Progressive Web App (PWA), which means you can install it on your device 
                    for offline access to previously downloaded files. For full offline functionality, you can pin specific 
                    files for local storage, ensuring they're always available even without an internet connection.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">What happens if I lose my encryption keys?</h3>
                  <p className="text-light-muted">
                    If you enable client-side encryption and lose your encryption keys, we cannot recover your data. This 
                    is a security feature that ensures only you have access to your encrypted content. We strongly recommend 
                    backing up your encryption keys securely when using this feature. For standard (non-encrypted) files, 
                    you'll always have access through your account credentials.
                  </p>
                </div>
                
                <div className="bg-dark-card rounded-xl p-6 border border-dark-light/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">How do I share files with OpenDrive?</h3>
                  <p className="text-light-muted">
                    Sharing files on OpenDrive is simple. Select the file or folder you want to share, click the "Share" 
                    button, and choose your sharing options. You can generate a link, set permissions (view-only or edit), 
                    add password protection, or set an expiration date. Recipients can access shared content through a web 
                    browser without needing an OpenDrive account, unless you specify otherwise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-dark-elevated to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Get Started with OpenDrive Today</h2>
              <p className="text-xl text-light-muted mb-8">
                Experience secure, decentralized storage with the power of IPFS and content addressing
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://open-drive-file-upload.vercel.app/" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaCloudUploadAlt className="mr-2" /> Try OpenDrive
                </Link>
                <Link 
                  href="https://github.com/o-c-foundation/Open-Drive-" 
                  target="_blank"
                  className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View Source Code
                </Link>
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
                <p className="text-light-muted">Subscribe to receive updates about OpenDrive and other OCF tools.</p>
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
OpenDrivePage.getLayout = function getLayout(page) {
  return (
    <Layout 
      title="OpenDrive - Decentralized Storage | Open Crypto Foundation"
      description="Secure, decentralized storage powered by IPFS with end-to-end encryption, content addressing, and data ownership"
    >
      {page}
    </Layout>
  );
}; 