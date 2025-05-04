import React, { useState } from 'react';
import Head from 'next/head';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      // Here you would integrate with your email service
      // This is a placeholder for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Open Crypto Foundation</title>
        <meta name="description" content="Get in touch with the Open Crypto Foundation team for support, inquiries, or partnership opportunities." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-light-muted max-w-3xl mx-auto">
            We're here to help. Reach out to us through any of our contact channels or fill out the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-dark-card rounded-xl p-6 border border-dark-light">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-light-muted">
                    Foundation: <a href="mailto:Info@opencryptofoundation.com" className="text-primary hover:text-primary-light">Info@opencryptofoundation.com</a>
                  </p>
                  <p className="text-light-muted">
                    Exchange: <a href="mailto:user-support@openexchange.site" className="text-primary hover:text-primary-light">user-support@openexchange.site</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-light-muted">801 Brickell Ave, Miami, FL</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-primary mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Hours of Operation</h3>
                  <p className="text-light-muted">8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaHeadset className="text-primary mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Customer Support</h3>
                  <p className="text-light-muted">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card rounded-xl p-6 border border-dark-light">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-light-muted mb-4">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-muted mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-elevated border border-dark-light rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-muted mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-elevated border border-dark-light rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-light-muted mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-elevated border border-dark-light rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-light-muted mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-elevated border border-dark-light rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-muted mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-dark-elevated border border-dark-light rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
} 