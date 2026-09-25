export interface Formule {
  slug: string;
  nom: string;
  prix: string;
  unite: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export const fraisInscription = {
  montant: '20 000',
  unite: 'FCFA',
  label: 'Frais d’inscription — droit d’entrée unique',
};

export const formules: Formule[] = [
  {
    slug: 'mensuel',
    nom: 'Mensuel',
    prix: '30 000',
    unite: 'FCFA / mois',
    description: 'L’accès classique, renouvelable mois par mois.',
    features: [
      'Plateaux musculation & cardio',
      'Carte Confort : accès aux 2 salles',
      'Coachs présents dès l’ouverture',
      'Sans engagement de durée',
    ],
  },
  {
    slug: 'trimestriel',
    nom: 'Forfait 3 mois',
    prix: '90 000',
    unite: 'FCFA',
    description: 'Le format qui ancre les résultats dans la durée.',
    features: [
      'Tout le Mensuel, pendant 3 mois',
      'Gel d’abonnement possible (absence > 1 semaine)',
      'Tranquillité : pas de renouvellement mensuel',
    ],
    highlight: true,
  },
  {
    slug: 'basic-plus',
    nom: 'BASIC+',
    prix: 'Sur devis',
    unite: 'en salle',
    description: 'Plateaux complets + piscine illimitée.',
    features: [
      'Accès complet plateaux musculation & cardio',
      'Piscine illimitée (aquagym, aquabike)',
      'Hors cours collectifs spécifiques',
    ],
  },
];

export const inclusPartout = [
  'Carte Confort : 1 abonnement = 2 salles',
  'Coachs présents dès l’ouverture',
  '1ère séance d’essai offerte avant inscription',
];

export const noteGel =
  'Gel d’abonnement possible en cas d’absence de plus d’une semaine, sur les forfaits longs.';
