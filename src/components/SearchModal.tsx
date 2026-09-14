'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ARTICLES } from '@/data/articles';
import { CATEGORIES } from '@/data/categories';
import { Search, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const router = useRouter();

  if (!isOpen) return null;

  const filtered = ARTICLES.filter((art) => {
    const matchesQuery = query === '' || art.title.toLowerCase().includes(query.toLowerCase()) || art.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchesCat = selectedCat === '' || art.category.slug === selectedCat;
    return matchesQuery && matchesCat;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/suche?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Top Search Bar */}
        <form onSubmit={handleSearchSubmit} className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            placeholder="Suchen nach Bitcoin, Ethereum, MiCA, ETFs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none text-base font-medium"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Category Pills */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setSelectedCat('')}
            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${selectedCat === '' ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
          >
            Alle Kategorien
          </button>
          {CATEGORIES.slice(0, 8).map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedCat(selectedCat === cat.slug ? '' : cat.slug)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${selectedCat === cat.slug ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 divide-y divide-slate-100 dark:divide-slate-800">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              Keine Artikel gefunden für &quot;{query}&quot;.
            </div>
          ) : (
            filtered.map((art) => (
              <Link
                key={art.id}
                href={`/${art.category.slug}/${art.slug}`}
                onClick={onClose}
                className="block pt-3 first:pt-0 group"
              >
                <div className="flex items-center justify-between text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1">
                  <span>{art.category.name}</span>
                  <span className="text-slate-400">{new Date(art.publishedAt).toLocaleDateString('de-DE')}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                  {art.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {art.excerpt}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
