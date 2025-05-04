import React, { useState } from 'react';
import Head from 'next/head';
import { 
  FaExclamationTriangle, 
  FaCheckCircle, 
  FaLink, 
  FaUser, 
  FaTag,
  FaList,
  FaInfoCircle,
  FaDiscord,
  FaPaperPlane
} from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import ScrollToTop from '../components/ScrollToTop';

export default function ReportScam() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    category: '',
    description: '',
    contactMethod: 'discord',
    contactUsername: '',
    email: '',
    evidence: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scamCategories = [
    { id: '', name: 'Select a category' },
    { id: 'phishing', name: 'Phishing' },
    { id: 'fake-ico', name: 'Fake ICO/Token' },
    { id: 'ponzi', name: 'Ponzi Scheme' },
    { id: 'malware', name: 'Malware' },
    { id: 'fake-exchange', name: 'Fake Exchange' },
    { id: 'social-engineering', name: 'Social Engineering' },
    { id: 'rugpull', name: 'Rug Pull' },
    { id: 'honeypot', name: 'Honeypot' },
    { id: 'other', name: 'Other (Please specify in description)' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // In a real implementation, you'd send this data to your API endpoint
      // that would then email the report to info@opencryptofoundation.com
      // For now, we're just simulating this process
      
      console.log('Submitting report:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, you would use a real email service or form endpoint
      // const response = await fetch('/api/report-scam', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     recipient: 'info@opencryptofoundation.com'
      //   })
      // });
      
      // if (!response.ok) throw new Error('Failed to submit report');
      
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit your report. Please try again later.');
      console.error('Error submitting report:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Report a Scam | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Report cryptocurrency scams, phishing sites, and fraudulent projects to help protect the community." 
        />
      </Head>

      <ScrollToTop />

      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Report a <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Cryptocurrency Scam</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300 leading-relaxed">
              Help protect the crypto community by reporting scams, phishing sites, and fraudulent projects.
              Our team will review your submission and add it to our database.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaExclamationTriangle className="text-red-500 mr-3" />
                  Scam Report Form
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Scam Name */}
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center">
                        <FaTag className="mr-2 text-gray-400" />
                        Scam Name / Project Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the name of the scam or fraudulent project"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {/* URL / Address */}
                    <div>
                      <label htmlFor="url" className="block text-gray-300 mb-2 flex items-center">
                        <FaLink className="mr-2 text-gray-400" />
                        URL / Wallet Address
                      </label>
                      <input
                        type="text"
                        id="url"
                        name="url"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Website URL, Smart Contract Address, or Wallet Address"
                        value={formData.url}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {/* Category */}
                    <div>
                      <label htmlFor="category" className="block text-gray-300 mb-2 flex items-center">
                        <FaList className="mr-2 text-gray-400" />
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        {scamCategories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Description */}
                    <div>
                      <label htmlFor="description" className="block text-gray-300 mb-2 flex items-center">
                        <FaInfoCircle className="mr-2 text-gray-400" />
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe the scam in detail. Include how it operates, any red flags, and your experience if applicable."
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {/* Evidence */}
                    <div>
                      <label htmlFor="evidence" className="block text-gray-300 mb-2 flex items-center">
                        <FaInfoCircle className="mr-2 text-gray-400" />
                        Evidence (Optional)
                      </label>
                      <textarea
                        id="evidence"
                        name="evidence"
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Provide links to screenshots, transactions, or other evidence (one per line)"
                        value={formData.evidence}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {/* Contact Method */}
                    <div>
                      <p className="block text-gray-300 mb-2 flex items-center">
                        <FaUser className="mr-2 text-gray-400" />
                        Contact Information
                      </p>
                      <div className="bg-gray-700 border border-gray-600 rounded-md p-4">
                        <p className="text-gray-300 text-sm mb-3">
                          Please provide contact details so our team can reach out for additional information if needed.
                        </p>
                        
                        <div className="mb-4">
                          <label className="inline-flex items-center mr-4">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="discord"
                              checked={formData.contactMethod === 'discord'}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <FaDiscord className="mr-1 text-indigo-400" />
                            Discord
                          </label>
                          
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="telegram"
                              checked={formData.contactMethod === 'telegram'}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <SiTelegram className="mr-1 text-blue-400" />
                            Telegram
                          </label>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1">
                            <input
                              type="text"
                              id="contactUsername"
                              name="contactUsername"
                              required
                              className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder={formData.contactMethod === 'discord' ? 'Discord Username' : 'Telegram Username'}
                              value={formData.contactUsername}
                              onChange={handleChange}
                            />
                          </div>
                          
                          <div className="flex-1">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium flex items-center justify-center ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {submitting ? (
                          <>
                            <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-white rounded-full"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="mr-2" />
                            Submit Report
                          </>
                        )}
                      </button>
                    </div>
                    
                    {error && (
                      <div className="p-4 bg-red-900/30 border border-red-800 rounded-md text-red-200">
                        {error}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <FaCheckCircle className="text-green-400 text-4xl" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Report Submitted Successfully
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    Thank you for helping to protect the crypto community. Our team will review your submission and add it to our database if verified.
                  </p>
                  
                  <p className="text-md text-gray-400 mb-8">
                    If additional information is needed, we will contact you through your provided contact details.
                  </p>
                  
                  <div className="flex space-x-4">
                    <a href="/scam-database" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md">
                      Return to Scam Database
                    </a>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          url: '',
                          category: '',
                          description: '',
                          contactMethod: 'discord',
                          contactUsername: '',
                          email: '',
                          evidence: '',
                        });
                      }}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                    >
                      Submit Another Report
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="bg-gray-900 rounded-lg p-6 mt-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Important Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>All reports are confidential and reviewed by our security team.</li>
                <li>Only verified scams will be added to our public database.</li>
                <li>Please provide as much detail as possible to help with verification.</li>
                <li>We may contact you for additional information if needed.</li>
                <li>By submitting, you confirm this information is accurate to the best of your knowledge.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 