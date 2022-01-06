/**Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation. When working with different bases, it is common to show the base as a subscript. */

function main(n) {
    
    const binary = n.toString(2);    
    //console.log(binary);
    const binArray = binary.split("");
    let sum = 0;
    const result = [];
    binArray.forEach((element, index) => {
        if (element == 1){            
            sum++;
        }
        if(element == 0){
            result.push(sum);
            sum = 0;
        }
        if (index + 1 === binArray.length){
            result.push(sum);
        }
    });
    const maxNumber = (acc, el) => Math.max(acc, el);
    console.log(result.reduce(maxNumber));
}
main(55)