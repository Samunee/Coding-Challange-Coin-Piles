# Coin Piles

Program ini memiliki fungsi untuk memeriksa apakah dua tumpukan koin tertentu dapat dikosongkan atau tidak sesuai aturan yang ditentukan.

## Cara Penggunaan

1. **Memulai Program**
    - Pastikan Anda memiliki Node.js diinstal pada komputer Anda.
    - Buka terminal atau command prompt.
    - Jalankan program dengan perintah `node nama_file.js`.

2. **Input Pengguna**
    - Program akan meminta pengguna untuk memasukkan jumlah tes terlebih dahulu.
    - Kemudian, pengguna diminta untuk memasukkan jumlah koin dalam setiap tumpukan.

3. **Hasil Keluaran**
    - Setelah input pengguna selesai dimasukkan, program akan menampilkan "YES" jika tumpukan koin dapat dikosongkan, dan "NO" jika tidak.

## Implementasi Kode

- **Fungsi canEmptyPiles()**: Fungsi ini melakukan iterasi untuk setiap tumpukan koin yang dimasukkan. 
  - Pertama, ia menyimpan jumlah koin dalam tumpukan pertama dan kedua.
  - Kemudian, dilakukan pengecekan apakah tumpukan dapat dikosongkan sesuai dengan aturan yang ditentukan.
  - Jika aturan terpenuhi untuk semua tumpukan, program akan mengembalikan "YES"; jika tidak, akan mengembalikan "NO".

- **Modul Readline**
  - Program menggunakan modul `readline` untuk menerima input dari pengguna secara interaktif melalui terminal.
  - Pengguna diminta untuk memasukkan jumlah tes dan jumlah koin dalam tumpukan.

- **Penutupan Interface**
  - Setelah input pengguna selesai dimasukkan, interface `readline` akan ditutup.

## Kompleksitas Algoritma

- **Waktu**: Algoritma ini memiliki kompleksitas waktu O(n), di mana n adalah jumlah tes.
- **Ruang**: Kompleksitas ruangnya O(n) karena menyimpan jumlah koin dalam setiap tumpukan untuk setiap tes dalam array `piles`.


