export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Darsini. All rights reserved.</p>
        <p className="text-slate-500">Built with React + Tailwind • Deployed on Vercel</p>
      </div>
    </footer>
  );
}