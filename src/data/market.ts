export interface MarketCoin {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume24h: string;
  sparkline: number[];
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

export const MARKET_METRICS: MarketMetrics = {
  totalMarketCap: '$2.84 Trillion',
  totalMarketCapChange24h: 3.42,
  volume24h: '$98.5 Billion',
  btcDominance: 57.8,
  ethDominance: 16.4,
  fearAndGreedIndex: 68,
  fearAndGreedSentiment: 'Greed',
  gasGwei: 12
};

export const MARKET_COINS: MarketCoin[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 89450.00,
    change24h: 3.84,
    marketCap: '$1.76T',
    volume24h: '$42.1B',
    sparkline: [86200, 86800, 87100, 88200, 87900, 89100, 89450]
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3420.50,
    change24h: 4.12,
    marketCap: '$411B',
    volume24h: '$21.4B',
    sparkline: [3280, 3310, 3300, 3360, 3390, 3405, 3420]
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: 194.20,
    change24h: 6.75,
    marketCap: '$92.4B',
    volume24h: '$7.8B',
    sparkline: [181, 183, 185, 189, 188, 192, 194.2]
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    price: 612.80,
    change24h: 1.15,
    marketCap: '$89.2B',
    volume24h: '$1.9B',
    sparkline: [605, 608, 607, 610, 611, 610, 612.8]
  },
  {
    symbol: 'XRP',
    name: 'XRP',
    price: 0.885,
    change24h: -0.92,
    marketCap: '$50.2B',
    volume24h: '$2.3B',
    sparkline: [0.90, 0.895, 0.89, 0.882, 0.886, 0.887, 0.885]
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.645,
    change24h: 2.30,
    marketCap: '$23.1B',
    volume24h: '$840M',
    sparkline: [0.63, 0.632, 0.635, 0.64, 0.638, 0.642, 0.645]
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 32.40,
    change24h: 5.10,
    marketCap: '$13.2B',
    volume24h: '$620M',
    sparkline: [30.8, 31.0, 31.2, 31.8, 31.9, 32.2, 32.4]
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
    price: 18.90,
    change24h: 4.45,
    marketCap: '$11.5B',
    volume24h: '$510M',
    sparkline: [18.0, 18.2, 18.1, 18.5, 18.7, 18.8, 18.9]
  }
];
