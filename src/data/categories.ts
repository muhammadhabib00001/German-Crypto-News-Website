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
    description: 'Echtzeit-Bitcoin-Nachrichten, Halving-Zyklen, ETF-Zuflüsse, On-Chain-Analysen und Lightning-Netzwerk-Updates.',
    badgeColor: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
    textColor: 'text-amber-500',
    metaTitle: 'Bitcoin News, BTC ETF Trends & Marktanalysen'
  },
  ethereum: {
    id: 'ethereum',
    name: 'Ethereum',
    slug: 'ethereum',
    description: 'Aktuelle Ethereum-Nachrichten, Layer-2 Rollups, Staking-Kennzahlen, EIP-Entwicklungen und Smart-Contract-Analysen.',
    badgeColor: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
    textColor: 'text-blue-500',
    metaTitle: 'Ethereum News, ETH ETFs, Layer-2 Netzwerke & Staking'
  },
  altcoins: {
    id: 'altcoins',
    name: 'Altcoins',
    slug: 'altcoins',
    description: 'Umfassende Berichterstattung über Layer-1-Protokolle, alternative Blockchain-Netzwerke und aufstrebende Krypto-Tokens.',
    badgeColor: 'bg-violet-500/15 border-violet-500/30 text-violet-400',
    textColor: 'text-violet-500',
    metaTitle: 'Altcoin News, Layer 1 Blockchains & Token-Analysen'
  },
  blockchain: {
    id: 'blockchain',
    name: 'Blockchain',
    slug: 'blockchain',
    description: 'Fundierte Einblicke in Zero-Knowledge-Kryptographie, Konsensmechanismen, modulare Architekturen und DLT.',
    badgeColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    textColor: 'text-emerald-500',
    metaTitle: 'Blockchain Technologie, Kryptographie & Enterprise DLT'
  },
  defi: {
    id: 'defi',
    name: 'DeFi',
    slug: 'defi',
    description: 'Dezentrale Finanzmärkte, Automated Market Maker, Liquiditäts-Pools, Kreditmärkte und Yield-Strategien.',
    badgeColor: 'bg-teal-500/15 border-teal-500/30 text-teal-400',
    textColor: 'text-teal-500',
    metaTitle: 'DeFi News, Yield Farming, DEXs & Dezentrales Kreditwesen'
  },
  web3: {
    id: 'web3',
    name: 'Web3',
    slug: 'web3',
    description: 'Dezentrale Internet-Infrastruktur, digitale Identitäten, DePIN-Netzwerke und soziale Protokolle.',
    badgeColor: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
    textColor: 'text-purple-500',
    metaTitle: 'Web3 News, DePIN, Identität & Dezentrale Infrastruktur'
  },
  nft: {
    id: 'nft',
    name: 'NFT',
    slug: 'nft',
    description: 'Non-Fungible Tokens, digitale Sammlerstücke, RWA-Tokenisierung, On-Chain-Gaming und Urheberrechte.',
    badgeColor: 'bg-pink-500/15 border-pink-500/30 text-pink-400',
    textColor: 'text-pink-500',
    metaTitle: 'NFT News, Digitale Kunst & RWA Tokenisierung'
  },
  'crypto-markets': {
    id: 'crypto-markets',
    name: 'Krypto-Märkte',
    slug: 'crypto-markets',
    description: 'Makro-Krypto-Trends, Marktkapitalisierung, Liquidationen, Derivate und makroökonomische Zusammenhänge.',
    badgeColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    textColor: 'text-cyan-500',
    metaTitle: 'Krypto Marktanalysen, Makro-Trends & Liquidations-Heatmaps'
  },
  'crypto-regulation': {
    id: 'crypto-regulation',
    name: 'Krypto-Regulierung',
    slug: 'crypto-regulation',
    description: 'Globale Regulierungsrichtlinien, BaFin-Mitteilungen, europäische MiCA-Verordnung, SEC-Beschlüsse und Urteile.',
    badgeColor: 'bg-rose-500/15 border-rose-500/30 text-rose-400',
    textColor: 'text-rose-500',
    metaTitle: 'Krypto Regulierung, BaFin, MiCA Richtlinien & Rechtsprechung'
  },
  'crypto-trading': {
    id: 'crypto-trading',
    name: 'Krypto-Trading',
    slug: 'crypto-trading',
    description: 'Technische Analysen, Spot- und Perpetual-Trading, Orderbuch-Dynamiken, Liquidität und Marktpsychologie.',
    badgeColor: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
    textColor: 'text-indigo-500',
    metaTitle: 'Krypto Trading Strategien, Technische Indikatoren & Chartanalysen'
  },
  'crypto-security': {
    id: 'crypto-security',
    name: 'Krypto-Sicherheit',
    slug: 'crypto-security',
    description: 'Smart-Contract-Audits, Exploit-Analysen, Hardware-Wallet-Sicherheit und Sicherheitsprotokolle.',
    badgeColor: 'bg-red-500/15 border-red-500/30 text-red-400',
    textColor: 'text-red-500',
    metaTitle: 'Krypto Sicherheit, Hack-Analysen & Wallet-Schutz'
  },
  mining: {
    id: 'mining',
    name: 'Mining',
    slug: 'mining',
    description: 'Proof-of-Work Hashrate, ASIC-Effizienz, grüne Mining-Initiativen und wirtschaftliche Rentabilität.',
    badgeColor: 'bg-orange-500/15 border-orange-500/30 text-orange-400',
    textColor: 'text-orange-500',
    metaTitle: 'Krypto Mining, Bitcoin Hashrate & Energieeffizienz'
  },
  'institutional-crypto': {
    id: 'institutional-crypto',
    name: 'Institutionelle Krypto',
    slug: 'institutional-crypto',
    description: 'Hedgefonds-Allokationen, Unternehmens-Treasuries, ETF-Ströme, Brokerage-Angebote und Staatsfonds.',
    badgeColor: 'bg-slate-400/15 border-slate-400/30 text-slate-300',
    textColor: 'text-slate-300',
    metaTitle: 'Institutionelles Krypto, Staatsreserven & Wall-Street-Adoption'
  },
  stablecoins: {
    id: 'stablecoins',
    name: 'Stablecoins',
    slug: 'stablecoins',
    description: 'Fiat-gedeckte Tokens, algorithmische Modelle, grenzüberschreitende Zahlungen und Deckungsprüfungen.',
    badgeColor: 'bg-green-500/15 border-green-500/30 text-green-400',
    textColor: 'text-green-500',
    metaTitle: 'Stablecoins, Globaler Zahlungsverkehr, USDT, USDC & Reserven'
  },
  memecoins: {
    id: 'memecoins',
    name: 'Memecoins',
    slug: 'memecoins',
    description: 'Virale Community-Tokens, Aufmerksamkeitstrends, Fair-Launch-Mechanismen und Hype-Analysen.',
    badgeColor: 'bg-yellow-500/15 border-yellow-500/30 text-yellow-400',
    textColor: 'text-yellow-500',
    metaTitle: 'Memecoin Trends, Community-Dynamik & Markt-Stimmung'
  },
  technology: {
    id: 'technology',
    name: 'Technologie',
    slug: 'technology',
    description: 'Kryptographische Durchbrüche, KI x Krypto Integrationen, Verifizierung und Konsens-Engineering.',
    badgeColor: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
    textColor: 'text-sky-500',
    metaTitle: 'Blockchain Technologie, KI-Integrationen & Forschung'
  },
  'press-releases': {
    id: 'press-releases',
    name: 'Pressemitteilungen',
    slug: 'press-releases',
    description: 'Offizielle Pressemitteilungen, Protokoll-Ankündigungen, Token-Launches und Unternehmens-News.',
    badgeColor: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
    textColor: 'text-indigo-600',
    metaTitle: 'Offizielle Krypto Pressemitteilungen & Unternehmens-News'
  }
};

export const CATEGORY_LIST = Object.values(CATEGORIES);
