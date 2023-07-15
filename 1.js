// Mendefinisikan array awal
let array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

// Mendefinisikan array untuk menyimpan elemen integer dan karakter secara terpisah
let numArray = [];
let charArray = [];

// Iterasi setiap elemen dalam array
array.forEach((element) => {
  // Jika elemen adalah string, tambahkan ke array karakter
  if (typeof element === "string") {
    charArray.push(element);
  }
  // Jika elemen bukan string (dalam hal ini, angka), tambahkan ke array integer
  else {
    numArray.push(element);
  }
});

// Mengurutkan array karakter secara alphabet
charArray.sort();

// Mengurutkan array integer secara integer
// Perlu disebutkan fungsi khusus karena metode .sort() default mengurutkan secara alphabet
numArray.sort((a, b) => a - b);

// Menggabungkan kedua array yang telah diurutkan
// Array karakter datang pertama sesuai permintaan
let sortedArray = [...charArray, ...numArray];

// Mencetak array yang telah diurutkan ke konsol
console.log(sortedArray);
