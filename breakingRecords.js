//problem no:12
//name:Breaking the records
// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let hightestScore = scores[0]
    let lowestScore = scores[0]
    let hightestCount = 0
    let lowestCount = 0
    let arr = new Array;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > hightestScore) {
            hightestScore = scores[i];
            hightestCount += 1;
        }
        else if (scores[i] < lowestScore) {
            lowestScore = scores[i];
            lowestCount += 1
        }
    }
    return [hightestCount, lowestCount];
}


