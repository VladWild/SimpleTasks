/*
1. Напишите программу JavaScript для отображения текущего дня и времени в следующем формате.
*
* Sample Output: Today is: Friday.
* */

function getWeekDay(date) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'];
    return days[date.getDay()];
}

let date = new Date();

console.log("Today is: " + getWeekDay(date));