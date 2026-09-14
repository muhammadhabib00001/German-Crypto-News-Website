import { ARTICLES } from '@/data/articles';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/seo';

export async function GET() {
  const items = ARTICLES.map(
    (art) => `
    <item>
      <title>${art.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>
      <link>${SITE_URL}/${art.category.slug}/${art.slug}</link>
      <guid>${SITE_URL}/${art.category.slug}/${art.slug}</guid>
      <pubDate>${new Date(art.publishedAt).toUTCString()}</pubDate>
      <description>${art.excerpt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</description>
      <category>${art.category.name}</category>
      <author>${art.author.email} (${art.author.name})</author>
    </item>`
  ).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>de-DE</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
