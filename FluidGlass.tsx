export default function FluidGlass({ children, className="" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur shadow-glass ${className}`}>
      {children}
    </div>
  );
}
