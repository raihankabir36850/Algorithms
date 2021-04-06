/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {

    let newArray = []
    keyboards.forEach(keyboard => {
        drives.forEach(drive => {
            if (keyboard + drive <= b) {
                newArray.push(keyboard + drive)
            }
        })
    })
    console.log(newArray.length)

    return newArray.length == 0 ? -1 : Math.max.apply(null, newArray)
}