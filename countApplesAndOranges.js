
//problem no:10
//name:Apple and Orange
// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    for (let apple = 0; apple < apples.length; apple++) {
        if (apples[apple] + a >= s && apples[apple] + a <= t) {
            appleCount += 1;
        }
    }
    for (let orange = 0; orange < oranges.length; orange++) {
        if (oranges[orange] + b >= s && oranges[orange] + b <= t) {
            orangeCount += 1;
        }
    }
    console.log(`${appleCount}\n${orangeCount}`)
}


