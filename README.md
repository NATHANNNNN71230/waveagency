# Wave Agency — Pro scaffold
Generated: 2025-08-13T18:39:11.113437Z

## Dev
npm i
npm run dev

## Build static (Netlify)
npm run build  # outputs /out

## Domain & analytics
- Change `lib/site.ts` → `domain` = ton domaine Netlify/production
- Plausible: crée le site avec ce domaine; les objectifs {"CTA_DemandeDevis","Form_Contact_Submit"} sont déclenchés côté front.
