import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaShieldAlt, FaNetworkWired, FaUsers, FaChartLine } from 'react-icons/fa';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';

const OpenLabs = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3f84ff,
          size: 1.50,
          backgroundColor: 0x0a0a1a,
          points: 12.00,
          maxDistance: 25.00,
          spacing: 20.00,
          showDots: true
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Head>
        <title>OpenLabs - Open Crypto Foundation</title>
        <meta name="description" content="OpenLabs - Leading the development and management of the OpenNet blockchain ecosystem" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div ref={vantaRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark z-10" />
        <div className="container mx-auto px-4 max-w-7xl relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                OpenLabs
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                The innovation engine behind OpenNet blockchain and ecosystem
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-dark/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-gray-300">
              As a subsidiary of the Open Crypto Foundation, OpenLabs is dedicated to advancing blockchain technology through research, development, and implementation of the OpenNet ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-primary/30"
            >
              <FaRocket className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-300">
                Pushing the boundaries of blockchain technology through continuous research and development.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-primary/30"
            >
              <FaCode className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Development</h3>
              <p className="text-gray-300">
                Building robust and scalable solutions for the OpenNet ecosystem.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-primary/30"
            >
              <FaShieldAlt className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Security</h3>
              <p className="text-gray-300">
                Ensuring the highest standards of security and reliability in all our solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OpenNet Ecosystem Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">OpenNet Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive blockchain platform designed for scalability, security, and interoperability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <FaNetworkWired className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Network Architecture</h3>
                  <p className="text-gray-300">
                    Advanced consensus mechanisms and network protocols for optimal performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaUsers className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Community Governance</h3>
                  <p className="text-gray-300">
                    Decentralized decision-making through community-driven governance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaChartLine className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Scalability Solutions</h3>
                  <p className="text-gray-300">
                    Innovative scaling solutions to handle growing network demands.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-primary/30 rounded-full animate-pulse" />
                <div className="absolute w-48 h-48 border-2 border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-32 h-32 border-2 border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dark/50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Join the OpenNet Revolution</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of blockchain technology. Contribute, build, and grow with OpenLabs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/whitepaper" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium">
                Read Documentation
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium">
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OpenLabs; 