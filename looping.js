// LOOPING
// komposisi: keyword, kondisi, dan iterasi

// for(inisialisasi; kondisi; iterasi / counter)
let param = 5;
// let i = 0;
// i++ artinya i = i + 1
// i + 2 artinya i + 2
// i += 2 artinya i = i + 2
const printTriangle = (num) => {
  for (let i = 0; i < param; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

for (let i = 0; i <= 30; i++) {
  // kalau nilai bisa habis dibagi 3 maka print fizz
  // kalau nilai bisa habis dibagi 5 maka print buzz
  // kalau nilai bisa habis dibagi 3 dan 5 maka print fizzbuzz
  if (i % 15 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// perbedaan antar For loop dan While / Do While
// for loop untuk looping dengan angka / parameter yang pasti, misal ada parameter angka, atau tujuan yang bisa di-angkakan
// contoh: looping simbol, baris, kolom
// while / do while untuk looping yang parameternya kurang bisa terukur angka
// contoh: looping sampai nilainya true, bisa juga recursive function
