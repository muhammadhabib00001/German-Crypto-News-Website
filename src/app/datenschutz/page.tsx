import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Datenschutzerklärung | ${SITE_NAME}`,
  description: 'Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO auf KryptoPulse DE.',
  alternates: { canonical: `${SITE_URL}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Datenschutz', item: '/datenschutz' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Datenschutzerklärung</h1>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Datenschutz auf einen Blick</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Verantwortliche Stelle</h2>
        <p>
          Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br />
          KryptoPulse DE Media GmbH<br />
          Mainzer Landstraße 180, 60327 Frankfurt am Main<br />
          E-Mail: datenschutz@kryptopulse.de
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Datenerfassung auf unserer Website</h2>
        <p>
          Ihre Daten werden einerseits dadurch erhoben, dass Sie uns diese mitteilen (z. B. bei der Anmeldung zum Newsletter oder der Kontaktaufnahme). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. technische Internet-Browser-Informationen, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
        </p>
      </div>
    </div>
  );
}
