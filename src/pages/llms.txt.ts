import { getCollection } from 'astro:content';

export async function GET() {
  const siteUrl = 'https://cryptopulse.news';
  const rawNews = await getCollection('news');
  const news = rawNews.map(n => ({
    ...n,
    slug: n.id.replace(/\.md$/, '')
  }));

  const sortedNews = news.sort(
    (a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );

  const content = `# newskrypt Real-Time Crypto News & Financial Intelligence
> Premier financial news publication covering Bitcoin, Ethereum, DeFi, Altcoins, Regulations, Institutional Crypto, and Web3 developments.

## Real-Time News Stories Index
${sortedNews.map(art => `- [${art.data.title}](${siteUrl}/news/${art.slug}): ${art.data.excerpt}`).join('\n')}

## Core News Coverage Categories
- [Bitcoin News](${siteUrl}/category/bitcoin): Halving cycles, ETF net flows, on-chain metrics.
- [Ethereum News](${siteUrl}/category/ethereum): Layer-2 throughput, Pectra upgrades, blob economics.
- [Crypto Regulation](${siteUrl}/category/crypto-regulation): SEC filings, EU MiCA guidelines, CFTC rulings.
- [DeFi](${siteUrl}/category/defi): Lending markets, AMM liquidity, real-world asset tokenization.
- [Altcoins](${siteUrl}/category/altcoins): High performance L1s, Solana ecosystem, modular chains.
- [Institutional Crypto](${siteUrl}/category/institutional-crypto): Pension funds, corporate treasuries.

## Full LLM Feed & Archives
- [Complete Real-Time Knowledge Dossier](${siteUrl}/llms-full.txt): Dynamic article archive formatted for LLM reasoning.

## Editorial Transparency & Verification
- Editorial Policy: ${siteUrl}/editorial-policy
- Corrections Policy: ${siteUrl}/corrections
- Financial Disclaimers: ${siteUrl}/disclaimer
- Authors & Research Staff: ${siteUrl}/authors
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=60, must-revalidate'
    }
  });
}
