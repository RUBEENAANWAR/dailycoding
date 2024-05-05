//Write a function in JavaScript to check if a given number is prime or not.

function primeCheck(n){
    if(n===1){
        return false
    }
    for(i=2;i<Math.sqrt(n);i++){
    // for(i=2;i<n;i++){
       if(n%i===0) 
        return false
    }
    return true
}

console.log(primeCheck(17));