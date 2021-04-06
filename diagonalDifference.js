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