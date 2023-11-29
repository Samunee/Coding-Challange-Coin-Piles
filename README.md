# Coin Piles Emptiness Checker

Ini adalah sebuah program sederhana yang dibuat dengan JavaScript untuk memeriksa apakah tumpukan koin tertentu dapat dikosongkan berdasarkan aturan tertentu.

## Overview

Program ini menggunakan fungsi `canEmptyPiles(piles)` yang mengambil daftar tumpukan koin sebagai argumen dan memeriksa apakah tumpukan koin tersebut dapat dikosongkan sesuai aturan yang ditetapkan.

### Cara Kerja

- Fungsi `canEmptyPiles(piles)` melakukan iterasi melalui setiap tumpukan koin yang diberikan.
- Variabel `a` dan `b` digunakan untuk menyimpan jumlah koin dari tumpukan pertama dan kedua.
- Setiap tumpukan koin dicek apakah memenuhi aturan pengosongan tumpukan:
  - Jumlah koin dari kedua tumpukan harus habis dibagi 3.
  - Perbandingan jumlah koin antara tumpukan pertama dan kedua tidak boleh lebih dari dua kali lipat dari jumlah koin tumpukan yang lebih sedikit.
- Jika semua tumpukan memenuhi aturan, program akan mengembalikan "YES"; jika tidak, akan mengembalikan "NO".

## Penggunaan

- Program ini menggunakan modul `readline` untuk menerima input dari pengguna melalui terminal.
- Setelah program dijalankan, pengguna diminta memasukkan jumlah tes dan jumlah koin dalam setiap tumpukan untuk setiap tes.
- Setelah semua input diberikan, program akan menampilkan hasil apakah tumpukan dapat dikosongkan atau tidak.

## Contoh Input-Output

Input: <br>
Masukkan jumlah tes: 3 <br>
Masukkan jumlah koin dalam tumpukan: <br>
`2 1` <br>
`2 2` <br>
`3 3` <br>

Output: <br>
`YES` <br>
`NO` <br>
`YES` <br>

## Kriteria Penilaian

- **Fungsionalitas Program**: Program memberikan keluaran yang tepat berdasarkan aturan pengosongan tumpukan koin.
- **Time Complexity dan Space Complexity**: Algoritma memiliki kompleksitas waktu O(n) dan ruang O(n), dengan penjelasan yang jelas dan terperinci dalam dokumentasi kode.
- **Kode yang Jelas dan Dikelola dengan Baik**: Kode ditulis dengan baik, mudah dipahami, dan terdokumentasi dengan baik dengan komentar yang relevan dan deskripsi fungsi yang jelas.
- **Kemampuan Memproses Input**: Program mampu menerima input dari pengguna melalui terminal menggunakan modul `readline` dan memberikan output yang sesuai berdasarkan input yang diberikan.
- **Penggunaan Node.js dan Command Line Interface (CLI)**: Program menggunakan Node.js dan dapat dijalankan dari terminal sebagai aplikasi berbasis CLI.
- **Ketepatan dan Kesesuaian Hasil**: Program memberikan hasil yang sesuai dengan aturan yang ditetapkan untuk setiap tumpukan koin yang diinputkan oleh pengguna.
- **Dokumentasi yang Jelas dan Tepat**: README.md memberikan penjelasan yang baik dan tepat tentang cara menggunakan program, contoh input-output, serta cara kerja dan kompleksitas algoritma.
- **Ringkasan yang Jelas**: Ringkasan yang jelas dan singkat tentang tujuan program dan aturan yang dijalankan.

## Kompleksitas Waktu dan Ruang

Algoritma solusi yang diimplementasikan memiliki kompleksitas waktu O(n) dan kompleksitas ruang O(n), di mana n adalah jumlah tes atau tumpukan koin yang diberikan sebagai input.

- **Time Complexity**: Algoritma memiliki kompleksitas waktu O(n), di mana setiap tumpukan koin dicek satu per satu. Dalam setiap pengujian, hanya ada beberapa perbandingan matematika sederhana yang dilakukan, yang tidak bergantung pada ukuran tumpukan koin.
- **Space Complexity**: Algoritma memiliki kompleksitas ruang O(n) karena menyimpan jumlah koin dalam tumpukan untuk setiap tes dalam array 'piles', yang ukurannya akan tumbuh seiring bertambahnya jumlah tes yang diberikan.

Solusi ini dianggap efisien karena melakukan perhitungan dengan jumlah operasi yang konstan, tidak tergantung pada ukuran tumpukan koin, sehingga dapat menyelesaikan masalah Coin Piles dalam waktu yang cepat tanpa memerlukan banyak ruang memori.


## Catatan Tambahan

- Algoritma ini memiliki kompleksitas waktu O(n), dengan n adalah jumlah tes, dan kompleksitas ruang O(n) karena menyimpan jumlah koin dalam setiap tumpukan.
- Dokumentasi kode di dalam kode sumber juga sudah ada dengan penjelasan mengenai Time Complexity dan Space Complexity.
- Kode ini dimasukkan ke dalam sebuah CLI (Command Line Interface) menggunakan Node.js dan dapat dijalankan dari terminal.

---
Dibuat oleh [Fitra Muhammad Anugrah](https://github.com/Samunee)
