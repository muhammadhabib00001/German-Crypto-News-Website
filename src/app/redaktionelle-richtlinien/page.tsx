import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Redaktionelle Richtlinien | ${SITE_NAME}`,
  description: 'Unsere Richtlinien zu Unabhängigkeit, Verifizierung und redaktioneller Integrität.',
  alternates: { canonical: `${SITE_URL}/redaktionelle-richtlinien` },
};

export default function EditorialGuidelinesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Redaktionelle Richtlinien', item: '/redaktionelle-richtlinien' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Redaktionelle Richtlinien</h1>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Journalistische Unabhängigkeit</h2>
        <p>
          Unsere Berichterstattung ist strikt unabhängig von Werbekunden, Investoren oder Drittanbietern. Redaktionelle Inhalte und werbliche Platzierungen werden klar und transparent voneinander getrennt.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Vermeidung von Interessenkonflikten</h2>
        <p>
          Unsere Redakteure verpflichten sich, persönliche Haltungen zu Krypto-Assets offen zu legen und keinen Eigenhandel auf Basis von nicht-öffentlichen Insiderinformationen zu betreiben.
        </p>
      </div>
    </div>
  );
}
