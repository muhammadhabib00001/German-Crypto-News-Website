'use client';

import Link from 'next/link';
import ArticleCard from './ArticleCard';
import Newsletter from './Newsletter';
import { Article } from '@/types';
import { useLivePrices } from '@/hooks/useLivePrices';
import { Flame, BarChart3, Radio } from 'lucide-react';

interface SidebarProps {
  trendingArticles: Article[];
}

export default function Sidebar({ trendingArticles }: SidebarProps) {
  const { prices, isLive } = useLivePrices(700); // 700ms high-frequency tick

  return (
    <aside className="space-y-8">
      {/* Mini Market Prices Widget */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              MARKTÜBERSICHT (EUR)
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" title="Millisekunden Live-Ticker"></span>
            </h3>
          </div>
          <Link href="/krypto-kurse" className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline">
            Alle Kurse
          </Link>
        </div>

        <div className="space-y-3">
          {prices.slice(0, 5).map((coin) => {
            const isPos = coin.change24h >= 0;
            const isUp = coin.tickDirection === 'up';
            const isDown = coin.tickDirection === 'down';

            const formattedPrice = coin.priceEur < 1
              ? `€${coin.priceEur.toFixed(4)}`
              : coin.priceEur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });

            return (
              <div key={coin.symbol} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 dark:border-slate-800/50 last:border-0 transition-colors">
                <div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{coin.name}</span>
                  <span className="text-slate-400 ml-1 text-[10px]">({coin.symbol})</span>
                </div>
                <div className="text-right">
                  <span
                    className={`font-mono font-bold block px-1.5 py-0.5 rounded transition-all duration-300 ${
                      isUp
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 scale-105'
                        : isDown
                        ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 scale-105'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {formattedPrice}
                  </span>
                  <span className={`text-[10px] font-bold ${isPos ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {isPos ? '+' : ''}{coin.change24h.toFixed(2)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trending Articles */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <Flame className="w-4 h-4 text-amber-500" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
            BELIEBTE ANALYSEN
          </h3>
        </div>

        <div className="space-y-2">
          {trendingArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>

      {/* Newsletter Box */}
      <Newsletter />
    </aside>
  );
}
