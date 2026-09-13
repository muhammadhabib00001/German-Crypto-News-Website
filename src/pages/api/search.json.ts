import { getCollection } from 'astro:content';

export async function GET() {
  try {
    const articles = await getCollection('news');
    
    const searchIndex = articles.map(article => ({
      title: article.data.title,
      slug: article.id.replace(/\.md$/, ''),
      category: article.data.category,
      excerpt: article.data.excerpt || '',
      tags: article.data.tags || [],
      publishedDate: article.data.publishedDate,
      featuredImage: article.data.featuredImage
    }));

    return new Response(JSON.stringify(searchIndex), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (err: any) {
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
