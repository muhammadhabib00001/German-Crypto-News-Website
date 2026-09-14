import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { RefreshCw, CheckCircle2, AlertTriangle, Mail, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: `Korrekturrichtlinie & Transparenz | ${SITE_NAME}`,
  description: 'Unser transparenter Umgang mit Korrekturen, Aktualisierungen und Widerrufen im Finanzjournalismus.',
  alternates: { canonical: `${SITE_URL}/korrekturrichtlinie` },
};

export default function KorrekturrichtliniePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Korrekturrichtlinie', item: '/korrekturrichtlinie' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-2xl shadow-sm space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed">
        {/* Header */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600/10 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
              <RefreshCw className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Korrektur- & Aktualisierungsrichtlinie
            </h1>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium">
            Verlässlichkeit bedeutet bei <strong>KryptoPulse DE</strong> auch, eigene Fehler offen einzugestehen und zügig zu beheben. Hier erfahren Sie, wie wir mit nachträglichen Ergänzungen und sachlichen Korrekturen umgehen.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <CheckCircle2 className="w-6 h-6 text-blue-600" />
            1. Transparenz bei sachlichen Korrekturen
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Sollte uns trotz sorgfältiger Prüfung ein sachlicher Fehler (wie fehlerhafte Zahlen, Namen oder Regulierungsdetails) unterlaufen, korrigieren wir diesen unverzüglich. Jeder korrigierte Artikel erhält am Ende einen deutlichen Hinweis mit Datum und genauer Beschreibung der Änderung.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <AlertTriangle className="w-6 h-6 text-blue-600" />
            2. Unterscheidung: Aktualisierung vs. Korrektur
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Krypto-Nachrichten entwickeln sich dynamisch. Ergänzungen zu laufenden Entwicklungen (z. B. Kursupdate am Abend) werden als "Aktualisierung" gekennzeichnet. Echte Fehlerbehebungen werden explizit als "Korrektur" gewiesen.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Mail className="w-6 h-6 text-blue-600" />
            3. Fehler melden & Kontakt
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Leserinnen und Leser, die einen Fehler in unseren Berichten vermuten, können diesen jederzeit per E-Mail an <a href="mailto:redaktion@kryptopulse.de" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">redaktion@kryptopulse.de</a> melden. Jede Eingabe wird innerhalb von 24 Stunden geprüft.
          </p>
        </div>
      </div>
    </div>
  );
}
