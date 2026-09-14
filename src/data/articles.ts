import { Article } from '@/types';

export const ARTICLES: Article[] = [];

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
