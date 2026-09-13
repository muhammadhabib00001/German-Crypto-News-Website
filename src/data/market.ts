export interface MarketCoin {
  symbol: string;
  name: string;
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
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 77307.00,
    priceEur: Math.round((77307.00 / EUR_USD_RATE) * 100) / 100,
    change24h: 0.59,
    marketCap: '$1.55T',
    volume24h: '$32.0B'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2534.46,
    priceEur: Math.round((2534.46 / EUR_USD_RATE) * 100) / 100,
    change24h: 3.13,
    marketCap: '$309.3B',
    volume24h: '$23.6B'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: 101.99,
    priceEur: Math.round((101.99 / EUR_USD_RATE) * 100) / 100,
    change24h: 2.96,
    marketCap: '$59.8B',
    volume24h: '$4.4B'
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    price: 736.65,
    priceEur: Math.round((736.65 / EUR_USD_RATE) * 100) / 100,
    change24h: 3.45,
    marketCap: '$98.1B',
    volume24h: '$1.3B'
  },
  {
    symbol: 'XRP',
    name: 'XRP',
    price: 1.37,
    priceEur: Math.round((1.37 / EUR_USD_RATE) * 1000) / 1000,
    change24h: 3.44,
    marketCap: '$86.2B',
    volume24h: '$2.5B'
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.2088,
    priceEur: Math.round((0.2088 / EUR_USD_RATE) * 10000) / 10000,
    change24h: 3.35,
    marketCap: '$7.8B',
    volume24h: '$540M'
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 7.44,
    priceEur: Math.round((7.44 / EUR_USD_RATE) * 100) / 100,
    change24h: 1.12,
    marketCap: '$3.3B',
    volume24h: '$315M'
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
    price: 11.54,
    priceEur: Math.round((11.54 / EUR_USD_RATE) * 100) / 100,
    change24h: 1.27,
    marketCap: '$8.6B',
    volume24h: '$477M'
  }
];