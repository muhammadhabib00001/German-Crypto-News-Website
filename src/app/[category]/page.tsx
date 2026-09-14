import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import { CATEGORIES, getCategoryBySlug } from '@/data/categories';
import { getArticlesByCategory, getTrendingArticles } from '@/data/articles';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};

  const title = `${category.name} News & Analysen 2026 | ${SITE_NAME}`;
  const description = category.description;
  const canonical = `${SITE_URL}/${category.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);
  const trendingArticles = getTrendingArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Breadcrumbs items={[{ name: category.name, item: `/${category.slug}` }]} />

      {/* Category Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 rounded-full bg-blue-600"></div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {category.name} Nachrichten & Analysen
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Main Grid + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {articles.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl text-center text-slate-500 text-sm">
              Derzeit liegen in der Kategorie &quot;{category.name}&quot; keine weiteren Meldungen vor. Bitte besuchen Sie die Kategorie in Kürze erneut.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((art) => (
                <ArticleCard key={art.id} article={art} />
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
