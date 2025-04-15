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
              <a href="/docs/OCF_Token_Whitepaper.pdf" download className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center">
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
              
              <section id="security">
                <h2 className="text-3xl font-bold text-gradient mb-6">5. Security Model</h2>
                <p className="text-gray-400 mb-4">
                  The OCF protocol implements a comprehensive security model addressing the unique challenges of cross-chain communication and multi-chain asset management. The model is designed to mitigate common attack vectors while preserving the security properties of each underlying blockchain.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">5.1 Threat Model</h3>
                  <p className="text-gray-400 mb-4">
                    The security model assumes the following threat vectors:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Byzantine validator behavior up to the threshold limit (f ≤ ⌊(n-1)/3⌋)</li>
                    <li>Network partition attacks affecting message delivery</li>
                    <li>Replay attacks against cross-chain messages</li>
                    <li>Eclipse attacks isolating specific validators</li>
                    <li>Long-range attacks on chains with probabilistic finality</li>
                    <li>Smart contract vulnerabilities in bridge components</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">5.2 Defense Mechanisms</h3>
                  <p className="text-gray-400 mb-4">
                    The protocol implements multiple defense layers to protect against these threats:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Multi-signature validation</strong> requiring threshold consensus for all cross-chain operations</li>
                    <li><strong>Cryptographic proof verification</strong> for all state transitions</li>
                    <li><strong>Replay protection</strong> through unique nonce tracking and chain-specific identifiers</li>
                    <li><strong>Message sequencing</strong> with causal ordering guarantees</li>
                    <li><strong>Economic security</strong> through slashing conditions and validator bonding</li>
                    <li><strong>Formal verification</strong> of all critical contract components</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">5.3 Auditing and Monitoring</h3>
                  <p className="text-gray-400 mb-4">
                    The protocol maintains rigorous security practices:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Independent security audits by multiple specialized firms</li>
                    <li>Continuous monitoring system tracking cross-chain message flows</li>
                    <li>Anomaly detection system for identifying suspicious activities</li>
                    <li>Regular chaos engineering exercises to test resilience</li>
                    <li>Comprehensive bug bounty program with tiered rewards</li>
                  </ul>
                </div>
              </section>
              
              <section id="implementation">
                <h2 className="text-3xl font-bold text-gradient mb-6">6. Network Implementations</h2>
                <p className="text-gray-400 mb-4">
                  The OCF token is implemented natively on multiple blockchain networks, with specialized optimizations for each execution environment while maintaining consistent core functionality.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">6.1 Ethereum Implementation</h3>
                  <p className="text-gray-400 mb-4">
                    The Ethereum implementation uses an ERC-20 compatible token with extended functionality:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>ERC-2612 permit functionality for gasless approvals</li>
                    <li>Gas-optimized storage layout to minimize transaction costs</li>
                    <li>Proxy-based architecture for upgradability</li>
                    <li>Integration with Wormhole message passing layer</li>
                    <li>Native meta-transaction support for improved UX</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">6.2 Solana Implementation</h3>
                  <p className="text-gray-400 mb-4">
                    The Solana implementation uses an SPL Token with enhanced capabilities:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Compressed account structure for storage efficiency</li>
                    <li>Program Derived Address (PDA) based authority model</li>
                    <li>Native Wormhole portal integration with transaction attestation</li>
                    <li>Optimized instruction design for high-throughput transactions</li>
                    <li>On-chain transaction metadata support</li>
                  </ul>
                  
                  <p className="text-gray-400 mt-3">
                    Contract address: <code className="text-green-400 font-mono">GfmoS7ycz9q3FETmJ9m9n71oab3M9n5RRBYL9aQ1Yppv</code>
                  </p>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">6.3 BNB Chain Implementation</h3>
                  <p className="text-gray-400 mb-4">
                    The BNB Chain implementation uses a BEP-20 compatible token with specialized features:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>BEP-20 compatibility with BSC-specific optimizations</li>
                    <li>Reduced gas consumption through proxy implementation</li>
                    <li>Cross-chain messaging via specialized BNB adapter</li>
                    <li>Enhanced meta-transaction support for MEV protection</li>
                    <li>Native integration with BNB Chain security model</li>
                  </ul>
                </div>
              </section>
              
              <section id="token">
                <h2 className="text-3xl font-bold text-gradient mb-6">7. Token Utility & Economics</h2>
                <p className="text-gray-400 mb-4">
                  The OCF token is the utility and governance token of the Open Crypto Foundation ecosystem, with a total supply of 1,000,000,000 OCF. The token implements several key mechanisms that provide value to holders while ensuring long-term sustainability of the protocol.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">7.1 Token Distribution</h3>
                  <p className="text-gray-400 mb-4">
                    The total token supply of 1 billion OCF is distributed according to the following allocation:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Public Sale (20%)</strong>: 200,000,000 OCF allocated for initial token sale events</li>
                    <li><strong>Ecosystem Growth (25%)</strong>: 250,000,000 OCF reserved for ecosystem incentives, grants, and community rewards</li>
                    <li><strong>Core Team (15%)</strong>: 150,000,000 OCF allocated to founding team and early contributors</li>
                    <li><strong>Treasury (15%)</strong>: 150,000,000 OCF held in DAO-controlled treasury for ongoing operations and development</li>
                    <li><strong>Protocol Security (10%)</strong>: 100,000,000 OCF dedicated to network security and validator incentives</li>
                    <li><strong>Strategic Partners (8%)</strong>: 80,000,000 OCF allocated to strategic investors and partners</li>
                    <li><strong>Cross-Chain Liquidity (7%)</strong>: 70,000,000 OCF providing initial liquidity across supported chains</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">7.2 Cross-Chain Distribution</h3>
                  <p className="text-gray-400 mb-4">
                    OCF tokens are implemented natively on multiple blockchain networks, with total supply distributed as follows:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Ethereum (ERC-20)</strong>: 350,000,000 OCF (35% of total supply)</li>
                    <li><strong>Solana (SPL Token)</strong>: 350,000,000 OCF (35% of total supply)</li>
                    <li><strong>BNB Chain (BEP-20)</strong>: 300,000,000 OCF (30% of total supply)</li>
                  </ul>
                  
                  <p className="text-gray-400 mt-4">
                    Cross-chain parity is maintained through the OCF bridging protocol, ensuring consistent token economics across all supported networks.
                  </p>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">7.3 Token Utility</h3>
                  <p className="text-gray-400 mb-4">
                    The OCF token provides several key utility functions within the ecosystem:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Governance Participation</strong>: Token holders can vote on protocol upgrades, treasury allocations, and strategic decisions</li>
                    <li><strong>Validator Staking</strong>: Stake OCF tokens to participate in network validation and earn rewards</li>
                    <li><strong>Cross-Chain Transaction Fees</strong>: Pay for cross-chain transactions with dynamic fee adjustment</li>
                    <li><strong>Security Bonding</strong>: Validators post OCF security bonds subject to slashing for protocol violations</li>
                    <li><strong>Priority Transaction Access</strong>: Staked tokens provide prioritized processing during network congestion</li>
                    <li><strong>Protocol Feature Access</strong>: Advanced features require minimum OCF token holdings</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">7.4 Vesting and Circulating Supply</h3>
                  <p className="text-gray-400 mb-4">
                    Token allocations follow a structured vesting schedule to ensure long-term alignment and prevent market disruption:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Public Sale</strong>: 40% immediate, 60% over 3 months</li>
                    <li><strong>Ecosystem Growth</strong>: 10% immediate, 90% over 36 months</li>
                    <li><strong>Core Team</strong>: 12 month cliff, 100% over 36 months after cliff</li>
                    <li><strong>Treasury</strong>: 15% immediate, 85% over 48 months</li>
                    <li><strong>Protocol Security</strong>: 20% immediate, 80% over 24 months</li>
                    <li><strong>Strategic Partners</strong>: 6 month cliff, 100% over 24 months after cliff</li>
                    <li><strong>Cross-Chain Liquidity</strong>: 100% immediate</li>
                  </ul>
                  
                  <p className="text-gray-400 mt-4">Based on these schedules, the projected circulating supply over time is:</p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Initial Circulation: 157 million tokens (15.7%)</li>
                    <li>6 months: 268 million tokens (26.8%)</li>
                    <li>12 months: 392 million tokens (39.2%)</li>
                    <li>24 months: 685 million tokens (68.5%)</li>
                    <li>36 months: 913 million tokens (91.3%)</li>
                    <li>48 months: 1 billion tokens (100%)</li>
                  </ul>
                </div>
              </section>
              
              <section id="governance">
                <h2 className="text-3xl font-bold text-gradient mb-6">8. Governance Framework</h2>
                <p className="text-gray-400 mb-4">
                  The OCF DAO (Decentralized Autonomous Organization) is the governing body of the Open Crypto Foundation ecosystem. Through the OCF token, community members collectively make decisions about protocol upgrades, treasury management, and strategic direction.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">8.1 Governance Architecture</h3>
                  <p className="text-gray-400 mb-4">
                    The governance system implements a multi-tiered approach:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Token-based Voting</strong>: Direct on-chain voting with weight proportional to token holdings</li>
                    <li><strong>Proposal System</strong>: Structured process for submitting, discussing, and voting on changes</li>
                    <li><strong>Timelock Mechanism</strong>: Delay between approval and implementation for security</li>
                    <li><strong>Emergency Mechanisms</strong>: Special provisions for critical security issues</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">8.2 Governance Process</h3>
                  <p className="text-gray-400 mb-4">
                    The governance process follows a standardized workflow:
                  </p>
                  
                  <ol className="list-decimal pl-6 space-y-2 text-gray-400">
                    <li><strong>Proposal Submission</strong>: Any OCF token holder with at least 100,000 tokens can submit governance proposals</li>
                    <li><strong>Community Discussion</strong>: 7-day mandatory discussion period on the governance forum</li>
                    <li><strong>Voting Period</strong>: 5-day voting period with votes weighted by token holdings</li>
                    <li><strong>Implementation</strong>: Automatic execution of approved proposals that meet quorum requirements</li>
                  </ol>
                  
                  <p className="text-gray-400 mt-4">A minimum of 5% of the total token supply must participate for a vote to be valid. Standard proposals require a simple majority ({'>'}50%), while core protocol changes require a supermajority ({'>'}66%).</p>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">8.3 Progressive Decentralization</h3>
                  <p className="text-gray-400 mb-4">
                    The governance framework implements a phased approach to decentralization:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong>Phase 1 (Bootstrap)</strong>: Limited governance scope with core team oversight</li>
                    <li><strong>Phase 2 (Expansion)</strong>: Expanded governance powers with graduated parameter control</li>
                    <li><strong>Phase 3 (Full Decentralization)</strong>: Complete protocol control by token holders</li>
                  </ul>
                  
                  <p className="text-gray-400 mt-4">Each phase incorporates specific safeguards appropriate to its level of decentralization, with clearly defined transition criteria between phases.</p>
                </div>
              </section>
              
              <section id="future">
                <h2 className="text-3xl font-bold text-gradient mb-6">9. Future Directions</h2>
                <p className="text-gray-400 mb-4">
                  The OCF protocol roadmap outlines several key development directions focused on expanding functionality, improving security, and enhancing user experience.
                </p>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">9.1 Protocol Expansion</h3>
                  <p className="text-gray-400 mb-4">
                    Planned protocol expansions include:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Additional blockchain network integrations (Layer 2 solutions, emerging L1 chains)</li>
                    <li>Enhanced cross-chain messaging capabilities beyond token transfers</li>
                    <li>Cross-chain smart contract composability framework</li>
                    <li>Integration with decentralized identity systems</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">9.2 Technical Innovations</h3>
                  <p className="text-gray-400 mb-4">
                    Research and development initiatives include:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Zero-knowledge proof integration for enhanced privacy and efficiency</li>
                    <li>Optimistic verification models with economic security guarantees</li>
                    <li>Advanced threshold cryptography schemes with improved performance</li>
                    <li>Cross-chain state synchronization protocols</li>
                  </ul>
                </div>
                
                <div className="bg-dark-elevated p-6 rounded-xl border border-gray-800 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">9.3 Ecosystem Development</h3>
                  <p className="text-gray-400 mb-4">
                    Ecosystem growth initiatives include:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Developer grants program for cross-chain applications</li>
                    <li>Educational resources and technical documentation</li>
                    <li>Cross-chain interoperability standards development</li>
                    <li>Integration partnerships with major DeFi protocols</li>
                  </ul>
                </div>
              </section>
              
              <section id="conclusion">
                <h2 className="text-3xl font-bold text-gradient mb-6">10. Conclusion</h2>
                <p className="text-gray-400 mb-4">
                  The OCF token protocol represents a significant advancement in cross-chain interoperability, combining robust security guarantees with practical efficiency and usability. By leveraging threshold cryptography, Byzantine fault-tolerant consensus, and specialized optimizations for each supported blockchain, the protocol addresses the fundamental challenges of secure cross-chain communication while maintaining the security properties of each underlying network.
                </p>
                
                <p className="text-gray-400 mb-4">
                  With a total supply of 1 billion tokens, implemented consistently across Ethereum, Solana, and BNB Chain, the OCF token provides the economic foundation for the protocol's security, governance, and utility functions. The progressive decentralization roadmap ensures that control gradually transitions to the community while maintaining essential security safeguards.
                </p>
                
                <p className="text-gray-400 mb-4">
                  As the blockchain ecosystem continues to evolve toward a multi-chain future, interoperability solutions like the OCF protocol will play an increasingly critical role in enabling seamless asset transfers, cross-chain application development, and unified liquidity across the fragmented blockchain landscape. Through ongoing research, development, and community governance, the OCF protocol will continue to adapt and expand to meet the emerging needs of decentralized applications and their users.
                </p>
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