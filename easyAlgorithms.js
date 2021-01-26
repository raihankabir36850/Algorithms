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


//problem no:2
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

