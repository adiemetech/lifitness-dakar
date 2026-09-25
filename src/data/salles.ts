export interface Salle {
  slug: string;
  nom: string;
  adresse: string;
  complement: string;
  telephone: string;
  gps?: { lat: number; lng: number };
  description: string;
}

export const salles: Salle[] = [
  {
    slug: 'almadies',
    nom: 'Lifitness Almadies',
    adresse: 'Route de la Corniche Ouest, face agence Yas',
    complement: 'Ancien immeuble Tigo, Dakar',
    telephone: '+221 33 820 53 38',
    gps: { lat: 14.72536, lng: -17.47128 },
    description:
      'Le vaisseau amiral : plateaux musculation et cardio, ring de boxe, pôle aquatique et sauna, face à la Corniche Ouest.',
  },
  {
    slug: 'sacre-coeur',
    nom: 'Lifitness Sacré-Cœur 3',
    adresse: 'Derrière le supermarché Auchan',
    complement: 'Sacré-Cœur 3, Dakar',
    telephone: '+221 33 816 66 11',
    description:
      "L'énergie du quartier : musculation, cardio, cours collectifs et coaching personnalisé, derrière l'Auchan Sacré-Cœur 3.",
  },
];

export const getSalle = (slug: string): Salle => {
  const salle = salles.find((s) => s.slug === slug);
  if (!salle) throw new Error(`Salle inconnue : ${slug}`);
  return salle;
};

export const telHref = (salle: Salle): string =>
  `tel:${salle.telephone.replace(/[^+\d]/g, '')}`;
