import { z } from 'zod';
import type { Lang } from '../i18n/ui';

export const sallesEnum = z.enum(['almadies', 'sacre-coeur']);
export const niveauxEnum = z.enum(['debutant', 'intermediaire', 'avance']);
export const objectifsEnum = z.enum([
  'perte-de-poids',
  'prise-de-masse',
  'tonification',
  'performance',
  'sante-bien-etre',
]);

export const objectifsLabels: Record<z.infer<typeof objectifsEnum>, string> = {
  'perte-de-poids': 'Perte de poids',
  'prise-de-masse': 'Prise de masse',
  tonification: 'Tonification',
  performance: 'Performance sportive',
  'sante-bien-etre': 'Santé & bien-être',
};

export const objectifsLabelsEn: Record<
  z.infer<typeof objectifsEnum>,
  string
> = {
  'perte-de-poids': 'Weight loss',
  'prise-de-masse': 'Muscle gain',
  tonification: 'Toning',
  performance: 'Sports performance',
  'sante-bien-etre': 'Health & well-being',
};

export const sallesLabels: Record<z.infer<typeof sallesEnum>, string> = {
  almadies: 'Lifitness Almadies',
  'sacre-coeur': 'Lifitness Sacré-Cœur 3',
};

export const niveauxLabels: Record<z.infer<typeof niveauxEnum>, string> = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
};

export const niveauxLabelsEn: Record<z.infer<typeof niveauxEnum>, string> = {
  debutant: 'Beginner',
  intermediaire: 'Intermediate',
  avance: 'Advanced',
};

// Formats SN : mobile 7X XXX XX XX (+221 optionnel), fixe 33 XXX XX XX
export function isPhoneSN(value: string): boolean {
  const clean = value.replace(/[\s.-]/g, '');
  return /^(?:\+221)?(?:[67]\d{8}|33\d{7})$/.test(clean);
}

const messages: Record<
  Lang,
  { phone: string; email: string; name: string; max: string }
> = {
  fr: {
    phone: 'Numéro sénégalais invalide (ex : 77 123 45 67)',
    email: 'Email invalide',
    name: 'Indiquez votre nom (2 caractères minimum)',
    max: '500 caractères maximum',
  },
  en: {
    phone: 'Invalid Senegalese number (e.g. 77 123 45 67)',
    email: 'Invalid email address',
    name: 'Enter your name (2 characters minimum)',
    max: '500 characters maximum',
  },
};

function makeTelephone(lang: Lang) {
  return z.string().refine(isPhoneSN, messages[lang].phone);
}

function makeEmail(lang: Lang) {
  return z.union([z.literal(''), z.email({ error: messages[lang].email })]);
}

function makeEssaiSchema(lang: Lang) {
  return z.object({
    nom: z.string().min(2, messages[lang].name),
    telephone: makeTelephone(lang),
    email: makeEmail(lang),
    salle: sallesEnum,
    objectif: objectifsEnum,
    niveau: niveauxEnum,
    message: z.string().max(500, messages[lang].max).optional(),
  });
}

function makeContactSchema(lang: Lang) {
  return z.object({
    nom: z.string().min(2, messages[lang].name),
    telephone: makeTelephone(lang),
    email: makeEmail(lang),
    salle: sallesEnum,
    message: z.string().max(500, messages[lang].max).optional(),
  });
}

export const essaiSchema = makeEssaiSchema('fr');
export const essaiSchemaEn = makeEssaiSchema('en');
export const contactSchema = makeContactSchema('fr');
export const contactSchemaEn = makeContactSchema('en');

export type EssaiData = z.infer<typeof essaiSchema>;
export type ContactData = z.infer<typeof contactSchema>;

export function buildEssaiMessage(data: EssaiData, lang: Lang = 'fr'): string {
  if (lang === 'en') {
    return [
      'Hello Lifitness! I would like to book my free trial session.',
      `Name: ${data.nom}`,
      `Phone: ${data.telephone}`,
      data.email ? `Email: ${data.email}` : '',
      `Gym: ${sallesLabels[data.salle]}`,
      `Goal: ${objectifsLabelsEn[data.objectif]}`,
      `Level: ${niveauxLabelsEn[data.niveau]}`,
      data.message ? `Message: ${data.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }
  return [
    "Bonjour Lifitness ! Je réserve ma séance d'essai gratuite.",
    `Nom : ${data.nom}`,
    `Téléphone : ${data.telephone}`,
    data.email ? `Email : ${data.email}` : '',
    `Salle : ${sallesLabels[data.salle]}`,
    `Objectif : ${objectifsLabels[data.objectif]}`,
    `Niveau : ${niveauxLabels[data.niveau]}`,
    data.message ? `Message : ${data.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildContactMessage(
  data: ContactData,
  lang: Lang = 'fr',
): string {
  if (lang === 'en') {
    return [
      'Hello Lifitness!',
      `Name: ${data.nom}`,
      `Phone: ${data.telephone}`,
      data.email ? `Email: ${data.email}` : '',
      `Gym: ${sallesLabels[data.salle]}`,
      data.message ? `Message: ${data.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }
  return [
    'Bonjour Lifitness !',
    `Nom : ${data.nom}`,
    `Téléphone : ${data.telephone}`,
    data.email ? `Email : ${data.email}` : '',
    `Salle concernée : ${sallesLabels[data.salle]}`,
    data.message ? `Message : ${data.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}
