let array = [1, 9, 2, 3, 4, 1, 4, 6, 7, 9, 2, 1, 9];

function sortingArray(arr) {
//   let sortArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temArr=arr[i];
            arr[i]=arr[j]
            arr[j]=temArr
        }
    }
  }
  return arr
}


console.log(sortingArray(array))