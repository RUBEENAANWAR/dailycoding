function longestWord(sentence){
let longestWord=''
let words=sentence.split('');
for(let word of words){
if (word.length>longestWord.length){
    longestWord=word ;
}
}
return longestWord;
}

console.log(longestWord("hi amruby"))
let x=longestWord("hi am ruby")
console.log(x)