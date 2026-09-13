export interface UpcomingToken {
  id: string;
  name: string;
  symbol: string;
  category: 'presale' | 'crypto' | 'meme';
  categoryLabel: string;
  stage: 'Upcoming Presale' | 'Active Presale' | 'Upcoming DEX Launch' | 'Upcoming CEX Launch' | 'Airdrop / Testnet';
  badgeColor: string;
  blockchain: 'Solana' | 'Ethereum' | 'Base' | 'BNB Chain' | 'Arbitrum' | 'Sui' | 'TON';
  chainIcon: string;
  logo: string;
  launchDate: string; // ISO 8601 format
  launchDateDisplay: string;
  presalePrice?: string;
  targetListingPrice?: string;
  hardCap?: string;
  raisedAmount?: string;
  raisedPercent?: number;
  totalTokens: string;
  securityAudit: {
    auditor: string;
    score: string;
    kycVerified: boolean;
    status: 'Verified' | 'Pending' | 'Exempt';
    auditUrl?: string;
  };
  shortDescription: string;
  fullOverview: string;
  keyFeatures: string[];
  tokenomics: {
    presale: number;
    liquidity: number;
    stakingRewards: number;
    ecosystem: number;
    team: number;
  };
  links: {
    website?: string;
    whitepaper?: string;
    twitter?: string;
    telegram?: string;
    github?: string;
  };
  riskRating: 'Low' | 'Medium' | 'High' | 'Extreme / Degen';
  isFeatured?: boolean;
}

export const UPCOMING_TOKENS: UpcomingToken[] = [
  // --- PRESALE TOKENS ---
  {
    id: 'nexus-depin-network',
    name: 'Nexus DePIN Compute',
    symbol: 'NXUS',
    category: 'presale',
    categoryLabel: 'Presale Token',
    stage: 'Active Presale',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-300',
    blockchain: 'Ethereum',
    chainIcon: '🔷',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-15T18:00:00Z',
    launchDateDisplay: 'October 15, 2026',
    presalePrice: '$0.045',
    targetListingPrice: '$0.080',
    hardCap: '$8,500,000',
    raisedAmount: '$6,250,000',
    raisedPercent: 73,
    totalTokens: '1,000,000,000 NXUS',
    securityAudit: {
      auditor: 'CertiK & Hacken',
      score: '94/100',
      kycVerified: true,
      status: 'Verified',
      auditUrl: 'https://certik.com'
    },
    shortDescription: 'Decentralized physical infrastructure network aggregating idle enterprise GPU clusters for high-performance AI inference training.',
    fullOverview: 'Nexus Compute enables AI research labs and decentralized application developers to tap into global decentralized GPU clusters at an 80% discount compared to centralized hyperscalers. NXUS tokens power network staking, compute node rewards, and governance fee burns.',
    keyFeatures: [
      'Sub-50ms latency peer-to-peer compute routing',
      'Proof-of-Useful-Work (PoUW) verification contract',
      'Automated staking yields paid in USDC and NXUS',
      'Tier-1 CEX listing signed for Q4 2026'
    ],
    tokenomics: {
      presale: 35,
      liquidity: 25,
      stakingRewards: 20,
      ecosystem: 12,
      team: 8
    },
    links: {
      website: 'https://nexuscompute.network',
      whitepaper: 'https://nexuscompute.network/whitepaper.pdf',
      twitter: 'https://twitter.com/nexus_compute',
      telegram: 'https://t.me/nexus_compute'
    },
    riskRating: 'Medium',
    isFeatured: true
  },
  {
    id: 'aegis-quantum-shield',
    name: 'Aegis Quantum Protocol',
    symbol: 'AGIS',
    category: 'presale',
    categoryLabel: 'Presale Token',
    stage: 'Upcoming Presale',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
    blockchain: 'Base',
    chainIcon: '🔵',
    logo: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-01T14:00:00Z',
    launchDateDisplay: 'October 1, 2026',
    presalePrice: '$0.012',
    targetListingPrice: '$0.025',
    hardCap: '$4,200,000',
    raisedAmount: '$1,850,000',
    raisedPercent: 44,
    totalTokens: '2,000,000,000 AGIS',
    securityAudit: {
      auditor: 'SolidProof',
      score: '91/100',
      kycVerified: true,
      status: 'Verified',
      auditUrl: 'https://solidproof.io'
    },
    shortDescription: 'Post-quantum cryptographic signature abstraction layer protecting EVM accounts and smart contract vaults from quantum computing exploits.',
    fullOverview: 'Built natively on Base with LayerZero cross-chain messaging, Aegis implements lattice-based NTRU cryptography to replace vulnerability-prone ECDSA signatures across Web3 wallets and institutional custody pools.',
    keyFeatures: [
      'NIST-compliant post-quantum cryptographic security',
      'Zero-gas abstract account migration for retail users',
      'Dual-signature emergency timelock vaults',
      'Institutional treasury custody partnership with Coinbase Custody'
    ],
    tokenomics: {
      presale: 30,
      liquidity: 30,
      stakingRewards: 18,
      ecosystem: 14,
      team: 8
    },
    links: {
      website: 'https://aegisquantum.io',
      twitter: 'https://twitter.com/aegis_quantum',
      telegram: 'https://t.me/aegis_quantum'
    },
    riskRating: 'Medium',
    isFeatured: true
  },
  {
    id: 'solstice-liquid-staking',
    name: 'Solstice Liquid Restaking',
    symbol: 'SLST',
    category: 'presale',
    categoryLabel: 'Presale Token',
    stage: 'Active Presale',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-300',
    blockchain: 'Solana',
    chainIcon: '🟣',
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-09-28T20:00:00Z',
    launchDateDisplay: 'September 28, 2026',
    presalePrice: '$0.15',
    targetListingPrice: '$0.30',
    hardCap: '$6,000,000',
    raisedAmount: '$5,100,000',
    raisedPercent: 85,
    totalTokens: '500,000,000 SLST',
    securityAudit: {
      auditor: 'OtterSec & Halborn',
      score: '96/100',
      kycVerified: true,
      status: 'Verified'
    },
    shortDescription: 'Solana-native restaking infrastructure powering actively validated services (AVS), cross-rollup sequencers, and decentralized oracles.',
    fullOverview: 'Solstice allows SOL and LST holders to earn secondary yield by securing off-chain coprocessors, confidential computing enclaves, and fast-finality bridges. Presale participants receive boosted APY multipliers during Genesis Phase 1.',
    keyFeatures: [
      'Slashing-protected restaking pools with audited risk vaults',
      'Instant liquidity token (sSOL) redeemable 1:1',
      'Revenue share distributing protocol sequencer fees directly to stakers',
      'Integrated with Kamino, Raydium, and Drift protocols'
    ],
    tokenomics: {
      presale: 28,
      liquidity: 26,
      stakingRewards: 25,
      ecosystem: 13,
      team: 8
    },
    links: {
      website: 'https://solsticefi.xyz',
      twitter: 'https://twitter.com/solstice_fi',
      telegram: 'https://t.me/solstice_restaking'
    },
    riskRating: 'Low',
    isFeatured: false
  },

  // --- CRYPTO TOKENS (Utility, DeFi, AI, L2, RWA) ---
  {
    id: 'chronos-zkevm-layer2',
    name: 'Chronos Modular ZK-Rollup',
    symbol: 'CRX',
    category: 'crypto',
    categoryLabel: 'Crypto Utility Token',
    stage: 'Upcoming DEX Launch',
    badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-300',
    blockchain: 'Ethereum',
    chainIcon: '🔷',
    logo: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-08T12:00:00Z',
    launchDateDisplay: 'October 8, 2026',
    targetListingPrice: '$0.50',
    hardCap: '$18,000,000',
    totalTokens: '1,000,000,000 CRX',
    securityAudit: {
      auditor: 'Trail of Bits',
      score: '98/100',
      kycVerified: true,
      status: 'Verified'
    },
    shortDescription: 'Parallelized ultra-fast zkEVM Layer-2 network reaching 15,000 TPS with recursive zero-knowledge SNARK state proofs.',
    fullOverview: 'Chronos solves the Ethereum scalability bottleneck with modular execution and decentralized shared sequencing. Gas fees are less than $0.001 per swap while inheriting 100% of Ethereum Layer-1 consensus and settlement finality.',
    keyFeatures: [
      '15,000+ Transactions per second verified in testnet stress audits',
      'Full EVM equivalence: Deploy Solidity code without changes',
      'Gas payable in any ERC-20 token via native account abstraction',
      'Airdrop distribution allocated to over 140,000 active testnet users'
    ],
    tokenomics: {
      presale: 15,
      liquidity: 30,
      stakingRewards: 25,
      ecosystem: 20,
      team: 10
    },
    links: {
      website: 'https://chronoszk.io',
      twitter: 'https://twitter.com/chronos_zkevm',
      github: 'https://github.com/chronos-zk'
    },
    riskRating: 'Low',
    isFeatured: true
  },
  {
    id: 'terra-rwa-treasury',
    name: 'Terra Treasury Real-World Assets',
    symbol: 'TRWA',
    category: 'crypto',
    categoryLabel: 'Crypto Utility Token',
    stage: 'Upcoming CEX Launch',
    badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-300',
    blockchain: 'Arbitrum',
    chainIcon: '🔵',
    logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-20T15:00:00Z',
    launchDateDisplay: 'October 20, 2026',
    targetListingPrice: '$1.00',
    hardCap: '$25,000,000',
    totalTokens: '100,000,000 TRWA',
    securityAudit: {
      auditor: 'CertiK',
      score: '93/100',
      kycVerified: true,
      status: 'Verified'
    },
    shortDescription: 'Tokenized short-term US Treasury Bills and real estate private credit yielding continuous 5.4% APR paid on-chain.',
    fullOverview: 'Terra RWA connects institutional capital markets to decentralized liquidity. By partnering with SEC-regulated custodians in New York, TRWA tokens represent direct, legally binding beneficial interests in short-duration sovereign debt notes.',
    keyFeatures: [
      'Direct redemption into USD fiat via regulated financial rails',
      'Continuous daily compound yields paid directly in on-chain yield tokens',
      'Proof-of-Reserve real-time chainlink oracle feed tracking custodian vaults',
      'Listed on Bybit, OKX, and Uniswap V3 at launch'
    ],
    tokenomics: {
      presale: 20,
      liquidity: 40,
      stakingRewards: 20,
      ecosystem: 12,
      team: 8
    },
    links: {
      website: 'https://terrarwa.financial',
      twitter: 'https://twitter.com/terra_rwa'
    },
    riskRating: 'Low',
    isFeatured: false
  },
  {
    id: 'sui-synth-ai',
    name: 'SuiSynth Agent Protocol',
    symbol: 'SSYN',
    category: 'crypto',
    categoryLabel: 'Crypto Utility Token',
    stage: 'Airdrop / Testnet',
    badgeColor: 'bg-purple-500/10 text-purple-700 border-purple-300',
    blockchain: 'Sui',
    chainIcon: '💧',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-11-05T16:00:00Z',
    launchDateDisplay: 'November 5, 2026',
    targetListingPrice: '$0.22',
    hardCap: '$7,000,000',
    totalTokens: '750,000,000 SSYN',
    securityAudit: {
      auditor: 'Hacken',
      score: '92/100',
      kycVerified: false,
      status: 'Verified'
    },
    shortDescription: 'Autonomous multi-agent on-chain finance framework utilizing Sui object-centric Move language for algorithmic trade execution.',
    fullOverview: 'SuiSynth allows users to deploy decentralized AI agents that analyze mempool flows, execute cross-DEX arbitrage, and dynamically rebalance liquidity pools without custody risk.',
    keyFeatures: [
      'Sub-second Move contract finality with object-level parallelism',
      'Decentralized AI model weights stored across Walrus decentralized storage',
      '40% of tokens designated for active testnet agent operators and airdrop farmers'
    ],
    tokenomics: {
      presale: 20,
      liquidity: 30,
      stakingRewards: 25,
      ecosystem: 15,
      team: 10
    },
    links: {
      website: 'https://suisynth.ai',
      twitter: 'https://twitter.com/suisynth'
    },
    riskRating: 'Medium',
    isFeatured: false
  },

  // --- MEME TOKENS ---
  {
    id: 'sol-shiba-alpha',
    name: 'SolShiba Galactic',
    symbol: 'SSHIBA',
    category: 'meme',
    categoryLabel: 'Meme Token',
    stage: 'Upcoming DEX Launch',
    badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-300',
    blockchain: 'Solana',
    chainIcon: '🟣',
    logo: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-09-22T19:00:00Z',
    launchDateDisplay: 'September 22, 2026',
    presalePrice: '$0.000045',
    targetListingPrice: '$0.000090',
    hardCap: '$1,200,000',
    raisedAmount: '$980,000',
    raisedPercent: 81,
    totalTokens: '100,000,000,000 SSHIBA',
    securityAudit: {
      auditor: 'Coinsult',
      score: '88/100',
      kycVerified: true,
      status: 'Verified'
    },
    shortDescription: 'Community-driven viral meme mascot token launching with 100% fair bonding curve on Solana Raydium and Meteora DEXs.',
    fullOverview: 'SolShiba Galactic pairs iconic internet dog culture with automated liquidity burn mechanisms and an on-chain meme battle arena where token holders vote on weekly viral creator rewards.',
    keyFeatures: [
      'Zero buy/sell transaction taxes (0% fee)',
      '100% Liquidity Pool locked and burnt at genesis block',
      'Viral Telegram tap-to-earn mini-app with over 650,000 players',
      'Instant listing on Raydium, Meteora, and Jupiter routing'
    ],
    tokenomics: {
      presale: 50,
      liquidity: 40,
      stakingRewards: 5,
      ecosystem: 5,
      team: 0
    },
    links: {
      website: 'https://solshibagalactic.com',
      twitter: 'https://twitter.com/solshiba_alpha',
      telegram: 'https://t.me/solshiba_alpha'
    },
    riskRating: 'Extreme / Degen',
    isFeatured: true
  },
  {
    id: 'pepe-neo-matrix',
    name: 'Pepe The Singularity',
    symbol: 'PEPX',
    category: 'meme',
    categoryLabel: 'Meme Token',
    stage: 'Upcoming Presale',
    badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-300',
    blockchain: 'Base',
    chainIcon: '🔵',
    logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-09-30T17:00:00Z',
    launchDateDisplay: 'September 30, 2026',
    presalePrice: '$0.00012',
    targetListingPrice: '$0.00025',
    hardCap: '$800,000',
    raisedAmount: '$420,000',
    raisedPercent: 52,
    totalTokens: '420,690,000,000 PEPX',
    securityAudit: {
      auditor: 'Cyberscope',
      score: '89/100',
      kycVerified: false,
      status: 'Verified'
    },
    shortDescription: 'Cyberpunk cyber-frog meme sensation bringing artificial intelligence meme generator tools directly to Base L2 traders.',
    fullOverview: 'Pepe The Singularity is an irreverent meme protocol utilizing autonomous AI agents that generate, tweet, and mint viral generative cartoon memes hourly. 100% community distributed with renounced contract ownership.',
    keyFeatures: [
      'Contract ownership renounced before launch',
      'Automated 1% fee redistribution to long-term wallet hodlers',
      'Integrated with Uniswap V3 on Base with zero slippage routing',
      'Over 45,000 organic Telegram community members'
    ],
    tokenomics: {
      presale: 45,
      liquidity: 45,
      stakingRewards: 5,
      ecosystem: 5,
      team: 0
    },
    links: {
      website: 'https://pepesingularity.fun',
      twitter: 'https://twitter.com/pepe_singularity',
      telegram: 'https://t.me/pepe_singularity'
    },
    riskRating: 'Extreme / Degen',
    isFeatured: false
  },
  {
    id: 'ton-cat-republic',
    name: 'KiteCat Telegram Army',
    symbol: 'KTCAT',
    category: 'meme',
    categoryLabel: 'Meme Token',
    stage: 'Upcoming DEX Launch',
    badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-300',
    blockchain: 'TON',
    chainIcon: '💎',
    logo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-10T11:00:00Z',
    launchDateDisplay: 'October 10, 2026',
    presalePrice: '$0.002',
    targetListingPrice: '$0.005',
    hardCap: '$2,500,000',
    raisedAmount: '$2,200,000',
    raisedPercent: 88,
    totalTokens: '1,000,000,000 KTCAT',
    securityAudit: {
      auditor: 'Coinsult',
      score: '87/100',
      kycVerified: true,
      status: 'Verified'
    },
    shortDescription: 'Viral cat-themed meme token leveraging TON blockchain and 900M Telegram users with direct in-chat wallet tipping.',
    fullOverview: 'KiteCat enables peer-to-peer micro-tipping inside Telegram group chats, gaming rewards for viral Telegram channels, and DeDust DEX liquidity bootstrapping with zero KYC friction.',
    keyFeatures: [
      'Direct Telegram @wallet bot integration',
      'Over 1.2M monthly active Mini-App users',
      'DeDust and STON.fi liquidity pairs seeded at genesis',
      'Dual community staking rewards with TON coin incentives'
    ],
    tokenomics: {
      presale: 40,
      liquidity: 35,
      stakingRewards: 15,
      ecosystem: 10,
      team: 0
    },
    links: {
      website: 'https://kitecat.me',
      twitter: 'https://twitter.com/kitecat_ton',
      telegram: 'https://t.me/kitecat_ton'
    },
    riskRating: 'High',
    isFeatured: true
  }
];
