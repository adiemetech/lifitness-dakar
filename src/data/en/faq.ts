// TO BE VALIDATED by the client before going live:
// payment methods (Wave/Orange Money/card), parking, "bring a friend" offer,
// sauna/group classes per plan. The rest follows the brief.
import type { GroupeFaq } from '../faq';

export const faqEn: GroupeFaq[] = [
  {
    theme: 'Membership & pricing',
    questions: [
      {
        question: 'How much does registration cost?',
        answer:
          'A 20,000 FCFA registration fee, paid once. It unlocks access to every plan, Comfort Card included.',
      },
      {
        question: 'What are the membership prices?',
        answer:
          'The monthly plan starts at 30,000 FCFA/month, with no commitment. The 3-month plan is 90,000 FCFA. Every plan includes access to both gyms.',
      },
      {
        question: 'Am I tied in for a minimum period?',
        answer:
          'No. The monthly plan renews month to month, with no long-term commitment. You stop whenever you want.',
      },
      {
        question: 'Can I freeze my membership while travelling?',
        answer:
          'Yes. For absences longer than a week, freezing is possible on long-term plans (3 months and above). Your expiry date is pushed back accordingly.',
      },
      {
        question: 'Which payment methods do you accept?',
        answer:
          'Cash, Wave, Orange Money and bank card. Ask at the front desk of either gym.',
      },
    ],
  },
  {
    theme: 'Comfort Card & gyms',
    questions: [
      {
        question: 'What is the Comfort Card?',
        answer:
          'It is your access to both Lifitness gyms — Almadies and Sacré-Cœur 3 — with a single membership. No restrictions on location, day or time.',
      },
      {
        question: 'Is the Comfort Card an extra cost?',
        answer:
          'No. It is included in every plan, from monthly to the 3-month package.',
      },
      {
        question: 'Which gyms do you have and where are they?',
        answer:
          'Lifitness Almadies, Route de la Corniche Ouest opposite the Yas agency (former Tigo building), and Lifitness Sacré-Cœur 3, behind the Auchan supermarket.',
      },
      {
        question: 'What are the opening hours?',
        answer:
          'Monday to Friday: 7am–11pm with coaches from opening time. Saturday: 8am–8pm. Sunday: 8am–1pm.',
      },
      {
        question: 'Can I train on Sunday?',
        answer:
          'Yes, from 8am to 1pm in both gyms. Perfect for a session before the family lunch.',
      },
    ],
  },
  {
    theme: 'Trial & first visit',
    questions: [
      {
        question: 'Is the first session really free?',
        answer:
          'Yes, with no commitment and no credit card. Full guided tour of the gym plus a complete trial session. Book via the free trial form or WhatsApp.',
      },
      {
        question: 'What should I bring for the trial?',
        answer:
          'Sportswear, a bottle of water and a towel. Everything else is on site: equipment, floors, and a coach to guide you.',
      },
      {
        question: 'Do I need to book or can I just drop in?',
        answer:
          'You can drop in during opening hours. Booking online simply prepares your visit and avoids waiting.',
      },
    ],
  },
  {
    theme: 'Activities & coaching',
    questions: [
      {
        question: 'Which activities are included in the membership?',
        answer:
          'Strength training, cardio, boxing, aqua (pool), sauna and group classes depending on the plan. The BASIC+ plan includes full floor access and unlimited pool.',
      },
      {
        question: 'Are there coaches on the floor?',
        answer:
          'Yes, coaches are on site from opening time (7am on weekdays). They correct, guide and motivate — at no extra cost on the floors.',
      },
      {
        question: 'How do EMS sessions work?',
        answer:
          '20-minute sessions, supervised individually or in very small groups. The coach sets the intensity zone by zone. Not recommended during pregnancy, with a pacemaker or for epilepsy.',
      },
      {
        question: 'I am a complete beginner. Is that a problem?',
        answer:
          'Not at all. Most of our members started from scratch. The coach builds your first session around your level and your goal.',
      },
      {
        question: 'Are women welcome?',
        answer:
          'Obviously. Our gyms offer a safe, supervised and respectful space, with dedicated changing rooms and support.',
      },
    ],
  },
  {
    theme: 'Practical',
    questions: [
      {
        question: 'How do I book a group class?',
        answer:
          'Online booking is coming soon via Multiresa. In the meantime, book at your gym’s front desk or by phone.',
      },
      {
        question: 'Is there parking?',
        answer:
          'Yes, parking is available right next to both gyms. Ask the front desk for details.',
      },
      {
        question: 'Can I come with a friend?',
        answer:
          'Yes. Your friend gets their first session free, like everyone else. Ideal for training as a pair.',
      },
    ],
  },
];

export const faqPlateEn = () => faqEn.flatMap((g) => g.questions);
