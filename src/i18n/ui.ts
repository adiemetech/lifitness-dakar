export type Lang = 'fr' | 'en';

export const defaultLang: Lang = 'fr';

export const languages: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
};

const fr = {
  'skip.content': 'Aller au contenu',
  'nav.aria': 'Navigation principale',
  'nav.mobileAria': 'Navigation mobile',
  'nav.footerAria': 'Navigation footer',
  'nav.club': 'Le club',
  'nav.gyms': 'Salles',
  'nav.programs': 'Programmes',
  'nav.pricing': 'Tarifs',
  'nav.schedule': 'Planning',
  'nav.contact': 'Contact',
  'nav.coaches': 'Coachs',
  'nav.comfortCard': 'Carte Confort',
  'nav.gallery': 'Galerie',
  'nav.reviews': 'Avis',
  'nav.blog': 'Blog',
  'nav.faq': 'FAQ',
  'nav.legalNotice': 'Mentions légales',
  'nav.terms': 'CGV',
  'nav.privacy': 'Confidentialité',
  'header.homeAria': 'Lifitness — retour à l’accueil',
  'header.openMenu': 'Ouvrir le menu',
  'cta.freeTrial': 'Essai gratuit',
  'cta.bookTrial': 'Réserver ma séance d’essai gratuite',
  'drawer.menu': 'Menu',
  'drawer.close': 'Fermer le menu',
  'footer.tagline':
    'Transformez votre corps. Libérez votre puissance. Un seul abonnement, deux salles, zéro excuse.',
  'footer.explore': 'Explorer',
  'footer.ourGyms': 'Nos salles',
  'footer.hoursContact': 'Horaires & contact',
  'footer.booking': 'Réservation Multiresa',
  'footer.rights': 'Tous droits réservés.',
  'footer.facebookAria': 'Lifitness sur Facebook',
  'footer.instagramAria': 'Lifitness sur Instagram',
  'lang.switchAria': 'Changer de langue',
  'whatsapp.chatAria': 'Discuter avec Lifitness sur WhatsApp',
  'finalcta.title': 'Votre première séance est offerte.',
  'finalcta.text':
    'Visite guidée, essai complet, zéro engagement. Choisissez votre salle, on vous attend.',
  'finalcta.button': 'Réserver ma séance d’essai gratuite',
};

export type UiKey = keyof typeof fr;

const en: Record<UiKey, string> = {
  'skip.content': 'Skip to content',
  'nav.aria': 'Main navigation',
  'nav.mobileAria': 'Mobile navigation',
  'nav.footerAria': 'Footer navigation',
  'nav.club': 'The club',
  'nav.gyms': 'Gyms',
  'nav.programs': 'Programs',
  'nav.pricing': 'Pricing',
  'nav.schedule': 'Schedule',
  'nav.contact': 'Contact',
  'nav.coaches': 'Coaches',
  'nav.comfortCard': 'Comfort Card',
  'nav.gallery': 'Gallery',
  'nav.reviews': 'Reviews',
  'nav.blog': 'Blog',
  'nav.faq': 'FAQ',
  'nav.legalNotice': 'Legal notice',
  'nav.terms': 'Terms',
  'nav.privacy': 'Privacy',
  'header.homeAria': 'Lifitness — back to homepage',
  'header.openMenu': 'Open menu',
  'cta.freeTrial': 'Free trial',
  'cta.bookTrial': 'Book my free trial session',
  'drawer.menu': 'Menu',
  'drawer.close': 'Close menu',
  'footer.tagline':
    'Transform your body. Unleash your power. One membership, two gyms, zero excuses.',
  'footer.explore': 'Explore',
  'footer.ourGyms': 'Our gyms',
  'footer.hoursContact': 'Hours & contact',
  'footer.booking': 'Multiresa booking',
  'footer.rights': 'All rights reserved.',
  'footer.facebookAria': 'Lifitness on Facebook',
  'footer.instagramAria': 'Lifitness on Instagram',
  'lang.switchAria': 'Change language',
  'whatsapp.chatAria': 'Chat with Lifitness on WhatsApp',
  'finalcta.title': 'Your first session is on us.',
  'finalcta.text':
    'Guided tour, full trial, no commitment. Pick your gym — we’re ready for you.',
  'finalcta.button': 'Book my free trial session',
};

export const ui: Record<Lang, Record<UiKey, string>> = { fr, en };

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui.fr[key] ?? key;
  };
}
