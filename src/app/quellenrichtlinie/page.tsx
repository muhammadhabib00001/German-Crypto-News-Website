import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Quellenrichtlinie & Faktencheck | ${SITE_NAME}`,
  description: 'Standards zur Verifizierung von Informationen, On-Chain-Daten und Primärquellen.',
  alternates: { canonical: `${SITE_URL}/quellenrichtlinie` },
};

export default function QuellenrichtliniePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Quellenrichtlinie', item: '/quellenrichtlinie' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Quellen- & Faktencheck-Richtlinie</h1>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Primärquellen vor Gerüchten</h2>
        <p>
          Wir stützen uns bevorzugt auf offizielle Veröffentlichungen von Behörden (z. B. BaFin, SEC, EU-Kommission), wissenschaftliche Whitepaper, verifizierte On-Chain-Transaktionen und auditierte Unternehmensmeldungen.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Zweiquellen-Prinzip</h2>
        <p>
          Meldungen aus unbestätigten Social-Media-Quellen oder Gerüchten werden vor einer Berichterstattung durch mindestens zwei unabhängige Quellen verifiziert.
        </p>
      </div>
    </div>
  );
}
