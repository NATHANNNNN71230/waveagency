"use client";
import { motion } from "framer-motion";
import ShinyText from "@/components/animations/ShinyText";
import SplitText from "@/components/animations/SplitText";
import RotatingWords from "@/components/animations/RotatingWords";
import AuroraBg from "@/components/backgrounds/Aurora";
import ParticlesBg from "@/components/backgrounds/Particles";
import CountUp from "@/components/animations/CountUp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBg />
      <div className="container py-28 md:py-36">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-balance text-4xl md:text-6xl font-[Space_Grotesk] font-bold tracking-tight">
          <ShinyText>Des sites <span className="text-brand-400">audacieux</span> qui{" "}
            <span className="inline-block align-baseline">
              <RotatingWords words={["convertissent", "impressionnent", "rankent"]} />
            </span>
          </ShinyText>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 max-w-2xl text-lg text-zinc-300">
          <SplitText text="Wave Agency conçoit des expériences web rapides, élégantes et animées en React — taillées pour le SEO et la performance." />
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <a href="/contact" onClick={() => (window as any).plausible?.('CTA_DemandeDevis')}
            className="rounded-2xl bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20">
            Demander un devis
          </a>
          <a href="/realisations"
            className="rounded-2xl border border-white/20 px-6 py-3 text-white/80 hover:text-white">
            Voir les réalisations
          </a>
        </motion.div>
        <div className="mt-10 grid grid-flow-col gap-8 text-center text-sm text-zinc-300">
          <div><span className="text-2xl font-bold text-white"><CountUp end={95} suffix="+" /></span><div>Score Lighthouse</div></div>
          <div><span className="text-2xl font-bold text-white"><CountUp end={7} /></span><div>jours moyen de prod</div></div>
          <div><span className="text-2xl font-bold text-white"><CountUp end={24} /></span><div>h pour un devis</div></div>
        </div>
      </div>
      <ParticlesBg />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
