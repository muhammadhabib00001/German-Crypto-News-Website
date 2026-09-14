import { AlertTriangle } from 'lucide-react';

export default function FinancialDisclaimer() {
  return (
    <div className="my-6 p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 dark:text-amber-200 space-y-1">
      <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]">
        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        Finanz- & Risikohinweis
      </div>
      <p className="leading-relaxed">
        Dieser Artikel dient ausschließlich Informations- und Bildungszwecken und stellt keine Anlageberatung oder Handlungsempfehlung dar. Kryptowährungen sind einer hohen Volatilität ausgesetzt. Investieren Sie nur Kapital, dessen Verlust Sie verkraften können.
      </p>
    </div>
  );
}
