export type Service = {
  slug: string;
  title: string;
  summary: string;
  features: string[];
  cta?: string;
};
export const services: Service[] = [
  {
    slug: "creation-de-sites",
    title: "Création de sites",
    summary: "Vitrines & e‑commerce sur‑mesure. Design unique, performance, SEO technique.",
    features: [
      "UI sur‑mesure, responsive, accessibilité AA",
      "Next.js (React), animations Framer Motion",
      "SEO technique, sitemaps, métadonnées",
      "Hébergement CDN, analytics & conversions"
    ]
  },
  {
    slug: "identite-et-print",
    title: "Identité & Print",
    summary: "Logo, charte, cartes NFC, vitrophanie, signalétique, enseignes néon.",
    features: [
      "Logo & variantes, guidelines",
      "Supports print & grand format",
      "Cartes NFC / connectées",
      "Fichiers prod & gabarits"
    ]
  },
  {
    slug: "marketing-et-social",
    title: "Marketing & Social",
    summary: "Community management, collab. influenceurs, planning éditorial, contenus.",
    features: [
      "Stratégie & calendrier éditorial",
      "Création contenus (photo/vidéo/motion)",
      "Collab. influenceurs & reporting",
      "Publications & modération"
    ]
  },
  {
    slug: "evenementiel-et-media",
    title: "Événementiel & Média",
    summary: "Photo/vidéo/drone, prises de vue, location photobooth.",
    features: [
      "Captations photo/vidéo/drone",
      "Location photobooth",
      "Aftermovie & livrables optimisés",
      "Diffusion social & web"
    ]
  }
];
