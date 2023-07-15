function hitungHuruf(input) {
  let count = {};
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char === " ") continue; // mengabaikan spasi
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  // Konversi object ke array dan urutkan berdasarkan key (abjad)
  let sorted = [];
  for (let char in count) {
    sorted.push([char, count[char]]);
  }

  sorted.sort(function (a, b) {
    // Urutkan berdasarkan abjad dengan memperhatikan huruf kapital
    return a[0].toUpperCase() > b[0].toUpperCase()
      ? 1
      : a[0].toUpperCase() < b[0].toUpperCase()
      ? -1
      : a[0] > b[0]
      ? 1
      : -1;
  });

  // Konversi kembali ke array of string
  let result = [];
  sorted.forEach(function (item) {
    result.push(`"${item[0]}":${item[1]}`);
  });

  return result;
}

console.log(hitungHuruf("Hello World"));
console.log(hitungHuruf("Bismillah"));
console.log(hitungHuruf("MasyaAllah"));
