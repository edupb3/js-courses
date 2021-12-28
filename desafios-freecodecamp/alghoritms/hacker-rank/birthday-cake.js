// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.


function birthdayCakeCandles(candles) {
    
    const candlesTallest = candles.reduce((acc, el) => {
        return acc > el ? acc : el;
    }, 0)
    const candlesCountTallest = candles.filter(el => el >= candlesTallest);    
    return candlesCountTallest.length;
}

console.log(birthdayCakeCandles([4, 4, 1, 3]))