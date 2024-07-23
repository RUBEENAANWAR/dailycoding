//Merge two sorted arrays into a single sorted array:

const arr1 = [1, 2, 3, 4, 7];
const arr2 = [7, 11, 13, 14];

function mergeSort(arr1, arr2) {
  const mergedArray = [];
  //define pointers for arr1 and arr2
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++
    } else {
      mergedArray.push(arr2[j]);
      j++
    }
  }

// If there are remaining elements in arr1, add them to the mergedArray
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
}

// If there are remaining elements in arr2, add them to the mergedArray
while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
}
return mergedArray;
}

console.log(mergeSort(arr1, arr2));
mergeSort(arr1, arr2)
