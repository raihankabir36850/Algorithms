/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(arr) {
    // Write your code here
    var index = 0;
    var count = 0;
    do {
        count++
        index = arr[index + 2] === 0 ? index + 2 : index + 1;
    }
    while (index < arr.length - 1)
    return (count)

}