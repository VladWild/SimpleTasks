/*
17. Напишите функцию JavaScript, чтобы получить разницу между двумя датами в днях
*/

function getDifferenceDays(date, date2) {
    return Math.ceil(Math.abs(date.getTime() - date2.getTime())
        / (1000 * 3600 * 24));
}

console.log(getDifferenceDays(new Date(), new Date(2011, 2, 1)));