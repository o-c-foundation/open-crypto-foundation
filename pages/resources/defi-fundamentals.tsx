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

export default function DeFiFundamentals() {
  const [activeTab, setActiveTab] = useState('crypto-basics')
  
  // Tabs configuration
  const tabs = [
    { id: 'crypto-basics', label: 'Crypto Fundamentals', icon: <FaBitcoin className="mr-2" /> },
    { id: 'defi-intro', label: 'DeFi Introduction', icon: <FaExchangeAlt className="mr-2" /> },
    { id: 'token-ecosystem', label: 'Token Ecosystem', icon: <FaCoins className="mr-2" /> },
    { id: 'dex-and-amm', label: 'DEXs & Liquidity', icon: <FaWater className="mr-2" /> },
    { id: 'token-launches', label: 'Token Launches & Markets', icon: <FaRocket className="mr-2" /> }
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
          content="Learn about cryptocurrency fundamentals, blockchain technology, decentralized finance (DeFi), trading on decentralized exchanges, and token launch mechanisms in a comprehensive educational guide." 
        />
      </Head>
      
      <section className="pt-10 pb-12 bg-gradient-to-br from-black to-gray-900 text-white border-b border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">DeFi Fundamentals</h1>
            <p className="text-xl text-gray-300">
              A comprehensive guide to understanding cryptocurrency and decentralized finance
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 border border-gray-700">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-700 scrollbar-hide">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-purple-400 border-b-2 border-purple-500' 
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="p-6 md:p-8">
              {/* Crypto Fundamentals */}
              {activeTab === 'crypto-basics' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Cryptocurrency Fundamentals</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaInfoCircle className="mr-2 text-purple-400" />
                      What is Cryptocurrency?
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Cryptocurrency is a digital or virtual form of currency that uses cryptography for security, operates on decentralized 
                      networks based on blockchain technology, and functions independently of central authorities like governments or banks. 
                      The first and most well-known cryptocurrency, Bitcoin, was created in 2009 by an individual or group using the pseudonym 
                      Satoshi Nakamoto.
                    </p>
                    
                    <div className="bg-blue-900/30 p-6 rounded-xl mb-8 border border-blue-800/50">
                      <h4 className="font-bold text-lg mb-3 text-blue-300">Key Properties of Cryptocurrencies:</h4>
                      <ul className="space-y-2">
                        <li><strong className="text-white">Decentralization:</strong> No single entity has control; the network is maintained by distributed nodes.</li>
                        <li><strong className="text-white">Transparency:</strong> Most blockchain transactions are viewable on public ledgers.</li>
                        <li><strong className="text-white">Immutability:</strong> Once recorded on the blockchain, transactions cannot be altered.</li>
                        <li><strong className="text-white">Limited Supply:</strong> Many cryptocurrencies have a fixed maximum supply (like Bitcoin's 21 million).</li>
                        <li><strong className="text-white">Pseudonymity:</strong> Users can transact without revealing their identity (to varying degrees).</li>
                        <li><strong className="text-white">Borderless:</strong> Transactions can be sent globally without traditional banking restrictions.</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaLayerGroup className="mr-2 text-purple-400" />
                      Blockchain Technology Explained
                    </h3>
                    
                    <p className="text-lg mb-4">
                      Blockchain is the underlying technology that powers cryptocurrencies. At its core, a blockchain is a 
                      distributed database or ledger that stores information in blocks that are chained together chronologically 
                      and secured using cryptography.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-lg mb-2 text-white">How Blockchain Works</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Transactions are bundled into blocks</li>
                          <li>Network validators verify transactions</li>
                          <li>The block is added to the chain when consensus is reached</li>
                          <li>The new block is linked to the previous block with a cryptographic hash</li>
                          <li>The process repeats, creating an immutable chain of blocks</li>
                        </ol>
                      </div>
                      
                      <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                        <h4 className="font-bold text-lg mb-2 text-white">Consensus Mechanisms</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong className="text-white">Proof of Work (PoW):</strong> Miners solve complex mathematical puzzles to validate transactions and create new blocks. Secure but energy-intensive.</li>
                          <li><strong className="text-white">Proof of Stake (PoS):</strong> Validators stake their coins as collateral to participate in block creation. More energy-efficient than PoW.</li>
                          <li><strong className="text-white">Delegated Proof of Stake (DPoS):</strong> Stakeholders vote for a small number of delegates who validate transactions.</li>
                          <li><strong className="text-white">Proof of History (PoH):</strong> Creates a historical record that proves events occurred at specific times (used by Solana).</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaChartLine className="mr-2 text-purple-400" />
                      Top 10 Blockchains by Market Cap
                    </h3>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-700">
                            <th className="border border-gray-600 p-3 text-left text-white">Blockchain</th>
                            <th className="border border-gray-600 p-3 text-left text-white">Type</th>
                            <th className="border border-gray-600 p-3 text-left text-white">Market Cap</th>
                            <th className="border border-gray-600 p-3 text-left text-white">Consensus</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topBlockchains.map((blockchain, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                              <td className="border border-gray-600 p-3 font-medium text-white">{blockchain.name}</td>
                              <td className="border border-gray-600 p-3">{blockchain.type}</td>
                              <td className="border border-gray-600 p-3">{blockchain.marketCap}</td>
                              <td className="border border-gray-600 p-3">{blockchain.consensus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaCodeBranch className="mr-2 text-purple-400" />
                      What is a Fork?
                    </h3>
                    
                    <p className="text-lg mb-4">
                      In blockchain technology, a fork is a change to the protocol that creates a divergence in the blockchain. 
                      There are two main types of forks: soft forks and hard forks.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="p-5 border border-gray-600 rounded-lg bg-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-white">Soft Fork</h4>
                        <p className="mb-4">
                          A backward-compatible upgrade where only miners/validators need to update their software. 
                          Old nodes can still validate transactions, but they may reject blocks that don't follow the new rules.
                        </p>
                        <h5 className="font-semibold mb-1 text-white">Examples:</h5>
                        <ul className="list-disc pl-5">
                          <li>Bitcoin's SegWit implementation</li>
                          <li>Bitcoin's Taproot upgrade</li>
                        </ul>
                      </div>
                      
                      <div className="p-5 border border-gray-600 rounded-lg bg-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-white">Hard Fork</h4>
                        <p className="mb-4">
                          A non-backward-compatible change that requires all nodes to upgrade to the new protocol rules. 
                          It effectively creates a permanent divergence in the blockchain, resulting in two separate networks.
                        </p>
                        <h5 className="font-semibold mb-1 text-white">Examples:</h5>
                        <ul className="list-disc pl-5">
                          <li>Bitcoin Cash forking from Bitcoin</li>
                          <li>Ethereum Classic forking from Ethereum</li>
                          <li>Ethereum's transition to Proof of Stake (The Merge)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <h3 className="text-xl font-bold mb-4 text-white">Why Do Forks Happen?</h3>
                      <p className="text-gray-300">
                        Forks occur for various reasons, including implementing new features, addressing security vulnerabilities, reversing transactions (rare), or resolving disagreements within the community about the future direction of the protocol. Some forks are planned upgrades, while others result from community divisions over fundamental issues like scaling approaches or governance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* DeFi Introduction */}
              {activeTab === 'defi-intro' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Introduction to Decentralized Finance (DeFi)</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 text-white">What is DeFi?</h3>
                    
                    <p className="text-lg mb-4">
                      Decentralized Finance, or DeFi, refers to an ecosystem of financial applications built on blockchain networks 
                      that aim to recreate and improve upon traditional financial systems without relying on centralized 
                      intermediaries such as banks, brokerages, or exchanges.
                    </p>
                    
                    <p className="text-lg mb-6">
                      DeFi leverages smart contracts—self-executing agreements with the terms directly written into code—to enable 
                      financial services like lending, borrowing, trading, insurance, and asset management without the need for 
                      trusted third parties. Instead, these services operate in a transparent, permissionless, and interoperable manner.
                    </p>
                    
                    <div className="bg-purple-900/30 p-6 rounded-xl mb-8 border border-purple-800/50">
                      <h4 className="font-bold text-xl mb-3 text-purple-300">Core Principles of DeFi</h4>
                      <ul className="space-y-3">
                        <li><strong className="text-white">Non-custodial:</strong> Users maintain control of their assets rather than trusting a centralized entity.</li>
                        <li><strong className="text-white">Permissionless:</strong> Anyone with an internet connection can access DeFi services without approval.</li>
                        <li><strong className="text-white">Transparency:</strong> All transactions and code are publicly visible on the blockchain.</li>
                        <li><strong className="text-white">Interoperability:</strong> DeFi protocols can interact with each other, enabling complex financial instruments.</li>
                        <li><strong className="text-white">Programmable:</strong> Money and financial services become programmable through smart contracts.</li>
                        <li><strong className="text-white">Open source:</strong> Most DeFi protocols have publicly available code that can be audited and forked.</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">Key Components of the DeFi Ecosystem</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="p-5 border border-gray-600 rounded-lg bg-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Decentralized Exchanges (DEXs)</h4>
                        <p className="mb-3">
                          Platforms that enable peer-to-peer trading of cryptocurrencies without a central authority.
                        </p>
                        <p className="mb-2"><strong className="text-white">Examples:</strong> Uniswap, Curve, dYdX, PancakeSwap</p>
                        <p><strong className="text-white">Innovation:</strong> Automated Market Makers (AMMs) that use liquidity pools instead of order books</p>
                      </div>
                      
                      <div className="p-5 border border-gray-600 rounded-lg bg-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Lending Protocols</h4>
                        <p className="mb-3">
                          Platforms that allow users to lend their crypto assets to earn interest or borrow assets by providing collateral.
                        </p>
                        <p className="mb-2"><strong className="text-white">Examples:</strong> Aave, Compound, MakerDAO</p>
                        <p><strong className="text-white">Innovation:</strong> Flash loans, variable interest rates based on supply and demand</p>
                      </div>
                      
                      <div className="p-5 border border-gray-600 rounded-lg bg-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Stablecoins</h4>
                        <p className="mb-3">
                          Cryptocurrencies designed to maintain a stable value, usually pegged to a fiat currency like the US dollar.
                        </p>
                        <p className="mb-2"><strong className="text-white">Examples:</strong> DAI, USDC, USDT, FRAX</p>
                        <p><strong className="text-white">Types:</strong> Fiat-backed, crypto-collateralized, algorithmic</p>
                      </div>
                      
                      <div className="p-5 border border-gray-600 rounded-lg bg-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">Yield Aggregators</h4>
                        <p className="mb-3">
                          Protocols that automatically move users' funds between different yield-generating strategies to maximize returns.
                        </p>
                        <p className="mb-2"><strong className="text-white">Examples:</strong> Yearn Finance, Beefy Finance</p>
                        <p><strong className="text-white">Innovation:</strong> Auto-compounding, strategy vaults, yield optimization</p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                      <FaHistory className="mr-2 text-purple-400" />
                      The Evolution of DeFi
                    </h3>
                    
                    <div className="relative border-l-2 border-purple-800 pl-8 ml-4 space-y-10 mb-8">
                      {defiTimeline.map((event, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-12 bg-purple-900/50 text-purple-300 font-bold py-1 px-3 rounded-full border border-purple-700/50">
                            {event.year}
                          </div>
                          <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full mt-1.5 border-4 border-gray-800"></div>
                          <div>
                            <h4 className="text-xl font-bold mb-2 text-white">{event.title}</h4>
                            <p className="text-gray-300">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">The Promise and Challenges of DeFi</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/50">
                        <h4 className="font-bold text-lg mb-3 text-green-300">Opportunities</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong className="text-white">Financial Inclusion:</strong> Access to financial services for the unbanked/underbanked</li>
                          <li><strong className="text-white">Lower Fees:</strong> Reducing costs by removing intermediaries</li>
                          <li><strong className="text-white">Innovation:</strong> Rapid development of new financial products</li>
                          <li><strong className="text-white">Composability:</strong> Building complex products using multiple protocols</li>
                          <li><strong className="text-white">Global Access:</strong> No geographical restrictions or discrimination</li>
                          <li><strong className="text-white">Transparency:</strong> All transactions and protocol operations are visible</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-900/30 p-6 rounded-lg border border-red-800/50">
                        <h4 className="font-bold text-lg mb-3 text-red-300">Challenges</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong className="text-white">Smart Contract Risk:</strong> Bugs or vulnerabilities in code can lead to hacks</li>
                          <li><strong className="text-white">Scalability:</strong> High fees during network congestion</li>
                          <li><strong className="text-white">User Experience:</strong> Still complex for non-technical users</li>
                          <li><strong className="text-white">Oracle Risk:</strong> Reliance on external data feeds that can be manipulated</li>
                          <li><strong className="text-white">Regulatory Uncertainty:</strong> Evolving legal landscape across jurisdictions</li>
                          <li><strong className="text-white">Market Volatility:</strong> Price fluctuations affecting protocol stability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Token Ecosystem */}
              {activeTab === 'token-ecosystem' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Understanding the Token Ecosystem</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaCoins className="mr-2 text-purple-400" />
                      Tokens vs. Cryptocurrencies: What's the Difference?
                    </h3>
                    
                    <p className="text-lg mb-6">
                      While the terms are often used interchangeably, there is an important technical distinction 
                      between cryptocurrencies (sometimes called "coins") and tokens in the blockchain ecosystem.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h3 className="text-xl font-bold mb-4 text-white">Native Cryptocurrencies (Coins)</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Native to their own blockchain</li>
                          <li>Used to pay transaction fees and incentivize nodes</li>
                          <li>Often mined or minted according to the protocol</li>
                          <li>Examples: Bitcoin, Ether, Solana, Avalanche</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h3 className="text-xl font-bold mb-4 text-white">Tokens</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Created on top of an existing blockchain</li>
                          <li>Represent a wide range of programmable assets</li>
                          <li>Governed by smart contracts</li>
                          <li>Examples: ERC-20 tokens, NFTs, stablecoins</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6">Types of Tokens and Their Functions</h3>
                    
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                      <h3 className="text-xl font-bold mb-4 text-white">Types of Tokens and Their Functions</h3>
                      <p className="mb-4 text-gray-300">
                        The token ecosystem has evolved to encompass a wide variety of token types, each with specific functions, characteristics, and use cases in the blockchain ecosystem.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tokenTypes.map((token, index) => (
                          <div key={index} className="bg-gray-700 p-4 rounded border border-gray-600">
                            <h4 className="font-bold mb-2 text-white">{token.type}</h4>
                            <p className="mb-2 text-gray-300">{token.description}</p>
                            
                            <h5 className="font-medium mb-1 text-gray-200">Examples:</h5>
                            <ul className="list-disc pl-5 mb-2 space-y-1 text-gray-300">
                              {token.examples.map((example, exIndex) => (
                                <li key={exIndex}>{example}</li>
                              ))}
                            </ul>
                            
                            <h5 className="font-medium mb-1 text-gray-200">Key Features:</h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-300">
                              {token.features.map((feature, ftIndex) => (
                                <li key={ftIndex}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                      <FaBuilding className="mr-2 text-purple-400" />
                      Leading Chains in the Token Ecosystem
                    </h3>
                    
                    <div className="space-y-6 mb-8">
                      {tokenEcosystems.map((ecosystem, index) => (
                        <div key={index} className="p-6 border border-gray-700 rounded-lg bg-gray-800">
                          <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-bold mb-1 text-white">{ecosystem.chain}</h4>
                              <p className="text-gray-400">Token Standard: {ecosystem.standard}</p>
                            </div>
                            <div className="mt-3 md:mt-0">
                              <div className="text-purple-400 font-semibold">{ecosystem.tokensCount} tokens</div>
                              <div className="text-sm text-gray-500">{ecosystem.marketShare} market share</div>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold mb-2 text-white">Notable Tokens:</h5>
                              <div className="flex flex-wrap gap-2">
                                {ecosystem.notableTokens.map((token, idx) => (
                                  <span 
                                    key={idx} 
                                    className="bg-gray-700 text-gray-300 text-sm px-2 py-1 rounded-full border border-gray-600"
                                  >
                                    {token}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-semibold mb-2 text-white">Ecosystem Strengths:</h5>
                              <ul className="list-disc pl-5 text-sm text-gray-300">
                                {ecosystem.strengths.map((strength, idx) => (
                                  <li key={idx}>{strength}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                      <FaCheckCircle className="mr-2 text-green-400" />
                      The Positive Impact: How Tokens Can Be Used for Good
                    </h3>
                    
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                      <h3 className="text-xl font-bold mb-4 text-white">Use Cases for Tokens</h3>
                      <p className="mb-6 text-gray-300">
                        Tokens enable a wide range of use cases and economic models, enabling new incentive structures, governance frameworks, and financial applications.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {positiveUseCases.map((useCase, index) => (
                          <div key={index} className="bg-gray-700 p-5 rounded border border-gray-600">
                            <h4 className="font-bold text-white mb-2">{useCase.title}</h4>
                            <p className="text-gray-300 mb-3">{useCase.description}</p>
                            <p className="text-sm text-gray-400"><strong className="text-white">Examples:</strong> {useCase.examples.join("; ")}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                      <FaExclamationTriangle className="mr-2 text-orange-400" />
                      Challenges to Address for the Success of the Token Economy
                    </h3>
                    
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                      <h3 className="text-xl font-bold mb-4 text-white">Challenges to Address for the Success of the Token Economy</h3>
                      <p className="mb-6 text-gray-300">
                        Despite their potential, tokens face significant challenges that must be addressed to build a sustainable, equitable, and beneficial token economy. Recognizing and addressing these issues is essential for the long-term success of the crypto revolution.
                      </p>
                      
                      <div className="space-y-6">
                        {tokenProblems.map((problem, index) => (
                          <div key={index} className="bg-gray-700 p-5 rounded border border-gray-600">
                            <h4 className="font-bold mb-2 text-white">{problem.problem}</h4>
                            <p className="mb-4 text-gray-300">{problem.description}</p>
                            
                            <h5 className="font-semibold mb-2 text-white">Potential Solutions:</h5>
                            <ul className="list-disc pl-6 space-y-1 text-gray-300">
                              {problem.potentialSolutions.map((solution, idx) => (
                                <li key={idx}>{solution}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEXs & Liquidity Tab */}
              {activeTab === 'dex-and-amm' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Decentralized Exchanges & Liquidity</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaExchange className="mr-2 text-purple-400" />
                      DEXs vs. CEXs: Understanding the Differences
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Decentralized exchanges (DEXs) represent a fundamental shift from traditional centralized exchanges (CEXs), 
                      enabling peer-to-peer trading without intermediaries through blockchain technology and smart contracts.
                    </p>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-800">
                            <th className="border border-gray-700 p-3 text-left text-white">Aspect</th>
                            <th className="border border-gray-700 p-3 text-left text-white">Decentralized Exchanges (DEXs)</th>
                            <th className="border border-gray-700 p-3 text-left text-white">Centralized Exchanges (CEXs)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dexVsCexComparison.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-700'}>
                              <td className="border border-gray-700 p-3 font-medium text-white">{row.aspect}</td>
                              <td className="border border-gray-700 p-3 text-gray-300">{row.dex}</td>
                              <td className="border border-gray-700 p-3 text-gray-300">{row.cex}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="bg-blue-900/30 p-6 rounded-xl mb-8">
                      <h4 className="font-bold text-lg mb-3 text-blue-300">Key Advantages of DEXs</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li><strong className="text-white">Self-custody:</strong> Users maintain control of their private keys and funds throughout the trading process.</li>
                        <li><strong className="text-white">Permissionless:</strong> Anyone can access DEXs without KYC requirements or geographical restrictions.</li>
                        <li><strong className="text-white">Censorship resistance:</strong> No central authority can freeze assets or block transactions.</li>
                        <li><strong className="text-white">Transparency:</strong> All transactions are visible on the blockchain and smart contract code is verifiable.</li>
                        <li><strong className="text-white">Asset diversity:</strong> Any token can be listed without requiring approval from a central authority.</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaHistory className="mr-2 text-purple-400" />
                      The Evolution of Decentralized Exchanges
                    </h3>
                    
                    <p className="text-lg mb-6">
                      DEXs have evolved dramatically since their inception, moving from simple on-chain order books 
                      to sophisticated automated market makers and hybrid models that combine the best of both worlds.
                    </p>
                    
                    <div className="relative border-l-2 border-purple-800 pl-8 ml-4 space-y-8 mb-10">
                      {dexEvolution.map((event, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-12 bg-purple-900 text-purple-300 font-bold py-1 px-3 rounded-full border border-purple-700">
                            {event.year}
                          </div>
                          <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full mt-1.5 border-4 border-gray-900"></div>
                          <div>
                            <h4 className="text-xl font-bold mb-1 text-white">{event.event}</h4>
                            <p className="text-gray-300 mb-2">{event.description}</p>
                            <div className="inline-block bg-purple-900/40 text-purple-300 px-3 py-1 text-sm rounded-full border border-purple-800/50">
                              {event.innovation}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaLayerGroup className="mr-2 text-purple-400" />
                      Automated Market Makers (AMMs): How They Work
                    </h3>
                    
                    <p className="text-lg mb-6">
                      AMMs revolutionized DeFi by replacing traditional order books with liquidity pools and mathematical formulas 
                      that automatically determine prices based on the ratio of assets in a pool.
                    </p>
                    
                    <div className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700">
                      <h4 className="font-bold text-xl mb-3 text-white">The Basic AMM Mechanism</h4>
                      <p className="mb-4 text-gray-300">
                        At their core, AMMs use smart contracts to create liquidity pools where users can deposit pairs of tokens. 
                        Instead of matching buyers with sellers like traditional exchanges, AMMs use mathematical formulas to 
                        determine prices automatically based on the ratio of assets in the pool.
                      </p>
                      <p className="mb-4 text-gray-300">
                        When a user trades with an AMM, they're not trading with another person, but with the pool itself. 
                        The trade changes the ratio of assets in the pool, which automatically adjusts the price according 
                        to the AMM's formula.
                      </p>
                      <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                        <p className="font-semibold text-center mb-2 text-white">Constant Product Formula (Uniswap V2)</p>
                        <p className="text-center text-xl font-mono text-purple-300">x × y = k</p>
                        <p className="text-sm text-gray-400 mt-2">
                          Where x and y are the reserves of two tokens in the pool, and k is a constant. 
                          When someone buys token Y with token X, they add to X reserves and remove from Y reserves, 
                          maintaining the constant product k.
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">Types of AMM Models</h3>
                    
                    <p className="text-lg mb-6">
                      As DeFi has evolved, various AMM models have been developed to address different needs and optimize for specific use cases.
                    </p>
                    
                    <div className="space-y-8 mb-10">
                      {ammTypes.map((type, index) => (
                        <div key={index} className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
                          <div className="bg-gray-700 p-4 border-b border-gray-600">
                            <h4 className="text-xl font-bold text-white">{type.name}</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {type.examples.map((example, idx) => (
                                <span key={idx} className="bg-blue-900/40 text-blue-300 text-sm px-2 py-1 rounded-full border border-blue-800/50">
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="mb-4 text-gray-300">{type.description}</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-semibold text-green-400 mb-2">Advantages</h5>
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                  {type.pros.map((pro, idx) => (
                                    <li key={idx}>{pro}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-semibold text-red-400 mb-2">Limitations</h5>
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                  {type.cons.map((con, idx) => (
                                    <li key={idx}>{con}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaBalanceScale className="mr-2 text-purple-400" />
                      Liquidity Provision: Benefits and Risks
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Liquidity providers (LPs) are essential to DEX ecosystems, contributing token pairs to liquidity 
                      pools and earning fees in return. However, providing liquidity comes with both benefits and risks.
                    </p>
                    
                    <div className="space-y-6 mb-10">
                      <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/50">
                        <h4 className="text-xl font-bold mb-4 text-green-300">Benefits of Providing Liquidity</h4>
                        <div className="space-y-4">
                          {lpRisksAndBenefits.filter(item => item.benefit).map((item, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded border border-green-900/50">
                              <h5 className="font-semibold text-green-400 mb-1">{item.benefit}</h5>
                              <p className="mb-2 text-gray-300">{item.description}</p>
                              <p className="text-sm text-gray-400 italic">{item.consideration}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-red-900/30 p-6 rounded-lg border border-red-800/50">
                        <h4 className="text-xl font-bold mb-4 text-red-300">Risks of Providing Liquidity</h4>
                        <div className="space-y-4">
                          {lpRisksAndBenefits.filter(item => item.risk).map((item, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded border border-red-900/50">
                              <h5 className="font-semibold text-red-400 mb-1">{item.risk}</h5>
                              <p className="mb-2 text-gray-300">{item.description}</p>
                              <p className="text-sm text-gray-400 italic"><strong className="text-white">Mitigation:</strong> {item.mitigation}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-600 mb-8">
                      <h4 className="font-bold text-lg mb-2 text-yellow-300">Understanding Impermanent Loss</h4>
                      <p className="mb-3 text-gray-300">
                        Impermanent Loss (IL) is one of the biggest challenges for liquidity providers. It occurs when the price ratio of tokens in a pool changes after depositing.
                      </p>
                      <p className="mb-3 text-gray-300">
                        <strong className="text-white">Why it happens:</strong> AMMs automatically rebalance assets to maintain their mathematical formula (e.g., x*y=k). 
                        As one asset appreciates relative to the other, the AMM sells some of the appreciating asset for the other, 
                        meaning LPs end up holding more of the lower-performing asset compared to simply holding both assets.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Rule of thumb:</strong> The more volatile the asset pair and the greater the price change, the higher the impermanent loss. 
                        This loss becomes permanent when liquidity is withdrawn from the pool.
                      </p>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaChart className="mr-2 text-purple-400" />
                      The Critical Role of Liquidity in DeFi
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Liquidity is the lifeblood of decentralized exchanges, determining their efficiency, usability, and competitiveness.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-white">Why Liquidity Matters</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                          <li><strong className="text-white">Price Stability:</strong> Deeper liquidity means less price impact for trades, reducing slippage.</li>
                          <li><strong className="text-white">Trading Experience:</strong> Better liquidity provides a more competitive user experience compared to CEXs.</li>
                          <li><strong className="text-white">Capital Efficiency:</strong> Higher liquidity utilization means more efficient DeFi markets.</li>
                          <li><strong className="text-white">Protocol Revenue:</strong> More trading volume generates more fees for protocols and LPs.</li>
                          <li><strong className="text-white">Token Value:</strong> Good liquidity increases confidence in a token and reduces manipulation risk.</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-lg mb-2 text-white">Liquidity Challenges in DeFi</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                          <li><strong className="text-white">Fragmentation:</strong> Liquidity spread across many DEXs and chains reduces efficiency.</li>
                          <li><strong className="text-white">Mercenary Capital:</strong> Yield farmers quickly move funds to the highest yield, creating liquidity instability.</li>
                          <li><strong className="text-white">Capital Inefficiency:</strong> Traditional AMMs require large amounts of capital for relatively small trading volumes.</li>
                          <li><strong className="text-white">Impermanent Loss:</strong> Discourages liquidity provision in volatile assets.</li>
                          <li><strong className="text-white">Bootstrapping:</strong> New projects struggle to attract initial liquidity without unsustainable incentives.</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 text-white">The Future of DEXs: Innovations and Trends</h3>
                    
                    <p className="text-lg mb-6">
                      The DEX landscape continues to evolve rapidly, with new innovations addressing current limitations and expanding capabilities.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      {dexInnovations.map((innovation, index) => (
                        <div key={index} className="p-5 bg-blue-900/30 border border-blue-800/50 rounded-lg">
                          <h4 className="text-lg font-bold mb-2 text-blue-300">{innovation.innovation}</h4>
                          <p className="mb-3 text-gray-300">{innovation.description}</p>
                          <p className="font-medium text-blue-300">Impact: <span className="text-gray-300">{innovation.impact}</span></p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-6 bg-indigo-900/30 rounded-xl border border-indigo-800/50">
                      <h4 className="text-xl font-bold mb-4 text-indigo-300">The Future of DEX Design</h4>
                      <p className="mb-4 text-gray-300">
                        The future of decentralized exchanges lies in addressing the fundamental limitations of current models,
                        particularly around capital efficiency, impermanent loss, and user experience.
                      </p>
                      <p className="mb-4 text-gray-300">
                        We're already seeing the emergence of hybrid models that combine the best aspects of order books and AMMs,
                        as well as cross-chain solutions that unify liquidity across multiple blockchains.
                      </p>
                      <p className="text-gray-300">
                        The most successful DEX designs will likely be those that can balance decentralization with efficiency,
                        provide better protection against impermanent loss, and offer intuitive interfaces that make DeFi
                        accessible to mainstream users while preserving the core values of self-custody and permissionless access.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Token Launches & Markets Tab */}
              {activeTab === 'token-launches' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Token Launches & NFT Markets</h2>
                  
                  <div className="prose max-w-none text-gray-300">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaRocket className="mr-2 text-purple-400" />
                      Fair Launch Platforms: Evolution of Token Distribution
                    </h3>
                    
                    <p className="text-lg mb-6">
                      The token launch landscape has evolved significantly since the ICO boom of 2017. Fair launch platforms 
                      attempt to create more equitable token distribution mechanisms that reduce the advantages of wealthy 
                      participants and create sustainable tokenomics.
                    </p>
                    
                    <div className="space-y-8 mb-10">
                      {fairLaunchPlatforms.map((platform, index) => (
                        <div key={index} className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
                          <div className="bg-gray-700 p-4 border-b border-gray-600">
                            <h4 className="text-xl font-bold text-white">{platform.name}</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {platform.examples.map((example, idx) => (
                                <span key={idx} className="bg-blue-900/40 text-blue-300 text-sm px-2 py-1 rounded-full border border-blue-800/50">
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="mb-4 text-gray-300">{platform.description}</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-semibold text-green-400 mb-2">Advantages</h5>
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                  {platform.pros.map((pro, idx) => (
                                    <li key={idx}>{pro}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-semibold text-red-400 mb-2">Limitations</h5>
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                  {platform.cons.map((con, idx) => (
                                    <li key={idx}>{con}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaChartArea className="mr-2 text-purple-400" />
                      Bonding Curves: Price Discovery Mechanisms
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Bonding curves are mathematical formulas that determine token prices based on supply. They create 
                      automatic price discovery mechanisms and enable novel tokenomic designs that can better align 
                      incentives between early and late participants.
                    </p>
                    
                    <div className="bg-blue-900/30 p-6 rounded-xl mb-8 border border-blue-800/50">
                      <h4 className="font-bold text-lg mb-3 text-blue-300">How Bonding Curves Work</h4>
                      <p className="mb-4 text-gray-300">
                        A bonding curve is a mathematical function that defines the relationship between a token's price and its supply. 
                        When someone buys a token, they mint new tokens according to the curve, increasing both the supply and the price. 
                        When someone sells, tokens are burned, decreasing both supply and price.
                      </p>
                      <p className="text-gray-300">
                        This creates an automatic market maker that directly ties price to the token's adoption curve, allowing 
                        early supporters to benefit from growth while maintaining a predictable price mechanism for all participants.
                      </p>
                    </div>
                    
                    <div className="overflow-x-auto mb-10">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-800">
                            <th className="border border-gray-700 p-3 text-left text-white">Curve Type</th>
                            <th className="border border-gray-700 p-3 text-left text-white">Formula</th>
                            <th className="border border-gray-700 p-3 text-left text-white">Best Applications</th>
                            <th className="border border-gray-700 p-3 text-left text-white">Limitations</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bondingCurveTypes.map((curve, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-700'}>
                              <td className="border border-gray-700 p-3 font-medium text-white">{curve.type}</td>
                              <td className="border border-gray-700 p-3 font-mono text-purple-300">{curve.formula}</td>
                              <td className="border border-gray-700 p-3 text-gray-300">
                                <ul className="list-disc pl-4 text-sm">
                                  {curve.applications.map((app, idx) => (
                                    <li key={idx}>{app}</li>
                                  ))}
                                </ul>
                              </td>
                              <td className="border border-gray-700 p-3 text-gray-300">
                                <ul className="list-disc pl-4 text-sm">
                                  {curve.limitations.map((limitation, idx) => (
                                    <li key={idx}>{limitation}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="p-6 bg-green-900/30 rounded-lg border border-green-800/50 mb-10">
                      <h4 className="text-xl font-bold mb-3 text-green-300">Benefits of Bonding Curves in DeFi</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li><strong className="text-white">Continuous Liquidity:</strong> No need for external market makers as the curve itself provides continuous buy/sell liquidity.</li>
                        <li><strong className="text-white">Predictable Pricing:</strong> Clear mathematical relationship between supply and price reduces market manipulation.</li>
                        <li><strong className="text-white">Early Supporter Incentives:</strong> Early participants benefit from price appreciation without disadvantaging later supporters.</li>
                        <li><strong className="text-white">Customizable Tokenomics:</strong> Different curve shapes can support various project goals and community needs.</li>
                        <li><strong className="text-white">Sustainable Fundraising:</strong> Projects can raise funds gradually as they deliver value, rather than all at once before development.</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaStore className="mr-2 text-purple-400" />
                      NFT Marketplaces: Digital Asset Exchange Platforms
                    </h3>
                    
                    <p className="text-lg mb-6">
                      NFT marketplaces serve as primary and secondary markets for non-fungible tokens, each with different 
                      focuses, features, and community dynamics. Understanding these platforms is essential for navigating 
                      the digital collectibles and asset space.
                    </p>
                    
                    <div className="space-y-8 mb-10">
                      {nftMarketplaces.map((marketplace, index) => (
                        <div key={index} className="p-5 border border-gray-700 rounded-lg bg-gray-800">
                          <h4 className="text-xl font-bold mb-3 text-white">{marketplace.name}</h4>
                          
                          <div className="mb-3 flex flex-wrap gap-2">
                            {marketplace.examples.map((example, idx) => (
                              <span key={idx} className="bg-indigo-900/40 text-indigo-300 text-sm px-2 py-1 rounded-full border border-indigo-800/50">
                                {example}
                              </span>
                            ))}
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold mb-2 text-purple-300">Key Features</h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                {marketplace.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h5 className="font-semibold mb-2 text-green-400">Advantages</h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                {marketplace.advantages.map((advantage, idx) => (
                                  <li key={idx}>{advantage}</li>
                                ))}
                              </ul>
                              
                              {marketplace.challenges && (
                                <>
                                  <h5 className="font-semibold mb-2 mt-4 text-red-400">Challenges</h5>
                                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                    {marketplace.challenges.map((challenge, idx) => (
                                      <li key={idx}>{challenge}</li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaExclamationTriangle className="mr-2 text-orange-400" />
                      Problems in the Current Token Launch Landscape
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Despite innovations in token distribution mechanisms, the current launch environment often 
                      incentivizes harmful behaviors that damage the DeFi ecosystem's reputation and sustainability.
                    </p>
                    
                    <div className="space-y-6 mb-10">
                      {launchProblems.map((problem, index) => (
                        <div key={index} className="p-5 bg-orange-900/30 border border-orange-800/50 rounded-lg">
                          <h4 className="text-lg font-bold mb-2 text-orange-300">{problem.problem}</h4>
                          <p className="mb-4 text-gray-300">{problem.description}</p>
                          
                          <div className="mb-4">
                            <h5 className="font-semibold mb-2 text-white">Common Examples:</h5>
                            <ul className="list-disc pl-5 text-gray-300">
                              {problem.examples.map((example, idx) => (
                                <li key={idx}>{example}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="p-3 bg-orange-900/50 rounded border border-orange-800">
                            <h5 className="font-semibold mb-1 text-white">Ecosystem Impact:</h5>
                            <p className="text-gray-300">{problem.impact}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                      <FaShieldAlt className="mr-2 text-purple-400" />
                      Improving Token Launch Standards
                    </h3>
                    
                    <p className="text-lg mb-6">
                      Creating a healthier token launch ecosystem requires rethinking incentive structures, 
                      establishing better standards, and developing mechanisms that reward sustainable 
                      value creation over short-term speculation.
                    </p>
                    
                    <div className="space-y-6 mb-10">
                      {launchSolutions.map((solution, index) => (
                        <div key={index} className="p-5 bg-green-900/30 border border-green-800/50 rounded-lg">
                          <h4 className="text-lg font-bold mb-2 text-green-300">{solution.solution}</h4>
                          <p className="mb-4 text-gray-300">{solution.description}</p>
                          
                          <div className="mb-4">
                            <h5 className="font-semibold mb-2 text-white">Implementation Approaches:</h5>
                            <ul className="list-disc pl-5 text-gray-300">
                              {solution.implementation.map((approach, idx) => (
                                <li key={idx}>{approach}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="p-3 bg-green-900/50 rounded border border-green-800">
                            <h5 className="font-semibold mb-1 text-white">Potential Benefits:</h5>
                            <p className="text-gray-300">{solution.benefits}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-6 bg-blue-900/30 rounded-xl border border-blue-800/50">
                      <h4 className="text-xl font-bold mb-4 text-blue-300">The Path to More Sustainable Token Launches</h4>
                      <p className="mb-4 text-gray-300">
                        Creating a more sustainable token launch ecosystem requires collaboration between platforms, 
                        projects, and community members to establish and enforce higher standards without sacrificing 
                        the permissionless innovation that makes DeFi powerful.
                      </p>
                      <p className="mb-4 text-gray-300">
                        Rather than relying solely on centralized gatekeepers, the community can develop decentralized 
                        mechanisms that incentivize responsible launches, reward long-term value creation, and make it 
                        easier for users to identify quality projects amid the noise.
                      </p>
                      <p className="text-gray-300">
                        The Open Crypto Foundation advocates for thoughtful standards that protect participants while 
                        preserving innovation, balancing accessibility with responsibility to create a healthier ecosystem 
                        for all participants.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Continue Your DeFi Education</h2>
            <p className="text-lg mb-8 text-gray-300">
              Ready to learn more? Explore our other educational resources or check out our 
              recommended tools to start navigating the DeFi ecosystem safely.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/resources" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                More Resources
              </a>
              <a 
                href="/tools" 
                className="px-6 py-3 bg-gray-800 border border-purple-600 text-purple-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Tools Directory
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 