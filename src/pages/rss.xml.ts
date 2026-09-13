import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const rawNews = await getCollection('news');
  const news = rawNews.map(n => ({
    ...n,
    slug: n.id.replace(/\.md$/, '')
  }));
  const sortedNews = news.sort(
    (a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );

  return rss({
    title: 'newskrypt - Financial Intelligence & Digital Asset Journalism',
    description: 'Premier financial news publication covering Bitcoin, Ethereum, DeFi, Crypto Markets, Regulations, and Web3 developments.',
    site: context.site || 'https://cryptopulse.news',
    items: sortedNews.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedDate),
      description: post.data.excerpt,
      link: `/news/${post.slug}/`,
      categories: [post.data.category, ...post.data.tags]
    })),
    customData: `<language>en-us</language><copyright>© 2026 newskrypt Global Media Inc.</copyright>`
  });
}