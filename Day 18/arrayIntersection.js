//print an array with both common elements from array1 and array2

const arr1=[1,2,3,4]
const arr2=[3,4,5,6,5,6]

function arrayIntersection(arr1,arr2){
    const newArr2=new Set(arr2)
    // console.log(newArr2)
    return arr1.filter(item => newArr2.has(item));
}

console.log(arrayIntersection(arr1,arr2))