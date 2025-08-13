"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export default function CaseCard({ title, tag, img="/og.png", href="/contact" }:{title:string;tag:string;img?:string;href?:string;}){
  return (
    <motion.a whileHover={{ y: -4 }} href={href} className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative h-52 w-full">
        <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.02]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(80% 60% at 20% -10%, rgba(124,62,255,.25), transparent 60%), radial-gradient(60% 40% at 120% 120%, rgba(255,255,255,.06), transparent 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative z-10 flex items-center justify-between p-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-brand-300">{tag}</p>
          <h3 className="mt-1 text-base font-semibold text-white">{title}</h3>
        </div>
        <ArrowUpRight className="size-5 text-white/60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
    </motion.a>
  );
}
