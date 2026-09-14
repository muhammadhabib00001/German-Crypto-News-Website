export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  avatar: string;
  email: string;
  twitter?: string;
  linkedin?: string;
  credentials: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  color?: string;
}

export interface ArticleSource {
  title: string;
  url: string;
  publisher: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ProCon {
  pros: string[];
  cons?: string[];
}

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}

export interface Statistic {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface Article {
  id: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  slug: string;
  category: Category;
  tags: string[];
  focusKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  content: string; // Markdown or rich HTML string
  toc: { id: string; text: string; level: number }[];
  author: Author;
  featuredImage: {
    url: string;
    alt: string;
    title: string;
    caption: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  isBreaking?: boolean;
  isFeatured?: boolean;
  isTrending?: boolean;
  statistics?: Statistic[];
  tableData?: TableData;
  proCons?: ProCon;
  faqs?: ArticleFAQ[];
  sources?: ArticleSource[];
  canonicalUrl?: string;
  disclaimerRequired?: boolean;
}

export interface CryptoPrice {
  symbol: string;
  name: string;
  priceUsd: number;
  priceEur: number;
  change24h: number;
  volume24hEur: string;
  marketCapEur: string;
  sparkline: number[];
}
