// check whether two strings are anagrams or not.. eg:words silent and listen writes using same letters

function checkAnagram(str1,str2){
  const sortStr1=str1.split('').sort().join('')
  const sortStr2=str2.split('').sort().join('')

  if(sortStr1===sortStr2){
    return true
  }
}

console.log(checkAnagram('silent','listen'))