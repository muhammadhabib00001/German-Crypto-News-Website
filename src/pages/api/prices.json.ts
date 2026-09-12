export async function GET() {
  try {
    const [priceRes, globalRes, fngRes] = await Promise.allSettled([
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,ripple,cardano,avalanche-2,chainlink&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true'),
      fetch('https://api.coingecko.com/api/v3/global'),
      fetch('https://api.alternative.me/fng/')
    ]);

    let prices: any = null;
    let globalData: any = null;
    let fngData: any = null;

    if (priceRes.status === 'fulfilled' && priceRes.value.ok) {
      prices = await priceRes.value.json();
    }
    if (globalRes.status === 'fulfilled' && globalRes.value.ok) {
      globalData = await globalRes.value.json();
    }
    if (fngRes.status === 'fulfilled' && fngRes.value.ok) {
      fngData = await fngRes.value.json();
    }

    return new Response(
      JSON.stringify({
        timestamp: Date.now(),
        prices,
        global: globalData?.data || null,
        fng: fngData?.data?.[0] || null
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=30, stale-while-revalidate=60'
        }
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch prices' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}