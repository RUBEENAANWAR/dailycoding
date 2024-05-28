function reverseString(str){
    let reverse='';
    for(i=str.length-1; i>=0; i--){
        // reverse += str[i]
        reverse=reverse+str[i]
        console.log('reverse',reverse)
    }
    return reverse
    // console.log("reverse",reverse)
}
let str='rubeena is good'
let x=reverseString(str)
console.log(x)

function reverse2(str){
   return str.split("").reverse().join('')
}

let y=reverse2(str)
console.log(y)