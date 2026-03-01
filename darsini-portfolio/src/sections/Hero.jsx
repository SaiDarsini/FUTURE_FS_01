export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sky-400 font-medium">Full Stack Developer (Intern)</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Hi, I’m Sai Darsini. <br />
            I build clean & responsive web apps.
          </h1>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Full Stack Developer | Data Science Student | Turning Code into Impact

I am a B.Tech CSE (Data Science) student with expertise in Full Stack Development and Data Analytics.

I specialize in building modern web applications using React and Tailwind CSS while applying strong Data Structures and Algorithms knowledge to write efficient code.

Beyond theory, I focus on building practical solutions that solve real problems and reflect industry-ready skills.          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-400 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 hover:border-slate-500 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 hover:border-slate-500 transition"
              target="_blank"
              rel="noreferrer"
            >
              Resume (PDF)
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-slate-300">
            <a className="hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-white" href="mailto:yourmail@gmail.com">Email</a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {["HTML","Python","Java","DSA","C","C++","Power BI","Machine Learning", "Seaborn and Matplotlib","CSS", "JavaScript", "React", "Tailwind", "GitHub"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950/60 p-5 border border-slate-800">
            <p className="text-slate-300 text-sm">
              Current goal: Build 3–5 strong projects + deploy them + write clean README files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}