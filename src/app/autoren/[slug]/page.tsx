import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import { AUTHORS, getAuthorBySlug } from '@/data/authors';
import { ARTICLES, getTrendingArticles } from '@/data/articles';
import { getAuthorSchema, SITE_NAME, SITE_URL } from '@/lib/seo';
import { Award, Mail, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return AUTHORS.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};

  const title = `${author.name} (${author.role}) | Redakteur bei ${SITE_NAME}`;
  const description = author.bio;
  const canonical = `${SITE_URL}/autoren/${author.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'profile',
      images: [{ url: author.avatar, width: 300, height: 300, alt: author.name }],
    },
  };
}

export default function AuthorDetailPage({ params }: AuthorPageProps) {
  const author = getAuthorBySlug(params.slug);
  if (!author) {
    notFound();
  }

  const authorArticles = ARTICLES.filter((a) => a.author.slug === author.slug);
  const trendingArticles = getTrendingArticles();
  const schema = getAuthorSchema(author);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Autoren', item: '/autoren' },
          { name: author.name, item: `/autoren/${author.slug}` },
        ]}
      />

      {/* Author Bio Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-blue-600 shadow-md">
          <Image src={author.avatar} alt={author.name} fill className="object-cover" />
        </div>

        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                {author.name}
                <span title="Verifizierter Autor"><CheckCircle2 className="w-6 h-6 text-blue-600 fill-blue-100 dark:fill-blue-900" /></span>
              </h1>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{author.role}</p>
            </div>

            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
              {author.twitter && (
                <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-400">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {author.linkedin && (
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-600">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {author.email && (
                <a href={`mailto:${author.email}`} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {author.bio}
          </p>

          {author.credentials && (
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-500" /> Qualifikationen:
              </span>
              {author.credentials.map((cred, idx) => (
                <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium">
                  {cred}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Author Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
            Veröffentlichte Artikel von {author.name} ({authorArticles.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authorArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Sidebar trendingArticles={trendingArticles} />
        </div>
      </div>
    </div>
  );
}
