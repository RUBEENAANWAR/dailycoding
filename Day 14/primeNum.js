// check whether the given number is a prime

function checkPrime(number){
    for(i=2;i<number/2;i++){
        if(number%i===0){
            return false
        }
    }return true
}

console.log(checkPrime(15))