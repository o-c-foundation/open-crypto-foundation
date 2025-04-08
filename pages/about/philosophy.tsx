import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Head from 'next/head';

const PhilosophyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Philosophy | Crypto Security Project</title>
        <meta name="description" content="Learn about the philosophy and values behind our crypto security project" />
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Philosophy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Foundation Principles</h2>
              <p className="mb-4">
                At the core of our mission lies a steadfast commitment to building a more secure and equitable digital economy. 
                We believe that blockchain technology and cryptocurrencies represent a paradigm shift in how value is created, 
                stored, and exchanged—but only if security, education, and accessibility are prioritized.
              </p>
              <p className="mb-4">
                Our philosophy is rooted in the belief that true innovation must be coupled with responsibility. 
                As the crypto ecosystem evolves, we stand firm in our conviction that security should never be 
                an afterthought but rather a foundational element upon which all else is built.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Guiding Values</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-3">Security as a Right</h3>
                <p>
                  We believe that every participant in the crypto ecosystem has a fundamental right to security. 
                  Through our tools, resources, and community initiatives, we strive to make robust security 
                  practices accessible to everyone, regardless of technical expertise or economic status.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-3">Education Empowers</h3>
                <p>
                  Knowledge is the most powerful defense against threats in the digital realm. 
                  We are committed to demystifying complex security concepts and providing clear, 
                  actionable guidance that empowers individuals to protect their digital assets.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-3">Transparency Builds Trust</h3>
                <p>
                  In an industry often plagued by opacity, we champion radical transparency. 
                  From our code to our communications, we believe in being open, honest, and accountable.
                  This transparency extends to how we develop our tools and how we communicate risks to our community.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-3">Community-Centric Approach</h3>
                <p>
                  We recognize that the strength of our project lies in the diversity and engagement of our community. 
                  By fostering an inclusive environment where all voices are valued, we create solutions that 
                  address real-world needs and challenges faced by crypto users worldwide.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Vision for the Future</h2>
              <p className="mb-4">
                We envision a future where blockchain technology fulfills its promise of democratizing finance 
                and creating more equitable economic systems. A future where individuals can participate in 
                the digital economy without fear of scams, hacks, or exploitation.
              </p>
              <p className="mb-4">
                Through our ongoing commitment to security innovation, education, and community building, 
                we aim to be catalysts for this future—creating the tools, resources, and knowledge base 
                that will help the crypto ecosystem mature into a safer space for all participants.
              </p>
              <p className="mb-4">
                As we move forward, we remain adaptable and responsive to the evolving landscape of threats 
                and opportunities, always guided by our core philosophy: that security is not merely a feature 
                but the foundation upon which the promise of cryptocurrency will be realized.
              </p>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PhilosophyPage; 