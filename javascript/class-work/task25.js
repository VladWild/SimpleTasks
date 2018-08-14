/*
25. Напишите функцию JavaScript для вычисления суммы значений в массиве
*/

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

let arr = [34, 657, 45, 546, 546, 23, 56, 56];
console.log(sum(arr));