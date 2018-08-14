/*
9. Напишите программу JavaScript для удаления повторяющихся строк
из строкового массива (игнорируйте чувствительность к регистру
*/

function getArrNotRepeatStr(str) {
    return str.filter(function (item, pos) {
            return str.indexOf(item) === pos;
        }
    );
}

let str = ['we', 'hn', 'we', 'kl', 'uh', 'uh'];
console.log(getArrNotRepeatStr(str));