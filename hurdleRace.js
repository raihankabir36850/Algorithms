// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    const maxNumber = Math.max.apply(null, height)
    return maxNumber < k ? 0 : Math.abs(maxNumber - k)
}