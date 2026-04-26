import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Head } from "vite-react-ssg";

export default function Layout() {
  const [state, setState] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />
        <title>head test {state ? "A" : "B"}</title>
        <body />
      </Head>
      <main className="max-w-2xl mx-auto px-6 py-12 font-sans">
        <header className="mb-12 flex justify-between items-baseline font-sans">
          <h1 className="text-sm font-medium tracking-tight">Opsis</h1>
          <nav>
            <button 
              type="button" 
              onClick={() => setState((v) => !v)}
              className="text-[11px] uppercase tracking-widest text-zinc-400 hover:text-zinc-600 font-sans"
            >
              Mode {state ? "A" : "B"}
            </button>
          </nav>
        </header>

        <section className="min-h-[60vh] font-sans">
          <Suspense fallback={<div className="text-xs text-zinc-300 font-sans">Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>

        <footer className="mt-24 pt-8 border-t border-zinc-50 font-sans">
          <p className="text-[10px] text-zinc-300 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} &mdash; Index
          </p>
        </footer>
      </main>
    </>
  );
}
