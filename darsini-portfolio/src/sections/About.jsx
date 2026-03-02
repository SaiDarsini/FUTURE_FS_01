import GlowCard from "../components/GlowCard";

export default function About() {
  return (
    <section id="about" className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">About</h2>

        <p className="mt-4 text-slate-300 leading-relaxed">
          I’m a 2nd-year B.Tech CSE (Data Science) student. I enjoy building modern
          web interfaces with React, learning full-stack fundamentals, and improving
          my problem-solving skills. My analytical mindset helps me bridge user
          experience with data-driven thinking, and I’m looking for opportunities
          where I can learn and contribute as a developer.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <GlowCard>
            <h3 className="font-semibold">What I’m good at</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Responsive UI, React components, Tailwind styling, Git & GitHub,
              Python, Core Java, DSA fundamentals, and basic data analytics.
            </p>
          </GlowCard>

          <GlowCard>
            <h3 className="font-semibold">Currently learning</h3>
            <p className="mt-2 text-slate-300 text-sm">
              APIs, backend basics (Node/Express), deployment workflows, writing
              better project case studies, and improving coding consistency.
            </p>
          </GlowCard>

          <GlowCard>
            <h3 className="font-semibold">Goal</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Build strong real-world projects, grow as a developer and data
              enthusiast, and secure a good internship/job through a strong
              portfolio.
            </p>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}