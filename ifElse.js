// sintaks if else
// if(pengecekan kondisi harusnya bernilai true){ ... kode yang dieksekusi }
// di dalam pengecekan if bisa berisi beberapa perbandingan atau lebih dari 1

let tesNama = "tama";
if (tesNama) {
  console.log("Namanya ada");
}

if (!tesNama) {
  console.log("Namanya tidak ada");
}

if (tesNama) {
  console.log("Namanya ada");
} else if (!tesNama) {
  console.log("Namanya tidak ada");
} else {
  console.log("Tidak jelas");
}

function submitForm(nama, email, umur) {
  if (!nama) {
    return "Nama tidak ada";
  }

  if (!email) {
    return "Email tidak ada";
  }

  if (umur < 0) {
    return "Umur tidak ada";
  }

  // opsi lain pengecekan di atas
  if (!nama || !email || !umur) {
    return "Nama, Email atau Umur Tidak ada";
  }

  // kebalikannya yg atas
  //   if (nama && email && ttl) {
  //     return "Form disubmit di if!";
  //   }

  return "Form dikirim";
}

const hasil = submitForm("tama", "tama@gmail.com", 0);
console.log(hasil);

// TERNARY OPERATOR
// format:
// statement ? return kalau true : return kalau false
// biasanya untuk menampilkan conditional rendering di frontend library seperti react

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}
// true ? console.log("return true") : console.log("return false");
const beneranTrue = true;
false
  ? console.log("return false")
  : beneranTrue
  ? console.log("return true beneran")
  : console.log("return false");

// console.log(getFee(true));
// console.log(getFee(false));
// console.log(getFee(null));

// shortcut ternary: true && return kalau true
true && console.log("asli true");
// { isLoggedIn && <ProfileIcon /> }

// OPERATOR PERBANDINGAN
console.log(5 === "5"); // cek value dan tipe dataanya
console.log(5 == "5"); // hanya cek value
// NaN
// console.log(+"Tama");

console.log(5 !== "5"); // cek value dan tipe dataanya
console.log(5 != "5"); // hanya cek value
