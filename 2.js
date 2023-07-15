function pattern_count(text, pattern) {
  // Jika pattern adalah string kosong, kembalikan 0
  if (pattern === "") {
    return 0;
  }

  let count = 0;

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) {
      count++;
    }
  }

  return count;
}

console.log(pattern_count("palindrom", "ind")); // 1
console.log(pattern_count("abakadabra", "ab")); // 2
console.log(pattern_count("hello", "")); // 0
console.log(pattern_count("ababab", "aba")); // 2
console.log(pattern_count("aaaaaa", "aa")); // 5
console.log(pattern_count("hell", "hello")); // 0
