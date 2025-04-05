import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaShieldAlt, FaUserShield } from 'react-icons/fa'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Our privacy policy details how the Open Crypto Foundation collects, uses, and protects your personal information." 
        />
      </Head>
      
      <section className="pt-10 pb-16 bg-gradient-to-br from-black to-gray-900 text-white border-b border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FaUserShield className="text-4xl mr-3 text-purple-400" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-300">
              How we collect, use, and protect your personal information
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
                    The Open Crypto Foundation ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website and use our services.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Information We Collect</h2>
                  <p>We may collect information about you in various ways, including:</p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">Information You Provide</h3>
                  <p>
                    We may collect personal information that you voluntarily provide when using our site or services, 
                    such as when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Contact us through our website</li>
                    <li>Sign up for our newsletter</li>
                    <li>Participate in our community forums</li>
                    <li>Use our interactive tools</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">Automatically Collected Information</h3>
                  <p>
                    When you visit our website, we may automatically collect certain information about your device and 
                    browsing actions, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages you view</li>
                    <li>Time and date of your visit</li>
                    <li>Time spent on pages</li>
                    <li>Referral source</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">How We Use Your Information</h2>
                  <p>We may use the information we collect for various purposes, including to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you technical notices, updates, and administrative messages</li>
                    <li>Communicate about new features, products, and educational content</li>
                    <li>Monitor and analyze trends, usage, and activities related to our website</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                    <li>Protect the rights and property of the Open Crypto Foundation and others</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Cookies and Similar Technologies</h2>
                  <p>
                    We use cookies, web beacons, and similar technologies to track activity on our website and hold certain 
                    information. Cookies are files with small amounts of data that are stored on your device. You can instruct 
                    your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept 
                    cookies, you may not be able to use some portions of our service.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect the security of your personal 
                    information. However, please be aware that no method of transmission over the Internet or method of electronic 
                    storage is 100% secure. While we strive to use commercially acceptable means to protect your personal 
                    information, we cannot guarantee its absolute security.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites and services. We have no control over, and assume no 
                    responsibility for, the content, privacy policies, or practices of any third-party sites or services. We 
                    encourage you to review the privacy policies of any sites you visit.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                    Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this 
                    Privacy Policy periodically for any changes.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:privacy@opencryptofoundation.org" className="text-purple-400 hover:text-purple-300">
                      privacy@opencryptofoundation.org
                    </a>.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-center text-gray-400">
                    <FaShieldAlt className="mr-2 text-purple-400" />
                    <span>
                      Your privacy matters to us. Read our{' '}
                      <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                        Terms of Service
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