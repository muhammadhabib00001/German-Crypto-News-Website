import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AUTHORS } from '@/data/authors';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { ShieldCheck, Award, Mail, Twitter, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: `Redaktion & Autoren-Verzeichnis | ${SITE_NAME}`,
  description: 'Lernen Sie das Experten-Team von KryptoPulse DE kennen: Ökonomen, zertifizierte Finanzanalysten (CFA) und Juristen für vertrauenswürdigen Krypto-Journalismus.',
  alternates: {
    canonical: `${SITE_URL}/autoren`,
  },
};

export default function AuthorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <Breadcrumbs items={[{ name: 'Autoren & Redaktion', item: '/autoren' }]} />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Unsere Redaktion & Fachautoren
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl leading-relaxed">
          E-E-A-T (Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit) steht im Zentrum unserer journalistischen Arbeit. Unsere Beiträge werden ausschließlich von verifizierten Fachredakteuren und Analysten verfasst.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AUTHORS.map((author) => (
          <div key={author.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-blue-600">
                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  <Link href={`/autoren/${author.slug}`} className="hover:text-blue-600">
                    {author.name}
                  </Link>
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{author.role}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 pt-1">{author.bio}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {author.credentials.map((cred, idx) => (
                  <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-[10px] px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                    {cred}
                  </span>
                ))}
              </div>
              <Link href={`/autoren/${author.slug}`} className="text-xs font-bold text-blue-600 hover:underline">
                Profil & Artikel &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
