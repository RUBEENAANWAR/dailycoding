// find the sum of first and last index of a number

function sumOfNumber(num){
const number=num.toString()
const digit1=parseInt(number[0])
const digit2=parseInt(number[number.length-1])
let sum=digit2+digit1
console.log(sum)
}
sumOfNumber(45199)