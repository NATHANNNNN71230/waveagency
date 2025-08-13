"use client";
import { useEffect, useState } from "react";
export default function RotatingWords({ words, interval=1800 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI(s => (s+1) % words.length), interval); return () => clearInterval(id); }, [interval, words.length]);
  return <span className="text-brand-300">{words[i]}</span>;
}
