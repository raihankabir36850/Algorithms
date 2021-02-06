//problem no:01
//name: a very big sum 
// Complete the aVeryBigSum function below.
// only the algorithm is shown below
let sum = 0;
function aVeryBigSum(ar) {
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i]
    }
    return sum;
}


//problem no:02
//name:Diagonal Difference 
/*
 * Complete the 'diagonalDifference' function below.
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
    // Write your code here
    let firstDiagonalSum = 0;
    let secondDiagomalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        firstDiagonalSum += arr[i][i]
        secondDiagomalSum += arr[i][arr.length - 1 - i]
    }
    const diff = Math.abs(firstDiagonalSum - secondDiagomalSum)
    return diff;
}


//problem no:03
//name: staircase
// Complete the staircase function below.
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        var step = '';
        for (let j = 0; j < n; j++) {
            if (j < n - i) {
                step += ' ';
            } else {
                step += '#'
            }
        }
        console.log(step)
    }
}


//problem no:04
//problem:plus minus
// Complete the plusMinus function below.
function plusMinus(arr) {
    let zeroCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zeroCount++
        } else if (arr[i] > 0) {
            positiveCount++
        } else {
            negativeCount++
        }
    }
    const ratiopositive = (positiveCount / arr.length).toPrecision(7)
    console.log(ratiopositive)
    const rationegative = (negativeCount / arr.length).toPrecision(7)
    console.log(rationegative)
    const ratiozero = (zeroCount / arr.length).toPrecision(7)
    console.log(ratiozero)
}


//problem no:05
//name:Birthday Cake Candles
/*
 * Complete the 'birthdayCakeCandles' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function birthdayCakeCandles(candles) {
    // Write your code here
    let tallestHeight = 0;
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > tallestHeight) {
            tallestHeight = candles[i]
        }
    }
    for (let j = 0; j < candles.length; j++) {
        if (candles[j] == tallestHeight) {
            count++
        }
    }
    return count;
}


//problem no:06
//name:Mini-Max Sum
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let sum = 0;
    let bigNumber = 0;
    let smallNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > bigNumber) {
            bigNumber = arr[i]
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallNumber) {
            smallNumber = arr[i]
        }
    }
    let minimum = sum - bigNumber;
    let maximum = sum - smallNumber;
    console.log(minimum, maximum)
}


//problem no:07
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


//problem no:08
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


//problem no:9
//name: grading students
function gradingStudents(grades) {
    // Write your code here
    let grade = new Array(grades.length);
    for (let x = 0; x < grades.length; x++) {
        if (grades[x] >= 39 && (grades[x] + 1) % 5 === 0) {
            grade[x] = grades[x] + 1
        } else if (grades[x] >= 38 && (grades[x] + 2) % 5 === 0) {
            grade[x] = grades[x] + 2
        } else {
            grade[x] = grades[x]
        }
    }
    return grade;
}
const re = gradingStudents([84, 83, 68, 98, 100, 10, 15]);
console.log(re);


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


// problem no:13
//name:Divisible Sum Pairs
// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let firstElement = 0; i < ar.length; firstElement++) {
        for (let secondElement = 1 + firstElement; j < ar.length; secondElement++) {
            if ((ar[firstElement] + ar[secondElement]) % k == 0) {
                count += 1;
            }
        }
    }
    return count;
}

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


//problem no:15
//name:subarray division
//// Complete the subarray division function below.
function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum == d)
            count += 1;
    }
    return count;
}


//problem no:16
//name:Day of the Programmer
// Complete the day of the programer function below
function dayOfProgrammer(year) {
    if (year >= 1700 && year <= 1917) {
        if (year % 4 == 0) {
            let dayCount = 12;
            let monthCount = 9;
            return `${dayCount}.0${monthCount}.${year}`

        } else {
            let dayCount = 13;
            let monthCount = 9;
            return `${dayCount}.0${monthCount}.${year}`
        }
    } else if (year == 1918) {
        let dayCount = 26;
        let monthCount = 9;
        return `${dayCount}.0${monthCount}.${year}`
    }
    else if (year >= 1919 && year <= 2700) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            let dayCount = 12;
            let monthCount = 9;
            return `${dayCount}.0${monthCount}.${year}`
        } else {
            let dayCount = 13;
            let monthCount = 9;
            return `${dayCount}.0${monthCount}.${year}`
        }
    }
}


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
