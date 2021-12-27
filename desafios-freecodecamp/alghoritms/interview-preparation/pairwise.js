/***
 * Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6


 */

function pairwise(arr, arg) {
    const sum = (a, b) => a + b;
    const resultIndex = [];
    const result = [0];
    
    
    for(let position = 0; position <arr.length; position++){

        for(let i =0; i<arr.length; i++){
            if(position < i){
                if(sum(arr[position], arr[i]) === arg){          
                    let permitido = true
                    for(let a of resultIndex){
                        if (a.index1 === i || a.index2 === position || a.index1 ===position || a.index2 === i ){
                            permitido = false
                            break;
                        }
                    }
                    if(permitido){
                        resultIndex.push({
                            index1: i    ,
                            index2: position
                        });
                        result.push(position)
                        result.push(i)                    
                    }
                }
            }                                   
        }
    }
    
    
    
    return result.reduce(sum);
}
let ret;
ret = pairwise([1, 4, 2, 3, 0, 5], 7) //should return 11.
console.log(ret);

ret = pairwise([1, 3, 2, 4], 4) //should return 1.
console.log(ret);

ret =pairwise([1, 1, 1], 2) //should return 1.
console.log(ret);

ret = pairwise([0, 0, 0, 0, 1, 1], 1) //should return 10.
console.log(ret);

/**
 * ([0, 0, 0, 0, 1, 1], 1)
 * index 0  1   2   3   4   5
 * elem  0  0   0   0   1   1
 * index 0 + 4 = 4  
 * index 1 + 5 = 6   
 */




ret = pairwise([], 100) //should return 0.
console.log(ret);
   //** */