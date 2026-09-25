import type { Lang } from './ui';

// Correspondance des chemins FR (sans préfixe) ↔ EN (préfixe /en/).
// Les slugs traduits sont centralisés ici pour le hreflang, le switcher
// de langue et les liens internes localisés.

const frToEn: Record<string, string> = {
  '/': '/en/',
  '/club': '/en/club',
  '/salles': '/en/gyms',
  '/programmes': '/en/programs',
  '/tarifs': '/en/pricing',
  '/planning': '/en/schedule',
  '/contact': '/en/contact',
  '/essai-gratuit': '/en/free-trial',
  '/carte-confort': '/en/comfort-card',
  '/coachs': '/en/coaches',
  '/galerie': '/en/gallery',
  '/avis': '/en/reviews',
  '/blog': '/en/blog',
  '/faq': '/en/faq',
  '/mentions-legales': '/en/legal-notice',
  '/cgv': '/en/terms',
  '/confidentialite': '/en/privacy',
};

const enToFr: Record<string, string> = Object.fromEntries(
  Object.entries(frToEn).map(([fr, en]) => [en, fr]),
);

// Slugs identiques côté salles (noms propres), traduits côté programmes/blog.
const programmeSlugToEn: Record<string, string> = {
  musculation: 'strength',
  cardio: 'cardio',
  crossfit: 'crossfit',
  trx: 'trx',
  boxe: 'boxing',
  ems: 'ems',
  collectifs: 'group-classes',
  aquatique: 'aqua',
  sauna: 'sauna',
};

const programmeSlugToFr: Record<string, string> = Object.fromEntries(
  Object.entries(programmeSlugToEn).map(([fr, en]) => [en, fr]),
);

const blogSlugToEn: Record<string, string> = {
  'boxe-debutant-dakar': 'boxing-beginner-dakar',
  'ems-guide-complet': 'ems-complete-guide',
  'nutrition-sportive-senegal': 'sports-nutrition-senegal',
};

const blogSlugToFr: Record<string, string> = Object.fromEntries(
  Object.entries(blogSlugToEn).map(([fr, en]) => [en, fr]),
);

export function normalizePath(path: string): string {
  if (!path.startsWith('/')) path = `/${path}`;
  return path.length > 1 ? path.replace(/\/+$/, '') : '/';
}

export function toEn(frPath: string): string {
  const p = normalizePath(frPath);
  if (p === '/') return '/en/';
  if (p in frToEn) return frToEn[p];

  const programme = p.match(/^\/programmes\/(.+)$/);
  if (programme)
    return `/en/programs/${programmeSlugToEn[programme[1]] ?? programme[1]}`;

  const blog = p.match(/^\/blog\/(.+)$/);
  if (blog) return `/en/blog/${blogSlugToEn[blog[1]] ?? blog[1]}`;

  const salle = p.match(/^\/salles\/(.+)$/);
  if (salle) return `/en/gyms/${salle[1]}`;

  return `/en${p}`;
}

export function toFr(enPath: string): string {
  const p = normalizePath(enPath);
  if (p === '/en' || p === '/en/') return '/';
  if (p in enToFr) return enToFr[p];

  const programme = p.match(/^\/en\/programs\/(.+)$/);
  if (programme)
    return `/programmes/${programmeSlugToFr[programme[1]] ?? programme[1]}`;

  const blog = p.match(/^\/en\/blog\/(.+)$/);
  if (blog) return `/blog/${blogSlugToFr[blog[1]] ?? blog[1]}`;

  const gym = p.match(/^\/en\/gyms\/(.+)$/);
  if (gym) return `/salles/${gym[1]}`;

  return p.replace(/^\/en/, '') || '/';
}

/** Chemin localisé : `path` est toujours exprimé en FR. */
export function localizedPath(path: string, lang: Lang): string {
  return lang === 'en' ? toEn(path) : normalizePath(path);
}

/** Les deux variantes (FR + EN) d'une page, pour hreflang et switcher. */
export function alternatePaths(
  path: string,
  lang: Lang,
): {
  fr: string;
  en: string;
} {
  const normalized = normalizePath(path);
  return lang === 'en'
    ? { fr: toFr(normalized), en: normalized }
    : { fr: normalized, en: toEn(normalized) };
}
