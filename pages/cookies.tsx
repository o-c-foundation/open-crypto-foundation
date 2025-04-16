import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaCookieBite, FaShieldAlt, FaChartBar, FaUserFriends, FaCog } from 'react-icons/fa'

export default function CookiesPolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy | Open Crypto Foundation</title>
        <meta name="description" content="Learn about how the Open Crypto Foundation uses cookies to improve your experience, analyze site traffic, and personalize content." />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaCookieBite className="text-primary text-3xl mr-3" />
              <h1 className="text-4xl font-bold">Cookie Policy</h1>
            </div>
            <p className="text-gray-400 text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">What Are Cookies?</h2>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                </p>
                <p className="text-gray-300">
                  We use cookies and similar technologies (like local storage) to recognize you, remember your preferences, and understand how you use our site so we can improve your experience.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-4">
                      <FaCog className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                      <p className="text-gray-300">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-4">
                      <FaChartBar className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                      <p className="text-gray-300">
                        These cookies help us understand how visitors interact with our website. They provide information about metrics such as visitor numbers, traffic sources, and which pages are most popular. This helps us improve the website and user experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-4">
                      <FaUserFriends className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Functionality Cookies</h3>
                      <p className="text-gray-300">
                        These cookies allow the website to remember choices you make (such as your username, language or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">How We Use Cookies</h2>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 mb-4">
                  We use cookies for several purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Maintaining your session and preferences while you navigate the site</li>
                  <li>Analyzing how you use our site so we can improve performance and content</li>
                  <li>Remembering your preferences and settings (such as dark/light mode)</li>
                  <li>Storing authentication status to keep you logged in during your visit</li>
                  <li>Preventing fraud and enhancing the security of our site</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Managing Your Cookie Preferences</h2>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to manage your cookie preferences. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>Delete cookies from your device</li>
                  <li>Block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies</li>
                  <li>Set your browser to notify you when you receive a cookie</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our site, and some services may not function properly.
                </p>
                <div className="flex items-start space-x-2 text-gray-300 bg-primary/5 p-4 rounded-lg">
                  <FaShieldAlt className="text-primary mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-white">Cookie Banner Preference:</strong> When you respond to our cookie banner, your choice is saved to your browser's session storage. This means your preference is remembered for the duration of your browsing session. If you close your browser, you may see the banner again on your next visit.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Cookies</h2>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 mb-4">
                  Our website includes functionality provided by third parties. These third parties may place cookies on your device when you visit our site. We have limited control over these cookies. Some of these third-party services include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Analytics providers (such as Google Analytics)</li>
                  <li>Social media platforms (when you use social sharing features)</li>
                  <li>External content providers (such as YouTube or TradingView)</li>
                  <li>Chat and support services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to Our Cookie Policy</h2>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300">
                  We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to check this page periodically to stay informed about our use of cookies.
                </p>
              </div>
            </section>

            <div className="bg-dark-elevated p-6 rounded-xl border border-dark-light/30 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Have Questions About Our Cookie Practices?</h3>
              <p className="text-gray-300 mb-6">
                If you have any questions or concerns about our use of cookies or this Cookie Policy, please feel free to contact us.
              </p>
              <Link href="/contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 