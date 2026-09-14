import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Impressum | ${SITE_NAME}`,
  description: 'Rechtliche Anbieterkennzeichnung gemäß § 5 DDG (Digitale-Dienste-Gesetz) für KryptoPulse DE.',
  alternates: { canonical: `${SITE_URL}/impressum` },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Impressum', item: '/impressum' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Impressum</h1>

        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Angaben gemäß § 5 DDG:</h2>
          <p>
            <strong>KryptoPulse DE Media GmbH</strong><br />
            Mainzer Landstraße 180<br />
            60327 Frankfurt am Main<br />
            Deutschland
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">Vertreten durch:</h2>
          <p>Geschäftsführer: Dr. Maximilian Weber</p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">Kontakt:</h2>
          <p>
            Telefon: +49 (0) 69 1234 5678<br />
            E-Mail: redaktion@kryptopulse.de<br />
            Internet: https://kryptopulse.de
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">Registereintrag:</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Frankfurt am Main<br />
            Registernummer: HRB 123456
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">Umsatzsteuer-ID:</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 345 678 901
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
          <p>
            Dr. Maximilian Weber<br />
            Mainzer Landstraße 180<br />
            60327 Frankfurt am Main
          </p>
        </div>
      </div>
    </div>
  );
}
