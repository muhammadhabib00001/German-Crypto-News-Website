import Link from 'next/link';
import { Category, Article } from '@/types';
import ArticleCard from './ArticleCard';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  category: Category;
  articles: Article[];
}

export default function CategorySection({ category, articles }: CategorySectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-6 border-b border-slate-200 dark:border-slate-800 last:border-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-6 bg-blue-600 rounded-sm"></div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {category.name}
          </h2>
        </div>
        <Link
          href={`/${category.slug}`}
          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 group"
        >
          Alle {category.name} News <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
