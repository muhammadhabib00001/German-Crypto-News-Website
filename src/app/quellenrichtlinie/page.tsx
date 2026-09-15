import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { ShieldCheck, Search, Database, FileCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: `Quellenrichtlinie & Faktencheck | ${SITE_NAME}`,
  description: 'Unsere strengen Standards zur Verifizierung von Informationen, On-Chain-Daten und Primärquellen.',
  alternates: { canonical: `${SITE_URL}/quellenrichtlinie` },
};

export default function QuellenrichtliniePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Quellenrichtlinie', item: '/quellenrichtlinie' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-2xl shadow-sm space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed">
        {/* Header */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600/10 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Quellenrichtlinie & Faktencheck-Standards
            </h1>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium">
            Im dezentralen Krypto-Ökosystem kursieren täglich unzählige Gerüchte. <strong>NEWSKRYPT</strong> stützt seine Berichterstattung auf verifizierte mathematische On-Chain-Daten und amtliche Primärquellen.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Database className="w-6 h-6 text-blue-600" />
            1. Primärquellen & On-Chain-Verifizierung
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Wir priorisieren direkte On-Chain-Knotendaten (wie Etherscan, Solscan, Glassnode), behördliche Publikationen (z. B. BaFin, FINMA, SEC) und auditierte Unternehmensberichte. Gerüchte in sozialen Netzwerken werden erst nach Verifikation über mindestens zwei unabhängige Primärquellen aufgegriffen.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <FileCheck className="w-6 h-6 text-blue-600" />
            2. Transparente Verlinkung & Urheberrecht
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Jeder Artikel enthält verifizierte Quellenangaben und ausgehende Links zu den zitierten Originalstudien oder behördlichen Dokumenten. Wir legen Wert auf sauberes Zitieren und respektieren das geistige Eigentum anderer Redaktionen und Forscher.
          </p>
        </div>
      </div>
    </div>
  );
}
