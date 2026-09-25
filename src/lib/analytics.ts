export type AnalyticsProvider = 'plausible' | 'umami' | 'none';

export const analyticsProvider: AnalyticsProvider =
  import.meta.env.PUBLIC_ANALYTICS_PROVIDER === 'plausible' ||
  import.meta.env.PUBLIC_ANALYTICS_PROVIDER === 'umami'
    ? import.meta.env.PUBLIC_ANALYTICS_PROVIDER
    : 'none';

// Noms d'événements du brief — centralisés pour rester cohérents
// entre le tableau de bord analytics et le code.
export const EVENTS = {
  ctaEssaiGratuit: 'cta_essai_gratuit',
  clicWhatsapp: 'clic_whatsapp',
  clicTelephone: 'clic_telephone',
  formulaireEssai: 'formulaire_essai_envoye',
  formulaireContact: 'formulaire_contact_envoye',
  newsletter: 'newsletter_inscription',
} as const;

export type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventData }) => void;
    umami?: { track: (name: string, data?: EventData) => void };
  }
}

export function trackEvent(name: string, data?: EventData): void {
  if (analyticsProvider === 'plausible') {
    window.plausible?.(name, data ? { props: data } : undefined);
  } else if (analyticsProvider === 'umami') {
    window.umami?.track(name, data);
  }
}
