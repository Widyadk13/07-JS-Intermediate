// 1. Apa itu synchronous?
console.log("----soal 1-----")
console.log("Synchronous adalah salah satu jenis operasi perintah pada javaScript yang dilakukan secara berurutan");

// 2. Apa itu asynchronous?
console.log("----soal 2-----")
console.log("Asynchronous adalah lawan dari synchronous yang dimana merupakan salah satu jensi operasi perintah pada JavaScript yang dilaksanakan secara bersamaan");

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
console.log("----soal 3----")
console.log("Ya. Asynchronous dapat dilakukan atau diterapkan pada web browser");

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
console.log("----soal 4----")
console.log("Pada console.log pertama maka akan menunjukkan result berupa angka 1, 2, 3, 4, 5 hal tersebut disebabkan karena adanya loop yang terjadi selama 5 kali yang dimana pada proses loop tersebut maka akan terjadinya penambahakn 1 angka setiap kali loop terjadi dan akan berehenti pad aloop ke 5 yang menunjukkan result 5. Sedangkan pada pemanggilan kedua menggunakan console.log maka akan menunjukkan result berupa angka 6");

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
console.log("----soal 5----")
console.log("Ya. pada proses tersebut menunjukkan ketidak samaan. Hal tersebut disebabkan karena adanya proses loop yang terjadi selam 5 kali pada console.log pertama. ditambah lagi pada variabel i yang menunjukkan i masih bersifat global sehingga proses looping akan terus berjalan dan pada setiap loop akan terjadi proses penambahan 1 angka. Selain itu, pada console.log pertama proses pemanggilan akan berjalan setelah proses loop selama 5 kali sudah diselesaikan")

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }

// perbaikan
for(let i = 1; i <= 5; i++) {
  console.log("first log:", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}