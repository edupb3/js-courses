/*No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.*/



 

function permAlone2(str) {

  let arr = str.split("") ;
  let permutations = [];
  permutations.push(arr.join(""));
  return permutations;
  
}

const str = 'aab'
let indexAtual = str.length - 1;
function permuta(str){

  let indexTroca1 = indexAtual;
  let indexTroca2 = indexAtual - 1;
  let word = str  
  word = str.slice(0, 1) + str[indexTroca1] + str[indexTroca2]
  return word

}

function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/;

  // Split the string into an array of characters.
  var arr = str.split("");
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    console.log(`Swap: ${arr[index1]} e ${arr[index2]}`);
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
      //console.log(permutations);
    } else {
      for (var i = 0; i != int; ++i) {
        
        generate(int - 1);
        //console.log(`Valor de int: ${int} Valor de i: ${i}`);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
//permAlone("aab");
  
  console.log(permAlone('abc'));
 // console.log(permuta('aab'));



/*
permAlone("aab") should return a number.

permAlone("aab") should return 2.

permAlone("aaa") should return 0.

permAlone("aabb") should return 8.

permAlone("abcdefa") should return 3600.

permAlone("abfdefa") should return 2640.

permAlone("zzzzzzzz") should return 0.

permAlone("a") should return 1.

permAlone("aaab") should return 0.

permAlone("aaabb") should return 12.
*/ 