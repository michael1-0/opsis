import React from "react";
import { Link } from "react-router-dom";

export default function Pengobatan() {
  return (
    <main className="flex-grow w-full max-w-[1100px] mx-auto px-8 py-10 flex flex-col gap-10">
      <section className="bg-[#f6f3f2] rounded-xl p-10 border-2 border-[#c2c6d1] flex flex-col gap-6">
        <div className="max-w-3xl flex flex-col gap-2">
          <h1 className="font-['Public_Sans'] font-bold text-4xl text-[#003461]">Pilihan Pengobatan Glaukoma yang Tersedia</h1>
          <p className="font-['Lexend'] text-xl text-[#424750]">
            Tujuan utama pengobatan glaukoma adalah menurunkan tekanan pada mata (Tekanan Intraokular) untuk mencegah kerusakan saraf mata lebih lanjut. Dokter akan merekomendasikan metode yang paling sesuai dengan kondisi Anda.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-['Public_Sans'] font-bold text-3xl text-[#003461]">Metode Pengobatan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#ffffff] rounded-xl p-6 border-2 border-[#c2c6d1] flex flex-col gap-2 focus-within:ring-4 focus-within:ring-[#003461] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-full bg-[#d3e4ff] text-[#003461] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">water_drop</span>
              </div>
              <span className="bg-[#2c694e] text-white px-3 py-1 rounded-full font-['Public_Sans'] font-bold text-sm border-2 border-[#b1f0ce]">Umum Digunakan</span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#1c1b1b]">Obat Tetes Mata</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] flex-grow">
              Penanganan pertama dan paling umum. Bekerja dengan mengurangi produksi cairan mata atau meningkatkan aliran keluarnya cairan untuk menurunkan tekanan.
            </p>
            <button className="mt-4 border-2 border-[#003461] text-[#003461] font-['Public_Sans'] font-bold rounded-full min-h-[48px] px-6 hover:bg-[#d3e4ff] focus:ring-4 w-full sm:w-auto self-start">
              Pelajari Cara Penggunaan
            </button>
          </div>

          <div className="bg-[#ffffff] rounded-xl p-6 border-2 border-[#c2c6d1] flex flex-col gap-2 focus-within:ring-4 focus-within:ring-[#003461] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-full bg-[#d3e4ff] text-[#003461] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">flare</span>
              </div>
              <span className="bg-[#2c694e] text-white px-3 py-1 rounded-full font-['Public_Sans'] font-bold text-sm border-2 border-[#b1f0ce]">Tingkat Keberhasilan Tinggi</span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#1c1b1b]">Terapi Laser (SLT/ALT)</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] flex-grow">
              Prosedur rawat jalan menggunakan sinar laser untuk membuka saluran drainase yang tersumbat di dalam mata. Biasanya direkomendasikan jika tetes mata kurang efektif.
            </p>
            <button className="mt-4 border-2 border-[#003461] text-[#003461] font-['Public_Sans'] font-bold rounded-full min-h-[48px] px-6 hover:bg-[#d3e4ff] focus:ring-4 w-full sm:w-auto self-start">
              Baca Tentang Prosedur Laser
            </button>
          </div>

          <div className="bg-[#ffffff] rounded-xl p-6 border-2 border-[#c2c6d1] flex flex-col gap-2 focus-within:ring-4 focus-within:ring-[#003461] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-full bg-[#d3e4ff] text-[#003461] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">microbiology</span>
              </div>
              <span className="bg-[#e5e2e1] text-[#424750] px-3 py-1 rounded-full font-['Public_Sans'] font-bold text-sm border-2 border-[#727781]">Inovasi Terbaru</span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#1c1b1b]">Operasi MIGS</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] flex-grow">
              Bedah Glaukoma Invasif Minimal. Menggunakan peralatan mikroskopis untuk membuat sayatan kecil, sering dilakukan bersamaan dengan operasi katarak.
            </p>
            <button className="mt-4 border-2 border-[#003461] text-[#003461] font-['Public_Sans'] font-bold rounded-full min-h-[48px] px-6 hover:bg-[#d3e4ff] focus:ring-4 w-full sm:w-auto self-start">
              Apa itu MIGS?
            </button>
          </div>

          <div className="bg-[#ffffff] rounded-xl p-6 border-2 border-[#c2c6d1] flex flex-col gap-2 focus-within:ring-4 focus-within:ring-[#003461] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-full bg-[#d3e4ff] text-[#003461] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">medical_services</span>
              </div>
              <span className="bg-[#2d343a] text-white px-3 py-1 rounded-full font-['Public_Sans'] font-bold text-sm border-2 border-[#dce3eb]">Penanganan Lanjut</span>
            </div>
            <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#1c1b1b]">Trabekulektomi</h3>
            <p className="font-['Lexend'] text-lg text-[#424750] flex-grow">
              Prosedur bedah tradisional untuk membuat saluran drainase baru pada mata. Dilakukan ketika pengobatan dan terapi laser tidak dapat mengontrol tekanan mata.
            </p>
            <button className="mt-4 border-2 border-[#003461] text-[#003461] font-['Public_Sans'] font-bold rounded-full min-h-[48px] px-6 hover:bg-[#d3e4ff] focus:ring-4 w-full sm:w-auto self-start">
              Detail Operasi
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] rounded-xl p-10 border-2 border-[#c2c6d1] flex flex-col gap-6 mt-8">
        <h2 className="font-['Public_Sans'] font-bold text-3xl text-[#003461]">Tahapan Perjalanan Perawatan Anda</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-4 relative">
          <div className="hidden md:block absolute top-[24px] left-[24px] right-[24px] h-[4px] bg-[#e5e2e1] z-0"></div>
          <div className="flex-1 flex flex-col gap-4 relative z-10 bg-[#ffffff] p-4 rounded-lg border-2 border-transparent hover:border-[#c2c6d1] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#003461] text-white flex items-center justify-center font-['Public_Sans'] font-bold text-xl border-4 border-[#ffffff]">1</div>
            <h3 className="font-['Public_Sans'] font-bold text-lg text-[#1c1b1b]">Diagnosis Terperinci</h3>
            <p className="font-['Lexend'] text-lg text-[#424750]">Pemeriksaan menyeluruh pada tekanan mata, saraf optik, dan lapang pandang Anda.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 relative z-10 bg-[#ffffff] p-4 rounded-lg border-2 border-transparent hover:border-[#c2c6d1] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#e5e2e1] text-[#424750] flex items-center justify-center font-['Public_Sans'] font-bold text-xl border-4 border-[#ffffff]">2</div>
            <h3 className="font-['Public_Sans'] font-bold text-lg text-[#1c1b1b]">Rencana Pengobatan</h3>
            <p className="font-['Lexend'] text-lg text-[#424750]">Dokter menyusun strategi yang disesuaikan dengan jenis dan tingkat keparahan glaukoma.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 relative z-10 bg-[#ffffff] p-4 rounded-lg border-2 border-transparent hover:border-[#c2c6d1] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#e5e2e1] text-[#424750] flex items-center justify-center font-['Public_Sans'] font-bold text-xl border-4 border-[#ffffff]">3</div>
            <h3 className="font-['Public_Sans'] font-bold text-lg text-[#1c1b1b]">Pelaksanaan</h3>
            <p className="font-['Lexend'] text-lg text-[#424750]">Memulai rutinitas tetes mata harian atau menjadwalkan prosedur klinis sesuai rencana.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 relative z-10 bg-[#ffffff] p-4 rounded-lg border-2 border-transparent hover:border-[#c2c6d1] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#e5e2e1] text-[#424750] flex items-center justify-center font-['Public_Sans'] font-bold text-xl border-4 border-[#ffffff]">4</div>
            <h3 className="font-['Public_Sans'] font-bold text-lg text-[#1c1b1b]">Evaluasi Berkala</h3>
            <p className="font-['Lexend'] text-lg text-[#424750]">Kunjungan rutin untuk memantau tekanan mata dan efektivitas pengobatan.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2 className="font-['Public_Sans'] font-bold text-3xl text-[#003461]">Tips Kepatuhan Pengobatan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#f6f3f2] p-6 rounded-xl border-2 border-[#c2c6d1] flex items-start gap-4">
            <span className="material-symbols-outlined text-[#003461] text-[32px]">alarm</span>
            <div>
              <h4 className="font-['Public_Sans'] font-bold text-lg text-[#1c1b1b]">Gunakan Alarm</h4>
              <p className="font-['Lexend'] text-lg text-[#424750] mt-2">Pasang pengingat di ponsel agar tetes mata digunakan pada waktu yang sama setiap hari.</p>
            </div>
          </div>
          <div className="bg-[#f6f3f2] p-6 rounded-xl border-2 border-[#c2c6d1] flex items-start gap-4">
            <span className="material-symbols-outlined text-[#003461] text-[32px]">hourglass_empty</span>
            <div>
              <h4 className="font-['Public_Sans'] font-bold text-lg text-[#1c1b1b]">Beri Jeda Waktu</h4>
              <p className="font-['Lexend'] text-lg text-[#424750] mt-2">Jika menggunakan lebih dari satu obat tetes, beri jeda minimal 5 menit antar tetesan.</p>
            </div>
          </div>
          <div className="bg-[#f6f3f2] p-6 rounded-xl border-2 border-[#c2c6d1] flex items-start gap-4">
            <span className="material-symbols-outlined text-[#003461] text-[32px]">inventory</span>
            <div>
              <h4 className="font-['Public_Sans'] font-bold text-lg text-[#1c1b1b]">Cek Stok Obat</h4>
              <p className="font-['Lexend'] text-lg text-[#424750] mt-2">Pastikan stok obat tersedia sebelum habis untuk menghindari jeda dalam pengobatan.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
