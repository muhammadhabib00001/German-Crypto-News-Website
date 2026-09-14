import Link from 'next/link';
import { Article } from '@/types';
import { Zap, ChevronRight } from 'lucide-react';

interface BreakingNewsBarProps {
  articles: Article[];
}

export default function BreakingNewsBar({ articles }: BreakingNewsBarProps) {
  if (!articles || articles.length === 0) return null;
  const item = articles[0];

  return (
    <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs sm:text-sm">
        <span className="bg-white text-red-700 uppercase font-black tracking-wider px-2 py-0.5 rounded text-[11px] shrink-0 flex items-center gap-1 animate-pulse">
          <Zap className="w-3.5 h-3.5 fill-red-700" /> EILMELDUNG
        </span>
        <Link
          href={`/${item.category.slug}/${item.slug}`}
          className="font-medium hover:underline truncate flex-1 text-white/95"
        >
          {item.title}
        </Link>
        <Link
          href={`/${item.category.slug}/${item.slug}`}
          className="hidden md:flex items-center gap-1 text-xs font-bold bg-black/20 hover:bg-black/40 px-2.5 py-1 rounded transition-colors shrink-0"
        >
          Lesen <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
