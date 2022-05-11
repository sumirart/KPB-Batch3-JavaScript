// cara deklarasi variabel adalah: "keyword namaVariabel"
/**
 * keyword:
 * var
 * let
 * const
 */

var nama = "Tama";
let umur = 30;
const tglLahir = "01/01/1990";

// Perbedaan Var vs Let dan Const berdasarkan update nilai
/**
 * Var bisa deklarasi ulang dan ubah data
 * Let bisa ubah data
 * Const tidak bisa ubah data
 */

var tes1 = "halo";
var tes1 = "yes bisa!"; //deklarasi ulang
tes1 = "ini juga";

let tes2 = "apa bisa?";
// let tes2 = "tidak bisa!";
tes2 = "ini baru bisa";

const tes3 = "ini tidak bisa sama sekali";
// tes3 = "serius deh";

// Perbedaan Var let const berdasarkan Scope
/** Scope = jangkauan kode
 * global scope = bisa diakses semua bagian di file yg sama
 * local = hanya bisa diakses lokal, terbagi menjadi funtion scope dan block scope
 *
 * function scope = diakses di dalam function
 * block scope = diakses di dalam scope {}, seperti if(), looping, dan switch()
 *
 * var = global scope dan function scope
 * let dan const = function scope dan block scope
 */

// contoh block scope
for (let i = 0; i < 10; i++) {
  var coba = "var di dalam scope";
  let letA = "let A";
  const constA = "const A";
}

console.log(coba);

// contoh function scope
function tes99() {
  var coba99 = "var di dalam scope";
  let letA99 = "let A";
  const constA99 = "const A";

  if (true) {
    var cobaScope = "var di dalam scope";
    let letAScope = "let A";
    const constAScope = "const A";
  }

  // console.log(letAScope); // tidak bisa karena let adalah block scope
}

tes99();

// MACAM-MACAM TIPE DATA DI JAVASCRIPT
let tipeDataString = "haloo";
let tipeDataNumber = 999;
let tipeDataBoolean = true; // true || false, isLoggedIn
const add = (num1, num2) => console.log(num1 + num2); // function
// const add = (num1, num2) => { // sama dengan yg atas
//   return console.log(num1 + num2)
// }

// Object
const tama = {
  namaPanjang: "Pratamaaaa",
  umur: 30,
  tglLahir: "01/01/1990",
  // method adalah function di dalam object
  printIdentitas: () =>
    console.log(
      `Nama panjangnya ${this.namaPanjang}, umur: ${umur}, dan tanggal lahir: ${tglLahir}`
    ),
  objLain: {
    alias: "Tams",
  },
};

// untuk memanggil variable di dalam object
tama.namaPanjang = "Tamaa";
tama.objLain.alias;
// tama["umur"]; // biasanya untuk variabel
let objX = "umur";
tama[objX]; // panggil variabel di dalam object dengan variable lain
tama.printIdentitas(); // memanggil method, atau function di dalam object

// Array
let urutan = [1, 2, 3, 4, 5]; // punya 5 data
let listNama = ["Tama", "Adi", "Aldo"]; // punya 3 data
urutan[0]; // index dimulai dari 0
// urutan.length; // return jumlah datanya yakni 5
console.log(urutan.length);
urutan[5]; // hasilnya akan undefined

urutan[0] = 99;

// NULL VS UNDEFINED
// null adalah variable yang di-assigned / diberikan
const tidakAda = null;
const err = null;

// undefined biasanya variable yang sudah deklarasi tapi tidak terdefinisi
var cobaUndefined;
console.log(cobaUndefined);
console.log(urutan[10]);

// console.log(jfkjfdk.length); // error tidak terdefinisi

// typeof() untuk menampilkan tipe datanya
console.log("Menampilkan tipe data dengan typeof");
console.log(typeof cobaUndefined);
console.log(typeof urutan);
console.log(typeof tama);
console.log(typeof "");
console.log(typeof 99);
console.log(typeof true);
console.log(typeof Symbol());

// TRUTHY VS FALSEY VALUE
// semua tipe data di javascript bisa diconvert ke nilai boolean, yakni true / false
// biasanya berguna untuk conditional if()
/**
 * semua di javascript bernilai true kecuali:
 * 0 (angka 0)
 * "" (string kosong)
 * false (boolean)
 * undefined
 * null
 * NaN // jika kita mencoba operasi matematika di variable yg bukan angka
 */
const angka1 = 10;
const angka2 = 20;
if (angka1 > angka2) {
  // akan diterjemahkan ke boolean true/false
  console.log("angka 1 tidak lebih besar dibanding angka 2");
}

let tesNama = "tama";
// tesNama = req.response[0]
if (tesNama) {
  console.log("Namanya ada");
}

if (!tesNama) {
  console.log("Namanya tidak ada");
}
