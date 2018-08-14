/*
13. Напишите функцию JavaScript для объединения двух массивов
 и удалите все элементы дубликатов
*/

function getUnionArrayWithOutDuplicates(arr, arr2) {
    return arr.concat(arr2).filter(function (item, i, array) {
        return array.indexOf(item) === i;
    })
}

arr = [54, 6, 67, "", null, 8, 8, 0];
arr2 = [78, 45, 89, 'htyhty', 67, 54, undefined, null];

console.log(arr);
console.log(arr2);
console.log(getUnionArrayWithOutDuplicates(arr, arr2));