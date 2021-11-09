/**
 * Implement Quick Sort
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
 */

// //Swapping array elements via ES6 array destructuring
function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
  
  //Pivot function returns the fixed pivot point
  function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
      //Move all the small elements on the left 
      console.log(arr[i], arr[left], shift);
      if (arr[i] < arr[left]) swap(arr, i, ++shift);
      console.log(arr);
    }
  
    //Finally swapping the last element with the left
    swap(arr, left, shift);
    return shift;
  }
  
  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);
  
      //Recusrively calling the function to the left of the pivot and to the right of the pivot
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }
    return array;
  }

// function swap(index1, index2, arr){
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }

// function pivotIndex(array, left = 0, right = array.length - 1) {
//     let shift = left;
//     for (let index = left + 1; index <= right; index++) {
//         if (array[index] < array[left]) {
//             swap(index, ++ shift, array);
//         }        
//     }
//     swap(left, shift, array);
//     return shift
// }

// function quickSort(array, left = 0, right = array.length - 1) {
//     if (left < right){
//         let pivot = pivotIndex(array, left, right)
//         quickSort(array, left, pivot+1);    
//         quickSort(array, pivot + 1, right);    
//     }
//     return array;    
// }

console.log(quickSort([2,5,4,1,9]));



/**
 * quickSort should be a function.

quickSort should return a sorted array (least to greatest).

quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.

quickSort should not use the built-in .sort() method.
 */
