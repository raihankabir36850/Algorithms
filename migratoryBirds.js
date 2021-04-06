//problem no:14
//name:Migratory Birds
// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let array = [];
    let type = 1;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == type) {
                count += 1;
            }
        }
        array.push(count)
        type += 1;
    }
    let highest = array[0]
    let typeno = 1
    for (let k = 1; k <= array.length; k++) {
        if (array[k] > highest) {
            highest = array[k]
            typeno = 1 + k;
        } else if (array[k] == highest) {
            typeno = typeno
        }
    }
    console.log(typeno)
}
const su = migratoryBirds([1, 3, 1, 2]);


