//Remove the duplicate elements from an array and sort

let array=[1,9,2,3,4,1,4,6,7,9,2,1,9]

//using inbuilt functions
function removeDuplicateElemnt(arr){
    let uniqueArr=[]
    for(let i=0;i<=arr.length-1;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

console.log(removeDuplicateElemnt(array).sort())


//using set
function removeDuplicateElemnt(arr){
    let uniqueArr=[]
    for(let i=0;i<arr.length;i++){
    uniqueArr=Array.from(new Set(arr))
    }
    return uniqueArr
}

console.log(removeDuplicateElemnt(array).sort())


