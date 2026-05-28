import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between bg-stone-900 ">
      <Link href="/" className="text-amber-75 text-2xl font-black tracking-widest uppercase">
        MoviesTMDb
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="text-amber-75 hover:text-zinc-500 transition-colors">
          Películas
        </Link>
        <Link href="/tv" className="text-amber-75 hover:text-zinc-500 transition-colors">
          Series
        </Link>
      </div>
    </nav>
  );
}