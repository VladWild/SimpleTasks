/*
8. Напишите функцию JavaScript, которая инвертирует случай букв данной строки
и возвращает новую строку
*/

function getInvertStr(str) {
    return str.split('').reverse().reduce(function (sum, current) {
        return sum + current;
    }, '');
}

let str = 'What are you doing?';
console.log(getInvertStr(str));