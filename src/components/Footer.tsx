import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { ShieldCheck, Lock, FileText, HelpCircle, Mail, Rss, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="NEWSKRYPT Logo" className="h-7 w-auto object-contain" />
          </Link>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            NEWSKRYPT ist das vertrauenswürdige deutsche Fachportal für unabhängige Berichterstattung über Bitcoin, Ethereum, Altcoins, DeFi, Regulierung (MiCA) und Marktanalysen in Deutschland, Österreich und der Schweiz.
          </p>
          <div className="flex items-center gap-3 pt-2 text-slate-400">
            <a href="/rss.xml" className="hover:text-blue-400 p-2 rounded-lg bg-slate-900 border border-slate-800 transition-colors" title="RSS Feed">
              <Rss className="w-4 h-4" />
            </a>
            <a href="/llms.txt" className="hover:text-blue-400 p-2 rounded-lg bg-slate-900 border border-slate-800 transition-colors text-xs font-mono" title="AI & LLM Info">
              llms.txt
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider">Kategorien</h3>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.slice(0, 8).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/${cat.slug}`} className="hover:text-white transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Categories */}
        <div className="space-y-3">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider">Themen & Märkte</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/presales" className="text-amber-400 font-bold hover:underline">Token Presales & ICOs</Link></li>
            <li><Link href="/krypto-events" className="hover:text-white transition-colors">Krypto Events 2026</Link></li>
            {CATEGORIES.slice(8, 14).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/${cat.slug}`} className="hover:text-white transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Trust Column */}
        <div className="space-y-3">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider">Transparenz & Recht</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
            <li><Link href="/redaktion" className="hover:text-white transition-colors">Redaktion & Autoren</Link></li>
            <li><Link href="/autoren" className="hover:text-white transition-colors">Autorenverzeichnis</Link></li>
            <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt & Presse</Link></li>
            <li><Link href="/impressum" className="hover:text-white transition-colors font-semibold text-slate-300">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutzerklärung</Link></li>
            <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
            <li><Link href="/nutzungsbedingungen" className="hover:text-white transition-colors">Nutzungsbedingungen</Link></li>
            <li><Link href="/redaktionelle-richtlinien" className="hover:text-white transition-colors">Redaktionelle Richtlinien</Link></li>
            <li><Link href="/korrekturrichtlinie" className="hover:text-white transition-colors">Korrekturrichtlinie</Link></li>
            <li><Link href="/quellenrichtlinie" className="hover:text-white transition-colors">Quellen- & Faktencheck-Richtlinie</Link></li>
          </ul>
        </div>
      </div>

      {/* Financial Disclaimer Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-400">
            Risikohinweis & Finanz-Disclaimer:
          </p>
          <p className="leading-relaxed">
            Die auf NEWSKRYPT veröffentlichten Artikel, Kursprognosen, Marktanalysen und Daten dienen ausschließlich der Information und Weiterbildung und stellen keine Anlageberatung, Finanzberatung oder Kaufempfehlung dar. Der Handel mit Kryptowährungen und digitalen Vermögenswerten birgt hohe Verlustrisiken bis hin zum Totalverlust des eingesetzten Kapitals. Informieren Sie sich eigenständig und konsultieren Sie bei Bedarf einen qualifizierten Finanzberater.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-900 text-[11px]">
            <p>&copy; {new Date().getFullYear()} NEWSKRYPT. Alle Rechte vorbehalten.</p>
            <p className="flex items-center gap-4">
              <span>Sprache: Deutsch (de-DE)</span>
              <span>DACH Region (DE / AT / CH)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
