//problem no:18
//name:Counting Valleys
//complete the Counting Valleys function below

function countingValleys(steps, path) {
    // Write your code here
    let valleyCount = 0;
    let downCount = 0;
    let upCount = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] == 'D') {
            downCount++;
            if (upCount - downCount == 0) {
                upCount = 0;
                downCount = 0;
            }
        } else {
            upCount++
            if (downCount - upCount == 0) {
                valleyCount++;
            }
        }
    }
    return valleyCount;
}
