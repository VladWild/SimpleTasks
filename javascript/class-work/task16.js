/*
16. Напишите функцию JavaScript для перемещения элемента
 массива из одной позиции в другую
*/

function getArrayWithRebaseElem(arr, elem, pos) {
    if (arr.indexOf(elem) !== -1) {
        let indexPrev = arr.indexOf(elem);
        let value = arr[pos];
        let indexValue = arr.indexOf(value);
        arr[pos] = elem;
        arr[indexPrev] = value;
    }
    return arr;
}

arr = [78, 45, 89, 'ol', 67, 54, undefined, null];
console.log(arr);
console.log(getArrayWithRebaseElem(arr, 67, 7));