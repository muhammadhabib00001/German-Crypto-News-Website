import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AUTHORS } from '@/data/authors';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import Link from 'next/link';
import { BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: `Redaktionelle Standards & Grundsätze | ${SITE_NAME}`,
  description: 'Unsere redaktionellen Richtlinien, Qualitätskontrollen und Grundsätze für unabhängige Krypto-Berichterstattung.',
  alternates: { canonical: `${SITE_URL}/redaktion` },
};

export default function EditorialOverviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Redaktion & Standards', item: '/redaktion' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Redaktion & Journalistische Standards</h1>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          NEWSKRYPT verpflichtet sich zu höchsten journalistischen Standards gemäß dem Pressekodex. Wir arbeiten nach dem Vier-Augen-Prinzip und unterziehen alle Artikel vor der Veröffentlichung einer strengen Faktenprüfung.
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Unsere Kernrichtlinien:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Link href="/redaktionelle-richtlinien" className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:border-blue-500 border border-transparent transition-colors">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Redaktionelle Richtlinien</h3>
              <p className="text-slate-500">Regeln zu Unabhängigkeit, Trennung von Werbung und Inhalt.</p>
            </Link>
            <Link href="/korrekturrichtlinie" className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:border-blue-500 border border-transparent transition-colors">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Korrekturrichtlinie</h3>
              <p className="text-slate-500">Transparenter Umgang mit Fehlern und Aktualisierungen.</p>
            </Link>
            <Link href="/quellenrichtlinie" className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:border-blue-500 border border-transparent transition-colors">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Quellenrichtlinie</h3>
              <p className="text-slate-500">Standard für Primärquellen und On-Chain-Verifizierung.</p>
            </Link>
            <Link href="/autoren" className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:border-blue-500 border border-transparent transition-colors">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Autorenteam</h3>
              <p className="text-slate-500">Qualifikationen und Vita unserer Redakteure.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
