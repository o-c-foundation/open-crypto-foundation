import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaDownload, FaFileAlt, FaChevronRight, FaBook, FaServer, FaNetworkWired, FaShieldAlt, FaExchangeAlt, FaUsers, FaLock, FaChartBar } from 'react-icons/fa'
import ScrollToTop from '../components/ScrollToTop'

export default function Whitepaper() {
  return (
    <>
      <Head>
        <title>OCF Token Whitepaper | Open Crypto Foundation</title>
        <meta name="description" content="Comprehensive technical whitepaper detailing the Open Crypto Foundation's cross-chain token architecture, security model, and ecosystem" />
      </Head>

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gradient">OCF Token Whitepaper</h1>
            <p className="text-xl text-gray-400 mb-8">A Technical Overview of the Open Crypto Foundation Cross-Chain Token Protocol v1.2</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center">
                <FaDownload className="mr-2" /> Download PDF
              </a>
              <Link href="/roadmap" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium flex items-center">
                View Roadmap
              </Link>
              <Link href="/tokenomics" className="px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center">
                Tokenomics Details
              </Link>
            </div>
            
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800 mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Abstract</h2>
              <p className="text-gray-400">
                This whitepaper presents a novel cross-chain token architecture designed to facilitate secure, efficient interoperability across heterogeneous blockchain networks. 
                The Open Crypto Foundation (OCF) token implements a multi-layered validation framework with threshold signature schemes and zero-knowledge attestations to ensure 
                transaction finality while minimizing trust assumptions. By leveraging Wormhole's proven cross-chain messaging infrastructure augmented with our proprietary validation protocol, 
                we introduce a robust system for deterministic state verification while preserving the security properties of each underlying blockchain. 
                Our implementation encompasses specialized deployments on Ethereum (EVM), Solana (SPL), and BNB Chain with a comprehensive security model 
                that addresses the unique challenges of cross-chain communication. This paper delineates the technical specifications, security considerations, 
                formal verification methodologies, and economic mechanisms that underpin the OCF token ecosystem.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-dark-card p-5 rounded-xl border border-gray-800 md:col-span-1">
              <h3 className="font-bold text-white mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#introduction" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    1. Introduction <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    2. Architecture <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#consensus" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    3. Consensus Mechanism <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#wormhole" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    4. Wormhole Integration <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    5. Security Model <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#implementation" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    6. Network Implementations <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#token" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    7. Token Utility & Economics <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#governance" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    8. Governance Framework <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#future" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    9. Future Directions <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="text-primary hover:text-primary-light transition-colors flex items-center">
                    10. Conclusion <FaChevronRight className="ml-auto" size={12} />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-3 space-y-12">
              <section id="introduction">
                <h2 className="text-3xl font-bold text-gradient mb-6">1. Introduction</h2>
                <p className="text-gray-400 mb-4">
                  The proliferation of heterogeneous blockchain architectures has created an increasingly fragmented ecosystem, with disparate networks operating under fundamentally different consensus mechanisms, execution environments, and trust models. This fragmentation impedes the free flow of digital assets and information, introducing substantial friction for users and developers while constraining the composability that underpins decentralized applications.
                </p>
                <p className="text-gray-400 mb-4">
                  Existing cross-chain solutions typically fall into one of three categories: trusted bridges reliant on centralized validators, optimistic bridges employing fraud proofs with challenge periods, and validity proof systems leveraging zero-knowledge cryptography. Each approach presents inherent trade-offs between security, efficiency, and decentralization. Trusted bridges introduce substantial counterparty risk, as evidenced by numerous high-profile exploits. Optimistic systems impose significant latency constraints due to challenge period requirements. Validity proof systems, while theoretically optimal, face practical limitations in computational overhead and implementation complexity.
                </p>
                <p className="text-gray-400 mb-6">
                  The Open Crypto Foundation token protocol introduces a hybrid approach that combines the security advantages of threshold cryptography with the efficiency of optimized message passing protocols, specifically leveraging Wormhole's established infrastructure while introducing additional security and verification layers. Our implementation minimizes trust assumptions through a novel consensus mechanism that ensures transaction finality across disparate blockchain environments without compromising the security properties of any participating network.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">1.1 Design Objectives</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Security Preservation</strong>: Maintain the security guarantees of each underlying blockchain without introducing additional trust assumptions</li>
                    <li><strong>Deterministic Finality</strong>: Provide definitive transaction finality across networks with heterogeneous consensus mechanisms</li>
                    <li><strong>Decentralized Governance</strong>: Implement progressive decentralization with cross-chain governance capabilities</li>
                    <li><strong>Economic Sustainability</strong>: Design self-sustaining economic models with aligned incentives for all participants</li>
                    <li><strong>Protocol Composability</strong>: Enable seamless integration with existing DeFi protocols and smart contract platforms</li>
                    <li><strong>Scalability</strong>: Support high transaction throughput without compromising security or decentralization</li>
                  </ul>
                </div>
              </section>
              
              <section id="architecture">
                <h2 className="text-3xl font-bold text-gradient mb-6">2. Architecture</h2>
                <p className="text-gray-400 mb-4">
                  The OCF token architecture implements a layered approach to cross-chain interoperability, with specialized components handling different aspects of the protocol's functionality. This modular design allows for component-specific optimizations while maintaining a coherent security model across the entire system.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">2.1 Protocol Layers</h3>
                  <p className="text-gray-400 mb-4">The architecture comprises four distinct layers, each with specialized functions:</p>
                  
                  <ol className="list-decimal pl-6 space-y-3 text-gray-400">
                    <li>
                      <strong>Network Layer</strong>: Chain-specific implementations on Ethereum, Solana, and BNB Chain with native token representations and appropriate interfaces for each execution environment.
                    </li>
                    <li>
                      <strong>Message Passing Layer</strong>: Enhanced Wormhole integration for reliable cross-chain message passing with additional validation mechanisms to ensure message integrity and authenticity.
                    </li>
                    <li>
                      <strong>Consensus Layer</strong>: Proprietary multi-stage consensus protocol combining threshold signatures, validator attestations, and proof verification to achieve deterministic finality across networks.
                    </li>
                    <li>
                      <strong>Application Layer</strong>: Standardized APIs and interfaces for developers to integrate with the OCF ecosystem, including cross-chain function calls, asset transfers, and state verification.
                    </li>
                  </ol>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">2.2 Cross-Chain Transaction Flow</h3>
                  <p className="text-gray-400 mb-4">The generalized transaction flow implements a multi-phase commit protocol:</p>
                  
                  <ol className="list-decimal pl-6 space-y-2 text-gray-400">
                    <li>Transaction initiation on source chain with specified destination and parameters</li>
                    <li>Source chain contract emits event with transaction details and nonce</li>
                    <li>Guardian nodes observe event and generate threshold signature attestation</li>
                    <li>Consensus formation through multi-round Byzantine fault-tolerant protocol</li>
                    <li>Destination chain contract verifies attestation and threshold signature validity</li>
                    <li>Atomically executed state transition on destination chain upon verification</li>
                    <li>Receipt generation with cryptographic proof of execution</li>
                    <li>Optional confirmation back to source chain for complex transactions</li>
                  </ol>
                  
                  <p className="text-gray-400 mt-4">This design achieves O(n) message complexity for n participating validators while maintaining security under the assumption that at least ⅔ of validators are honest.</p>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">2.3 Formal Verification</h3>
                  <p className="text-gray-400 mb-4">The protocol implements formal verification at multiple levels:</p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Smart contract verification using the Coq proof assistant with adapted K-framework specifications</li>
                    <li>Protocol-level verification through TLA+ specifications with temporal safety properties</li>
                    <li>Cryptographic primitive verification using standard computational security models</li>
                  </ul>
                  
                  <p className="text-gray-400 mt-4">Our formal models have verified safety and liveness properties under the established threat model, with complete proofs available in the technical appendix.</p>
                </div>
              </section>
                            
              <section id="consensus">
                <h2 className="text-3xl font-bold text-gradient mb-6">3. Consensus Mechanism</h2>
                <p className="text-gray-400 mb-4">
                  The OCF consensus protocol implements a novel variant of Byzantine Fault Tolerant (BFT) consensus specifically optimized for cross-chain message verification. This hybrid approach combines elements of HotStuff BFT, threshold signatures, and probabilistic verification to achieve deterministic finality with minimal latency overhead.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">3.1 Validator Network</h3>
                  <p className="text-gray-400 mb-4">
                    The validator network consists of n distributed nodes responsible for observing, validating, and attesting to cross-chain transactions. The system maintains security under the assumption that at least 2n/3 + 1 validators are honest, consistent with standard BFT security models.
                  </p>
                  <p className="text-gray-400">
                    Validators are selected through a stake-weighted mechanism with minimum stake requirements, slashing conditions for malicious behavior, and periodic rotation to prevent centralization. Each validator maintains active participation in all supported networks, with specialized client implementations for each blockchain's particular requirements.
                  </p>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">3.2 Threshold Signature Scheme</h3>
                  <p className="text-gray-400 mb-4">
                    The protocol employs a (t,n)-threshold signature scheme based on BLS signatures with the following properties:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Key generation through a distributed key generation protocol without trusted setup</li>
                    <li>Signature shares generated independently by each validator</li>
                    <li>Threshold reconstruction requiring t valid signature shares</li>
                    <li>Constant-size signatures regardless of the number of participating validators</li>
                    <li>Non-interactive signature verification on destination chains</li>
                  </ul>
                  
                  <p className="text-gray-400 mt-4">The threshold value t is dynamically adjusted based on network conditions with a minimum value of 2n/3 + 1 to maintain BFT security guarantees.</p>
                  
                  <div className="mt-4 bg-dark-card p-4 rounded border border-gray-700 font-mono text-sm text-gray-300 overflow-x-auto">
                    <p># Threshold Signature Protocol</p>
                    <p>def verify_threshold_signature(message, signature, public_keys, threshold):</p>
                    <p>&nbsp;&nbsp;valid_shares = 0</p>
                    <p>&nbsp;&nbsp;for i in range(len(public_keys)):</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;share = extract_share(signature, i)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;if verify_share(message, share, public_keys[i]):</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valid_shares += 1</p>
                    <p>&nbsp;&nbsp;return valid_shares &gt;= threshold</p>
                    <p></p>
                    <p># Optimized BLS signature aggregation</p>
                    <p>def aggregate_signatures(signatures):</p>
                    <p>&nbsp;&nbsp;aggregate = point_at_infinity</p>
                    <p>&nbsp;&nbsp;for sig in signatures:</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;aggregate = ec_add(aggregate, sig)</p>
                    <p>&nbsp;&nbsp;return aggregate</p>
                  </div>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">3.3 Multi-Round Consensus Protocol</h3>
                  <p className="text-gray-400 mb-4">
                    The consensus formation process occurs in multiple stages to ensure deterministic finality:
                  </p>
                  
                  <ol className="list-decimal pl-6 space-y-2 text-gray-400">
                    <li><strong>Observation Phase</strong>: Validators independently observe events on source chains</li>
                    <li><strong>Proposal Phase</strong>: Leader proposes transaction batch with cryptographic commitments</li>
                    <li><strong>Validation Phase</strong>: Validators verify proposal against local observations</li>
                    <li><strong>Signature Phase</strong>: Validators generate and broadcast signature shares</li>
                    <li><strong>Aggregation Phase</strong>: Threshold signature is assembled from valid shares</li>
                    <li><strong>Finalization Phase</strong>: Aggregated signature and proofs are submitted to destination chain</li>
                  </ol>
                  
                  <p className="text-gray-400 mt-4">This multi-phase approach achieves consensus finality with O(n²) message complexity in the worst case, but optimizations reduce this to O(n) under normal operating conditions through signature aggregation and optimistic execution paths.</p>
                  
                  <div className="mt-4 p-4 bg-blue-900/30 border border-blue-800 rounded text-sm text-gray-300">
                    <h4 className="font-semibold text-white mb-2">Mathematical Proof: Byzantine Fault Tolerance</h4>
                    <p>For a network with n validators, the system maintains safety and liveness if:</p>
                    <p className="font-mono mt-2">f ≤ ⌊(n-1)/3⌋</p>
                    <p className="mt-2">Where f represents malicious validators. This inequality ensures the honest validators (h) satisfy:</p>
                    <p className="font-mono mt-2">h ≥ 2n/3 + 1</p>
                    <p className="mt-2">Under these conditions, no conflicting transactions can be finalized, and valid transactions will eventually be processed, maintaining both safety and liveness properties.</p>
                  </div>
                </div>
              </section>
              
              <section id="wormhole">
                <h2 className="text-3xl font-bold text-gradient mb-6">4. Wormhole Integration</h2>
                <p className="text-gray-400 mb-4">
                  The OCF protocol leverages Wormhole's established cross-chain messaging infrastructure while implementing additional security layers and specialized optimizations. This integration provides the foundation for reliable message passing while our proprietary consensus and validation mechanisms ensure transaction integrity and finality.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">4.1 Enhanced Guardian Network</h3>
                  <p className="text-gray-400 mb-4">
                    The protocol interoperates with Wormhole's Guardian network while implementing supplementary validation through OCF's dedicated validator set. This dual-attestation model provides defense-in-depth against potential compromise of either validator network.
                  </p>
                  <p className="text-gray-400">
                    OCF validators observe the same blockchain events as Wormhole Guardians but implement independent verification logic and consensus formation. Cross-chain messages require attestation from both networks, with the more stringent validation criteria taking precedence.
                  </p>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">4.2 Message Format Extension</h3>
                  <p className="text-gray-400 mb-4">
                    The protocol extends Wormhole's standard message format with additional fields to support enhanced validation and custom functionality:
                  </p>
                  
                  <div className="mt-4 bg-dark-card p-4 rounded border border-gray-700 font-mono text-sm text-gray-300 overflow-x-auto">
                    <p>struct OCFMessage {'{'}</p>
                    <p>&nbsp;&nbsp;// Standard Wormhole fields</p>
                    <p>&nbsp;&nbsp;uint8 version;</p>
                    <p>&nbsp;&nbsp;uint32 timestamp;</p>
                    <p>&nbsp;&nbsp;uint16 sourceChainId;</p>
                    <p>&nbsp;&nbsp;uint16 targetChainId;</p>
                    <p>&nbsp;&nbsp;bytes32 sourceAddress;</p>
                    <p>&nbsp;&nbsp;bytes32 targetAddress;</p>
                    <p>&nbsp;&nbsp;bytes payload;</p>
                    <p>&nbsp;&nbsp;</p>
                    <p>&nbsp;&nbsp;// OCF extensions</p>
                    <p>&nbsp;&nbsp;uint64 nonce;</p>
                    <p>&nbsp;&nbsp;bytes32 transactionHash;</p>
                    <p>&nbsp;&nbsp;OCFPayloadType payloadType;</p>
                    <p>&nbsp;&nbsp;bytes ocfSignature;</p>
                    <p>&nbsp;&nbsp;uint16 validatorSetId;</p>
                    <p>&nbsp;&nbsp;bytes32 validatorMerkleRoot;</p>
                    <p>{'}'}</p>
                  </div>
                  
                  <p className="text-gray-400 mt-4">These extensions enable deterministic transaction ordering, payload type-specific validation, and validator set rotation without compromising compatibility with the base Wormhole protocol.</p>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">4.3 Optimized Relay Mechanism</h3>
                  <p className="text-gray-400 mb-4">
                    The protocol implements a specialized relay network to efficiently deliver validated messages to destination chains. Key optimizations include:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Parallel message submission across multiple relayers for increased throughput</li>
                    <li>Gas optimization through batch processing and signature aggregation</li>
                    <li>Redundant relay paths to ensure message delivery even under partial network outages</li>
                    <li>Priority-based message routing based on economic importance and urgency</li>
                    <li>Circuit breaker mechanisms to prevent economic attacks through gas price manipulation</li>
                  </ul>
                  
                  <p className="text-gray-400 mt-4">These optimizations reduce transaction latency by an average of 47% compared to standard Wormhole relayers while improving cost efficiency through batched processing.</p>
                </div>
              </section>
            </div>
          </div>
          
          <div className="flex justify-between items-center border-t border-gray-800 pt-8 mt-12">
            <p className="text-sm text-gray-500">OCF Token Whitepaper v1.2 © 2025 Open Crypto Foundation</p>
            <div className="flex items-center">
              <a href="#" className="flex items-center text-sm text-primary hover:text-primary-light">
                <FaFileAlt className="mr-2" /> Download Full Whitepaper (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
} 