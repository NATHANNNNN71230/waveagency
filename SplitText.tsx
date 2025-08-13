"use client";
import { motion } from "framer-motion";
export default function SplitText({ text, delay=0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span aria-label={text}>
      {words.map((w, i) => (
        <motion.span key={`${w}-${i}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.04, duration: 0.28 }} className="inline-block mr-2">{w}</motion.span>
      ))}
    </span>
  );
}
