import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLock, FaUsers, FaWallet, FaGlobe, FaPaperPlane, FaShieldAlt, FaTerminal, FaQuestionCircle, FaTools, FaServer, FaEthereum, FaEnvelopeOpenText, FaRegHandshake } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';
import { BsFillChatDotsFill, BsShieldLockFill, BsEyeSlash } from 'react-icons/bs';
import { TbArrowsRandom } from 'react-icons/tb';
import { RiTestTubeFill } from 'react-icons/ri';
import { ProjectLayout } from '../../layouts/ProjectLayout';
import { Hero } from '../../components/sections/Hero';
import { FAQ } from '../../components/sections/FAQ';
import { Button } from '../../components/ui/Button';
import { HowItWorks } from '../../components/sections/HowItWorks';
import { CtaBox } from '../../components/sections/CtaBox';
import { FeatureBox } from '../../components/ui/FeatureBox';
import { NextPageWithLayout } from '../_app';
import { Newsletter } from '../../components/sections/Newsletter';

export default function OpenChatPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Hero section */}
        <div className="py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">OpenChat</h1>
            <p className="text-xl text-light-muted">
              A decentralized messaging platform built for EVM-compatible blockchains, with a focus on testnet networks. 
              OpenChat provides secure, on-chain messaging with a modern, intuitive interface.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                href="https://openchat.opencryptofoundation.com/" 
                target="_blank"
                className="flex items-center"
                size="lg"
              >
                <BsFillChatDotsFill className="mr-2" /> Try OpenChat
              </Button>
              <Button 
                href="https://github.com/o-c-foundation/Open-Chat-" 
                target="_blank"
                variant="outline"
                className="flex items-center"
                size="lg"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </Button>
            </div>
            <div className="text-sm text-light-muted bg-dark-elevated p-3 rounded-md border border-primary/20 mt-4">
              <p className="flex items-center"><RiTestTubeFill className="text-primary mr-2"/> <strong>Note:</strong> OpenChat currently operates exclusively on testnet networks. No real cryptocurrency is required to use the platform.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-75"></div>
              <div className="relative bg-dark-card border border-dark-light rounded-xl overflow-hidden p-1">
                <img 
                  src="/images/openchat-preview.png" 
                  alt="OpenChat Interface Preview" 
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/1a1e2d/4f56ff?text=OpenChat+Preview";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* What is OpenChat section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">What is OpenChat?</h2>
          <p className="text-light-muted text-lg">
            OpenChat is a decentralized messaging application that provides secure, on-chain communication for blockchain users. 
            Unlike traditional messaging apps that store data on centralized servers, OpenChat leverages the security and transparency 
            of blockchain technology to ensure your conversations are private, immutable, and resistant to censorship.
          </p>
          <p className="text-light-muted text-lg">
            Built with a focus on testnet networks, OpenChat allows developers and users to experiment with blockchain messaging 
            without incurring real cryptocurrency costs, making it an ideal platform for learning, testing, and development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureBox 
              icon={<FaEnvelopeOpenText className="text-primary text-2xl" />}
              title="Direct Messaging"
              description="Send private messages to any blockchain address with end-to-end encryption, ensuring only the intended recipient can read your messages."
            />
            <FeatureBox 
              icon={<FaUsers className="text-primary text-2xl" />}
              title="Group Chats"
              description="Create and join group conversations with multiple participants, making it easy to collaborate with teams, communities, or friends."
            />
            <FeatureBox 
              icon={<FaWallet className="text-primary text-2xl" />}
              title="Session Wallet System"
              description="Interact with the platform without constant transaction confirmations, providing a smooth user experience while maintaining security."
            />
            <FeatureBox 
              icon={<FaGlobe className="text-primary text-2xl" />}
              title="Multi-Network Support"
              description="Connect to various testnet networks, allowing you to choose the blockchain environment that best suits your needs."
            />
            <FeatureBox 
              icon={<BsShieldLockFill className="text-primary text-2xl" />}
              title="On-Chain Security"
              description="Benefit from the inherent security of blockchain technology, with messages stored on-chain for maximum privacy and reliability."
            />
            <FeatureBox 
              icon={<BsEyeSlash className="text-primary text-2xl" />}
              title="Privacy-Focused"
              description="Communicate with confidence knowing your messages are protected by strong cryptography and decentralized storage."
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How OpenChat Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Connect Your Wallet</h3>
                    <p className="text-light-muted">Link your Web3 wallet (like MetaMask) to authenticate and establish your identity on the platform.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Create a Session</h3>
                    <p className="text-light-muted">Generate a temporary session for seamless messaging without approving each transaction.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Start Messaging</h3>
                    <p className="text-light-muted">Send direct messages to any wallet address or create group chats for team communication.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-white text-lg">On-Chain Storage</h3>
                    <p className="text-light-muted">Messages are securely stored on the blockchain, ensuring permanence and censorship resistance.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-xl blur-lg opacity-75"></div>
                <div className="relative bg-dark-card border border-dark-light rounded-xl overflow-hidden p-2">
                  <img 
                    src="/images/openchat-flow.png" 
                    alt="OpenChat Workflow" 
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/1a1e2d/4f56ff?text=OpenChat+Workflow";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testnet Only Information */}
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

        {/* Technology Stack */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Technology Stack</h2>
          <p className="text-light-muted text-center max-w-3xl mx-auto">
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

        {/* FAQ Section */}
        <div className="space-y-8">
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

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 rounded-xl p-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get Started with OpenChat Today</h2>
          <p className="text-light-muted max-w-2xl mb-8">
            Experience the future of decentralized communication. Connect your wallet, start chatting, and join the growing community of blockchain enthusiasts exploring secure, on-chain messaging.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              href="https://openchat.opencryptofoundation.com/" 
              target="_blank"
              className="flex items-center"
              size="lg"
            >
              <BsFillChatDotsFill className="mr-2" /> Try OpenChat
            </Button>
            <Button 
              href="https://github.com/o-c-foundation/Open-Chat-" 
              target="_blank"
              variant="outline"
              className="flex items-center"
              size="lg"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <Newsletter 
          title="Stay Updated" 
          description="Subscribe to receive updates about OpenChat and other OCF tools."
        />
      </div>
    </>
  );
}

// Custom layout for this page
OpenChatPage.getLayout = function getLayout(page) {
  return (
    <ProjectLayout
      title="OpenChat - Decentralized Messaging | Open Crypto Foundation"
      description="A decentralized messaging platform for secure blockchain communication with direct messages and group chats on testnet networks."
    >
      {page}
    </ProjectLayout>
  );
};

// Fix for missing FaReact and FaCss3Alt icons
import { FaReact, FaCss3Alt } from 'react-icons/fa'; 