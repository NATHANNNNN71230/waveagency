export type CaseItem = {
  slug: string;
  title: string;
  tag: string;
  cover: string;
  problem: string;
  solution: string[];
  kpis: { label: string; value: string }[];
};
export const cases: CaseItem[] = [
  {
    slug: "noon-refonte",
    title: "Studio Noon — refonte vitrine",
    tag: "Site vitrine • Next.js",
    cover: "/cases/noon.jpg",
    problem: "Positionnement premium pas assez visible, lenteur et taux de rebond élevé.",
    solution: [
      "Refonte UX/UI avec identité forte et micro‑interactions",
      "Next.js + optimisation images, LCP < 1.6s",
      "Copy orientée bénéfices + CTA visibles"
    ],
    kpis: [
      { label: "Lighthouse", value: "95+" },
      { label: "Bounce rate", value: "-22%" },
      { label: "Time to interactive", value: "1.2s" }
    ]
  },
  {
    slug: "eshop-minimal",
    title: "E‑shop minimal",
    tag: "E‑commerce • UX clean",
    cover: "/cases/eshop.jpg",
    problem: "Parcours d’achat dispersé et abandon panier.",
    solution: [
      "Simplification du checkout",
      "Cartes produit focus conversion",
      "Guidelines visuelles cohérentes"
    ],
    kpis: [
      { label: "Conversion", value: "+18%" },
      { label: "AOV", value: "+9%" },
      { label: "CLS", value: "0.01" }
    ]
  }
];
