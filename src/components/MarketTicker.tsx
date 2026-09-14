'use client';

import Link from 'next/link';
import { CRYPTO_PRICES } from '@/data/crypto-prices';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MarketTicker() {
  return (
    <div className="bg-slate-900 text-white text-xs py-2 border-b border-slate-800 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between whitespace-nowrap gap-6">
        <div className="flex items-center gap-2 font-semibold text-slate-400 shrink-0">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>MARKTDATEN (EUR):</span>
        </div>
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none py-0.5">
          {CRYPTO_PRICES.map((coin) => {
            const isPositive = coin.change24h >= 0;
            return (
              <Link
                key={coin.symbol}
                href="/krypto-kurse"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors shrink-0 group"
              >
                <span className="font-bold text-slate-200">{coin.symbol}</span>
                <span className="text-slate-300">
                  {coin.priceEur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </span>
                <span className={`flex items-center font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isPositive ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
                  {isPositive ? '+' : ''}
                  {coin.change24h.toFixed(2)}%
                </span>
              </Link>
            );
          })}
        </div>
        <Link
          href="/krypto-kurse"
          className="shrink-0 text-slate-400 hover:text-white underline text-xs hidden md:inline-block"
        >
          Alle Kurse &rarr;
        </Link>
      </div>
    </div>
  );
}
