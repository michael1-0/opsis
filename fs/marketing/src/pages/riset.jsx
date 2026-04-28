import React from "react";
import { Link } from "react-router-dom";

export default function Riset() {
  return (
    <main className="max-w-[1100px] mx-auto px-8 py-10 min-h-screen w-full">
      <section className="mb-10 bg-[#ffffff] border-2 border-[#e5e2e1] rounded-lg p-8 md:p-12 relative overflow-hidden focus-within:ring-4 focus-within:ring-[#003461] transition-colors">
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-['Public_Sans'] font-bold text-4xl text-[#003461] mb-6">Riset &amp; Inovasi Terkini dalam Penanganan Glaukoma</h1>
          <p className="font-['Lexend'] text-xl text-[#424750] mb-8">
            Telusuri perkembangan terbaru dalam penelitian glaukoma, mulai dari terapi farmakologis inovatif hingga penerapan kecerdasan buatan dalam deteksi dini.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-['Public_Sans'] font-bold text-3xl text-[#1c1b1b] mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#003461]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          Sorotan Utama
        </h2>
        <article className="bg-[#ffffff] border-2 border-[#e5e2e1] rounded-lg overflow-hidden grid md:grid-cols-2 gap-0 focus-within:ring-4 focus-within:ring-[#003461] hover:border-[#003461] transition-colors group cursor-pointer">
          <div className="h-64 md:h-auto bg-[#e5e2e1] relative">
            <img alt="medical researcher" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpWT7G2ALWsVTnQlWfhaFZzJ4EVXdqJWe6aRg5MbHoJvX8-GG_SBPDAUPBYUoD9g9U1SZVdJS2EJFeSiafRv-gdlxRd6BFIt7Rjng-YCJmV7WnHaQ0J7mhRpBws2LzSZmJFSC5Fc7d7NaXAjqwXy8uu60yr6xUoi7Kb9Kwg5yvSJ8ueU4GzQE00zgxGI8cuKeGxFd98TGOKoxbhS3euMbeWW_H8_nxCPRXRmfS01dlnls18TafT0uLmOb4daB6TjDG0-7FwxhNRrKy" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#aeeecb] text-[#316e52] font-['Public_Sans'] font-bold text-sm px-3 py-1 rounded-full">Penelitian Klinis</span>
              <span className="font-['Lexend'] text-sm text-[#727781] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                15 Okt 2024
              </span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#003461] mb-4 group-hover:underline decoration-2 underline-offset-4">Kemajuan Terapi Sel Punca untuk Regenerasi Saraf Optik</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] mb-6 line-clamp-3">
              Sebuah studi klinis fase II menunjukkan hasil yang menjanjikan dalam penggunaan sel punca mesenkimal untuk memperlambat dan berpotensi membalikkan kerusakan saraf optik pada pasien dengan glaukoma sudut terbuka primer.
            </p>
            <div className="flex items-center gap-2 font-['Public_Sans'] font-bold text-[#003461] mt-auto">
              Baca Selengkapnya
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </article>
      </section>

      <section className="mb-10">
        <h2 className="font-['Public_Sans'] font-bold text-3xl text-[#1c1b1b] mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#003461]" style={{fontVariationSettings: "'FILL' 1"}}>article</span>
          Artikel Lainnya
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-[#ffffff] border-2 border-[#e5e2e1] rounded-lg p-6 flex flex-col hover:border-[#003461] transition-colors group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#dce3eb] text-[#151c22] font-['Public_Sans'] font-bold text-sm px-3 py-1 rounded-full">Teknologi Medis</span>
              <span className="material-symbols-outlined text-[#727781]">bookmark_border</span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-lg text-[#003461] mb-3 group-hover:underline decoration-2 underline-offset-4">AI Tingkatkan Akurasi Deteksi Dini Glaukoma</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] mb-6 flex-grow line-clamp-3">
              Implementasi algoritma deep learning pada pemindaian OCT menunjukkan peningkatan akurasi hingga 95% dalam mendeteksi perubahan awal pada lapisan serabut saraf retina.
            </p>
            <div className="pt-4 border-t-2 border-[#e5e2e1] flex items-center justify-between mt-auto">
              <span className="font-['Lexend'] text-sm text-[#727781]">Jurnal Oftalmologi</span>
              <span className="font-['Lexend'] text-sm text-[#727781]">28 Sep 2024</span>
            </div>
          </article>

          <article className="bg-[#ffffff] border-2 border-[#e5e2e1] rounded-lg p-6 flex flex-col hover:border-[#003461] transition-colors group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#d3e4ff] text-[#001c38] font-['Public_Sans'] font-bold text-sm px-3 py-1 rounded-full">Farmakologi</span>
              <span className="material-symbols-outlined text-[#727781]">bookmark_border</span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-lg text-[#003461] mb-3 group-hover:underline decoration-2 underline-offset-4">Pengembangan Obat Tetes Mata Bebas Pengawet Generasi Baru</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] mb-6 flex-grow line-clamp-3">
              Formulasi terbaru obat penurun TIO menunjukkan efektivitas tinggi dengan efek samping permukaan mata yang minimal, meningkatkan kepatuhan pasien secara signifikan.
            </p>
            <div className="pt-4 border-t-2 border-[#e5e2e1] flex items-center justify-between mt-auto">
              <span className="font-['Lexend'] text-sm text-[#727781]">Farmasi Klinis</span>
              <span className="font-['Lexend'] text-sm text-[#727781]">12 Sep 2024</span>
            </div>
          </article>

          <article className="bg-[#ffffff] border-2 border-[#e5e2e1] rounded-lg p-6 flex flex-col hover:border-[#003461] transition-colors group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#aeeecb] text-[#316e52] font-['Public_Sans'] font-bold text-sm px-3 py-1 rounded-full">Studi Pasien</span>
              <span className="material-symbols-outlined text-[#727781]">bookmark_border</span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-lg text-[#003461] mb-3 group-hover:underline decoration-2 underline-offset-4">Dampak Modifikasi Gaya Hidup Terhadap Progresivitas Glaukoma</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] mb-6 flex-grow line-clamp-3">
              Studi kohort jangka panjang menyoroti korelasi antara aktivitas aerobik ringan, manajemen stres, dan stabilitas tekanan intraokular pada pasien usia lanjut.
            </p>
            <div className="pt-4 border-t-2 border-[#e5e2e1] flex items-center justify-between mt-auto">
              <span className="font-['Lexend'] text-sm text-[#727781]">Health &amp; Wellness</span>
              <span className="font-['Lexend'] text-sm text-[#727781]">05 Sep 2024</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
