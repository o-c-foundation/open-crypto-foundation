import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  FaBitcoin, 
  FaEthereum, 
  FaLayerGroup, 
  FaHistory, 
  FaCodeBranch, 
  FaExchangeAlt,
  FaInfoCircle,
  FaChartLine,
  FaCoins,
  FaExclamationTriangle,
  FaCheckCircle,
  FaBuilding,
  FaWater,
  FaExchangeAlt as FaExchange,
  FaChartLine as FaChart,
  FaBalanceScale,
  FaRocket,
  FaStore,
  FaChartArea,
  FaShieldAlt
} from 'react-icons/fa'
import TabLayout from '../../components/TabLayout'

export default function DeFiFundamentals() {
  const [activeTab, setActiveTab] = useState('crypto-basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'crypto-basics', name: 'Crypto Fundamentals', icon: <FaBitcoin className="text-yellow-400" /> },
    { id: 'defi-intro', name: 'DeFi Introduction', icon: <FaExchangeAlt className="text-blue-400" /> },
    { id: 'token-ecosystem', name: 'Token Ecosystem', icon: <FaCoins className="text-green-400" /> },
    { id: 'dex-and-amm', name: 'DEXs & Liquidity', icon: <FaWater className="text-purple-400" /> },
    { id: 'token-launches', name: 'Token Launches & Markets', icon: <FaRocket className="text-pink-400" /> }
  ]

  // Top 10 blockchains by market cap (as of creation date)
  const topBlockchains = [
    {
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency that introduced blockchain technology to the world.",
      type: "Layer 1",
      marketCap: "$1.2 trillion",
      consensus: "Proof of Work",
      features: ["Store of Value", "Peer-to-peer Transactions", "Limited Smart Contract Functionality (via Taproot)"]
    },
    {
      name: "Ethereum (ETH)",
      description: "The leading smart contract platform that enables decentralized applications and DeFi.",
      type: "Layer 1",
      marketCap: "$368 billion",
      consensus: "Proof of Stake",
      features: ["Smart Contracts", "dApps", "ERC-20 Tokens", "NFTs"]
    },
    {
      name: "Binance Coin (BNB)",
      description: "Native token of Binance Exchange and the BNB Chain ecosystem.",
      type: "Layer 1",
      marketCap: "$65 billion",
      consensus: "Proof of Staked Authority",
      features: ["EVM Compatible", "High Throughput", "Low Gas Fees"]
    },
    {
      name: "Solana (SOL)",
      description: "High-performance blockchain focused on speed and low transaction costs.",
      type: "Layer 1",
      marketCap: "$52 billion",
      consensus: "Proof of History + Proof of Stake",
      features: ["High TPS", "Low Fees", "Parallel Processing"]
    },
    {
      name: "XRP",
      description: "Digital asset built for payments that enables real-time global transfers.",
      type: "Layer 1",
      marketCap: "$34 billion",
      consensus: "XRP Ledger Consensus Protocol",
      features: ["Fast Settlements", "Low Cost", "Cross-border Payments"]
    },
    {
      name: "Cardano (ADA)",
      description: "Research-driven blockchain platform built using peer-reviewed academic research.",
      type: "Layer 1",
      marketCap: "$15 billion",
      consensus: "Ouroboros Proof of Stake",
      features: ["Scientific Approach", "Multi-layer Architecture", "Smart Contracts"]
    },
    {
      name: "Avalanche (AVAX)",
      description: "Platform for launching decentralized applications with high throughput.",
      type: "Layer 1",
      marketCap: "$11 billion",
      consensus: "Avalanche Consensus",
      features: ["Sub-second Finality", "Subnet Architecture", "EVM Compatible"]
    },
    {
      name: "Polkadot (DOT)",
      description: "Multi-chain network that enables different blockchains to transfer messages and value.",
      type: "Layer 0",
      marketCap: "$9 billion",
      consensus: "Nominated Proof of Stake",
      features: ["Interoperability", "Parachains", "Shared Security"]
    },
    {
      name: "Polygon (MATIC)",
      description: "Ethereum scaling platform that enables fast, low-cost transactions.",
      type: "Layer 2",
      marketCap: "$8 billion",
      consensus: "Proof of Stake",
      features: ["Ethereum Scaling", "Multiple Solutions", "Low Gas Fees"]
    },
    {
      name: "Tron (TRX)",
      description: "Blockchain platform focused on content sharing and entertainment applications.",
      type: "Layer 1",
      marketCap: "$8 billion",
      consensus: "Delegated Proof of Stake",
      features: ["High Throughput", "Content Distribution", "dApp Ecosystem"]
    }
  ]

  // Timeline of DeFi history
  const defiTimeline = [
    {
      year: 2009,
      title: "Bitcoin Genesis",
      description: "Bitcoin launched as the first cryptocurrency, introducing the core concept of decentralized, peer-to-peer value transfer without intermediaries."
    },
    {
      year: 2013,
      title: "Colored Coins & Early Financial Primitives",
      description: "Early experiments on the Bitcoin blockchain to represent and transfer assets beyond just BTC, laying conceptual groundwork for tokenization."
    },
    {
      year: 2015,
      title: "Ethereum Launch",
      description: "Ethereum went live, introducing programmable smart contracts that made complex financial applications possible on blockchain."
    },
    {
      year: 2017,
      title: "ICO Boom and First DEXs",
      description: "The ICO boom created thousands of ERC-20 tokens, while early decentralized exchanges like EtherDelta emerged to trade them without centralized intermediaries."
    },
    {
      year: 2018,
      title: "Stablecoins Gain Traction",
      description: "MakerDAO launched DAI, the first decentralized stablecoin. USDC and other stablecoins appeared, providing critical infrastructure for DeFi."
    },
    {
      year: 2019,
      title: "DeFi Summer Precursors",
      description: "Compound, Aave, and other lending protocols launched. Uniswap introduced automated market makers (AMMs), revolutionizing decentralized trading."
    },
    {
      year: 2020,
      title: "DeFi Summer",
      description: "Compound launched COMP token and kickstarted 'yield farming,' leading to the DeFi boom known as 'DeFi Summer' with TVL growing from $1B to $15B."
    },
    {
      year: 2021,
      title: "Mainstream Attention and Multi-chain DeFi",
      description: "DeFi expanded beyond Ethereum to Binance Smart Chain, Solana, and other chains. Total value locked in DeFi protocols exceeded $100 billion."
    },
    {
      year: 2022,
      title: "DeFi Challenges and Regulation",
      description: "Market downturns and several high-profile protocol failures highlighted risks. Regulatory attention increased significantly."
    },
    {
      year: 2023,
      title: "Recovery and Maturation",
      description: "DeFi began recovering with improved security practices, more institutional adoption, and a focus on sustainable yield generation over speculative farming."
    },
    {
      year: 2024,
      title: "Institutional DeFi and RWAs",
      description: "Major growth in tokenized real-world assets (RWAs) and institutional DeFi solutions, with traditional finance increasingly integrating with DeFi infrastructure."
    }
  ]

  // Token types data
  const tokenTypes = [
    {
      type: "Utility Tokens",
      description: "Tokens that provide access to a project's product or service.",
      examples: ["Basic Attention Token (BAT)", "Filecoin (FIL)", "Chainlink (LINK)"],
      features: ["Grant access rights", "Pay for specific services", "Often native to specific platforms"]
    },
    {
      type: "Security Tokens",
      description: "Tokens that represent ownership in an external asset or enterprise.",
      examples: ["Tokenized stocks", "Real estate tokens", "Revenue-sharing tokens"],
      features: ["Subject to securities regulations", "Represent ownership rights", "May provide dividends"]
    },
    {
      type: "Governance Tokens",
      description: "Tokens that grant voting rights in decentralized protocol decisions.",
      examples: ["Uniswap (UNI)", "Aave (AAVE)", "Compound (COMP)"],
      features: ["Voting on protocol changes", "Proposal submission rights", "Treasury management"]
    },
    {
      type: "Non-Fungible Tokens (NFTs)",
      description: "Unique tokens representing ownership of distinct digital or physical assets.",
      examples: ["Digital art", "Virtual real estate", "Collectibles"],
      features: ["Uniqueness", "Indivisibility", "Provable scarcity"]
    },
    {
      type: "Stablecoins",
      description: "Tokens designed to maintain a stable value, typically pegged to a fiat currency.",
      examples: ["USDC", "DAI", "USDT"],
      features: ["Price stability", "Reduced volatility", "Bridge between crypto and fiat"]
    },
    {
      type: "Liquidity Provider (LP) Tokens",
      description: "Tokens representing deposit of assets into a liquidity pool on DEXs.",
      examples: ["Uniswap LP tokens", "PancakeSwap LP tokens"],
      features: ["Represent pool share", "Earn trading fees", "Can be staked for additional rewards"]
    },
    {
      type: "Wrapped Tokens",
      description: "Tokens representing another cryptocurrency on a different blockchain.",
      examples: ["Wrapped Bitcoin (WBTC)", "Wrapped ETH (WETH)"],
      features: ["Cross-chain compatibility", "Represent 1:1 value of underlying asset", "Enhanced functionality"]
    },
    {
      type: "Meme Tokens",
      description: "Tokens created primarily as jokes or based on internet memes with limited utility.",
      examples: ["Dogecoin (DOGE)", "Shiba Inu (SHIB)"],
      features: ["Often community-driven", "Highly volatile", "Limited practical utility"]
    }
  ]

  // Leading token ecosystems data
  const tokenEcosystems = [
    {
      chain: "Ethereum",
      standard: "ERC-20, ERC-721, ERC-1155",
      tokensCount: "500,000+",
      marketShare: "~70% of all tokens",
      notableTokens: ["USDC", "USDT", "LINK", "UNI", "Most major DeFi tokens"],
      strengths: ["First-mover advantage", "Largest developer ecosystem", "Highest security", "Most established standards"],
      image: "/images/ethereum.svg"
    },
    {
      chain: "BNB Chain",
      standard: "BEP-20, BEP-721, BEP-1155",
      tokensCount: "100,000+",
      marketShare: "~10% of all tokens",
      notableTokens: ["CAKE", "BAKE", "BURGER", "Many memecoins and gaming tokens"],
      strengths: ["Low fees", "Fast transactions", "Binance exchange integration", "Easier token creation"],
      image: "/images/bnb.svg"
    },
    {
      chain: "Solana",
      standard: "SPL Token Standard",
      tokensCount: "20,000+",
      marketShare: "~6% of all tokens",
      notableTokens: ["Serum (SRM)", "Raydium (RAY)", "Star Atlas (ATLAS)"],
      strengths: ["Ultra-fast transactions", "Low fees", "Growing ecosystem", "Strong for NFTs and gaming"],
      image: "/images/solana.svg"
    },
    {
      chain: "Polygon",
      standard: "ERC-20, ERC-721, ERC-1155 (compatible)",
      tokensCount: "30,000+",
      marketShare: "~5% of all tokens",
      notableTokens: ["AAVE (Polygon)", "QUICK", "Wrapped tokens from Ethereum"],
      strengths: ["Ethereum compatibility", "Low fees", "Fast transactions", "Growing L2 ecosystem"],
      image: "/images/polygon.svg"
    }
  ]

  // Positive use cases for tokens
  const positiveUseCases = [
    {
      title: "Democratic Governance",
      description: "Governance tokens enable decentralized decision-making where all stakeholders can participate proportionally.",
      impact: "Creates more inclusive, transparent governance systems that prevent power concentration.",
      examples: ["MakerDAO's MKR token allowing holders to vote on important protocol parameters", "Uniswap's UNI enabling community governance of the exchange"]
    },
    {
      title: "Financial Inclusion",
      description: "Tokens enable people globally to access financial services without requiring traditional banking infrastructure.",
      impact: "Provides banking services to the 1.7 billion adults without bank accounts, particularly in developing regions.",
      examples: ["Remittance services using stablecoins to send money across borders", "Microloans in regions without banking infrastructure"]
    },
    {
      title: "Aligned Incentives",
      description: "Token economics can align incentives between users, developers, and investors in ways traditional models cannot.",
      impact: "Creates sustainability in protocols where all participants benefit from growth and good behavior.",
      examples: ["File storage tokens incentivizing hosting data", "Curation tokens rewarding quality content"]
    },
    {
      title: "Fractional Ownership",
      description: "Tokens enable fractional ownership of expensive assets that were previously inaccessible to most people.",
      impact: "Democratizes access to high-value investments and reduces wealth concentration.",
      examples: ["Tokenized real estate allowing small investors to own fractions of properties", "Fractionalized art ownership"]
    },
    {
      title: "Programmable Money",
      description: "Smart contract-enabled tokens can automate complex financial arrangements without intermediaries.",
      impact: "Reduces costs, eliminates rent-seeking middlemen, and enables novel financial models.",
      examples: ["Automated revenue sharing in creative industries", "Conditional payments based on real-world outcomes"]
    },
    {
      title: "Public Goods Funding",
      description: "Token-based mechanisms like quadratic funding enable more effective public goods financing.",
      impact: "Funds valuable community resources that traditional markets might undersupply.",
      examples: ["Gitcoin Grants using quadratic funding for open source development", "Retroactive public goods funding models"]
    }
  ]

  // Problems to address in the token ecosystem
  const tokenProblems = [
    {
      problem: "Rug Pulls & Exit Scams",
      description: "Developers abandon projects after raising funds, often selling their token holdings and leaving investors with worthless tokens.",
      potentialSolutions: ["Standardized token contract auditing", "Time-locked developer tokens", "Community-governed treasuries", "Token launch reputation systems"]
    },
    {
      problem: "Token Distribution Inequality",
      description: "Many projects allocate excessive percentages to founders/investors, leading to concentrated control and pump-and-dump schemes.",
      potentialSolutions: ["Transparent tokenomics disclosure standards", "Fair launch mechanisms", "Longer vesting periods", "Progressive decentralization frameworks"]
    },
    {
      problem: "Regulatory Uncertainty",
      description: "Unclear regulations around tokens create legal risks for both creators and users, stifling innovation.",
      potentialSolutions: ["Clearer regulatory frameworks", "Self-regulatory organizations", "Compliance-as-a-service tools", "Educational initiatives for policymakers"]
    },
    {
      problem: "Speculative Bubbles",
      description: "Excessive speculation often overshadows actual utility, creating boom-bust cycles that harm adoption.",
      potentialSolutions: ["Value-accrual mechanisms tied to usage", "Focus on non-speculative metrics", "Reduced emissions during market euphoria", "Better financial literacy education"]
    },
    {
      problem: "Governance Attacks",
      description: "Governance token systems can be vulnerable to takeovers, bribery, and manipulation by wealthy actors.",
      potentialSolutions: ["Quadratic voting", "Conviction voting", "Governance participation incentives", "Reputation-based voting power"]
    },
    {
      problem: "MEV & Frontrunning",
      description: "Maximal Extractable Value (MEV) enables market manipulation and harmful transaction reordering.",
      potentialSolutions: ["Fair ordering protocols", "MEV-capture mechanisms", "Improved mempool encryption", "Protocol-level disincentives for harmful MEV"]
    },
    {
      problem: "Environmental Concerns",
      description: "Token economies on proof-of-work chains face criticism for energy consumption and environmental impact.",
      potentialSolutions: ["Moving to proof-of-stake", "Carbon offset integration", "Energy efficiency improvements", "Renewable energy mining"]
    }
  ]

  // DEX comparison data
  const dexVsCexComparison = [
    {
      aspect: "Custody of Funds",
      dex: "Non-custodial; users maintain control of their assets through self-custody wallets",
      cex: "Custodial; users deposit funds to the exchange which controls private keys"
    },
    {
      aspect: "Operation Model",
      dex: "Decentralized; operates through smart contracts on a blockchain",
      cex: "Centralized; operated by a company with central servers"
    },
    {
      aspect: "Trading Mechanism",
      dex: "Typically uses automated market makers (AMMs) or order books on-chain",
      cex: "Uses traditional order book matching engines"
    },
    {
      aspect: "KYC/AML Requirements",
      dex: "Typically permissionless with no KYC requirements",
      cex: "Usually requires identity verification and KYC/AML compliance"
    },
    {
      aspect: "Speed & Cost",
      dex: "Speed limited by blockchain; may have higher fees during network congestion",
      cex: "Typically faster execution with lower trading fees"
    },
    {
      aspect: "Asset Availability",
      dex: "Any token can be listed without permission; long tail of assets",
      cex: "Limited to assets approved and listed by the exchange"
    },
    {
      aspect: "Security Model",
      dex: "Security depends on smart contract code; no central point of failure",
      cex: "Security depends on exchange's security practices; vulnerable to hacks"
    }
  ];

  // AMM types
  const ammTypes = [
    {
      name: "Constant Product (x*y=k)",
      examples: ["Uniswap V2", "PancakeSwap", "SushiSwap", "Raydium", "Orca (Classic)"],
      description: "Uses the formula x*y=k where x and y are the reserves of two tokens. Ensures liquidity at all price points but suffers from impermanent loss for volatile assets.",
      pros: ["Simple and battle-tested", "Works for any token pair", "Always provides liquidity"],
      cons: ["Inefficient capital usage", "High slippage for large trades", "Significant impermanent loss"]
    },
    {
      name: "Stableswap (Curve Model)",
      examples: ["Curve Finance", "Saddle", "Ellipsis", "Mercurial (Solana)"],
      description: "Designed for similar-valued assets like stablecoins, uses a more complex formula that allows for more efficient trades around the peg.",
      pros: ["Low slippage for similar-valued assets", "Lower impermanent loss", "Capital efficient"],
      cons: ["Only works well for similar-valued assets", "More complex mathematics", "Less efficient for volatile pairs"]
    },
    {
      name: "Weighted Pools",
      examples: ["Balancer", "Beethoven X", "Orca (Weighted Pools)"],
      description: "Generalizes constant product to support multiple tokens with different weights in a single pool.",
      pros: ["Supports multiple assets in one pool", "Customizable weights", "Can act as index funds"],
      cons: ["More complex than basic AMMs", "Still susceptible to impermanent loss"]
    },
    {
      name: "Concentrated Liquidity",
      examples: ["Uniswap V3", "Algebra", "Camelot", "Orca (Whirlpools)"],
      description: "Allows LPs to provide liquidity within specific price ranges, increasing capital efficiency.",
      pros: ["Higher capital efficiency", "Better returns for LPs", "Lower slippage for traders"],
      cons: ["More complex to manage", "Still has impermanent loss", "Requires active management"]
    },
    {
      name: "Dynamic Liquidity Market Maker (DLMM)",
      examples: ["Meteora (Solana)"],
      description: "A Solana-specific innovation that dynamically adjusts liquidity distribution in response to market conditions, combining benefits of concentrated liquidity with automated position management.",
      pros: ["Automatic liquidity optimization", "Reduced impermanent loss risk", "Better capital efficiency than standard CLMMs", "No active position management required"],
      cons: ["Newer and less battle-tested", "Currently only available on Solana", "More complex fee structure"]
    },
    {
      name: "Proactive Market Maker (PMM)",
      examples: ["DODO", "dYdX Hybrid", "Lifinity (Solana)"],
      description: "Uses price oracles and a dynamic curve that mimics orderbook behavior with concentrated liquidity near market price.",
      pros: ["High capital efficiency", "Lower slippage", "Reduced impermanent loss"],
      cons: ["Relies on price oracles", "More complex", "Potential centralization via oracles"]
    },
    {
      name: "Constant Sum (x+y=k)",
      examples: ["Shell Protocol", "mStable", "Cykura (Solana)"],
      description: "Uses x+y=k formula, which works well for assets that should maintain the same price but has zero slippage.",
      pros: ["No slippage for equal-valued assets", "No impermanent loss when assets maintain peg", "Capital efficient"],
      cons: ["Can be drained if prices diverge", "Limited to very specific use cases"]
    },
    {
      name: "Dynamic Automated Market Makers",
      examples: ["Kyber DMM", "THORChain", "Jupiter (Solana)", "Crema Finance (Solana)"],
      description: "Adjusts parameters based on market conditions, volatility, and other factors.",
      pros: ["Adapts to market conditions", "Can optimize for different market scenarios", "More efficient"],
      cons: ["Complex mechanisms", "Relies on external data", "Newer and less battle-tested"]
    }
  ];

  // DEX Evolution Timeline
  const dexEvolution = [
    {
      year: 2016,
      event: "First DEXs Emerge",
      description: "EtherDelta and IDEX launch using on-chain order books, offering the first truly non-custodial trading experience.",
      innovation: "On-chain order books"
    },
    {
      year: 2017,
      event: "0x Protocol Launches",
      description: "Introduced a standard for decentralized exchange with off-chain order books and on-chain settlement.",
      innovation: "Hybrid order book model"
    },
    {
      year: 2018,
      event: "Uniswap V1 Launch",
      description: "Hayden Adams launches Uniswap, pioneering the x*y=k automated market maker model that would revolutionize DEXs.",
      innovation: "Constant product AMM"
    },
    {
      year: 2019,
      event: "Bancor and Kyber Gain Traction",
      description: "Early alternatives to Uniswap with different liquidity models started gaining users.",
      innovation: "Alternative AMM formulas"
    },
    {
      year: 2020,
      event: "DeFi Summer & Liquidity Mining",
      description: "Compound introduces yield farming, leading to an explosion in DEX usage. Uniswap V2, Balancer, and Curve gain massive adoption.",
      innovation: "Liquidity mining incentives"
    },
    {
      year: 2021,
      event: "Uniswap V3 & Concentrated Liquidity",
      description: "Introduction of concentrated liquidity allowing LPs to provide capital within specific price ranges for higher efficiency.",
      innovation: "Concentrated liquidity positions"
    },
    {
      year: 2022,
      event: "Emergence of Orderbook DEXs",
      description: "Projects like dYdX and Serum gain popularity with on-chain orderbooks and advanced trading features.",
      innovation: "High-performance on-chain orderbooks"
    },
    {
      year: 2023,
      event: "Cross-chain DEXs",
      description: "Protocols like THORChain and LayerZero-based DEXs enable trading across different blockchains without wrapped tokens.",
      innovation: "Cross-chain liquidity"
    },
    {
      year: 2024,
      event: "ZK-Powered DEXs",
      description: "Zero-knowledge proofs enable private trading and more efficient on-chain order books.",
      innovation: "Privacy-preserving swaps and settlements"
    }
  ];

  // LP risks and benefits
  const lpRisksAndBenefits = [
    {
      benefit: "Fee Income",
      description: "Liquidity providers earn a portion of trading fees generated by swaps in their pool.",
      consideration: "Fee income can vary significantly based on trading volume and may not always offset impermanent loss."
    },
    {
      benefit: "Yield Farming Rewards",
      description: "Many protocols offer additional token incentives to liquidity providers.",
      consideration: "Rewards often decrease over time as programs end; token value may decline (impermanent loss)."
    },
    {
      benefit: "Capital Efficiency",
      description: "Modern DEXs allow LPs to earn more with less capital through concentrated liquidity positions.",
      consideration: "Requires more active management and may incur higher gas costs for position adjustments."
    },
    {
      benefit: "Passive Income",
      description: "Can generate returns without actively trading or timing the market.",
      consideration: "Not truly passive - requires monitoring positions and rebalancing as market conditions change."
    },
    {
      risk: "Impermanent Loss",
      description: "Loss compared to holding when asset prices in a pool change relative to each other.",
      mitigation: "Provide liquidity for correlated assets or stablecoins; use concentrated liquidity in expected range."
    },
    {
      risk: "Smart Contract Risk",
      description: "Vulnerabilities in smart contracts could lead to loss of funds.",
      mitigation: "Choose well-audited protocols; consider using DeFi insurance."
    },
    {
      risk: "Market Risk",
      description: "Extreme market volatility can lead to significant impermanent loss.",
      mitigation: "Use stablecoin pairs or consider single-sided staking alternatives."
    },
    {
      risk: "MEV (Maximal Extractable Value)",
      description: "Advanced traders can front-run or sandwich LP positions.",
      mitigation: "Choose DEXs with MEV protection; use protocols with private order flow."
    }
  ];

  // DEX innovations and future trends
  const dexInnovations = [
    {
      innovation: "Multiple Pool Types",
      description: "DEXs like Balancer support various pool configurations beyond simple 50/50 pairs, allowing for weighted pools and index-like exposure.",
      impact: "Enables more capital-efficient liquidity provision and more complex financial products."
    },
    {
      innovation: "Single-Sided Liquidity",
      description: "Protocols like Bancor v3 and Tokemak allow providing liquidity with just one asset, protecting against impermanent loss.",
      impact: "Makes liquidity provision accessible to more users and reduces risk of IL."
    },
    {
      innovation: "Active Liquidity Management",
      description: "Services like Arrakis, Gamma, and Gelato automate the management of concentrated liquidity positions.",
      impact: "Optimizes returns for LPs without requiring constant monitoring and adjustments."
    },
    {
      innovation: "Liquidity as a Service (LaaS)",
      description: "Protocols that direct liquidity to where it's needed most through incentive mechanisms.",
      impact: "More efficient allocation of capital across DeFi and better liquidity for emerging projects."
    },
    {
      innovation: "MEV Protection",
      description: "Technologies like Flashbots Protect and private mempools to prevent front-running and sandwich attacks.",
      impact: "Reduces value extraction from traders and LPs, making DEXs more fair."
    },
    {
      innovation: "Intent-based Trading",
      description: "Systems where users express the trades they want to make without specifying exact execution parameters.",
      impact: "Allows for more efficient routing and execution across multiple liquidity sources."
    },
    {
      innovation: "Zero-Knowledge Proofs",
      description: "Privacy-preserving technologies for DEXs that hide trade details while maintaining verifiability.",
      impact: "Addresses front-running concerns and provides privacy for institutional traders."
    }
  ];

  // Fair Launch Platforms
  const fairLaunchPlatforms = [
    {
      name: "Liquidity Bootstrapping Pools (LBPs)",
      examples: ["Balancer", "Copper Launch", "DODO"],
      description: "Auction-like mechanisms that start at a high price and gradually decrease to find a fair market price while preventing large buyers from dominating.",
      pros: ["Prevents whale dominance", "Price discovery", "Less MEV exploitation", "Reduces initial volatility"],
      cons: ["Complex for average users", "Still vulnerable to coordinated buying", "Less excitement than instant listings"]
    },
    {
      name: "Fair Launch Auctions",
      examples: ["Gnosis Auction", "Fairmint", "MISO by SushiSwap"],
      description: "Token distribution mechanisms where all participants pay the same clearing price regardless of their bid, creating a more equitable distribution.",
      pros: ["Everyone pays same price", "Transparent process", "Prevents front-running", "Community focused"],
      cons: ["Less initial price action", "May result in lower initial raise", "Requires significant planning"]
    },
    {
      name: "Initial DEX Offerings (IDOs)",
      examples: ["PinkSale", "DxSale", "Unicrypt", "PadSwap"],
      description: "Token sales conducted directly on DEXs, often with minimal requirements and instant trading post-launch.",
      pros: ["Immediate liquidity", "Low barrier to entry", "Simple to participate", "Accessible to small projects"],
      cons: ["Prone to pump and dumps", "Limited vetting", "Encourages speculation over utility", "High risk of scams"]
    },
    {
      name: "Decentralized Launchpads",
      examples: ["DAO Maker", "PolkaStarter", "Seedify", "GameFi"],
      description: "Platforms that curate projects and provide tiered access to token sales based on user stake or participation.",
      pros: ["Some project vetting", "Structured sales", "Community building", "Post-launch support"],
      cons: ["Often favor large token holders", "Creates exclusivity", "May still have weak vetting standards"]
    },
    {
      name: "Community-Driven Distribution",
      examples: ["Olympus Pro", "Neptune DAO", "Llama Airforce"],
      description: "Mechanisms where tokens are distributed based on contribution, participation, or bonding of other assets.",
      pros: ["Aligns incentives", "Value-driven distribution", "Reduces speculation", "Builds engaged community"],
      cons: ["Slower growth", "Complex mechanisms", "Harder to bootstrap liquidity", "Less immediate trading excitement"]
    }
  ];

  // Bonding Curve Types
  const bondingCurveTypes = [
    {
      type: "Linear Bonding Curve",
      formula: "P = m * S + b",
      description: "Price increases at a constant rate as token supply increases, creating a straight line relationship.",
      applications: ["Simple token sales", "Predictable price growth", "Early-stage projects"],
      limitations: ["No dampening of price volatility", "May grow too quickly at scale", "Less capital efficient"]
    },
    {
      type: "Exponential Bonding Curve",
      formula: "P = a^S",
      description: "Price grows exponentially as supply increases, creating scarcity value at higher supply levels.",
      applications: ["Scarcity-focused tokens", "Collector communities", "Store of value projects"],
      limitations: ["May become prohibitively expensive", "Can create extreme volatility", "Less accessible as prices rise"]
    },
    {
      type: "Logarithmic Bonding Curve",
      formula: "P = log(S) + c",
      description: "Price grows quickly at first, then slows down as supply increases, creating a more stable long-term price.",
      applications: ["Long-term token economies", "Utility tokens", "Governance systems"],
      limitations: ["Less exciting initial growth", "Complex to explain to users", "May undervalue tokens initially"]
    },
    {
      type: "Sigmoid Bonding Curve",
      formula: "P = 1/(1+e^(-S))",
      description: "S-shaped curve that grows slowly, then rapidly, then slowly again, modeling many natural growth patterns.",
      applications: ["Mature token economies", "Network effect projects", "Multi-phase token sales"],
      limitations: ["Complex to implement", "Difficult to predict phase transitions", "Requires careful parameter setting"]
    },
    {
      type: "Dynamic Bonding Curve",
      formula: "Variable based on parameters",
      description: "Curves that adjust parameters based on market conditions, external data, or governance decisions.",
      applications: ["Algorithmic stablecoins", "Elastic supply tokens", "Adaptive market makers"],
      limitations: ["Highly complex", "Difficult to audit", "May have unexpected behaviors"]
    }
  ];

  // NFT Marketplace Comparison
  const nftMarketplaces = [
    {
      name: "General NFT Marketplaces",
      examples: ["OpenSea", "Blur", "Magic Eden", "Rarible"],
      features: ["Wide range of NFT categories", "Cross-chain support", "Secondary market royalties", "Collection verification"],
      advantages: ["Largest liquidity", "Brand recognition", "User-friendly interfaces", "Large audience"],
      challenges: ["High competition", "Limited curation", "Harder discovery", "Variable fees"]
    },
    {
      name: "Art-Focused Marketplaces",
      examples: ["SuperRare", "Foundation", "MakersPlace", "KnownOrigin"],
      features: ["Curated art focus", "Artist verification", "Limited editions", "Exhibition formats"],
      advantages: ["Higher quality standards", "Better for serious artists", "Stronger community", "Cultural relevance"],
      challenges: ["Higher barriers to entry", "Lower volume", "Less accessibility", "Often Ethereum-only"]
    },
    {
      name: "Gaming & Metaverse Marketplaces",
      examples: ["ImmutableX Marketplace", "Fractal", "Axie Marketplace", "The Sandbox"],
      features: ["Game-specific assets", "In-game utility", "Low fees", "High transaction throughput"],
      advantages: ["Integrated user experience", "Clear utility", "Active usage", "Lower gas costs"],
      challenges: ["Game-dependent value", "Platform risk", "Limited to specific ecosystems"]
    },
    {
      name: "Music & Media NFT Platforms",
      examples: ["Sound.xyz", "Catalog", "Royal", "Audius"],
      features: ["Music ownership", "Streaming integration", "Royalty sharing", "Fan experiences"],
      advantages: ["Direct artist support", "New monetization models", "Community building", "Unique media experiences"],
      challenges: ["Rights complexity", "Integration with existing platforms", "Education needs", "Unclear long-term models"]
    },
    {
      name: "Domain & Identity Marketplaces",
      examples: ["ENS Marketplace", "Unstoppable Domains", "Bonfida", "Avvy Domains"],
      features: ["Human-readable addresses", "Web3 identity", "Profile integration", "Decentralized websites"],
      advantages: ["Practical utility", "Growing ecosystem support", "Long-term value", "Cross-platform use"],
      challenges: ["Speculative purchasing", "Trademark issues", "Renewal models", "Chain-specific limitations"]
    }
  ];

  // Problems with current token launch landscape
  const launchProblems = [
    {
      problem: "Gambling-Focused Culture",
      description: "Many token launches emphasize short-term price action over sustainable tokenomics, attracting gamblers rather than genuine users or investors.",
      examples: ["Presales with no vesting", "Artificial token scarcity", "Anonymous teams with no accountability", "Launch-and-abandon patterns"],
      impact: "Creates boom-bust cycles, damages reputation of legitimate projects, normalizes extremely high-risk behavior, and undermines the broader DeFi ecosystem's credibility."
    },
    {
      problem: "Memecoin Dominance",
      description: "Platforms incentivize launching simple meme tokens that require minimal development but can generate quick returns through hype cycles.",
      examples: ["Copy-paste token contracts", "Animal-themed tokens with no utility", "Tokens based solely on internet trends", "Projects with marketing but no roadmap"],
      impact: "Diverts capital and attention from utility-focused projects, creates unsustainable market dynamics, and reinforces cryptocurrency stereotypes as purely speculative."
    },
    {
      problem: "Race to the Bottom on Standards",
      description: "Launch platforms compete by reducing requirements and vetting to attract more projects, prioritizing volume over quality.",
      examples: ["No KYC requirements", "Minimal contract auditing", "Instant listings", "Few restrictions on tokenomics"],
      impact: "Increases prevalence of scams, reduces overall quality of new projects, and creates poor risk/reward ratios for average participants."
    },
    {
      problem: "Predatory Tokenomics",
      description: "Launch mechanisms that enable teams to extract value while providing minimal protection for participants.",
      examples: ["Hidden team tokens", "Excessive tax mechanisms", "Honeypot contracts", "Manipulated liquidity pools"],
      impact: "Undermines trust in the ecosystem, creates financial harm for participants, and establishes perverse incentives for project creators."
    },
    {
      problem: "Misaligned Incentives",
      description: "Current launch models reward hype generation and quick exits rather than sustainable development and user value creation.",
      examples: ["Influencer-driven promotions with no disclosure", "Front-loaded reward structures", "Limited focus on product-market fit", "Abandonment after initial liquidity events"],
      impact: "Creates short-term thinking, rewards marketing over development, and undermines the ethos of building sustainable decentralized alternatives to traditional systems."
    }
  ];

  // Proposed solutions for token launch improvements
  const launchSolutions = [
    {
      solution: "Standardized Token Launch Framework",
      description: "Develop industry-wide standards for token launches that establish minimum requirements for transparency, tokenomics, and security.",
      implementation: ["Community-governed standards organization", "Certification system for compliant platforms", "Open-source templates for responsible launches", "Universal disclosure format"],
      benefits: "Creates clarity for participants, establishes baseline quality expectations, and allows platforms to compete on features rather than reducing standards."
    },
    {
      solution: "Time-Weighted Incentive Structures",
      description: "Redesign launch mechanisms to reward long-term participation over short-term speculation, aligning incentives with project success.",
      implementation: ["Mandatory vesting for all participants", "Rewards that increase with holding duration", "Governance rights that mature over time", "Fee structures that penalize quick flipping"],
      benefits: "Attracts committed community members, creates stability, and encourages genuine interest in project success rather than quick profits."
    },
    {
      solution: "Enhanced Due Diligence Requirements",
      description: "Require launch platforms to implement meaningful project verification and team authentication measures.",
      implementation: ["Mandatory code audits", "Team identity verification", "Tokenomics transparency requirements", "Lock-up periods for team tokens"],
      benefits: "Reduces scam prevalence, improves overall project quality, and creates more sustainable launch ecosystems."
    },
    {
      solution: "Value-Driven Launch Metrics",
      description: "Shift focus from price action to metrics that measure actual project value, utility, and community engagement.",
      implementation: ["User adoption metrics", "Development activity tracking", "Genuine community growth measurement", "Utility-based valuation frameworks"],
      benefits: "Redirects attention to sustainable value creation, helps participants make better-informed decisions, and rewards projects building real solutions."
    },
    {
      solution: "Decentralized Reputation Systems",
      description: "Create cross-platform reputation systems for projects, teams, and participants that incentivize positive behaviors.",
      implementation: ["On-chain reputation scores", "Project history tracking", "Team performance records", "Community feedback mechanisms"],
      benefits: "Establishes accountability, creates incentives for ethical behavior, and helps participants identify quality projects amid the noise."
    }
  ];

  return (
    <>
      <Head>
        <title>DeFi Fundamentals | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="Learn the fundamentals of DeFi, cryptocurrency basics, tokens, decentralized exchanges, and market dynamics in this comprehensive guide." 
        />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              DeFi Fundamentals
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive guide to understanding decentralized finance, cryptocurrencies, and the blockchain ecosystem.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <TabLayout 
              tabs={tabs} 
              activeTab={activeTab} 
              onTabChange={setActiveTab}
              tabPosition="side"
            >
              {/* Crypto Fundamentals Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'crypto-basics' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaBitcoin className="text-yellow-400 mr-3" />
                    Cryptocurrency Fundamentals
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on decentralized networks called blockchains.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Concepts in Cryptocurrency</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Blockchain Technology</h4>
                          <p>
                            A distributed ledger that records all transactions across a network of computers. 
                            It's decentralized, transparent, and resistant to modification.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Decentralization</h4>
                          <p>
                            The distribution of power away from central authorities. In crypto, this means 
                            no single entity controls the network.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Consensus Mechanisms</h4>
                          <p>
                            Methods by which blockchain networks reach agreement on the valid state of the ledger. 
                            Examples include Proof of Work and Proof of Stake.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-medium text-white">Cryptographic Security</h4>
                          <p>
                            The use of mathematical algorithms to secure transactions and control the creation 
                            of new units.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Major Blockchain Networks</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gray-600">
                            <th className="px-4 py-3 text-left text-white">Blockchain</th>
                            <th className="px-4 py-3 text-left text-white">Type</th>
                            <th className="px-4 py-3 text-left text-white">Consensus</th>
                            <th className="px-4 py-3 text-left text-white">Key Features</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topBlockchains.map((blockchain, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'}>
                              <td className="px-4 py-3">
                                <div>
                                  <span className="font-medium text-white">{blockchain.name}</span>
                                  <p className="text-sm text-gray-400 mt-1">{blockchain.description}</p>
                                </div>
                              </td>
                              <td className="px-4 py-3">{blockchain.type}</td>
                              <td className="px-4 py-3">{blockchain.consensus}</td>
                              <td className="px-4 py-3">
                                <ul className="list-disc list-inside text-sm">
                                  {blockchain.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Blockchain Layers Explained</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Layer 0</h4>
                        <p>
                          The foundational protocols that allow multiple blockchains to be built on top. 
                          They focus on interoperability and shared security.
                        </p>
                        <p className="mt-2">
                          <strong>Examples:</strong> Polkadot, Cosmos
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Layer 1</h4>
                        <p>
                          Base blockchains that can validate and finalize transactions independently. 
                          They implement their own consensus mechanisms and security models.
                        </p>
                        <p className="mt-2">
                          <strong>Examples:</strong> Bitcoin, Ethereum, Solana, Cardano
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Layer 2</h4>
                        <p>
                          Scaling solutions built on top of Layer 1 blockchains to improve transaction 
                          throughput and reduce costs while inheriting security from the base layer.
                        </p>
                        <p className="mt-2">
                          <strong>Examples:</strong> Optimism, Arbitrum, Lightning Network, Polygon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* DeFi Introduction Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'defi-intro' ? 'block' : 'hidden'}`}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <FaExchangeAlt className="text-blue-400 mr-3" />
                    Introduction to DeFi
                  </h2>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl">
                      Decentralized Finance (DeFi) refers to financial applications built on blockchain networks that aim to recreate and improve traditional financial systems without central intermediaries.
                    </p>
                    
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Core Principles of DeFi</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaExchangeAlt className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Non-Custodial</h4>
                            <p>Users maintain control of their assets at all times through self-custody wallets.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-green-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaCodeBranch className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Permissionless</h4>
                            <p>Anyone can access DeFi services regardless of location, wealth, or status.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-purple-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaLayerGroup className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Composable</h4>
                            <p>DeFi applications can be combined like "money legos" to create new financial products.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-red-500 p-2 rounded-full mr-3 flex-shrink-0">
                            <FaInfoCircle className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">Transparent</h4>
                            <p>All transactions and code are publicly visible and verifiable on the blockchain.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">DeFi vs. Traditional Finance</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gray-600">
                            <th className="px-4 py-3 text-left text-white">Feature</th>
                            <th className="px-4 py-3 text-left text-white">Traditional Finance</th>
                            <th className="px-4 py-3 text-left text-white">Decentralized Finance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-700">
                            <td className="px-4 py-3 font-medium text-white">Custody</td>
                            <td className="px-4 py-3">Banks hold and control your assets</td>
                            <td className="px-4 py-3">Self-custody through personal wallets</td>
                          </tr>
                          <tr className="bg-gray-750">
                            <td className="px-4 py-3 font-medium text-white">Hours</td>
                            <td className="px-4 py-3">Business hours, weekdays</td>
                            <td className="px-4 py-3">24/7, 365 days a year</td>
                          </tr>
                          <tr className="bg-gray-700">
                            <td className="px-4 py-3 font-medium text-white">Access</td>
                            <td className="px-4 py-3">Requires approval, minimum balances</td>
                            <td className="px-4 py-3">Open to anyone with internet access</td>
                          </tr>
                          <tr className="bg-gray-750">
                            <td className="px-4 py-3 font-medium text-white">Settlements</td>
                            <td className="px-4 py-3">Days for clearing</td>
                            <td className="px-4 py-3">Minutes or seconds</td>
                          </tr>
                          <tr className="bg-gray-700">
                            <td className="px-4 py-3 font-medium text-white">Transparency</td>
                            <td className="px-4 py-3">Limited, quarterly disclosures</td>
                            <td className="px-4 py-3">Full transparency on-chain</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">The Evolution of DeFi</h3>
                    
                    <div className="relative">
                      <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-600"></div>
                      
                      <div className="space-y-8">
                        {defiTimeline.map((event, index) => (
                          <div key={index} className="relative flex gap-6">
                            <div className="flex flex-col items-center">
                              <div className="bg-blue-500 text-white text-sm font-bold w-16 h-16 rounded-full flex items-center justify-center z-10">
                                {event.year}
                              </div>
                              {index < defiTimeline.length - 1 && (
                                <div className="h-full w-0.5 bg-gray-600"></div>
                              )}
                            </div>
                            
                            <div className="bg-gray-700 p-5 rounded-lg flex-1">
                              <h4 className="font-semibold text-white mb-2">{event.title}</h4>
                              <p>{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Token Ecosystem Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'token-ecosystem' ? 'block' : 'hidden'}`}>
                {/* Content for Token Ecosystem tab */}
              </div>
              
              {/* DEXs & Liquidity Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'dex-and-amm' ? 'block' : 'hidden'}`}>
                {/* Content for DEXs & Liquidity tab */}
              </div>
              
              {/* Token Launches & Markets Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'token-launches' ? 'block' : 'hidden'}`}>
                {/* Content for Token Launches & Markets tab */}
              </div>
            </TabLayout>
          </div>
        </div>
      </div>
    </>
  )
} 