import Link from 'next/link';
import Image from 'next/image';
import { Author } from '@/types';
import { Award, Mail, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';

interface AuthorBoxProps {
  author: Author;
}

export default function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <div className="my-8 p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-blue-600 shadow-md">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Link href={`/autoren/${author.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {author.name}
              </Link>
              <span title="Verifizierter Redakteur"><CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-100 dark:fill-blue-900" /></span>
            </h4>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{author.role}</p>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            {author.twitter && (
              <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {author.linkedin && (
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {author.email && (
              <a href={`mailto:${author.email}`} className="hover:text-slate-600 dark:hover:text-white">
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {author.bio}
        </p>

        {author.credentials && author.credentials.length > 0 && (
          <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="font-bold flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-500" /> Qualifikationen:
            </span>
            {author.credentials.map((cred, idx) => (
              <span key={idx} className="bg-slate-200/60 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px]">
                {cred}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
