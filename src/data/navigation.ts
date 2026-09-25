export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Le club', href: '/club' },
  { label: 'Salles', href: '/salles' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Planning', href: '/planning' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav: NavItem[] = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Confidentialité', href: '/confidentialite' },
];

export const secondaryNav: NavItem[] = [
  { label: 'Coachs', href: '/coachs' },
  { label: 'Carte Confort', href: '/carte-confort' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Avis', href: '/avis' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];
