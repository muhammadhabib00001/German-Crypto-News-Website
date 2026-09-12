import { getCollection } from 'astro:content';
import { CATEGORY_LIST } from '../data/categories';

export async function GET() {
  const siteUrl = 'https://cryptopulse.news';
  const rawNews = await getCollection('news');
  const news = rawNews.map(n => ({
    ...n,
    slug: n.id.replace(/\.md$/, '')
  }));
  const authors = await getCollection('authors');

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/editorial-policy',
    '/corrections',
    '/disclaimer',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
    '/authors'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `
  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>daily</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
  ${CATEGORY_LIST.map(
    (cat) => `
  <url>
    <loc>${siteUrl}/category/${cat.slug}</loc>
    <changefreq>hourly</changefreq>
    <priority>0.9</priority>
  </url>`
  ).join('')}
  ${authors.map(
    (auth) => `
  <url>
    <loc>${siteUrl}/author/${auth.id.replace('.json', '')}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join('')}
  ${news
    .map(
      (post) => `
  <url>
    <loc>${siteUrl}/news/${post.slug}</loc>
    <lastmod>${post.data.updatedDate || post.data.publishedDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}