import { NextResponse } from 'next/server';
import { CRYPTO_PRICES } from '@/data/crypto-prices';

export const revalidate = 15; // Cache for 15 seconds

export async function GET() {
  try {
    // Attempt fetching live price data from CoinGecko API
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,ripple,cardano,avalanche-2,polkadot&vs_currencies=eur,usd&include_24hr_change=true',
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'KryptoPulseDE/1.0',
        },
        next: { revalidate: 15 },
      }
    );

    if (res.ok) {
      const data = await res.json();
      
      const mapping: Record<string, string> = {
        BTC: 'bitcoin',
        ETH: 'ethereum',
        SOL: 'solana',
        BNB: 'binancecoin',
        XRP: 'ripple',
        ADA: 'cardano',
        AVAX: 'avalanche-2',
        DOT: 'polkadot',
      };

      const updatedPrices = CRYPTO_PRICES.map((item) => {
        const cgId = mapping[item.symbol];
        if (cgId && data[cgId]) {
          const coinData = data[cgId];
          const priceEur = coinData.eur || item.priceEur;
          const priceUsd = coinData.usd || item.priceUsd;
          const change24h = coinData.eur_24h_change !== undefined ? coinData.eur_24h_change : item.change24h;

          return {
            ...item,
            priceEur,
            priceUsd,
            change24h: parseFloat(change24h.toFixed(2)),
          };
        }
        return item;
      });

      return NextResponse.json({
        success: true,
        timestamp: new Date().toISOString(),
        prices: updatedPrices,
      });
    }
  } catch (error) {
    console.error('Failed to fetch live prices from CoinGecko API:', error);
  }

  // Graceful fallback to static initial dataset if upstream rate-limited or offline
  return NextResponse.json({
    success: true,
    fallback: true,
    timestamp: new Date().toISOString(),
    prices: CRYPTO_PRICES,
  });
}
