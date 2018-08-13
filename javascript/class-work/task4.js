/*
4. Напишите программу JavaScript, чтобы рассчитать дни, оставшиеся
 до следующего Нового года.*/

function getRemainingDays(date) {
    function getCountDays(mouth) {
        let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return days[mouth];
    }

    let count = getCountDays(date.getMonth()) - date.getDate();

    for (let i = date.getMonth() + 1; i < 12; i++){
        count += getCountDays(i);
    }

    return count;
}

console.log(getRemainingDays(new Date()));

