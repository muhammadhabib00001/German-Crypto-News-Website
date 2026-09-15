import { NextResponse } from 'next/server';
import { CRYPTO_PRICES } from '@/data/crypto-prices';

export const revalidate = 15;

export async function GET() {
  try {
    const validCoins = CRYPTO_PRICES.filter((c) => Boolean(c.coingeckoId));
    const cgIds = validCoins.map((c) => c.coingeckoId).join(',');

    if (!cgIds) {
      return NextResponse.json({
        success: true,
        prices: CRYPTO_PRICES,
      });
    }

    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cgIds}&vs_currencies=eur,usd&include_24hr_change=true`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'NEWSKRYPTDE/1.0',
        },
        next: { revalidate: 15 },
      }
    );

    if (res.ok) {
      const data = await res.json();

      const updatedPrices = CRYPTO_PRICES.map((item) => {
        if (item.coingeckoId && data[item.coingeckoId]) {
          const coinData = data[item.coingeckoId];
          const priceEur = typeof coinData?.eur === 'number' ? coinData.eur : item.priceEur;
          const priceUsd = typeof coinData?.usd === 'number' ? coinData.usd : item.priceUsd;
          const rawChange = coinData?.eur_24h_change;
          const change24h = typeof rawChange === 'number' ? parseFloat(rawChange.toFixed(2)) : item.change24h;

          return {
            ...item,
            priceEur,
            priceUsd,
            change24h,
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

  return NextResponse.json({
    success: true,
    fallback: true,
    timestamp: new Date().toISOString(),
    prices: CRYPTO_PRICES,
  });
}
