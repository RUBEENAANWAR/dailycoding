// flatten an array
const array=[1,2,3,[5,6,7],3,2]

function flattenArray(arr){
    let arr1=[]
for(let element of arr){
    if(Array.isArray(element)){
        arr1.push(...flattenArray(element))
    }else{
        arr1.push(element)
    }
}
return arr1

}


// another method
function flattenArray(arr){
    let arr1=[]
// for(let element of arr){
arr.filter((element)=>{
    if(Array.isArray(element)){
        arr1.push(...flattenArray(element))
    }else{
        arr1.push(element)
    }
})
return arr1
}


console.log(flattenArray(array))
// console.log(array.flat())