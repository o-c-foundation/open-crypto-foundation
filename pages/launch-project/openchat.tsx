import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaLock, FaUsers, FaWallet, FaGlobe, FaPaperPlane, FaShieldAlt, FaTerminal, FaQuestionCircle, FaTools, FaServer, FaEthereum, FaEnvelopeOpenText, FaRegHandshake, FaReact, FaCss3Alt, FaCheck } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';
import { BsFillChatDotsFill, BsShieldLockFill, BsEyeSlash } from 'react-icons/bs';
import { TbArrowsRandom } from 'react-icons/tb';
import { RiTestTubeFill } from 'react-icons/ri';
import Layout from '../../components/Layout';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

export default function OpenChatPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>OpenChat - Decentralized Messaging | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="A decentralized messaging platform for secure blockchain communication with direct messages and group chats on testnet networks." 
        />
      </Head>

      <main>
        {/* Hero section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark text-white animated-gradient-subtle">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block p-3 bg-primary/20 rounded-full">
                <BsFillChatDotsFill className="text-primary text-3xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OpenChat
              </h1>
              <p className="text-xl text-light-muted mb-8">
                A decentralized messaging platform built for EVM-compatible blockchains, with a focus on testnet networks. 
                OpenChat provides secure, on-chain messaging with a modern, intuitive interface.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://openchat.opencryptofoundation.com/" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <BsFillChatDotsFill className="mr-2" /> Try OpenChat
                </Link>
                <Link 
                  href="https://github.com/o-c-foundation/Open-Chat-" 
                  target="_blank"
                  className="px-8 py-4 bg-card-gradient hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </Link>
              </div>
              <div className="text-sm text-light-muted bg-dark-elevated p-3 rounded-md border border-primary/20 mt-4 max-w-3xl mx-auto">
                <p className="flex items-center justify-center"><RiTestTubeFill className="text-primary mr-2"/> <strong>Note:</strong> OpenChat currently operates exclusively on testnet networks. No real cryptocurrency is required to use the platform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is OpenChat section */}
        <section className="py-16 animated-gradient-light">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">What is OpenChat?</h2>
                  <p className="text-light-muted mb-4">
                    OpenChat is a decentralized messaging application that provides secure, on-chain communication for blockchain users. 
                    Unlike traditional messaging apps that store data on centralized servers, OpenChat leverages the security and transparency 
                    of blockchain technology to ensure your conversations are private, immutable, and resistant to censorship.
                  </p>
                  <p className="text-light-muted mb-4">
                    Built with a focus on testnet networks, OpenChat allows developers and users to experiment with blockchain messaging 
                    without incurring real cryptocurrency costs, making it an ideal platform for learning, testing, and development.
                  </p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Available Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaEnvelopeOpenText className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Direct Messaging</p>
                        <p className="text-sm text-light-muted">Send private messages to any blockchain address with end-to-end encryption</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaUsers className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Group Chats</p>
                        <p className="text-sm text-light-muted">Create and join group conversations with multiple participants</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <FaWallet className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">Session Wallet System</p>
                        <p className="text-sm text-light-muted">Interact without constant transaction confirmations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <BsShieldLockFill className="text-primary" />
                      </div>
                      <div>
                        <p className="text-light font-medium">On-Chain Security</p>
                        <p className="text-sm text-light-muted">Benefit from blockchain technology's inherent security properties</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 animated-gradient">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">How OpenChat Works</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">1</div>
                    </div>
                    <div className="bg-card-gradient rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Connect Your Wallet</h3>
                      <p className="text-light-muted">
                        Link your Web3 wallet (like MetaMask) to authenticate and establish your identity on the platform.
                      </p>
                    </div>
                  </div>
                
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">2</div>
                    </div>
                    <div className="bg-card-gradient rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Create a Session</h3>
                      <p className="text-light-muted">
                        Generate a temporary session for seamless messaging without approving each transaction.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">3</div>
                    </div>
                    <div className="bg-card-gradient rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">Start Messaging</h3>
                      <p className="text-light-muted">
                        Send direct messages to any wallet address or create group chats for team communication.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 md:flex-shrink-0 flex justify-center md:block">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-glow z-10">4</div>
                    </div>
                    <div className="bg-card-gradient rounded-xl p-6 border border-dark-light/30 shadow-lg ml-0 md:ml-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-white mb-4">On-Chain Storage</h3>
                      <p className="text-light-muted">
                        Messages are securely stored on the blockchain, ensuring permanence and censorship resistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testnet Only Information */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="bg-dark-elevated border border-primary/20 rounded-xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <RiTestTubeFill className="text-primary text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Testnet-Only Platform</h2>
                </div>
                <p className="text-light-muted">
                  OpenChat currently operates exclusively on blockchain testnets. This means:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaShieldAlt className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-light-muted">No real cryptocurrency is required to use the platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaRegHandshake className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-light-muted">Perfect for developers, testers, and early adopters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TbArrowsRandom className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-light-muted">Support for multiple testnet networks, including Ethereum testnets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaPaperPlane className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-light-muted">All data, including messages and user information, is stored on public test blockchains</span>
                  </li>
                </ul>
                <div className="bg-dark-card p-4 rounded-lg text-light-muted text-sm border border-dark-light">
                  <p className="font-bold text-white mb-1">Privacy Notice:</p>
                  <p>Since OpenChat operates on public testnets, all data is publicly visible. Do not share sensitive or personally identifiable information through the platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Stack</h2>
              <p className="text-light-muted text-center max-w-3xl mx-auto mb-10">
                OpenChat is built with modern web technologies and blockchain development tools to deliver a smooth, responsive experience:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <BiCodeCurly className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">Next.js 13</h3>
                  <p className="text-sm text-light-muted">App Router</p>
                </div>
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <FaReact className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">React</h3>
                  <p className="text-sm text-light-muted">UI Framework</p>
                </div>
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <FaTerminal className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">TypeScript</h3>
                  <p className="text-sm text-light-muted">Type Safety</p>
                </div>
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <FaCss3Alt className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">Tailwind CSS</h3>
                  <p className="text-sm text-light-muted">Styling</p>
                </div>
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <FaEthereum className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">Ethers.js</h3>
                  <p className="text-sm text-light-muted">Blockchain Interaction</p>
                </div>
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <FaWallet className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">Web3Modal</h3>
                  <p className="text-sm text-light-muted">Wallet Connection</p>
                </div>
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <FaServer className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">Liveblocks</h3>
                  <p className="text-sm text-light-muted">Real-time Collaboration</p>
                </div>
                <div className="bg-dark-card border border-dark-light rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <FaTools className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-medium text-white">Hardhat</h3>
                  <p className="text-sm text-light-muted">Smart Contract Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-dark-card border border-dark-light rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Is OpenChat completely free to use?</h3>
                    <p className="text-light-muted">
                      Yes, OpenChat is free to use as it operates on testnet networks. You'll only need testnet tokens, which have no real-world value and can be obtained from testnet faucets.
                    </p>
                  </div>
                  <div className="bg-dark-card border border-dark-light rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Do I need to create an account to use OpenChat?</h3>
                    <p className="text-light-muted">
                      No traditional account is required. Simply connect your Web3 wallet, and your wallet address serves as your identity on the platform.
                    </p>
                  </div>
                  <div className="bg-dark-card border border-dark-light rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Are my messages private?</h3>
                    <p className="text-light-muted">
                      While messages are secured through encryption, they are stored on public testnet blockchains. We recommend not sharing sensitive information through the platform.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-dark-card border border-dark-light rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Which wallets are supported?</h3>
                    <p className="text-light-muted">
                      OpenChat supports most popular Web3 wallets, including MetaMask, WalletConnect-compatible wallets, and other Ethereum-compatible browser extensions.
                    </p>
                  </div>
                  <div className="bg-dark-card border border-dark-light rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">What networks does OpenChat support?</h3>
                    <p className="text-light-muted">
                      Currently, OpenChat supports various Ethereum testnets. The platform will continue to expand support for additional EVM-compatible testnets in the future.
                    </p>
                  </div>
                  <div className="bg-dark-card border border-dark-light rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Are there plans for a mainnet version?</h3>
                    <p className="text-light-muted">
                      Yes, a mainnet version is part of our roadmap. Currently, we're focusing on testnet deployment to refine the platform and gather user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 rounded-xl p-8 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Get Started with OpenChat Today</h2>
                <p className="text-light-muted max-w-2xl mb-8">
                  Experience the future of decentralized communication. Connect your wallet, start chatting, and join the growing community of blockchain enthusiasts exploring secure, on-chain messaging.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="https://openchat.opencryptofoundation.com/" 
                    target="_blank"
                    className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                  >
                    <BsFillChatDotsFill className="mr-2" /> Try OpenChat
                  </Link>
                  <Link 
                    href="https://github.com/o-c-foundation/Open-Chat-" 
                    target="_blank"
                    className="px-8 py-4 bg-dark-card hover:bg-dark-elevated border border-primary/30 text-white rounded-lg transition-colors shadow-lg inline-flex items-center"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <NewsletterSubscribe 
                title="Stay Updated" 
                description="Subscribe to receive updates about OpenChat and other OCF tools."
              />
            </div>
          </div>
        </section>

        <ScrollToTop />
      </main>
    </div>
  );
}

// Custom layout for this page
OpenChatPage.getLayout = function getLayout(page) {
  return (
    <Layout 
      title="OpenChat - Decentralized Messaging | Open Crypto Foundation"
      description="A decentralized messaging platform for secure blockchain communication with direct messages and group chats on testnet networks."
    >
      {page}
    </Layout>
  );
}; 