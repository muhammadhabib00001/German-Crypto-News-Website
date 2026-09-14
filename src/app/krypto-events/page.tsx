import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/components/Sidebar';
import { CRYPTO_EVENTS } from '@/data/events';
import { getTrendingArticles } from '@/data/articles';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { Calendar, MapPin, Ticket, Globe, Users, ExternalLink, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: `Krypto & Blockchain Events 2026 / 2027 (DACH) | ${SITE_NAME}`,
  description: 'Übersicht aller wichtigen Krypto-Konferenzen, Summits, Expos und Hackathons in Deutschland, Österreich, der Schweiz und weltweit.',
  alternates: {
    canonical: `${SITE_URL}/krypto-events`,
  },
};

export default function CryptoEventsPage() {
  const trendingArticles = getTrendingArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <Breadcrumbs items={[{ name: 'Krypto Events & Konferenzen', item: '/krypto-events' }]} />

      {/* Page Banner Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Krypto & Blockchain Events 2026 / 2027
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl leading-relaxed">
          Entdecken Sie die wichtigsten Fachkonferenzen, Networking-Summits, Web3-Expos und Entwickler-Hackathons im DACH-Raum (Frankfurt, Zug, Wien) sowie weltweit.
        </p>
      </div>

      {/* Main Grid + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Events Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-6">
            {CRYPTO_EVENTS.map((event) => {
              const startDateFormatted = new Date(event.startDate).toLocaleDateString('de-DE', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              });

              const endDateFormatted = new Date(event.endDate).toLocaleDateString('de-DE', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              });

              return (
                <div
                  key={event.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row group"
                >
                  <div className="md:w-2/5 relative h-48 md:h-auto shrink-0 overflow-hidden">
                    <Image
                      src={event.featuredImage}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                      {event.category}
                    </span>
                  </div>

                  <div className="md:w-3/5 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-blue-600 dark:text-blue-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {startDateFormatted} - {endDateFormatted}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" /> {event.city}, {event.country}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {event.title}
                      </h2>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        {event.shortDescription}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {event.topics.slice(0, 4).map((t, idx) => (
                          <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Info & Link */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <Ticket className="w-3.5 h-3.5 text-emerald-500" /> {event.ticketPrice}
                      </span>
                      <a
                        href={event.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1 transition-colors"
                      >
                        Official Website <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar trendingArticles={trendingArticles} />
        </div>
      </div>
    </div>
  );
}
