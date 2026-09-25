export interface Creneau {
  jours: string[];
  label: string;
  labelEn: string;
  opens: string;
  closes: string;
}

export const horaires: Creneau[] = [
  {
    jours: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    label: 'Lundi – Vendredi',
    labelEn: 'Monday – Friday',
    opens: '07:00',
    closes: '23:00',
  },
  {
    jours: ['Saturday'],
    label: 'Samedi',
    labelEn: 'Saturday',
    opens: '08:00',
    closes: '20:00',
  },
  {
    jours: ['Sunday'],
    label: 'Dimanche',
    labelEn: 'Sunday',
    opens: '08:00',
    closes: '13:00',
  },
];

export const horairesNote = 'Coachs présents dès l’ouverture.';
export const horairesNoteEn = 'Coaches on site from opening time.';
