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

