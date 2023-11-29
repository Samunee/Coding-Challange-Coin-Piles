// Function untuk memeriksa apakah tumpukan koin dapat dikosongkan
function canEmptyPiles(piles) {
    for (let i = 0; i < piles.length; i++) {
        let a = piles[i][0]; // TODO: Menyimpan jumlah koin dari tumpukan pertama
        let b = piles[i][1]; // TODO: Menyimpan jumlah koin dari tumpukan kedua

        // Memeriksa apakah aturan pengosongan tumpukan terpenuhi
        if ((a + b) % 3 === 0 && Math.max(a, b) <= 2 * Math.min(a, b)) {
            continue; // Melanjutkan ke tumpukan berikutnya jika aturan terpenuhi
        } else {
            return "NO"; // Mengembalikan "NO" jika tumpukan tidak dapat dikosongkan
        }
    }
    return "YES"; // Mengembalikan "YES" jika semua tumpukan dapat dikosongkan
}

// Modul readline untuk menerima input dari pengguna
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let t = 0; // TODO: Jumlah tes
let piles = []; // TODO: Array untuk menyimpan jumlah koin dalam tumpukan untuk setiap tes

// Meminta pengguna memasukkan jumlah tes
rl.question("Masukkan jumlah tes: ", (numTests) => {
    t = parseInt(numTests); // Mengonversi jumlah tes menjadi integer
    console.log("Masukkan jumlah koin dalam tumpukan:");

    // Menerima input untuk setiap tumpukan koin
    rl.on("line", (line) => {
        const [a, b] = line.split(" ").map(Number); // Memisahkan input menjadi jumlah koin tumpukan a dan b
        piles.push([a, b]); // Menambahkan jumlah koin tumpukan ke array piles

        // Memeriksa apakah sudah mendapatkan input untuk semua tes
        if (piles.length === t) {
            const result = canEmptyPiles(piles); // Memeriksa apakah tumpukan dapat dikosongkan
            console.log(result); // Menampilkan hasil
            rl.close(); // Menutup interface readline
        }
    });
});

/* 
Penjelasan mengenai Time Complexity:
- Algoritma ini memiliki kompleksitas waktu O(n), di mana n adalah jumlah tes. 
- Pengecekan untuk setiap tumpukan koin dilakukan secara terpisah dengan jumlah koin tertentu yang sudah diberikan, 
  sehingga bergantung pada jumlah tes yang diberikan.

Penjelasan mengenai Space Complexity:
- Algoritma ini memiliki kompleksitas ruang O(n), di mana n adalah jumlah tes. 
- Karena kita menyimpan jumlah koin dalam tumpukan untuk setiap tes dalam array 'piles', 
  yang akan tumbuh seiring bertambahnya jumlah tes yang diberikan.
*/
