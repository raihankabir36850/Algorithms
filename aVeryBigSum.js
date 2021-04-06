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