/*
5. Напишите функцию JavaScript, чтобы проверить, является ли `input` массивом или нет.
Перейти к редактору
*/

function is_array(arr){
    return (Array.isArray(arr));
}

console.log(is_array('qwe'));
console.log(is_array([1, 2, 4, 0]));

