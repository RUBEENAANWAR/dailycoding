//print fizz for multiples of 3 and buzz when multiples of 5.. If both multiple of 3 and 5 then print fizzbuzz

function fizzBuzz(num){
// var num = prompt("enter a number")
for(let i=0;i<=num;i++){
if(i%3===0 && i%5===0){
    console.log("fizzbuzz")
}else if (i%5===0){
    console.log("buzz")
}else if(i%3===0){
    console.log("fizz")
}else{
    console.log(i)
}
}
}


fizzBuzz(15)
