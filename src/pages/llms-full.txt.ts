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

  const content = `# newskrypt - Real-Time AI & LLM Knowledge Archive
Website: ${siteUrl}
Publisher: newskrypt Global Media Inc.
Updated: ${new Date().toISOString()}
Editorial Policy: ${siteUrl}/editorial-policy

## Active Journalistic Articles Dossier

${sortedNews.map((art, idx) => `### ${idx + 1}. ${art.data.title}
- Published: ${art.data.publishedDate}
- Category: ${art.data.category}
- Author: ${art.data.author}
- Summary: ${art.data.excerpt}
- Tags: ${art.data.tags.join(', ')}
- URL: ${siteUrl}/news/${art.slug}
`).join('\n')}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=60, must-revalidate'
    }
  });
}
