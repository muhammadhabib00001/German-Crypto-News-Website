import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { FileText, ShieldCheck, CheckCircle2, Lock, Users, AlertCircle, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: `Redaktionelle Richtlinien | ${SITE_NAME}`,
  description: 'Unsere umfassenden Richtlinien zu Unabhängigkeit, Verifizierung, Ethik und redaktioneller Integrität im DACH-Finanzjournalismus.',
  alternates: { canonical: `${SITE_URL}/redaktionelle-richtlinien` },
};

export default function EditorialGuidelinesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Redaktionelle Richtlinien', item: '/redaktionelle-richtlinien' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-2xl shadow-sm space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed">
        {/* Header */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600/10 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Redaktionelle Richtlinien & Ethik-Kodex
            </h1>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium">
            Bei <strong>NEWSKRYPT</strong> bildet redaktionelle Integrität das unumstößliche Fundament unserer täglichen Arbeit. Unser Ziel ist es, den vertrauenswürdigsten und fundiertesten Fachjournalismus zu Kryptowährungen und Blockchain-Technologie im deutschsprachigen Raum bereitzustellen.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            1. Journalistische Unabhängigkeit & Neutralität
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Unsere Berichterstattung ist vollkommen unabhängig von Werbekunden, Investoren, Token-Emittenten oder Drittanbietern. Redaktionelle Entscheidungen werden ausschließlich durch unseren Chefredakteur und das Journalisten-Team auf Basis des Neuigkeitswerts, der Relevanz und der objektiven Faktenlage getroffen.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Werblich unterstützte Inhalte (Sponsored Content) werden unmissverständlich als solche gekennzeichnet und unterliegen strikten Qualitätskontrollen. Sie nehmen niemals Einfluss auf unsere regulären Berichte oder Analysen.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Lock className="w-6 h-6 text-blue-600" />
            2. Vermeidung von Interessenkonflikten & Insider-Handling
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Unsere Autoren und Analysten verpflichten sich zur Offenlegung persönlicher Krypto-Bestände und halten strenge Verhaltensregeln beim Eigenhandel ein. Das Ausnutzen nicht-öffentlicher Informationen (Insiderhandel) oder das Verfassen von Berichten zur gezielten Marktbeeinflussung (Front-Running, Pump-and-Dump) führt zum sofortigen Ausschluss aus dem Redaktionsteam.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <CheckCircle2 className="w-6 h-6 text-blue-600" />
            3. Faktenprüfung, Quellennachweis & KI-Einsatz
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Jedem Artikel geht eine mehrstufige Faktenprüfung voraus. Wir verwenden bevorzugt direkte On-Chain-Metriken, verifizierte Smart-Contract-Audits und behördliche Veröffentlichungen. Künstliche Intelligenz dient lediglich als Rechercheinstrument und Hilfsmittel zur Datenaufbereitung – sämtliche Texte werden von qualifizierten Fachredakteuren verfasst, geprüft und freigegeben.
          </p>
        </div>
      </div>
    </div>
  );
}
