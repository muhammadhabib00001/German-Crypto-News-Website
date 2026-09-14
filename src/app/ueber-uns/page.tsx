import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { ShieldCheck, Target, Award, Users, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: `Über uns - KryptoPulse DE | Unabhängiger Krypto-Journalismus`,
  description: 'Erfahren Sie mehr über KryptoPulse DE: Unsere Mission, unsere Werte und unseren Anspruch an unabhängigen Finanzjournalismus im DACH-Raum.',
  alternates: { canonical: `${SITE_URL}/ueber-uns` },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Über uns', item: '/ueber-uns' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Über KryptoPulse DE</h1>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          <strong>KryptoPulse DE</strong> ist eine unabhängige digitale Fachpublikation für Nachrichten, Marktanalysen und Regulierungsfragen rund um Kryptowährungen, Blockchain-Technologie und dezentrale Finanzen (DeFi) im deutschsprachigen Raum (Deutschland, Österreich, Schweiz).
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
          <Target className="w-5 h-5 text-blue-600" /> Unsere Mission
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          In einem von Spekulation und Fehlinformationen geprägten Marktumfeld ist es unser Ziel, verlässlichen, faktenbasierten und sachlichen Journalismus zu liefern. Wir unterstützen Privatanleger wie auch institutionelle Entscheidungsträger mit tiefgründigen Hintergrundberichten und verständlichen Erklärungen.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
          <Award className="w-5 h-5 text-blue-600" /> E-E-A-T Grundsätze & Qualität
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Expertise & Erfahrung:</strong> Alle Artikel werden von qualifizierten Ökonomen, zertifizierten Finanzanalysten (CFA) und Juristen verfasst.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Unabhängigkeit:</strong> Wir akzeptieren keine Bezahlungen für verdeckte Kaufempfehlungen oder unethische Werbe-Platzierungen.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Transparenz:</strong> Quellen werden offen gelegt, Daten werden direkt On-Chain verifiziert.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
