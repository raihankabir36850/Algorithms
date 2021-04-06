// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    if (Math.abs(z - y) < Math.abs(z - x)) {
        return "Cat B"
    } else if (Math.abs(z - y) > Math.abs(z - x)) {
        return "Cat A"
    } else {
        return "Mouse C"
    }
}