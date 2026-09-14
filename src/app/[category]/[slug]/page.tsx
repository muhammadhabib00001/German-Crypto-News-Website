import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import AuthorBox from '@/components/AuthorBox';
import FAQSection from '@/components/FAQSection';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import SocialShare from '@/components/SocialShare';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import { ARTICLES, getArticleBySlug, getRelatedArticles, getTrendingArticles } from '@/data/articles';
import { getArticleSchema, SITE_NAME, SITE_URL } from '@/lib/seo';
import { Calendar, Clock, User, ExternalLink, ShieldCheck, CheckCircle, XCircle } from 'lucide-react';

interface ArticlePageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  return ARTICLES.map((art) => ({
    category: art.category.slug,
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const title = article.seoTitle;
  const description = article.metaDescription;
  const canonical = article.canonicalUrl || `${SITE_URL}/${article.category.slug}/${article.slug}`;

  return {
    title,
    description,
    keywords: [article.focusKeyword, ...article.secondaryKeywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage.url,
          width: article.featuredImage.width,
          height: article.featuredImage.height,
          alt: article.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
      images: [article.featuredImage.url],
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);
  const trendingArticles = getTrendingArticles();
  const articleSchema = getArticleSchema(article);

  const publishedDateFormatted = new Date(article.publishedAt).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const updatedDateFormatted = new Date(article.updatedAt).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Schema.org NewsArticle JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: article.category.name, item: `/${article.category.slug}` },
          { name: article.title, item: `/${article.category.slug}/${article.slug}` },
        ]}
      />

      {/* Main Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Article Content Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Header Metadata */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/${article.category.slug}`}
                  className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md"
                >
                  {article.category.name}
                </Link>
                {article.isBreaking && (
                  <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    Eilmeldung
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {article.title}
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-medium">
                {article.excerpt}
              </p>

              {/* Author & Date Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-300 dark:border-slate-700">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 block">
                      Von <Link href={`/autoren/${article.author.slug}`} className="hover:underline">{article.author.name}</Link>
                    </span>
                    <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">{article.author.role}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Erstellt: {publishedDateFormatted}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTimeMinutes} Min. Lesezeit
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[260px] sm:h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={article.featuredImage.url}
                alt={article.featuredImage.alt}
                title={article.featuredImage.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            {article.featuredImage.caption && (
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic text-center -mt-2">
                Bild: {article.featuredImage.caption}
              </p>
            )}

            {/* Social Sharing */}
            <SocialShare title={article.title} url={`${SITE_URL}/${article.category.slug}/${article.slug}`} />

            {/* Key Statistics Block (if present) */}
            {article.statistics && article.statistics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                {article.statistics.map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 text-center space-y-1">
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">{stat.label}</span>
                    <span className="text-xl font-black text-slate-900 dark:text-white block">{stat.value}</span>
                    {stat.change && (
                      <span className={`text-xs font-bold ${stat.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {stat.change}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Financial Disclaimer (if required) */}
            {article.disclaimerRequired && <FinancialDisclaimer />}

            {/* Article Content */}
            <div
              className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Data Table (if present) */}
            {article.tableData && (
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                  {article.tableData.caption && (
                    <caption className="p-3 text-xs font-bold text-slate-700 dark:text-slate-300 text-left bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                      {article.tableData.caption}
                    </caption>
                  )}
                  <thead className="bg-slate-50 dark:bg-slate-900 font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      {article.tableData.headers.map((h, i) => (
                        <th key={i} className="p-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {article.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pros and Cons Box (if present) */}
            {article.proCons && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Vorteile & Chancen
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {article.proCons.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {article.proCons.cons && article.proCons.cons.length > 0 && (
                  <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl space-y-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" /> Risiken & Vorbehalte
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {article.proCons.cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* FAQ Accordion */}
            {article.faqs && <FAQSection faqs={article.faqs} />}

            {/* Author Signature Box (E-E-A-T) */}
            <AuthorBox author={article.author} />

            {/* Sources & References */}
            {article.sources && article.sources.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Verifizierte Quellen & Referenzen:
                </h4>
                <ul className="space-y-1 pl-5 list-disc text-slate-600 dark:text-slate-400">
                  {article.sources.map((src, i) => (
                    <li key={i}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        {src.title} ({src.publisher}) <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white uppercase tracking-tight">
                Verwandte Artikel & Empfehlungen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((art) => (
                  <ArticleCard key={art.id} article={art} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar trendingArticles={trendingArticles} />
        </div>
      </div>
    </article>
  );
}
