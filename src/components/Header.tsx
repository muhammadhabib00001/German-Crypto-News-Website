'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import MarketTicker from './MarketTicker';
import ThemeToggle from './ThemeToggle';
import { Search, Menu, X, Shield, Newspaper, TrendingUp, BarChart2 } from 'lucide-react';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export default function Header({ onOpenSearch }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const topCategories = CATEGORIES.slice(0, 12);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <MarketTicker />
      
      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="NEWSKRYPT Logo" className="w-10 h-10 object-contain rounded-lg group-hover:scale-105 transition-transform" />
          <div>
            <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
              NEWS<span className="text-blue-600 dark:text-blue-500">KRYPT</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 block -mt-1">
              FINANZNEWS DACH
            </span>
          </div>
        </Link>

        {/* Desktop Quick Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <Link href="/bitcoin" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Bitcoin</Link>
          <Link href="/ethereum" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ethereum</Link>
          <Link href="/krypto-kurse" className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline">
            <BarChart2 className="w-4 h-4" /> Krypto Kurse
          </Link>
          <Link href="/presales" className="hover:text-amber-500 font-bold text-amber-600 dark:text-amber-400 transition-colors">
            Presales
          </Link>
          <Link href="/krypto-events" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Events
          </Link>
          <Link href="/regulierung" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Regulierung</Link>
          <Link href="/prognosen" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Prognosen</Link>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm transition-colors"
            aria-label="Suche öffnen"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline text-xs text-slate-400">Suchen...</span>
          </button>
          
          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Navigation umschalten"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Secondary Categories Subnav Bar for Desktop */}
      <nav className="hidden lg:block bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200/80 dark:border-slate-800 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto scrollbar-none py-2 gap-4 text-slate-600 dark:text-slate-300">
          {topCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/ueber-uns"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white whitespace-nowrap ml-auto flex items-center gap-1 font-semibold"
          >
            <Shield className="w-3.5 h-3.5" /> Redaktion
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/ueber-uns" onClick={() => setIsMobileMenuOpen(false)}>Über uns</Link>
            <Link href="/redaktion" onClick={() => setIsMobileMenuOpen(false)}>Redaktion & Standards</Link>
            <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</Link>
            <Link href="/impressum" onClick={() => setIsMobileMenuOpen(false)}>Impressum</Link>
            <Link href="/datenschutz" onClick={() => setIsMobileMenuOpen(false)}>Datenschutz</Link>
          </div>
        </div>
      )}
    </header>
  );
}
