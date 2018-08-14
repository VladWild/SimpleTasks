/*
24. Напишите функцию JavaScript, чтобы проверить, является ли переменная числовой или нет.
*/

function isNumber(number) {
    return typeof number === 'number';
}

console.log(isNumber('6'));
console.log(isNumber(6));