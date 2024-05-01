//move duplicates from an array using dheerajs method

let array=[1,2,3,4,6,6,77,8,1,2,]
 function removeDuplicates(array){
    let uniqueArr=[]
     flag=false
    for(i=0;i<array.length;i++){
        flag=false;
        for(j=0;j<uniqueArr.length;j++){
            if(array[i]===uniqueArr[i]){
                flag=true;
                break;
            }
        }
        if(!flag){
            uniqueArr.push(array[i])
        }
    }
    return uniqueArr
 }

 console.log(removeDuplicates(array))