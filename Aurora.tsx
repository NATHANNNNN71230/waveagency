"use client";
export default function AuroraBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
      <div className="[background:radial-gradient(60%_50%_at_50%_10%,rgba(124,62,255,0.35),transparent_70%),radial-gradient(40%_50%_at_20%_60%,rgba(167,139,250,0.25),transparent_70%),radial-gradient(40%_60%_at_80%_40%,rgba(34,211,238,0.2),transparent_70%)] h-full" />
    </div>
  );
}
