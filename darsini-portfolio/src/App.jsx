import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#05010d] via-slate-950 to-black text-slate-100">
      {/* Neon background blobs */}
      <div className="pointer-events-none absolute -top-56 -left-56 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-24 -right-56 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[520px] w-[520px] rounded-full bg-purple-500/15 blur-3xl" />

      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_55%)]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}