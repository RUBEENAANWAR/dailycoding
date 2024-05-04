//find the factorial of a number

function factorialOfNumber(num){
    let factorial=1
    if(num===0 || num===1){
        return 1
    }else{
    for(let i=1;i<=num;i++){
         factorial *=i
    }
    return factorial
}
}

console.log(factorialOfNumber(5))