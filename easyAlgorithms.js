//name:find out 5 power of base 3
//and it's concept of higher order function
//complete the algorithm
function base(b) {
    return function (n) {
        let result = 1;
        for (let i = 0; i < b; i++) {
            result *= n;
        }
        return result;
    }
}
var power = base(3)
var result = power(5)
console.log(result)


//name: piramid problem
//complete the function
function main(n) {
    var midPoint = (2 * (n - 1)) / 2;
    var columnIndex = (2 * n) - 1;
    for (let row = 0; row < n; row++) {
        let step = ''
        for (column = 0; column < columnIndex; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                step += 'H'
            } else {
                step += ' '
            }
        }
        console.log(step)
    }
}
main(10)


