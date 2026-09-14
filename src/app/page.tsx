import { Metadata } from 'next';
import BreakingNewsBar from '@/components/BreakingNewsBar';
import FeaturedArticles from '@/components/FeaturedArticles';
import CategorySection from '@/components/CategorySection';
import Sidebar from '@/components/Sidebar';
import ArticleCard from '@/components/ArticleCard';
import {
  ARTICLES,
  getBreakingArticles,
  getFeaturedArticles,
  getTrendingArticles,
  getArticlesByCategory,
} from '@/data/articles';
import { CATEGORIES } from '@/data/categories';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { ArrowRight, Newspaper, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `${SITE_NAME} | Krypto Nachrichten, Bitcoin, Ethereum & Marktanalysen DACH`,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      'de-DE': SITE_URL,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 675, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const breakingArticles = getBreakingArticles();
  const featuredArticles = getFeaturedArticles();
  const trendingArticles = getTrendingArticles();

  const bitcoinCategory = CATEGORIES.find((c) => c.slug === 'bitcoin')!;
  const ethereumCategory = CATEGORIES.find((c) => c.slug === 'ethereum')!;
  const altcoinsCategory = CATEGORIES.find((c) => c.slug === 'altcoins')!;
  const regulierungCategory = CATEGORIES.find((c) => c.slug === 'regulierung')!;
  const defiCategory = CATEGORIES.find((c) => c.slug === 'defi')!;

  const bitcoinArticles = getArticlesByCategory('bitcoin');
  const ethereumArticles = getArticlesByCategory('ethereum');
  const altcoinArticles = getArticlesByCategory('altcoins');
  const regulierungArticles = getArticlesByCategory('regulierung');
  const defiArticles = getArticlesByCategory('defi');

  const latestArticles = ARTICLES.slice(0, 6);

  return (
    <div className="space-y-6 pb-12">
      {/* Breaking News Header Ticker */}
      <BreakingNewsBar articles={breakingArticles} />

      <div className="max-w-7xl mx-auto px-4 space-y-10 pt-2">
        {/* Featured Editorial Hero Grid */}
        <FeaturedArticles articles={featuredArticles} />

        {/* Main Content & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Feed Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Latest News Feed */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-600/10 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                    AKTUELLE KRYPTO NEWS
                  </h2>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  Deutsch (de-DE)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* Category Section: Bitcoin */}
            <CategorySection category={bitcoinCategory} articles={bitcoinArticles} />

            {/* Category Section: Ethereum */}
            <CategorySection category={ethereumCategory} articles={ethereumArticles} />

            {/* Category Section: Altcoins */}
            <CategorySection category={altcoinsCategory} articles={altcoinArticles} />

            {/* Category Section: Regulierung (MiCA & Recht) */}
            <CategorySection category={regulierungCategory} articles={regulierungArticles} />

            {/* Category Section: DeFi & Web3 */}
            <CategorySection category={defiCategory} articles={defiArticles} />

            {/* Category Taxonomy Showcase */}
            <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-8 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold">Alle Krypto Themen im Überblick</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                Erkunden Sie unsere spezialisierten Themenbereiche von Krypto-Sicherheit über Trading-Analysen bis hin zu wissenschaftlicher Blockchain-Forschung.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600 text-xs font-medium transition-colors text-slate-200 border border-slate-700/60"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar trendingArticles={trendingArticles} />
          </div>

        </div>
      </div>
    </div>
  );
}
