function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  // let splitStr=str.split('')

  // for(i=0;i<str.length;i++){
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("heloo world"));
