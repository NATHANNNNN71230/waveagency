import FluidGlass from "../ui/FluidGlass";
export default function MagicBento(){
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <FluidGlass className="p-6 sm:col-span-2">
        <h3 className="text-white font-semibold">Sites modernes</h3>
        <p className="mt-2 text-sm text-zinc-300">Vitrines & e‑commerce performants, UI sur‑mesure, animations subtiles.</p>
      </FluidGlass>
      <FluidGlass className="p-6">
        <h3 className="text-white font-semibold">Identité</h3>
        <p className="mt-2 text-sm text-zinc-300">Logo, charte, cartes NFC, signalétique & vitrophanie.</p>
      </FluidGlass>
      <FluidGlass className="p-6">
        <h3 className="text-white font-semibold">Marketing</h3>
        <p className="mt-2 text-sm text-zinc-300">Community management, influence, contenus.</p>
      </FluidGlass>
      <FluidGlass className="p-6 lg:col-span-2">
        <h3 className="text-white font-semibold">Événementiel & Média</h3>
        <p className="mt-2 text-sm text-zinc-300">Photo/vidéo/drone + photobooth.</p>
      </FluidGlass>
    </div>
  );
}
