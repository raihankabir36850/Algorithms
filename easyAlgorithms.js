//problem no:01
//name: a very big sum 
// Complete the aVeryBigSum function below.
// only the algorithm is shown below
let sum = 0;
function aVeryBigSum(ar) {
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i]
    }
    return sum;
}


//problem no:02
//name:Diagonal Difference 
/*
 * Complete the 'diagonalDifference' function below.
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
    // Write your code here
    let firstDiagonalSum = 0;
    let secondDiagomalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        firstDiagonalSum += arr[i][i]
        secondDiagomalSum += arr[i][arr.length - 1 - i]
    }
    const diff = Math.abs(firstDiagonalSum - secondDiagomalSum)
    return diff;

}


//problem no:03
//name: staircase
// Complete the staircase function below.
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        var step = '';
        for (let j = 0; j < n; j++) {
            if (j < n - i) {
                step += ' ';
            } else {
                step += '#'
            }
        }
        console.log(step)
    }
}

//problem no:04
//problem:plus minus
// Complete the plusMinus function below.
function plusMinus(arr) {
    let zeroCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zeroCount++
        } else if (arr[i] > 0) {
            positiveCount++
        } else {
            negativeCount++
        }
    }
    const ratiopositive = (positiveCount / arr.length).toPrecision(7)
    console.log(ratiopositive)
    const rationegative = (negativeCount / arr.length).toPrecision(7)
    console.log(rationegative)
    const ratiozero = (zeroCount / arr.length).toPrecision(7)
    console.log(ratiozero)
}



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

