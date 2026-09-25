import type { UiKey } from '../i18n/ui';

export interface NavItem {
  labelKey: UiKey;
  href: string; // chemin FR — localisé via localizedPath()
}

export const mainNav: NavItem[] = [
  { labelKey: 'nav.club', href: '/club' },
  { labelKey: 'nav.gyms', href: '/salles' },
  { labelKey: 'nav.programs', href: '/programmes' },
  { labelKey: 'nav.pricing', href: '/tarifs' },
  { labelKey: 'nav.schedule', href: '/planning' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export const legalNav: NavItem[] = [
  { labelKey: 'nav.legalNotice', href: '/mentions-legales' },
  { labelKey: 'nav.terms', href: '/cgv' },
  { labelKey: 'nav.privacy', href: '/confidentialite' },
];

export const secondaryNav: NavItem[] = [
  { labelKey: 'nav.coaches', href: '/coachs' },
  { labelKey: 'nav.comfortCard', href: '/carte-confort' },
  { labelKey: 'nav.gallery', href: '/galerie' },
  { labelKey: 'nav.reviews', href: '/avis' },
  { labelKey: 'nav.blog', href: '/blog' },
  { labelKey: 'nav.faq', href: '/faq' },
];
