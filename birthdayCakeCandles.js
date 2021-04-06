//problem no:05
//name:Birthday Cake Candles
/*
 * Complete the 'birthdayCakeCandles' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function birthdayCakeCandles(candles) {
    // Write your code here
    let tallestHeight = 0;
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > tallestHeight) {
            tallestHeight = candles[i]
        }
    }
    for (let j = 0; j < candles.length; j++) {
        if (candles[j] == tallestHeight) {
            count++
        }
    }
    return count;
}