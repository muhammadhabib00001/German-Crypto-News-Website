import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import { ARTICLES } from '@/data/articles';
import { getTrendingArticles } from '@/data/articles';
import { SITE_NAME } from '@/lib/seo';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: `Suchergebnisse | ${SITE_NAME}`,
  description: 'Durchsuchen Sie alle Artikel, Marktanalysen und Nachrichten auf NEWSKRYPT.',
  robots: {
    index: false,
    follow: true,
  },
};

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const trendingArticles = getTrendingArticles();

  const results = query
    ? ARTICLES.filter(
        (art) =>
          art.title.toLowerCase().includes(query.toLowerCase()) ||
          art.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          art.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Breadcrumbs items={[{ name: 'Suche', item: '/suche' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <Search className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Suchergebnisse {query && `für "${query}"`}
          </h1>
        </div>
        <p className="text-xs text-slate-500">
          {results.length} Artikel gefunden.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {results.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl text-center text-slate-500 text-sm">
              Keine Artikel zu Ihrer Suchanfrage gefunden. Versuchen Sie es mit Begriffen wie &quot;Bitcoin&quot;, &quot;Ethereum&quot; oder &quot;MiCA&quot;.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <Sidebar trendingArticles={trendingArticles} />
        </div>
      </div>
    </div>
  );
}
