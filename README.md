# Lifitness Dakar — Site web

Site vitrine + conversion du club de fitness premium multi-salles Lifitness Dakar (Almadies & Sacré-Cœur 3). Statique, 0 JS par défaut, mobile-first, pensé pour la conversion (essai gratuit / WhatsApp).

## Stack

- **Astro 7** (SSG, îlots JS uniquement là où c'est utile : drawer, formulaires, events)
- **Tailwind CSS v4** (configuration CSS-first dans `src/styles/tokens.css`, pas de `tailwind.config`)
- **TypeScript strict**
- **Zod v4** (validation des formulaires côté client)
- **Content Collections** (blog : `src/content.config.ts` + `src/content/blog/`)
- Polices auto-hébergées (@fontsource) : Space Grotesk, Inter, DM Mono — aucun appel Google Fonts
- `@astrojs/sitemap`, MDX supporté

## Commandes

| Commande                                        | Action                                    |
| :---------------------------------------------- | :---------------------------------------- |
| `npm install`                                   | Installe les dépendances                  |
| `npm run dev`                                   | Serveur local sur `http://localhost:4321` |
| `npm run build`                                 | Build de production dans `./dist/`        |
| `npm run preview`                               | Prévisualise le build                     |
| `npx eslint src scripts`                        | Lint                                      |
| `npx prettier --write "src/**/*.{astro,ts,md}"` | Formatage                                 |

## Structure

```text
src/
├── assets/          # images optimisées à la build (astro:assets)
├── components/
│   ├── forms/       # EssaiForm, ContactForm, NewsletterForm (Zod → WhatsApp)
│   ├── layout/      # Header, Footer, MobileDrawer, StickyMobileCTA, WhatsAppFloat, Analytics
│   ├── sections/    # CarteConfort, TestimonialsCarousel, FinalCTA, MapEmbed…
│   └── ui/          # Button, Card, FAQAccordion, PricingCard…
├── content/blog/    # articles Markdown (frontmatter validé par Zod)
├── data/            # source de vérité métier : salles, tarifs, horaires, programmes, faq, avis, coachs, legal
├── layouts/         # BaseLayout, PageLayout, ArticleLayout, LegalLayout
├── lib/             # seo.ts (JSON-LD), whatsapp.ts, form.ts, analytics.ts
├── pages/           # 1 route = 1 page (28+ routes)
└── styles/          # tokens.css (@theme Tailwind), typography.css, global.css
```

## Ajouter un article de blog

Créer un fichier `.md` dans `src/content/blog/` :

```markdown
---
title: 'Mon titre'
description: 'Résumé pour le SEO et la carte du blog (150-160 caractères).'
date: 2026-10-01
author: 'Équipe Lifitness Dakar'
tags: ['mot-clé']
draft: false
---

Contenu Markdown… Les liens internes en relatif : [essai gratuit](/essai-gratuit).
```

L'URL est `/blog/<nom-du-fichier>`. `draft: true` exclut l'article du build.

## Analytics (désactivés par défaut)

Le code d'intégration est prêt dans `src/lib/analytics.ts` + `src/components/layout/Analytics.astro`.
Activation par variables d'environnement (voir `.env.example`) :

### Activer Plausible

1. Créer un compte sur [plausible.io](https://plausible.io) et ajouter le site `lifitness-dakar.com`.
2. Dans `.env` (ou les variables d'environnement de l'hébergeur) :
   ```env
   PUBLIC_ANALYTICS_PROVIDER=plausible
   PUBLIC_ANALYTICS_DOMAIN=lifitness-dakar.com
   ```
3. Rebuilder. Le script Plausible (sans cookie, RGPD-friendly) est injecté sur toutes les pages.

### Activer Umami (self-hosted)

1. Déployer Umami (Docker ou Umami Cloud) et créer le site web dans le tableau de bord.
2. Dans `.env` :
   ```env
   PUBLIC_ANALYTICS_PROVIDER=umami
   PUBLIC_UMAMI_SRC=https://votre-umami.example.com/script.js
   PUBLIC_UMAMI_WEBSITE_ID=<id-du-site>
   ```
3. Rebuilder.

### Événements trackés

Définis dans `EVENTS` (`src/lib/analytics.ts`) :

| Événement                   | Déclencheur                                                 |
| :-------------------------- | :---------------------------------------------------------- |
| `cta_essai_gratuit`         | Clic sur un lien vers `/essai-gratuit` (délégation globale) |
| `clic_whatsapp`             | Clic sur un lien `wa.me`                                    |
| `clic_telephone`            | Clic sur un lien `tel:`                                     |
| `formulaire_essai_envoye`   | Formulaire d'essai validé (props : salle, objectif)         |
| `formulaire_contact_envoye` | Formulaire de contact validé (props : salle)                |
| `newsletter_inscription`    | Formulaire newsletter validé                                |

### Ajouter un nouvel événement

1. Ajouter la clé dans `EVENTS` (`src/lib/analytics.ts`).
2. Appeler `trackEvent(EVENTS.maCle, { props… })` depuis un `<script>` client.
3. Dans Plausible : déclarer l'événement comme _Custom Event_ ; dans Umami : rien à faire, il apparaît automatiquement.

### En attendant : outils gratuits sans code

- **Google Search Console** : vérifier la propriété `lifitness-dakar.com`, soumettre `https://lifitness-dakar.com/sitemap-index.xml`. Donne les requêtes, clics et problèmes d'indexation.
- **Cloudflare Web Analytics** : si le site est déployé sur Cloudflare Pages, activer _Analytics_ sur le projet (gratuit, sans cookie, sans code à ajouter).

## SEO

- Title/description/canonical/OG uniques par page (`BaseLayout.astro`)
- JSON-LD : `Organization` (footer), `HealthAndBeautyBusiness` (accueil, /club), `LocalBusiness` (fiches salles), `SportsActivityLocation` (programmes), `FAQPage` (/faq), `Article` + `BreadcrumbList` (blog) — générateurs dans `src/lib/seo.ts`
- `robots.txt` + sitemap automatique (`@astrojs/sitemap`)
- `og-image.jpg` 1200×630 généré via `scripts/process-logo.mjs`

## Déploiement

- **Cloudflare Pages** (recommandé) : build `npm run build`, output `dist/`. Ajouter les variables `PUBLIC_ANALYTICS_*` dans _Settings → Environment variables_.
- **Vercel** : framework preset « Astro », mêmes variables.
- Penser à mettre à jour `site` dans `astro.config.mjs` si le domaine final diffère de `https://lifitness-dakar.com`.

## ⚠️ Éléments placeholder à remplacer avant production

| Élément                                            | Fichier                          | État                                       |
| :------------------------------------------------- | :------------------------------- | :----------------------------------------- |
| Numéro WhatsApp (fixe actuel, non joignable ?)     | `src/lib/whatsapp.ts`            | À remplacer par un mobile                  |
| URL réservation Multiresa                          | `src/lib/seo.ts` (`BOOKING_URL`) | `'#'`                                      |
| Avis clients                                       | `src/data/avis.ts`               | Exemples rédigés                           |
| Coachs (liste + portraits)                         | `src/data/coachs.ts`             | Placeholders « à confirmer »               |
| Grille de planning                                 | `src/data/planning.ts`           | Vide → la page affiche un fallback         |
| Infos légales (RCCM, NINEA, raison sociale…)       | `src/data/legal.ts`              | « À compléter »                            |
| Réponses FAQ à valider (paiement, parking, invité) | `src/data/faq.ts`                | Commentées dans le fichier                 |
| Logo « LIF ITNESS » espacé                         | `src/assets/logo/`               | En attente de confirmation/fichier corrigé |
| Photos salles / galerie / vidéos                   | `src/assets/images/`             | 4 visuels de travail fournis               |
| Articles de blog                                   | `src/content/blog/`              | Rédigés, à relire par le client            |
