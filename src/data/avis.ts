// EXEMPLES DE TRAVAIL — à remplacer par de vrais avis collectés
// (Google Business, Facebook) avant mise en production.
export interface Avis {
  nom: string;
  quartier: string;
  texte: string;
  note: number;
}

export const avis: Avis[] = [
  {
    nom: 'Awa D.',
    quartier: 'Almadies',
    texte:
      "Je cherchais un espace où me sentir à l'aise et encadrée. Coachs présents, salle impeccable, piscine top : je ne rate plus une séance.",
    note: 5,
  },
  {
    nom: 'Moussa S.',
    quartier: 'Sacré-Cœur 3',
    texte:
      "La Carte Confort change tout : je m'entraîne aux Almadies en semaine et à Sacré-Cœur le week-end, avec un seul abonnement.",
    note: 5,
  },
  {
    nom: 'Clarisse B.',
    quartier: 'Mermoz',
    texte:
      'Les séances EMS de 20 minutes calées entre deux réunions : efficace, encadré, sans excuse possible.',
    note: 5,
  },
  {
    nom: 'Ibrahima T.',
    quartier: 'Ouakam',
    texte:
      "Le ring de boxe et les coachs qui corrigent vraiment : c'est ce que je cherchais à Dakar depuis des années.",
    note: 5,
  },
];
