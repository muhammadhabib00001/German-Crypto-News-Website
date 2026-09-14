import Link from 'next/link';
import { getBreadcrumbSchema } from '@/lib/seo';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = getBreadcrumbSchema([{ name: 'Startseite', item: '/' }, ...items]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-500 dark:text-slate-400">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li className="flex items-center gap-1">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Startseite
            </Link>
          </li>
          {items.map((crumb, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={crumb.item} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-400" />
                {isLast ? (
                  <span className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1 max-w-[200px] sm:max-w-md">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.item} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
