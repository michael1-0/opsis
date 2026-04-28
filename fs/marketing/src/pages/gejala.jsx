import React from "react";
import { Link } from "react-router-dom";

export default function Gejala() {
  return (
    <main className="flex-grow">
      <section className="max-w-[1100px] mx-auto px-8 pt-24 pb-20 text-center flex flex-col items-center">
        <h1 className="font-['Public_Sans'] text-4xl text-[#003461] mb-6 max-w-3xl font-bold">Mengenali Gejala Glaukoma</h1>
        <p className="font-['Lexend'] text-xl text-[#424750] max-w-2xl">
          Sering disebut sebagai "pencuri penglihatan senyap", glaukoma kerap berkembang tanpa tanda peringatan awal. Memahami gejala yang mungkin timbul adalah langkah krusial dalam melindungi lapang pandang Anda.
        </p>
      </section>

      <section className="bg-[#f6f3f2] py-20">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="font-['Public_Sans'] text-3xl font-bold text-[#003461] mb-12 text-center">Gejala Umum yang Perlu Diwaspadai</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] border-2 border-[#c2c6d1] rounded-xl p-8 flex flex-col items-start transition-colors duration-300 hover:border-[#003461]">
              <div className="bg-[#d3e4ff] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#003461] text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>visibility_off</span>
              </div>
              <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#1c1b1b] mb-4">Penyempitan Lapang Pandang</h3>
              <p className="font-['Lexend'] text-[#424750]">
                Hilangnya penglihatan tepi atau samping, sering terasa seperti melihat melalui sebuah terowongan. Ini adalah tanda khas glaukoma sudut terbuka tingkat lanjut.
              </p>
            </div>

            <div className="bg-[#ffffff] border-2 border-[#c2c6d1] rounded-xl p-8 flex flex-col items-start transition-colors duration-300 hover:border-[#003461]">
              <div className="bg-[#d3e4ff] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#003461] text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>blur_on</span>
              </div>
              <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#1c1b1b] mb-4">Lingkaran Cahaya</h3>
              <p className="font-['Lexend'] text-[#424750]">
                Melihat lingkaran menyerupai pelangi di sekitar lampu terang, terutama di malam hari. Gejala ini bisa disertai dengan penglihatan yang tiba-tiba kabur.
              </p>
            </div>

            <div className="bg-[#ffffff] border-2 border-[#c2c6d1] rounded-xl p-8 flex flex-col items-start transition-colors duration-300 hover:border-[#003461]">
              <div className="bg-[#ffdad6] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#93000a] text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>sick</span>
              </div>
              <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#1c1b1b] mb-4">Nyeri Mata Hebat</h3>
              <p className="font-['Lexend'] text-[#424750]">
                Rasa sakit yang tiba-tiba dan parah pada mata, seringkali disertai sakit kepala, mual, dan kemerahan. Ini mengindikasikan keadaan darurat medis (glaukoma sudut tertutup akut).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-['Public_Sans'] font-bold text-3xl text-[#003461]">Simulasi Perubahan Penglihatan</h2>
            <p className="font-['Lexend'] text-lg text-[#424750]">
              Kerusakan saraf optik akibat glaukoma terjadi secara perlahan. Karena otak kita pandai mengisi informasi visual yang hilang, Anda mungkin tidak menyadari penurunan penglihatan sampai kondisinya sudah sangat lanjut.
            </p>
            <p className="font-['Lexend'] text-lg text-[#424750]">
              Bandingkan kejernihan penglihatan normal dengan efeks penyempitan lapang pandang pada penderita glaukoma melalui simulasi di samping.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-[#e5e2e1] rounded-xl border-2 border-[#c2c6d1] overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d3e4ff] to-[#a3c9ff] opacity-60 mix-blend-multiply"></div>
                <span className="material-symbols-outlined text-[#003461] text-[64px] z-10 opacity-30">landscape</span>
              </div>
              <div className="text-center font-['Public_Sans'] font-bold text-[#1c1b1b]">Penglihatan Normal</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-[#e5e2e1] rounded-xl border-2 border-[#c2c6d1] overflow-hidden relative flex items-center justify-center shadow-[inset_0_0_60px_40px_rgba(28,27,27,0.8)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d3e4ff] to-[#a3c9ff] opacity-60 mix-blend-multiply"></div>
                <span className="material-symbols-outlined text-[#003461] text-[64px] z-10 opacity-30">landscape</span>
              </div>
              <div className="text-center font-['Public_Sans'] font-bold text-[#1c1b1b]">Penglihatan Glaukoma (Lanjut)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#a3c9ff] py-20">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="bg-[#fcf9f8] rounded-xl p-12 border-2 border-[#c2c6d1] shadow-sm flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="font-['Public_Sans'] font-bold text-3xl text-[#003461] mb-4">Mengapa Deteksi Dini Penting?</h2>
              <p className="font-['Lexend'] text-lg text-[#424750]">
                Kerusakan penglihatan akibat glaukoma bersifat permanen. Namun, dengan pengobatan yang tepat waktu, kehilangan penglihatan lebih lanjut dapat dicegah.
              </p>
            </div>
            <div className="md:w-2/3 flex flex-col gap-8 w-full">
              <div className="flex items-start gap-6 bg-[#ffffff] p-6 rounded-lg border-2 border-[#c2c6d1]">
                <span className="material-symbols-outlined text-[#003461] text-[32px] mt-1" style={{fontVariationSettings: "'FILL' 1"}}>shield</span>
                <div>
                  <h4 className="font-['Public_Sans'] font-bold text-xl text-[#1c1b1b] mb-2">Pencegahan Kebutaan</h4>
                  <p className="font-['Lexend'] text-sm text-[#424750]">Diagnosis dini adalah faktor terpenting dalam mencegah kebutaan total akibat glaukoma.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-[#ffffff] p-6 rounded-lg border-2 border-[#c2c6d1]">
                <span className="material-symbols-outlined text-[#003461] text-[32px] mt-1" style={{fontVariationSettings: "'FILL' 1"}}>update</span>
                <div>
                  <h4 className="font-['Public_Sans'] font-bold text-xl text-[#1c1b1b] mb-2">Perlambatan Progresi</h4>
                  <p className="font-['Lexend'] text-sm text-[#424750]">Terapi medis dapat menurunkan tekanan intraokular dan menghentikan kerusakan saraf lebih lanjut.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-[#ffffff] p-6 rounded-lg border-2 border-[#c2c6d1]">
                <span className="material-symbols-outlined text-[#003461] text-[32px] mt-1" style={{fontVariationSettings: "'FILL' 1"}}>health_and_safety</span>
                <div>
                  <h4 className="font-['Public_Sans'] font-bold text-xl text-[#1c1b1b] mb-2">Mempertahankan Kualitas Hidup</h4>
                  <p className="font-['Lexend'] text-sm text-[#424750]">Dengan lapang pandang yang terjaga, Anda dapat terus melakukan aktivitas sehari-hari dengan aman dan mandiri.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
