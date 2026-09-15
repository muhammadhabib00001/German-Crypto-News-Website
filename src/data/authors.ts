import { Author } from '@/types';

export const AUTHORS: Author[] = [
  {
    id: 'dr-maximilian-weber',
    name: 'Dr. Michael Lindner',
    slug: 'dr-maximilian-weber',
    role: 'Chefredakteur & Chef-Analyst',
    bio: 'Dr. Michael Lindner promovierte in Volkswirtschaftslehre an der Goethe-Universität Frankfurt mit Schwerpunkt auf monetärer Ökonomie. Er berichtet seit 2016 über Finanzmärkte, Makroökonomie und Bitcoin-Adoption.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
    email: 'm.lindner@kryptopulse.de',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
    credentials: ['Dr. rer. pol. (Goethe-Uni Frankfurt)', 'Ehemaliger Finanzanalyst', '10+ Jahre Erfahrung im Finanzjournalismus'],
  },
  {
    id: 'sophia-schneider',
    name: 'Katrin Baumgartner',
    slug: 'sophia-schneider',
    role: 'Senior Redakteurin (DeFi & Web3)',
    bio: 'Katrin Baumgartner studierte Wirtschaftsinformatik in Zürich (ETH Zürich). Sie spezialisiert sich auf Smart Contract Audits, dezentrale Finanzmärkte (DeFi) und die Skalierung von Layer-1- und Layer-2-Netzwerken.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300',
    email: 'k.baumgartner@kryptopulse.de',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
    credentials: ['B.Sc. Wirtschaftsinformatik ETH Zürich', 'Spezialistin für Smart Contract Sicherheit', 'Autorin für internationale Krypto-Fachpublikationen'],
  },
  {
    id: 'florian-becker',
    name: 'Stefan Krumm',
    slug: 'florian-becker',
    role: 'Marktanalyst & Trading-Experte',
    bio: 'Stefan Krumm ist zertifizierter Finanzanalyst (CFA) und betreut bei KryptoPulse den Bereich Marktanalysen, Charttechnik und Derivate. Er verfügt über mehr als 12 Jahre Erfahrung im Wertpapier- und Krypto-Trading.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    email: 's.krumm@kryptopulse.de',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
    credentials: ['CFA Charterholder', 'Zertifizierter Technischer Marktanalyst (VTAD)', '12+ Jahre Erfahrung im Eigenhandel'],
  },
  {
    id: 'laura-hoffmann',
    name: 'Helena Vogel, LL.M.',
    slug: 'laura-hoffmann',
    role: 'Fachredakteurin (Regulierung & Recht)',
    bio: 'Helena Vogel ist Volljuristin mit Spezialisierung auf Kapitalmarktrecht und europäische Finanzregulierung (MiCA, BaFin). Sie analysiert die rechtlichen Rahmenbedingungen für digitale Vermögenswerte im DACH-Raum.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    email: 'h.vogel@kryptopulse.de',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
    credentials: ['Volljuristin & LL.M. Kapitalmarktrecht', 'Expertin für MiCA & BaFin Regulierungsrahmen', 'Dozentin für Krypto-Recht'],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
