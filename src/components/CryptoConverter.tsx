'use client';

import { useState } from 'react';
import { CRYPTO_PRICES } from '@/data/crypto-prices';
import { ArrowLeftRight, Calculator } from 'lucide-react';

export default function CryptoConverter() {
  const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('BTC');
  const [amount, setAmount] = useState<number | string>(1);
  const [currency, setCurrency] = useState<'EUR' | 'USD'>('EUR');

  const coin = CRYPTO_PRICES.find((c) => c.symbol === selectedCoinSymbol) || CRYPTO_PRICES[0];
  const numAmount = typeof amount === 'number' ? amount : parseFloat(amount) || 0;

  const price = currency === 'EUR' ? coin.priceEur : coin.priceUsd;
  const result = (numAmount * price).toLocaleString('de-DE', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
  });

  return (
    <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-4">
      <div className="flex items-center gap-2 font-bold text-sm text-blue-400 uppercase tracking-wider">
        <Calculator className="w-4 h-4" /> Krypto-Währungsrechner (EUR / USD)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Menge</label>
          <input
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">Kryptowährung</label>
          <select
            value={selectedCoinSymbol}
            onChange={(e) => setSelectedCoinSymbol(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {CRYPTO_PRICES.map((c) => (
              <option key={c.symbol} value={c.symbol}>
                {c.name} ({c.symbol})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">Zielwährung</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as 'EUR' | 'USD')}
            className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="EUR">Euro (€)</option>
            <option value="USD">US Dollar ($)</option>
          </select>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <ArrowLeftRight className="w-3.5 h-3.5 text-blue-400" /> Umgerechneter Wert:
        </span>
        <span className="text-xl font-black text-emerald-400">{result}</span>
      </div>
    </div>
  );
}
