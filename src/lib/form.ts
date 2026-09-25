import { z } from 'zod';

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

export const sallesLabels: Record<z.infer<typeof sallesEnum>, string> = {
  almadies: 'Lifitness Almadies',
  'sacre-coeur': 'Lifitness Sacré-Cœur 3',
};

export const niveauxLabels: Record<z.infer<typeof niveauxEnum>, string> = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
};

// Formats SN : mobile 7X XXX XX XX (+221 optionnel), fixe 33 XXX XX XX
export function isPhoneSN(value: string): boolean {
  const clean = value.replace(/[\s.-]/g, '');
  return /^(?:\+221)?(?:[67]\d{8}|33\d{7})$/.test(clean);
}

const telephone = z
  .string()
  .refine(isPhoneSN, 'Numéro sénégalais invalide (ex : 77 123 45 67)');

const email = z.union([z.literal(''), z.email({ error: 'Email invalide' })]);

export const essaiSchema = z.object({
  nom: z.string().min(2, 'Indiquez votre nom (2 caractères minimum)'),
  telephone,
  email,
  salle: sallesEnum,
  objectif: objectifsEnum,
  niveau: niveauxEnum,
  message: z.string().max(500, '500 caractères maximum').optional(),
});

export const contactSchema = z.object({
  nom: z.string().min(2, 'Indiquez votre nom (2 caractères minimum)'),
  telephone,
  email,
  salle: sallesEnum,
  message: z.string().max(500, '500 caractères maximum').optional(),
});

export type EssaiData = z.infer<typeof essaiSchema>;
export type ContactData = z.infer<typeof contactSchema>;

export function buildEssaiMessage(data: EssaiData): string {
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

export function buildContactMessage(data: ContactData): string {
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
