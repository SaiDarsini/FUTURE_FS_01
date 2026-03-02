export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sky-400 font-medium drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
            Full Stack Developer (Intern)
          </p>

          {/* 🔥 Animated Premium Heading */}
          <h1 className="relative mt-3 text-4xl font-bold leading-tight md:text-5xl">
            
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent glow-text">
              Hi, I’m Sai Darsini.
              <br />
              I build clean & responsive web apps.
            </span>

            {/* Moving light sweep effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-[shine_4s_linear_infinite] mix-blend-overlay pointer-events-none" />
          </h1>

          <p className="mt-5 text-slate-300 leading-relaxed">
            Full Stack Developer | Data Science Student | Turning Code into Impact
            <br /><br />
            I am a B.Tech CSE (Data Science) student with expertise in Full Stack Development and Data Analytics.
            <br /><br />
            I specialize in building modern web applications using React and Tailwind CSS while applying strong Data Structures and Algorithms knowledge to write efficient code.
            <br /><br />
            Beyond theory, I focus on building practical solutions that solve real problems and reflect industry-ready skills.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition"
              target="_blank"
              rel="noreferrer"
            >
              Resume (PDF)
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-slate-300">
            <a className="hover:text-sky-400 transition" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-sky-400 transition" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-sky-400 transition" href="mailto:yourmail@gmail.com">Email</a>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-xl">
          <h2 className="text-xl font-semibold text-white">Tech Stack</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "HTML",
              "Python",
              "Java",
              "DSA",
              "C",
              "C++",
              "Power BI",
              "Machine Learning",
              "Seaborn & Matplotlib",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm text-slate-200 hover:shadow-[0_0_10px_rgba(56,189,248,0.4)] transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950/60 p-5 border border-white/10">
            <p className="text-slate-300 text-sm">
              Current goal: Build 3–5 strong projects + deploy them + write clean README files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}