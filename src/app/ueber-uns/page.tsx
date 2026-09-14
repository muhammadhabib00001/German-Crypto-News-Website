import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { ShieldCheck, Target, Award, Users, CheckCircle2, BookOpen, Scale, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: `Über uns - KryptoPulse DE | Unabhängiger Krypto-Journalismus`,
  description: 'Erfahren Sie mehr über KryptoPulse DE: Unsere Mission, unsere Werte und unseren Anspruch an unabhängigen Finanzjournalismus im DACH-Raum.',
  alternates: { canonical: `${SITE_URL}/ueber-uns` },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Über uns', item: '/ueber-uns' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-2xl shadow-sm space-y-8">
        {/* Header */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600/10 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Über KryptoPulse DE
            </h1>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            <strong>KryptoPulse DE</strong> ist eine führende, unabhängige digitale Fachpublikation für Finanznachrichten, fundamentale Marktanalysen, On-Chain-Daten und Regulierungsfragen rund um Kryptowährungen, Blockchain-Technologie und dezentrale Finanzen (DeFi) im gesamten deutschsprachigen Raum (Deutschland, Österreich, Schweiz).
          </p>
        </div>

        {/* Section 1: Unsere Vision und Entstehungsgeschichte */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Target className="w-6 h-6 text-blue-600" />
            Unsere Vision & Unabhängiger Anspruch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            In einer digitalen Finanzwelt, die zunehmend von spekulativer Hektik, unbefugter Anlageberatung und emotional aufgeladenen Schlagzeilen geprägt ist, bildet KryptoPulse DE ein verlässliches Fundament für sachorientierten Journalismus. Unser primäres Anliegen ist es, komplexe ökonomische und technische Zusammenhänge verständlich, transparent und unparteiisch aufzubereiten.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Wir richten uns sowohl an private Investoren, die fundiertes Grundwissen und verifizierte Marktanalysen suchen, als auch an professionelle Marktteilnehmer, Entwickler und Entscheidungsträger im DACH-Raum. Wir betreiben keine Marktschreierei, sondern bewerten Entwicklungen auf Basis von Zahlen, Fakten und mathematisch überprüfbaren On-Chain-Metriken.
          </p>
        </div>

        {/* Section 2: Redaktionelle Grundsätze und E-E-A-T Standards */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Award className="w-6 h-6 text-blue-600" />
            Höchste E-E-A-T Standards & Qualitätssicherung
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Nach den richtweisenden Google E-E-A-T Kriterien (Erfahrung, Expertise, Autorität und Vertrauenswürdigkeit) unterliegen alle von uns veröffentlichten Artikel strengsten internen Kontrollmechanismen. Unser Team besteht aus qualifizierten Finanzanalysten, Ökonomen, Informatikern und Rechtsexperten.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Faktenbasierte Recherche
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Jeder Bericht baut auf Primärquellen, wissenschaftlichen Arbeitspapieren, behördlichen Gesetzestexten (wie der EU MiCA-Verordnung) und verifizierten Blockchain-Knotendaten auf.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-500" /> Striktes Werbe-Trennungsgebot
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Verdeckte Kaufempfehlungen, bezahlte Meinungsbeiträge ohne Kennzeichnung oder bezahlte Ranking-Manipulationen widersprechen unseren Grundwerten und sind kategorisch ausgeschlossen.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Unsere Zielgruppe im DACH-Raum */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Users className="w-6 h-6 text-blue-600" />
            Regionale Spezialisierung auf Deutschland, Österreich & Schweiz
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Der Krypto-Markt im DACH-Raum unterscheidet sich grundlegend von angelsächsischen oder asiatischen Märkten. Spezifische steuerliche Regelungen (wie die einjährige Haltedauer für Steuerfreiheit in Deutschland oder die besondere Pauschalbesteuerung in Österreich) erfordern lokales Fachwissen.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            KryptoPulse DE liefert präzise auf den deutschsprachigen Rechts- und Steuerraum zugeschnittene Analysen, um Anlegern die rechtssichere Handhabung ihrer digitalen Vermögenswerte zu erleichtern.
          </p>
        </div>

        {/* Section 4: Unser Versprechen für die Zukunft */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Transparenz, Korrekturkultur & Barrierefreiheit
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Transparenz hört bei uns nicht nach der Veröffentlichung eines Artikels auf. Sollten sich nachträglich relevante Fakten ändern oder Korrekturen erforderlich sein, werden diese gemäß unserer öffentlichen Korrekturrichtlinie offen ausgewiesen und zügig eingearbeitet.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Wir bedanken uns für das Vertrauen unserer stetig wachsenden Leserschaft im deutschsprachigen Raum und begleiten Sie auch weiterhin unabhängig durch die Evolution des Web3-Finanzsystems.
          </p>
        </div>
      </div>
    </div>
  );
}
