export default function GlowCard({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow behind */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-purple-500/30 blur-2xl opacity-90" />

      {/* Actual card */}
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-violet-400/40">
        {children}
      </div>
    </div>
  );
}