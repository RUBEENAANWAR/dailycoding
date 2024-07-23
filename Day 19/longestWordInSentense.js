//Find the Longest Word in a Sentence

function longestWord(sentnce){
    let Sentence=sentnce.split(' ')
    let longestWord=""
    for(let word of Sentence){
    //    console.log(Sentence)
       if(word.length>longestWord.length){
        longestWord=word
        // console.log(longestWord)
       }
    }
    return longestWord

}

console.log(longestWord('a aa f g hjknuioh ghthou uigeuiegfruiegruei'))