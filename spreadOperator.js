let siswa = ["tama", "bilkis", "nanang"];
let siswaBaru = ["verdy", "jafar", "aldo"];

console.log(siswa);
console.log(...siswa);

let semuaSiswa = [...siswa, ...siswaBaru];
// console.log(semuaSiswa);

let dataSiswaSalah = [siswa, siswaBaru];
// console.log(dataSiswaSalah);

const person = {
  nama: "tama",
  alamat: "bandar lampung",
};

const penduduk = {
  nik: "34893894839428409",
  ...person,
  pajak: "12930193901",
};
console.log(penduduk);

// contoh use case spread operator adalah ketika membuat infinite scroll di komponent
const ifReachedEnd = () => {
  // get post terbaru
  const postTerbaru = res.data.posts; // array

  // gabungin dengan post yg lain
  posts = [...posts, ...postTerbaru];
};
