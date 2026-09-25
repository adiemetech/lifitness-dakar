import { salles } from '../data/salles';
import { sallesEn } from '../data/en/salles';
import { horaires } from '../data/horaires';
import type { Lang } from '../i18n/ui';

export const SITE_NAME = 'Lifitness Dakar';
export const SITE_URL = 'https://lifitness-dakar.com';
export const SITE_EMAIL = 'lifitnessgyms@gmail.com';
export const SAME_AS = [
  'https://www.facebook.com/LifitNes/',
  'https://instagram.com/lifitnessdakar',
];
// URL Multiresa à remplacer dès que fournie
export const BOOKING_URL = '#';

const openingHoursSpecification = () =>
  horaires.map((c) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: c.jours,
    opens: c.opens,
    closes: c.closes,
  }));

const postalAddress = (nom: string, streetAddress: string) => ({
  '@type': 'PostalAddress',
  name: nom,
  streetAddress,
  addressLocality: 'Dakar',
  addressCountry: 'SN',
});

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/lifitness-logo-full.svg`,
    email: SITE_EMAIL,
    telephone: salles.map((s) => s.telephone),
    sameAs: SAME_AS,
  };
}

export function healthAndBeautyBusiness(lang: Lang = 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      lang === 'en'
        ? 'Premium multi-gym fitness club in Dakar: strength training, boxing, EMS, aqua classes and sauna.'
        : 'Club de fitness premium multi-salles à Dakar : musculation, boxe, EMS, aquatique, cours collectifs et sauna.',
    telephone: salles.map((s) => s.telephone),
    email: SITE_EMAIL,
    address: salles.map((s) => postalAddress(s.nom, s.adresse)),
    openingHoursSpecification: openingHoursSpecification(),
    priceRange: '20000 - 90000 FCFA',
    sameAs: SAME_AS,
  };
}

export function localBusiness(slug: string, lang: Lang = 'fr') {
  const source = lang === 'en' ? sallesEn : salles;
  const salle = source.find((s) => s.slug === slug);
  if (!salle) throw new Error(`Salle inconnue : ${slug}`);
  const url =
    lang === 'en'
      ? `${SITE_URL}/en/gyms/${salle.slug}`
      : `${SITE_URL}/salles/${salle.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: salle.nom,
    url,
    description: salle.description,
    telephone: salle.telephone,
    email: SITE_EMAIL,
    address: postalAddress(salle.nom, salle.adresse),
    ...(salle.gps
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: salle.gps.lat,
            longitude: salle.gps.lng,
          },
        }
      : {}),
    openingHoursSpecification: openingHoursSpecification(),
    parentOrganization: { '@type': 'Organization', name: SITE_NAME },
  };
}

export function breadcrumbList(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPage(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function article(post: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}${post.path}`,
  };
}

export function sportsActivityLocation(programme: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: programme.name,
    description: programme.description,
    url: `${SITE_URL}${programme.path}`,
    address: salles.map((s) => postalAddress(s.nom, s.adresse)),
    parentOrganization: { '@type': 'Organization', name: SITE_NAME },
  };
}
