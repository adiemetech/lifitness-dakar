export interface Programme {
  slug: string;
  nom: string;
  categorie:
    | 'Plateaux'
    | 'Cours collectifs'
    | 'Technologies'
    | 'Pôle aquatique'
    | 'Détente';
  accroche: string;
  description: string;
  points: string[];
  accent: string;
}

export const programmes: Programme[] = [
  {
    slug: 'musculation',
    nom: 'Musculation',
    categorie: 'Plateaux',
    accroche: 'Charges libres et machines guidées, sans attente interminable.',
    description:
      "Grand plateau musculation : charges libres, racks, machines guidées et haltères jusqu'à lourde charge. Un coach circule en permanence pour corriger ta technique et faire progresser ta charge.",
    points: [
      'Charges libres + machines guidées',
      'Racks à squat et bancs inclinables',
      'Haltères jusqu’à lourde charge',
      'Coach présent pour cadrer ta technique',
    ],
    accent: 'text-brand-magenta',
  },
  {
    slug: 'cardio',
    nom: 'Cardio-training',
    categorie: 'Plateaux',
    accroche: 'Tapis, vélos, elliptiques : brûle, endurance, recommence.',
    description:
      'Espace cardio-training équipé de tapis de course, vélos et elliptiques. Travail fractionné ou endurance fondamentale : ton coach te construit la séance qui correspond à ton objectif.',
    points: [
      'Tapis de course, vélos, elliptiques',
      'Zones cardio dédiées',
      'Séances fractionnées ou endurance',
      'Vue sur le plateau pour varier les ateliers',
    ],
    accent: 'text-brand-orange',
  },
  {
    slug: 'crossfit',
    nom: 'Crossfit',
    categorie: 'Cours collectifs',
    accroche: 'Des WODs encadrés, une communauté qui pousse.',
    description:
      'Sessions crossfit encadrées : mobilité, force, conditioning. Les coachs adaptent chaque mouvement à ton niveau — débutant accepté, ego laissé au vestiaire.',
    points: [
      'WODs encadrés par des coachs',
      'Mouvements adaptés à chaque niveau',
      'Travail de force + conditioning',
      'Esprit de groupe, dépassement garanti',
    ],
    accent: 'text-brand-amber',
  },
  {
    slug: 'trx',
    nom: 'TRX',
    categorie: 'Cours collectifs',
    accroche: 'Ton poids de corps, des sangles, zéro triche.',
    description:
      'Le TRX travaille tout : gainage, force, stabilité. Chaque exercice se règle en un geste pour passer de débutant à avancé dans la même séance.',
    points: [
      'Sangles de suspension professionnelles',
      'Gainage et force fonctionnelle',
      'Difficulté réglable en secondes',
      'Idéal en complément musculation',
    ],
    accent: 'text-brand-cyan',
  },
  {
    slug: 'boxe',
    nom: 'Boxe',
    categorie: 'Technologies',
    accroche: 'Un ring, des coachs, des reprises qui vident la tête.',
    description:
      "Ring de boxe et coachs dédiés : technique, pattes d'ours, sparring léger encadré. La boxe forge le cardio, la coordination et le mental — sans se faire mal inutilement.",
    points: [
      'Ring de boxe sur place',
      'Coachs boxe dédiés',
      'Technique, sac, pattes d’ours',
      'Sparring léger encadré',
    ],
    accent: 'text-brand-pink', // violet #AE068E : contraste insuffisant sur fond sombre
  },
  {
    slug: 'ems',
    nom: 'EMS',
    categorie: 'Technologies',
    accroche: '20 minutes qui valent une séance complète.',
    description:
      "L'électrostimulation globale en séances flash de 20 minutes : un coach pilote l'intensité pendant que tu travailles tous les groupes musculaires simultanément. Efficace quand ton agenda est serré.",
    points: [
      'Séances flash de 20 minutes',
      'Coach dédié à chaque session',
      'Tous les groupes musculaires simultanés',
      'Parfait pour les agendas chargés',
    ],
    accent: 'text-brand-cyan', // blue #0354E0 : contraste insuffisant sur fond sombre
  },
  {
    slug: 'collectifs',
    nom: 'Cours collectifs',
    categorie: 'Cours collectifs',
    accroche: 'Zumba, Step, Abdos-fessiers et programmes Les Mills.',
    description:
      'Le planning collectif qui ne dort jamais : Zumba, Step, Abdos-fessiers et les programmes Les Mills — Body Pump, Body Combat, Body Attack. Encadré, chorégraphié, motivant.',
    points: [
      'Zumba, Step, Abdos-fessiers',
      'Les Mills : Body Pump, Body Combat, Body Attack',
      'Créneaux matin, midi et soir',
      'Tous niveaux bienvenus',
    ],
    accent: 'text-brand-pink',
  },
  {
    slug: 'aquatique',
    nom: 'Pôle aquatique',
    categorie: 'Pôle aquatique',
    accroche: 'Aquagym, aquabike et maîtres-nageurs diplômés.',
    description:
      'Piscine encadrée par des maîtres-nageurs diplômés : aquagym tonique, aquabike brûle-graisse et nage libre. Le meilleur impact articulaire du club, pour tous les niveaux.',
    points: [
      'Aquagym et aquabike encadrés',
      'Maîtres-nageurs diplômés',
      'Faible impact articulaire',
      'Inclus dans la formule BASIC+',
    ],
    accent: 'text-brand-cyan',
  },
  {
    slug: 'sauna',
    nom: 'Sauna',
    categorie: 'Détente',
    accroche: 'Récupère comme un pro. Repars comme un neuf.',
    description:
      "Après l'effort, le sauna : récupération musculaire, détente mentale, élimination. La ponctuation obligatoire de toute séance sérieuse.",
    points: [
      'Accès après entraînement',
      'Récupération musculaire',
      'Détente et élimination',
      'Serviettes disponibles à la boutique',
    ],
    accent: 'text-brand-amber',
  },
];

export const getProgramme = (slug: string): Programme => {
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) throw new Error(`Programme inconnu : ${slug}`);
  return programme;
};
