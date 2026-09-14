import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Nutzungsbedingungen | ${SITE_NAME}`,
  description: 'Nutzungsbedingungen für die Inanspruchnahme der Angebote von KryptoPulse DE.',
  alternates: { canonical: `${SITE_URL}/nutzungsbedingungen` },
};

export default function NutzungsbedingungenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Nutzungsbedingungen', item: '/nutzungsbedingungen' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Nutzungsbedingungen</h1>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Geltungsbereich</h2>
        <p>
          Diese Nutzungsbedingungen gelten für die Verwendung der Website KryptoPulse DE und aller zugehörigen Subdomains und Unterseiten.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Haftungsausschluss für Inhalte & Anlageentscheidungen</h2>
        <p>
          Die auf dieser Website bereitgestellten Inhalte dienen ausschließlich der Information. Sie stellen keine Aufforderung zum Kauf oder Verkauf von Kryptowährungen oder Finanzinstrumenten dar.
        </p>
      </div>
    </div>
  );
}
