"use client";
import type { ReactNode } from "react";
export default function ShinyText({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block bg-[linear-gradient(110deg,#fff_0%,rgba(255,255,255,0.35)_45%,#fff_55%)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent">
      {children}
    </span>
  );
}
