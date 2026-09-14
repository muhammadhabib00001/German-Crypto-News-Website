'use client';

import { useLivePrices } from '@/hooks/useLivePrices';
import { RefreshCw, Radio } from 'lucide-react';

export default function CryptoPricesTable() {
  const { prices, isLive, lastUpdated } = useLivePrices(15000);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          Top Kryptowährungen nach Marktkapitalisierung
          <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
        </h3>
        <span className="text-[11px] text-slate-500 flex items-center gap-1">
          <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
          {lastUpdated ? `Aktualisiert: ${lastUpdated.toLocaleTimeString('de-DE')}` : 'Echtzeit-Aktualisierung'}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3 text-right">Preis (EUR)</th>
              <th className="p-3 text-right">Preis (USD)</th>
              <th className="p-3 text-right">24h Änd.</th>
              <th className="p-3 text-right">Marktkap.</th>
              <th className="p-3 text-right">24h Vol.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
            {prices.map((coin, idx) => {
              const isPos = coin.change24h >= 0;
              return (
                <tr key={coin.symbol} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-3 text-slate-400 font-semibold">{idx + 1}</td>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">
                    {coin.name} <span className="text-slate-400 font-normal text-[10px]">({coin.symbol})</span>
                  </td>
                  <td className="p-3 text-right font-bold text-slate-900 dark:text-slate-100">
                    {coin.priceEur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                  </td>
                  <td className="p-3 text-right text-slate-600 dark:text-slate-400">
                    {coin.priceUsd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </td>
                  <td className={`p-3 text-right font-bold ${isPos ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {isPos ? '+' : ''}{coin.change24h.toFixed(2)}%
                  </td>
                  <td className="p-3 text-right text-slate-600 dark:text-slate-300">{coin.marketCapEur}</td>
                  <td className="p-3 text-right text-slate-600 dark:text-slate-300">{coin.volume24hEur}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
