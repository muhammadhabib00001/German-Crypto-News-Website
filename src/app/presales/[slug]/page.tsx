import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import Sidebar from '@/components/Sidebar';
import { PRESALE_TOKENS, getPresaleTokenBySlug } from '@/data/presales';
import { getTrendingArticles } from '@/data/articles';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { Rocket, ShieldCheck, ExternalLink, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

interface PresaleDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRESALE_TOKENS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PresaleDetailPageProps): Promise<Metadata> {
  const token = getPresaleTokenBySlug(params.slug);
  if (!token) return {};

  const title = `${token.name} (${token.symbol}) Presale Kaufen & Analyse | ${SITE_NAME}`;
  const description = token.shortDescription;
  const canonical = `${SITE_URL}/presales/${token.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'article',
      images: [{ url: token.featuredImage, width: 1200, height: 675, alt: token.name }],
    },
  };
}

export default function PresaleDetailPage({ params }: PresaleDetailPageProps) {
  const token = getPresaleTokenBySlug(params.slug);
  if (!token) {
    notFound();
  }

  const trendingArticles = getTrendingArticles();
  const progressPct = Math.min(100, Math.round((token.raisedAmountUsd / token.targetGoalUsd) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <Breadcrumbs
        items={[
          { name: 'Presales', item: '/presales' },
          { name: `${token.name} (${token.symbol})`, item: `/presales/${token.slug}` },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {token.logoUrl && (
                  <div className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white shadow-md p-1 overflow-hidden shrink-0">
                    <Image
                      src={token.logoUrl}
                      alt={`${token.name} logo`}
                      width={60}
                      height={60}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                )}
                <div>
                  <span className="bg-amber-500 text-slate-950 font-black text-xs uppercase px-2.5 py-1 rounded">
                    {token.badge}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {token.name} ({token.symbol}) Presale Analyse
                  </h1>
                  <p className="text-xs text-slate-500 mt-1">Netzwerk: {token.network}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Aktueller Presale Preis</span>
                <span className="text-2xl font-black text-emerald-500">${token.currentPriceUsd}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[260px] sm:h-[360px] rounded-xl overflow-hidden shadow-md">
              <Image src={token.featuredImage} alt={token.name} fill className="object-cover" priority />
            </div>

            {/* Progress Card */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-700 dark:text-slate-300">Presale Fortschritt: {progressPct}%</span>
                <span className="text-blue-600 dark:text-blue-400">
                  ${(token.raisedAmountUsd / 1000000).toFixed(2)} Mio. / ${(token.targetGoalUsd / 1000000).toFixed(2)} Mio. USD
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Phase: {token.presaleStage}</span>
                <span>Status: <strong className="text-emerald-500">{token.status}</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={token.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow transition-colors text-center flex items-center justify-center gap-2"
              >
                <Rocket className="w-4 h-4" /> Offizieller Presale Website <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {token.whitepaperUrl && (
                <a
                  href={token.whitepaperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Whitepaper
                </a>
              )}
            </div>

            <FinancialDisclaimer />

            {/* Description */}
            <div
              className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-sm leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{ __html: token.fullDescription }}
            />

            {/* Highlights & Risks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Wichtigste Highlights
                </h3>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  {token.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Risiken & Hinweise
                </h3>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  {token.risks.map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tokenomics */}
            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Tokenomics & Verteilung</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {token.tokenomics.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
                    <span className="font-black text-slate-900 dark:text-white">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {token.faqs && <FAQSection faqs={token.faqs} />}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Sidebar trendingArticles={trendingArticles} />
        </div>
      </div>
    </div>
  );
}
