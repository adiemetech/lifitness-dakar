import type { Salle } from '../salles';

export const sallesEn: Salle[] = [
  {
    slug: 'almadies',
    nom: 'Lifitness Almadies',
    adresse: 'Route de la Corniche Ouest, opposite the Yas agency',
    complement: 'Former Tigo building, Dakar',
    telephone: '+221 33 820 53 38',
    gps: { lat: 14.72536, lng: -17.47128 },
    description:
      'The flagship: strength and cardio floors, boxing ring, aqua area and sauna, facing the Corniche Ouest.',
  },
  {
    slug: 'sacre-coeur',
    nom: 'Lifitness Sacré-Cœur 3',
    adresse: 'Behind the Auchan supermarket',
    complement: 'Sacré-Cœur 3, Dakar',
    telephone: '+221 33 816 66 11',
    description:
      'The neighbourhood energy: strength training, cardio, group classes and personal coaching, behind Auchan Sacré-Cœur 3.',
  },
];

export const getSalleEn = (slug: string): Salle => {
  const salle = sallesEn.find((s) => s.slug === slug);
  if (!salle) throw new Error(`Unknown gym: ${slug}`);
  return salle;
};
