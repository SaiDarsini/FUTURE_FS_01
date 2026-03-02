import { useState } from "react";
import GlowCard from "../components/GlowCard";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-3 text-slate-300">
          
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <GlowCard
              key={p.title}
              active={activeIndex === i}
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>

              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-2xl bg-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-fuchsia-400 shadow-lg shadow-violet-500/25 hover:shadow-fuchsia-500/30"
                >
                  Live
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-violet-400/40"
                >
                  GitHub
                </a>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}