// Soal - 01
// Kamu diminta untuk membuat sebuah fungsi reverse yang mana akan membalik sebuah array, fungsi reverse memiliki sepsifikasi sebagai berikut:

// memiliki 1 parameter yaitu:
// arr [Array] => array yang akan kita manipulasi nilainya
// return value [Number] berupa sebuah array baru yang sudah terbalik
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

console.log("--------- SOAL 1 ----------");

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(Array) {
  const number = Array.slice().reverse()
  return number
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// Ekspektation output : [1, 2, 3], [3, 2, 1]
//                       [8, 1, 5, 7], [7, 5, 1, 8]





// Soal - 02
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 1 parameter:
// arr [Array of Number] => array 1 dimensi dengan nilai Number
// return value [Number] total angka yang melebihi nilai rata-rata
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

console.log("--------- SOAL 2 ----------");

const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3]; 

function getAverage(Number) {
  let sum = 0;
  let Counter = 0;
    for(let a = 0; a < Number.length; a++) {
      sum += Number[a];
    }
  
  let avg = sum / Number.length;
    for(let b = 0; b < Number.length; b++) {
      if(Number[b] > avg){
        Counter++;
      }
    }
  return Counter;
}

console.log(getAverage(arr3))
console.log(getAverage(arr4))

// Ekspektation output : 2 // Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8
//                       3 // Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8





// Soal - 03
// Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 2 parameter:
// arr [Array] => array multi dimensi yang akan kita proses
// num [Number] => angka yang ingin kita cari
// return value [Number]
// fungsi akan mengembalikan null apabila angka yang dicari tidak ditemukan
// fungsi akan mengembalikan index dari angka yang dicari
// Langkah-langkah pengerjaan:

// karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
// setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
// apabila kita tidak menemukan nilai tersebut maka kembalikan null
// dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)

console.log("--------- SOAL 3 ----------");

const arr5 = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) {
    let tempArr = []
    for(let c = 0; c < arr.length; c++) {
      let number = arr[c];
      for(let d = 0; d < number.length; d++) {
        // console.log(num[d]);
        tempArr.push(number[d]);
      }
    }

    for(let e = 0; e < tempArr.length; e++) {
      // console.log(tempArr[e]);
      if(tempArr[e] === num) {
        var found = true;
        var index = e;
      }
    }

    if (found) {
      return index;
    } else {
      return "null";
    }
    
  }

  // searchInArray(arr)
  console.log(searchInArray(arr5, 3));
  console.log(searchInArray(arr5, 2));
  console.log(searchInArray(arr5, 4));
  console.log(searchInArray(arr5, 8));

// Ekspektation output : null, 4, null, 5