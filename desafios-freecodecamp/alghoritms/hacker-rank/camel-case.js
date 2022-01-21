/**There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in . */

function camelcase(s) {    
    const arrayWords = [];
    const words = (acc, el, i, arr) => {
        if(el === el.toUpperCase()){
            arrayWords.push(acc)
            return el;
        }
        if(i === arr.length -1){
            arrayWords.push(acc)
        }
        return acc+el;
    }
    const tmp = s.split("");
    const p = tmp.reduce(words);
    console.log(arrayWords.length);

}

camelcase("saveChangesInTheEditor")