/*
18. Напишите функцию JavaScript, чтобы получить максимальную дату из массива
dateTest Data:

    console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
    Output: "2015/02/02"
*/

function maxDate(arr){
    return arr.sort(function (date, date2) {
        return date > date2 ? -1 : date < date2 ? 1 : 0;
    })[0];
}

console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));