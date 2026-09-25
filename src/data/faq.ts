// À FAIRE VALIDER par le client avant mise en production :
// moyens de paiement (Wave/Orange Money/carte), parking, offre « venir avec
// un ami », sauna/cours collectifs selon formule. Le reste reprend le brief.
export interface QuestionFaq {
  question: string;
  answer: string;
}

export interface GroupeFaq {
  theme: string;
  questions: QuestionFaq[];
}

export const faq: GroupeFaq[] = [
  {
    theme: 'Abonnement & tarifs',
    questions: [
      {
        question: 'Combien coûte l’inscription ?',
        answer:
          '20 000 FCFA de frais d’inscription, payés une seule fois. Ils ouvrent l’accès à toutes les formules, Carte Confort incluse.',
      },
      {
        question: 'Quels sont les tarifs des abonnements ?',
        answer:
          'La formule mensuelle démarre à 30 000 FCFA/mois, sans engagement. Le forfait 3 mois est à 90 000 FCFA. Toutes les formules incluent l’accès aux deux salles.',
      },
      {
        question: 'Suis-je engagé sur la durée ?',
        answer:
          'Non. La formule mensuelle se renouvelle mois par mois, sans engagement de durée. Vous arrêtez quand vous voulez.',
      },
      {
        question: 'Puis-je geler mon abonnement pendant un voyage ?',
        answer:
          'Oui. En cas d’absence de plus d’une semaine, le gel est possible sur les forfaits longs (3 mois et au-delà). Votre échéance est décalée d’autant.',
      },
      {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer:
          'Espèces, Wave, Orange Money et carte bancaire. Renseignez-vous à l’accueil de l’une des deux salles.',
      },
    ],
  },
  {
    theme: 'Carte Confort & salles',
    questions: [
      {
        question: 'Qu’est-ce que la Carte Confort ?',
        answer:
          'C’est votre accès aux deux salles Lifitness — Almadies et Sacré-Cœur 3 — avec un seul abonnement. Sans restriction de lieu, de jour ou d’heure.',
      },
      {
        question: 'La Carte Confort est-elle en supplément ?',
        answer:
          'Non. Elle est incluse dans toutes les formules, du mensuel au forfait 3 mois.',
      },
      {
        question: 'Quelles sont vos salles et où se trouvent-elles ?',
        answer:
          'Lifitness Almadies, Route de la Corniche Ouest face à l’agence Yas (ancien immeuble Tigo), et Lifitness Sacré-Cœur 3, derrière le supermarché Auchan.',
      },
      {
        question: 'Quels sont les horaires d’ouverture ?',
        answer:
          'Lundi au vendredi : 7h-23h avec coachs dès l’ouverture. Samedi : 8h-20h. Dimanche : 8h-13h.',
      },
      {
        question: 'Peut-on s’entraîner le dimanche ?',
        answer:
          'Oui, de 8h à 13h dans les deux salles. Idéal pour une séance avant le déjeuner de famille.',
      },
    ],
  },
  {
    theme: 'Essai & première visite',
    questions: [
      {
        question: 'La première séance est-elle vraiment gratuite ?',
        answer:
          'Oui, sans engagement et sans carte bancaire. Visite guidée de la salle et séance d’essai complètes. Réservez via le formulaire d’essai gratuit ou WhatsApp.',
      },
      {
        question: 'Que faut-il apporter pour l’essai ?',
        answer:
          'Une tenue de sport, une bouteille d’eau et une serviette. Le reste est sur place : matériel, plateaux, et un coach pour vous orienter.',
      },
      {
        question: 'Faut-il réserver ou peut-on passer directement ?',
        answer:
          'Vous pouvez passer directement aux horaires d’ouverture. La réservation en ligne permet simplement de préparer votre visite et d’éviter l’attente.',
      },
    ],
  },
  {
    theme: 'Activités & encadrement',
    questions: [
      {
        question: 'Quelles activités sont incluses dans l’abonnement ?',
        answer:
          'Musculation, cardio, boxe, aquatique (piscine), sauna et cours collectifs selon la formule. La formule BASIC+ inclut plateaux et piscine illimitée.',
      },
      {
        question: 'Y a-t-il des coachs dans la salle ?',
        answer:
          'Oui, des coachs sont présents dès l’ouverture (7h en semaine). Ils corrigent, cadrent et motivent, sans supplément sur les plateaux.',
      },
      {
        question: 'Comment fonctionnent les séances EMS ?',
        answer:
          'Séances de 20 minutes, encadrées individuellement ou en très petit groupe. Le coach règle les intensités zone par zone. Déconseillées en cas de grossesse, pacemaker ou épilepsie.',
      },
      {
        question: 'Je suis débutant complet. Est-ce un problème ?',
        answer:
          'Aucun. La majorité de nos adhérents ont démarré de zéro. Le coach construit votre première séance selon votre niveau et votre objectif.',
      },
      {
        question: 'Les femmes sont-elles les bienvenues ?',
        answer:
          'Évidemment. Nos salles offrent un espace sécurisé, encadré et respectueux, avec vestiaires et accompagnement dédiés.',
      },
    ],
  },
  {
    theme: 'Pratique',
    questions: [
      {
        question: 'Comment réserver un cours collectif ?',
        answer:
          'La réservation en ligne arrive bientôt via Multiresa. En attendant, réservez à l’accueil de votre salle ou par téléphone.',
      },
      {
        question: 'Y a-t-il un parking ?',
        answer:
          'Oui, un espace de stationnement est disponible à proximité immédiate des deux salles. Demandez les détails à l’accueil.',
      },
      {
        question: 'Puis-je venir avec un ami ?',
        answer:
          'Oui. Votre ami profite de sa première séance offerte, comme tout le monde. Idéal pour s’entraîner à deux.',
      },
    ],
  },
];

export const faqPlate = (): QuestionFaq[] => faq.flatMap((g) => g.questions);
