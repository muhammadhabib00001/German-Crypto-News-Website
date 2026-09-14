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
    status: 'Geprüft' | 'Ausstehend' | 'Befreit';
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
  riskRating: 'Niedrig' | 'Mittel' | 'Hoch' | 'Extrem / Spekulativ';
  isFeatured?: boolean;
}

export const UPCOMING_TOKENS: UpcomingToken[] = [
  // --- PRESALE TOKENS ---
  {
    id: 'nexus-depin-network',
    name: 'Nexus DePIN Compute',
    symbol: 'NXUS',
    category: 'presale',
    categoryLabel: 'Presale-Token',
    stage: 'Active Presale',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-300',
    blockchain: 'Ethereum',
    chainIcon: '🔷',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-15T18:00:00Z',
    launchDateDisplay: '15. Oktober 2026',
    presalePrice: '0,045 €',
    targetListingPrice: '0,080 €',
    hardCap: '8.500.000 €',
    raisedAmount: '6.250.000 €',
    raisedPercent: 73,
    totalTokens: '1.000.000.000 NXUS',
    securityAudit: {
      auditor: 'CertiK & Hacken',
      score: '94/100',
      kycVerified: true,
      status: 'Geprüft',
      auditUrl: 'https://certik.com'
    },
    shortDescription: 'Dezentrales physisches Infrastrukturnetzwerk (DePIN), das ungenutzte GPU-Kapazitäten für KI-Modelltraining bündelt.',
    fullOverview: 'Nexus Compute ermöglicht Forschungslaboren und Entwicklern den Zugriff auf globale GPU-Cluster mit 80 % Preisvorteil gegenüber zentralen Anbietern. NXUS-Tokens dienen dem Staking, Serverbelohnungen und Governance-Burn-Mechanismen.',
    keyFeatures: [
      'Peer-to-Peer-Compute-Routing unter 50 ms Latenz',
      'Proof-of-Useful-Work (PoUW) Verifizierungsvertrag',
      'Automatische Staking-Renditen in USDC und NXUS',
      'Vertraglich gesichertes Tier-1 CEX-Listing für Q4 2026'
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
    riskRating: 'Mittel',
    isFeatured: true
  },
  {
    id: 'aegis-quantum-shield',
    name: 'Aegis Quantum Shield',
    symbol: 'AGIS',
    category: 'presale',
    categoryLabel: 'Presale-Token',
    stage: 'Active Presale',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-300',
    blockchain: 'Arbitrum',
    chainIcon: '🟦',
    logo: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-11-01T12:00:00Z',
    launchDateDisplay: '01. November 2026',
    presalePrice: '0,012 €',
    targetListingPrice: '0,025 €',
    hardCap: '4.200.000 €',
    raisedAmount: '3.100.000 €',
    raisedPercent: 74,
    totalTokens: '500.000.000 AGIS',
    securityAudit: {
      auditor: 'OpenZeppelin',
      score: '98/100',
      kycVerified: true,
      status: 'Geprüft'
    },
    shortDescription: 'Quantensicheres Verschlüsselungsprotokoll zur Absicherung von Layer-2-Brücken und Smart Contracts.',
    fullOverview: 'Aegis Shield nutzt post-quanten-kryptografische Gitterverfahren zur Verhinderung von Dekodierungsangriffen auf dezentrale Brücken.',
    keyFeatures: [
      'Gitterbasierte Post-Quanten-Signaturen',
      'Automatisierter Schutz für L2-Cross-Chain-Brücken',
      'Echtzeit-Audit-Dashboard für Smart Contracts'
    ],
    tokenomics: {
      presale: 40,
      liquidity: 20,
      stakingRewards: 20,
      ecosystem: 10,
      team: 10
    },
    links: {
      website: 'https://aegisquantum.io',
      twitter: 'https://twitter.com/aegis_shield'
    },
    riskRating: 'Niedrig',
    isFeatured: false
  },
  {
    id: 'solstice-liquid-staking',
    name: 'Solstice Liquid Staking',
    symbol: 'SLST',
    category: 'presale',
    categoryLabel: 'Presale-Token',
    stage: 'Upcoming Presale',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
    blockchain: 'Solana',
    chainIcon: '🟣',
    logo: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-11-20T15:00:00Z',
    launchDateDisplay: '20. November 2026',
    presalePrice: '0,15 €',
    targetListingPrice: '0,30 €',
    hardCap: '12.000.000 €',
    raisedAmount: '1.500.000 €',
    raisedPercent: 12,
    totalTokens: '200.000.000 SLST',
    securityAudit: {
      auditor: 'Kudelski Security',
      score: '91/100',
      kycVerified: true,
      status: 'Geprüft'
    },
    shortDescription: 'Liquid-Staking-Protokoll der nächsten Generation für Solana mit MEV-Renditeoptimierung.',
    fullOverview: 'Solstice ermöglicht es Nutzern, SOL zu staken und stSOL zu erhalten, während MEV-Einnahmen automatisch reinvestiert werden.',
    keyFeatures: [
      'MEV-optimierte Staking-Renditen',
      'Keine Sperrfristen beim Unstaking',
      'Integration in Top-Solana-DeFi-Protokolle'
    ],
    tokenomics: {
      presale: 30,
      liquidity: 30,
      stakingRewards: 25,
      ecosystem: 10,
      team: 5
    },
    links: {
      website: 'https://solsticestaking.io'
    },
    riskRating: 'Mittel',
    isFeatured: false
  },

  // --- CRYPTO UTILITY TOKENS ---
  {
    id: 'chronos-zkevm-layer2',
    name: 'Chronos zkEVM L2',
    symbol: 'CHRN',
    category: 'crypto',
    categoryLabel: 'Utility & L2',
    stage: 'Upcoming CEX Launch',
    badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-300',
    blockchain: 'Ethereum',
    chainIcon: '🔷',
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-09-30T14:00:00Z',
    launchDateDisplay: '30. September 2026',
    presalePrice: '0,12 €',
    targetListingPrice: '0,25 €',
    hardCap: '15.000.000 €',
    raisedAmount: '15.000.000 €',
    raisedPercent: 100,
    totalTokens: '2.000.000.000 CHRN',
    securityAudit: {
      auditor: 'Trail of Bits',
      score: '96/100',
      kycVerified: true,
      status: 'Geprüft'
    },
    shortDescription: 'Zero-Knowledge-EVM-Layer-2 für ultraschnelle Finanztransaktionen im Millisekundenbereich.',
    fullOverview: 'Chronos skaliert Ethereum-Transaktionen auf über 10.000 TPS bei Gasgebühren unter 0,001 € pro Swap.',
    keyFeatures: [
      'Vollständige EVM-Kompatibilität ohne Code-Anpassung',
      'Rekordverdächtige ZK-Proof-Generierung',
      'Multi-Asset-Gasgebühren-Zahlung'
    ],
    tokenomics: {
      presale: 25,
      liquidity: 35,
      stakingRewards: 20,
      ecosystem: 10,
      team: 10
    },
    links: {
      website: 'https://chronos-zkevm.io'
    },
    riskRating: 'Niedrig',
    isFeatured: true
  },
  {
    id: 'terra-rwa-treasury',
    name: 'Terra RWA Treasury',
    symbol: 'TRWA',
    category: 'crypto',
    categoryLabel: 'Real World Assets',
    stage: 'Upcoming DEX Launch',
    badgeColor: 'bg-purple-500/10 text-purple-700 border-purple-300',
    blockchain: 'Base',
    chainIcon: '🔵',
    logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-05T16:00:00Z',
    launchDateDisplay: '05. Oktober 2026',
    presalePrice: '1,00 €',
    targetListingPrice: '1,05 €',
    hardCap: '10.000.000 €',
    raisedAmount: '8.400.000 €',
    raisedPercent: 84,
    totalTokens: '10.000.000 TRWA',
    securityAudit: {
      auditor: 'CertiK',
      score: '92/100',
      kycVerified: true,
      status: 'Geprüft'
    },
    shortDescription: 'Tokenisierte US-Staatsanleihen und Immobilien-Assets auf der Base Layer-2.',
    fullOverview: 'Terra RWA bringt durch Staatsanleihen besicherte Erträge direkt auf die Blockchain mit täglicher Zinsausschüttung.',
    keyFeatures: [
      'Tägliche Ausschüttung von Treasury-Erträgen',
      'Vollständige Transparenz über Audit-Berichte',
      'Nahtlose Integration in Base-DeFi'
    ],
    tokenomics: {
      presale: 50,
      liquidity: 30,
      stakingRewards: 10,
      ecosystem: 5,
      team: 5
    },
    links: {
      website: 'https://terrarwa.fi'
    },
    riskRating: 'Niedrig',
    isFeatured: false
  },
  {
    id: 'sui-synth-ai',
    name: 'SuiSynth Agent AI',
    symbol: 'SYNTH',
    category: 'crypto',
    categoryLabel: 'AI & Data',
    stage: 'Airdrop / Testnet',
    badgeColor: 'bg-cyan-500/10 text-cyan-700 border-cyan-300',
    blockchain: 'Sui',
    chainIcon: '💧',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-25T10:00:00Z',
    launchDateDisplay: '25. Oktober 2026',
    totalTokens: '100.000.000 SYNTH',
    securityAudit: {
      auditor: 'MoveBit',
      score: '90/100',
      kycVerified: false,
      status: 'Geprüft'
    },
    shortDescription: 'Autonome KI-Agenten auf Sui zur Durchführung von Arbitrage-Swaps und Ertrags-Optimierung.',
    fullOverview: 'SuiSynth ermöglicht es Nutzern, eigene On-Chain-KI-Handelsagenten ohne Programmierkenntnisse zu konfigurieren.',
    keyFeatures: [
      'Programmierbare KI-Trading-Agenten',
      'Parallele Transaktionsausführung auf Sui',
      'Dezentrales Training von KI-Strategien'
    ],
    tokenomics: {
      presale: 20,
      liquidity: 30,
      stakingRewards: 30,
      ecosystem: 10,
      team: 10
    },
    links: {
      website: 'https://suisynth.ai'
    },
    riskRating: 'Mittel',
    isFeatured: false
  },

  // --- MEMECOIN TOKENS ---
  {
    id: 'sol-shiba-alpha',
    name: 'SolShiba Alpha',
    symbol: 'SOBA',
    category: 'meme',
    categoryLabel: 'Memecoin',
    stage: 'Upcoming DEX Launch',
    badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-300',
    blockchain: 'Solana',
    chainIcon: '🟣',
    logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-09-18T20:00:00Z',
    launchDateDisplay: '18. September 2026',
    presalePrice: '0,0000045 €',
    targetListingPrice: '0,0000100 €',
    hardCap: '1.200.000 €',
    raisedAmount: '980.000 €',
    raisedPercent: 81,
    totalTokens: '100.000.000.000 SOBA',
    securityAudit: {
      auditor: 'Coinsult',
      score: '85/100',
      kycVerified: false,
      status: 'Geprüft'
    },
    shortDescription: 'Community-getriebener Solana-Memecoin mit automatischen Token-Burns bei DEX-Swaps.',
    fullOverview: 'SolShiba Alpha kombiniert Viralfaktoren der Memecoin-Kultur mit automatischen Liquiditäts-Burns.',
    keyFeatures: [
      '100 % gesperrte Liquidität auf Raydium',
      '2 % automatischer Token-Burn bei jeder Transaktion',
      'Kostenlose Airdrops für Früheinsteiger'
    ],
    tokenomics: {
      presale: 50,
      liquidity: 40,
      stakingRewards: 0,
      ecosystem: 5,
      team: 5
    },
    links: {
      website: 'https://solshibaalpha.com'
    },
    riskRating: 'Extrem / Spekulativ',
    isFeatured: true
  },
  {
    id: 'pepe-neo-matrix',
    name: 'Pepe Neo Matrix',
    symbol: 'NEOPEPE',
    category: 'meme',
    categoryLabel: 'Memecoin',
    stage: 'Active Presale',
    badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-300',
    blockchain: 'Base',
    chainIcon: '🔵',
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-10T19:00:00Z',
    launchDateDisplay: '10. Oktober 2026',
    presalePrice: '0,0000012 €',
    targetListingPrice: '0,0000030 €',
    hardCap: '800.000 €',
    raisedAmount: '450.000 €',
    raisedPercent: 56,
    totalTokens: '420.690.000.000 NEOPEPE',
    securityAudit: {
      auditor: 'SolidProof',
      score: '88/100',
      kycVerified: true,
      status: 'Geprüft'
    },
    shortDescription: 'Cyberpunk-Pepe-Memecoin auf der Base-Blockchain mit Staking-Minigame.',
    fullOverview: 'Pepe Neo Matrix verbindet Cyberpunk-Design mit einem dezentralen Staking-Minigame.',
    keyFeatures: [
      'Staking-Minigame im Browser',
      'Zero-Tax-Transaktionen',
      'Exklusive NFT-Verlosungen'
    ],
    tokenomics: {
      presale: 60,
      liquidity: 30,
      stakingRewards: 5,
      ecosystem: 3,
      team: 2
    },
    links: {
      website: 'https://pepeneomatrix.com'
    },
    riskRating: 'Extrem / Spekulativ',
    isFeatured: false
  },
  {
    id: 'ton-cat-republic',
    name: 'TON Cat Republic',
    symbol: 'TCAT',
    category: 'meme',
    categoryLabel: 'Memecoin',
    stage: 'Upcoming DEX Launch',
    badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-300',
    blockchain: 'TON',
    chainIcon: '💎',
    logo: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=160&auto=format&fit=crop&q=80',
    launchDate: '2026-10-18T17:00:00Z',
    launchDateDisplay: '18. Oktober 2026',
    presalePrice: '0,0008 €',
    targetListingPrice: '0,0015 €',
    hardCap: '2.000.000 €',
    raisedAmount: '1.600.000 €',
    raisedPercent: 80,
    totalTokens: '1.000.000.000 TCAT',
    securityAudit: {
      auditor: 'CertiK',
      score: '93/100',
      kycVerified: true,
      status: 'Geprüft'
    },
    shortDescription: 'Telegram-Mini-App-Memecoin für Katzenliebhaber mit Tap-to-Earn-Integration.',
    fullOverview: 'TON Cat Republic nutzt die Telegram-Infrastruktur für ein reichweitenstarkes Tap-to-Earn-Spiel.',
    keyFeatures: [
      'Direkt in Telegram integrierte Mini-App',
      'Tap-to-Earn-Belohnungen in TCAT',
      'Nahtloser Handel über TON DEXs'
    ],
    tokenomics: {
      presale: 45,
      liquidity: 35,
      stakingRewards: 10,
      ecosystem: 5,
      team: 5
    },
    links: {
      website: 'https://toncatrepublic.io'
    },
    riskRating: 'Hoch',
    isFeatured: false
  }
];
