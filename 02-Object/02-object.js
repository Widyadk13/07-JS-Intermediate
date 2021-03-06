// Soal - 01
// Kamu diminta untuk mengikuti instruksi dibawah dengan seksama:

// - ubah field name pada variable person menjadi namamu sendiri
// - ubah field favDrinks yang berisi "temulawak" menjadi "tap water"
// - ubah field greeting menjadi sebuah fungsi, dengan spesifikasi
//      -) memiliki 1 parameter
//          name [String] => nama seseorang yang akan disapa
//      -) return value [String] => akan mengembalikan sebuah String dengan format "Hello, $NAME"

console.log("--------- SOAL 1 ----------");

const person = {
    name: "Widya",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(name) {
      console.log("hello world");
      return console.log("hello", name);
    }
  }
  
  /// EDIT HERE
  
  person.favDrinks[1] = "tap water"
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  person.greeting(person. name);


// Ekspektation output : widya
//                       100
//                       ["coffee", "tap water", "tea"]
//                       "Hello, Widya"




// Soal - 02
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan sebuah nilai berdasarkan struktur Object, fungsi tersebut memiliki spesifikasi sebagai berikut:

// - 2 Parameter
//    -) obj Object => object yang akan kita ambil value-nya
//    -) path String => letak dari nilai yang ingin kita ambil
// - return value
//    -) apabila kita tidak dapat menemukan field yang dituju, maka kita akan mengembalikan null
//    -) apabila kita menemukan menemukan field yang dituju maka kita akan mengembalikan value dari field tersebut

console.log("--------- SOAL 2 ----------");

function getObjectValue(obj, path) {
    let arr = path.split(".");

    for(let a = 0; a < arr.length; a++) {
        let b = arr[a];
        if(b in obj) {
            obj = obj[b];
        } else {
            return null;
            break;
        }
    }
    return obj;
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }    
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);


// Ekspektation output : espresso should be "lampung"
//                       coffeeBrand should be null
//                       isMilkVegan should be false




// Soal - 03
// Kamu adalah seorang trader pemula, dan karna memiliki background IT kamu ingin membuat sebuah fungsi calculateIncome untuk mendapatkan nilai dari keuntungan yang dapat kita peroleh dengan rumus [sum of (sell - buy)] untuk setiap koin yang tersedia

// 1. Gunakan code template yand diberikan untuk menyelesaikan masalah
// 2. Dilarang untuk mengubah nama variable atau function yang sudah tersedia didalam code template
// 3. Segala perubahan hanya dapat dilakukan didalamm fungsi calculateIncome
// 4. Hasil haruslah sesuai dengan expektasi yang diberikan
// 5. Langkah-langkah pengerjaan:
//     -) hitung keuntungan yang kita hasilkan dari tiap-tiap koin dengan cara (sell - buy)
//     -) ulangi langkah pertama, hingga kita selesai menghitung seluruh history transaksi yang ada (dalam contoh ini kita ada 3 buah history dari hari 1, 2, dan 3)
//     -) jumlahkan seluruh keuntungan yang kita buat selama 3 hari berdasarkan koin yang kita gunakan
//     -) rangkuman dari pendapatan kita HARUS berupa sebuah object
//     -) pengerjaan harus menggunakan built-in method reduce

console.log("--------- SOAL 3 ----------");

// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    const objItems = [];

    for(let a = 0; a < items.length; a++) {
    const item = items[a];
        let temItem = {
            btc: 0,
            doge: 0,
            eth: 0
        };

    const btc = Object.values(item.btc).reduce((buy, sell) => sell- buy);
    temItem["btc"] = btc;
    const doge = Object.values(item.doge).reduce((buy, sell) => sell- buy);
    temItem["doge"] = doge;
    const eth = Object.values(item.eth).reduce((buy, sell) => sell- buy);
    temItem["eth"] = eth;

    objItems.push(temItem)
    }

    const result = objItems.reduce(
        (prev, curr) => {
            curr.btc += prev.btc;
            curr.doge += prev.doge;
            curr.eth += prev.eth;
            return curr;
        }, { 
            btc: 0,
            doge: 0,
            eth: 0
        }
    );
    return result;
  }
  
  console.log(calculateIncome(items))

// Ekspektation output : {
//                         btc: 0,
//                         doge: -2.5,
//                         eth: -1.5
//                       }
