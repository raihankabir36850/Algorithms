
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