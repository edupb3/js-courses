/**
 * Implement Selection Sort
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */
let i = 0;
//const arrayUnOrderer = [5,3,18,25,9,4];
const arrayUnOrderer = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
function swap(index1, index2, arrayUnOrderer){
    let tmp = arrayUnOrderer[index1];
    arrayUnOrderer[index1] = arrayUnOrderer[index2];
    arrayUnOrderer[index2] = tmp;
    return arrayUnOrderer;
}

function selectionSort(array) {    
    for (let index = i; index < array.length; index++) {            
        array = array[i] > array[index] ? swap(i, index, array): array        
    }
    i++;
    if( i < array.length){
        selectionSort(array);
    }    
    return array;
  }

  console.log(selectionSort(arrayUnOrderer));


/**
 * selectionSort should be a function.

selectionSort should return a sorted array (least to greatest).

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.

selectionSort should not use the built-in .sort() method.
 */