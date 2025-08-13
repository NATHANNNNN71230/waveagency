import { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.domain}/`, priority: 1 },
    { url: `${site.domain}/processus`, priority: 0.8 },
    { url: `${site.domain}/services`, priority: 0.8 },
    { url: `${site.domain}/realisations`, priority: 0.7 },
    { url: `${site.domain}/a-propos`, priority: 0.6 },
    { url: `${site.domain}/contact`, priority: 0.6 },
    { url: `${site.domain}/mentions-legales`, priority: 0.3 },
    { url: `${site.domain}/confidentialite`, priority: 0.3 },
  ];
}
