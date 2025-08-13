"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <motion.a whileHover={{ y: -4 }} href={href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(60% 60% at 20% 0%, rgba(124,62,255,.25), transparent 60%), radial-gradient(80% 60% at 120% 120%, rgba(255,255,255,.06), transparent 70%)" }} />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <ArrowUpRight className="size-5 text-white/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </div>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-zinc-300">{description}</p>
    </motion.a>
  );
}
