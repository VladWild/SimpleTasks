/*
10. Напишите программу JavaScript для перетасовки массива
*/

function getShuffleArr(arr) {
    let shuffleArr = [];
    var flag;
    for (let i = 0; i < arr.length; i++){
        do{
            flag = true;
            index = Math.floor(Math.random() * arr.length);
            if (shuffleArr[index] === undefined){
                shuffleArr[index] = arr[i];
                flag = false;
            }
        } while (flag)
    }
    return shuffleArr;
}

let arr = [5, 67, 23, 56, 456, 4, 67, 90, 36, 57];
console.log('Before: ' + arr);
console.log('After: ' + getShuffleArr(arr));
