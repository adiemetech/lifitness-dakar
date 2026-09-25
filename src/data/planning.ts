// Grille hebdomadaire réelle à fournir par le client ; tant que ce tableau
// est vide, /planning affiche les familles de cours + renvoi vers Multiresa.
export interface SeancePlanning {
  jour:
    | 'Lundi'
    | 'Mardi'
    | 'Mercredi'
    | 'Jeudi'
    | 'Vendredi'
    | 'Samedi'
    | 'Dimanche';
  heure: string;
  cours: string;
  salle: 'almadies' | 'sacre-coeur';
  coach?: string;
}

export const planning: SeancePlanning[] = [];
