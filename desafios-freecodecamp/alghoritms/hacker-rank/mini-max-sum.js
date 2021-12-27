/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

 */

let arr= [1,3,5,7,9]

function removeElement(arr, index){
    let result = arr.slice();
    result.splice(index,1);
    return result;
}

function miniMaxSum(arr) {
    const sum = (acc, el) => acc + el;
    const valuesCalculate = [];

    arr.forEach((element, index) => {
        let arrayWithoutElement = removeElement(arr, index);
        valuesCalculate.push(arrayWithoutElement.reduce(sum));
    });

    const calculateSmallValue = (acc, el) => acc <= el ? acc : el;
    const calculateGreaterValue = (acc, el) => acc >= el ? acc : el;
    const smaller = valuesCalculate.reduce(calculateSmallValue);
    const bigger = valuesCalculate.reduce(calculateGreaterValue);

    console.log(smaller, bigger);    
}

miniMaxSum(arr)