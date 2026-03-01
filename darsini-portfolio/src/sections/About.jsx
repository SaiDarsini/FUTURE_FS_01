export default function About() {
  return (
    <section id="about" className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          I’m a 2nd-year B.Tech CSE(Data Science) student. I enjoy building modern web interfaces,
          learning full-stack basics, and improving my problem-solving skills.
          I’m looking for opportunities where I can learn and contribute as a developer.
My analytical mindset allows me to bridge the gap between user experience and data-driven decision making.

I create responsive, scalable web applications with React and modern frontend technologies, backed by strong foundations in data analytics and problem solving.


        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
            <h3 className="font-semibold">What I’m good at</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Responsive UI, Python and Java(DSA), Problem solving skils, Data Analytics, C++, React components, clean layouts, GitHub documentation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
            <h3 className="font-semibold">Currently learning</h3>
            <p className="mt-2 text-slate-300 text-sm">
              APIs, data analytics, improving coding and technical skills , developing projects , frontend and backend basics, deployment, and writing better project case studies.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
            <h3 className="font-semibold">Goal</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Become a Data Scientist . Get a strong internship/job by showcasing real deployed projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}