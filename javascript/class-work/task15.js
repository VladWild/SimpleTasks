/*
15. Напишите функцию JavaScript, чтобы получить случайный элемент из массива
*/

function getElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

arr = [78, 45, 89, 'ol', 67, 54, undefined, null];
console.log(getElem(arr));