//problem no:15
//name:subarray division
//// Complete the subarray division function below.
function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum == d)
            count += 1;
    }
    return count;
}


