import { Article, Author, Category } from '@/types';

export const SITE_NAME = 'NEWSKRYPT';
export const SITE_URL = 'https://german-crypto-news-website.vercel.app';
export const SITE_DESCRIPTION = 'Deutschlands führendes Fachportal für Krypto-Nachrichten, Bitcoin, Ethereum, Altcoins, DeFi, Regulierung und Marktanalysen im DACH-Raum.';
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 600,
      height: 60,
    },
    sameAs: [
      'https://x.com/newskrypt',
      'https://linkedin.com/company/newskrypt',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'newskryptowahrung26@gmail.com',
      contactType: 'editorial newsroom',
      availableLanguage: ['German'],
    },
    publishingPrinciples: `${SITE_URL}/redaktionelle-richtlinien`,
    correctionsPolicy: `${SITE_URL}/korrekturrichtlinie`,
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'de-DE',
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/suche?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getArticleSchema(article: Article) {
  const authorSchema = {
    '@type': 'Person',
    name: article.author.name,
    jobTitle: article.author.role,
    url: `${SITE_URL}/autoren/${article.author.slug}`,
  };

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${article.category.slug}/${article.slug}`,
    },
    headline: article.title,
    description: article.metaDescription,
    image: [article.featuredImage.url],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: authorSchema,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    inLanguage: 'de-DE',
    articleSection: article.category.name,
    keywords: article.tags.join(', '),
  };

  return schema;
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${SITE_URL}${crumb.item}`,
    })),
  };
}

export function getAuthorSchema(author: Author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.avatar,
    email: author.email,
    url: `${SITE_URL}/autoren/${author.slug}`,
    sameAs: [author.twitter, author.linkedin].filter(Boolean),
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
