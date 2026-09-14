import Link from 'next/link';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-20 h-20 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto">
        <FileQuestion className="w-10 h-10" />
      </div>

      <h1 className="text-4xl font-black text-slate-900 dark:text-white">
        404 - Seite nicht gefunden
      </h1>

      <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
        Die von Ihnen gesuchte Seite existiert leider nicht oder wurde an eine neue Adresse verschoben.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex items-center gap-2"
        >
          <Home className="w-4 h-4" /> Zur Startseite
        </Link>
        <Link
          href="/krypto-kurse"
          className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors"
        >
          Krypto Kurse ansehen
        </Link>
      </div>
    </div>
  );
}
