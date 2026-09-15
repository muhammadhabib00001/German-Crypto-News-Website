import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: `Kontakt & Redaktion | ${SITE_NAME}`,
  description: 'Treten Sie mit der Redaktion von NEWSKRYPT in Kontakt. Presseanfragen, Leserrückmeldungen und Korrekturhinweise.',
  alternates: { canonical: `${SITE_URL}/kontakt` },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Kontakt', item: '/kontakt' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <Mail className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Kontakt zur Redaktion</h1>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Haben Sie Fragen, Pressemitteilungen, Korrekturhinweise oder Feedback zu unserer Berichterstattung? Unser Team steht Ihnen gerne zur Verfügung.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Kontaktdaten</h2>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>NEWSKRYPT Media GmbH</strong><br />
                  Mainzer Landstraße 180<br />
                  60327 Frankfurt am Main<br />
                  Deutschland
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Redaktion: <a href="mailto:newskryptowahrung26@gmail.com" className="text-blue-600 underline">newskryptowahrung26@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Presse: <a href="mailto:newskryptowahrung26@gmail.com" className="text-blue-600 underline">newskryptowahrung26@gmail.com</a></span>
              </div>
            </div>
          </div>

          <form className="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/60">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Nachricht senden</h3>
            <input
              type="text"
              placeholder="Ihr Name"
              required
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              required
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={4}
              placeholder="Ihre Nachricht..."
              required
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Nachricht absenden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
