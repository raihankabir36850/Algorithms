// problem no:13
//name:Divisible Sum Pairs
// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let firstElement = 0; i < ar.length; firstElement++) {
        for (let secondElement = 1 + firstElement; j < ar.length; secondElement++) {
            if ((ar[firstElement] + ar[secondElement]) % k == 0) {
                count += 1;
            }
        }
    }
    return count;
}

