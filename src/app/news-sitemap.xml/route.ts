import { ARTICLES } from '@/data/articles';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export async function GET() {
  const recentArticles = ARTICLES.slice(0, 10);

  const xmlItems = recentArticles
    .map(
      (art) => `
    <url>
      <loc>${SITE_URL}/${art.category.slug}/${art.slug}</loc>
      <news:news>
        <news:publication>
          <news:name>${SITE_NAME}</news:name>
          <news:language>de</news:language>
        </news:publication>
        <news:publication_date>${art.publishedAt}</news:publication_date>
        <news:title>${art.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
      </news:news>
    </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${xmlItems}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
