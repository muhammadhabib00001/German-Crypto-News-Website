import { MetadataRoute } from 'next';
import { ARTICLES } from '@/data/articles';
import { CATEGORIES } from '@/data/categories';
import { AUTHORS } from '@/data/authors';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/bitcoin',
    '/ethereum',
    '/altcoins',
    '/blockchain',
    '/defi',
    '/web3',
    '/nft',
    '/krypto-maerkte',
    '/krypto-kurse',
    '/regulierung',
    '/trading',
    '/forschung',
    '/prognosen',
    '/unternehmen',
    '/sicherheit',
    '/mining',
    '/pressemitteilungen',
    '/krypto-events',
    '/presales',
    '/autoren',
    '/ueber-uns',
    '/redaktion',
    '/kontakt',
    '/impressum',
    '/datenschutz',
    '/cookie-richtlinie',
    '/nutzungsbedingungen',
    '/redaktionelle-richtlinien',
    '/korrekturrichtlinie',
    '/quellenrichtlinie',
  ];

  const staticPages = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const articlePages = ARTICLES.map((art) => ({
    url: `${SITE_URL}/${art.category.slug}/${art.slug}`,
    lastModified: new Date(art.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const authorPages = AUTHORS.map((author) => ({
    url: `${SITE_URL}/autoren/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...authorPages];
}
