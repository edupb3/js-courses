/**
 * Implement Insertion Sort
The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */

//const arrayUnOrderer = [5,3,18,25,9,4];
//const arrayUnOrderer = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
const arrayUnOrderer = [5, 4, 33, 2, 8]
let i=0;
function swap(index1, index2, array){
    let tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
    return array;
}

function insertionSort(array) {
    for (let index = 0; index < array.length; index++) {            
        array = array[index] > array[index+1] ? swap(index, index+1, array): array        
    }   
    i++;
    i < array.length ? insertionSort(array) : "";           
    return array;
}

console.log(insertionSort(arrayUnOrderer));


/**
 * insertionSort should be a function.

insertionSort should return a sorted array (least to greatest).

insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.

insertionSort([5, 4, 33, 2, 8]) should return [2, 4, 5, 8, 33].

insertionSort should not use the built-in .sort() method.
 */