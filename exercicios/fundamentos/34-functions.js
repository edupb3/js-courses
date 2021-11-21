/**
 * 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

 */

function retiraLetrasRepetidas(word){
    let result = [];
    for (const iterator of word) {
        result.includes(iterator) ? "_" : result.push(iterator);
    }
    return result;
}

function comparaArrays(arr1, arr2){
    let result = []
    arr1.forEach( function(el1) {
        arr2.forEach( function(el2) {
            (el1 === el2 ? result.push(el1) : "")
        })
    } )    
    return (arr1.length ===  result.length)
}

function comparaStrings(string1, string2){
    if (string1 === string2){
        return true
    }
    else{        
        let arrayLetras1 = [];
        let arrayLetras2 = [];
        let word1 = string1.toLowerCase().split(""); 
        let word2 = string2.toLowerCase().split("");
        
        arrayLetras1 = retiraLetrasRepetidas(word1);
        arrayLetras2 = retiraLetrasRepetidas(word2);
        let igual = comparaArrays(arrayLetras1, arrayLetras2); 

        if(!igual){
            igual = comparaArrays(arrayLetras2, arrayLetras1);            
        }       
        
        console.log( igual);
        
    }
}

comparaStrings("gfSFZT","gdfasffsdfSwzetf")
comparaStrings("gfSFZTH","gdfasffsdfSwzetf")
comparaStrings("eaaaaaaa","eeeeeeeeeei")
comparaStrings("eaaaaaaa","eeeeeeeeee")