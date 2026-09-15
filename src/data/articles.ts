import { Article } from '@/types';

export const ARTICLES: Article[] = [
{
  "id": "art-1789459599779",
  "title": "0pen sea: Markt & Ratgeber",
  "seoTitle": "0pen sea: Guide & Analyse",
  "metaDescription": "Entdecken Sie 0pen sea im Detail. Vollständiger Leitfaden, aktuelle Markt-Daten und Tipps im Überblick.",
  "slug": "0pen-sea",
  "category": {
    "id": "cat-1",
    "name": "DeFi",
    "slug": "defi",
    "description": "Dezentrale Finanzen & Protokolle",
    "iconName": "Coins"
  },
  "tags": [
    "Krypto",
    "DeFi",
    "0pen sea"
  ],
  "focusKeyword": "0pen sea",
  "secondaryKeywords": [
    "Trading",
    "Sicherheit"
  ],
  "excerpt": "Ausführlicher Leitfaden und Analyse zu 0pen sea.",
  "content": "<p>Detaillierte Analyse zu 0pen sea.</p>",
  "publishedAt": "2026-09-15T08:06:40.068Z",
  "updatedAt": "2026-09-15T08:06:40.068Z",
  "readTimeMinutes": 10,
  "author": {
    "id": "florian-becker",
    "name": "Florian Becker",
    "slug": "florian-becker",
    "role": "Senior Crypto Analyst",
    "bio": "Spezialist für Finanzmärkte, Blockchain-Technologie und Krypto-Asset-Bewertung.",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    "email": "florian.becker@kryptopulse.de",
    "credentials": [
      "M.Sc. Finance",
      "Certified Financial Analyst"
    ]
  },
  "featuredImage": {
    "url": "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=1200",
    "alt": "0pen sea",
    "title": "0pen sea",
    "caption": "Analyse & Trends zu 0pen sea",
    "width": 1200,
    "height": 630
  },
  "isFeatured": true,
  "isTrending": true,
  "isBreaking": false,
  "canonicalUrl": "https://german-crypto-news-website.vercel.app/article/0pen-sea",
  "disclaimerRequired": true,
  "statistics": [],
  "tableData": null,
  "proCons": null,
  "faqs": [],
  "sources": []
},
}
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((article) => article.category.slug === categorySlug);
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return ARTICLES.filter((article) => article.author.slug === authorSlug);
}

export function getArticlesByTag(tag: string): Article[] {
  return ARTICLES.filter((article) => article.tags.includes(tag));
}

export function getFeaturedArticles(): Article[] {
  return ARTICLES.filter((article) => article.isFeatured);
}

export function getTrendingArticles(): Article[] {
  return ARTICLES.filter((article) => article.isTrending);
}

export function getBreakingArticles(): Article[] {
  return ARTICLES.filter((article) => article.isBreaking);
}

export function getRelatedArticles(currentArticle: Article, limit: number = 3): Article[] {
  return ARTICLES.filter(
    (article) =>
      article.id !== currentArticle.id &&
      (article.category.slug === currentArticle.category.slug ||
        article.tags.some((tag) => currentArticle.tags.includes(tag)))
  ).slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];

  return ARTICLES.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(lowerQuery);
    const excerptMatch = article.excerpt.toLowerCase().includes(lowerQuery);
    const contentMatch = article.content.toLowerCase().includes(lowerQuery);
    const tagMatch = article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
    const categoryMatch = article.category.name.toLowerCase().includes(lowerQuery);

    return titleMatch || excerptMatch || contentMatch || tagMatch || categoryMatch;
  });
}
