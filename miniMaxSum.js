//problem no:06
//name:Mini-Max Sum
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let sum = 0;
    let bigNumber = 0;
    let smallNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > bigNumber) {
            bigNumber = arr[i]
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallNumber) {
            smallNumber = arr[i]
        }
    }
    let minimum = sum - bigNumber;
    let maximum = sum - smallNumber;
    console.log(minimum, maximum)
}