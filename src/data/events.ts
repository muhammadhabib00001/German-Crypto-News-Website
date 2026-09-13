export interface CryptoEvent {
  id: string;
  title: string;
  slug: string;
  organizer: string;
  eventType: 'Conference' | 'Summit' | 'Hackathon' | 'Expo' | 'Developer Forum';
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
    title: 'TOKEN2049 Singapore 2026',
    slug: 'token2049-singapore-2026',
    organizer: 'TOKEN2049 Media',
    eventType: 'Summit',
    startDate: '2026-09-16',
    endDate: '2026-09-17',
    startTime: '08:30 SGT',
    endTime: '18:00 SGT',
    timeZone: 'Asia/Singapore (SGT UTC+8)',
    location: 'Marina Bay Sands Expo & Convention Centre',
    city: 'Singapore',
    country: 'Singapore',
    isVirtual: false,
    website: 'https://www.asia.token2049.com',
    description: 'Asia’s premier Web3 conference bringing together over 20,000 global founders, investors, institutional funds, and regulators for two days of high-octane keynotes and networking.',
    keySpeakers: ['Vitalik Buterin (Ethereum)', 'Balaji Srinivasan (Network State)', 'Mike Novogratz (Galaxy Digital)'],
    topics: ['Institutional Crypto', 'DeFi Liquidity', 'Layer-2 Infrastructure', 'DePIN & AI'],
    featured: true,
    ticketPrice: '$499 - $1,499'
  },
  {
    id: 'solana-breakpoint-2026',
    title: 'Solana Breakpoint 2026',
    slug: 'solana-breakpoint-2026',
    organizer: 'Solana Foundation',
    eventType: 'Conference',
    startDate: '2026-09-21',
    endDate: '2026-09-23',
    startTime: '09:00 GST',
    endTime: '19:00 GST',
    timeZone: 'Asia/Dubai (GST UTC+4)',
    location: 'Abu Dhabi National Exhibition Centre (ADNEC)',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    isVirtual: false,
    website: 'https://solana.com/breakpoint',
    description: 'The definitive annual ecosystem gathering for Solana builders, validator operators, DeFi protocol designers, DePIN networks, and high-frequency trading desks.',
    keySpeakers: ['Anatoly Yakovenko (Solana Labs)', 'Raj Gokal (Solana Foundation)', 'Mert Mumtaz (Helius)'],
    topics: ['Firedancer Client', 'State Compression', 'Solana Pay', 'Mobile Stack 2.0'],
    featured: true,
    ticketPrice: '$299 - $899'
  },
  {
    id: 'token2049-dubai-2026',
    title: 'TOKEN2049 Dubai 2026',
    slug: 'token2049-dubai-2026',
    organizer: 'TOKEN2049 Media',
    eventType: 'Summit',
    startDate: '2026-10-14',
    endDate: '2026-10-15',
    startTime: '09:00 GST',
    endTime: '18:30 GST',
    timeZone: 'Asia/Dubai (GST UTC+4)',
    location: 'Madinat Jumeirah Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
    isVirtual: false,
    website: 'https://www.dubai.token2049.com',
    description: 'Middle East’s flagship cryptocurrency convention highlighting VARA regulatory compliance, sovereign wealth digital asset reserves, and institutional fund allocations.',
    keySpeakers: ['H.E. Khalfan Belhoul (Dubai Future Foundation)', 'Paolo Ardoino (Tether)', 'Jeremy Allaire (Circle)'],
    topics: ['VARA Regulation', 'Stablecoin Settlements', 'Sovereign Wealth Adoption', 'Real World Assets'],
    featured: true,
    ticketPrice: '$399 - $1,299'
  },
  {
    id: 'devcon-8-2026',
    title: 'Devcon 8: The Ethereum Developer Conference',
    slug: 'devcon-8-2026',
    organizer: 'Ethereum Foundation',
    eventType: 'Developer Forum',
    startDate: '2026-11-10',
    endDate: '2026-11-13',
    startTime: '09:30 BST',
    endTime: '18:00 BST',
    timeZone: 'Europe/London (BST UTC+1)',
    location: 'ExCeL London Convention Centre',
    city: 'London',
    country: 'United Kingdom',
    isVirtual: false,
    website: 'https://devcon.org',
    description: 'The Ethereum Foundation’s flagship international developer gathering, uniting researchers, cryptographers, and protocol engineers to build public goods and decentralized systems.',
    keySpeakers: ['Justin Drake (Ethereum Foundation)', 'Tim Beiko (Ethereum Core Dev)', 'Ayaan Williams (Privacy Dev)'],
    topics: ['Verkle Trees', 'Single Slot Finality', 'Quantum Resistance', 'Decentralized Sequencers'],
    featured: true,
    ticketPrice: '$350 - $900'
  },
  {
    id: 'ethcc-9-cannes-2026',
    title: 'EthCC 9 (Ethereum Community Conference)',
    slug: 'ethcc-9-cannes-2026',
    organizer: 'Ethereum France',
    eventType: 'Developer Forum',
    startDate: '2026-07-06',
    endDate: '2026-07-09',
    startTime: '09:00 CEST',
    endTime: '18:30 CEST',
    timeZone: 'Europe/Paris (CEST UTC+2)',
    location: 'Palais des Festivals',
    city: 'Cannes',
    country: 'France',
    isVirtual: false,
    website: 'https://ethcc.io',
    description: 'Europe’s largest annual Ethereum developer gathering focused on EVM architecture, Account Abstraction (EIP-7702), Zero-Knowledge Proofs, and decentralized staking infrastructure.',
    keySpeakers: ['Dankrad Feist (Ethereum Foundation)', 'Eli Ben-Sasson (StarkWare)', 'Robert Drost (EigenLayer)'],
    topics: ['Pectra Hardfork', 'ZK-Rollups', 'Restaking Yields', 'EVM Parallelization'],
    featured: true,
    ticketPrice: '€320 - €850'
  },
  {
    id: 'web3-summit-berlin-2026',
    title: 'Web3 Summit Berlin 2026',
    slug: 'web3-summit-berlin-2026',
    organizer: 'Web3 Foundation',
    eventType: 'Conference',
    startDate: '2026-08-19',
    endDate: '2026-08-21',
    startTime: '10:00 CEST',
    endTime: '19:00 CEST',
    timeZone: 'Europe/Berlin (CEST UTC+2)',
    location: 'Funkhaus Berlin',
    city: 'Berlin',
    country: 'Germany',
    isVirtual: false,
    website: 'https://web3summit.com',
    description: 'A developer-centric gathering focused on decentralized Web3 protocols, peer-to-peer mesh networks, privacy preservation, and open-source infrastructure.',
    keySpeakers: ['Gavin Wood (Polkadot)', 'Harry Halpin (Nym)', 'Amira Taheri (Zero Knowledge Researcher)'],
    topics: ['Polkadot 2.0', 'Mixnets & Privacy', 'Substrate SDK', 'Decentralized Storage'],
    featured: false,
    ticketPrice: '€250 - €600'
  },
  {
    id: 'consensus-2026-miami',
    title: 'Consensus 2026 by CoinDesk',
    slug: 'consensus-2026-miami',
    organizer: 'CoinDesk',
    eventType: 'Expo',
    startDate: '2026-05-18',
    endDate: '2026-05-20',
    startTime: '08:00 EDT',
    endTime: '17:30 EDT',
    timeZone: 'America/New_York (EDT UTC-4)',
    location: 'Miami Beach Convention Center',
    city: 'Miami',
    country: 'United States',
    isVirtual: false,
    website: 'https://consensus.coindesk.com',
    description: 'The world’s largest and longest-running crypto, Web3, and AI gathering uniting policy leaders, enterprise executives, fund managers, and blockchain innovators.',
    keySpeakers: ['Hester Peirce (SEC Commissioner)', 'Brad Garlinghouse (Ripple)', 'Cathie Wood (ARK Invest)'],
    topics: ['Crypto Policy & SEC', 'Institutional ETFs', 'Bitcoin Treasury Strategy', 'Tokenized Real Estate'],
    featured: false,
    ticketPrice: '$699 - $2,499'
  },
  {
    id: 'ethdenver-2026',
    title: 'ETHDenver 2026 BUIDLathon & Innovation Summit',
    slug: 'ethdenver-2026',
    organizer: 'SporkDAO',
    eventType: 'Hackathon',
    startDate: '2026-02-23',
    endDate: '2026-03-03',
    startTime: '09:00 MDT',
    endTime: '22:00 MDT',
    timeZone: 'America/Denver (MDT UTC-6)',
    location: 'Spork Castle (National Western Center)',
    city: 'Denver',
    country: 'United States',
    isVirtual: false,
    website: 'https://www.ethdenver.com',
    description: 'The largest community-owned Web3 hackathon and BUIDLathon in the world, distributing over $1M in bounties and incubator grants to emerging blockchain startups.',
    keySpeakers: ['John Paller (SporkDAO)', 'Stani Kulechov (Aave)', 'Sergey Nazarov (Chainlink)'],
    topics: ['Hackathon Bounties', 'DAO Governance', 'Cross-Chain Messaging', 'Smart Account Abstraction'],
    featured: false,
    ticketPrice: 'Free (Application Required)'
  }
];
