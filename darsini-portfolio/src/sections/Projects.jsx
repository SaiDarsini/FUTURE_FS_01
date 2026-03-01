import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-3 text-slate-300">
          Here are a few projects I’ve built. Each one is deployed and has source code.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-200"
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
                  className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition"
                >
                  Live
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold hover:border-slate-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}