/*Task
Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

Example

In the array shown above, the maximum hourglass sum is  for the hourglass in the top left corner.

Input Format

There are  lines of input, where each line contains  space-separated integers that describe the 2D Array .

Constraints

Output Format

Print the maximum hourglass sum in .*/
const sum = [];
function hourGlassCalculate(arr){    
    
    let [ line1, line2, line3] = arr;
    const removeFirstElement = arr => arr.shift();
    calculate(line1, line2, line3);    
    removeFirstElement(arr);

    if (arr.length < 3){
        const greaterElement = (acc, el)=> Math.max(acc, el);
        return console.log(sum.reduce(greaterElement));
    }
    return hourGlassCalculate(arr);    
    
}
function calculate(line1, line2, line3) {
    const sumLines = (acc, el) => acc + el;
    for (let col = 0; col <= (line1.length - 3); col++) {
        let hourGlassLine1 = [line1[col], line1[col + 1], line1[col + 2]];
        let hourGlassLine2 = [0, line2[col + 1], 0];
        let hourGlassLine3 = [line3[col], line3[col + 1], line3[col + 2]];
        sum.push(hourGlassLine1.reduce(sumLines) + hourGlassLine2.reduce(sumLines) + hourGlassLine3.reduce(sumLines));
    }
}

hourGlassCalculate([
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]
  ]);