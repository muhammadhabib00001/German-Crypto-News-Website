import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { Clock, Calendar, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  variant?: 'vertical' | 'horizontal' | 'compact';
}

export default function ArticleCard({ article, variant = 'vertical' }: ArticleCardProps) {
  const publishedDateFormatted = new Date(article.publishedAt).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  if (variant === 'horizontal') {
    return (
      <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
        <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
            {article.category.name}
          </span>
        </div>
        <div className="md:w-3/5 p-5 flex flex-col justify-between space-y-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
              <Link href={`/${article.category.slug}/${article.slug}`}>
                {article.title}
              </Link>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
              <User className="w-3 h-3 text-slate-400" /> {article.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" /> {publishedDateFormatted}
            </span>
            <span className="flex items-center gap-1 ml-auto">
              <Clock className="w-3 h-3 text-slate-400" /> {article.readTimeMinutes} Min.
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group flex gap-3 items-start py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
        <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt}
            fill
            sizes="80px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 space-y-1">
          <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
            {article.category.name}
          </span>
          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 leading-snug">
            <Link href={`/${article.category.slug}/${article.slug}`}>
              {article.title}
            </Link>
          </h4>
          <span className="text-[10px] text-slate-400 block">
            {publishedDateFormatted}
          </span>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={article.featuredImage.url}
          alt={article.featuredImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
          {article.category.name}
        </span>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
            <Link href={`/${article.category.slug}/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
          <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[130px]">
            {article.author.name}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" /> {article.readTimeMinutes} Min.
          </span>
        </div>
      </div>
    </article>
  );
}
