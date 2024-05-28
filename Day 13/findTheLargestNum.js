//Find the largest number from an array

let array=[25,6,8,8,9,2,5,8,6,554]

function largestNum(array){
let largestNum=array[0]
for (i=0;i<array.length;i++){
    if(array[i]>largestNum){
        largestNum=array[i]
   }
}
return largestNum
}

console.log(largestNum(array))