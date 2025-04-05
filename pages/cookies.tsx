import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaCookieBite, FaInfoCircle } from 'react-icons/fa'

export default function CookiePolicyPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Our cookie policy explains how the Open Crypto Foundation uses cookies and similar technologies to enhance your experience." 
        />
      </Head>
      
      <section className="pt-10 pb-16 bg-gradient-to-br from-black to-gray-900 text-white border-b border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FaCookieBite className="text-4xl mr-3 text-purple-400" />
              <h1 className="text-4xl font-bold">Cookie Policy</h1>
            </div>
            <p className="text-xl text-gray-300">
              How we use cookies and similar technologies on our website
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
                  <h2 className="text-2xl font-bold mb-6 text-white">What Are Cookies?</h2>
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit a 
                    website. They are widely used to make websites work more efficiently and provide information to 
                    the website owners. Cookies enhance user experience by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Remembering your preferences and settings</li>
                    <li>Understanding how you use our website</li>
                    <li>Improving site functionality and performance</li>
                    <li>Providing relevant content based on your interests</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">How We Use Cookies</h2>
                  <p>
                    The Open Crypto Foundation uses cookies for various purposes, including:
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable core functionality 
                    such as security, network management, and accessibility. You may disable these by changing your 
                    browser settings, but this may affect how the website functions.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">Analytical/Performance Cookies</h3>
                  <p>
                    These cookies allow us to count visits and traffic sources so we can measure and improve the 
                    performance of our site. They help us understand which pages are the most and least popular 
                    and see how visitors move around the site.
                  </p>
                  <p>
                    We use services such as Google Analytics to help us analyze how people use our site. All information 
                    these cookies collect is aggregated and anonymous.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">Functionality Cookies</h3>
                  <p>
                    These cookies enable the website to provide enhanced functionality and personalization. They may be 
                    set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">Targeting/Advertising Cookies</h3>
                  <p>
                    These cookies may be set through our site by our advertising partners. They may be used to build a 
                    profile of your interests and show you relevant advertisements on other sites. They do not directly 
                    store personal information but are based on uniquely identifying your browser and internet device.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Third-Party Cookies</h2>
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
                    of the website and deliver advertisements on and through the website. These may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Google Analytics for site traffic and user behavior analysis</li>
                    <li>Social media cookies from platforms such as Twitter, GitHub, or Discord</li>
                    <li>Content delivery networks to optimize the loading of content</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Managing Cookies</h2>
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Delete all cookies from your browser</li>
                    <li>Block all cookies by activating the setting on your browser</li>
                    <li>Block or allow specific types of cookies</li>
                    <li>Browse websites in "private" or "incognito" mode</li>
                  </ul>
                  <p>
                    Please note that restricting cookies may impact your experience of our website and limit the 
                    functionality we can provide.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Changes to Our Cookie Policy</h2>
                  <p>
                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting 
                    the new Cookie Policy on this page and updating the "Last Updated" date.
                  </p>
                  <p>
                    We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies 
                    and related technologies.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-white">Contact Us</h2>
                  <p>
                    If you have any questions about our Cookie Policy, please contact us at{' '}
                    <a href="mailto:privacy@opencryptofoundation.org" className="text-purple-400 hover:text-purple-300">
                      privacy@opencryptofoundation.org
                    </a>.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-center text-gray-400">
                    <FaInfoCircle className="mr-2 text-purple-400" />
                    <span>
                      For more information, see our{' '}
                      <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
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