/*
11. Напишите функцию JavaScript для удаления «null», «0», """", «false», «undefined»
 и «NaN» из массива
*/

function getArray(arr) {
    return arr.filter(function (item) {
        return item !== "";
    }).filter(function (item) {
        return item !== false;
    }).filter(function (item) {
        return !isNaN(item);
    }).filter(function (item) {
        return item !== 0;
    }).filter(function (item) {
        return item !== null;
    }).filter(function (item) {
        return item !== undefined;
    });
}

arr = [1, 6, "vr", "", 23, null, undefined, 78, 0, false, 'rfref', NaN];

console.log(arr);
console.log(getArray(arr));