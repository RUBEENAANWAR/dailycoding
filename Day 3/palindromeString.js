// check whether a string is palindrome or not

function checkPalindrome(str){
const reverse=str.split('').reverse().join('')
// console.log(reverse)
return str===reverse
}

console.log(checkPalindrome('malayalam'))