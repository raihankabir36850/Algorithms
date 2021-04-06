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