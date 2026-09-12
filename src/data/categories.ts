export interface CategoryMeta {
  id: string;
  name: string;
  slug: string;
  description: string;
  badgeColor: string;
  textColor: string;
  metaTitle: string;
}

export const CATEGORIES: Record<string, CategoryMeta> = {
  bitcoin: {
    id: 'bitcoin',
    name: 'Bitcoin',
    slug: 'bitcoin',
    description: 'Real-time Bitcoin news, halving cycles, institutional ETF flows, on-chain analytics, and lightning network updates.',
    badgeColor: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
    textColor: 'text-amber-500',
    metaTitle: 'Bitcoin News, BTC ETF Trends, Mining & Market Analysis'
  },
  ethereum: {
    id: 'ethereum',
    name: 'Ethereum',
    slug: 'ethereum',
    description: 'Latest Ethereum news, layer-2 rollup benchmarks, staking metrics, EIP developments, and smart contract ecosystem progress.',
    badgeColor: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
    textColor: 'text-blue-500',
    metaTitle: 'Ethereum News, ETH ETFs, Layer-2 Networks & Staking Upgrades'
  },
  altcoins: {
    id: 'altcoins',
    name: 'Altcoins',
    slug: 'altcoins',
    description: 'Comprehensive coverage of top Layer-1s, alternative protocols, next-gen blockchains, and emerging cryptocurrency tokens.',
    badgeColor: 'bg-violet-500/15 border-violet-500/30 text-violet-400',
    textColor: 'text-violet-500',
    metaTitle: 'Altcoin News, Layer 1 Blockchains & Token Analysis'
  },
  blockchain: {
    id: 'blockchain',
    name: 'Blockchain',
    slug: 'blockchain',
    description: 'Deep dives into zero-knowledge cryptography, consensus mechanisms, modular architectures, and distributed ledger technology.',
    badgeColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    textColor: 'text-emerald-500',
    metaTitle: 'Blockchain Technology, Cryptography & Enterprise DLT'
  },
  defi: {
    id: 'defi',
    name: 'DeFi',
    slug: 'defi',
    description: 'Decentralized finance developments, automated market makers, liquidity pools, lending markets, and yield strategies.',
    badgeColor: 'bg-teal-500/15 border-teal-500/30 text-teal-400',
    textColor: 'text-teal-500',
    metaTitle: 'DeFi News, Yield Farming, DEXs & Decentralized Lending'
  },
  web3: {
    id: 'web3',
    name: 'Web3',
    slug: 'web3',
    description: 'Decentralized internet infrastructure, digital identities, decentralized physical infrastructure (DePIN), and social graphs.',
    badgeColor: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
    textColor: 'text-purple-500',
    metaTitle: 'Web3 News, DePIN, Identity & Decentralized Infrastructure'
  },
  nft: {
    id: 'nft',
    name: 'NFT',
    slug: 'nft',
    description: 'Non-fungible token developments, digital collectibles, IP tokenization, on-chain gaming, and real-world asset licensing.',
    badgeColor: 'bg-pink-500/15 border-pink-500/30 text-pink-400',
    textColor: 'text-pink-500',
    metaTitle: 'NFT News, Digital Collectibles & RWA Tokenization'
  },
  'crypto-markets': {
    id: 'crypto-markets',
    name: 'Crypto Markets',
    slug: 'crypto-markets',
    description: 'Macro crypto trends, market capitalization, liquidations, derivatives open interest, and macro-economic correlations.',
    badgeColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    textColor: 'text-cyan-500',
    metaTitle: 'Crypto Market Analysis, Macro Trends & Liquidation Heatmaps'
  },
  'crypto-regulation': {
    id: 'crypto-regulation',
    name: 'Crypto Regulation',
    slug: 'crypto-regulation',
    description: 'Global regulatory policies, SEC compliance, MiCA European directives, CFTC guidance, and crypto litigation developments.',
    badgeColor: 'bg-rose-500/15 border-rose-500/30 text-rose-400',
    textColor: 'text-rose-500',
    metaTitle: 'Crypto Regulation, SEC Policies, Legal Briefs & Compliance'
  },
  'crypto-trading': {
    id: 'crypto-trading',
    name: 'Crypto Trading',
    slug: 'crypto-trading',
    description: 'Technical analysis, spot and perpetual trading tactics, order-flow dynamics, liquidity depth, and market psychology.',
    badgeColor: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
    textColor: 'text-indigo-500',
    metaTitle: 'Crypto Trading Strategies, Technical Indicators & Chart Analysis'
  },
  'crypto-security': {
    id: 'crypto-security',
    name: 'Crypto Security',
    slug: 'crypto-security',
    description: 'Smart contract vulnerability audits, exploit post-mortems, hardware wallet security, and protocol defense blueprints.',
    badgeColor: 'bg-red-500/15 border-red-500/30 text-red-400',
    textColor: 'text-red-500',
    metaTitle: 'Crypto Security, Hack Post-Mortems & Wallet Safety'
  },
  mining: {
    id: 'mining',
    name: 'Mining',
    slug: 'mining',
    description: 'Proof-of-work hashrate dynamics, ASIC efficiency, green energy mining initiatives, and operational economics.',
    badgeColor: 'bg-orange-500/15 border-orange-500/30 text-orange-400',
    textColor: 'text-orange-500',
    metaTitle: 'Crypto Mining, Bitcoin Hashrate & Energy Efficiency'
  },
  'institutional-crypto': {
    id: 'institutional-crypto',
    name: 'Institutional Crypto',
    slug: 'institutional-crypto',
    description: 'Hedge fund allocations, corporate treasury holdings, ETF inflows, prime brokerage offerings, and sovereign wealth adoption.',
    badgeColor: 'bg-slate-400/15 border-slate-400/30 text-slate-300',
    textColor: 'text-slate-300',
    metaTitle: 'Institutional Crypto, Sovereign Reserves & Wall Street Adoption'
  },
  stablecoins: {
    id: 'stablecoins',
    name: 'Stablecoins',
    slug: 'stablecoins',
    description: 'Fiat-backed tokens, algorithmic stablecoin models, cross-border settlement volumes, and central bank reserve audits.',
    badgeColor: 'bg-green-500/15 border-green-500/30 text-green-400',
    textColor: 'text-green-500',
    metaTitle: 'Stablecoins, Global Payments, USDT, USDC & Yield Backing'
  },
  memecoins: {
    id: 'memecoins',
    name: 'Memecoins',
    slug: 'memecoins',
    description: 'Viral community tokens, attention economy analysis, fair launch mechanisms, and decentralized community phenomena.',
    badgeColor: 'bg-yellow-500/15 border-yellow-500/30 text-yellow-400',
    textColor: 'text-yellow-500',
    metaTitle: 'Memecoin Trends, Community Momentum & Market Sentiment'
  },
  technology: {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Cryptographic breakthroughs, AI x Crypto integrations, formal verification, quantum resistance, and consensus engineering.',
    badgeColor: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
    textColor: 'text-sky-500',
    metaTitle: 'Blockchain Technology, AI Integrations & Cryptographic Research'
  }
};

export const CATEGORY_LIST = Object.values(CATEGORIES);
