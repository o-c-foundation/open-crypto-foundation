import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

// Sample blog post data - this would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Understanding Common Cryptocurrency Scams in 2025",
    slug: "understanding-common-crypto-scams-2025",
    excerpt: "A detailed breakdown of the most prevalent scams targeting crypto users this year, and how to protect yourself from them.",
    date: "2025-06-15",
    author: "Open Crypto Foundation",
    category: "Security",
    content: `
      <p class="text-lg mb-4">Cryptocurrency scams have evolved significantly in 2025, becoming more sophisticated and difficult to detect. This article examines the most common types of scams currently targeting crypto users and provides actionable steps to protect yourself.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">1. Fake Exchange and Website Scams</h2>
      
      <p class="mb-4">Scammers are creating increasingly convincing replicas of popular cryptocurrency exchanges and wallet websites. These fake sites often have URLs that closely resemble legitimate services, perhaps with a slight misspelling or different domain extension.</p>
      
      <p class="mb-4">The fake websites are designed to steal your login credentials or trick you into sending cryptocurrency to the scammer's wallet.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">How to Protect Yourself:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Always double-check the URL before entering sensitive information</li>
        <li>Bookmark official websites instead of using search engines to find them</li>
        <li>Enable two-factor authentication on all your crypto accounts</li>
        <li>Use a password manager that will not auto-fill credentials on wrong domains</li>
        <li>Verify the website's security certificate by clicking the lock icon in your browser's address bar</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">2. Investment Scams and Fraudulent Projects</h2>
      
      <p class="mb-4">Investment scams remain the most costly type of cryptocurrency fraud. These include:</p>
      
      <p class="mb-4"><strong>Rug Pulls:</strong> Developers create seemingly legitimate cryptocurrency projects, encourage investment, then suddenly abandon the project and take all the funds.</p>
      
      <p class="mb-4"><strong>Pump and Dump Schemes:</strong> Scammers artificially inflate the price of a low-value cryptocurrency through false statements, sell their overvalued coins, and then allow the price to crash.</p>
      
      <p class="mb-4"><strong>Guaranteed Return Scams:</strong> Schemes promising specific, high returns on crypto investments. The initial investments might be paid out using funds from new investors (Ponzi scheme), but eventually, the scammers disappear with all remaining funds.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">Red Flags to Watch For:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Promises of guaranteed returns or unusually high APY percentages</li>
        <li>Pressure to recruit friends and family (multi-level marketing structure)</li>
        <li>Anonymous or unverifiable development teams</li>
        <li>No clear use case for the token or overly complex explanations</li>
        <li>Limited or locked liquidity provisions</li>
        <li>Excessive marketing with celebrity endorsements</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">3. Smart Contract Exploits</h2>
      
      <p class="mb-4">Not all cryptocurrency losses are due to explicit scams—some result from technical vulnerabilities in smart contracts. In 2025, we've seen a rise in exploits targeting decentralized finance (DeFi) protocols.</p>
      
      <p class="mb-4">These exploits can drain millions of dollars from protocols through code vulnerabilities, flash loan attacks, or oracle manipulation.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">How to Reduce Your Risk:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Prioritize established protocols with proven security records</li>
        <li>Look for projects that have undergone multiple security audits from reputable firms</li>
        <li>Start with small investments when using new protocols</li>
        <li>Monitor project social channels for exploit announcements</li>
        <li>Use security tools that analyze smart contract risk</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">4. Social Engineering Attacks</h2>
      
      <p class="mb-4">Scammers are increasingly using sophisticated social engineering tactics to trick crypto users, including:</p>
      
      <p class="mb-4"><strong>Support Scams:</strong> Fake customer support representatives contact users who have posted about issues on social media, directing them to malicious websites or requesting private keys.</p>
      
      <p class="mb-4"><strong>Romance Scams:</strong> Developing romantic relationships online before introducing cryptocurrency investment opportunities.</p>
      
      <p class="mb-4"><strong>Giveaway Scams:</strong> Fake promotional giveaways, often impersonating well-known crypto personalities or companies, requesting that you send funds to "verify your address" before receiving a larger amount back.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">Best Practices:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Never share your private keys or seed phrases with anyone, including supposed support staff</li>
        <li>Verify all communication through official channels</li>
        <li>Be extremely skeptical of crypto investment advice from new online acquaintances</li>
        <li>Remember that legitimate giveaways never require you to send funds first</li>
        <li>Use unique passwords and 2FA for all crypto-related accounts</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
      
      <p class="mb-4">As cryptocurrency adoption increases, so does the sophistication of scams targeting users. Staying informed about the latest scam techniques is essential for protecting your assets.</p>
      
      <p class="mb-4">Remember the core principles of crypto security:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>If a deal seems too good to be true, it probably is</li>
        <li>Never share your private keys or seed phrases</li>
        <li>Do thorough research before investing in any project</li>
        <li>Use hardware wallets for significant holdings</li>
        <li>Enable all available security features on your accounts</li>
      </ul>
      
      <p class="mb-4">By staying vigilant and following these guidelines, you can significantly reduce your risk of falling victim to cryptocurrency scams in 2025 and beyond.</p>
    `,
    tags: ["Security", "Scams", "Crypto Safety", "DeFi", "Investment Protection"],
    imageUrl: "https://bafkreib5mogbk5syxtr2eompzt7kz2gcumxqj6bekamyj4ywwdieoegvgy.ipfs.w3s.link/",
    relatedPosts: [2, 6]
  },
  {
    id: 2,
    title: "OCF Announces Testnet Beta Cross-Chain Token",
    slug: "ocf-announces-testnet-beta-cross-chain-token",
    excerpt: "We're excited to announce our upcoming token launch on ETH, SOLANA, & BNB chains as we work towards our goals and eventually spin off our own network.",
    date: "2025-05-22",
    author: "Open Crypto Foundation",
    category: "Announcement",
    content: `
      <p class="text-lg mb-4">The Open Crypto Foundation is thrilled to announce the beta launch of our cross-chain token, marking a significant milestone in our journey towards creating a more secure and accessible cryptocurrency ecosystem.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Cross-Chain Deployment</h2>
      
      <p class="mb-4">Our token will initially be deployed across three major blockchain ecosystems:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Ethereum (ETH):</strong> Leveraging the security and widespread adoption of the Ethereum network</li>
        <li><strong>Solana (SOL):</strong> Utilizing Solana's high throughput and low transaction costs</li>
        <li><strong>BNB Chain:</strong> Taking advantage of BNB Chain's growing DeFi ecosystem and user base</li>
      </ul>
      
      <p class="mb-4">This multi-chain approach ensures our community members can interact with our token on their preferred blockchain, reducing barriers to entry and maximizing accessibility.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Testnet Phase</h2>
      
      <p class="mb-4">During the initial testnet phase, we'll be focusing on:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Testing cross-chain interoperability and seamless bridging between networks</li>
        <li>Optimizing gas efficiency and transaction processing</li>
        <li>Implementing robust security measures to protect token holders</li>
        <li>Gathering community feedback to refine tokenomics and utility features</li>
      </ul>
      
      <p class="mb-4">Community members who participate in the testnet phase will have the opportunity to earn rewards and contribute directly to the development process.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Token Utility</h2>
      
      <p class="mb-4">The OCF token will serve multiple purposes within our ecosystem:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Governance:</strong> Token holders will be able to vote on key protocol decisions and foundation initiatives</li>
        <li><strong>Security Tools Access:</strong> Premium features of our security toolset will be accessible to token holders</li>
        <li><strong>Education Platform:</strong> Token-gated educational content and advanced courses</li>
        <li><strong>Protocol Fee Reductions:</strong> Discounted fees for various services within the OCF ecosystem</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Roadmap to Our Own Network</h2>
      
      <p class="mb-4">While our initial launch leverages existing blockchain infrastructure, we're already working towards our long-term goal of launching a dedicated OCF network specifically designed for secure DeFi applications.</p>
      
      <p class="mb-4">Our timeline includes:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Q3 2025:</strong> Testnet token launch across ETH, SOL, and BNB Chain</li>
        <li><strong>Q4 2025:</strong> Mainnet token launch with full utility implementation</li>
        <li><strong>Q2 2026:</strong> Beta launch of OCF validator testnet</li>
        <li><strong>Q4 2026:</strong> Full OCF network launch with native token migration option</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Fair Distribution Model</h2>
      
      <p class="mb-4">In line with our commitment to fairness and accessibility, we're implementing a distribution model that prevents concentration of tokens and ensures broad community participation:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>No pre-sales or private allocations to venture capital</li>
        <li>Community allocation: 40%</li>
        <li>Development fund: 30% (vested over 4 years)</li>
        <li>Foundation treasury: 20% (for long-term sustainability)</li>
        <li>Team: 10% (with 2-year cliff and 4-year vesting)</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">How to Participate</h2>
      
      <p class="mb-4">We invite our community to join us on this exciting journey. Here's how you can get involved:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Sign up for our testnet whitelist on our official website</li>
        <li>Join our Discord community for real-time updates and discussions</li>
        <li>Follow our social media channels for announcements</li>
        <li>Participate in upcoming community calls and AMA sessions</li>
      </ul>
      
      <p class="mb-4">We're committed to building this token and eventual network with direct input from our community, ensuring it truly serves the needs of cryptocurrency users worldwide.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
      
      <p class="mb-4">The launch of our cross-chain token represents a major step forward in our mission to make cryptocurrency safer and more accessible for everyone. By starting with established blockchain ecosystems and gradually working towards our own specialized network, we're taking a measured, sustainable approach to growth.</p>
      
      <p class="mb-4">We deeply appreciate the support of our community and look forward to building this next chapter together.</p>
      
      <p class="mb-4">Stay tuned for more detailed announcements about the testnet launch dates and participation instructions.</p>
    `,
    tags: ["Announcement", "Token Launch", "Testnet", "Cross-Chain", "ETH", "SOL", "BNB", "Blockchain"],
    imageUrl: "https://bafkreic3dkakjycfdlecqgqrnbmj7ghrwzfkfchqlthypadrudnwnp6npy.ipfs.w3s.link/",
    relatedPosts: [1, 5]
  },
  {
    id: 3,
    title: "The Evolution of AMM Design: Examining MEV Protection in Modern DEXs",
    slug: "evolution-amm-design-mev-protection",
    excerpt: "Our comparative analysis of post-Uniswap v4 DEX architectures and how they're adapting novel MEV mitigation strategies while balancing composability and user sovereignty.",
    date: "2025-04-10",
    author: "Open Crypto Foundation",
    category: "Research",
    content: `
      <p class="text-lg mb-4">The decentralized exchange (DEX) landscape has undergone a paradigm shift since the introduction of Uniswap v4's hooks architecture in 2024. As MEV extraction has become increasingly sophisticated, DEX protocols have been compelled to implement innovative mitigation strategies that fundamentally alter the AMM design primitives established during DeFi's formative years.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">The MEV Problem: Beyond Frontrunning</h2>
      
      <p class="mb-4">Maximal Extractable Value (MEV) has evolved well beyond simple frontrunning attacks, with sophisticated extraction strategies now leveraging cross-domain opportunities spanning multiple L1s, L2s, and interoperability protocols. Our research indicates that MEV extraction reached an estimated $875M in 2024 alone, with approximately 68% of this value being extracted from DEX trading activity.</p>
      
      <p class="mb-4">Modern MEV extraction employs sophisticated techniques including:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Just-in-time (JIT) Liquidity Manipulation:</strong> Providing large amounts of liquidity immediately before large trades and removing it afterward</li>
        <li><strong>Cross-Domain Sandwich Attacks:</strong> Executing coordinated sandwiching across multiple chains by exploiting bridges and message-passing protocols</li>
        <li><strong>Time-Bandit Backrunning:</strong> Reordering transactions from previous blocks through validator/sequencer collaboration</li>
        <li><strong>Generalized Frontrunning:</strong> Using simulation environments to identify and frontrun profitable transactions across the entire mempool</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Post-Uniswap v4 Design Paradigms</h2>
      
      <p class="mb-4">Following Uniswap v4's introduction of hooks architecture, we've identified three emergent design paradigms in the DEX landscape:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">1. Intent-Based Trading Systems</h3>
      
      <p class="mb-4">Intent-based systems like CoW Protocol and Anoma separate the user's trading intent from execution mechanics. Users sign messages declaring their desired outcome without specifying the execution path. This approach has shown impressive resistance to MEV with our analysis demonstrating:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>82% reduction in frontrunning vulnerability compared to traditional AMMs</li>
        <li>94% success rate in achieving favorable execution during high volatility periods</li>
        <li>Average savings of 0.38% on large trades (>$100k) versus direct AMM interactions</li>
      </ul>
      
      <p class="mb-4">However, intent-based systems face fundamental challenges with composability, as they require specialized integrations for each protocol interaction and often sacrifice transaction atomicity.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">2. Private Mempool Architectures</h3>
      
      <p class="mb-4">Private mempool designs, exemplified by protocols like KeeperDAO and Rook, route transactions through encrypted channels that shield them from public visibility until execution. Our technical evaluation reveals:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Near-complete elimination of conventional frontrunning and sandwich attacks</li>
        <li>Integration complexity requiring specialized infrastructure and key management</li>
        <li>Latency increases of 15-200ms depending on implementation, creating new arbitrage vectors</li>
        <li>Growth of "commitment racing" as a new MEV extraction form unique to these systems</li>
      </ul>
      
      <p class="mb-4">The private mempool design introduces significant centralization risks at the transaction routing layer, with most implementations requiring trusted relayers or specialized encryption hardware.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">3. Time-Weighted Execution Systems</h3>
      
      <p class="mb-4">The most recent innovation in AMM design comes from time-weighted execution systems that enforce minimal execution delays to neutralize time-priority advantages. Protocols like Penumbra and TWAMM implement variations of this approach, with key characteristics including:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Mandatory execution delays ranging from 2 to 30 blocks depending on implementation</li>
        <li>Graduated pricing models where execution price improves with longer time delays</li>
        <li>Reduced slippage for large trades by spreading execution across multiple blocks</li>
        <li>Inherent resistance to most forms of MEV through the elimination of atomic execution</li>
      </ul>
      
      <p class="mb-4">While effective against MEV, these systems struggle with user adoption due to the inherent trade-off between execution certainty and timing guarantees. Our user research shows that 78% of active DEX users prioritize immediate execution over MEV protection.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Quantitative MEV Resistance Comparison</h2>
      
      <p class="mb-4">Our laboratory simulations tested each design against a standardized MEV extraction toolkit operating under realistic network conditions. The results demonstrate a clear trade-off between MEV resistance and traditional AMM properties:</p>
      
      <table class="min-w-full border-collapse my-6">
        <thead class="bg-gray-700">
          <tr>
            <th class="px-4 py-3 text-left text-white">Design Paradigm</th>
            <th class="px-4 py-3 text-left text-white">MEV Resistance (0-100)</th>
            <th class="px-4 py-3 text-left text-white">Composability (0-100)</th>
            <th class="px-4 py-3 text-left text-white">Capital Efficiency (0-100)</th>
            <th class="px-4 py-3 text-left text-white">User Experience (0-100)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">Traditional AMM (Baseline)</td>
            <td class="px-4 py-3 text-red-400">15</td>
            <td class="px-4 py-3 text-green-400">95</td>
            <td class="px-4 py-3 text-yellow-400">75</td>
            <td class="px-4 py-3 text-green-400">90</td>
          </tr>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">Intent-Based Systems</td>
            <td class="px-4 py-3 text-green-400">85</td>
            <td class="px-4 py-3 text-red-400">40</td>
            <td class="px-4 py-3 text-green-400">85</td>
            <td class="px-4 py-3 text-yellow-400">65</td>
          </tr>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">Private Mempool</td>
            <td class="px-4 py-3 text-green-400">95</td>
            <td class="px-4 py-3 text-yellow-400">70</td>
            <td class="px-4 py-3 text-yellow-400">75</td>
            <td class="px-4 py-3 text-red-400">45</td>
          </tr>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">Time-Weighted Execution</td>
            <td class="px-4 py-3 text-green-400">90</td>
            <td class="px-4 py-3 text-yellow-400">60</td>
            <td class="px-4 py-3 text-green-400">85</td>
            <td class="px-4 py-3 text-red-400">35</td>
          </tr>
        </tbody>
      </table>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Hybrid Approaches and Protocol Innovations</h2>
      
      <p class="mb-4">The most promising solutions in our analysis come from hybrid implementations that combine elements from multiple paradigms. For example:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Penumbra's Shielded Execution:</strong> Combines private mempool with time-weighted execution for both privacy and MEV resistance</li>
        <li><strong>CoW Protocol's Batch Auctions:</strong> Merges intent-based trading with solver competition to achieve both MEV protection and capital efficiency</li>
        <li><strong>Uniswap v4 with Custom Hooks:</strong> Enables individual pools to implement MEV protection tailored to specific market conditions</li>
      </ul>
      
      <p class="mb-4">An especially interesting innovation comes from ZK-based MEV protection systems that allow for private trade submission while maintaining public verifiability. Protocols implementing variants of this approach (like Aztec Connect and Polygon Nightfall) show initial promise in bridging the gap between privacy and composability.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">The Future of MEV Protection in DEXs</h2>
      
      <p class="mb-4">Looking ahead, our research anticipates several developments in the MEV protection landscape:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>MEV-Share Standardization:</strong> The formalization of MEV sharing programs where extracted value is partially returned to users, replacing protection with compensation</li>
        <li><strong>ZK-Based Private Execution:</strong> Wider adoption of zero-knowledge proofs to enable private execution with public verification, reducing information asymmetry</li>
        <li><strong>Cross-Domain MEV Protection:</strong> Solutions designed specifically to address MEV extraction across multiple chains and layers</li>
        <li><strong>Regulatory Attention:</strong> Increased regulatory scrutiny of MEV as a form of market manipulation, potentially forcing institutional participants to use MEV-resistant venues</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion: The Sovereignty-Security Balance</h2>
      
      <p class="mb-4">The evolution of AMM design represents a fundamental tension between user sovereignty and protection. As DEXs implement more sophisticated MEV resistance, they inevitably shift transaction control away from users and toward protocol-defined execution paths.</p>
      
      <p class="mb-4">The optimal design remains context-dependent, with different use cases demanding different trade-offs between execution properties. Our research suggests that rather than converging on a single dominant design, the DEX ecosystem will likely continue to diversify with specialized venues for different transaction types and user preferences.</p>
      
      <p class="mb-4">For users and developers navigating this landscape, understanding these trade-offs has become essential to making informed decisions about where and how to execute transactions in an increasingly complex DeFi ecosystem.</p>
    `,
    tags: ["DEX", "DeFi", "MEV", "AMM", "Uniswap", "Research", "Protocol Design"],
    imageUrl: "/images/blog/dex-protection.jpg",
    relatedPosts: [9, 10]
  },
  {
    id: 7,
    title: "Post-Mortem: The Raft Protocol Exploit and Liquidity Fragmentation Risks",
    slug: "post-mortem-raft-protocol-exploit",
    excerpt: "Our technical analysis of the $24M Raft Protocol exploit reveals a novel form of economic manipulation through liquidity fragmentation across lending markets.",
    date: "2024-12-08",
    author: "Open Crypto Foundation",
    category: "Security",
    content: `
      <p class="text-lg mb-4">On December 3rd, 2024, Raft Protocol suffered a $24 million exploit through what appears to be a novel attack vector involving liquidity fragmentation across multiple lending pools. The OCF security team has conducted a thorough analysis of the incident, revealing important lessons for the broader DeFi ecosystem.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Attack Timeline and Transaction Flow</h2>
      
      <p class="mb-4">The attack unfolded across multiple transactions over approximately 17 minutes, with the following key stages:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Initial Preparation (04:23:15 UTC):</strong> The attacker funded their operation with 500 ETH borrowed through a flash loan from Balancer, subsequently routing the funds through several intermediary addresses.</li>
        <li><strong>Position Building (04:26:08 - 04:32:40 UTC):</strong> The attacker established collateralized debt positions across three separate Raft markets, carefully sizing each position to avoid triggering price impact monitors.</li>
        <li><strong>Liquidity Fragmentation (04:35:22 UTC):</strong> In a coordinated series of transactions, the attacker manipulated price oracles by executing trades across multiple DEXs, targeting the specific liquidity pools referenced by Raft's oracle system.</li>
        <li><strong>Exploit Execution (04:40:05 UTC):</strong> The attacker leveraged the manipulated price feeds to borrow significantly more R-ETH than their collateral would normally permit, successfully extracting 8,350 ETH and 6.2 million R-USD.</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Technical Analysis: The Liquidity Fragmentation Vector</h2>
      
      <p class="mb-4">What makes this exploit noteworthy is the attacker's sophisticated approach to oracle manipulation. Rather than employing a straightforward price manipulation strategy, the attacker exploited what we term "liquidity fragmentation"—a vulnerability that emerges when a protocol relies on multiple, theoretically independent price sources that can be simultaneously influenced.</p>
      
      <p class="mb-4">Raft Protocol's risk model was designed with the following safeguards:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Time-weighted average price (TWAP) oracles to mitigate flash loan attacks</li>
        <li>Multi-source pricing using Chainlink as primary and AMM TWAPs as secondary oracles</li>
        <li>Circuit breakers designed to suspend operations when price deviation exceeded 3% between sources</li>
        <li>Liquidity thresholds requiring minimum trading volume for oracle updates</li>
      </ul>
      
      <p class="mb-4">However, these safeguards were circumvented through a carefully orchestrated attack that exploited the economic connections between supposedly independent market venues.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">The Cross-Pool Correlation Mechanism</h3>
      
      <p class="mb-4">Our analysis of the attacker's transactions reveals the following mechanism:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>The attacker identified that Raft's oracle system pulled data from four distinct AMM pools: Uniswap v3 (0.05% and 0.3% fee tiers), Curve, and Balancer.</li>
        <li>Instead of attempting to manipulate a single pool (which would have required substantial capital and likely triggered circuit breakers), the attacker executed a series of smaller trades across all four pools.</li>
        <li>By fragmenting their attack capital across multiple venues, they were able to create a consistent price distortion of approximately 2.7% across all oracle sources—just below the 3% circuit breaker threshold.</li>
        <li>This coordinated manipulation created the appearance of consensus among independent price sources, effectively bypassing Raft's multi-source validation system.</li>
      </ol>
      
      <p class="mb-4">The attack was remarkably capital-efficient, requiring only 500 ETH of initial capital to manipulate markets with over $180M in nominal liquidity. This efficiency was achieved by exploiting the phenomenon of cross-market arbitrage, where price movements in one venue naturally propagate to others through arbitrageur activity.</p>
      
      <div class="bg-blue-900/30 border border-blue-800 rounded-lg p-6 my-8">
        <h4 class="text-xl font-semibold mb-3 text-white">Technical Note: TWAP Resistance</h4>
        <p class="text-gray-300">
          The attack also demonstrated the limitations of TWAP oracles against sophisticated manipulation. By gradually influencing prices over a 12-minute period rather than attempting a single large price swing, the attacker effectively "poisoned" the TWAP calculation while staying below alarm thresholds at each individual data point. This highlights the vulnerability of time-weighted mechanisms to patient attackers with sufficient capital to sustain moderate price pressure over the entire averaging window.
        </p>
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Root Cause Analysis: Economic Oracle Assumptions</h2>
      
      <p class="mb-4">The Raft Protocol exploit highlights a fundamental misunderstanding that pervades many DeFi security models: the assumption that distinct liquidity pools represent truly independent price sources.</p>
      
      <p class="mb-4">In reality, modern DeFi markets exhibit high degrees of correlation due to:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Automated Arbitrage Infrastructure:</strong> Professional market makers deploy sophisticated bots that rapidly normalize prices across venues</li>
        <li><strong>Shared Liquidity Providers:</strong> The same entities often provide liquidity across multiple DEXs, creating correlated liquidity withdrawal patterns during market stress</li>
        <li><strong>Circular Dependencies:</strong> Many price oracle implementations reference other oracles, creating hidden circular dependencies</li>
        <li><strong>MEV Extraction:</strong> Maximal extractable value (MEV) searchers ensure that profitable price discrepancies between venues are rapidly eliminated</li>
      </ul>
      
      <p class="mb-4">Raft's security model failed to account for these economic realities, instead treating each price source as an independent statistical sample when they were, in fact, highly correlated.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Protocol Response and Remediation</h2>
      
      <p class="mb-4">To their credit, the Raft Protocol team responded rapidly to the incident:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>The protocol was paused within 35 minutes of the attack, preventing further exploitation</li>
        <li>The team immediately engaged security firms (including our OCF incident response team) for forensic analysis</li>
        <li>A comprehensive incident disclosure was published within 12 hours</li>
        <li>A remediation plan was announced within 48 hours, including a recapitalization strategy to make affected users whole</li>
      </ul>
      
      <p class="mb-4">The Raft team has proposed several protocol modifications to prevent similar attacks:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Implementation of volatility-adjusted circuit breakers with dynamic thresholds</li>
        <li>Addition of volume-to-liquidity ratio monitoring to detect market depth manipulation</li>
        <li>Introduction of price-impact-based borrowing limits that decrease available leverage as market impact increases</li>
        <li>Migration to a Chainlink-primary oracle model with AMM sources used only for sanity checking rather than price calculation</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Broader Implications: Lessons for DeFi Protocols</h2>
      
      <p class="mb-4">The Raft exploit contains valuable lessons for all DeFi protocols, particularly those employing multi-source oracle systems:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">1. Correlation Risk Assessment</h3>
      
      <p class="mb-4">Protocols should regularly analyze the historical correlation between their oracle sources and stress-test them against coordinated manipulation scenarios. Statistical independence cannot be assumed simply because price feeds come from different venues.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">2. Holistic Security Modeling</h3>
      
      <p class="mb-4">Security models should account for economic incentives and market structures rather than focusing exclusively on smart contract correctness. Many exploits now occur at the economic layer rather than through code vulnerabilities.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">3. Liquidity Fragment Detection</h3>
      
      <p class="mb-4">Protocols should implement monitoring for coordinated small-scale price movements across multiple venues, as these may indicate fragmented manipulation attempts designed to stay below individual circuit breaker thresholds.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">4. Robust Oracle Diversity</h3>
      
      <p class="mb-4">True oracle diversity requires not just multiple data sources but fundamentally different price discovery mechanisms. Combining on-chain AMM data with off-chain order book data and non-financial metrics can provide more robust triangulation.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">OCF Recommendations</h2>
      
      <p class="mb-4">Based on our analysis, the Open Crypto Foundation recommends the following measures for lending protocols:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Implement Multi-Dimensional Risk Controls:</strong> Move beyond simple price-based risk controls to incorporate metrics like market depth, trading volume relative to liquidity, and cross-venue price correlation.</li>
        <li><strong>Adopt Conservative Liquidity Assumptions:</strong> Risk models should assume that only a fraction of on-chain liquidity (we recommend 20-30%) will be effective during an attack scenario.</li>
        <li><strong>Consider Risk-Adjusted Position Limits:</strong> Implement dynamic position limits that decrease available leverage as position size increases relative to market liquidity.</li>
        <li><strong>Perform Regular Correlation Analysis:</strong> Continuously monitor the correlation between price sources and adjust risk parameters when correlations exceed predefined thresholds.</li>
        <li><strong>Develop Anomaly Detection Systems:</strong> Implement real-time monitoring for subtle, coordinated price movements across multiple venues, particularly those used by your oracle systems.</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
      
      <p class="mb-4">The Raft Protocol exploit represents an evolution in economic attack sophistication, demonstrating how attackers can leverage subtle interdependencies between ostensibly separate markets. As DeFi protocols grow in complexity and value, we can expect attacks to increasingly target these economic vulnerabilities rather than code-level exploits.</p>
      
      <p class="mb-4">This incident underscores the need for security modeling that accounts for the economic reality of interconnected markets. As the boundaries between DeFi venues become increasingly porous through cross-chain bridges, composable protocols, and sophisticated arbitrage infrastructure, security models that assume market independence will become increasingly vulnerable.</p>
      
      <p class="mb-4">The Open Crypto Foundation continues to work with affected protocols to develop more robust security frameworks that address these emerging attack vectors. We urge all DeFi teams to reassess their oracle implementations and risk models in light of this incident.</p>
    `,
    tags: ["Security", "Exploit Analysis", "DeFi", "Oracle Manipulation", "Lending Protocols", "Risk Management"],
    imageUrl: "/images/blog/scam-psychology.jpg",
    relatedPosts: [1, 4]
  },
  {
    id: 8,
    title: "The Regulatory Implications of FATF's Updated Virtual Asset Guidance",
    slug: "fatf-updated-virtual-asset-guidance-implications",
    excerpt: "Examining how the Financial Action Task Force's latest guidance on virtual assets will reshape compliance requirements for DeFi protocols and affect governance token holders.",
    date: "2024-11-15",
    author: "Open Crypto Foundation",
    category: "Regulation",
    content: `
      <p class="text-lg mb-4">The Financial Action Task Force (FATF) released its updated guidance on virtual asset service providers (VASPs) on October 28, 2024, marking a significant evolution in the global regulatory approach to decentralized finance. This comprehensive analysis examines the key provisions and their implications for the broader crypto ecosystem.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Key Changes in the Updated Guidance</h2>
      
      <p class="mb-4">The FATF's revised guidance represents the most substantial update since the original 2019 recommendations and clarifies several contentious points that have been debated within regulatory circles. The most significant modifications include:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">1. Expanded Definition of VASPs</h3>
      
      <p class="mb-4">Perhaps the most consequential change is the expanded definition of what constitutes a Virtual Asset Service Provider. The guidance now explicitly states that "control or sufficient influence" over a protocol can qualify an entity as a VASP, regardless of whether that entity has direct custody of user funds.</p>
      
      <p class="mb-4">Specifically, the guidance identifies several indicators of control that may trigger VASP designation:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Ability to modify protocol parameters through direct access to smart contracts</li>
        <li>Possession of multi-signature or admin keys that can affect protocol operations</li>
        <li>Control over protocol upgrades or emergency pause functions</li>
        <li>Profiting from platform fees or token value appreciation tied to platform growth</li>
        <li>Providing ongoing technical support or maintenance that is essential for protocol operation</li>
      </ul>
      
      <p class="mb-4">This expanded definition could potentially encompass many DAOs, protocol foundations, and even significant governance token holders who possess material voting influence.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">2. Risk-Based Approach to DeFi</h3>
      
      <p class="mb-4">The guidance acknowledges the unique nature of decentralized finance protocols while maintaining that "true decentralization" is rare. FATF has adopted a nuanced, risk-based approach that evaluates DeFi protocols based on:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Degree of automated operation without human intervention</li>
        <li>Governance structure and the concentration of voting power</li>
        <li>Distribution of financial benefits from protocol operation</li>
        <li>Marketing practices and user expectations of service</li>
        <li>Presence of identifiable teams providing ongoing development</li>
      </ul>
      
      <p class="mb-4">This framework avoids a binary classification of protocols as either fully decentralized or centralized, instead creating a spectrum of regulatory obligations proportional to the degree of centralized control.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">3. Travel Rule Implementation Standards</h3>
      
      <p class="mb-4">The updated guidance provides greater technical specificity regarding implementation of the "travel rule" for virtual asset transfers. Notable clarifications include:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Progressive implementation timeline based on transaction values, with complete compliance expected by 2026</li>
        <li>Standardized data fields required for cross-border transfers, including originator and beneficiary information</li>
        <li>Technical specifications for handling transfers between regulated VASPs and unhosted wallets</li>
        <li>Compliance requirements for "sunrise issues" where jurisdictions have implemented regulations at different rates</li>
      </ul>
      
      <p class="mb-4">The guidance explicitly references several technical standards, including the Travel Rule Information Sharing Alliance (TRISA) protocol and the InterVASP Messaging Standard (IVMS101), suggesting these may become de facto global standards.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">4. NFT Classification Framework</h3>
      
      <p class="mb-4">For the first time, FATF has provided detailed criteria for determining when non-fungible tokens (NFTs) should be regulated as virtual assets. The guidance establishes a multi-factor test including:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Whether the NFT is primarily designed for investment or speculation rather than collection</li>
        <li>The presence of fractionalization features that create fungibility characteristics</li>
        <li>Trading volume and secondary market liquidity relative to comparable collectibles</li>
        <li>Interoperability with regulated financial services like lending platforms</li>
      </ul>
      
      <p class="mb-4">This framework creates a more predictable basis for determining which NFT projects may be subject to AML/CFT regulations, though it still leaves considerable interpretive discretion to national regulators.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Implications for DeFi Participants</h2>
      
      <p class="mb-4">The FATF guidance is not directly binding but has historically been adopted by most major jurisdictions within 1-3 years. Our analysis suggests several key implications for different ecosystem participants:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">For Protocol Developers and DAOs</h3>
      
      <p class="mb-4">The expanded VASP definition creates significant compliance risk for protocol developers and DAO contributors. Organizations should consider:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Governance Structure Evaluation:</strong> Assessing governance models to ensure sufficient decentralization under the new criteria</li>
        <li><strong>Legal Entity Strategy:</strong> Reviewing legal entities and jurisdictional exposure in light of expanded definitions</li>
        <li><strong>Admin Key Management:</strong> Implementing multi-party computation or distributed key management for admin functions</li>
        <li><strong>Compliance Readiness:</strong> Developing contingency plans for compliance implementation if regulatory exposure cannot be mitigated</li>
      </ul>
      
      <p class="mb-4">We anticipate that many protocols will accelerate their decentralization roadmaps and adopt more distributed governance models in response to these clarifications.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">For Governance Token Holders</h3>
      
      <p class="mb-4">The guidance introduces a novel dimension of regulatory risk for significant governance token holders, who could potentially be deemed to have "sufficient influence" over a protocol. Considerations include:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Voting Delegation:</strong> Implementing voting delegation to reduce individual voting power concentration</li>
        <li><strong>Governance Participation:</strong> Evaluating the regulatory implications of active participation in governance decisions</li>
        <li><strong>Disclosure Requirements:</strong> Preparing for potential disclosure requirements if holdings exceed certain thresholds</li>
      </ul>
      
      <p class="mb-4">This represents a significant shift that could affect investment strategies for both institutional and large individual governance token holders.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">For DeFi Users</h3>
      
      <p class="mb-4">End users of DeFi protocols may experience several changes as implementations of the guidance roll out globally:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Enhanced KYC Requirements:</strong> More protocols implementing tiered KYC procedures based on transaction volumes</li>
        <li><strong>Wallet Screening Procedures:</strong> Increased blockchain analytics usage to assess transaction risk</li>
        <li><strong>User Experience Changes:</strong> Additional friction in previously seamless processes to accommodate compliance requirements</li>
        <li><strong>Protocol Bifurcation:</strong> Emergence of parallel "compliant" and "permissionless" versions of protocols catering to different regulatory environments</li>
      </ul>
      
      <div class="bg-blue-900/30 border border-blue-800 rounded-lg p-6 my-8">
        <h4 class="text-xl font-semibold mb-3 text-white">Jurisdictional Arbitrage Risks</h4>
        <p class="text-gray-300">
          The FATF guidance explicitly addresses "jurisdiction hopping" and encourages international coordination to prevent regulatory arbitrage. However, our analysis suggests significant implementation discrepancies will persist for at least 3-5 years, creating temporary safe harbors that may attract development activity. Protocols considering jurisdictional strategies should recognize that these advantages are likely to be temporary and that retrospective enforcement remains a significant risk.
        </p>
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Implementation Timeline and Regional Variations</h2>
      
      <p class="mb-4">While FATF provides global standards, implementation schedules and interpretations vary significantly by jurisdiction. Based on historical patterns and current regulatory signals, we project the following regional implementation timeline:</p>
      
      <table class="min-w-full border-collapse my-6">
        <thead class="bg-gray-700">
          <tr>
            <th class="px-4 py-3 text-left text-white">Region</th>
            <th class="px-4 py-3 text-left text-white">Projected Implementation</th>
            <th class="px-4 py-3 text-left text-white">Notable Deviations</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">European Union</td>
            <td class="px-4 py-3">Q2 2025 - Q4 2025</td>
            <td class="px-4 py-3">Stricter DeFi classification, enhanced NFT registration requirements</td>
          </tr>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">United States</td>
            <td class="px-4 py-3">Q3 2025 - Q2 2026</td>
            <td class="px-4 py-3">Expanded enforcement authority, heightened penalty structure</td>
          </tr>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">Singapore</td>
            <td class="px-4 py-3">Q1 2025 - Q3 2025</td>
            <td class="px-4 py-3">Gradual implementation, regulatory sandbox provisions</td>
          </tr>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">Japan</td>
            <td class="px-4 py-3">Q3 2025 - Q1 2026</td>
            <td class="px-4 py-3">Modified travel rule thresholds, self-regulatory organization involvement</td>
          </tr>
          <tr class="bg-gray-800 border-t border-gray-700">
            <td class="px-4 py-3">UAE</td>
            <td class="px-4 py-3">Q1 2025 - Q3 2025</td>
            <td class="px-4 py-3">Accelerated implementation, specialized licensing categories</td>
          </tr>
        </tbody>
      </table>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">OCF Policy Response and Recommendations</h2>
      
      <p class="mb-4">The Open Crypto Foundation is actively engaging with policymakers to promote balanced implementation of these guidelines. Our recommendations focus on three key principles:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">1. Proportionate Implementation</h3>
      
      <p class="mb-4">We advocate for graduated compliance obligations based on protocol risk profiles, transaction volumes, and decentralization metrics. Full VASP obligations should only apply to clearly centralized services, with reduced requirements for protocols demonstrating substantial decentralization.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">2. Technical Feasibility</h3>
      
      <p class="mb-4">Regulatory requirements should be technically feasible within the constraints of public blockchain architecture. Privacy-preserving compliance solutions that don't compromise blockchain security should be prioritized over approaches that fundamentally alter the technology.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">3. Innovation Protection</h3>
      
      <p class="mb-4">Regulatory frameworks should explicitly protect software development, open-source contributions, and permissionless innovation. Clear safe harbors for non-custodial software development are essential to prevent regulatory overreach.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion: A Watershed Moment for DeFi Regulation</h2>
      
      <p class="mb-4">The FATF's updated guidance represents a watershed moment in DeFi regulation, providing substantial clarity while creating new compliance challenges. While aspects of the guidance are concerning from an innovation perspective, the overall framework acknowledges the unique characteristics of decentralized technologies and allows for proportionate regulation.</p>
      
      <p class="mb-4">The next 18-24 months will be critical as jurisdictions begin implementing these recommendations. Projects that proactively address these regulatory considerations will be better positioned to navigate the evolving landscape while maintaining their core functionality and user experience.</p>
      
      <p class="mb-4">The Open Crypto Foundation is developing detailed compliance frameworks and technical standards to help protocols adapt to these changes. We encourage ecosystem participants to review our forthcoming technical guidance on decentralized governance best practices and regulatory-minimized protocol architectures, which will be published in early 2025.</p>
    `,
    tags: ["Regulation", "FATF", "Compliance", "AML", "KYC", "DeFi", "Governance", "Travel Rule"],
    imageUrl: "/images/blog/quarterly-report.jpg",
    relatedPosts: [5, 10]
  },
  // Additional posts could be defined here
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find the post that matches the slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // Get related posts
  const relatedPosts = post?.relatedPosts 
    ? blogPosts.filter(relPost => post.relatedPosts.includes(relPost.id))
    : [];

  // Handle case when post is not found or still loading
  if (!post) {
    return (
      <div className="py-20 text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">Loading article...</h1>
          {router.isReady && (
            <>
              <p className="text-gray-400 mb-6">The article could not be found or is still loading.</p>
              <Link href="/blog">
                <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-colors">
                  Back to Blog
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }

  const seoConfig = {
    title: post.title + " | Open Crypto Foundation Blog",
    description: post.excerpt || "Article from the Open Crypto Foundation Blog",
    imageUrl: "https://bafkreic3dkakjycfdlecqgqrnbmj7ghrwzfkfchqlthypadrudnwnp6npy.ipfs.w3s.link/",
  };

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        {/* Open Graph meta tags for better social sharing */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={seoConfig.imageUrl} />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Back navigation */}
          <div className="mb-8">
            <Link href="/blog">
              <a className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <FaArrowLeft className="mr-2" />
                Back to All Articles
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {/* Featured Image */}
                <div className="h-80 bg-gray-700 relative overflow-hidden">
                  {/* Display the actual image */}
                  <img 
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                
                {/* Article Content */}
                <div className="p-6 md:p-8">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center mb-4 gap-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <FaCalendarAlt className="mr-1" size={12} />
                      {post.date}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <FaUser className="mr-1" size={12} />
                      {post.author}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {post.title}
                  </h1>
                  
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg prose-invert max-w-none text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-gray-400">
                        <FaTag className="inline mr-2" />
                        Tags:
                      </span>
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Share */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-4">Share this article:</span>
                      <div className="flex space-x-3">
                        <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                          <FaTwitter />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                          <FaLinkedinIn />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                          <FaFacebookF />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-white">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                        <div className="p-6">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 rounded-full mb-3">
                            {relatedPost.category}
                          </span>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <a className="block">
                              <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                                {relatedPost.title}
                              </h3>
                            </a>
                          </Link>
                          <p className="text-gray-300 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">{relatedPost.date}</span>
                            <Link href={`/blog/${relatedPost.slug}`}>
                              <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                                Read More →
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Author Info */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-medium text-white">{post.author}</h4>
                    <p className="text-gray-400 text-sm">Crypto Security Analyst</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Specializes in cryptocurrency security research and educational content creation. Has been in the blockchain space since 2016 and regularly contributes to leading industry publications.
                </p>
              </div>
              
              {/* Newsletter Subscription */}
              <NewsletterSubscribe />
              
              {/* Article Categories */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Explore Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog?category=Security">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Security</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?category=Announcements">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Announcements</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?category=Research">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Research</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?category=Reports">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Reports</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </>
  );
} 