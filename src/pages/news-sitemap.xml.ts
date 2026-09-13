import { getCollection } from 'astro:content';

export async function GET() {
  const siteUrl = 'https://cryptopulse.news';
  const rawNews = await getCollection('news');
  const news = rawNews.map(n => ({
    ...n,
    slug: n.id.replace(/\.md$/, '')
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${news
    .map(
      (post) => `
  <url>
    <loc>${siteUrl}/news/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>newskrypt</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.data.publishedDate}</news:publication_date>
      <news:title><![CDATA[${post.data.title}]]></news:title>
    </news:news>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=60, must-revalidate'
    }
  });
}