/*
23. Напишите функцию JavaScript, чтобы найти самое маленькое значение в массиве
*/

function min(arr) {
    return Math.min.apply(null, arr);
}

let arr = [34, 657, 45, 546, 546, 23, 56, 56];
console.log(min(arr));
