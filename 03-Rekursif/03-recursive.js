// Soal - 01
// Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// 1. fungsi harus ditulis menggunakan recursive
// 2. memiliki 1 parameter:
//     -) arr [Array] => array of number yang nanti kita akan cari jumlahnya
// 3. return value [Number] => nilai kembalian berupa sebuah Number
// 4. Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

console.log("--------- SOAL 1 ----------");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arrOfNum) {
    let arrNew = 0;

    for(let a = 0; a < arrOfNum.length; a++) {
        arrNew += arrOfNum[a];
    }
    return arrNew;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Ekspektation output : 15, 36




// Soal - 02
// Pada soal sebelumnya kamu diminta untuk membuat sebuah fungsi untuk mencari total sebuah "array of number", pada soal kali ini kamu diminta untuk membuat sebuah fungsi yang mana akan memberikan jumlah angka yang nilainya melebihi nilai rata-rata. Berikut merupakan langkah-langkah yang dapat kalian gunakan untuk menyelesaikan masalah tersebut:

// 1. pastikan bahwa array yang kalian gunakan pada soal-01 dan soal-02 itu identik atau sama
// 2. cari nilai rata-rata menggunakan fungsi yang sudah kalian buat pada soal-01
// 3. buat sebuah funsi yang mana memiliki 2 parameter
//     - arr [Array] => array of number
//     - avg [Number] => nilai rata-rata
// 4. fungsi pada soal-2 akan melakukan checking terhadap tiap-tiap nilai apakah ia melebihi nilai rata-rata atau tidak
// 5. langkah terakhir adalah mengembalikan jumlah dari nilai yang melebihi nilai rata-rata

console.log("--------- SOAL 2 ----------");


const avg1 = .....;
const avg2 = .....;
function countAboveAvg(array, number) {
    sumOfArray(number);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


// Ekspektation output :    2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 4 dan 5
//                          2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 10 dan 22