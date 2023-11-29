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

## Contoh

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


## Catatan Tambahan

- Algoritma ini memiliki kompleksitas waktu O(n), dengan n adalah jumlah tes, dan kompleksitas ruang O(n) karena menyimpan jumlah koin dalam setiap tumpukan.
- Dokumentasi kode di dalam kode sumber juga sudah ada dengan penjelasan mengenai Time Complexity dan Space Complexity.
- Kode ini dimasukkan ke dalam sebuah CLI (Command Line Interface) menggunakan Node.js dan dapat dijalankan dari terminal.

---
Dibuat oleh [Nama Anda](https://github.com/username-anda)
