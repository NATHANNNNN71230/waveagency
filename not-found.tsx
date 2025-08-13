export default function NotFound() {
  return (
    <main className="container py-28 text-center">
      <h1 className="text-5xl font-bold text-white">404</h1>
      <p className="mt-4 text-zinc-300">Oups — cette page n’existe pas (ou plus).</p>
      <div className="mt-8">
        <a href="/" className="rounded-2xl bg-white/10 px-6 py-3 text-white hover:bg-white/20">Retour à l’accueil</a>
      </div>
    </main>
  );
}
