import type { Formule } from '../tarifs';

export const fraisInscriptionEn = {
  montant: '20 000',
  unite: 'FCFA',
  label: 'Registration fee — one-time entrance fee',
};

export const formulesEn: Formule[] = [
  {
    slug: 'mensuel',
    nom: 'Monthly',
    prix: '30 000',
    unite: 'FCFA / month',
    description: 'The classic access, renewed month to month.',
    features: [
      'Strength & cardio floors',
      'Comfort Card: access to both gyms',
      'Coaches on site from opening time',
      'No long-term commitment',
    ],
  },
  {
    slug: 'trimestriel',
    nom: '3-Month Plan',
    prix: '90 000',
    unite: 'FCFA',
    description: 'The format that anchors results over time.',
    features: [
      'Everything in Monthly, for 3 months',
      'Membership freeze available (absence > 1 week)',
      'Peace of mind: no monthly renewal',
    ],
    highlight: true,
  },
  {
    slug: 'basic-plus',
    nom: 'BASIC+',
    prix: 'On quote',
    unite: 'at the gym',
    description: 'Full floors + unlimited pool.',
    features: [
      'Full access to strength & cardio floors',
      'Unlimited pool (aqua gym, aqua bike)',
      'Excludes specific group classes',
    ],
  },
];

export const inclusPartoutEn = [
  'Comfort Card: 1 membership = 2 gyms',
  'Coaches on site from opening time',
  'First trial session free before signing up',
];

export const noteGelEn =
  'Membership freeze available for absences longer than a week, on long-term plans.';
