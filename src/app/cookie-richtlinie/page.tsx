import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Cookie-Richtlinie | ${SITE_NAME}`,
  description: 'Erfahren Sie, wie KryptoPulse DE Cookies und ähnliche Technologien zur Bereitstellung von Inhalten einsetzt.',
  alternates: { canonical: `${SITE_URL}/cookie-richtlinie` },
};

export default function CookieRichtliniePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Cookie-Richtlinie', item: '/cookie-richtlinie' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Cookie-Richtlinie</h1>

        <p>
          Diese Richtlinie beschreibt, wie KryptoPulse DE Cookies und vergleichbare Speichertechnologien verwendet, um Ihnen eine optimale Erfahrung auf unserer Website zu bieten.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Was sind Cookies?</h2>
        <p>
          Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, die Benutzung der Webseite effizienter zu gestalten (z. B. Speicherung der Spracheinstellung oder des Dark-Mode-Themas).
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Notwendige Cookies</h2>
        <p>
          Notwendige Cookies gewährleisten grundlegende Funktionen der Website wie Navigation und Sicherheit. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.
        </p>
      </div>
    </div>
  );
}
