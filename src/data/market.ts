export interface MarketCoin {
  symbol: string;
  name: string;
  category: 'layer1' | 'defi' | 'meme' | 'stablecoin' | 'infra';
  price: number;
  priceEur: number;
  change24h: number;
  marketCap: string;
  volume24h: string;
}

export interface MarketMetrics {
  totalMarketCap: string;
  totalMarketCapChange24h: number;
  volume24h: string;
  btcDominance: number;
  ethDominance: number;
  fearAndGreedIndex: number;
  fearAndGreedSentiment: string;
  gasGwei: number;
}

export const EUR_USD_RATE = 1.1596; // 1 EUR = 1.1596 USD (approx €0.8624 per USD)

export const MARKET_METRICS: MarketMetrics = {
  totalMarketCap: '$2.66 Trillion',
  totalMarketCapChange24h: -1.65,
  volume24h: '$100.2 Billion',
  btcDominance: 58.2,
  ethDominance: 11.6,
  fearAndGreedIndex: 63,
  fearAndGreedSentiment: 'Greed',
  gasGwei: 12
};

export const MARKET_COINS: MarketCoin[] = [
  // --- LAYER 1 / MAJORS ---
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    category: 'layer1',
    price: 77307.00,
    priceEur: Math.round((77307.00 / EUR_USD_RATE) * 100) / 100,
    change24h: 0.59,
    marketCap: '$1.55T',
    volume24h: '$32.0B'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    category: 'layer1',
    price: 2534.46,
    priceEur: Math.round((2534.46 / EUR_USD_RATE) * 100) / 100,
    change24h: 3.13,
    marketCap: '$309.3B',
    volume24h: '$23.6B'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    category: 'layer1',
    price: 101.99,
    priceEur: Math.round((101.99 / EUR_USD_RATE) * 100) / 100,
    change24h: 2.96,
    marketCap: '$59.8B',
    volume24h: '$4.4B'
  },
  {
    symbol: 'BNB',
    name: 'BNB Chain',
    category: 'layer1',
    price: 736.65,
    priceEur: Math.round((736.65 / EUR_USD_RATE) * 100) / 100,
    change24h: 3.45,
    marketCap: '$98.1B',
    volume24h: '$1.3B'
  },
  {
    symbol: 'XRP',
    name: 'XRP',
    category: 'layer1',
    price: 1.37,
    priceEur: Math.round((1.37 / EUR_USD_RATE) * 1000) / 1000,
    change24h: 3.44,
    marketCap: '$86.2B',
    volume24h: '$2.5B'
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    category: 'layer1',
    price: 0.2088,
    priceEur: Math.round((0.2088 / EUR_USD_RATE) * 10000) / 10000,
    change24h: 3.35,
    marketCap: '$7.8B',
    volume24h: '$540M'
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    category: 'layer1',
    price: 7.44,
    priceEur: Math.round((7.44 / EUR_USD_RATE) * 100) / 100,
    change24h: 1.12,
    marketCap: '$3.3B',
    volume24h: '$315M'
  },

  // --- MEME COINS ---
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    category: 'meme',
    price: 0.1685,
    priceEur: Math.round((0.1685 / EUR_USD_RATE) * 10000) / 10000,
    change24h: 4.82,
    marketCap: '$24.6B',
    volume24h: '$2.1B'
  },
  {
    symbol: 'SHIB',
    name: 'Shiba Inu',
    category: 'meme',
    price: 0.0000148,
    priceEur: Math.round((0.0000148 / EUR_USD_RATE) * 10000000) / 10000000,
    change24h: 3.25,
    marketCap: '$8.7B',
    volume24h: '$580M'
  },
  {
    symbol: 'PEPE',
    name: 'Pepe',
    category: 'meme',
    price: 0.0000094,
    priceEur: Math.round((0.0000094 / EUR_USD_RATE) * 10000000) / 10000000,
    change24h: 7.91,
    marketCap: '$3.9B',
    volume24h: '$940M'
  },
  {
    symbol: 'WIF',
    name: 'dogwifhat',
    category: 'meme',
    price: 1.84,
    priceEur: Math.round((1.84 / EUR_USD_RATE) * 100) / 100,
    change24h: 6.40,
    marketCap: '$1.84B',
    volume24h: '$410M'
  },
  {
    symbol: 'BONK',
    name: 'Bonk',
    category: 'meme',
    price: 0.0000215,
    priceEur: Math.round((0.0000215 / EUR_USD_RATE) * 10000000) / 10000000,
    change24h: -1.85,
    marketCap: '$1.62B',
    volume24h: '$290M'
  },
  {
    symbol: 'FLOKI',
    name: 'FLOKI',
    category: 'meme',
    price: 0.000142,
    priceEur: Math.round((0.000142 / EUR_USD_RATE) * 1000000) / 1000000,
    change24h: 2.10,
    marketCap: '$1.37B',
    volume24h: '$180M'
  },

  // --- STABLECOINS ---
  {
    symbol: 'USDT',
    name: 'Tether USD',
    category: 'stablecoin',
    price: 1.000,
    priceEur: Math.round((1.000 / EUR_USD_RATE) * 1000) / 1000,
    change24h: 0.02,
    marketCap: '$120.4B',
    volume24h: '$68.2B'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    category: 'stablecoin',
    price: 0.9998,
    priceEur: Math.round((0.9998 / EUR_USD_RATE) * 1000) / 1000,
    change24h: -0.01,
    marketCap: '$42.3B',
    volume24h: '$8.4B'
  },
  {
    symbol: 'DAI',
    name: 'Dai / USDS',
    category: 'stablecoin',
    price: 1.000,
    priceEur: Math.round((1.000 / EUR_USD_RATE) * 1000) / 1000,
    change24h: 0.01,
    marketCap: '$5.4B',
    volume24h: '$260M'
  },
  {
    symbol: 'EURC',
    name: 'EURC Circle',
    category: 'stablecoin',
    price: 1.1596,
    priceEur: 1.0000,
    change24h: 0.04,
    marketCap: '$195M',
    volume24h: '$45M'
  },

  // --- DEFI & INFRASTRUCTURE ---
  {
    symbol: 'LINK',
    name: 'Chainlink',
    category: 'infra',
    price: 11.54,
    priceEur: Math.round((11.54 / EUR_USD_RATE) * 100) / 100,
    change24h: 1.27,
    marketCap: '$8.6B',
    volume24h: '$477M'
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
    category: 'defi',
    price: 8.24,
    priceEur: Math.round((8.24 / EUR_USD_RATE) * 100) / 100,
    change24h: 4.15,
    marketCap: '$5.1B',
    volume24h: '$320M'
  },
  {
    symbol: 'AAVE',
    name: 'Aave',
    category: 'defi',
    price: 168.40,
    priceEur: Math.round((168.40 / EUR_USD_RATE) * 100) / 100,
    change24h: 5.60,
    marketCap: '$2.52B',
    volume24h: '$210M'
  },
  {
    symbol: 'RENDER',
    name: 'Render Network',
    category: 'infra',
    price: 5.82,
    priceEur: Math.round((5.82 / EUR_USD_RATE) * 100) / 100,
    change24h: 6.72,
    marketCap: '$2.98B',
    volume24h: '$240M'
  },
  {
    symbol: 'NEAR',
    name: 'NEAR Protocol',
    category: 'infra',
    price: 4.95,
    priceEur: Math.round((4.95 / EUR_USD_RATE) * 100) / 100,
    change24h: 3.84,
    marketCap: '$6.05B',
    volume24h: '$380M'
  }
];
