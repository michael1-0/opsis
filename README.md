# Opsis

Glaukoma merupakan salah satu penyebab kebutaan permanen terbesar di dunia yang kerap tidak terdeteksi hingga stadium lanjut karena minimnya gejala awal yang dirasakan penderita. Di Indonesia, akses terhadap pemeriksaan mata yang terjangkau dan merata masih menjadi tantangan besar, sehingga banyak kasus baru teridentifikasi ketika kerusakan saraf optik sudah signifikan. Kondisi ini mendorong urgensi hadirnya solusi deteksi dini dan preventif progresivitas tingkat glaukoma yang mudah diakses oleh masyarakat umum.

**Opsis** adalah platform kesehatan mata berbasis web yang hadir sebagai solusi komprehensif. Tidak hanya untuk deteksi dini glaukoma, tetapi juga sebagai pendamping bagi penderita dalam mengelola dan memahami kondisi mereka. Platform ini terdiri dari dua bagian utama: landing page edukatif untuk masyarakat umum mengenai gejala, pengobatan, dan pencegahan glaukoma; serta aplikasi utama bagi pengguna terdaftar yang mencakup analisis citra berbasis deep learning, risk screening kuesioner berbasis machine learning, integrasi Gen AI untuk menjelaskan hasil, pengingat pengobatan, jurnal gejala dan perubahan penglihatan, serta forum komunitas antarpengguna.

## Commit Conventions

Gunakan prefiks berikut untuk penamaan commit:

- `feat` untuk fitur
- `fix` untuk perbaikan
- `chore` untuk pekerjaan rutin/tugas
- `docs` untuk dokumentasi

Baris subjek:

- Diusahakan kurang/lebih 50 karakter.
- Gunakan huruf kecil untuk prefiks dan subjek.
- Jangan diakhiri tanda baca (titik, tanda seru, dsb.).
- Jelaskan apa yang diubah, bukan bagaimana cara mengubahnya.

Untuk penamaan feature branch, singkat saja, dan gunakan `nama-tim/teks-deskripsi`, di mana nama tim: `ai`, `ds`, `fs`.

Contoh:

- `ai/ubah-dokumentasi`
- `ds/tambah-fitur`
- `fs/tambah-autentikasi`

### Contoh Commit Message

Fitur baru:

```
feat: tambah kuesioner skrining risiko glaukoma
```

Perbaikan bug:

```
fix: batas waktu unggahan gambar di koneksi lambat
```

Dokumentasi:

```
docs: perbaru konvensi commit dan panduan
```

Pekerjaan rutin:

```
Copy
chore: upgrade tensorflow ke v4.15.0
```
