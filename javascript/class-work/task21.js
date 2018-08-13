/*
21. Напишите функцию JavaScript для преобразования строки в случай

Test Data :
    console.log(camelize("Java Script"));
    console.log(camelize("java-script"));
    console.log(camelize("Java Script Exercises"));
    "JavaScript"
    "javaScript"
    "JavaScriptExercises"
*/

function camelize(str){
    return str.split('').map(function(item, i , arr){
        return arr[i - 1] === ' ' || arr[i - 1] === '-' ? item.toUpperCase() : item;
    }).filter(function (item) {
        return item !== ' ' && item !== '-';
    }).reduce((a, b) => a + b,'');
}

console.log(camelize("Java Script"));
console.log(camelize("java-script"));
console.log(camelize("Java Script Exercises"));