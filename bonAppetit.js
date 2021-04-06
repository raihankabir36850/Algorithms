
//problem no:17
//name:Bill Division
//complete the Bill Division function below
function bonAppetit(bill, k, b) {
    let sum = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i == k) {
            sum = sum;
        } else {
            sum = sum + bill[i]
        }
    }
    const splitAmount = sum / 2;
    if (splitAmount == b) {
        console.log('Bon Appetit')
    } else {
        console.log(b - splitAmount);
    }
}

