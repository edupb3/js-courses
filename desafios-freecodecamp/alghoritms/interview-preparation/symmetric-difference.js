/*
Find the Symmetric DifferencePassed
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

function sym(...args) {
     if (Array.isArray(args)){    
          return args.reduce(calculateDifference);          
     }
}

const calculateDifference = (el1, el2) => {     
     let result =[];
     symmetricDifference(el1, el2, result);
     return result.sort();
}

function symmetricDifference(arr1, arr2, result){
     difference(arr1, arr2, result);
     difference(arr2, arr1, result);          
}

function difference(arr1, arr2, result){
     arr1.filter( function (element){
          checkExists(arr2, element) ? checkExists(result, element) ? result.push(element) : "" : ""
     })     
}

let checkExists = (arr, el) => arr.indexOf(el) === -1;
  
console.log(sym([1, 2, 3], [5, 2, 1, 4]) ) // [3,4,5]
console.log(sym([1, 2, 3], [5, 2, 1, 4])) //should contain only three elements
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])) //should return [3, 4, 5].
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])) // should contain only three elements.
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]))// should return [3, 4, 5].
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])) //should contain only three elements.
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])) //should return [1, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))// should contain only three elements.
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])) //should return [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])) //should contain only three elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])) //should return [2, 3, 4, 6, 7].






 
  
