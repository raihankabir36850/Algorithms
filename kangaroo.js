//problem no:11
//name:Number Line Jump
// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if (v1 > v2) {
        let remainder = (x2 - x1) % (v1 - v2)
        if (remainder == 0) {
            return 'YES'
        } else {
            return 'NO'
        }
    } else {
        return 'NO'
    }
}


