export interface ProgrammeEn {
  slug: string;
  name: string;
  category:
    'Floors' | 'Group Classes' | 'Technologies' | 'Aqua Area' | 'Recovery';
  tagline: string;
  description: string;
  points: string[];
  accent: string;
}

// Slugs EN alignés sur src/i18n/routes.ts
export const programmesEn: ProgrammeEn[] = [
  {
    slug: 'strength',
    name: 'Strength Training',
    category: 'Floors',
    tagline: 'Free weights and guided machines, without endless waiting.',
    description:
      'Large strength floor: free weights, racks, guided machines and dumbbells up to heavy loads. A coach circulates at all times to fix your technique and push your loads up.',
    points: [
      'Free weights + guided machines',
      'Squat racks and adjustable benches',
      'Dumbbells up to heavy loads',
      'Coach on hand to dial in your technique',
    ],
    accent: 'text-brand-magenta',
  },
  {
    slug: 'cardio',
    name: 'Cardio Training',
    category: 'Floors',
    tagline: 'Treadmills, bikes, ellipticals: burn, endure, repeat.',
    description:
      'Cardio area equipped with treadmills, bikes and ellipticals. Intervals or steady-state endurance: your coach builds the session that matches your goal.',
    points: [
      'Treadmills, bikes, ellipticals',
      'Dedicated cardio zones',
      'Interval or endurance sessions',
      'Overlooking the floor to mix up your workouts',
    ],
    accent: 'text-brand-orange',
  },
  {
    slug: 'crossfit',
    name: 'CrossFit',
    category: 'Group Classes',
    tagline: 'Coached WODs, a community that pushes you.',
    description:
      'Coached CrossFit sessions: mobility, strength, conditioning. Coaches scale every movement to your level — beginners welcome, egos left in the locker room.',
    points: [
      'WODs coached by pros',
      'Movements scaled to every level',
      'Strength work + conditioning',
      'Team spirit, personal bests guaranteed',
    ],
    accent: 'text-brand-amber',
  },
  {
    slug: 'trx',
    name: 'TRX',
    category: 'Group Classes',
    tagline: 'Your bodyweight, straps, zero cheating.',
    description:
      'TRX works everything: core, strength, stability. Every exercise adjusts in one move to go from beginner to advanced within the same session.',
    points: [
      'Professional suspension straps',
      'Core and functional strength',
      'Difficulty adjustable in seconds',
      'Ideal alongside strength training',
    ],
    accent: 'text-brand-cyan',
  },
  {
    slug: 'boxing',
    name: 'Boxing',
    category: 'Technologies',
    tagline: 'A ring, coaches, rounds that clear your head.',
    description:
      'Boxing ring and dedicated coaches: technique, mitt work, light supervised sparring. Boxing builds cardio, coordination and mental strength — without unnecessary damage.',
    points: [
      'Boxing ring on site',
      'Dedicated boxing coaches',
      'Technique, bag work, mitts',
      'Light supervised sparring',
    ],
    accent: 'text-brand-pink',
  },
  {
    slug: 'ems',
    name: 'EMS',
    category: 'Technologies',
    tagline: '20 minutes worth a full session.',
    description:
      'Full-body electrostimulation in 20-minute flash sessions: a coach controls the intensity while you work every muscle group simultaneously. Efficient when your schedule is tight.',
    points: [
      '20-minute flash sessions',
      'A coach dedicated to every session',
      'All muscle groups worked simultaneously',
      'Perfect for busy schedules',
    ],
    accent: 'text-brand-cyan',
  },
  {
    slug: 'group-classes',
    name: 'Group Classes',
    category: 'Group Classes',
    tagline: 'Zumba, Step, Abs & Glutes and Les Mills programs.',
    description:
      'The class schedule that never sleeps: Zumba, Step, Abs & Glutes and Les Mills programs — Body Pump, Body Combat, Body Attack. Coached, choreographed, motivating.',
    points: [
      'Zumba, Step, Abs & Glutes',
      'Les Mills: Body Pump, Body Combat, Body Attack',
      'Morning, midday and evening slots',
      'All levels welcome',
    ],
    accent: 'text-brand-pink',
  },
  {
    slug: 'aqua',
    name: 'Aqua Area',
    category: 'Aqua Area',
    tagline: 'Aqua gym, aqua bike and certified lifeguards.',
    description:
      'Pool supervised by certified lifeguards: energizing aqua gym, fat-burning aqua bike and free swim. The lowest joint impact in the club, for all levels.',
    points: [
      'Supervised aqua gym & aqua bike',
      'Certified lifeguards',
      'Low joint impact',
      'Included in the BASIC+ plan',
    ],
    accent: 'text-brand-cyan',
  },
  {
    slug: 'sauna',
    name: 'Sauna',
    category: 'Recovery',
    tagline: 'Recover like a pro. Leave like new.',
    description:
      'After the effort, the sauna: muscle recovery, mental relaxation, detox. The mandatory punctuation of any serious session.',
    points: [
      'Access after your workout',
      'Muscle recovery',
      'Relaxation and detox',
      'Towels available at the shop',
    ],
    accent: 'text-brand-amber',
  },
];

export const getProgrammeEn = (slug: string): ProgrammeEn => {
  const programme = programmesEn.find((p) => p.slug === slug);
  if (!programme) throw new Error(`Unknown program: ${slug}`);
  return programme;
};
