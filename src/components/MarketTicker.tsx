'use client';

import Link from 'next/link';
import { useLivePrices } from '@/hooks/useLivePrices';
import { TrendingUp, TrendingDown, Radio } from 'lucide-react';

export default function MarketTicker() {
  const { prices } = useLivePrices(700);

  return (
    <div className="bg-slate-900 text-white text-xs py-2 border-b border-slate-800 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between whitespace-nowrap gap-6">
        <div className="flex items-center gap-2 font-semibold text-slate-400 shrink-0">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="flex items-center gap-1 font-bold text-emerald-400">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> ECHTZEIT LIVE (MS):
          </span>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none py-0.5">
          {prices.slice(0, 10).map((coin) => {
            const isPositive = coin.change24h >= 0;
            const isUp = coin.tickDirection === 'up';
            const isDown = coin.tickDirection === 'down';

            const formattedPrice = coin.priceEur < 0.01
              ? `€${coin.priceEur.toFixed(6)}`
              : coin.priceEur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });

            return (
              <Link
                key={coin.symbol}
                href="/krypto-kurse"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors shrink-0 group"
              >
                <span className="font-bold text-slate-200">{coin.symbol}</span>
                <span className={`font-mono transition-all duration-300 ${
                  isUp ? 'text-emerald-400 font-bold' : isDown ? 'text-rose-400 font-bold' : 'text-slate-300'
                }`}>
                  {formattedPrice}
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
