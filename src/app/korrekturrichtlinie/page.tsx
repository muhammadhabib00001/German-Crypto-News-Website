import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Korrekturrichtlinie | ${SITE_NAME}`,
  description: 'Unser transparenter Umgang mit Korrekturen, Aktualisierungen und Widerrufen.',
  alternates: { canonical: `${SITE_URL}/korrekturrichtlinie` },
};

export default function KorrekturrichtliniePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Korrekturrichtlinie', item: '/korrekturrichtlinie' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Korrekturrichtlinie</h1>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Transparenz bei Fehlern</h2>
        <p>
          Fehler lassen sich im schnellen Nachrichtengeschäft nicht immer vollständig vermeiden. Sollten sachliche Fehler auftreten, werden diese so schnell wie möglich korrigiert und am Ende des Artikels mit einem Hinweis versehen.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Korrekturhinweis einreichen</h2>
        <p>
          Wenn Sie einen Fehler in unseren Berichten bemerken, schreiben Sie bitte direkt an <a href="mailto:redaktion@kryptopulse.de" className="text-blue-600 underline">redaktion@kryptopulse.de</a>.
        </p>
      </div>
    </div>
  );
}
