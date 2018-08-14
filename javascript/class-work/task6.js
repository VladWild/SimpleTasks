/*
6. Напишите функцию JavaScript для клонирования массива
*/

function cloneArray(arr) {
    return arr.slice();
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(cloneArray(arr));