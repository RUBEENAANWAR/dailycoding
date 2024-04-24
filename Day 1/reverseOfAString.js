function reverseString(str){
    let reverse='';
    for(i=str.length-1; i>=0; i--){
        reverse += str[i]
    }
    return reverse
    // console.log("reverse",reverse)
}
let str='rubeena is good'
let x=reverseString(str)
console.log(x)

function reverse2(str){
   return str.split("")
}

let y=reverse2(str)
console.log(y)