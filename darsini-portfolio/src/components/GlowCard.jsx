export default function GlowCard({
  children,
  className = "",
  active = false,
  onClick,
}) {
  return (
    <div
      className={`relative ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      {/* Soft background glow (always visible) */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/15 via-violet-500/15 to-purple-500/15 blur-2xl opacity-70" />

      {/* Strong neon glow (only when active) */}
      <div
        className={`pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-r from-fuchsia-500/40 via-violet-500/40 to-purple-500/40 blur-3xl transition-all duration-300 ${
          active ? "opacity-100 scale-105" : "opacity-0"
        }`}
      />

      {/* Main card */}
      <div
        className={`relative rounded-3xl border bg-white/5 backdrop-blur-xl p-6 transition-all duration-300
        ${
          active
            ? "border-violet-300/60 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            : "border-white/10"
        }
        hover:-translate-y-1 hover:scale-[1.02] hover:border-violet-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]`}
      >
        {children}
      </div>
    </div>
  );
}