/**Given an array, , of size  distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following  lines:

Array is sorted in numSwaps swaps.
where  is the number of swaps that took place.
First Element: firstElement
where  is the first element in the sorted array.
Last Element: lastElement
where  is the last element in the sorted array.
Hint: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during execution. */

function swap(index1, index2, arr){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

const sum = (acc, el) => acc + el;

const sortArray = (quantity, elements) => {
    const swaps = [];
    let quantitySwaps = 0;
    
    for (let i=0; i < quantity; i++){
        for (let j=0; j < quantity - 1; j++){
            
            if(elements[j] > elements[j+1]){
                swap(j, j+1, elements);
                quantitySwaps++;
            }  
        }
        swaps.push(quantitySwaps);
        quantitySwaps = 0;
    }
    console.log(`Array is sorted in ${swaps.reduce(sum)} swaps`);
    console.log(`First element: ${elements[0]}`);
    console.log(`Last element: ${elements[quantity-1]}`);
}

sortArray(4, [4, 3, 1, 2 ]);