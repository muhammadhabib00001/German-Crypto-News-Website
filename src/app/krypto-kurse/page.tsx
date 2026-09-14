import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CryptoConverter from '@/components/CryptoConverter';
import CryptoPricesTable from '@/components/CryptoPricesTable';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import Sidebar from '@/components/Sidebar';
import { getTrendingArticles } from '@/data/articles';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { BarChart3, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: `Krypto Kurse & Marktübersicht Live (EUR) | ${SITE_NAME}`,
  description: 'Echtzeit-Kurse für Bitcoin, Ethereum, Solana und die wichtigsten Altcoins in Euro (€). Inklusive Krypto-Rechner und Marktkapitalisierung.',
  alternates: {
    canonical: `${SITE_URL}/krypto-kurse`,
  },
};

export default function CryptoPricesPage() {
  const trendingArticles = getTrendingArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <Breadcrumbs items={[{ name: 'Krypto Kurse', item: '/krypto-kurse' }]} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Krypto Kurse & Marktübersicht (EUR)
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl leading-relaxed">
          Verfolgen Sie die aktuellen Preise, 24h-Veränderungen, Handelsvolumen und Marktkapitalisierungen der Top-Kryptowährungen in Euro (€) und US-Dollar ($) auf Live-Basis.
        </p>
      </div>

      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Gesamt-Marktkapitalisierung</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white block">2,48 Bio. €</span>
          <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 inline" /> +2,8% in 24h
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">24h Handelsvolumen</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white block">74,2 Mrd. €</span>
          <span className="text-xs font-bold text-slate-500">Globales Volumen</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bitcoin-Dominanz (BTC.D)</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white block">56,4%</span>
          <span className="text-xs font-bold text-blue-500">Marktführer</span>
        </div>
      </div>

      {/* Calculator Component */}
      <CryptoConverter />

      {/* Main Table + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <CryptoPricesTable />
          <FinancialDisclaimer />
        </div>

        <div className="lg:col-span-1">
          <Sidebar trendingArticles={trendingArticles} />
        </div>
      </div>
    </div>
  );
}
