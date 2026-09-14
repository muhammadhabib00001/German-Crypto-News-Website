import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/components/Sidebar';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { PRESALE_TOKENS } from '@/data/presales';
import { getTrendingArticles } from '@/data/articles';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { Rocket, ShieldCheck, DollarSign, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: `Krypto Presales & Vorverkäufe 2026 / 2027 | ${SITE_NAME}`,
  description: 'Aktuelle Krypto Presales, ICOs und Token-Vorverkäufe im Test. Fundierte Analysen zu Audits, Tokenomics, Preisen und Risiken.',
  alternates: {
    canonical: `${SITE_URL}/presales`,
  },
};

export default function PresalesPage() {
  const trendingArticles = getTrendingArticles();

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

      {/* Main Presale Grid + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRESALE_TOKENS.map((token) => {
              const progressPct = Math.min(100, Math.round((token.raisedAmountUsd / token.targetGoalUsd) * 100));

              return (
                <div
                  key={token.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={token.featuredImage}
                      alt={token.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                      {token.badge}
                    </span>
                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {token.network}
                    </span>
                  </div>

                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <Link href={`/presales/${token.slug}`}>{token.name} ({token.symbol})</Link>
                        </h2>
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
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
