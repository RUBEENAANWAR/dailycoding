// // remove duplicates from an array

array=[1,2,3,4,4,6,5,5,3,2,1,7,8,8,5,4,3]

function removeDuplicateElemnt(array){
    let uniqueArr=[]
    for(let i=0;i<=array.length-1;i++){
        if(!uniqueArr.includes(array[i])){
            uniqueArr.push(array[i])
        }
    }
    return uniqueArr
}

var x = 10;
console.log(x)
 function babu() { 
    console.log(x)
// if (x > 20) { 
// var x = 50; 
// } 
console.log(x); 
} 
babu();