"use client";
import { useEffect, useRef } from "react";
export default function ParticlesBg({ density=0.6 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const c = ref.current!; const ctx = c.getContext("2d")!;
    let w = c.width = window.innerWidth; let h = c.height = 260;
    const points = Array.from({ length: Math.floor((w/10)*density) }, () => ({
      x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3
    }));
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle="rgba(255,255,255,.35)";
      for (const p of points){ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>w) p.vx*=-1; if(p.y<0||p.y>h) p.vy*=-1; ctx.fillRect(p.x,p.y,1.2,1.2); }
      requestAnimationFrame(draw);
    }; draw();
    const onResize = () => { w = c.width = window.innerWidth; h = 260; };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [density]);
  return <canvas ref={ref} className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] w-full opacity-30" />;
}
