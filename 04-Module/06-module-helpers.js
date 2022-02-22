function sayHello() {
    console.log("Hello")
} 

export default sayHello()

export function greeting(name) {
    alert(`Hello, ${name}`);
}


// // Pengimplementasian fungsi greeting untuk menampilkan message (nomer 2).
// const elFormGreeting = document.querySelector("#form-greeting");
// const btn = elFormGreeting.lastElementChild
// const elInputName = document.querySelector("#input-name");

// // Pengambilan data name dengan menggunakan onclick (nomer 2)
// btn.onclick = greeting;

// // Proses export fungsi greeting (nomer 2) 
// export function greeting(name) {
//     var name = elInputName.value
//     alert(`Hello, ${name}`);
// }


