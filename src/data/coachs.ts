// PLACEHOLDERS — à remplacer par la liste définitive fournie par le client
// (nom, spécialité, bio, portrait).
export interface Coach {
  slug: string;
  nom: string;
  specialite: string;
  bio: string;
  photo?: 'coach-bras-croises';
}

export const coachs: Coach[] = [
  {
    slug: 'coach-plateau',
    nom: 'Coach plateau (à confirmer)',
    specialite: 'Musculation & force',
    bio: 'Encadre le plateau musculation, suit vos progressions de charge et verrouille votre technique dès la première séance.',
    photo: 'coach-bras-croises',
  },
  {
    slug: 'coach-boxe',
    nom: 'Coach boxe (à confirmer)',
    specialite: 'Boxe & cardio',
    bio: 'Anime le ring : technique de frappe, travail au sac et sparring léger encadré, du débutant au confirmé.',
  },
  {
    slug: 'maitre-nageur',
    nom: 'Maître-nageur (à confirmer)',
    specialite: 'Aquagym & aquabike',
    bio: 'Diplômé d’État, encadre le pôle aquatique : aquagym tonique, aquabike et nage libre en sécurité.',
  },
];
