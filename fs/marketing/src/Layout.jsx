import React, { Suspense } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";

export default function Layout() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Opsis - Platform Kesehatan Mata Komprehensif (Glaukoma)</title>
      </Head>
      <div className="min-h-screen flex flex-col font-['Lexend'] bg-[#fcf9f8] text-[#1c1b1b]">
        <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 h-20">
          <nav aria-label="Navigasi Utama" className="flex justify-between items-center max-w-[1100px] mx-auto w-full px-8 h-full">
            <Link to="/" className="text-3xl font-black text-[#003461] dark:text-blue-100 font-['Public_Sans'] tracking-tight">
              Opsis
            </Link>
            <div className="hidden md:flex items-center gap-10 h-full">
              <NavLink to="/" className={({ isActive }) => `font-['Public_Sans'] text-base font-bold tracking-tight h-full flex items-center transition-colors duration-200 ${isActive ? "text-[#003461] dark:text-blue-300 border-b-4 border-[#003461]" : "text-slate-700 dark:text-slate-400 hover:text-[#003461]"}`}>Beranda</NavLink>
              <NavLink to="/tentang" className={({ isActive }) => `font-['Public_Sans'] text-base font-bold tracking-tight h-full flex items-center transition-colors duration-200 ${isActive ? "text-[#003461] dark:text-blue-300 border-b-4 border-[#003461]" : "text-slate-700 dark:text-slate-400 hover:text-[#003461]"}`}>Tentang</NavLink>
              <NavLink to="/gejala" className={({ isActive }) => `font-['Public_Sans'] text-base font-bold tracking-tight h-full flex items-center transition-colors duration-200 ${isActive ? "text-[#003461] dark:text-blue-300 border-b-4 border-[#003461]" : "text-slate-700 dark:text-slate-400 hover:text-[#003461]"}`}>Gejala</NavLink>
              <NavLink to="/pengobatan" className={({ isActive }) => `font-['Public_Sans'] text-base font-bold tracking-tight h-full flex items-center transition-colors duration-200 ${isActive ? "text-[#003461] dark:text-blue-300 border-b-4 border-[#003461]" : "text-slate-700 dark:text-slate-400 hover:text-[#003461]"}`}>Pengobatan</NavLink>
              <NavLink to="/riset" className={({ isActive }) => `font-['Public_Sans'] text-base font-bold tracking-tight h-full flex items-center transition-colors duration-200 ${isActive ? "text-[#003461] dark:text-blue-300 border-b-4 border-[#003461]" : "text-slate-700 dark:text-slate-400 hover:text-[#003461]"}`}>Riset Terkini</NavLink>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <button aria-label="Ganti Tema" className="material-symbols-outlined text-slate-700 hover:bg-slate-50 p-2 rounded-full transition-all">contrast</button>
                <button aria-label="Atur Ukuran Teks" className="material-symbols-outlined text-slate-700 hover:bg-slate-50 p-2 rounded-full transition-all">text_fields</button>
              </div>
              <button className="bg-[#003461] text-white px-8 py-2.5 rounded-lg font-bold text-base hover:bg-[#004B87] transition-all shadow-sm">
                Masuk
              </button>
            </div>
          </nav>
        </header>

        <Suspense fallback={<div className="text-xs text-zinc-300 p-8 text-center">Memuat...</div>}>
          <Outlet />
        </Suspense>

        <footer className="bg-white dark:bg-slate-900 mt-auto border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-[1100px] mx-auto w-full py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="font-black text-[#003461] text-2xl tracking-tight font-['Public_Sans']">Opsis</div>
              <p className="font-['Public_Sans'] text-sm leading-relaxed text-slate-600 dark:text-slate-400 text-center md:text-left font-medium">
                © 2024 Opsis Health. <br className="md:hidden" /> Dirancang untuk kejelasan dan aksesibilitas kontras tinggi.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/" className="font-['Public_Sans'] text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-400 hover:text-[#003461] hover:underline underline-offset-4 transition-all">Beranda</Link>
              <Link to="/tentang" className="font-['Public_Sans'] text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-400 hover:text-[#003461] hover:underline underline-offset-4 transition-all">Tentang</Link>
              <Link to="/gejala" className="font-['Public_Sans'] text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-400 hover:text-[#003461] hover:underline underline-offset-4 transition-all">Gejala</Link>
              <Link to="/pengobatan" className="font-['Public_Sans'] text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-400 hover:text-[#003461] hover:underline underline-offset-4 transition-all">Pengobatan</Link>
              <Link to="/riset" className="font-['Public_Sans'] text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-400 hover:text-[#003461] hover:underline underline-offset-4 transition-all">Riset Terkini</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
