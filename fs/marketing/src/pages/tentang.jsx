import React from "react";
import { Link } from "react-router-dom";

export default function Tentang() {
  return (
    <main className="flex-grow w-full max-w-[1100px] mx-auto px-6 md:px-8 py-12 space-y-16">
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-3/5 space-y-6">
          <h1 className="font-['Public_Sans'] text-4xl text-[#1c1b1b] font-bold">Tentang Opsis</h1>
          <p className="font-['Lexend'] text-xl text-[#424750] leading-relaxed">
            Glaukoma merupakan salah satu penyebab kebutaan permanen terbesar di dunia. Penyakit ini seringkali tidak menunjukkan gejala pada tahap awal, menyoroti urgensi hadirnya solusi deteksi dini yang mudah diakses dan dapat diandalkan bagi masyarakat luas.
          </p>
        </div>
        <div className="w-full md:w-2/5 relative rounded-xl overflow-hidden border-2 border-[#dcd9d9] h-[300px] bg-[#f0eded]">
          <img alt="abstract soft light" className="object-cover w-full h-full opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvDLeBkhkWqhxKNY3Nt1MRAX3xLA0ksFZN4Ud2g7jGYMnYDlGWywv_cFmT0wNX-qtDBV6e0GtqL-cyvOyeiaRWA6F58A2ljFRrULAlkLHRAn0_3Hfo55mVQrHRQIbX8zOTPgLg3Z8Y3Sj0rcE7hXyXkpjz7L3wOt3WQTZfGargfqBzFbvgdQhf2pSJexGBAW7soQ-Y3wpb4euS3N2tHLefS2caPEaY_FYq0F6gNjrVm0P6oVmmsgyStijPsxHLqJtUosWZfqY3UqAu" />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="font-['Public_Sans'] text-3xl text-[#1c1b1b] font-bold border-b-2 border-[#dcd9d9] pb-4">
          Misi Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 bg-[#ffffff] border-2 border-[#dcd9d9] rounded-xl p-8 hover:border-[#003461] transition-colors focus-within:ring-4 focus-within:ring-[#003461]">
            <p className="font-['Lexend'] text-xl text-[#1c1b1b]">
              Opsis hadir sebagai solusi komprehensif yang menjembatani kesenjangan akses terhadap perawatan glaukoma. Kami menggabungkan teknologi mutakhir dengan pendekatan yang berpusat pada manusia untuk memberdayakan pasien dalam memantau kesehatan mata mereka.
            </p>
          </div>

          <div className="bg-[#ffffff] border-2 border-[#dcd9d9] rounded-xl p-6 flex flex-col gap-4 hover:border-[#003461] transition-colors focus-within:ring-4 focus-within:ring-[#003461]">
            <div className="w-12 h-12 bg-[#004b87] text-[#8abcff] rounded-full flex items-center justify-center border-2 border-[#d3e4ff]">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            </div>
            <h3 className="font-['Public_Sans'] text-lg text-[#1c1b1b] font-semibold">Deep Learning</h3>
            <p className="font-['Lexend'] text-[#424750] flex-grow">
              Menganalisis gambar mata untuk melakukan deteksi awal dan skrining risiko secara mandiri, memberikan wawasan cepat sebelum kunjungan klinis.
            </p>
          </div>

          <div className="bg-[#ffffff] border-2 border-[#dcd9d9] rounded-xl p-6 flex flex-col gap-4 hover:border-[#003461] transition-colors focus-within:ring-4 focus-within:ring-[#003461]">
            <div className="w-12 h-12 bg-[#004b87] text-[#8abcff] rounded-full flex items-center justify-center border-2 border-[#d3e4ff]">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>smart_toy</span>
            </div>
            <h3 className="font-['Public_Sans'] text-lg text-[#1c1b1b] font-semibold">Kecerdasan Buatan (Gen AI)</h3>
            <p className="font-['Lexend'] text-[#424750] flex-grow">
              Asisten virtual pintar yang siap menjawab pertanyaan seputar glaukoma, memberikan edukasi yang personal dan mudah dipahami.
            </p>
          </div>

          <div className="bg-[#ffffff] border-2 border-[#dcd9d9] rounded-xl p-6 flex flex-col gap-4 hover:border-[#003461] transition-colors focus-within:ring-4 focus-within:ring-[#003461]">
            <div className="w-12 h-12 bg-[#004b87] text-[#8abcff] rounded-full flex items-center justify-center border-2 border-[#d3e4ff]">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>forum</span>
            </div>
            <h3 className="font-['Public_Sans'] text-lg text-[#1c1b1b] font-semibold">Komunitas &amp; Pengingat</h3>
            <p className="font-['Lexend'] text-[#424750] flex-grow">
              Fitur pengingat obat terintegrasi dan forum dukungan pasien untuk memastikan kedisiplinan pengobatan dan dukungan moral berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8 pb-12">
        <h2 className="font-['Public_Sans'] text-3xl text-[#1c1b1b] font-bold border-b-2 border-[#dcd9d9] pb-4">
          Ekosistem Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f6f3f2] border-2 border-[#dcd9d9] rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-[#003461]">
            <div className="h-[160px] bg-[#dce3eb] flex items-center justify-center border-b-2 border-[#dcd9d9]">
              <span className="material-symbols-outlined text-6xl text-[#003461]">menu_book</span>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-['Public_Sans'] text-2xl text-[#1c1b1b] font-bold">Portal Edukasi Publik</h3>
              <p className="font-['Lexend'] text-[#424750]">
                Bagian terbuka dari platform kami yang didedikasikan untuk meningkatkan kesadaran masyarakat. Temukan artikel komprehensif mengenai gejala, metode pengobatan terkini, dan panduan pencegahan glaukoma tanpa perlu mendaftar.
              </p>
            </div>
          </div>

          <div className="bg-[#f6f3f2] border-2 border-[#dcd9d9] rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-[#003461]">
            <div className="h-[160px] bg-[#d3e4ff] flex items-center justify-center border-b-2 border-[#dcd9d9]">
              <span className="material-symbols-outlined text-6xl text-[#003461]">health_metrics</span>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-['Public_Sans'] text-2xl text-[#1c1b1b] font-bold">Aplikasi Pasien Khusus</h3>
              <p className="font-['Lexend'] text-[#424750]">
                Ruang personal yang aman setelah proses masuk (login). Akses alat deteksi dini berbasis AI, rekam medis mandiri, jadwal pengingat tetes mata, dan terhubung dengan komunitas sesama pasien untuk saling mendukung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
