import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { Clock, User, Sparkles } from 'lucide-react';

interface FeaturedArticlesProps {
  articles: Article[];
}

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  if (!articles || articles.length === 0) return null;
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-amber-500" />
        <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
          TOP NEWS & ANALYSEN
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Hero Card */}
        <div className="lg:col-span-2 group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg min-h-[380px] lg:min-h-[440px] flex flex-col justify-end">
          <Image
            src={mainArticle.featuredImage.url}
            alt={mainArticle.featuredImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          <div className="relative p-6 sm:p-8 space-y-3 z-10">
            <span className="inline-block bg-blue-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
              {mainArticle.category.name}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-blue-300 transition-colors">
              <Link href={`/${mainArticle.category.slug}/${mainArticle.slug}`}>
                {mainArticle.title}
              </Link>
            </h3>

            <p className="text-slate-300 text-sm line-clamp-2 max-w-2xl leading-relaxed">
              {mainArticle.excerpt}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-300 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-400" /> {mainArticle.author.name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> {mainArticle.readTimeMinutes} Min. Lesezeit
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Featured Cards Column */}
        <div className="flex flex-col gap-4">
          {sideArticles.map((article) => (
            <div
              key={article.id}
              className="group relative bg-slate-900 rounded-xl overflow-hidden shadow-md h-[210px] flex flex-col justify-end"
            >
              <Image
                src={article.featuredImage.url}
                alt={article.featuredImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              <div className="relative p-4 space-y-2 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  {article.category.name}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-blue-300 line-clamp-2">
                  <Link href={`/${article.category.slug}/${article.slug}`}>
                    {article.title}
                  </Link>
                </h4>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span>{article.author.name}</span>
                  <span>•</span>
                  <span>{article.readTimeMinutes} Min.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
