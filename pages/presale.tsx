import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaCoins, FaInfoCircle, FaClock, FaLock, FaRocket, FaWallet, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ScrollToTop from '../components/ScrollToTop';
import PresalePurchaseForm from '../components/PresalePurchaseForm';
import { useConnection } from '@solana/wallet-adapter-react';
import { PRESALE_CONFIG, getPresaleStatus } from '../utils/presaleContract';

// Presale steps
const presaleSteps = [
  {
    id: 1,
    title: "Get a Solana Wallet",
    icon: <FaWallet size={24} />,
    description: "Set up and fund a Solana wallet like Phantom, Solflare, or another Solana-compatible wallet.",
    link: { text: "Wallet Guide", url: "/resources/wallet-guide" }
  },
  {
    id: 2,
    title: "Connect Your Wallet",
    icon: <FaLock size={24} />,
    description: "Visit our presale dApp and securely connect your Solana wallet.",
    link: { text: "Launch dApp", url: "#presale-form" }
  },
  {
    id: 3,
    title: "Purchase Allocation Tickets",
    icon: <FaClock size={24} />,
    description: "During the presale phase, you can purchase allocation tickets that guarantee your ability to buy tokens.",
    link: { text: "How Allocation Works", url: "#allocation-info" }
  },
  {
    id: 4,
    title: "Claim Your Tokens",
    icon: <FaCoins size={24} />,
    description: "After the presale concludes, return to claim your OCF tokens using your allocation tickets.",
    link: { text: "About Token Distribution", url: "#distribution" }
  }
];

// FAQs about the presale
const presaleFAQs = [
  {
    question: "What is the OCF token?",
    answer: "OCF is the governance and utility token of the Open Crypto Foundation ecosystem. It enables holders to participate in governance, access premium features, and support the foundation's mission of making DeFi safer and more accessible."
  },
  {
    question: "Why are we conducting a presale?",
    answer: "The presale allows us to fairly distribute tokens to our early supporters while raising funds for development, security audits, and ecosystem growth. Presale participants get tokens at a discounted rate compared to the public sale."
  },
  {
    question: "How do allocation tickets work?",
    answer: "Allocation tickets reserve your right to purchase a specific amount of OCF tokens. You can buy these tickets during the presale window and then exchange them for actual tokens after the presale concludes."
  },
  {
    question: "Is there a vesting period?",
    answer: `Presale participants will receive ${PRESALE_CONFIG.vestingPercentageImmediate}% of their tokens immediately after the presale concludes, with the remaining ${100 - PRESALE_CONFIG.vestingPercentageImmediate}% vested linearly over ${PRESALE_CONFIG.vestingDurationMonths} months to ensure price stability.`
  },
  {
    question: "How is the presale smart contract secured?",
    answer: "Our presale contract is built on the Solana blockchain using the Anchor framework. The contract has undergone thorough testing and auditing by security professionals to ensure the safety of participants' funds."
  },
  {
    question: "What happens if the softcap isn't reached?",
    answer: `If the presale doesn't reach its softcap of $${PRESALE_CONFIG.softCapUSD.toLocaleString()}, participants will be able to reclaim their SOL. However, we are confident in reaching our goals given the community interest in our mission.`
  }
];

export default function PresalePage() {
  const { connection } = useConnection();
  const [daysLeft, setDaysLeft] = useState<number>(30);
  const [hoursLeft, setHoursLeft] = useState<number>(0);
  const [isPreSaleActive, setIsPreSaleActive] = useState<boolean>(false);
  const [presaleStatus, setPresaleStatus] = useState({
    totalRaised: 0,
    participantCount: 0,
    percentageRaised: 0,
    hardCapReached: false
  });

  // Calculate time left in presale
  useEffect(() => {
    const calculateTimeLeft = () => {
      const presaleStartTime = PRESALE_CONFIG.presaleStartTime;
      const presaleEndTime = PRESALE_CONFIG.presaleEndTime;
      const now = Date.now();
      
      // If presale hasn't started yet
      if (now < presaleStartTime) {
        const diffTime = Math.abs(presaleStartTime - now);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        setDaysLeft(diffDays);
        setHoursLeft(diffHours);
        setIsPreSaleActive(false);
      }
      // If presale is active
      else if (now >= presaleStartTime && now <= presaleEndTime) {
        const diffTime = Math.abs(presaleEndTime - now);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        setDaysLeft(diffDays);
        setHoursLeft(diffHours);
        setIsPreSaleActive(true);
      }
      // If presale has ended
      else {
        setDaysLeft(0);
        setHoursLeft(0);
        setIsPreSaleActive(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Fetch presale status
  useEffect(() => {
    const fetchPresaleStatus = async () => {
      try {
        const status = await getPresaleStatus(connection);
        setPresaleStatus({
          totalRaised: status.totalRaised,
          participantCount: status.participantCount,
          percentageRaised: (status.totalRaised / PRESALE_CONFIG.hardCapUSD) * 100,
          hardCapReached: status.hardCapReached
        });
        setIsPreSaleActive(status.isActive);
      } catch (error) {
        console.error('Error fetching presale status:', error);
      }
    };

    fetchPresaleStatus();
    const intervalId = setInterval(fetchPresaleStatus, 30000); // Update every 30 seconds

    return () => clearInterval(intervalId);
  }, [connection]);

  return (
    <>
      <Head>
        <title>OCF Token Presale | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Participate in the Open Crypto Foundation token presale. Early access to OCF tokens at a discounted price, built on Solana for security and transparency." 
        />
      </Head>

      <main className="min-h-screen bg-dark">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="relative h-24 w-24">
                  <Image
                    src="https://bafkreidnf7j4gen5gwgnqxmi3fcprksdmorptbdenb4q76ejbpgbjqkzqq.ipfs.w3s.link/"
                    alt="OCF Token"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OCF Token Presale
              </h1>
              <p className="text-xl text-light-muted mb-8">
                Early access to the Open Crypto Foundation governance and utility token at a discounted price.
                Secure, transparent, and built on Solana.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-dark-card border border-primary/30 rounded-lg px-6 py-4 w-full md:w-auto">
                  <div className="text-sm text-light-muted mb-1">Presale Price</div>
                  <div className="text-2xl font-bold text-primary">${PRESALE_CONFIG.tokenPrice} USD</div>
                </div>
                <div className="bg-dark-card border border-dark-light/30 rounded-lg px-6 py-4 w-full md:w-auto">
                  <div className="text-sm text-light-muted mb-1">Public Price</div>
                  <div className="text-2xl font-bold text-white">${PRESALE_CONFIG.tokenPrice * 2} USD</div>
                </div>
                <div className="bg-dark-card border border-dark-light/30 rounded-lg px-6 py-4 w-full md:w-auto">
                  <div className="text-sm text-light-muted mb-1">Discount</div>
                  <div className="text-2xl font-bold text-white">50%</div>
                </div>
              </div>
              
              <div className="bg-dark-card border border-primary/20 rounded-lg p-6 mb-8">
                <div className="text-center mb-4">
                  {isPreSaleActive ? (
                    <>
                      <div className="text-light-muted mb-2">Presale Live!</div>
                      <div className="text-2xl text-white font-bold">Ends in {daysLeft}d {hoursLeft}h</div>
                    </>
                  ) : (
                    <>
                      <div className="text-light-muted mb-2">Presale Starts In</div>
                      <div className="text-2xl text-white font-bold">{daysLeft}d {hoursLeft}h</div>
                    </>
                  )}
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-light-muted text-sm">Soft Cap</span>
                  <span className="text-light-muted text-sm">Hard Cap</span>
                </div>
                <div className="w-full bg-dark-light rounded-full h-2.5 mb-1">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${Math.min(presaleStatus.percentageRaised, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-light-muted text-sm">${PRESALE_CONFIG.softCapUSD.toLocaleString()}</span>
                  <span className="text-light-muted text-sm">${PRESALE_CONFIG.hardCapUSD.toLocaleString()}</span>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-primary font-bold text-lg">
                    ${presaleStatus.totalRaised.toLocaleString()} / ${PRESALE_CONFIG.hardCapUSD.toLocaleString()} raised
                  </div>
                  <div className="text-light-muted text-sm mt-1">
                    {presaleStatus.participantCount} participants
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#presale-form" 
                  className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-all duration-300 flex items-center"
                >
                  Participate Now <FaArrowRight className="ml-2" />
                </a>
                <a 
                  href="https://github.com/web3batman/Solana-Presale-Smart-Contract" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-transparent border border-light-faded/20 text-light-muted hover:text-white hover:border-light-faded/50 rounded-lg transition-all duration-300 flex items-center"
                >
                  View Contract <FaExternalLinkAlt className="ml-2" size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">How to Participate</h2>
                <p className="text-light-muted">Complete these steps to participate in the OCF token presale</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {presaleSteps.map((step) => (
                  <div key={step.id} className="bg-dark-card border border-dark-light/30 rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-light-muted mb-4">{step.description}</p>
                    <Link href={step.link.url} className="text-primary hover:text-primary-light inline-flex items-center text-sm">
                      {step.link.text} <FaArrowRight className="ml-1" size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Presale Form Section */}
        <section id="presale-form" className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <PresalePurchaseForm />
            </div>
          </div>
        </section>
        
        {/* Token Distribution Section */}
        <section id="distribution" className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Token Distribution</h2>
                <p className="text-light-muted">OCF token allocation across different categories</p>
              </div>
              
              <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6 mb-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { category: "Presale", percentage: 30, description: "Available at discounted rate during presale" },
                    { category: "Public Sale", percentage: 20, description: "Available at market price after presale" },
                    { category: "Team", percentage: 15, description: "Locked for 12 months, then vested over 24 months" },
                    { category: "Development", percentage: 20, description: "For ongoing development and ecosystem growth" },
                    { category: "Community", percentage: 10, description: "Rewards, airdrops, and community initiatives" },
                    { category: "Reserve", percentage: 5, description: "Strategic partnerships and future expansion" }
                  ].map((item, index) => (
                    <div key={index} className="bg-dark-light/10 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 text-sm font-bold">
                          {item.percentage}%
                        </div>
                        <h3 className="text-lg font-medium text-white">{item.category}</h3>
                      </div>
                      <p className="text-light-muted text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg">
                <div className="flex items-start">
                  <FaInfoCircle className="text-primary mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Token Vesting Information</h3>
                    <p className="text-light-muted mb-2">
                      Presale participants will receive {PRESALE_CONFIG.vestingPercentageImmediate}% of their purchased tokens immediately after the presale concludes. 
                      The remaining {100 - PRESALE_CONFIG.vestingPercentageImmediate}% will be vested linearly over {PRESALE_CONFIG.vestingDurationMonths} months to ensure price stability and project sustainability.
                    </p>
                    <p className="text-light-muted">
                      Team tokens are locked for 12 months, then vested over 24 months to demonstrate our long-term commitment to the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Smart Contract Details Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Smart Contract Details</h2>
                <p className="text-light-muted">Built on Solana for speed, security, and transparency</p>
              </div>
              
              <div className="bg-dark-card border border-dark-light/30 rounded-lg p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/2">
                    <h3 className="text-lg font-medium text-white mb-4">Contract Information</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-light-muted mb-1">Contract Address</div>
                        <div className="bg-dark-light/20 p-3 rounded-lg flex items-center justify-between">
                          <div className="text-light-muted text-sm truncate">{process.env.NEXT_PUBLIC_PRESALE_PROGRAM_ID || 'Contract will be deployed soon'}</div>
                          <button className="text-primary hover:text-primary-light">
                            <FaExternalLinkAlt size={14} />
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-light-muted mb-1">Platform</div>
                        <div className="font-medium text-white">Solana</div>
                      </div>
                      <div>
                        <div className="text-sm text-light-muted mb-1">Token Standard</div>
                        <div className="font-medium text-white">SPL Token</div>
                      </div>
                      <div>
                        <div className="text-sm text-light-muted mb-1">Block Explorers</div>
                        <div className="space-y-2">
                          <a 
                            href={`https://solscan.io/token/${process.env.NEXT_PUBLIC_TOKEN_MINT || 'coming-soon'}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:text-primary-light"
                          >
                            Solscan <FaExternalLinkAlt size={12} className="ml-2" />
                          </a>
                          <a 
                            href={`https://explorer.solana.com/address/${process.env.NEXT_PUBLIC_PRESALE_PROGRAM_ID || 'coming-soon'}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:text-primary-light"
                          >
                            Solana Explorer <FaExternalLinkAlt size={12} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <h3 className="text-lg font-medium text-white mb-4">Contract Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 text-primary">
                          <FaCheck size={16} />
                        </div>
                        <span className="text-light-muted">Secure token allocation mechanism</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 text-primary">
                          <FaCheck size={16} />
                        </div>
                        <span className="text-light-muted">Configurable presale/public sale timeframes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 text-primary">
                          <FaCheck size={16} />
                        </div>
                        <span className="text-light-muted">Fair distribution using allocation tickets</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 text-primary">
                          <FaCheck size={16} />
                        </div>
                        <span className="text-light-muted">Automatic refunds if softcap not reached</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 text-primary">
                          <FaCheck size={16} />
                        </div>
                        <span className="text-light-muted">Built using Anchor framework for enhanced security</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 text-primary">
                          <FaCheck size={16} />
                        </div>
                        <span className="text-light-muted">Audited code with publicly verifiable deployment</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <a 
                        href="https://github.com/web3batman/Solana-Presale-Smart-Contract" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-primary-light inline-flex items-center"
                      >
                        View Source Code on GitHub <FaExternalLinkAlt size={12} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-light-muted">Common questions about the OCF token presale</p>
              </div>
              
              <div className="space-y-6">
                {presaleFAQs.map((faq, index) => (
                  <div key={index} className="bg-dark-card border border-dark-light/30 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-white mb-3">{faq.question}</h3>
                    <p className="text-light-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-light-muted mb-4">Have more questions? We're here to help!</p>
                <a 
                  href="mailto:presale@opencryptofoundation.com" 
                  className="inline-flex items-center text-primary hover:text-primary-light"
                >
                  Contact Our Presale Team <FaArrowRight className="ml-2" size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-dark-light/10">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Stay Updated on the Presale</h2>
                <p className="text-light-muted">Get notified about important presale updates and announcements</p>
              </div>
              <NewsletterSubscribe />
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </>
  );
} 