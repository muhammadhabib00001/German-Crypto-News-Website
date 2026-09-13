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

export const EUR_USD_RATE = 1.1596;

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
    "symbol": "BTC",
    "name": "Bitcoin",
    "category": "layer1",
    "price": 76771.3,
    "priceEur": 66204.98,
    "change24h": -0.76,
    "marketCap": "$1.52T",
    "volume24h": "$591.5M"
  },
  {
    "symbol": "ETH",
    "name": "Ethereum",
    "category": "layer1",
    "price": 2479.49,
    "priceEur": 2138.23,
    "change24h": -2.2,
    "marketCap": "$301.5B",
    "volume24h": "$458.1M"
  },
  {
    "symbol": "SOL",
    "name": "Solana",
    "category": "layer1",
    "price": 99.77,
    "priceEur": 86.04,
    "change24h": -2.38,
    "marketCap": "$58.2B",
    "volume24h": "$120.1M"
  },
  {
    "symbol": "BNB",
    "name": "BNB",
    "category": "layer1",
    "price": 716.18,
    "priceEur": 617.61,
    "change24h": -2.81,
    "marketCap": "$96.4B",
    "volume24h": "$59.4M"
  },
  {
    "symbol": "XRP",
    "name": "XRP",
    "category": "layer1",
    "price": 1.34,
    "priceEur": 1.16,
    "change24h": -2.22,
    "marketCap": "$84.1B",
    "volume24h": "$64.0M"
  },
  {
    "symbol": "ADA",
    "name": "Cardano",
    "category": "layer1",
    "price": 0.2046,
    "priceEur": 0.17644,
    "change24h": -2.2,
    "marketCap": "$7.6B",
    "volume24h": "$13.1M"
  },
  {
    "symbol": "AVAX",
    "name": "Avalanche",
    "category": "layer1",
    "price": 7.32,
    "priceEur": 6.31,
    "change24h": -1.71,
    "marketCap": "$3.2B",
    "volume24h": "$9.2M"
  },
  {
    "symbol": "SUI",
    "name": "Sui",
    "category": "layer1",
    "price": 0.7107,
    "priceEur": 0.61288,
    "change24h": -2.48,
    "marketCap": "$8.4B",
    "volume24h": "$33.0M"
  },
  {
    "symbol": "APT",
    "name": "Aptos",
    "category": "layer1",
    "price": 0.59,
    "priceEur": 0.5088,
    "change24h": -4.68,
    "marketCap": "$3.1B",
    "volume24h": "$4.0M"
  },
  {
    "symbol": "DOT",
    "name": "Polkadot",
    "category": "layer1",
    "price": 1,
    "priceEur": 0.87,
    "change24h": -3.92,
    "marketCap": "$5.2B",
    "volume24h": "$6.3M"
  },
  {
    "symbol": "TRX",
    "name": "TRON",
    "category": "layer1",
    "price": 0.3409,
    "priceEur": 0.29398,
    "change24h": -0.03,
    "marketCap": "$18.4B",
    "volume24h": "$15.3M"
  },
  {
    "symbol": "NEAR",
    "name": "NEAR Protocol",
    "category": "layer1",
    "price": 2.29,
    "priceEur": 1.98,
    "change24h": -3.08,
    "marketCap": "$5.9B",
    "volume24h": "$35.5M"
  },
  {
    "symbol": "TON",
    "name": "Toncoin",
    "category": "layer1",
    "price": 1.6,
    "priceEur": 1.38,
    "change24h": 0.95,
    "marketCap": "$12.5B",
    "volume24h": "$7.7M"
  },
  {
    "symbol": "KAS",
    "name": "Kaspa",
    "category": "layer1",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$2.8B",
    "volume24h": ""
  },
  {
    "symbol": "HBAR",
    "name": "Hedera",
    "category": "layer1",
    "price": 0.07514,
    "priceEur": 0.0648,
    "change24h": 0.48,
    "marketCap": "$3.5B",
    "volume24h": "$2.6M"
  },
  {
    "symbol": "ALGO",
    "name": "Algorand",
    "category": "layer1",
    "price": 0.0929,
    "priceEur": 0.08011,
    "change24h": -0.43,
    "marketCap": "$1.8B",
    "volume24h": "$1.3M"
  },
  {
    "symbol": "FTM",
    "name": "Sonic (Fantom)",
    "category": "layer1",
    "price": 0.6994,
    "priceEur": 0.60314,
    "change24h": -0.77,
    "marketCap": "$1.6B",
    "volume24h": "$1.3M"
  },
  {
    "symbol": "ATOM",
    "name": "Cosmos",
    "category": "layer1",
    "price": 1.59,
    "priceEur": 1.37,
    "change24h": -2.99,
    "marketCap": "$1.9B",
    "volume24h": "$1.7M"
  },
  {
    "symbol": "SEI",
    "name": "Sei",
    "category": "layer1",
    "price": 0.04423,
    "priceEur": 0.03814,
    "change24h": -2.08,
    "marketCap": "$1.4B",
    "volume24h": "$2.0M"
  },
  {
    "symbol": "ICP",
    "name": "Internet Computer",
    "category": "layer1",
    "price": 2.66,
    "priceEur": 2.29,
    "change24h": -3.55,
    "marketCap": "$3.8B",
    "volume24h": "$3.1M"
  },
  {
    "symbol": "MON",
    "name": "Monad",
    "category": "layer1",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$950M",
    "volume24h": ""
  },
  {
    "symbol": "INJ",
    "name": "Injective",
    "category": "layer1",
    "price": 5.82,
    "priceEur": 5.02,
    "change24h": -2.37,
    "marketCap": "$1.8B",
    "volume24h": "$6.4M"
  },
  {
    "symbol": "TIA",
    "name": "Celestia",
    "category": "layer1",
    "price": 0.3509,
    "priceEur": 0.3026,
    "change24h": -2.69,
    "marketCap": "$1.2B",
    "volume24h": "$2.2M"
  },
  {
    "symbol": "RON",
    "name": "Ronin",
    "category": "layer1",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$620M",
    "volume24h": ""
  },
  {
    "symbol": "POL",
    "name": "Polygon",
    "category": "layer1",
    "price": 0.09576,
    "priceEur": 0.08258,
    "change24h": -0.71,
    "marketCap": "$2.9B",
    "volume24h": "$2.4M"
  },
  {
    "symbol": "DOGE",
    "name": "Dogecoin",
    "category": "meme",
    "price": 0.08344,
    "priceEur": 0.07196,
    "change24h": -1.95,
    "marketCap": "$24.2B",
    "volume24h": "$23.2M"
  },
  {
    "symbol": "SHIB",
    "name": "Shiba Inu",
    "category": "meme",
    "price": 0.00000519,
    "priceEur": 0.00000448,
    "change24h": -2.99,
    "marketCap": "$8.5B",
    "volume24h": "$2.3M"
  },
  {
    "symbol": "PEPE",
    "name": "Pepe",
    "category": "meme",
    "price": 0.00000341,
    "priceEur": 0.00000294,
    "change24h": 0.59,
    "marketCap": "$3.8B",
    "volume24h": "$13.1M"
  },
  {
    "symbol": "WIF",
    "name": "dogwifhat",
    "category": "meme",
    "price": 0.1871,
    "priceEur": 0.16135,
    "change24h": -3.21,
    "marketCap": "$1.82B",
    "volume24h": "$827.0K"
  },
  {
    "symbol": "BONK",
    "name": "Bonk",
    "category": "meme",
    "price": 0.00000276,
    "priceEur": 0.00000238,
    "change24h": -2.47,
    "marketCap": "$1.58B",
    "volume24h": "$1.1M"
  },
  {
    "symbol": "FLOKI",
    "name": "FLOKI",
    "category": "meme",
    "price": 0.00002447,
    "priceEur": 0.0000211,
    "change24h": -2.24,
    "marketCap": "$1.34B",
    "volume24h": "$458.7K"
  },
  {
    "symbol": "PENGU",
    "name": "Pudgy Penguins",
    "category": "meme",
    "price": 0.00716,
    "priceEur": 0.00617,
    "change24h": -2.86,
    "marketCap": "$450M",
    "volume24h": "$2.7M"
  },
  {
    "symbol": "SPX",
    "name": "SPX6900",
    "category": "meme",
    "price": 0.48,
    "priceEur": 0.41394,
    "change24h": 1.25,
    "marketCap": "$447M",
    "volume24h": ""
  },
  {
    "symbol": "FARTCOIN",
    "name": "Fartcoin",
    "category": "meme",
    "price": 0.142,
    "priceEur": 0.12246,
    "change24h": -2.1,
    "marketCap": "$140M",
    "volume24h": ""
  },
  {
    "symbol": "BRETT",
    "name": "Brett",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$680M",
    "volume24h": ""
  },
  {
    "symbol": "POPCAT",
    "name": "Popcat",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$520M",
    "volume24h": ""
  },
  {
    "symbol": "MOG",
    "name": "Mog Coin",
    "category": "meme",
    "price": 0.0000012,
    "priceEur": 0.00000103,
    "change24h": 2.45,
    "marketCap": "$380M",
    "volume24h": ""
  },
  {
    "symbol": "NEIRO",
    "name": "First Neiro on Ethereum",
    "category": "meme",
    "price": 0.00008518,
    "priceEur": 0.00007346,
    "change24h": -2.47,
    "marketCap": "$290M",
    "volume24h": "$1.6M"
  },
  {
    "symbol": "TURBO",
    "name": "Turbo",
    "category": "meme",
    "price": 0.00091,
    "priceEur": 0.00079,
    "change24h": -2.04,
    "marketCap": "$340M",
    "volume24h": "$222.8K"
  },
  {
    "symbol": "BOME",
    "name": "BOOK OF MEME",
    "category": "meme",
    "price": 0.00084,
    "priceEur": 0.00072,
    "change24h": -3.66,
    "marketCap": "$420M",
    "volume24h": "$571.9K"
  },
  {
    "symbol": "MEW",
    "name": "cats in a dogs world",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$310M",
    "volume24h": ""
  },
  {
    "symbol": "BABYDOGE",
    "name": "Baby Doge Coin",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$280M",
    "volume24h": ""
  },
  {
    "symbol": "MEME",
    "name": "Memecoin",
    "category": "meme",
    "price": 0.00054,
    "priceEur": 0.00047,
    "change24h": 2.86,
    "marketCap": "$190M",
    "volume24h": "$422.2K"
  },
  {
    "symbol": "PEOPLE",
    "name": "ConstitutionDAO",
    "category": "meme",
    "price": 0.00781,
    "priceEur": 0.00674,
    "change24h": -2.13,
    "marketCap": "$170M",
    "volume24h": "$373.5K"
  },
  {
    "symbol": "TRUMP",
    "name": "Official Trump",
    "category": "meme",
    "price": 1.97,
    "priceEur": 1.7,
    "change24h": -2.13,
    "marketCap": "$540M",
    "volume24h": "$8.4M"
  },
  {
    "symbol": "1000SATS",
    "name": "SATS (Ordinals)",
    "category": "meme",
    "price": 0.00001055,
    "priceEur": 0.0000091,
    "change24h": -1.86,
    "marketCap": "$410M",
    "volume24h": "$314.7K"
  },
  {
    "symbol": "1000RATS",
    "name": "RATS (Ordinals)",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$120M",
    "volume24h": ""
  },
  {
    "symbol": "ACT",
    "name": "Act I : The AI Prophecy",
    "category": "meme",
    "price": 0.0097,
    "priceEur": 0.00836,
    "change24h": -1.82,
    "marketCap": "$160M",
    "volume24h": "$126.6K"
  },
  {
    "symbol": "PNUT",
    "name": "Peanut the Squirrel",
    "category": "meme",
    "price": 0.0464,
    "priceEur": 0.04001,
    "change24h": -2.32,
    "marketCap": "$280M",
    "volume24h": "$512.9K"
  },
  {
    "symbol": "GOAT",
    "name": "Goatseus Maximus",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$310M",
    "volume24h": ""
  },
  {
    "symbol": "LADYS",
    "name": "Milady Meme Coin",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$95M",
    "volume24h": ""
  },
  {
    "symbol": "MYRO",
    "name": "Myro",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$85M",
    "volume24h": ""
  },
  {
    "symbol": "WEN",
    "name": "Wen",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$72M",
    "volume24h": ""
  },
  {
    "symbol": "COW",
    "name": "CoW Protocol",
    "category": "meme",
    "price": 0.138,
    "priceEur": 0.11901,
    "change24h": 1.17,
    "marketCap": "$180M",
    "volume24h": "$572.1K"
  },
  {
    "symbol": "SLERF",
    "name": "Slerf",
    "category": "meme",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$65M",
    "volume24h": ""
  },
  {
    "symbol": "USDT",
    "name": "Tether USD",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.01,
    "marketCap": "$183.4B",
    "volume24h": ""
  },
  {
    "symbol": "USDC",
    "name": "USD Coin",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.01,
    "marketCap": "$74.2B",
    "volume24h": "$960.2M"
  },
  {
    "symbol": "DAI",
    "name": "Dai / USDS",
    "category": "stablecoin",
    "price": 0,
    "priceEur": 0,
    "change24h": 0,
    "marketCap": "$4.57B",
    "volume24h": "$0"
  },
  {
    "symbol": "FDUSD",
    "name": "First Digital USD",
    "category": "stablecoin",
    "price": 0.9987,
    "priceEur": 0.86125,
    "change24h": -0.01,
    "marketCap": "$2.45B",
    "volume24h": "$7.7M"
  },
  {
    "symbol": "TUSD",
    "name": "TrueUSD",
    "category": "stablecoin",
    "price": 0.9996,
    "priceEur": 0.86202,
    "change24h": 0.01,
    "marketCap": "$494M",
    "volume24h": "$4.6K"
  },
  {
    "symbol": "USDD",
    "name": "USDD Decentralized USD",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.01,
    "marketCap": "$1.51B",
    "volume24h": ""
  },
  {
    "symbol": "USDE",
    "name": "Ethena USDe",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0,
    "marketCap": "$4.60B",
    "volume24h": "$69.9K"
  },
  {
    "symbol": "PYUSD",
    "name": "PayPal USD",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.01,
    "marketCap": "$2.78B",
    "volume24h": ""
  },
  {
    "symbol": "EURC",
    "name": "EURC Circle Euro",
    "category": "stablecoin",
    "price": 1.16,
    "priceEur": 1,
    "change24h": 0.01,
    "marketCap": "$468M",
    "volume24h": ""
  },
  {
    "symbol": "FRAX",
    "name": "Frax",
    "category": "stablecoin",
    "price": 0.2772,
    "priceEur": 0.23905,
    "change24h": -0.11,
    "marketCap": "$640M",
    "volume24h": "$118.8K"
  },
  {
    "symbol": "GHO",
    "name": "Aave GHO",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.01,
    "marketCap": "$698M",
    "volume24h": ""
  },
  {
    "symbol": "USD0",
    "name": "Usual USD0",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.01,
    "marketCap": "$547M",
    "volume24h": ""
  },
  {
    "symbol": "RLUSD",
    "name": "Ripple USD",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.03,
    "marketCap": "$2.42B",
    "volume24h": "$17.3M"
  },
  {
    "symbol": "USDG",
    "name": "Global Dollar",
    "category": "stablecoin",
    "price": 1,
    "priceEur": 0.86,
    "change24h": 0.01,
    "marketCap": "$3.30B",
    "volume24h": ""
  },
  {
    "symbol": "AEUR",
    "name": "Anchored Coins EUR",
    "category": "stablecoin",
    "price": 1.16,
    "priceEur": 1,
    "change24h": 0.02,
    "marketCap": "$85M",
    "volume24h": "$82.6K"
  },
  {
    "symbol": "LINK",
    "name": "Chainlink",
    "category": "infra",
    "price": 11.29,
    "priceEur": 9.73,
    "change24h": -2.43,
    "marketCap": "$8.4B",
    "volume24h": "$8.9M"
  },
  {
    "symbol": "UNI",
    "name": "Uniswap",
    "category": "defi",
    "price": 6.25,
    "priceEur": 5.39,
    "change24h": -2.25,
    "marketCap": "$5.1B",
    "volume24h": "$32.0M"
  },
  {
    "symbol": "AAVE",
    "name": "Aave",
    "category": "defi",
    "price": 123.94,
    "priceEur": 106.88,
    "change24h": -2.63,
    "marketCap": "$2.52B",
    "volume24h": "$6.1M"
  },
  {
    "symbol": "RENDER",
    "name": "Render Network",
    "category": "infra",
    "price": 1.37,
    "priceEur": 1.18,
    "change24h": -1.79,
    "marketCap": "$2.98B",
    "volume24h": "$1.5M"
  },
  {
    "symbol": "TAO",
    "name": "Bittensor",
    "category": "infra",
    "price": 232.9,
    "priceEur": 200.85,
    "change24h": -1.52,
    "marketCap": "$3.8B",
    "volume24h": "$9.9M"
  },
  {
    "symbol": "FET",
    "name": "Artificial Superintelligence",
    "category": "infra",
    "price": 0.165,
    "priceEur": 0.14229,
    "change24h": -3.23,
    "marketCap": "$2.4B",
    "volume24h": "$4.3M"
  },
  {
    "symbol": "GRT",
    "name": "The Graph",
    "category": "infra",
    "price": 0.0183,
    "priceEur": 0.01578,
    "change24h": 0.99,
    "marketCap": "$1.2B",
    "volume24h": "$580.1K"
  },
  {
    "symbol": "PENDLE",
    "name": "Pendle Finance",
    "category": "defi",
    "price": 2.12,
    "priceEur": 1.83,
    "change24h": -0.89,
    "marketCap": "$680M",
    "volume24h": "$3.7M"
  },
  {
    "symbol": "JUP",
    "name": "Jupiter DEX",
    "category": "defi",
    "price": 0.2338,
    "priceEur": 0.20162,
    "change24h": -5.04,
    "marketCap": "$1.4B",
    "volume24h": "$3.2M"
  },
  {
    "symbol": "RAY",
    "name": "Raydium",
    "category": "defi",
    "price": 1.49,
    "priceEur": 1.29,
    "change24h": -6.45,
    "marketCap": "$920M",
    "volume24h": "$8.5M"
  },
  {
    "symbol": "MKR",
    "name": "Maker",
    "category": "defi",
    "price": 1813.7,
    "priceEur": 1564.07,
    "change24h": 0.76,
    "marketCap": "$1.3B",
    "volume24h": "$440.7K"
  },
  {
    "symbol": "LDO",
    "name": "Lido DAO",
    "category": "defi",
    "price": 0.3686,
    "priceEur": 0.31787,
    "change24h": -3,
    "marketCap": "$1.1B",
    "volume24h": "$1.3M"
  },
  {
    "symbol": "CRV",
    "name": "Curve DAO",
    "category": "defi",
    "price": 0.348,
    "priceEur": 0.3001,
    "change24h": 3.51,
    "marketCap": "$490M",
    "volume24h": "$2.5M"
  },
  {
    "symbol": "SNX",
    "name": "Synthetix",
    "category": "defi",
    "price": 0.2154,
    "priceEur": 0.18575,
    "change24h": 2.28,
    "marketCap": "$420M",
    "volume24h": "$412.8K"
  },
  {
    "symbol": "COMP",
    "name": "Compound",
    "category": "defi",
    "price": 19.74,
    "priceEur": 17.02,
    "change24h": -2.04,
    "marketCap": "$380M",
    "volume24h": "$260.2K"
  },
  {
    "symbol": "ENA",
    "name": "Ethena",
    "category": "defi",
    "price": 0.1398,
    "priceEur": 0.12056,
    "change24h": -1.06,
    "marketCap": "$1.6B",
    "volume24h": "$10.8M"
  },
  {
    "symbol": "DYDX",
    "name": "dYdX",
    "category": "defi",
    "price": 0.11233,
    "priceEur": 0.09687,
    "change24h": -2.32,
    "marketCap": "$450M",
    "volume24h": "$290.5K"
  },
  {
    "symbol": "RUNE",
    "name": "THORChain",
    "category": "defi",
    "price": 0.502,
    "priceEur": 0.43291,
    "change24h": -1.57,
    "marketCap": "$1.2B",
    "volume24h": "$978.9K"
  },
  {
    "symbol": "PYTH",
    "name": "Pyth Network",
    "category": "infra",
    "price": 0.05386,
    "priceEur": 0.04645,
    "change24h": 1.32,
    "marketCap": "$780M",
    "volume24h": "$1.8M"
  },
  {
    "symbol": "FIL",
    "name": "Filecoin",
    "category": "infra",
    "price": 0.8175,
    "priceEur": 0.70498,
    "change24h": 0.48,
    "marketCap": "$1.5B",
    "volume24h": "$3.7M"
  },
  {
    "symbol": "AR",
    "name": "Arweave",
    "category": "infra",
    "price": 2.53,
    "priceEur": 2.18,
    "change24h": -3.02,
    "marketCap": "$950M",
    "volume24h": "$834.1K"
  },
  {
    "symbol": "WLD",
    "name": "Worldcoin",
    "category": "infra",
    "price": 0.3896,
    "priceEur": 0.33598,
    "change24h": -3.23,
    "marketCap": "$1.4B",
    "volume24h": "$10.7M"
  },
  {
    "symbol": "W",
    "name": "Wormhole",
    "category": "infra",
    "price": 0.00984,
    "priceEur": 0.00849,
    "change24h": 0.92,
    "marketCap": "$720M",
    "volume24h": "$714.0K"
  },
  {
    "symbol": "ONDO",
    "name": "Ondo Finance (RWA)",
    "category": "defi",
    "price": 0.3436,
    "priceEur": 0.29631,
    "change24h": -2.44,
    "marketCap": "$1.8B",
    "volume24h": "$8.4M"
  },
  {
    "symbol": "GMX",
    "name": "GMX Exchange",
    "category": "defi",
    "price": 7.69,
    "priceEur": 6.63,
    "change24h": -1.28,
    "marketCap": "$320M",
    "volume24h": "$208.9K"
  }
];
