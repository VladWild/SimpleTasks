/*
7. Напишите функцию JavaScript, чтобы найти наиболее
часто используемый элемент массива
*/

function mostFrequentItem(arr) {
    var info = {
        elem: [],
        count: []
    }

    for (let i = 0; i < arr.length; i++){
        if (info.elem.indexOf( arr[i] ) === -1) {
            info.elem[info.elem.length] = arr[i];
            info.count[info.elem.length - 1] = 1;
        } else {
            info.count[info.elem.indexOf( arr[i] )]++;
        }
    }

    /*console.log(info.elem);
    console.log(info.count);*/

    return info.elem.indexOf(Math.max.apply(null, info.count));
}

let arr = [8, 7, 6, 4, 5, 6, 4, 7, 8, 4, 2, 4, 4];
console.log(mostFrequentItem(arr));