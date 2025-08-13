export default function APropos(){
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white">À propos</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">Wave Agency, studio créatif indépendant à Vénissieux. Nous concevons des sites modernes et performants en React/Next.js, avec un goût prononcé pour les micro-interactions.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.04] backdrop-blur">
          <h3 className="font-semibold text-white">Mission</h3>
          <p className="mt-2 text-sm text-zinc-300">Créer des expériences web esthétiques qui convertissent, avec un code propre et un SEO solide.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.04] backdrop-blur">
          <h3 className="font-semibold text-white">Stack</h3>
          <p className="mt-2 text-sm text-zinc-300">Next.js, Tailwind, Framer Motion, Plausible.</p>
        </div>
      </div>
    </main>
  );
}
