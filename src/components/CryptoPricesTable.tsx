'use client';

import { useState } from 'react';
import { useLivePrices } from '@/hooks/useLivePrices';
import { Search, Radio, Sparkles, Shield, Coins, Layers, Flame, DollarSign, Rocket } from 'lucide-react';

export default function CryptoPricesTable() {
  const { prices, isLive, lastUpdated } = useLivePrices(15000);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Alle Tokens', icon: Coins },
    { id: 'top', label: 'Top Coins', icon: Sparkles },
    { id: 'defi', label: 'DeFi', icon: Shield },
    { id: 'meme', label: 'Meme Coins', icon: Flame },
    { id: 'stable', label: 'Stablecoins', icon: DollarSign },
    { id: 'layer2', label: 'Layer 1 & 2', icon: Layers },
    { id: 'ico', label: 'ICO & Vorverkäufe', icon: Rocket },
  ];

  const filteredPrices = prices.filter((coin) => {
    const matchesCategory = selectedCategory === 'all' || coin.category === selectedCategory;
    const matchesSearch =
      searchTerm === '' ||
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm space-y-0">
      {/* Table Header & Controls */}
      <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              Krypto Marktpreise & Tokens
              <span className={`w-2.5 h-2.5 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Live Kurse, DeFi, Meme-Coins, Stablecoins & ICO-Vorverkäufe
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 flex items-center gap-1 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
              <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              {lastUpdated ? `Stand: ${lastUpdated.toLocaleTimeString('de-DE')}` : 'Live Polling'}
            </span>
          </div>
        </div>

        {/* Category Filter Pills & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0 text-xs">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Table Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Coin oder Token suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Main Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800 uppercase text-[11px] tracking-wider">
            <tr>
              <th className="p-3.5">#</th>
              <th className="p-3.5">Token / Name</th>
              <th className="p-3.5">Kategorie</th>
              <th className="p-3.5 text-right">Preis (EUR)</th>
              <th className="p-3.5 text-right">Preis (USD)</th>
              <th className="p-3.5 text-right">24h Änd.</th>
              <th className="p-3.5 text-right">Marktkap. / Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
            {filteredPrices.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-slate-500 text-xs">
                  Keine Münzen oder Token in der Kategorie &quot;{selectedCategory}&quot; gefunden.
                </td>
              </tr>
            ) : (
              filteredPrices.map((coin, idx) => {
                const isPos = coin.change24h >= 0;
                const isICO = coin.category === 'ico';
                return (
                  <tr key={coin.symbol} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3.5 text-slate-400 font-semibold">{idx + 1}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                      <span className="text-sm">{coin.name}</span>{' '}
                      <span className="text-slate-400 font-normal text-[11px]">({coin.symbol})</span>
                    </td>
                    <td className="p-3.5">
                      <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {coin.categoryLabel}
                      </span>
                    </td>
                    <td className="p-3.5 text-right font-bold text-slate-900 dark:text-slate-100 text-sm">
                      {coin.priceEur < 0.01
                        ? `€${coin.priceEur.toFixed(7)}`
                        : coin.priceEur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                    </td>
                    <td className="p-3.5 text-right text-slate-600 dark:text-slate-400">
                      {coin.priceUsd < 0.01
                        ? `$${coin.priceUsd.toFixed(7)}`
                        : coin.priceUsd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </td>
                    <td className={`p-3.5 text-right font-bold text-sm ${isPos ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {isPos ? '+' : ''}{coin.change24h.toFixed(2)}%
                    </td>
                    <td className="p-3.5 text-right font-medium text-slate-700 dark:text-slate-300">
                      {isICO ? (
                        <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold px-2 py-0.5 rounded text-[11px]">
                          <Rocket className="w-3 h-3" /> {coin.presaleStage || coin.icoStatus}
                        </span>
                      ) : (
                        coin.marketCapEur
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
