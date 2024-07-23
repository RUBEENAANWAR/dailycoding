//Count the Number of Vowels in a String

function numberOfVowels(str){
    let vowels=['a','e','i','o','u']
    let count=0
let string=str.split('')
for(let strr of string){
    if(vowels.includes(strr)){
        count++
    }
}
return count
}

console.log(numberOfVowels("rubeena"))