import { NextResponse } from 'next/server';
import { CRYPTO_PRICES } from '@/data/crypto-prices';

export const revalidate = 15;

export async function GET() {
  try {
    // Extract all unique CoinGecko IDs from CRYPTO_PRICES
    const cgIds = CRYPTO_PRICES.map((c) => c.coingeckoId).filter(Boolean).join(',');

    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cgIds}&vs_currencies=eur,usd&include_24hr_change=true`,
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

      const updatedPrices = CRYPTO_PRICES.map((item) => {
        if (item.coingeckoId && data[item.coingeckoId]) {
          const coinData = data[item.coingeckoId];
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

  // Graceful fallback to initial dataset
  return NextResponse.json({
    success: true,
    fallback: true,
    timestamp: new Date().toISOString(),
    prices: CRYPTO_PRICES,
  });
}
