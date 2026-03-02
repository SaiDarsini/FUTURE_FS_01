import GlowCard from "../components/GlowCard";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </h2>

        <p className="mt-6 text-slate-300 leading-relaxed text-lg">
          I’m a <span className="text-sky-400 font-semibold">B.Tech CSE (Data Science)</span> student 
          passionate about building 
          <span className="text-indigo-400 font-semibold"> modern, scalable web applications</span> 
          and solving real-world problems through 
          <span className="text-purple-400 font-semibold"> data-driven thinking</span>.
        </p>

        <p className="mt-4 text-slate-300 leading-relaxed">
          I combine <span className="text-sky-400 font-semibold">Full Stack Development</span> 
          with strong foundations in 
          <span className="text-indigo-400 font-semibold"> Data Structures & Algorithms</span>, 
          allowing me to create clean, efficient, and impactful digital solutions. 
          Beyond theory, I focus on building practical projects that reflect 
          industry-ready skills and real-world understanding.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          
          <GlowCard>
            <h3 className="font-semibold text-white">
              🚀 Core Strengths
            </h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Responsive UI development, React components, Tailwind CSS styling, 
              Git & GitHub workflows, Python, Core Java, and strong DSA fundamentals.
            </p>
          </GlowCard>

          <GlowCard>
            <h3 className="font-semibold text-white">
              📚 Currently Expanding
            </h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Backend fundamentals (Node.js & Express), API integrations, 
              deployment strategies, scalable architecture concepts, and 
              improving consistency in competitive coding.
            </p>
          </GlowCard>

          <GlowCard>
            <h3 className="font-semibold text-white">
              🎯 Long-Term Vision
            </h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              To become a high-impact developer who bridges engineering and 
              analytics — building intelligent products that combine 
              performance, usability, and data insight.
            </p>
          </GlowCard>

        </div>
      </div>
    </section>
  );
}