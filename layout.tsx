import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: "Wave Agency — Sites modernes, performants & SEO", template: "%s • Wave Agency" },
  description: "Agence créative: sites vitrines & e‑commerce, identité visuelle, social & contenus. React/Next.js, SEO technique, design sur‑mesure.",
  openGraph: { type: "website", locale: "fr_FR", url: site.domain, siteName: "Wave Agency" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const host = new URL(site.domain).host;
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
        <Script defer data-domain={host} src="https://plausible.io/js/script.js" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="/og.png" />
      </head>
      <body className="font-[Inter]">
        <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
          <div className="container h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png?v=4" alt="Wave Agency" width={96} height={96} className="h-7 w-auto" priority />
              <span className="font-[Space_Grotesk] font-semibold">Wave Agency</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm text-zinc-300">
              <Link href="/processus" className="hover:text-white">Processus</Link>
              <Link href="/services" className="hover:text-white">Services</Link>
              <Link href="/realisations" className="hover:text-white">Réalisations</Link>
              <Link href="/a-propos" className="hover:text-white">À propos</Link>
              <Link href="/contact" className="rounded-xl bg-white/10 px-3 py-1.5 hover:bg-white/20 text-white">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-white/10 bg-black px-6 py-10 text-zinc-400">
          <div className="container grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-semibold text-white">{site.name}</p>
              <p className="mt-2 text-sm">Sites modernes & performants. Vénissieux • France</p>
            </div>
            <nav className="grid gap-2 text-sm">
              <a href="/mentions-legales" className="hover:text-white">Mentions légales</a>
              <a href="/confidentialite" className="hover:text-white">Confidentialité</a>
              <a href="/processus" className="hover:text-white">Notre processus</a>
              <a href="/services" className="hover:text-white">Services</a>
            </nav>
            <div className="text-sm">
              <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
              <p className="mt-1">
                <a href={site.instagram} className="hover:text-white">Instagram</a> •{" "}
                <a href={site.whatsapp} className="hover:text-white">WhatsApp</a> •{" "}
                <a href={site.snapchat} className="hover:text-white">Snapchat</a>
              </p>
              <p className="mt-2">© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
