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

