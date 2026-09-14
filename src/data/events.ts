export interface CryptoEvent {
  id: string;
  title: string;
  slug: string;
  organizer: string;
  eventType: 'Konferenz' | 'Gipfeltreffen' | 'Hackathon' | 'Messe' | 'Entwickler-Forum';
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: string;
  timeZone?: string;
  location: string;
  city: string;
  country: string;
  isVirtual: boolean;
  website: string;
  description: string;
  keySpeakers: string[];
  topics: string[];
  featured: boolean;
  ticketPrice: string;
}

export const CRYPTO_EVENTS: CryptoEvent[] = [
  {
    id: 'token2049-singapore-2026',
    title: 'TOKEN2049 Singapur 2026',
    slug: 'token2049-singapore-2026',
    organizer: 'TOKEN2049 Media',
    eventType: 'Gipfeltreffen',
    startDate: '2026-09-16',
    endDate: '2026-09-17',
    startTime: '08:30 SGT',
    endTime: '18:00 SGT',
    timeZone: 'Asien/Singapur (SGT UTC+8)',
    location: 'Marina Bay Sands Expo & Convention Centre',
    city: 'Singapur',
    country: 'Singapur',
    isVirtual: false,
    website: 'https://www.asia.token2049.com',
    description: 'Asiens führende Web3-Konferenz bringt über 20.000 internationale Gründer, Investoren, institutionelle Fonds und Regulierungsbehörden für zwei Tage hochkarätiger Keynotes und Networking zusammen.',
    keySpeakers: ['Vitalik Buterin (Ethereum)', 'Balaji Srinivasan (Network State)', 'Mike Novogratz (Galaxy Digital)'],
    topics: ['Institutionelle Kryptowährungen', 'DeFi-Liquidität', 'Layer-2-Infrastruktur', 'DePIN & KI'],
    featured: true,
    ticketPrice: '499 € - 1.499 €'
  },
  {
    id: 'solana-breakpoint-2026',
    title: 'Solana Breakpoint 2026',
    slug: 'solana-breakpoint-2026',
    organizer: 'Solana Foundation',
    eventType: 'Konferenz',
    startDate: '2026-09-21',
    endDate: '2026-09-23',
    startTime: '09:00 GST',
    endTime: '19:00 GST',
    timeZone: 'Asien/Dubai (GST UTC+4)',
    location: 'Abu Dhabi National Exhibition Centre (ADNEC)',
    city: 'Abu Dhabi',
    country: 'Vereinigte Arabische Emirate',
    isVirtual: false,
    website: 'https://solana.com/breakpoint',
    description: 'Das jährliche globale Ökosystem-Treffen für Solana-Entwickler, Validatoren-Betreiber, DeFi-Protokoll-Designer, DePIN-Netzwerke und Hochfrequenz-Trading-Desks.',
    keySpeakers: ['Anatoly Yakovenko (Solana Labs)', 'Raj Gokal (Solana Foundation)', 'Mert Mumtaz (Helius)'],
    topics: ['Firedancer Client', 'State Compression', 'Solana Pay', 'Mobile Stack 2.0'],
    featured: true,
    ticketPrice: '299 € - 899 €'
  },
  {
    id: 'token2049-dubai-2026',
    title: 'TOKEN2049 Dubai 2026',
    slug: 'token2049-dubai-2026',
    organizer: 'TOKEN2049 Media',
    eventType: 'Gipfeltreffen',
    startDate: '2026-10-14',
    endDate: '2026-10-15',
    startTime: '09:00 GST',
    endTime: '18:30 GST',
    timeZone: 'Asien/Dubai (GST UTC+4)',
    location: 'Madinat Jumeirah Resort',
    city: 'Dubai',
    country: 'Vereinigte Arabische Emirate',
    isVirtual: false,
    website: 'https://www.dubai.token2049.com',
    description: 'Führender Krypto-Kongress im Nahen Osten mit Schwerpunkt auf VARA-Compliance, digitale Staatsreserven und institutionelle Kapitalallokationen.',
    keySpeakers: ['S.E. Khalfan Belhoul (Dubai Future Foundation)', 'Paolo Ardoino (Tether)', 'Jeremy Allaire (Circle)'],
    topics: ['VARA-Regulierung', 'Stablecoin-Abrechnungen', 'Institutionelle Adoption', 'Real World Assets'],
    featured: true,
    ticketPrice: '399 € - 1.299 €'
  },
  {
    id: 'devcon-8-2026',
    title: 'Devcon 8: Die Ethereum-Entwicklerkonferenz',
    slug: 'devcon-8-2026',
    organizer: 'Ethereum Foundation',
    eventType: 'Entwickler-Forum',
    startDate: '2026-11-10',
    endDate: '2026-11-13',
    startTime: '09:30 BST',
    endTime: '18:00 BST',
    timeZone: 'Europa/London (BST UTC+1)',
    location: 'ExCeL London Convention Centre',
    city: 'London',
    country: 'Vereinigtes Königreich',
    isVirtual: false,
    website: 'https://devcon.org',
    description: 'Das wichtigste Treffen für Ethereum-Forscher, Protokoll-Ingenieure, Danksharding-Architekten, ZK-Kryptografen und Staking-Betreiber weltweit.',
    keySpeakers: ['Vitalik Buterin (Ethereum)', 'Justin Drake (EF Research)', 'Eli Ben-Sasson (StarkWare)'],
    topics: ['Proto-Danksharding', 'Zero-Knowledge Proofs', 'Account Abstraction', 'MEV-Mitigation'],
    featured: true,
    ticketPrice: '199 € - 599 €'
  },
  {
    id: 'paris-blockchain-week-2026',
    title: 'Paris Blockchain Week 2026',
    slug: 'paris-blockchain-week-2026',
    organizer: 'Chain Of Events',
    eventType: 'Messe',
    startDate: '2026-04-08',
    endDate: '2026-04-10',
    startTime: '09:00 CEST',
    endTime: '18:30 CEST',
    timeZone: 'Europa/Paris (CEST UTC+2)',
    location: 'Le Carrousel du Louvre',
    city: 'Paris',
    country: 'Frankreich',
    isVirtual: false,
    website: 'https://www.parisblockchainweek.com',
    description: 'Europas hochkarätigster Krypto-Gipfel im Louvre mit Fokus auf MiCA-Regulierung, digitale Zentralbankwährungen (CBDCs), Luxusmarken-Web3-Adoption und Enterprise-Blockchain.',
    keySpeakers: ['Richard Teng (Binance)', 'Marieke Flament (Near Foundation)', 'Tim Draper (Draper Associates)'],
    topics: ['MiCA-Regulierung', 'Euro-Stablecoins', 'RWA-Tokenisierung', 'Web3-Gaming'],
    featured: false,
    ticketPrice: '520 € - 2.100 €'
  },
  {
    id: 'ethdenver-2026',
    title: 'ETHDenver Innovation Festival 2026',
    slug: 'ethdenver-2026',
    organizer: 'SporkDAO',
    eventType: 'Hackathon',
    startDate: '2026-02-24',
    endDate: '2026-03-04',
    startTime: '08:00 MST',
    endTime: '22:00 MST',
    timeZone: 'Amerika/Denver (MST UTC-7)',
    location: 'National Western Center',
    city: 'Denver',
    country: 'Vereinigte Staaten',
    isVirtual: false,
    website: 'https://www.ethdenver.com',
    description: 'Der weltweit größte von einer DAO getragene Web3-BUIDLathon mit über 1 Million Dollar an Bounties und Fördergeldern für dezentrale Anwendungen.',
    keySpeakers: ['Erik Voorhees (ShapeShift)', 'Austin Griffith (BuidlGuidl)', 'Preethi Kasireddy'],
    topics: ['DAO-Governance', 'Public Goods Funding', 'DeFi Primitives', 'Cross-Chain Bridges'],
    featured: false,
    ticketPrice: 'Kostenlos (Buidl-Ticket)'
  }
];
