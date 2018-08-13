/*
22. Напишите функцию JavaScript, чтобы найти максимальное значение в массиве
*/

function max(arr) {
    return Math.max.apply(null, arr);
}

let arr = [34, 657, 45, 546, 546, 23, 56, 56];
console.log(max(arr));
