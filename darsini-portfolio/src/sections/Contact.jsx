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
    <section id="contact" className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-3 text-slate-300">
          Want to collaborate or hire me? Send a message.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
            <h3 className="text-xl font-semibold">Details</h3>
            <div className="mt-4 space-y-2 text-slate-300">
              <p>Email: <a className="text-sky-400 hover:underline" href="mailto:yourmail@gmail.com">saidarsini05@gmail.com</a></p>
              <p>GitHub: <a className="text-sky-400 hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">https://github.com/SaiDarsini</a></p>
              <p>LinkedIn: <a className="text-sky-400 hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/sai-darsini-s-893967322</a></p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
          >
            <label className="text-sm text-slate-300">Name</label>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
              placeholder="Your name"
            />

            <label className="mt-4 block text-sm text-slate-300">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
              placeholder="your@email.com"
            />

            <label className="mt-4 block text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
              placeholder="Write your message..."
            />

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-400 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-sm text-slate-300">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}