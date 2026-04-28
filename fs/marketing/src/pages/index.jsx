import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="flex-grow w-full">
      <section aria-labelledby="hero-heading" className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="font-['Public_Sans'] font-bold text-[#003461] mb-6 leading-tight text-4xl md:text-5xl" id="hero-heading">Pahami Glaukoma dengan Opsis</h1>
            <p className="font-['Lexend'] text-xl text-slate-700 mb-10 max-w-lg leading-relaxed">
              Sering disebut sebagai "si pencuri penglihatan", Glaukoma merusak saraf mata secara perlahan tanpa rasa sakit. Pahami risikonya, lakukan skrining rutin, dan jaga kejernihan pandangan Anda hingga masa tua.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#003461] text-white h-[60px] px-10 rounded-lg font-['Public_Sans'] font-bold text-lg flex items-center justify-center hover:bg-[#004B87] transition-all shadow-md">
                Screening Sekarang
              </button>
              <button className="border-2 border-[#003461] text-[#003461] h-[60px] px-10 rounded-lg font-['Public_Sans'] text-lg flex items-center justify-center hover:bg-slate-50 transition-all font-bold">
                Tentang Opsis
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#d3e4ff] opacity-30 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#c2c6d1] shadow-2xl transform rotate-1">
              <img alt="Pemeriksaan mata profesional di klinik Opsis" className="w-full h-[480px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPfIUP0pDx1zTspJvdHGDa9bfNbA3UmHuPXXSoE9LOUM-1ZO_1pnZ_yRF1-y8IRtR3wsmjXmK5ea4R2EtaMyn0RFtOQlf_HW4kSl9UFCkGG1_kYv2DtW6v9mmP59WV6r2RyDAQmtjk9srD1O-hMoJYMKYNwq7zPmhHSfUY4NauazvLMfmPloVneGteyWhHNHBXo-qlRfZHYm7sZS7Z-2mgm6XrOy55ja4I5IVxmLSY4sa8Fl-Fqv2tdiIrILYEHY3aTupTATtwmjmY" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border-2 border-slate-200 shadow-2xl max-w-[260px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-[#2c694e] text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                <span className="font-['Public_Sans'] text-lg text-[#003461] font-bold">Presisi yang Mendampingi</span>
              </div>
              <p className="text-sm text-slate-700 font-['Lexend']">Menggunakan teknologi <i>Deep Learning</i> terkini untuk memberikan analisis awal yang membantu Anda memahami kondisi kesehatan saraf optik lebih cepat.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="understand-heading" className="py-24 bg-[#f6f3f2]">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Public_Sans'] font-bold text-[#003461] mb-4 text-3xl" id="understand-heading">Apa itu Glaukoma?</h2>
            <p className="font-['Lexend'] text-xl text-slate-700 max-w-2xl mx-auto">Glaukoma adalah kondisi rusaknya saraf mata akibat tekanan bola mata yang terlalu tinggi, yang jika dibiarkan dapat menyebabkan kehilangan penglihatan secara permanen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
            <div className="md:col-span-7 bg-white p-10 rounded-2xl border-2 border-[#c2c6d1] flex flex-col justify-between shadow-sm">
              <div>
                <span className="material-symbols-outlined text-[#003461] text-4xl mb-4">visibility</span>
                <h3 className="font-['Public_Sans'] text-2xl font-bold text-[#003461] mb-4">Hubungan Saraf Optik</h3>
                <p className="font-['Lexend'] text-lg text-slate-700">Glaukoma melibatkan kerusakan pada saraf optik, seringkali disebabkan oleh tekanan intraokular yang tinggi. Deteksi dini sangat penting karena kerusakan pada saraf tidak dapat dipulihkan.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#eae7e7] p-4 rounded-lg border border-slate-200">
                  <span className="font-['Public_Sans'] block text-[#003461] font-bold">Tekanan</span>
                  <span className="text-sm font-medium text-slate-600">Cairan Intraokular</span>
                </div>
                <div className="bg-[#eae7e7] p-4 rounded-lg border border-slate-200">
                  <span className="font-['Public_Sans'] block text-[#003461] font-bold">Saraf</span>
                  <span className="text-sm font-medium text-slate-600">Sinyal Visual</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#003461] text-white p-10 rounded-2xl flex flex-col justify-center relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <h3 className="font-['Public_Sans'] font-bold text-2xl mb-4">Si "Pencuri" Penglihatan</h3>
                <p className="font-['Lexend'] text-lg text-blue-50 mb-6 leading-relaxed">Glaukoma jarang menunjukkan gejala sampai kehilangan penglihatan sudah lanjut. Protokol screening proaktif Opsis mengidentifikasi faktor risiko bertahun-tahun sebelum gejala muncul.</p>
                <Link to="/gejala" className="font-['Public_Sans'] text-lg flex items-center gap-2 hover:gap-4 transition-all font-bold underline decoration-2 underline-offset-4">
                  Pelajari Gejala <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-[180px]">warning</span>
              </div>
            </div>

            <div className="md:col-span-4 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm bg-blue-50/50 border-[#c2c6d1] border-2">
              <span className="text-5xl font-black text-[#003461]">80JT+</span>
              <p className="font-['Public_Sans'] font-bold text-slate-700 mt-2">Diagnosis Global</p>
            </div>

            <div className="md:col-span-8 bg-white border-2 border-[#c2c6d1] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="flex-grow">
                <h3 className="font-['Public_Sans'] font-bold text-2xl text-[#003461] mb-2">Pencegahan &amp; Kontrol</h3>
                <p className="font-['Lexend'] text-lg text-slate-700">Meskipun kehilangan penglihatan akibat glaukoma bersifat permanen, rencana perawatan yang dipandu Opsis dan pemeriksaan rutin secara efektif menghentikan kerusakan lebih lanjut.</p>
              </div>
              <div className="w-24 h-24 bg-[#d3e4ff] rounded-full flex items-center justify-center shrink-0 border border-[#003461]/10">
                <span className="material-symbols-outlined text-[#003461] text-4xl">medical_services</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section aria-labelledby="timing-heading" className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-8 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#003461] rounded-2xl transform -rotate-3 scale-100 opacity-5"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img alt="Diagnosis presisi di Opsis" className="rounded-xl border-2 border-slate-200 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZJWQBrVpCi4gV3qtfCnFEcCW3oL0yDao7c7hPp1BOawF7w2Ac6sAWgG21QYnYv3F0j6a7rkEJVEkkg-sTaJxwZsHZgGDB5fT64FFkSuZq2hm63Y4UaWJMuJt0jQ5C0xs8Kfss7KJ3GAGQtOgqNGU_ywTYoKFJt5miO9hUncQ5Uc6wEncGgms3Isfsgb8t9vEe4k3NCU8dglyQ8XbTaIjG6AksyYpM5OCF-uTO1ya5lcwe3IXk6zRxUoZj1f-LCcmMWOwsuRRHuDY" />
                <img alt="Pemindaian pencitraan digital Opsis" className="rounded-xl border-2 border-slate-200 mt-8 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKV2oKIJloxRbFX4I-bIqnuDBOmiKMRq43VvaUSOTh834zsgVpVYVIRyfNFbI54IE1LDKL4oJUiAEWxwzksRUT3dgy-JU64rTCKxX8f7jnbxwDJjsgdtmEN4Wo5TLpAO82isAS-nbiXxrejoTOSh84PPToB_jeMoYoGBt-MSm0w7oBrWPY63xjoYTOhmKKWln3YDT9yHVPHXCG8FzSvWwpyPmMLERUvwuQeTzyRuAwLXHWwa5hGwjGgjpqCyjH5IgaI7ywcQv3Huzu" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="font-['Public_Sans'] font-bold text-[#003461] mb-6 text-3xl" id="timing-heading">Fitur Opsis</h2>
            <p className="font-['Lexend'] text-xl text-slate-700 mb-8 leading-relaxed">Deteksi dini bukan hanya tentang satu tes; ini tentang pemantauan berkelanjutan dengan fidelitas tinggi. Opsis mengintegrasikan screening klinis dengan pelacakan berbasis rumah untuk memastikan tidak ada perubahan tekanan yang terlewatkan.</p>
            <ul className="space-y-8" role="list">
              <li className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#d3e4ff] flex items-center justify-center shrink-0 border border-[#003461]/10"><span className="material-symbols-outlined text-[#003461] text-2xl">smart_toy</span></div>
                <div>
                  <h4 className="font-['Public_Sans'] text-xl text-[#003461] font-bold">Analisis Citra Deep Learning</h4>
                  <p className="text-slate-700 mt-1">Unggah hasil foto fundus Anda dan biarkan AI kami memberikan analisis awal mengenai indikasi kerusakan saraf secara instan.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#d3e4ff] flex items-center justify-center shrink-0 border border-[#003461]/10"><span className="material-symbols-outlined text-[#003461] text-2xl">medication</span></div>
                <div>
                  <h4 className="font-['Public_Sans'] text-xl text-[#003461] font-bold">Screening Risiko Machine Learning</h4>
                  <p className="text-slate-700 mt-1">Kuesioner adaptif yang memetakan profil risiko Anda berdasarkan gaya hidup, riwayat medis, dan faktor genetik.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#003461] text-white">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <h2 className="font-['Public_Sans'] font-bold mb-6 text-3xl">Visi Anda, Misi Kami</h2>
          <p className="font-['Lexend'] text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan ribuan pengguna lainnya yang telah mempercayakan kesehatan mata mereka kepada Opsis. Mulailah perjalanan deteksi dini Anda hari ini.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-[#003461] px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-lg">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Public_Sans'] font-bold text-[#003461] mb-4 text-3xl" id="faq-heading">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="space-y-4">
            <details className="group border border-[#c2c6d1] bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center font-['Public_Sans'] font-bold text-lg cursor-pointer list-none p-6 text-[#003461] hover:bg-slate-50 transition-colors">
                <span>Apa itu Glaukoma?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-slate-700 font-['Lexend'] p-6 pt-0 leading-relaxed">
                Glaukoma adalah kelompok kondisi mata yang merusak saraf optik...
              </p>
            </details>
            <details className="group border border-[#c2c6d1] bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center font-['Public_Sans'] font-bold text-lg cursor-pointer list-none p-6 text-[#003461] hover:bg-slate-50 transition-colors">
                <span>Bagaimana Opsis membantu saya?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-slate-700 font-['Lexend'] p-6 pt-0 leading-relaxed">
                Opsis menyediakan alat deteksi dini dan pendampingan pengelolaan...
              </p>
            </details>
            <details className="group border border-[#c2c6d1] bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center font-['Public_Sans'] font-bold text-lg cursor-pointer list-none p-6 text-[#003461] hover:bg-slate-50 transition-colors">
                <span>Apakah Opsis dapat menggantikan pemeriksaan dokter?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-slate-700 font-['Lexend'] p-6 pt-0 leading-relaxed">
                Tidak, Opsis adalah alat pendukung. Selalu konsultasikan hasil dengan tenaga medis profesional.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
