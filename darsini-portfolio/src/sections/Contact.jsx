import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkovawvp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("✅ Message sent successfully!");
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch {
      setStatus("❌ Network error. Try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950"
    >
      {/* Glow Background Lights */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <p className="mt-3 text-slate-300">
          Want to collaborate or hire me? Send a message.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          
          {/* Details Card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl opacity-60" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-semibold text-white">Details</h3>
              <div className="mt-4 space-y-2 text-slate-300">
                <p>
                  Email:{" "}
                  <a
                    className="text-sky-400 hover:underline"
                    href="mailto:saidarsini05@gmail.com"
                  >
                    saidarsini05@gmail.com
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    className="text-sky-400 hover:underline"
                    href="https://github.com/SaiDarsini"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/SaiDarsini
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    className="text-sky-400 hover:underline"
                    href="https://www.linkedin.com/in/sai-darsini-s-893967322"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.linkedin.com/in/sai-darsini-s-893967322
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-2xl opacity-60" />
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl"
            >
              <label className="text-sm text-slate-300">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-400 transition duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 focus:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                placeholder="Your name"
              />

              <label className="mt-4 block text-sm text-slate-300">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-400 transition duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 focus:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                placeholder="your@email.com"
              />

              <label className="mt-4 block text-sm text-slate-300">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-400 transition duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 focus:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                placeholder="Write your message..."
              />

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-4 text-sm text-slate-300">{status}</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}