/*
14. Напишите функцию JavaScript для удаления определенного элемента из массива
*/

function getArray(arr, elem) {
    return arr.filter(function (item) {
        return item !== elem;
    })
}

arr = [78, 45, 89, 'ol', 67, 54, undefined, null];
console.log(arr);
console.log(getArray(arr, 89));

