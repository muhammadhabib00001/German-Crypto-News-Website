'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/components/Sidebar';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { PRESALE_TOKENS } from '@/data/presales';
import { getTrendingArticles } from '@/data/articles';
import { Rocket, ShieldCheck, ArrowRight, Sparkles, Filter } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Alle Presales' },
  { id: 'aktiv', label: '🟢 Aktive Vorverkäufe' },
  { id: 'demnaechst', label: '⏳ Demnächst / Upcoming' },
  { id: 'meme', label: '🚀 Meme Coins' },
  { id: 'l2', label: '⚡ Layer-1 & Layer-2' },
  { id: 'ai', label: '🤖 KI & Gaming (P2E)' },
  { id: 'rwa', label: '🏢 RWA & DeFi' },
];

export default function PresalesPage() {
  const trendingArticles = getTrendingArticles();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTokens = PRESALE_TOKENS.filter((token) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'aktiv') return token.status === 'Aktiv';
    if (activeCategory === 'demnaechst') return token.status === 'Demnächst';
    if (activeCategory === 'meme') {
      return (
        token.badge.toLowerCase().includes('meme') ||
        token.symbol.includes('PEPU') ||
        token.symbol.includes('SHIB') ||
        token.symbol.includes('WAI') ||
        token.symbol.includes('STARS') ||
        token.symbol.includes('DAWGZ') ||
        token.symbol.includes('MEMEBET')
      );
    }
    if (activeCategory === 'l2') {
      return token.badge.toLowerCase().includes('layer') || token.badge.toLowerCase().includes('dag') || token.badge.toLowerCase().includes('mine');
    }
    if (activeCategory === 'ai') {
      return token.badge.toLowerCase().includes('ki') || token.badge.toLowerCase().includes('earn') || token.badge.toLowerCase().includes('play') || token.badge.toLowerCase().includes('gamble');
    }
    if (activeCategory === 'rwa') {
      return token.badge.toLowerCase().includes('rwa') || token.badge.toLowerCase().includes('defi') || token.badge.toLowerCase().includes('payment') || token.badge.toLowerCase().includes('green');
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <Breadcrumbs items={[{ name: 'Krypto Presales & Vorverkäufe', item: '/presales' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-3">
        <div className="flex items-center gap-3">
          <Rocket className="w-8 h-8 text-amber-400" />
          <h1 className="text-2xl sm:text-3xl font-black">
            Top Krypto Presales & Token Vorverkäufe
          </h1>
        </div>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Übersicht aussichtsreicher Krypto-Presales und ICO-Projekte. Analysiert auf Basis von Smart Contract Audits, Entwicklungs-Roadmaps, Tokenomics und Team-Transparenz.
        </p>
      </div>

      <FinancialDisclaimer />

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Presale Grid + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTokens.map((token) => {
              const progressPct = Math.min(100, Math.round((token.raisedAmountUsd / token.targetGoalUsd) * 100));

              return (
                <div
                  key={token.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={token.featuredImage}
                      alt={token.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                      {token.badge}
                    </span>
                    <span className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow ${
                      token.status === 'Aktiv' ? 'bg-emerald-600' : 'bg-amber-600'
                    }`}>
                      {token.status}
                    </span>

                    {/* Token Logo Avatar Overlay */}
                    {token.logoUrl && (
                      <div className="absolute -bottom-4 left-5 w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-white shadow-md overflow-hidden z-10">
                        <Image
                          src={token.logoUrl}
                          alt={`${token.name} logo`}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-5 pt-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2.5">
                          {token.logoUrl && (
                            <Image
                              src={token.logoUrl}
                              alt={token.name}
                              width={26}
                              height={26}
                              className="rounded-full shrink-0 shadow-sm border border-slate-200 dark:border-slate-700"
                            />
                          )}
                          <Link href={`/presales/${token.slug}`}>{token.name} ({token.symbol})</Link>
                        </h2>
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded shrink-0">
                          ${token.currentPriceUsd}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        {token.shortDescription}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-slate-500">Fortschritt: {progressPct}%</span>
                        <span className="text-blue-600 dark:text-blue-400">
                          ${(token.raisedAmountUsd / 1000000).toFixed(1)}M / ${(token.targetGoalUsd / 1000000).toFixed(1)}M
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${progressPct}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Audit & Action Button */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> {token.auditStatus}
                      </span>
                      <Link
                        href={`/presales/${token.slug}`}
                        className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1 transition-colors"
                      >
                        Analyse <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Sidebar trendingArticles={trendingArticles} />
        </div>
      </div>
    </div>
  );
}
