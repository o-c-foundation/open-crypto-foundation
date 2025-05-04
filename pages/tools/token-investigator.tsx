import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function TokenInvestigatorRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to tools directory after 5 seconds
    const redirect = setTimeout(() => {
      router.push('/tools#token-analysis-tools')
    }, 5000)

    return () => clearTimeout(redirect)
  }, [router])

  return (
    <>
      <Head>
        <title>Tools Directory Update | Open Crypto Foundation</title>
        <meta name="description" content="Our token analysis tools have moved to our verified tools directory" />
      </Head>

      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">We've Changed Our Approach</h1>
            <p className="text-xl mb-8 text-gray-300">
              Instead of building our own tools, we now provide a curated directory of trusted third-party tools.
            </p>

            <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Why We Made This Change</h2>
              <p className="mb-4 text-gray-300">
                After careful consideration, we decided that pointing users to specialized, established tools is more valuable than creating our own versions.
              </p>
              <ul className="text-left list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>Existing specialized tools often have more features and frequent updates</li>
                <li>Our curation process helps you find the most reliable options</li>
                <li>Each tool is vetted for security and reliability by our team</li>
                <li>We can focus on providing education and context around using these tools</li>
              </ul>
            </div>

            <p className="mb-6 text-gray-300">
              You'll be redirected to our Tools Directory in 5 seconds, or you can click the button below.
            </p>

            <a 
              href="/tools#token-analysis-tools" 
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
            >
              Go to Tools Directory
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 