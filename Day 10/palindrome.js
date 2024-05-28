// check whether the string is palindrome or not

function palindrome(str1){
const string1=str1
const string2=str1?.split('').reverse().join('')
// console.log(string1)
if(string1===string2){
    console.log('it is a palindrome')
    // return true
}else{
    console.log('false')
}
}

palindrome('malayalam')