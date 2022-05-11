const person = {
  nama: "tama",
  alamat: "bandar lampung",
};

const printPerson = (props) => {
  //   console.log(`${person.nama}, tinggal di ${person.alamat}`); // sebelumnya

  // opsi yg lain
  //   const nama = person.nama;
  //   const alamat = person.alamat;

  const { alamat, nama } = props;
  if (!alamat) {
    return "alamat tidak ada!";
  }
  console.log(`${nama}, tinggal di ${alamat}`); // sebelumnya
};

printPerson(person);

// menukar 2 variabel tanpa membuat variabel baru
// cara lama
let x = 0;
let y = 1;
// let temp
// temp = x
// x = y
// y = temp

[x, y] = [y, x];
console.log(x + "-" + y);
