/*
3. Запишите программу JavaScript, чтобы найти 1 января воскресенье в период
 с 2014 по 2050 год.
 */

function getAllNewYearSundays(beginYear, endYear) {
    let sundays = [];
    const endDate = new Date(endYear, 0, 1);
    do{
        var currentDate = new Date(beginYear, 0, 1);
        if (currentDate.getDay() === 0) {
            sundays.push(currentDate);
        }
        beginYear++;
    } while (currentDate < endDate);
    return sundays;
}

const start = 2014;
const end = 2050;

console.log(getAllNewYearSundays(start, end));