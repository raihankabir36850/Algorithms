/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    const newArr = []
    const remDup = [...new Set(a)]
    remDup.forEach(item => {
        let count = 0;
        a.forEach(element => {
            if (item == element || item - element == 1) {
                count++;
            }
        })
        newArr.push(count)
    })
    return Math.max.apply(null, newArr)

}