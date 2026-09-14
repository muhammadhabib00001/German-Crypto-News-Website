import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { Building2, User, Phone, Mail, FileText, Scale, ShieldCheck, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: `Impressum & Rechtliche Angaben | ${SITE_NAME}`,
  description: 'Rechtliche Anbieterkennzeichnung gemäß § 5 DDG (Digitale-Dienste-Gesetz) und V.i.S.d.P. Angaben für KryptoPulse DE.',
  alternates: { canonical: `${SITE_URL}/impressum` },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Impressum', item: '/impressum' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-2xl shadow-sm space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed">
        {/* Header */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600/10 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Impressum & Anbieterkennzeichnung
            </h1>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium">
            Pflichtangaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV) für die digitale Fachpublikation <strong>KryptoPulse DE</strong>.
          </p>
        </div>

        {/* Section 1: Diensteanbieter */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Building2 className="w-6 h-6 text-blue-600" />
            Anbieterin & Betreibergesellschaft
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2 text-sm sm:text-base">
            <p className="font-bold text-slate-900 dark:text-white text-lg">KryptoPulse DE Media GmbH</p>
            <p className="text-slate-600 dark:text-slate-300">
              Mainzer Landstraße 180<br />
              60327 Frankfurt am Main<br />
              Bundesrepublik Deutschland
            </p>
          </div>
        </div>

        {/* Section 2: Vertretungsberechtigte & Kontakt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" /> Vertretung & Geschäftsführung
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong>Vertreten durch den Geschäftsführer:</strong><br />
              Dr. Maximilian Weber
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" /> Direkter Kontakt
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-slate-400" /> +49 (0) 69 1234 5678</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400" /> <a href="mailto:redaktion@kryptopulse.de" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">redaktion@kryptopulse.de</a></span>
            </p>
          </div>
        </div>

        {/* Section 3: Register & Steuern */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-blue-600" />
            Handelsregister & Umsatzsteuer-Identifikation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold mb-1">Handelsregister</span>
              <p className="text-slate-800 dark:text-slate-200 font-semibold">
                Amtsgericht Frankfurt am Main<br />
                Registernummer: HRB 123456
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold mb-1">Umsatzsteuer-ID</span>
              <p className="text-slate-800 dark:text-slate-200 font-semibold">
                Gemäß § 27 a UStG:<br />
                DE 345 678 901
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: V.i.S.d.P. & Journalistische Verantwortung */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Scale className="w-6 h-6 text-blue-600" />
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            <strong>Dr. Maximilian Weber</strong> (Chefredakteur)<br />
            Mainzer Landstraße 180<br />
            60327 Frankfurt am Main<br />
            Deutschland
          </p>
        </div>

        {/* Section 5: Haftungs- und Urheberrechtshinweise */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" /> Haftungsausschluss & Urheberrecht
          </h3>
          <p>
            <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <p>
            <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  );
}
