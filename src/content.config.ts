import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
    bio: z.string(),
    expertise: z.array(z.string()),
    credentials: z.string(),
    social: z.object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
      email: z.string().optional()
    })
  })
});

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/news' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    excerpt: z.string(),
    metaDescription: z.string().optional(),
    category: z.string(),
    author: z.string(),
    publishedDate: z.string(),
    updatedDate: z.string().optional(),
    readingTime: z.string(),
    featuredImage: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string().optional(),
    isBreaking: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    isTrending: z.boolean().default(false),
    tags: z.array(z.string()),
    keyHighlights: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    ).optional(),
    sources: z.array(
      z.object({
        name: z.string(),
        url: z.string()
      })
    ).optional(),
    contentType: z.enum(['news', 'analysis', 'guide', 'opinion', 'sponsored']).default('news')
  })
});

export const collections = {
  authors: authorsCollection,
  news: newsCollection
};