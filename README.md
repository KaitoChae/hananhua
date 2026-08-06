# Yayasan Han An Hua — GitHub Pages V8

Perubahan versi ini:
- Target Program Pendidikan 3+4 diperbaiki menjadi **siswa/lulusan SMA/SMK**.
- Animasi HP diperkuat dan dibuat lebih kompatibel dengan iOS Safari:
  - animasi header dan judul saat halaman dibuka
  - animasi foto utama yang bergerak perlahan
  - animasi kartu saat digulir
  - animasi menu, ikon, galeri, dan tombol sentuh
- Nama file CSS dan JavaScript diganti menjadi versi V8 agar browser tidak memakai cache versi lama.

## Cara mengunggah
1. Ekstrak ZIP.
2. Hapus file website versi lama dari repository atau unggah semua file V8 dengan opsi mengganti file.
3. Pastikan file berikut berada di root repository:
   - `index.html`
   - `404.html`
   - `styles-v8.css`
   - `script-v8.js`
   - `i18n-v8.js`
   - `.nojekyll`
   - folder `assets`
4. Buka **Settings → Pages** dan gunakan branch `main`, folder `/(root)`.
5. Setelah GitHub selesai menerbitkan, tutup tab lama di HP lalu buka kembali situs.

Catatan iPhone:
Jika **Settings → Accessibility → Motion → Reduce Motion** aktif, animasi sengaja dikurangi oleh iOS.
